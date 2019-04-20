package com.moventum.randomrouter

import com.moventum.randomrouter.service.GenerateRouteService
import com.moventum.randomrouter.service.RandomRouterServiceGrpcImpl
import config.config
import config.serverPort
import io.grpc.ServerBuilder

fun main(args: Array<String>) {

    val generateRouteService = GenerateRouteService()
    val server = ServerBuilder
        .forPort(config[serverPort])
        .addService(RandomRouterServiceGrpcImpl(generateRouteService))
        .build()

    server.start()
    server.awaitTermination()
}