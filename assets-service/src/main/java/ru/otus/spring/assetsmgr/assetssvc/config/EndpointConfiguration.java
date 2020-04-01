package ru.otus.spring.assetsmgr.assetssvc.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;
import ru.otus.spring.assetsmgr.assetssvc.handlers.AssetHandler;
import ru.otus.spring.assetsmgr.assetssvc.handlers.EmployeeHandler;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;

@Configuration
public class EndpointConfiguration {

    @Bean
    RouterFunction<ServerResponse> endpointRoutes(EmployeeHandler employeeHandler, AssetHandler assetHandler) {
        return RouterFunctions
                .route(GET("/v1/employees").and(accept(MediaType.APPLICATION_JSON)), employeeHandler::findAll)
                .andRoute(GET("/v1/employees/{id}").and(accept(MediaType.APPLICATION_JSON)), employeeHandler::findById)
                .andRoute(POST("/v1/employees").and(accept(MediaType.APPLICATION_JSON)), employeeHandler::save)
                .andRoute(PUT("/v1/employees/{id}").and(accept(MediaType.APPLICATION_JSON)), employeeHandler::update)
                .andRoute(DELETE("/v1/employees/{id}").and(accept(MediaType.APPLICATION_JSON)), employeeHandler::delete)

                .andRoute(GET("/v1/assets/all").and(accept(MediaType.APPLICATION_JSON)), assetHandler::findAll)
                .andRoute(GET("/v1/assets/types/{assetType}").and(accept(MediaType.APPLICATION_JSON)), assetHandler::findByAssetType)
                .andRoute(GET("/v1/assets/{id}").and(accept(MediaType.APPLICATION_JSON)), assetHandler::findById)
                .andRoute(POST("/v1/assets").and(accept(MediaType.APPLICATION_JSON)), assetHandler::save)
                .andRoute(PUT("/v1/assets/{id}").and(accept(MediaType.APPLICATION_JSON)), assetHandler::update)
                .andRoute(DELETE("/v1/assets/{id}").and(accept(MediaType.APPLICATION_JSON)), assetHandler::delete);
    }
}