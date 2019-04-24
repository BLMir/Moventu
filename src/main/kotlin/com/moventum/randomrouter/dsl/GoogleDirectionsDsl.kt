package com.moventum.randomrouter.dsl

import com.moventum.randomrouter.Location
import config.config
import config.googleDirectionsApi

class UrlGoogleDirectionsBuilder {

    companion object {
        val url = "https://maps.googleapis.com/maps/api/directions/json?key=${config[googleDirectionsApi]}"
    }

    private lateinit var origin: String
    private lateinit var wayPoints: String
    private lateinit var mode: String
    private lateinit var avoid: String

    private fun Location.toPlain() = "$lat,$lon"

    fun wayPoints(locations: List<Location>) {
        if (locations.isEmpty()) {
            throw IllegalArgumentException("error")
        }
        this.wayPoints = "&waypoints=via:${locations.subList(1, locations.size).joinToString ("|via:") { it.toPlain() }}"
    }

    fun startPoint(origin: Location){
        this.origin = "&origin=${origin.toPlain()}&destination=${origin.toPlain()}"
    }

    fun build(): String {
        return toString()
    }

    override fun toString(): String {
        return "$url$origin$wayPoints$mode$avoid"
    }

    fun mode(mode: String) {
        this.mode = "&mode=$mode"
    }

    fun avoid(avoid: List<String>) {
        this.avoid = "&avoid=${avoid.joinToString()}"
    }

}

fun urlGoogleDirections(block: UrlGoogleDirectionsBuilder.() -> Unit): UrlGoogleDirectionsBuilder {
    return UrlGoogleDirectionsBuilder().apply(block)
}
