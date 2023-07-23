import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import Form from "react-bootstrap/Form";

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
        // Obtener la URL del backend según la dificultad seleccionada
        let urlBackend = "";
        if (dificultad === "facil") {
            urlBackend = "http://localhost:8080/faciles";
        } else if (dificultad === "intermedio") {
            urlBackend = "http://localhost:8080/medias";
        } else if (dificultad === "dificil") {
            urlBackend = "http://localhost:8080/dificiles";
        } else {
            // Manejar caso de error si la dificultad no es válida
            console.error("Dificultad inválida");
            return;
        }

        fetch(urlBackend, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                enunciado: enunciado,
                codigo: codigo,
                respuesta: respuesta
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Pregunta guardada:", data);
                window.location.href = "/";
            })
            .catch(error => {
                console.error("Error al guardar la pregunta:", error);
                // Manejo de errores si la pregunta no se pudo guardar en la base de datos.
            });
    };

    return (
        <div>
            <GlobalStyle />
            <HomeStyle>
                <h1 className="text-center">
                    <b>
                        <u>Agregar nueva pregunta</u>
                    </b>
                </h1>
                <div className="code-box">
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
                            <Form.Label>Enunciado:</Form.Label>
                            <Form.Control type="text" value={enunciado} onChange={handleEnunciadoChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="respuesta">
                            <Form.Label>Respuesta:</Form.Label>
                            <Form.Control type="text" value={respuesta} onChange={handleRespuestaChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="dificultad">
                            <Form.Label>Dificultad:</Form.Label>
                            <Form.Control type="text" value={dificultad} onChange={handleDificultadChange} required />
                        </Form.Group>
                        <button type="submit" className="btn btn-primary">Guardar Pregunta</button>
                    </Form>
                </div>
            </HomeStyle>
        </div>
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
    color: #FDFEFE;
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
`