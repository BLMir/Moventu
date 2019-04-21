package com.moventum.randomrouter.service

import com.moventum.randomrouter.Location
import com.moventum.randomrouter.MAX_WAY_POINTS
import com.moventum.randomrouter.MIN_WAY_POINTS
import com.moventum.randomrouter.RouteReq
import com.moventum.randomrouter.component.*
import config.config
import config.googleStaticApi

class PerimeterService {

    private var pointCollection : MutableList<Location> = mutableListOf()


    fun createPerimeter(routeRequest: RouteReq, dynamicFactor: Double) : MutableList<Location> {

        val totalWayPoints : Int = random(MAX_WAY_POINTS, MIN_WAY_POINTS)
        var bearing: Int = random(360)

        pointCollection.add(routeRequest.initialLocation)

        repeat(totalWayPoints){
            pointCollection.add(destinationPoint(bearing,routeRequest.minutes.toKm().div(totalWayPoints), pointCollection.last(), dynamicFactor))
            bearing = bearing.plus((360/totalWayPoints))
        }

        print("https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&maptype=roadmap")
        pointCollection.map {
            print("&markers=color:blue%7Clabel:S%7C${it.lat},${it.lon}")
        }
        println("&key=${config[googleStaticApi]}")
        return pointCollection
    }

    private fun destinationPoint(bearing : Int, distance : Float, point : Location, dynamicFactor: Double) : Location {
        val dist = distance / (6371.toMeters() * dynamicFactor) //Earth's radius in Km
        val bearingRad = bearing.toDouble().toRad()

        val fromLat = point.lat.toDouble().toRad()
        val fromLon = point.lon.toDouble().toRad()

        val lat = haversineLat(fromLat, dist.toDouble(), bearingRad).toDeg()
        val lon = haversineLon(lat, fromLat, fromLon, dist.toDouble(), bearingRad).toDeg()

        return Location.newBuilder().setLat(lat.toFloat()).setLon(lon.toFloat()).build()
    }
}