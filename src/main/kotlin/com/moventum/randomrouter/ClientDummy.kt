package com.moventum.randomrouter

import com.moventum.randomrouter.component.location
import config.serverPort
import config.config
import io.grpc.ManagedChannelBuilder

fun main() {
    val chanel = ManagedChannelBuilder.forAddress("localhost", config[serverPort]).usePlaintext().build()
    val client = RandomRouterGrpc.newBlockingStub(chanel)

    val location = location {
        lat = 39.57106
        lon = 2.64879
    }

    print(client.route(RouteReq.newBuilder().setInitialLocation(location).setMinutes(80).build()))
}