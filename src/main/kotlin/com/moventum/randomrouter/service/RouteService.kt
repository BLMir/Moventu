package com.moventum.randomrouter.service

import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq
<<<<<<< HEAD
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
=======

class RouteService(private val perimeterService: PerimeterService) {
    fun getRoute(route: RouteReq) : Route{


        perimeterService.createPerimeter(route, 2.0)
        return Route.newBuilder().setRoute("here").build()
>>>>>>> fad5f81e17d150608dcb1956f294f31b9e5d50c4
    }
}