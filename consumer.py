import pika
from plotData import plot
from uploadImage import upload_file
from producer import send_response

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host = 'localhost')
)

channel = connection.channel()

def plotback(ch, method, properties, body):
    # print("Received %r " % body)
    print("Received: ", body)
    image = plot('tryingHard')
    response = upload_file(image)
    print("generated response: ", response)
    send_response(response)


channel.basic_consume (queue = 'plotting', on_message_callback = plotback, auto_ack = True)

print('Waiting for messages')
channel.start_consuming()