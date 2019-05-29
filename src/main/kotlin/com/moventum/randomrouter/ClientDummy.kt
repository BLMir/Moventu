package com.moventum.randomrouter

import com.moventum.randomrouter.component.location
import config.serverPort
import config.config
import io.grpc.ManagedChannelBuilder

fun main() {
    val chanel = ManagedChannelBuilder.forAddress("localhost", config[serverPort]).usePlaintext().build()
    val client = RandomRouterGrpc.newBlockingStub(chanel)

    val location = location {
<<<<<<< HEAD
        lat = "51.3396955".toDouble()
        lon = "12.3730747".toDouble()
    }

    print(client.route(RouteReq.newBuilder().setInitialLocation(location).setMinutes(80).build()))
=======
        lat = "39.572728".toDouble()
        lon = "2.650188".toDouble()
    }
    print(client.route(RouteReq.newBuilder().setInitialLocation(location).setMinutes(60).build()))
>>>>>>> fad5f81e17d150608dcb1956f294f31b9e5d50c4
}