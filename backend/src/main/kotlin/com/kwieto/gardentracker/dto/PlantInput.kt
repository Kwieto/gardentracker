package com.kwieto.gardentracker.dto

import com.kwieto.gardentracker.model.PlantStatus
import java.time.LocalDate

data class PlantInput (
    val name: String,
    val variety: String?,
    val plantingDate: LocalDate,
    val status: PlantStatus?,
    val expectedHarvestDate: LocalDate?,
    val notes: String?
)