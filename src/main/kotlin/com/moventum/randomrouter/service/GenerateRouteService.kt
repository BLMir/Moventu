package com.moventum.randomrouter.service

import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq

class GenerateRouteService {
    fun getRoute(route: RouteReq) : Route{

        val generatePerimeterService = GeneratePerimeterService()
        generatePerimeterService.createPerimeter(route, 2.0)
        return Route.newBuilder().setRoute("here").build()
    }
}