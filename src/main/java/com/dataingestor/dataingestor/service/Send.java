package com.dataingestor.dataingestor.service;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

@Service
@Profile("send")
public class Send {
    static Logger logger
            = LoggerFactory.getLogger(Send.class);

    private final static String QUEUE_NAME = "hello";

    public void Send_Message(String year, String month, String day, String station)
            throws IOException, TimeoutException {
        System.out.println("Function called");
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        Connection connection = factory.newConnection();
        Channel channel = connection.createChannel();
        channel.queueDeclare(QUEUE_NAME,
                false,
                false,
                false,
                null);
        String message = "Welcome to RabbitMQ " + year + " " + month + " " + day + " " + station;
        channel.basicPublish("",
                QUEUE_NAME,
                null,
                message.getBytes("UTF-8"));
        logger.debug("[!] Sent '" + message);
        channel.close();
        connection.close();
    }
}