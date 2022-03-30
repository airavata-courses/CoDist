import pika
import json

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host = 'localhost')
)    

channel = connection.channel()

def start_producer():
    print("Creating queue plotting_resend")
    channel.queue_declare(queue = 'plotting_resend')
    
def send_response(message):
    channel.basic_publish(exchange = '', routing_key = 'plotting_resend', body = json.dumps(message))
    # channel.close()

