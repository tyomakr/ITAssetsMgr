package ru.otus.spring.assetsmgr.assetssvc.handlers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import ru.otus.spring.assetsmgr.assetssvc.repository.AssetRepository;
import ru.otus.spring.assetsmgr.common.models.domain.Asset;
import ru.otus.spring.assetsmgr.common.models.domain.enums.AssetType;

import static org.springframework.web.reactive.function.BodyInserters.fromValue;
import static org.springframework.web.reactive.function.server.ServerResponse.*;

@Component
@RequiredArgsConstructor
public class AssetHandler {

    private final AssetRepository assetRepository;

    public Mono<ServerResponse> findAll(ServerRequest request) {
        return ok().body(assetRepository.findAll(), Asset.class);
    }

    public Mono<ServerResponse> findByAssetType(ServerRequest request) {
        return ok().body(assetRepository.findAssetsByAssetType(getEnumFromString(AssetType.class, request.pathVariable("assetType"))), Asset.class);
    }

    public Mono<ServerResponse> findById(ServerRequest request) {
        return assetRepository.findById(request.pathVariable("id"))
                .flatMap(asset -> ok().contentType(MediaType.APPLICATION_JSON).bodyValue(asset))
                .switchIfEmpty(notFound().build());
    }

    public Mono<ServerResponse> save(ServerRequest request) {
        return request.bodyToMono(Asset.class)
                .flatMap(assetRepository::save)
                .flatMap(asset -> created(request.uriBuilder().pathSegment(asset.getId()).build())
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(fromValue(asset)));
    }

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