package ru.otus.assetsmgr.searchsvc.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import ru.otus.assetsmgr.searchsvc.domain.enums.AssetType;
import ru.otus.assetsmgr.searchsvc.domain.enums.Status;


@Document(collection = "assets")
@Data
@NoArgsConstructor
public class Asset {

    @Id
    private String id;
    @Field(name = "assetType")
    private AssetType assetType;
    @Field(name = "status")
    private Status status;
    @Field(name = "modelName")
    private String modelName;
    @Field(name = "assetLocation")
    private String assetLocation;
    @Field(name = "serialNumber")
    private String serialNumber;
    @Field(name = "desc")
    private String description;
    @Field(name = "employee")
    private Employee employee;
    @Field(name = "datePurchase")
    private String datePurchase;

    //comp
    @Field(name = "cpu")
    private String cpu;
    @Field(name = "ram")
    private String ram;
    @Field(name = "storage")
    private String storage;
    @Field(name = "videoCard")
    private String videoCard;

    //networking
    @Field(name = "macAddress")
    private String macAddress;
    @Field(name = "ipAddreess")
    private String ipAddress;

    //mon
    @Field(name = "monitorSize")
    private String monitorSize;
    @Field(name = "screenResolution")
    private String screenResolution;

    //phone
    @Field(name = "currentExtNumber")
    private String currentExtensionNumber;

    //mobile
    @Field(name = "IMEI")
    private String phoneIMEI;

    //printer
    @Field("printFormat")
    private String printFormat;
    @Field("cartridgeModel")
    private String cartridgeModel;


    //comp
    public Asset(AssetType assetType, Status status, String modelName, String assetLocation, String serialNumber, String description,
                 Employee employee, String datePurchase, String cpu, String ram, String storage, String videoCard, String macAddress) {

        this.assetType = assetType;
        this.status = status;
        this.modelName = modelName;
        this.assetLocation = assetLocation;
        this.serialNumber = serialNumber;
        this.description = description;
        this.employee = employee;
        this.datePurchase = datePurchase;
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.videoCard = videoCard;
        this.macAddress = macAddress;
    }


    //printer
    public Asset(AssetType assetType, Status status, String modelName, String assetLocation, String serialNumber, String description,
                 Employee employee, String datePurchase, String macAddress, String ipAddress, String printFormat,
                 String cartridgeModel) {

        this.assetType = assetType;
        this.status = status;
        this.modelName = modelName;
        this.assetLocation = assetLocation;
        this.serialNumber = serialNumber;
        this.description = description;
        this.employee = employee;
        this.datePurchase = datePurchase;
        this.macAddress = macAddress;
        this.ipAddress = ipAddress;
        this.printFormat = printFormat;
        this.cartridgeModel = cartridgeModel;
    }
}
