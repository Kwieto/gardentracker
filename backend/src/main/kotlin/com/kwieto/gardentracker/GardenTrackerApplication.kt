package com.kwieto.gardentracker

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GardenTrackerApplication

fun main(args: Array<String>) {
	runApplication<GardenTrackerApplication>(*args)
}
