package com.moventum.randomrouter.services

import com.moventum.randomrouter.RandomRouterGrpc
import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq
import io.grpc.stub.StreamObserver


class RandomRouterServiceGrpcImpl: RandomRouterGrpc.RandomRouterImplBase() {
    override fun route(request: RouteReq, responseObserver: StreamObserver<Route>) {
        responseObserver.onNext(Route.newBuilder().setName("asdf").build())
        responseObserver.onCompleted()
    }
}