package ru.otus.spring.assetsmgr.discovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class DiscoverySvcApp {

    public static void main(String[] args) {
        SpringApplication.run(DiscoverySvcApp.class, args);
    }
}