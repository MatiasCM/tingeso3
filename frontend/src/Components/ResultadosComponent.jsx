import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Cronometro from './Cronometro';

export default function ResultadosComponent() {

    const [puntaje, setPuntaje] = useState(
        localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
    );

    const [tiempo, setTiempo] = useState(
        localStorage.getItem('tiempoCronometro') || '00:00:00'
    );

    useEffect(() => {
        setTiempo(localStorage.getItem('tiempoCronometro') || '00:00:00');
    }, []);

    const formatearTiempo = (segundos) => {
        const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
        const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
        const segundosFormateados = String(segundos % 60).padStart(2, '0');
        return `${horas}:${minutos}:${segundosFormateados}`;
    };

    return (
        <>
            <GlobalStyle />
            <HomeStyle>
                <br></br>
                <div className="resultados">
                    <h1>
                        <b>
                            <u>Tu calificación es: {puntaje}/ 7</u>
                        </b>
                    </h1>
                    <h1>Tu tiempo fue de:</h1>
                    <h1>
                        <b>
                            {formatearTiempo(parseInt(tiempo))}
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