package ru.otus.spring.assetsmgr.assetssvc.config.changelog;

import com.github.cloudyrock.mongock.ChangeLog;
import com.github.cloudyrock.mongock.ChangeSet;
import com.mongodb.client.MongoDatabase;
import org.springframework.data.mongodb.core.MongoTemplate;
import ru.otus.spring.assetsmgr.common.models.domain.Asset;
import ru.otus.spring.assetsmgr.common.models.domain.Employee;
import ru.otus.spring.assetsmgr.common.models.domain.enums.AssetType;
import ru.otus.spring.assetsmgr.common.models.domain.enums.Status;

import java.util.ArrayList;
import java.util.List;

@ChangeLog
public class DbChangelog {

    private final List<Employee> employeeList = new ArrayList<>();

    @ChangeSet(order = "001", id = "dropDbCollections", author = "tyomakr", runAlways = true)
    public void dropDb(MongoDatabase db) {
        db.getCollection("assets").drop();
        db.getCollection("employees").drop();
    }

    @ChangeSet(order = "002", id = "insertSampleEmployees", author = "tyomakr", runAlways = true)
    public void insertEmployees(MongoTemplate mt) {
        employeeList.add(mt.save(new Employee("Бондаренко Роберт Вадимович", "IT", "Администратор", "+7 (924) 224-94-87", "b.robert@example.com")));
        employeeList.add(mt.save(new Employee("Крымский Дорымедонт Юрьевич", "СДО", "Делопроизводитель", "+7 (953) 445-97-19", "d.krymsky@example.com")));
        employeeList.add(mt.save(new Employee("Михальченко Оксана Святославовна", "ПТО", "Инженер", "+7 (993) 913-11-84","mih@example.com")));
        employeeList.add(mt.save(new Employee("Косорукова Бронислава Филипповна", "ПТО", "Инженер", "+7 (969) 872-53-36","bron@example.com")));
        employeeList.add(mt.save(new Employee("Баранов Витольд Юхимович", "ПТО", "Инженер", "+7 (999) 793-89-79","bar@example.com")));
        employeeList.add(mt.save(new Employee("Беспалов Еремей Александрович", "Финансовый", "Финансовый аналитик", "+7 (928) 299-90-61","erem@example.com")));
        employeeList.add(mt.save(new Employee("Носов Платон Валерьевич", "Финансовый", "Финансовый аналитик", "+7 (949) 276-54-37","platon@example.com")));
        employeeList.add(mt.save(new Employee("Лихачёв Чарльз Валерьевич", "Проектный институт", "Главный конструктор", "+7 (934) 193-59-82","lih@example.com")));
        employeeList.add(mt.save(new Employee("Муравьёв Йоханес Леонидович", "Проектный институт", "Инженер", "+7 (910) 556-71-14","mur@example.com")));
        employeeList.add(mt.save(new Employee("Мышелов Петр Аполлинариевич", "Проектный институт", "Конструктор", "+7 (928) 545-69-64","cat@example.com")));
        employeeList.add(mt.save(new Employee("Гершельман Серафим Евстафиевич", "Проектный институт", "Конструктор", "+7 (977) 898-12-22","ser@example.com")));
        employeeList.add(mt.save(new Employee("Бузинский Варфоломей Арсениевич", "Проектный институт", "Инженер-конструктор", "+7 (908) 368-79-59","varf@example.com")));
        employeeList.add(mt.save(new Employee("Мосенцова Любава Потаповна", "СДО", "Инженер-сметчик", "+7 (973) 920-62-52","mos@example.com")));
        employeeList.add(mt.save(new Employee("Энтина Эвелина Владиленовна", "Юридический", "Юрист", "+7 (904) 150-93-90","entina@example.com")));
        employeeList.add(mt.save(new Employee("Севостьянов Харитон Остапович", "Юридический", "Ведущий юрист", "+7 (946) 685-48-94","sev@example.com")));
        employeeList.add(mt.save(new Employee("Яушев Пимен Никифорович", "Юридический", "Главный юрист", "+7 (924) 803-46-30","pimen@example.com")));
        employeeList.add(mt.save(new Employee("Ломоносов Варфоломей Ермолаевич", "Бухгалтерия", "Главный бухгалтер", "+7 (937) 851-40-34","lom@example.com")));
        employeeList.add(mt.save(new Employee("Ёлкин Кондрат Натанович", "Руководство", "Генеральный директор", "+7 (962) 778-67-90","dir@example.com")));
        employeeList.add(mt.save(new Employee("Илюшина Берта Андрияновна", "Руководство", "Исполнительный директор", "+7 (988) 224-63-80","ispdir@example.com")));
        employeeList.add(mt.save(new Employee("Грачёв Модест Леонович", "Бухгалтерия", "Ведущий бухгалтер", "+7 (941) 206-16-35","grachev@example.com")));

    }

    @ChangeSet(order = "003", id = "insertSampleComputers", author = "tyomakr", runAlways = true)
    public void insertComputers(MongoTemplate mt) {
        mt.save(new Asset(AssetType.ALL_IN_ONE, Status.USE, "Apple Imac 27", "Главный офис", "sn1234567890", "", employeeList.get(17),
                "02.02.2020", "Intel Core i7-7700", "32Gb", "2Tb", "Radeon Pro 580", "af:bf:cf:ff:ff"));
        mt.save(new Asset(AssetType.NOTEBOOK, Status.USE, "ASUS ZenBook 15 UX533FTC-A8251T", "Главный офис", "sn345464577432", "", employeeList.get(0),
                "03.02.2020", "Intel Core i5-10210U 1.6", "8Gb", "512Gb SSD", "NVidia GeForce GTX 1650 4Gb", "bf:dc:ae:aa:aa:aa"));
        mt.save(new Asset(AssetType.NOTEBOOK, Status.USE, "ASUS ZenBook 15 UX533FTC-A8251T", "Главный офис", "sn345464577432", "", employeeList.get(13),
                "03.02.2020", "Intel Core i5-10210U 1.6", "8Gb", "512Gb SSD", "NVidia GeForce GTX 1650 4Gb", "bf:dc:ae:aa:aa:aa"));
        mt.save(new Asset(AssetType.NOTEBOOK, Status.USE, "ASUS ZenBook 15 UX533FTC-A8251T", "Главный офис", "sn345464577432", "", employeeList.get(14),
                "03.02.2020", "Intel Core i5-10210U 1.6", "8Gb", "512Gb SSD", "NVidia GeForce GTX 1650 4Gb", "bf:dc:ae:aa:aa:aa"));
        mt.save(new Asset(AssetType.NOTEBOOK, Status.USE, "ASUS ZenBook 15 UX533FTC-A8251T", "Главный офис", "sn345464577432", "", employeeList.get(15),
                "03.02.2020", "Intel Core i5-10210U 1.6", "8Gb", "512Gb SSD", "NVidia GeForce GTX 1650 4Gb", "bf:dc:ae:aa:aa:aa"));
        mt.save(new Asset(AssetType.ALL_IN_ONE, Status.USE, "HP EliteOne 1000 G2", "Главный офис", "snd353924048354980", "", employeeList.get(18),
                "03.03.2020", "Intel Core i5-8500", "8Gb", "1Tb HDD", "Intel UHD 630", "df:af:ce:3d:4a"));

    }

    @ChangeSet(order = "005", id ="insertSamplePrinters", author = "tyomakr", runAlways = true)
    public void insertPrinters(MongoTemplate mt) {
        mt.save(new Asset(AssetType.PRINTER, Status.USE, "Konica Minolta C227", "Проектное бюро", "sn3245342534234", "", employeeList.get(7),
                "03.02.2020", "5f:3a:ce:ef:ff", "172.20.100.100", "A3", "TN-221(CMYK)"));
    }


}