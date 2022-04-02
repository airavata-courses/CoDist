import pika
import json
from dotenv import load_dotenv
import os
from getPath import getEnvPath


# dotenv_path = os.path.join( os.path.dirname(__file__) , '.env')  # Path to .env file
load_dotenv(getEnvPath())

credentials = pika.PlainCredentials( os.getenv("RABBITMQ_USER") , os.getenv("RABBITMQ_PASSWORD") )

parameters = pika.ConnectionParameters( os.getenv("RABBITMQ_HOST") ,
                                   os.getenv("RABBITMQ_PORT") ,
                                   '/',
                                   credentials, heartbeat=10000)

connection = pika.BlockingConnection(parameters)

channel = connection.channel()

def start_producer():
    print("Coming and creating plotting from function")
    channel.queue_declare(queue = 'plotting')

def send_file(objectName):

    print("Sending message...")
    channel.basic_publish(exchange = '', routing_key = 'plotting', body = json.dumps(objectName))
    # channel.close()
        

