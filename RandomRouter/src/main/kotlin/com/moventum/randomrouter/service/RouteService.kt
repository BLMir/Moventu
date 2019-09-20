package com.moventum.randomrouter.service

import com.google.gson.Gson
import com.moventum.randomrouter.Route
import com.moventum.randomrouter.RouteReq
import com.moventum.randomrouter.dsl.urlGoogleDirections
import com.moventum.randomrouter.entity.GoogleDirectionsResponse
import config.config
import config.googleStaticApi
import java.io.IOException
import java.net.URL

class RouteService {

    private val staticMapUrl ="https://maps.googleapis.com/maps/api/staticmap?size=800x800&path=weight:5%7Ccolor:red%7Cenc:"
    fun getRoute(route: RouteReq): Route {

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
        val jsonResponse = Gson().fromJson(result,GoogleDirectionsResponse::class.java)

        return Route.newBuilder()
            .setDistance(jsonResponse.route.leg.distance.text)
            .setMap(jsonResponse.route.overview_polyline.points.replace("\\\\","\\"))
            .setDuration(jsonResponse.route.leg.duration.text)
            .build()

    }
}