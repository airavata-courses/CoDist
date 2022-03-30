import numpy as np
from netCDF4 import Dataset
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import os
from rasterio.plot import show
import rasterio as rio
from numpy import loadtxt
import boto3
import json

def plot(body):

    objectName = body

    os.chdir('/Users/chinmay/Desktop/Courses/SEM2/ADS/plotting Service')
    
    s3 = boto3.client('s3')
    s3.download_file('project3-outputs', objectName, objectName)

    data = loadtxt(objectName, delimiter=',')

    fig = plt.figure(figsize=(8,4))
    plt.imshow(data, interpolation='none')
    
    plt.show()
    imagename  = objectName[:-4]+".png"

    fig.savefig(imagename, format='png', dpi=360)

    # os.remove(objectName)

    return imagename
