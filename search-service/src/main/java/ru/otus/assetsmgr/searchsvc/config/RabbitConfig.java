package ru.otus.assetsmgr.searchsvc.config;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {

    private static final String QUEUE_R = "queue-report";

    @Bean
    public Queue queue() {
        return new Queue(QUEUE_R);
    }
}
