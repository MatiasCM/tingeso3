import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import Form from "react-bootstrap/Form";
import FacilService from "../Services/FacilService";
import IntermedioService from "../Services/IntermedioService";
import DificilService from "../Services/DificilService";
import NavbarHomeComponent from "./NavbarHomeComponent";
import pytr from '../Public/pytr.png';

export default function NuevaPreguntaComponent() {
  const [enunciado, setEnunciado] = useState("");
  const [codigo, setCodigo] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [dificultad, setDificultad] = useState("facil");

  const handleEnunciadoChange = (event) => {
    setEnunciado(event.target.value);
  };

  const handleCodigoChange = (value) => {
    setCodigo(value);
  };

  const handleRespuestaChange = (event) => {
    setRespuesta(event.target.value);
  };

  const handleDificultadChange = (event) => {
    setDificultad(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (dificultad === "facil") {
      FacilService.guardarFacil({
        enunciado: enunciado,
        codigo: codigo,
        respuesta: respuesta
      })
        .then(response => {
          console.log("Pregunta guardada:", response.data);
          window.location.href = "/";
        })
        .catch(error => {
          console.error("Error al guardar la pregunta:", error);
          // Manejo de errores si la pregunta no se pudo guardar en la base de datos.
        });
    } else if (dificultad === "intermedio") {
      IntermedioService.guardarIntermedia({
        enunciado: enunciado,
        codigo: codigo,
        respuesta: respuesta
      })
        .then(response => {
          console.log("Pregunta guardada:", response.data);
          window.location.href = "/";
        })
        .catch(error => {
          console.error("Error al guardar la pregunta:", error);
          // Manejo de errores si la pregunta no se pudo guardar en la base de datos.
        });
    } else if (dificultad === "dificil") {
      DificilService.guardarDificil({
        enunciado: enunciado,
        codigo: codigo,
        respuesta: respuesta
      })
        .then(response => {
          console.log("Pregunta guardada:", response.data);
          window.location.href = "/";
        })
        .catch(error => {
          console.error("Error al guardar la pregunta:", error);
          // Manejo de errores si la pregunta no se pudo guardar en la base de datos.
        });
    } else {
      // Manejar caso de error si la dificultad no es válida
      console.error("Dificultad inválida");
      return;
    }
  };

  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <NavbarHomeComponent />
        <h1 className="text-center">
          <b>
            <b>Agregar nueva pregunta</b>
          </b>
        </h1>
        <div className="code-box">
          <h3>Ingrese el código en lenguaje Python</h3>
          <CodeMirror
            value={codigo}
            onChange={handleCodigoChange}
            language="python"
            height="200px"
            theme={vscodeDarkInit({
              settings: {
                caret: '#c6c6c6',
                fontFamily: 'monospace',
              }
            })}
            extensions={[javascript({ jsx: true })]}
            options={{
              lineWrapping: true,
            }}
          />
        </div>
        <div className="form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="enunciado">
              <Form.Label><h3>Ingrese el enunciado de la pregunta</h3></Form.Label>
              <Form.Control type="text" value={enunciado} onChange={handleEnunciadoChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="respuesta">
              <Form.Label><h3>Ingrese la respuesta</h3></Form.Label>
              <Form.Control type="text" value={respuesta} onChange={handleRespuestaChange} required />
            </Form.Group>
            <Form.Group className="mb-4" controlId="dificultad">
              <Form.Label><h3>Eliga un nivel de dificultad</h3></Form.Label>
              <Form.Control as="select" value={dificultad} onChange={handleDificultadChange} required>
                <option value="facil">Fácil</option>
                <option value="intermedio">Intermedio</option>
                <option value="dificil">Difícil</option>
              </Form.Control>
            </Form.Group>
            <button type="submit" className="btn ">Guardar Pregunta</button>
          </Form>
        </div>
      </HomeStyle>
    </div>
  );
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
`;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}
.code-box {
    max-width: 600px;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 20px;
}
.form {
    width: 50%;
    margin: auto;
    padding: 20px;
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
`