package ru.otus.assetsmgr.reportssvc.service;

import lombok.RequiredArgsConstructor;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.query.JsonQueryExecuterFactory;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;


@Service
@RequiredArgsConstructor
public class ReportsService {

    public byte[] createPDF(String dataJson) {

        byte[] result = new byte[0];

        try {
            JasperReport jasperReport = JasperCompileManager.compileReport(this.getClass().getClassLoader().getResourceAsStream("rp.jrxml"));
            InputStream inputStream = new ByteArrayInputStream(dataJson.getBytes(StandardCharsets.UTF_8));

            Map params = new HashMap<>();
            params.put(JsonQueryExecuterFactory.JSON_INPUT_STREAM, inputStream);
            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, params);
            result = JasperExportManager.exportReportToPdf(jasperPrint);
        } catch (Exception e) {
            System.out.println("PROBLEMS : " + e);
        }
        return result;
    }

}
