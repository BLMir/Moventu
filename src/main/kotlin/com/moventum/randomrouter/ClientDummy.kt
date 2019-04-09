package com.moventum.randomrouter

import io.grpc.ManagedChannelBuilder

fun main() {
    val chanel = ManagedChannelBuilder.forAddress("localhost",5432).usePlaintext().build()
    val client = RandomRouterGrpc.newBlockingStub(chanel)

    print(client.route(RouteReq.newBuilder().setName("hola").setFromExpression("sqewr").build()))
}