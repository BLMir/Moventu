package com.moventum.randomrouter

import com.moventum.randomrouter.services.RandomRouterServiceGrpcImpl
import io.grpc.ManagedChannelBuilder
import io.grpc.ServerBuilder

fun main(args: Array<String>) {

    val server = ServerBuilder
        .forPort(9000)
        .addService(RandomRouterServiceGrpcImpl())
        .build()


    server.start()
    server.awaitTermination()


    val channel = ManagedChannelBuilder.forAddress("locahost",9000).build()
    val client = RandomRouterGrpc.newBlockingStub(channel)


    print("asdfasdf")
    print(client.route(RouteReq.getDefaultInstance()))
}