package ru.otus.spring.assetsmgr.assetssvc.handlers.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import ru.otus.spring.assetsmgr.assetssvc.domain.Employee;
import ru.otus.spring.assetsmgr.assetssvc.handlers.EmployeeHandler;
import ru.otus.spring.assetsmgr.assetssvc.repository.EmployeeRepository;

import static org.springframework.web.reactive.function.BodyInserters.*;
import static org.springframework.web.reactive.function.server.ServerResponse.*;

@Component
@RequiredArgsConstructor
public class EmployeeHandlerImpl implements EmployeeHandler {

    private final EmployeeRepository employeeRepository;

    @Override
    public Mono<ServerResponse> findAll(ServerRequest request) {
        return ok().body(employeeRepository.findAll(), Employee.class);
    }

    @Override
    public Mono<ServerResponse> findById(ServerRequest request) {
        return employeeRepository.findById(request.pathVariable("id"))
                .flatMap(employee -> ok().contentType(MediaType.APPLICATION_JSON).bodyValue(employee))
                .switchIfEmpty(notFound().build());
    }

    @Override
    public Mono<ServerResponse> save(ServerRequest request) {
        return request.bodyToMono(Employee.class)
                .flatMap(employeeRepository::save)
                .flatMap(employee -> created(request.uriBuilder().pathSegment(employee.getId()).build())
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(fromValue(employee)));
    }

    @Override
    public Mono<ServerResponse> update(ServerRequest request) {
        return request.bodyToMono(Employee.class)
                .flatMap(employee -> employeeRepository.findById(request.pathVariable("id"))
                        .flatMap(updatedEmployee -> {
                            employee.setId(updatedEmployee.getId());
                            updatedEmployee = employee;
                            return employeeRepository.save(updatedEmployee);
                        })
                        .flatMap(emp -> ServerResponse.ok()
                                .contentType(MediaType.APPLICATION_JSON)
                                .body(fromValue(emp)))
                        .switchIfEmpty(notFound().build())
                );
    }

    @Override
    public Mono<ServerResponse> delete(ServerRequest request) {
        return noContent().build(employeeRepository.deleteById(request.pathVariable("id")));
    }
}