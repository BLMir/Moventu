package com.moventum.randomrouter.service

import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq

class RouteService(private val perimeterService: PerimeterService) {
    fun getRoute(route: RouteReq) : Route{


        perimeterService.createPerimeter(route, 2.0)
        return Route.newBuilder().setRoute("here").build()
    }
}