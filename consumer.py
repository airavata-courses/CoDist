import pika
from plotData import plot
from uploadImage import upload_file
from producer import send_response, start_producer
import os
import json


start_producer()

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host = 'localhost')
)

channel = connection.channel()

def plotback(ch, method, properties, body):

    body = json.loads(body)
    print("Received: ", body)
    object = body['objectName']
    imagename = plot(object)
    response = upload_file(imagename)
    
    os.remove(imagename)
    os.remove(object)
    
    print("generated response: ", response)
    send_response(response)


channel.basic_consume (queue = 'plotting', on_message_callback = plotback, auto_ack = True)

print('Waiting for messages')
channel.start_consuming()