package ru.otus.assetsmgr.searchsvc.service;

import lombok.RequiredArgsConstructor;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class RabbitMQListenerService {

    private static final String QUEUE_R = "queue-report";

    private final SearchService searchService;

    @RabbitListener(queues = QUEUE_R)
    public String receiveRequestedParametersForReportSvc(String message) {
        return searchService.getAssetsForReportService(message);
    }

    @Bean
    public Queue queue() {
        return new Queue(QUEUE_R);
    }


}
