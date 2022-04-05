package com.apigateway.apigateway.model;

import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class BaseUrl {
    public String Registry = "http://0.0.0.0:30635";
//    //    public String Logger = "http://localhost:8080";
    public String Plotting = "http://localhost:5000";

    // Ping Google.com
//    URL url = new URL("https://www.google.com");
//    HttpURLConnection huc = (HttpURLConnection) url.openConnection();
//
//    int responseCode = huc.getResponseCode();
////    Assert.assertEquals(HttpURLConnection.HTTP_OK, responseCode);
//    System.out.println(responseCode);
    // JetStream VM
//    public String Registry = "http://registry-service-deployment-56dd98586d-qbrcz.default.svc";

//    public String Plotting = "http://4a99-2001-18e8-2-28b6-e860-f7c1-1087-b608.ngrok.io";
    public String Logger = "http://ddc3-2001-18e8-2-28b6-fdaa-7b54-33a1-8be.ngrok.io";

//    public String Registry = "http://ddc3-2001-18e8-2-28b6-fdaa-7b54-33a1-8be.ngrok.io";



//  Registry on Tanu's Registry
//    public String Registry = "http://e4a1-66-244-80-73.ngrok.io";

//    Registry on Parnals side.
//    public String Registry = "http://e263-2001-18e8-2-28b8-f000-00-dcc.ngrok.io";
}

