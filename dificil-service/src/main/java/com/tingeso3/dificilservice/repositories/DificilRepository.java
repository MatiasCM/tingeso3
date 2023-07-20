package com.tingeso3.dificilservice.repositories;

import com.tingeso3.dificilservice.entities.DificilEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DificilRepository extends JpaRepository<DificilEntity, Integer> {
}
