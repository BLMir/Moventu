package com.moventum.randomrouter

import com.moventum.randomrouter.service.GenerateRouteService
import com.moventum.randomrouter.service.RandomRouterServiceGrpcImpl
import io.grpc.ServerBuilder

fun main(args: Array<String>) {

    val generateRouteService = GenerateRouteService()
    val server = ServerBuilder
        .forPort(5432)
        .addService(RandomRouterServiceGrpcImpl(generateRouteService))
        .build()

    server.start()
    server.awaitTermination()
}