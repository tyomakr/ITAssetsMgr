package ru.otus.spring.assetsmgr.assetssvc.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import ru.otus.spring.assetsmgr.common.models.domain.Employee;


public interface EmployeeRepository extends ReactiveMongoRepository<Employee, String> {
}