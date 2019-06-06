package com.moventum.randomrouter.service

import com.moventum.randomrouter.RandomRouterGrpc
import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq
import io.grpc.stub.StreamObserver
import mu.KotlinLogging

private val logger = KotlinLogging.logger{}

class RandomRouterServiceGrpcImpl(private val routeService: RouteService): RandomRouterGrpc.RandomRouterImplBase() {
    override fun route(request: RouteReq, responseObserver: StreamObserver<Route>) {
        logger.info { "New route has been requested: $request" }
        responseObserver.onNext(routeService.getRoute(request))
        responseObserver.onCompleted()
    }
}