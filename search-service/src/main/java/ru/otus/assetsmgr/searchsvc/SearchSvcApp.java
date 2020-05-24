package ru.otus.assetsmgr.searchsvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class SearchSvcApp {

    public static void main(String[] args) {
        SpringApplication.run(SearchSvcApp.class, args);
    }
}
