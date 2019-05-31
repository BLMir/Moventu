package com.moventum.randomrouter.component

import com.moventum.randomrouter.Location

fun encode(locations: List<Location>): String {
    val result: MutableList<String> = mutableListOf()

    var prevLat = 0
    var prevLong = 0

    locations.map {location ->
        val iLat = (location.lat * 1e5).toInt()
        val iLong = (location.lon * 1e5).toInt()

        val deltaLat = encodeValue(iLat - prevLat)
        val deltaLong = encodeValue(iLong - prevLong)

        prevLat = iLat
        prevLong = iLong

        result.add(deltaLat)
        result.add(deltaLong)
    }

    return result.joinToString("")
}

private fun encodeValue(value: Int): String {
    // Step 2 & 4
    val actualValue = if (value < 0) (value shl 1).inv() else (value shl 1)

    // Step 5-8
    val chunks: List<Int> = splitIntoChunks(actualValue)

    // Step 9-10
    return chunks.map { (it + 63).toChar() }.joinToString("")
}

private fun splitIntoChunks(toEncode: Int): List<Int> {
    // Step 5-8
    val chunks = mutableListOf<Int>()
    var value = toEncode
    while(value >= 32) {
        chunks.add((value and 31) or (0x20))
        value = value shr 5
    }
    chunks.add(value)
    return chunks
}