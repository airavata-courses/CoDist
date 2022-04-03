from netCDF4 import Dataset
import os
import os
from netCDF4 import Dataset
import numpy as np

def dataConversion(file, hour):

    print("Converging data...")

    hour = int(hour)
    data = Dataset(file, mode='r')
    print(data)
    lons = data.variables['lon'][:]
    lats = data.variables['lat'][:]
    T2M = data.variables['TLML'][:,:,:]
    T2M = T2M[hour,:,:]

    filename = file + ".csv"

    csv = np.array(T2M)

    np.savetxt(filename, csv,delimiter=",")
    data.close()
    
    os.remove(file)
    print('DELETED')

    return filename


