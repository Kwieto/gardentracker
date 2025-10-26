package com.kwieto.gardentracker.repository

import com.kwieto.gardentracker.model.Plant
import com.kwieto.gardentracker.model.PlantStatus
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PlantRepository : JpaRepository<Plant, Long> {
     fun findByStatus(status: PlantStatus): List<Plant>
}