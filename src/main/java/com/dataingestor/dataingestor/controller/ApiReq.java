package com.dataingestor.dataingestor.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeoutException;

import com.dataingestor.dataingestor.service.Send;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import model.SearchLink ;

@RestController
public class ApiReq {
    private static Map<String, String> linkParams = new HashMap<>();

    @Autowired
    public Send send;
    @PostMapping(value = "/userInput")
    public ResponseEntity<Object> createLink(@RequestBody SearchLink link) throws IOException, TimeoutException {
        linkParams.put("day", link.day);
        linkParams.put("month", link.month);
        linkParams.put("year", link.year);
        linkParams.put("station", link.station);

        System.out.println("Request sent");
        System.out.println("link.station:" + link.station);
        send.Send_Message(link.year, link.month, link.day, link.station);
        return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
    }

//    @RequestMapping(value = "/userInput", method = RequestMethod.POST)
//    public ResponseEntity<Object> createProduct(@RequestBody SearchLink link) {
//        linkParams.put("day", link.day);
//        linkParams.put("month", link.month);
//        linkParams.put("year", link.year);
//        linkParams.put("station", link.station);
//        return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
//    }
}




