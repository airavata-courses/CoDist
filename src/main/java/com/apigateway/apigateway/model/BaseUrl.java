package com.apigateway.apigateway.model;

import org.springframework.stereotype.Service;

@Service
public class BaseUrl {
    public String Plotting = "http://localhost:5000";
    public String Logger = "http://localhost:8085";
    public String Registry = "http://localhost:3333";
//  Registry on Tanu's Registry
//    public String Registry = "http://e4a1-66-244-80-73.ngrok.io";

//    Registry on Parnals side.
//    public String Registry = "http://e263-2001-18e8-2-28b8-f000-00-dcc.ngrok.io";
}

