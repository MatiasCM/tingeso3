package com.tingeso3.facilservice.controllers;

import com.tingeso3.facilservice.entities.FacilEntity;
import com.tingeso3.facilservice.services.FacilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/faciles")
public class FacilController {
    @Autowired
    FacilService facilService;

    @GetMapping
    public ResponseEntity<ArrayList<FacilEntity>> listadoFaciles(){
        ArrayList<FacilEntity> listaProblemas = facilService.obtenerFaciles();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }
}
