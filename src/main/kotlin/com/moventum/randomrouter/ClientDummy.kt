package com.moventum.randomrouter

import com.moventum.randomrouter.component.location
import io.grpc.ManagedChannelBuilder

fun main() {
    val chanel = ManagedChannelBuilder.forAddress("localhost",5432).usePlaintext().build()
    val client = RandomRouterGrpc.newBlockingStub(chanel)

    val location = location {
        lat = "39.572728".toFloat()
        lon = "2.650188".toFloat()
    }
    print(client.route(RouteReq.newBuilder().setInitialLocation(location).setMinutes(60).build()))
}