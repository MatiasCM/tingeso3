import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import NavbarHomeComponent from "./NavbarHomeComponent";
import img5 from '../Public/img5.jpg';

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
            <BackgroundContainer>
                <BackgroundShape>
                    <BackgroundColor />
                    <BackgroundImage />
                </BackgroundShape>
            </BackgroundContainer>
            <HomeStyle>
                <NavbarHomeComponent />
                <br></br>
                <div className="resultados">
                    <h1>
                        <b>
                            <b>Tu calificación es: {puntaje}/ 7</b>
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
                <a class="btn" href="/"><button>Volver al menú principal</button></a>
            </HomeStyle>
        </>
    );

}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;



const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: black;
}

.resultados{
    padding-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    background-color: #749BC2;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}
button {
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #4682A9;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
button:hover {
    background-color: #e2f1f8;
    color: #0e36ff;
    transform: scale(1.1); /* Use scale instead of matrix for scaling */
}

top {
    clip-path: polygon(0 0,100% 0,100% calc(100% - 50px),50% 100%,0 calc(100% - 50px));
}
.bottom {
    clip-path: polygon(0 0,50% 50px,100% 0,100% 100%,0 100%);
    margin-top: -40px;
}
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Asegura que quede detrás del resto de los elementos */
`;

const BackgroundShape = styled.div`
  position: relative;
  height: 100%;
`;

const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F0F0F0; /* Color de fondo deseado */
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 70%, 0 50%); /* Triángulo hacia adentro */
`;

const BackgroundImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Ajuste para que la imagen ocupe todo el contenedor */
  background-image: url(${img5}); /* Ruta de la imagen */
  background-size: cover; /* Ajuste para que la imagen cubra todo el contenedor */
  background-position: center;
  clip-path: polygon(0 30%, 100% 30%, 100% 100%, 0 100%); /* Triángulo hacia adentro */
  z-index: -1; /* Asegura que la imagen esté detrás del contenido */
  filter: blur(3px);
`;
