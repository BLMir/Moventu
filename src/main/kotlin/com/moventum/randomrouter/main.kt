package com.moventum.randomrouter

<<<<<<< HEAD
=======
import com.moventum.randomrouter.service.PerimeterService
>>>>>>> fad5f81e17d150608dcb1956f294f31b9e5d50c4
import com.moventum.randomrouter.service.RouteService
import com.moventum.randomrouter.service.RandomRouterServiceGrpcImpl
import config.config
import config.serverPort
import io.grpc.ServerBuilder
import mu.KotlinLogging

private val logger = KotlinLogging.logger{}
<<<<<<< HEAD

fun main() {
    val generateRouteService = RouteService()
=======
>>>>>>> fad5f81e17d150608dcb1956f294f31b9e5d50c4

fun main(args: Array<String>) {
    val perimeterService = PerimeterService()
    val generateRouteService = RouteService(perimeterService)
    val server = ServerBuilder
        .forPort(config[serverPort])
        .addService(RandomRouterServiceGrpcImpl(generateRouteService))
        .build()

    logger.info { "Grpc endpoint listen port ${config[serverPort]}" }
    server.start()
    server.awaitTermination()
}