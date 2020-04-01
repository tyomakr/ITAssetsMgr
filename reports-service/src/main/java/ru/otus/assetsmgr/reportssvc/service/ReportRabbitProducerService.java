package ru.otus.assetsmgr.reportssvc.service;

import com.rabbitmq.client.Return;
import com.rabbitmq.client.ReturnCallback;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.connection.CorrelationData;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class ReportRabbitProducerService implements RabbitTemplate.ConfirmCallback, ReturnCallback {

    private static final String MAIN_EXCHANGE_NAME = "main-exchange";
    private final RabbitTemplate rabbitTemplate;


    @PostConstruct
    public void init() {
        rabbitTemplate.setConfirmCallback(this);
    }

    @Override
    public void handle(Return aReturn) {
        System.out.println("Send failed " + Arrays.toString(aReturn.getBody()));
    }

    @Override
    public void confirm(CorrelationData correlationData, boolean ack, String s) {
        if (ack) {
            System.out.println("Message send successfully: " + correlationData);
        } else {
            System.out.println("Message send failed: " + s);
        }
    }


    public String sendAndReceive(String message) {

        CorrelationData correlationId = new CorrelationData(UUID.randomUUID().toString());
        return rabbitTemplate.convertSendAndReceive(MAIN_EXCHANGE_NAME, "key", message, correlationId).toString();
    }


}
