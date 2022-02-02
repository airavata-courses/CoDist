package com.apigateway.apigateway.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import org.json.JSONObject;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.concurrent.TimeoutException;

@EnableAsync
@Service
public class AuthenticationApi {



    public Object Authentication_Check(Object auth)
            throws IOException, TimeoutException, InterruptedException {
        System.out.println("auth received: " + auth);

        ObjectMapper mapper = new ObjectMapper();
        String requestBody = mapper
                .writeValueAsString(auth);


        System.out.println("REQ BODY: "+requestBody);
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("http://localhost:3333/registry/api/v1/security/authorize"))
                .header("codist-access-token", (String)auth)
                .POST( HttpRequest.BodyPublishers.ofString( requestBody) )
                .build();


        HttpResponse<String> resp= client.send(request, HttpResponse.BodyHandlers.ofString());

        String respBody = resp.body();
        JSONObject bodyJSON = new JSONObject(respBody);

        Gson gson = new Gson();

        JsonElement jsonElement = gson.fromJson(bodyJSON.toString(), JsonElement.class);

        JsonElement authResponse = (jsonElement
                .getAsJsonObject().get("response")
                .getAsJsonObject().get("result"));


        System.out.println("authresponse " + authResponse);

        return authResponse;
    }


}
