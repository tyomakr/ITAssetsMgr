package ru.otus.assetsmgr.reportssvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ReportsSvcApp {

    public static void main(String[] args) {
        SpringApplication.run(ReportsSvcApp.class, args);
    }
}