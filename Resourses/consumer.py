import pika
from plotData import plotData


connection_parameter = pika.ConnectionParameters(host = 'localhost')
connection = pika.BlockingConnection(connection_parameter)

channel = connection.channel()
channel.queue_declare(queue='letterbox')

def onMessageReceived(ch, method, properties, body):
    print("Received new message: ", body)
    print(body)
    plotData()


channel.basic_consume (queue = 'letterbox', on_message_callback = onMessageReceived, auto_ack = True)

print('Waiting for messages')
channel.start_consuming()