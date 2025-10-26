package com.kwieto.gardentracker.service

import com.kwieto.gardentracker.model.Plant
import com.kwieto.gardentracker.model.PlantStatus
import com.kwieto.gardentracker.repository.PlantRepository
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
@Transactional
class PlantService(
    private val plantRepository: PlantRepository
) {
    fun createPlant(plant: Plant): Plant {
        return plantRepository.save(plant);
    }

    fun getAllPlants(): List<Plant> {
        return plantRepository.findAll();
    }

    fun getPlantById(id: Long): Plant {
        return plantRepository.findById(id)
            .orElseThrow {
                NoSuchElementException("Plant with id $id not found")
            }
    }

    fun updatePlant(id: Long, updates: Plant): Plant {
        val existing = getPlantById(id)
        val updated = existing.copy(
            name = updates.name,
            variety = updates.variety,
            plantingDate = updates.plantingDate,
            status = updates.status,
            expectedHarvestDate = updates.expectedHarvestDate,
            notes = updates.notes,
            updatedAt = LocalDateTime.now()
        )
        return plantRepository.save(updated)
    }

    fun deletePlant(id: Long) {
        plantRepository.deleteById(id)
    }

    fun getPlantsByStatus(status: PlantStatus): List<Plant> {
        return plantRepository.findByStatus(status)
    }
}