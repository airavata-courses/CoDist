import logging
import boto3
import cloudinary
from decouple import config
from botocore.exceptions import ClientError
import os
from dotenv import load_dotenv

def upload_csv(file):
    
    base = os.path.dirname(os.path.abspath(file))
    dotenv_path = os.path.join(base, '.env') 
    load_dotenv(dotenv_path)  

    s3_client = boto3.client('s3',
            aws_access_key_id = os.getenv("ACCESS_KEY"),
            aws_secret_access_key = os.getenv("SECRET_KEY")
            )
    try:
        response = s3_client.upload_file(file, 'project3-outputs', file)
        print(response)
    except ClientError as e:
        logging.error(e)

    return file
