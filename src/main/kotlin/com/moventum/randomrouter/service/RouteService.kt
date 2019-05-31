package com.moventum.randomrouter.service

import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq
import com.moventum.randomrouter.dsl.urlGoogleDirections
import java.io.IOException
import java.net.URL

class RouteService {
    fun getRoute(route: RouteReq) : Route{

        val perimeterService = PerimeterService()

        val url = urlGoogleDirections {
            startPoint(route.initialLocation)
            wayPoints(perimeterService.createPerimeter(route, 2.0))
            mode("walking")
            avoid(listOf("ferries"))
        }.build()

        val result =  try {
            URL(url)
                .openStream()
                .bufferedReader()
                .use { it.readText() }
        } catch (e: IOException) {
            "Error with ${e.message}."
        }
        return Route.newBuilder().setRoute(result).build()
    }
}