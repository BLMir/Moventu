package com.moventum.randomrouter.service

import com.moventum.randomrouter.*
import com.moventum.randomrouter.component.*
import config.config
import config.googleStaticApi

class PerimeterService {
    private var pointCollection: MutableList<Location> = mutableListOf()

    fun createPerimeter(routeRequest: RouteReq, dynamicFactor: Double): MutableList<Location> {

        val totalWayPoints: Int = random(MAX_WAY_POINTS, MIN_WAY_POINTS)
        var bearing: Double = random(360).toDouble()

        pointCollection.add(routeRequest.initialLocation)

        repeat(totalWayPoints) {
            pointCollection.add(
                createDestinationPoint(
                    bearing = bearing.toRad(),
                    distance = routeRequest.minutes.toKm().div(totalWayPoints),
                    pointReference = pointCollection.last(),
                    dynamicFactor = dynamicFactor
                )
            )
            bearing = bearing.plus((360 / totalWayPoints))
        }

        print("https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&maptype=roadmap")
        pointCollection.map {
            print("&markers=color:blue%7Clabel:S%7C${it.lat},${it.lon}")
        }
        println("&key=${config[googleStaticApi]}")
        return pointCollection
    }

    private fun createDestinationPoint(
        bearing: Double,
        distance: Float,
        pointReference: Location,
        dynamicFactor: Double
    ): Location {
        val dist = distance / (EARTH_RADIUS.toMeters() * dynamicFactor) //Earth's radius in Km

        val latFrom = pointReference.lat.toRad()
        val lonFrom = pointReference.lon.toRad()

        val latTo = haversineLat(latFrom, dist, bearing).toDeg()
        val lonTo = haversineLon(latTo, latFrom, lonFrom, dist, bearing).toDeg()

        return location {
            lat = latTo
            lon = lonTo
        }
    }
}