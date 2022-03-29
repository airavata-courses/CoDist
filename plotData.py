import numpy as np
from netCDF4 import Dataset
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import os

def plot(file):
    os.chdir('C:/Users/parna/Applied Distributed Systems/Project/merra-plotting-service-actual')
    data = Dataset(file, mode='r')
    lons = data.variables['lon'][:]
    lats = data.variables['lat'][:]
    T2M = data.variables['TLML'][:,:,:]  #surface specific humidity 
    T2M = T2M[0,:,:]


    fig = plt.figure(figsize=(8,4))
    ax = plt.axes(projection=ccrs.Robinson())
    ax.set_global()
    ax.coastlines(resolution="110m",linewidth=1)
    ax.gridlines(linestyle='--',color='black')

    # Set contour levels, then draw the plot and a colorbar
    clevs = np.arange(230,311,5)
    plt.contourf(lons, lats, T2M, clevs, transform=ccrs.PlateCarree(),cmap=plt.cm.jet)
    plt.title('MERRA-2 Air Temperature at 2m, January 2010', size=14)
    cb = plt.colorbar(ax=ax, orientation="vertical", pad=0.02, aspect=16, shrink=0.8)
    cb.set_label('K',size=12,rotation=0,labelpad=15)
    cb.ax.tick_params(labelsize=10)

    fig.savefig('plottedimage.png', format='png', dpi=360)

    return 'plottedimage.png'