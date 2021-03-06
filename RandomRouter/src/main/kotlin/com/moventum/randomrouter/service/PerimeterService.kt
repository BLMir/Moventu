package com.moventum.randomrouter.service

import com.moventum.randomrouter.*
import com.moventum.randomrouter.component.*
import com.moventum.randomrouter.dsl.UrlGoogleDirectionsBuilder.Companion.urlGoogleStatic
import config.config
import config.googleStaticApi
import mu.KotlinLogging

private val logger = KotlinLogging.logger {  }

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
        logger.info {"$urlGoogleStatic${pointCollection.joinToString("") { "&markers=color:blue%7Clabel:S%7C${it.lat},${it.lon}" }}&key=${config[googleStaticApi]}"}

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