package com.tingeso3.medioservice.services;

import com.tingeso3.medioservice.entities.MedioEntity;
import com.tingeso3.medioservice.repositories.MedioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MedioService {
    @Autowired
    private MedioRepository medioRepository;

    public ArrayList<MedioEntity> obtenerMedias(){
        return (ArrayList<MedioEntity>) medioRepository.findAll();
    }
}
