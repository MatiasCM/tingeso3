import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Cronometro from "../Utils/Cronometro";
import NavbarHomeComponent from "./NavbarHomeComponent";
import img1 from '../Public/img1.jpg';
import img2 from '../Public/img2.jpg';
import img3 from '../Public/img3.jpg';
import img4 from '../Public/img4.jpg';
import pytr from '../Public/pytr.png';

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
                            Selecciona un nivel de dificultad para iniciar con los desafíos
                        </b>
                    </h3>
                    <br></br>

                    <div className="button-container">
                        <div className="facil">
                            <h2>
                                <b>Fácil</b>
                            </h2>
                            <button type="button" className="btn btn-primary comenzar-button" onClick={ComenzarFacil}>
                                Comenzar
                            </button>
                        </div>
                        <br></br>
                        <div className="medio">
                            <h2>
                                <b>Intermedio</b>
                            </h2>
                            <button type="button" className="btn btn-primary comenzar-button" onClick={ComenzarIntermedio}>
                                Comenzar
                            </button>
                        </div>
                        <br></br>
                        <div className="dificil">
                            <h2>
                                <b>Difícil</b>
                            </h2>
                            <button type="button" className="btn btn-primary comenzar-button" onClick={ComenzarDificil}>
                                Comenzar
                            </button>
                        </div>
                    </div>

                    <h4 className="text-center">
                        <b>
                            ¿Tienes desafios nuevos para compartir? ¡Agrega una nueva pregunta!
                        </b>
                    </h4>
                    <br></br>
                    <div className="nueva-pregunta">
                        <h2>
                            <b>Agregar nueva pregunta </b>

                        </h2>
                        <Link to="/nueva-pregunta" className="btn btn-primary acceder">Acceder</Link>
                    </div>
                    <br></br>
                </HomeStyle>
        </div>
    )
}

const GlobalStyle = createGlobalStyle`
body { 
    background-color: #F6F4EB;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(${pytr});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed; /* Fija la imagen al fondo */
    z-index: -1;
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

.button-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.comenzar-button {
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

.comenzar-button:hover {
    background-color: #e2f1f8;
    color: #0e36ff;
    transform: scale(1.1); /* Use scale instead of matrix for scaling */
}

.facil {
    position: relative; /* Add positioning to contain pseudo-element */
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    border-radius: 25px;
    padding: 20px;
    width: 30%;
    margin: 10px;
    border: 5px solid #FDFEFE;
    height: 300px;
    overflow: hidden; /* Hide the overflow of pseudo-element */
}

.facil::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${img1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(3px); /* Adjust the blur intensity as needed */
    z-index: -1; /* Send the pseudo-element behind the content */
}

.dificil{
    position: relative; /* Add positioning to contain pseudo-element */
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    border-radius: 25px;
    padding: 20px;
    width: 30%;
    margin: 10px;
    border: 5px solid #FDFEFE;
    height: 300px;
    overflow: hidden; /* Hide the overflow of pseudo-element */
}

.dificil::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${img3});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(3px); /* Adjust the blur intensity as needed */
    z-index: -1; /* Send the pseudo-element behind the content */
}

.medio{
    position: relative; /* Add positioning to contain pseudo-element */
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    border-radius: 25px;
    padding: 20px;
    width: 30%;
    margin: 10px;
    border: 5px solid #FDFEFE;
    height: 300px;
    overflow: hidden; /* Hide the overflow of pseudo-element */
}

.medio::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${img2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(3px); /* Adjust the blur intensity as needed */
    z-index: -1; /* Send the pseudo-element behind the content */
}

.nueva-pregunta {
    position: relative;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    border-radius: 25px;
    padding: 20px;
    width: 30%;
    margin: 10px auto; /* Use auto for horizontal centering */
    border: 5px solid #FDFEFE;
    height: 300px;
    overflow: hidden;
}

/* Pseudo-element for the background image */
.nueva-pregunta::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${img4});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(3px);
    z-index: -1;
}

.acceder {
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

.acceder:hover {
    background-color: #e2f1f8;
    color: #0e36ff;
    transform: scale(1.1); /* Use scale instead of matrix for scaling */
}
`