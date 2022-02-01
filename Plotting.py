# Source: https://unidata.github.io/python-gallery/examples/Nexrad_S3_Demo.html#plot-the-data


from botocore.client import Config
import matplotlib.pyplot as plt
from metpy.io import Level2File
from metpy.plots import add_timestamp, ctables
from mpl_toolkits.axes_grid1 import make_axes_locatable
import numpy as np
import os
import nexradaws
import datetime
import asyncio
from deleteFiles import deleteLocalFiles
from uploadImages import uploadImage


async def getPlottingDataController( filters ):
    # print(filters)
    year = filters['year']
    month = filters['month']
    day = filters['day']
    STATION = filters['station']
    hour = filters['hour']
    minute = filters['minute']
    second = filters['second']

    """ABSOLUTES"""
    DirectoryPath = os.path.dirname(os.path.abspath(__file__)) 

    """MAKING AN END TIME"""
    # Convert Input String to int

    current = datetime.datetime(int(year), int(month), int(day), int(hour), int(minute), int(second) )
    start = current - datetime.timedelta(days=1)

    """Downloading the latest available file"""

    conn = nexradaws.NexradAwsInterface()

    scans = conn.get_avail_scans_in_range(start, current, STATION)

    toBeDownloaded = scans[-1]
    # File to be downloaded is scans[-1]
    # pdb.set_trace()
    dataFileName = toBeDownloaded.key.split("/")[-1]

    results = conn.download(toBeDownloaded, DirectoryPath)

    for scan in results.iter_success():
        print ("{} volume scan time {}".format(scan.radar_id,scan.scan_time ))

    """CODE FOR PLOTTING"""
    try:
        f = Level2File(dataFileName)
    except:
        print("Error in File Reading")


    sweep = 0
    try:
        # First item in ray is header, which has azimuth angle
        az = np.array([ray[0].az_angle for ray in f.sweeps[sweep]])

        ref_hdr = f.sweeps[sweep][0][4][b'REF'][0]
        ref_range = np.arange(ref_hdr.num_gates) * ref_hdr.gate_width + ref_hdr.first_gate
        ref = np.array([ray[4][b'REF'][1] for ray in f.sweeps[sweep]])

        rho_hdr = f.sweeps[sweep][0][4][b'RHO'][0]
        rho_range = (np.arange(rho_hdr.num_gates + 1) - 0.5) * rho_hdr.gate_width + rho_hdr.first_gate
        rho = np.array([ray[4][b'RHO'][1] for ray in f.sweeps[sweep]])

        phi_hdr = f.sweeps[sweep][0][4][b'PHI'][0]
        phi_range = (np.arange(phi_hdr.num_gates + 1) - 0.5) * phi_hdr.gate_width + phi_hdr.first_gate
        phi = np.array([ray[4][b'PHI'][1] for ray in f.sweeps[sweep]])

        zdr_hdr = f.sweeps[sweep][0][4][b'ZDR'][0]
        zdr_range = (np.arange(zdr_hdr.num_gates + 1) - 0.5) * zdr_hdr.gate_width + zdr_hdr.first_gate
        zdr = np.array([ray[4][b'ZDR'][1] for ray in f.sweeps[sweep]])


        # Get the NWS reflectivity colortable from MetPy
        ref_norm, ref_cmap = ctables.registry.get_with_steps('NWSReflectivity', 5, 5)

        # Plot the data!
        fig, axes = plt.subplots(2, 2, figsize=(15, 15))
    except Exception as e:
        print("Error while arranging Data configuration",e)


    for var_data, var_range, colors, lbl, ax in zip((ref, rho, zdr, phi),
                                                    (ref_range, rho_range, zdr_range, phi_range),
                                                    (ref_cmap, 'plasma', 'viridis', 'viridis'),
                                                    ('REF (dBZ)', 'RHO', 'ZDR (dBZ)', 'PHI'),
                                                    axes.flatten()):
        try:
            # Turn into an array, then mask
            data = np.ma.array(var_data)
            data[np.isnan(data)] = np.ma.masked

            # Convert az,range to x,y
            xlocs = var_range * np.sin(np.deg2rad(az[:, np.newaxis]))
            ylocs = var_range * np.cos(np.deg2rad(az[:, np.newaxis]))

            # Define norm for reflectivity
            norm = ref_norm if colors == ref_cmap else None

            # Plot the data
            a = ax.pcolormesh(xlocs, ylocs, data, cmap=colors, norm=norm)

            divider = make_axes_locatable(ax)
            cax = divider.append_axes('right', size='5%', pad=0.05)
            fig.colorbar(a, cax=cax, orientation='vertical', label=lbl)

            ax.set_aspect('equal', 'datalim')
            ax.set_xlim(-100, 100)
            ax.set_ylim(-100, 100)
            add_timestamp(ax, f.dt, y=0.02, high_contrast=False)
        except Exception as e:
            print(f"Exception raised e: {e}")


    plt.suptitle('KVWX Level 2 Data', fontsize=20)
    plt.tight_layout()

    """
    NAMING CONVENTIONS:
    LOCAL PLOT IMAGE:
    <USER_NAME>_<USER_ID>_<DATAFILENAME> + ".png"
    Example: ADITYA/1/KMHX20140703_182118_V06.png

    AWS PLOT IMAGE:
    <USER_NAME>/<USER_ID>/<DATAFILENAME> + ".png"
    Example: ADITYA/1/KMHX20140703_182118_V06.png


    """

    pltLocalFileName = str("local") + "_" + dataFileName + ".png"

    plt.savefig(pltLocalFileName, bbox_inches='tight')

    ### CODE TO UPLOAD TO S3 Bucket.
    done, pending = await asyncio.wait([uploadImage(pltLocalFileName, dataFileName)])

    for t in done:
        result = t.result()

    ### CODE FOR DELETING THE DOWNLOADED FILE.
    deleteLocalFiles( dataFileName, pltLocalFileName )

    return result
