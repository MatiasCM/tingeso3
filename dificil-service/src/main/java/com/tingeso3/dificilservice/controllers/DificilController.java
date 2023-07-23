package com.tingeso3.dificilservice.controllers;

import com.tingeso3.dificilservice.entities.DificilEntity;
import com.tingeso3.dificilservice.services.DificilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/dificiles")
public class DificilController {
    @Autowired
    DificilService dificilService;

    @GetMapping
    public ResponseEntity<ArrayList<DificilEntity>> listadoDificiles(){
        ArrayList<DificilEntity> listaProblemas = dificilService.obtenerDificiles();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }

    @PostMapping
    public ResponseEntity<DificilEntity> agregarNuevaPregunta(@RequestBody DificilEntity nuevaPregunta) {
        DificilEntity preguntaGuardada = dificilService.guardarPregunta(nuevaPregunta);
        return new ResponseEntity<>(preguntaGuardada, HttpStatus.CREATED);
    }
}
