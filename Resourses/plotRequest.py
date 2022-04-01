import asyncio
from flask_restful import Resource
from flask import jsonify, request
from Resourses.ingester import fetchdata
from Resourses.plotdata import plot
from Resourses.uploadFile import upload_csv
from Resourses.dataConversion import dataConversion
from Resourses.producer import send_file
# from Resourses.validations import apiValidator
from cloudinary import api
import cloudinary
from decouple import config

import pika
import json
from dotenv import load_dotenv
import os
from getPath import getEnvPath
 
# dotenv_path = os.path.join("../", os.path.dirname(__file__), '.env')  # Path to .env file
load_dotenv(getEnvPath())

credentials = pika.PlainCredentials( os.getenv("RABBITMQ_USER") , os.getenv("RABBITMQ_PASSWORD") )

parameters = pika.ConnectionParameters( os.getenv("RABBITMQ_HOST") ,
                                   os.getenv("RABBITMQ_PORT") ,
                                   '/',
                                   credentials)

connection = pika.BlockingConnection(parameters)

cloudinary.config( 
  cloud_name = config('CLOUDINARY_CLOUD_NAME'), 
  api_key = config('CLOUDINARY_API_KEY'), 
  api_secret = config('CLOUDINARY_API_SECRET') 
)

channel = connection.channel()

class plotData(Resource):
    def get(self):
        return "Ping pong"
    
    def post(self):

        getData = request.get_json()
        year = getData["year"]
        month = getData["month"]
        day = getData["day"]
        userId = getData["userId"].replace('"','')
        hour = getData["hour"]
        minute = getData["minute"]
        second = getData["second"]

        getValue = {
            "year" : year,
            "month" : month,
            "day" : day,
            "userId" : userId,
            "hour" : hour,
            "minute" : minute,
            "second" : second
        }

        prefix = year + '-' + month + '-' + day
        resources = api.resources(prefix = "Images/" + userId + "/" + prefix, type = "upload")
        resources_check = resources['resources']
        print('we got userid: ',userId)
        if len(resources_check) > 0:
            response = resources_check[0]
            return jsonify(response)

        file = fetchdata(getValue)
        file = dataConversion(file, hour)
        file = upload_csv(file)
        s3_object_name = { 'objectName' : file, "userId": userId }
        send_file(s3_object_name)

        
        def callback(ch, method, properties, body):
            print("Received: ", body)
            global resp
            resp = body
            print(body)
            os.remove(file)
            channel.stop_consuming()
            return resp

        channel.basic_consume (queue = 'plotting_resend', on_message_callback = callback, auto_ack = True)
        print('Came here above start consuming')

        channel.start_consuming()
        print('Came here below start consuming')
        response = json.loads(resp)
        print('resp is: ', json.loads(resp))

        return jsonify(response)