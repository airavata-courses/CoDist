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
from dotenv import load_dotenv


def plot(body):

    objectName = body
    base = os.path.dirname(os.path.abspath(body))
    dotenv_path = os.path.join(base, '.env') 
    load_dotenv(dotenv_path)  

    s3 = boto3.client('s3',
            aws_access_key_id = os.getenv("ACCESS_KEY"),
            aws_secret_access_key = os.getenv("SECRET_KEY")
            )
    
    s3 = boto3.client('s3', aws_access_key_id = os.getenv("ACCESS_KEY"), aws_secret_access_key = os.getenv("SECRET_KEY"))
    s3.download_file('project3-outputs', objectName, objectName)

    data = loadtxt(objectName, delimiter=',')
    print("Image DOWNLOADED FROM S3")
    fig = plt.figure(figsize=(8,4))
    plt.imshow(data, interpolation='none')
    imagename  = objectName[:-4]+".png"
    fig.savefig(imagename, format='png', dpi=360)
    return imagename
