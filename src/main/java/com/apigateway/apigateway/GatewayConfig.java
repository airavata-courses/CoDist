package com.apigateway.apigateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
//import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;


@Service
@Configuration
public class GatewayConfig {

//    public Gateway(Object userinfo) {
        @Bean
        public RouteLocator myRoutes (RouteLocatorBuilder builder){
        System.out.println("hello we are testing: ");
            return builder.routes()


                    .route(p -> p
                            .path("/signup")
                            .filters(f ->
                                    f.addRequestHeader("Hello", "World")
                            )
                            .uri("https://httpbin.org")
                    )
                    .route(p -> p
                            .path("/get")
                            .filters(f ->
                                    f.addRequestHeader("Hello", "World")
                            )
                            .uri("https://httpbin.org")
                    )
                    .build();

//                .route(p -> p
//                        .path("/health/services/feeds/FlightSchedules/airports")
//                        .filters(f ->
//                                f.addRequestHeader("x-rapidapi-host", "aerodatabox.p.rapidapi.com")
//                                        .addRequestHeader("x-rapidapi-key", "73d2247bfamshdae09b720b8c343p1aaf49jsn4d8b83c9e335")
//                        )
//                        .uri("https://aerodatabox.p.rapidapi.com")
//                )
//                .route(p -> p
//                        .path("/v1/joke")
//                        .filters(f ->
//                                f.addRequestHeader("x-rapidapi-host", "joke3.p.rapidapi.com")
//                                        .addRequestHeader("x-rapidapi-key", "1cfbdceb89msh5ae0c25f8a27b7ap17353djsn03ed743b1d4f")
//
//                        )
//                        .uri("https://joke3.p.rapidapi.com")
//                )

        }
//    }

}
