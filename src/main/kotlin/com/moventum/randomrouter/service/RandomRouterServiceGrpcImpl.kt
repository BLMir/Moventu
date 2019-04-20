package com.moventum.randomrouter.service

import com.moventum.randomrouter.RandomRouterGrpc
import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq
import io.grpc.stub.StreamObserver

class RandomRouterServiceGrpcImpl(private val generateRouteService: GenerateRouteService): RandomRouterGrpc.RandomRouterImplBase() {
    override fun route(request: RouteReq, responseObserver: StreamObserver<Route>) {
        responseObserver.onNext(generateRouteService.getRoute(request))
        responseObserver.onCompleted()
    }
}