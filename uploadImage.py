import logging
import boto3
import cloudinary
from cloudinary import uploader
from decouple import config
from botocore.exceptions import ClientError
import os

cloudinary.config( 
  cloud_name = config('CLOUDINARY_CLOUD_NAME'), 
  api_key = config('CLOUDINARY_API_KEY'), 
  api_secret = config('CLOUDINARY_API_SECRET') 
)


def upload_file(file):

    result = uploader.upload(file, use_filename=True, folder="Images")
    return result