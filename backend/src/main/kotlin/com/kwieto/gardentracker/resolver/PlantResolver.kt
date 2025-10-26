package com.kwieto.gardentracker.resolver

import com.kwieto.gardentracker.dto.PlantInput
import com.kwieto.gardentracker.model.Plant
import com.kwieto.gardentracker.model.PlantStatus
import com.kwieto.gardentracker.service.PlantService
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller

@Controller
class PlantResolver(
    private val plantService: PlantService
) {

    @QueryMapping
    fun plants(): List<Plant> {
        return plantService.getAllPlants()
    }

    fun plant(@Argument id: Long): Plant {
        return plantService.getPlantById(id)
    }

    fun plantsByStatus(@Argument status: PlantStatus): List<Plant> {
        return plantService.getPlantsByStatus(status)
    }

    @MutationMapping
    fun createPlant(@Argument input: PlantInput): Plant {
        val plant = Plant(
            name = input.name,
            variety = input.variety,
            plantingDate = input.plantingDate,
            status = input.status ?: PlantStatus.PLANNED,
            expectedHarvestDate = input.expectedHarvestDate,
            notes = input.notes
        )
        return plantService.createPlant(plant)
    }

    @MutationMapping
    fun updatePlant(@Argument id: Long, @Argument input: PlantInput): Plant {
        val updates = Plant(
            name = input.name,
            variety = input.variety,
            plantingDate = input.plantingDate,
            status = input.status ?: PlantStatus.PLANNED,
            expectedHarvestDate = input.expectedHarvestDate,
            notes = input.notes
        )
        return plantService.updatePlant(id, updates)
    }

    @MutationMapping
    fun deletePlant(@Argument id: Long): Boolean {
        plantService.deletePlant(id)
        return true
    }
}