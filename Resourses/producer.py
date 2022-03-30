import pika
import json
# from Resourses.consumer import callback

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host = 'localhost')
)    

channel = connection.channel()

def send_file(objectName):

    channel.queue_declare(queue = 'plotting')
    channel.basic_publish(exchange = '', routing_key = 'plotting', body = json.dumps(objectName))


