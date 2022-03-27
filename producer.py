import pika
import json

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host = 'localhost')
)

channel = connection.channel()

message = {"year" : "2022",
    "month" : "01",
    "day" : "29",
    "hour" : "10",
    "minute" : "10",
    "second" : "10",
    "station" : "KIND"
}
channel.queue_declare(queue = 'hello')

channel.basic_publish(exchange = '', routing_key = 'hello', body = json.dumps(message))

channel.close()