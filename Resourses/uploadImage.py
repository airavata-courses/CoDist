import logging
import boto3
import cloudinary
from decouple import config
from botocore.exceptions import ClientError

cloudinary.config( 
  cloud_name = config('CLOUDINARY_CLOUD_NAME'), 
  api_key = config('CLOUDINARY_API_KEY'), 
  api_secret = config('CLOUDINARY_API_SECRET') 
)

def upload_csv(file):

    print("Uploading to S3...")
    s3_client = boto3.client('s3')
    try:
        response = s3_client.upload_file(file, 'project3-outputs', file)
        print(response)
    except ClientError as e:
        logging.error(e)

    return file
