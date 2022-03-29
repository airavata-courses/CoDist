import pika
# from Resourses.consumer import callback

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host = 'localhost')
)    

channel = connection.channel()

def send_file(message):

    print('File is: ', message)
    channel.queue_declare(queue = 'plotting')

    channel.basic_publish(exchange = '', routing_key = 'plotting', body = "Hello world!")



# channel.close()

