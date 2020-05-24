package ru.otus.spring.assetsmgr.common.models.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "employees")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

    @Id
    private String id;
    @Field(name = "fullName")
    private String fullName;
    @Field(name = "departmentName")
    private String departmentName;
    @Field(name = "position")
    private String position;
    @Field(name = "phoneNumber")
    private String phoneNumber;
    @Field(name = "email")
    private String email;


    public Employee(String fullName, String departmentName, String position, String phoneNumber, String email) {
        this.fullName = fullName;
        this.departmentName = departmentName;
        this.position = position;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}