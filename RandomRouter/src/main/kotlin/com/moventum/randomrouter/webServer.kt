package com.moventum.randomrouter

import com.moventum.randomrouter.component.location
import com.moventum.randomrouter.service.RouteService
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.ContentNegotiation
import io.ktor.http.ContentType
import io.ktor.jackson.jackson
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty

fun main(args: Array<String>) {

    val routeService = RouteService()
    embeddedServer(Netty, 8080) {
        install(ContentNegotiation) {
            jackson {
            }
        }
        routing {
            get("/") {
                call.respondText("My Example Blog", ContentType.Text.Html)
            }
            post("/generate/route") {
                val body = call.receive<RouteRequest>()
                val result = routeService.getRoute(
                    RouteReq.newBuilder()
                        .setMinutes(body.minutes)
                        .setInitialLocation(
                            location {
                                lat = body.initialLocation.lat
                                lon = body.initialLocation.lon
                            }
                        )
                        .build()
                )
                call.respond(
                    mapOf(
                        "distance" to result.distance,
                        "duration" to result.duration,
                        "route" to result.map
                    )
                )
            }
        }
    }.start(wait = true)
}

data class RouteRequest(val minutes: Int, val initialLocation: Locations)
data class Locations(val lat: Double, val lon: Double)
