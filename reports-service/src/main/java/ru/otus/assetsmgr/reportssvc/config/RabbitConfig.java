package ru.otus.assetsmgr.reportssvc.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {

    private static final String MAIN_EXCHANGE_NAME = "main-exchange";
    private static final String QUEUE_R = "queue-report";

    @Bean
    public Queue queue() {
        return new Queue(QUEUE_R);
    }

    @Bean
    public TopicExchange topicExchange() {
        return new TopicExchange(MAIN_EXCHANGE_NAME);
    }

    @Bean
    public Binding binding() {
        return BindingBuilder.bind(queue()).to(topicExchange()).with("key");
    }

}