package ru.otus.spring.assetsmgr.assetssvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class AssetsSvcApp {

    public static void main(String[] args) {
        SpringApplication.run(AssetsSvcApp.class, args);
    }
}