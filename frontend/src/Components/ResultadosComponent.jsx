import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Cronometro from './Cronometro';

export default function ResultadosComponent() {

    const [puntaje, setPuntaje] = useState(
        localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
    );

    const [segundos, setSegundos] = useState(
        localStorage.getItem("segundos") ? localStorage.getItem("segundos") : 0
    );

    const [minutos, setMinutos] = useState(
        localStorage.getItem("minutos") ? localStorage.getItem("minutos") : 0
    );

    const [horas, setHoras] = useState(
        localStorage.getItem("horas") ? localStorage.getItem("horas") : 0
    );
    return (
        <>
            <GlobalStyle />
            <HomeStyle>
                <br></br>
                <div className="resultados">
                    <h1>
                        <b>
                            <u>Tu nota es: {puntaje}</u>
                        </b>
                    </h1>
                    <h1>Tardaste un total de: </h1>
                    <h1>
                        <b>
                            {horas} horas, {minutos} minutos y {segundos} segundos.
                        </b>
                    </h1>
                </div>
                <br></br>
                {/* boton para volver al inicio */}
                <a class="btn" href="/"><button>Volver al menú principal</button></a>
            </HomeStyle>
        </>
    );

}

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #0F889E;
    }
`;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
}

.resultados{
    padding-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #0F889E;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}
button {
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #7dcea0;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
button:hover {
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
}
`;