package com.moventum.randomrouter.service

import com.moventum.randomrouter.RandomRouterGrpc
import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq
import io.grpc.stub.StreamObserver

class RandomRouterServiceGrpcImpl(private val routeService: RouteService): RandomRouterGrpc.RandomRouterImplBase() {
    override fun route(request: RouteReq, responseObserver: StreamObserver<Route>) {
        responseObserver.onNext(routeService.getRoute(request))
        responseObserver.onCompleted()
    }
}