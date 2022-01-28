package com.dataingestor.dataingestor.service;

import com.dataingestor.dataingestor.config.MessagingConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;


import java.io.IOException;
import java.util.concurrent.TimeoutException;

@Service
@Profile("send")
public class Send {
    static Logger logger
            = LoggerFactory.getLogger(Send.class);

    @Autowired
    public RabbitTemplate template;

//    public void Send_Message(String year, String month, String day, String station)
    public void Send_Message(Object info)
    throws IOException, TimeoutException {
        System.out.println("Function called" + info);
//        ConnectionFactory factory = new ConnectionFactory();
//        factory.setHost("localhost");
//        Connection connection = factory.newConnection();
//        Channel channel = connection.createChannel();
//        channel.queueDeclare(MessagingConfig.QUEUE,
//                false,
//                false,
//                false,
//                null);
//        String message = "Welcome to RabbitMQ " + year + " " + month + " " + day + " " + station;
//        channel.basicPublish("",
//                QUEUE,
//                null,
//                message.getBytes("UTF-8")
//        );
//        InputStatus status = new InputStatus(link);
        template.convertAndSend(MessagingConfig.EXCHANGE, MessagingConfig.ROUTING_KEY, info);
        logger.debug("[!] Sent '" + info);
//        channel.close();
//        connection.close();
    }
}