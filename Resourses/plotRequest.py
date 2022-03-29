from flask_restful import Resource
from flask import jsonify, request
from Resourses.ingester import fetchdata
from Resourses.plotdata import plot
from Resourses.uploadImage import upload_file
# from Resourses.dataConversion import dataConversion
from Resourses.producer import send_file
import pika
import json

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host = 'localhost')
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
        station = getData["station"]
        hour = getData["year"]
        minute = getData["minute"]
        second = getData["second"]

        getValue = {
            "year" : year,
            "month" : month,
            "day" : day,
            "station" : station,
            "hour" : hour,
            "minute" : minute,
            "second" : second
        }

        file = fetchdata(getValue)
        send_file(file)

        print('geting file: ', file)

        def callback(ch, method, properties, body):
            print("Received: ", body)
            global resp
            resp = body
            print(body)
            channel.stop_consuming()
            return resp

        channel.basic_consume (queue = 'plotting_resend', on_message_callback = callback, auto_ack = True)
        print('Came here above start consuming')

        channel.start_consuming()
        print('Came here below start consuming')
        response = json.loads(resp)
        print('resp is: ', json.loads(resp))
        
        # filenew = dataConversion(file)
        # print('file has been converted')
        # image = plot('tryingHard')
        # response = upload_file(image)

        return jsonify(response)
        # return jsonify(body)