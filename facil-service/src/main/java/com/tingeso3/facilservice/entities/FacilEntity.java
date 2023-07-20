package com.tingeso3.facilservice.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.NotNull;

@Entity
@Table(name = "faciles")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FacilEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_faciles;
    private String enunciado;
    private String codigo;
    private String respuesta;
}
