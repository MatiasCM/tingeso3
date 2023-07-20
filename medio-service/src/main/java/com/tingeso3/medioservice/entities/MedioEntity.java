package com.tingeso3.medioservice.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.NotNull;

@Entity
@Table(name = "medias")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MedioEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_medias;
    private String enunciado;
    private String codigo;
    private String respuesta;
}
