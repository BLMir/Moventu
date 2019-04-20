package com.moventum.randomrouter.service

import com.moventum.randomrouter.Location
import com.moventum.randomrouter.RouteReq
import com.moventum.randomrouter.component.*

class GeneratePerimeterService {

    private var numWayPoints : Int
    private var pointCollection : MutableList<Location> = mutableListOf()
    private var totalWayPoints : Int
    private var bearing: Int

    private val minWayPoints = 5
    private val maxWayPoints = 9

    init {
        this.numWayPoints = random(maxWayPoints,minWayPoints)
        this.totalWayPoints = numWayPoints
        this.bearing = random(360)
    }

    fun createPerimeter(routeRequest: RouteReq, dynamicFactor: Double) : MutableList<Location> {
        pointCollection.add(routeRequest.initialLocation)
        pointCollection.add(destinationPoint(bearing,routeRequest.minutes.toKm().div(totalWayPoints), routeRequest.initialLocation, dynamicFactor))

        numWayPoints = numWayPoints.minus(2)

        val bearingDelta = 360 / totalWayPoints

        var currentPoint = pointCollection.last()

        while ( numWayPoints > 0)
        {
            bearing = bearing.plus(bearingDelta)
            currentPoint = destinationPoint(bearing, routeRequest.minutes.toKm().div(totalWayPoints), currentPoint, dynamicFactor)
            pointCollection.add(currentPoint)
            numWayPoints--
        }

        print("https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&maptype=roadmap")
        pointCollection.map {
            print("&markers=color:blue%7Clabel:S%7C${it.lat},${it.lon}")
        }
        print("&key=***REMOVED***")
        return pointCollection
    }

    private fun destinationPoint(bearing : Int, distance : Float, point : Location, dynamicFactor: Double) : Location {
        val dist = distance / (6371.toMeters() * dynamicFactor) //Earth's radius in Km
        val bearingRad = bearing.toDouble().toRad()

        val lat1 = point.lat.toDouble().toRad()
        val lon1 = point.lon.toDouble().toRad()

        val lat = haversineLat(lat1, dist.toDouble(), bearingRad).toDeg()
        val lon = haversineLon(lat, lat1, lon1, dist.toDouble(), bearingRad).toDeg()

        return Location.newBuilder().setLat(lat.toFloat()).setLon(lon.toFloat()).build()
    }
}