package ru.otus.assetsmgr.reportssvc.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {


    private String id;
    private String fullName;
    private String departmentName;
    private String position;
    private String phoneNumber;
    private String email;


    public Employee(String fullName, String departmentName, String position, String phoneNumber, String email) {
        this.fullName = fullName;
        this.departmentName = departmentName;
        this.position = position;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
