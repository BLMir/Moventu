package com.moventum.randomrouter.component

import com.moventum.randomrouter.AVG_WALK_SPEED
import com.moventum.randomrouter.Location
import kotlin.random.Random

fun random(to : Int , from : Int = 0) : Int = Random.nextInt(to - from + 1) + from
fun Int.toKm () : Float = ( this.toFloat() / AVG_WALK_SPEED ) * 1000
fun Int.toMeters () : Int = this * 1000
fun Double.toRad () : Double = this *  Math.PI / 180
fun haversineLat (lat1 : Double, dist: Double, bearing : Double) : Double {
    return Math.asin(Math.sin(lat1) * Math.cos(dist) + Math.cos(lat1) * Math.sin(dist) * Math.cos(bearing) )
}

fun haversineLon (lat2 : Double, lat1 : Double, lon1 : Double, dist: Double, bearing : Double) : Double
{
    return lon1 + Math.atan2(Math.sin(bearing) * Math.sin(dist) * Math.cos(lat1), Math.cos(dist) -  Math.sin(lat1) * Math.sin(lat2))
}

fun Double.toDeg () : Double = this * 180 / Math.PI

fun location(block: Location.Builder.() -> Unit) = Location.newBuilder().apply(block).build()

