package com.moventum.randomrouter

import com.moventum.randomrouter.service.RouteService
import com.moventum.randomrouter.service.RandomRouterServiceGrpcImpl
import config.config
import config.serverPort
import io.grpc.ServerBuilder
import mu.KotlinLogging

private val logger = KotlinLogging.logger{}

fun main() {
    val generateRouteService = RouteService()
    val server = ServerBuilder
        .forPort(config[serverPort])
        .addService(RandomRouterServiceGrpcImpl(generateRouteService))
        .build()

    logger.info { "Grpc end point listen port ${config[serverPort]}" }
    server.start()
    server.awaitTermination()
}