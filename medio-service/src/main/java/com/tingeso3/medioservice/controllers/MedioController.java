package com.tingeso3.medioservice.controllers;

import com.tingeso3.medioservice.entities.MedioEntity;
import com.tingeso3.medioservice.services.MedioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
