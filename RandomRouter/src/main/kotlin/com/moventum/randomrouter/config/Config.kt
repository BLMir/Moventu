package config

import com.natpryce.konfig.*
import com.natpryce.konfig.ConfigurationProperties.Companion.systemProperties


val config = systemProperties() overriding
        EnvironmentVariables() overriding
        ConfigurationProperties.fromResource("local.properties")

val serverPort = Key("Server.port", intType)

val googleDirectionsApi = Key("Google.apiKey", stringType)
val googleStaticApi = Key("Google.staticApiKey", stringType)