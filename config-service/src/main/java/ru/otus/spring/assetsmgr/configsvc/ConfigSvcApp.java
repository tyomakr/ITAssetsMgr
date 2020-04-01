package ru.otus.spring.assetsmgr.configsvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@EnableConfigServer
@SpringBootApplication
public class ConfigSvcApp {

    public static void main(String[] args) {
        SpringApplication.run(ConfigSvcApp.class, args);
    }
}