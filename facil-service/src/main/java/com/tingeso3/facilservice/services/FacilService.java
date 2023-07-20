package com.tingeso3.facilservice.services;

import com.tingeso3.facilservice.entities.FacilEntity;
import com.tingeso3.facilservice.repositories.FacilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class FacilService {
    @Autowired
    private FacilRepository facilRepository;

    public ArrayList<FacilEntity> obtenerFaciles(){
        return (ArrayList<FacilEntity>) facilRepository.findAll();
    }
}
