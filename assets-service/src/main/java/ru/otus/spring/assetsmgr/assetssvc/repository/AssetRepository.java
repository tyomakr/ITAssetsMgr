package ru.otus.spring.assetsmgr.assetssvc.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;
import ru.otus.spring.assetsmgr.common.models.domain.Asset;
import ru.otus.spring.assetsmgr.common.models.domain.enums.AssetType;

public interface AssetRepository extends ReactiveMongoRepository<Asset, String> {
    Flux<Asset> findAssetsByAssetType(AssetType assetType);
}