package ru.otus.assetsmgr.reportssvc.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import ru.otus.assetsmgr.reportssvc.domain.enums.AssetType;
import ru.otus.assetsmgr.reportssvc.domain.enums.Status;

@Data
@NoArgsConstructor
public class Asset {


    private String id;
    private AssetType assetType;
    private Status status;
    private String modelName;
    private String assetLocation;
    private String serialNumber;
    private String desc;
    private Employee employee;
    private String datePurchase;

    //comp
    private String cpu;
    private String ram;
    private String storage;
    private String videoCard;

    //networking
    private String macAddress;
    private String ipAddress;

    //mon
    private String monitorSize;
    private String screenResolution;

    //phone
    private String currentExtensionNumber;

    //mobile
    private String phoneIMEI;

    //printer
    private String printFormat;
    private String cartridgeModel;


    //comp
    public Asset(AssetType assetType, Status status, String modelName, String assetLocation, String serialNumber, String description,
                 Employee employee, String datePurchase, String cpu, String ram, String storage, String videoCard, String macAddress) {

        this.assetType = assetType;
        this.status = status;
        this.modelName = modelName;
        this.assetLocation = assetLocation;
        this.serialNumber = serialNumber;
        this.desc = description;
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
        this.desc = description;
        this.employee = employee;
        this.datePurchase = datePurchase;
        this.macAddress = macAddress;
        this.ipAddress = ipAddress;
        this.printFormat = printFormat;
        this.cartridgeModel = cartridgeModel;
    }
}
