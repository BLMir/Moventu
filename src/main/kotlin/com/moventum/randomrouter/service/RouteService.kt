package com.moventum.randomrouter.service

import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq

class RouteService {
    fun getRoute(route: RouteReq) : Route{

        val generatePerimeterService = PerimeterService()
        generatePerimeterService.createPerimeter(route, 2.0)
        return Route.newBuilder().setRoute("here").build()
    }
}