import pika
import json

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host = 'localhost')
)    

channel = connection.channel()

def send_response(message):

    channel.queue_declare(queue = 'plotting_resend')

    channel.basic_publish(exchange = '', routing_key = 'plotting_resend', body = json.dumps(message))

    # channel.close()

