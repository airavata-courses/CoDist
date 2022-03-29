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

    # If S3 object_name was not specified, use file_name
    # if object_name is None:
    #     object_name = os.path.basename(file_name)

    # Upload the file

    result = uploader.upload(file)
    return result

    # s3_client = boto3.client('s3')
    # try:
    #     response = s3_client.upload_file(file, 'project3-outputs', 'image2')
    #     print(response)
    # except ClientError as e:
    #     logging.error(e)
    #     return False
    # return response