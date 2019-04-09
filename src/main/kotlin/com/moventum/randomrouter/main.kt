package com.moventum.randomrouter

import com.moventum.randomrouter.services.RandomRouterServiceGrpcImpl
import io.grpc.ServerBuilder

fun main(args: Array<String>) {

    val server = ServerBuilder
        .forPort(5432)
        .addService(RandomRouterServiceGrpcImpl())
        .build()


    server.start()
    server.awaitTermination()
}