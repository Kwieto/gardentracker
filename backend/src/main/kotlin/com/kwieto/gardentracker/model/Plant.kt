package com.kwieto.gardentracker.model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.time.LocalDate
import java.time.LocalDateTime


@Entity
@Table(name = "plants")
data class Plant(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = false)
    val name: String,

    val variety: String? = null,

    @Column(name = "planting_date", nullable = false)
    val plantingDate: LocalDate,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    val status: PlantStatus = PlantStatus.PLANNED,

    @Column(name = "expected_harvest_date")
    val expectedHarvestDate: LocalDate? = null,

    @Column(columnDefinition = "TEXT")
    val notes: String? = null,

    @Column(name = "created_at", nullable = false, updatable = false)
    val createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at", nullable = false)
    val updatedAt: LocalDateTime = LocalDateTime.now()
)