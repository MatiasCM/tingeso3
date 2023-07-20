package com.tingeso3.dificilservice.services;

import com.tingeso3.dificilservice.entities.DificilEntity;
import com.tingeso3.dificilservice.repositories.DificilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class DificilService {
    @Autowired
    private DificilRepository dificilRepository;

    public ArrayList<DificilEntity> obtenerDificiles(){
        return (ArrayList<DificilEntity>) dificilRepository.findAll();
    }
}
