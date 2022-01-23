# Source: https://unidata.github.io/python-gallery/examples/Nexrad_S3_Demo.html#plot-the-data

import boto3
import botocore
from botocore.client import Config
import matplotlib.pyplot as plt
from metpy.io import Level2File
from metpy.plots import add_timestamp, ctables
from mpl_toolkits.axes_grid1 import make_axes_locatable
import numpy as np

__file__ = "KMHX20140703_182118_V06.gz"
f = Level2File(__file__)
# print(f.sweeps[0])

sweep = 0
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

for var_data, var_range, colors, lbl, ax in zip((ref, rho, zdr, phi),
                                                (ref_range, rho_range, zdr_range, phi_range),
                                                (ref_cmap, 'plasma', 'viridis', 'viridis'),
                                                ('REF (dBZ)', 'RHO', 'ZDR (dBZ)', 'PHI'),
                                                axes.flatten()):
    try:
        print(f'{var_data}, {var_range}, {colors}, {lbl}, {ax}')
        # continue
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
    except ValueError as e:
        print(f"Value Error raised e: {e}")

plt.suptitle('KVWX Level 2 Data', fontsize=20)
plt.tight_layout()
plt.show()

plt.close()



# SOURCE: https://nexradaws.readthedocs.io/en/latest/Tutorial.html#Working-with-LocalNexradFile-objects
# import matplotlib.pyplot as plt
# import nexradaws
# import pyart

# __fileName__ = "KMHX20140703_182118_V06.gz"
# __filePath__ = "C:\IUB\Applied_Distributed_System\Project_1\CoDist\KMHX20140703_182118_V06.gz"
# results = nexradaws.resources.localnexradfile.LocalNexradFile(__fileName__, __filePath__)

# fig = plt.figure(figsize=(16,12))

# ax = fig.add_subplot(2,2,1)
# radar = results.open_pyart()
# display = pyart.graph.RadarDisplay(radar)
# display.plot('reflectivity',0,ax=ax,title="{} {}".format(results.radar_id,results.scan_time))
# display.set_limits((-150, 150), (-150, 150), ax=ax)

