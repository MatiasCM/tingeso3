package com.tingeso3.facilservice.repositories;

import com.tingeso3.facilservice.entities.FacilEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilRepository extends JpaRepository<FacilEntity, Integer> {
}
