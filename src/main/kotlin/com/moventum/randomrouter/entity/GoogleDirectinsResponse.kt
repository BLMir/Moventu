package com.moventum.randomrouter.entity

data class GoogleDirectionsResponse(val routes: List<Route>) {
    val route : Route
        get() = routes.first()
}
data class Route ( val legs : List<Leg> ) {
    val leg : Leg
        get() = legs.first()
}
data class Leg (val distance: Distance)
data class Distance ( val text: String, val value: Int)
