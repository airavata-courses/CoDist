import pika

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host = 'localhost')
)

channel = connection.channel()

def callback(ch, method, properties, body):
    # print("Received %r " % body)
    print("Received: ", body)


channel.basic_consume (queue = 'hello', on_message_callback = callback, auto_ack = True)

print('Waiting for messages')
channel.start_consuming()