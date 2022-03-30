import pika
import json
# from Resourses.consumer import callback

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host = 'localhost')
)    

channel = connection.channel()

def start_producer():
    print("Coming and creating plotting from function")
    channel.queue_declare(queue = 'plotting')

def send_file(objectName):

    print("Sending message...")
    channel.basic_publish(exchange = '', routing_key = 'plotting', body = json.dumps(objectName))
    # channel.close()
        

