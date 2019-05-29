package com.moventum.randomrouter.service

import com.moventum.randomrouter.*
import com.moventum.randomrouter.component.*
<<<<<<< HEAD
import com.moventum.randomrouter.dsl.UrlGoogleDirectionsBuilder.Companion.urlGoogleStatic
import com.moventum.randomrouter.dsl.urlGoogleDirections
=======
>>>>>>> fad5f81e17d150608dcb1956f294f31b9e5d50c4
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

<<<<<<< HEAD
        logger.info {"$urlGoogleStatic${pointCollection.joinToString("") { "&markers=color:blue%7Clabel:S%7C${it.lat},${it.lon}" }}&key=${config[googleStaticApi]}"}
=======
        logger.info {
            "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&maptype=roadmap" +
                    "${pointCollection.joinToString("") { "&markers=color:blue%7Clabel:S%7C${it.lat},${it.lon}" }}" +
                    "&key=${config[googleStaticApi]}"
        }
>>>>>>> fad5f81e17d150608dcb1956f294f31b9e5d50c4
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