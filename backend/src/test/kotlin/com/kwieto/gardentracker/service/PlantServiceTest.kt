package com.kwieto.gardentracker.service

import com.kwieto.gardentracker.model.Plant
import com.kwieto.gardentracker.repository.PlantRepository
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.mockito.Mockito.mock
import org.mockito.Mockito.verify
import org.mockito.kotlin.whenever
import java.time.LocalDate
import java.util.Optional

class PlantServiceTest {

    private val plantRepository: PlantRepository = mock()
    private val plantService = PlantService(plantRepository)

    @Test
    fun `createPlant should save and return plant`() {
        val plant = Plant(
            name = "Tomato",
            variety = "Cherry",
            plantingDate = LocalDate.now()
        )
        val savedPlant = plant.copy(id = 1L)

        whenever(plantRepository.save(plant)).thenReturn(savedPlant)

        val result = plantService.createPlant(plant)

        assertEquals(1L, result.id)
        verify(plantRepository).save(plant)
    }

    @Test
    fun `getPlantById should return plant when exists`() {
        val plant = Plant(id = 1L, name = "Tomato", variety = "Cherry", plantingDate = LocalDate.now())

        whenever(plantRepository.findById(1L)).thenReturn(Optional.of(plant))

        val result = plantService.getPlantById(1L)

        assertEquals("Tomato", result.name)
    }

    @Test
    fun `getPlantById should throw exception when not found`() {
        whenever(plantRepository.findById(1L)).thenReturn(Optional.empty())

        assertThrows<NoSuchElementException> {
            plantService.getPlantById(1L)
        }
    }

    @Test
    fun `deletePlant should call repository`() {
        plantService.deletePlant(1L)

        verify(plantRepository).deleteById(1L)
    }
}