package ru.otus.assetsmgr.searchsvc.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import ru.otus.spring.assetsmgr.common.models.domain.Asset;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService {

    private final MongoOperations mongoOperations;


    @Override
    public String getAssetsForReportService(String messageParams) {

        Map<String, String> paramsMap = clearNullValues(messageParams);
        return findAssets(paramsMap);
    }

    @SneakyThrows
    private Map<String, String> clearNullValues(String paramsJsonString) {

        @SuppressWarnings("unchecked")
        Map<String, String> params = new Gson().fromJson(paramsJsonString, Map.class);
        while (params.values().remove(null));

        return params;
    }

    private String findAssets(Map<String, String> paramsMap) {

        Query query = new Query();
        Criteria criteria = new Criteria();
        List<Criteria> criteriaList = new ArrayList<>();
        for (Map.Entry<String, String> entry: paramsMap.entrySet()) {
            Criteria currentCriteria = new Criteria();
            currentCriteria.and(entry.getKey()).is(entry.getValue());
            criteriaList.add(currentCriteria);
        }
        query.addCriteria(criteria.andOperator(criteriaList.toArray(new Criteria[criteriaList.size()])));

        List<Asset> list = mongoOperations.find(query, Asset.class);

        Gson gson = new GsonBuilder().create();
        return gson.toJson(list);
    }
}
