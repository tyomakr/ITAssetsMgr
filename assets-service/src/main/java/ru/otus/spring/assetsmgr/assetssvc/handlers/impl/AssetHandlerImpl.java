package ru.otus.spring.assetsmgr.assetssvc.handlers.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import ru.otus.spring.assetsmgr.assetssvc.domain.Asset;
import ru.otus.spring.assetsmgr.assetssvc.domain.enums.AssetType;
import ru.otus.spring.assetsmgr.assetssvc.handlers.AssetHandler;
import ru.otus.spring.assetsmgr.assetssvc.repository.AssetRepository;

import static org.springframework.web.reactive.function.BodyInserters.fromValue;
import static org.springframework.web.reactive.function.server.ServerResponse.*;

@Component
@RequiredArgsConstructor
public class AssetHandlerImpl implements AssetHandler {

    private final AssetRepository assetRepository;

    @Override
    public Mono<ServerResponse> findAll(ServerRequest request) {
        return ok().body(assetRepository.findAll(), Asset.class);
    }

    @Override
    public Mono<ServerResponse> findByAssetType(ServerRequest request) {
        return ok().body(assetRepository.findAssetsByAssetType(getEnumFromString(AssetType.class, request.pathVariable("assetType"))), Asset.class);
    }

    @Override
    public Mono<ServerResponse> findById(ServerRequest request) {
        return assetRepository.findById(request.pathVariable("id"))
                .flatMap(asset -> ok().contentType(MediaType.APPLICATION_JSON).bodyValue(asset))
                .switchIfEmpty(notFound().build());
    }

    @Override
    public Mono<ServerResponse> save(ServerRequest request) {
        return request.bodyToMono(Asset.class)
                .flatMap(assetRepository::save)
                .flatMap(asset -> created(request.uriBuilder().pathSegment(asset.getId()).build())
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(fromValue(asset)));
    }

    @Override
    public Mono<ServerResponse> update(ServerRequest request) {
        return request.bodyToMono(Asset.class)
                .flatMap(asset -> assetRepository.findById(request.pathVariable("id"))
                        .flatMap(updatedAsset -> {
                            asset.setId(updatedAsset.getId());
                            updatedAsset = asset;
                            return assetRepository.save(updatedAsset);
                        })
                        .flatMap(ast -> ServerResponse.ok()
                                .contentType(MediaType.APPLICATION_JSON)
                                .body(fromValue(ast)))
                        .switchIfEmpty(notFound().build())
                );
    }

    @Override
    public Mono<ServerResponse> delete(ServerRequest request) {
        return noContent().build(assetRepository.deleteById(request.pathVariable("id")));
    }


    public static <T extends Enum<T>> T getEnumFromString(Class<T> c, String string) {
        if (c != null && string != null) {
            try {
                return Enum.valueOf(c, string.trim().toUpperCase());
            } catch (IllegalArgumentException ignored) {
            }
        }
        return null;
    }
}