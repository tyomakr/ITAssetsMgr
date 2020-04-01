package ru.otus.assetsmgr.searchsvc.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import ru.otus.assetsmgr.searchsvc.domain.Asset;

public interface AssetRepository extends ReactiveMongoRepository<Asset, String> {

}