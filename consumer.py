import pika
from plotData import plot
from uploadImage import upload_file
from producer import send_response, start_producer
import os
import json
from getPath import getEnvPath
from dotenv import load_dotenv
 
load_dotenv(getEnvPath())


start_producer()

credentials = pika.PlainCredentials( os.getenv("RABBITMQ_USER") , os.getenv("RABBITMQ_PASSWORD") )

parameters = pika.ConnectionParameters( os.getenv("RABBITMQ_HOST") ,
                                   os.getenv("RABBITMQ_PORT") ,
                                   '/',
                                   credentials)

connection = pika.BlockingConnection(parameters)

channel = connection.channel()

def plotback(ch, method, properties, body):

    body = json.loads(body)
    
    print("Received: ", body)
    object = body['objectName']
    imagename = plot(object)
    response = upload_file(imagename, body['userId'])
    
    os.remove(imagename)
    os.remove(object)
    
    print("generated response: ", response)
    send_response(response)


channel.basic_consume (queue = 'plotting', on_message_callback = plotback, auto_ack = True)

print('Waiting for messages')
channel.start_consuming()