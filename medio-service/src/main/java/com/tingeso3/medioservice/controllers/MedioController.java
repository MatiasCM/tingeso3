package com.tingeso3.medioservice.controllers;

import com.tingeso3.medioservice.entities.MedioEntity;
import com.tingeso3.medioservice.services.MedioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/medias")
public class MedioController {
    @Autowired
    MedioService medioService;

    @GetMapping
    public ResponseEntity<ArrayList<MedioEntity>> listadoMedias(){
        ArrayList<MedioEntity> listaProblemas = medioService.obtenerMedias();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }

    @PostMapping
    public ResponseEntity<MedioEntity> agregarNuevaPregunta(@RequestBody MedioEntity nuevaPregunta) {
        MedioEntity preguntaGuardada = medioService.guardarPregunta(nuevaPregunta);
        return new ResponseEntity<>(preguntaGuardada, HttpStatus.CREATED);
    }
}
