package ru.otus.assetsmgr.reportssvc.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import ru.otus.assetsmgr.reportssvc.domain.Asset;
import ru.otus.assetsmgr.reportssvc.service.ReportRabbitProducerService;
import ru.otus.assetsmgr.reportssvc.service.ReportsService;


@RestController
@RequiredArgsConstructor
public class ReportsController {

    private final ObjectMapper objectMapper;
    private final ReportRabbitProducerService rrpService;
    private final ReportsService reportsService;

    @SneakyThrows
    @PostMapping("/v1/reports/request")
    public ResponseEntity sendReportRequest(@RequestBody Asset reportAsset) {

        String msg = objectMapper.writeValueAsString(reportAsset);
        String result = rrpService.sendAndReceive(msg);

        return ResponseEntity.accepted().body(result);
    }

    @ResponseBody
    @PostMapping(value = "/v1/reports/pdf", produces = MediaType.APPLICATION_PDF_VALUE)
    public Mono<byte[]> createPdfReport(@RequestBody String requestJson) {
        byte[] bytes = reportsService.createPDF(requestJson);
        return Mono.just(bytes);
    }
}