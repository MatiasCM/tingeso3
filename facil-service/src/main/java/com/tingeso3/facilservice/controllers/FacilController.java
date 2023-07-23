package com.tingeso3.facilservice.controllers;

import com.tingeso3.facilservice.entities.FacilEntity;
import com.tingeso3.facilservice.services.FacilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<FacilEntity> agregarNuevaPregunta(@RequestBody FacilEntity nuevaPregunta) {
        FacilEntity preguntaGuardada = facilService.guardarPregunta(nuevaPregunta);
        return new ResponseEntity<>(preguntaGuardada, HttpStatus.CREATED);
    }
}
