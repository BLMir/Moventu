package com.moventum.randomrouter.service

import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq
import com.moventum.randomrouter.dsl.urlGoogleDirections

class RouteService {
    fun getRoute(route: RouteReq) : Route{

        val perimeterService = PerimeterService()

        val call = urlGoogleDirections {
            startPoint(route.initialLocation)
            wayPoints(perimeterService.createPerimeter(route, 2.0))
            mode("walking")
            avoid(listOf("ferries"))
        }.build()

        return Route.newBuilder().setRoute(call).build()
    }
}