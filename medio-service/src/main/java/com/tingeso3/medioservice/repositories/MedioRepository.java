package com.tingeso3.medioservice.repositories;

import com.tingeso3.medioservice.entities.MedioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedioRepository extends JpaRepository<MedioEntity, Integer> {
}
