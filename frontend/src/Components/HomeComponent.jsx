import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Cronometro from "../Utils/Cronometro";
import NavbarHomeComponent from "./NavbarHomeComponent";

export default function HomeComponent() {

    const ComenzarFacil = () => {
        localStorage.setItem("puntaje", 0);
        localStorage.setItem("restantes", 4);
        localStorage.setItem("tiempoCronometro", "00:00:00");
        window.location.href = "/faciles";
    };

    const ComenzarIntermedio = () => {
        localStorage.setItem("puntaje", 0);
        localStorage.setItem("restantes", 4);
        localStorage.setItem("tiempoCronometro", "00:00:00");
        window.location.href = "/medias";
    };

    const ComenzarDificil = () => {
        localStorage.setItem("puntaje", 0);
        localStorage.setItem("restantes", 4);
        localStorage.setItem("tiempoCronometro", "00:00:00");
        window.location.href = "/dificiles";
    };

    return (
        <div>
            <GlobalStyle />
            <HomeStyle>
                <NavbarHomeComponent />
                <h1 className="text-center">
                    <b>
                        {" "}
                        <b>¡Pon a prueba tus conocimientos de Python!</b>

                    </b>
                </h1>
                <h3 className="text-center">
                    {" "}
                    <b>
                        Selecciona tu nivel de dificultad y comienza a resolver los
                        desafíos.{" "}
                    </b>
                </h3>
                <br></br>

                <div className="facil">
                    <h2>
                        <b>Modo Fácil</b>
                    </h2>
                    <button type="button" class="btn btn-primary" onClick={ComenzarFacil}>
                        Comenzar
                    </button>
                </div>
                <br></br>
                <div className="medio">
                    <h2>
                        <b>Modo Intermedio</b>
                    </h2>
                    <button type="button" class="btn btn-primary" onClick={ComenzarIntermedio}>
                        Comenzar
                    </button>
                </div>
                <br></br>
                <div className="dificil">
                    <h2>
                        <b>Modo Difícil</b>
                    </h2>
                    <button type="button" class="btn btn-primary" onClick={ComenzarDificil}>
                        Comenzar
                    </button>
                </div>

                <br></br>
                <div className="nueva-pregunta">
                    <h2>
                        <b>Agregar nueva pregunta</b>
                    </h2>
                    <Link to="/nueva-pregunta" className="btn btn-primary">Acceder</Link>
                </div>
                <br></br>
            </HomeStyle>
        </div>
    )
}

const GlobalStyle = createGlobalStyle`
body {
    background-color: #F6F4EB;
}
`
const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: black;
}

.facil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.dificil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.medio{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.nueva-pregunta{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}
`