package com.tingeso3.dificilservice.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.NotNull;

@Entity
@Table(name = "dificiles")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DificilEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_dificiles;
    private String enunciado;
    private String codigo;
    private String respuesta;
}
