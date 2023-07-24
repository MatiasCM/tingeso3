import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Cronometro() {
  const tiempoInicial = parseInt(localStorage.getItem("tiempoCronometro")) || 0;
  const [tiempo, setTiempo] = useState(tiempoInicial);

  // Función para formatear el tiempo en formato HH:mm:ss
  const formatearTiempo = (tiempo) => {
    const horas = String(Math.floor(tiempo / 3600)).padStart(2, "0");
    const minutos = String(Math.floor((tiempo % 3600) / 60)).padStart(2, "0");
    const segundos = String(tiempo % 60).padStart(2, "0");
    return `${horas}:${minutos}:${segundos}`;
  };

  // Función para reiniciar el cronómetro
  const resetCronometro = () => {
    setTiempo(0);
    localStorage.setItem("tiempoCronometro", "00:00:00");
  };

  // Actualizar el tiempo cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTiempo((prevTiempo) => {
        const nuevoTiempo = prevTiempo + 1;
        localStorage.setItem("tiempoCronometro", String(nuevoTiempo));
        return nuevoTiempo;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <HomeStyle>
        <div className="cronometro">{formatearTiempo(tiempo)}</div>
      </HomeStyle>
    </div>
  );
}

export default Cronometro;

const HomeStyle = styled.nav`
  .cronometro {
    font-family: Arial, sans-serif;
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
  }

  button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  button:active {
    background-color: #3e8e41;
  }
`;
