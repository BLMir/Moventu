package com.moventum.randomrouter.entity

data class GoogleDirectionsResponse(val routes: List<Route>) {
    val route : Route
        get() = routes.first()
}
data class Route ( val legs : List<Leg>,val overview_polyline : OverViewPolyline ) {
    val leg : Leg
        get() = legs.first()
}
data class Leg (val distance: Distance, val steps: List<Step>, val duration: Duration)
data class OverViewPolyline (val points: String)
data class Step (val polyline: Polyline)
data class Polyline(val points: String)
data class Distance ( val text: String, val value: Int)
data class Duration ( val text: String, val value: Int)

