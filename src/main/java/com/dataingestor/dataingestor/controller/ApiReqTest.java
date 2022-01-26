package com.dataingestor.dataingestor.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import model.SearchLink ;

//XML Imports
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

//@RestController
//public class ApiReqTest {
//    private static Map<String, String> linkParams = new HashMap<>();
//
//    @RequestMapping(value = "/userInput", method = RequestMethod.POST)
//    public ResponseEntity<Object> createProduct(@RequestBody SearchLink link) {
//        linkParams.put("day", link.day);
//        linkParams.put("month", link.month);
//        linkParams.put("year", link.year);
//        linkParams.put("station", link.station);
//        return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
//    }
//}

//public class ApiReqTest {
//    public static void main(String[] args) {
//        ApiReqTest oobj_Test_HTTP_XML=new ApiReqTest();
//        oobj_Test_HTTP_XML.get_response();
//    }
//
//    public void get_response(){
//        try {
////            String api_key="Update API Key here";
////            String cordinates="23.023047,81.073447";
//            String format="xml";
////            String url = "https://maps.googleapis.com/maps/api/timezone/"+format+"?location="+cordinates+"&timestamp=1458000000&key="+api_key;
//            String url = "https://noaa-nexrad-level2.s3.amazonaws.com/";
//            System.out.println(url);
//            URL obj = new URL(url);
//            HttpURLConnection con = (HttpURLConnection) obj.openConnection();
//            int responseCode = con.getResponseCode();
//            System.out.println("Response Code : " + responseCode);
//            BufferedReader in = new BufferedReader(
//                    new InputStreamReader(con.getInputStream()));
//            String inputLine;
//            StringBuffer response = new StringBuffer();
//            while ((inputLine = in.readLine()) != null) {
//                response.append(inputLine);
//            }
//            in.close();
//            //print in String
//            // System.out.println(response.toString());
//            Document doc = DocumentBuilderFactory.newInstance().newDocumentBuilder()
//                    .parse(new InputSource(new StringReader(response.toString())));
//            NodeList errNodes = doc.getElementsByTagName("ListBucketResult");
//            if (errNodes.getLength() > 0) {
//                Element err = (Element)errNodes.item(0);
//                System.out.println("raw_offset -"+err.getElementsByTagName("Contents").item(0).getTextContent());
//            } else {
//                System.out.println("Error");
//                // success
//            }
//        } catch (Exception e) {
//            System.out.println(e);
//        }
//    }
//}




