import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Form from "react-bootstrap/Form";
import add_to_puntaje from "../Utils/Puntaje";
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

export default function PreguntasComponent({ id, enunciado, codigo, respuesta }) {
    const initialState = {
        answer: "",
    };

    const [puntaje, setPuntaje] = useState(
        localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
    );

    const [trueAnswer, setTrueAnswer] = useState(-1);

    const [input, setInput] = useState(initialState);

    const changeAnswerHandler = (event) => {
        setInput({ ...input, answer: event.target.value });
    };

    const compararRespuestas = (e) => {
        e.preventDefault();
        if (input.answer == respuesta) {
            setPuntaje(add_to_puntaje(7));
            setTrueAnswer(1);
        } else {
            setPuntaje(add_to_puntaje(1));
            setTrueAnswer(0);
        }

        if (localStorage.getItem("restantes") == 0) {
            window.location.href = "/resultados";
        }
    };

    return (
        <div>
            <GlobalStyle />
            <HomeStyle>
                <h1 className="text-center">
                    <b>
                        Pregunta {id}: {enunciado}
                    </b>
                </h1>
                <div className="code-box">
                    <CodeMirror
                        value = {codigo}
                        language="python"
                        height="200px"
                        theme={vscodeDarkInit({
                            settings: {
                                caret: '#c6c6c6',
                                fontFamily: 'monospace',
                            }
                        })}
                        extensions={[javascript({ jsx: true })]}
                    />
                </div>
                <div class="respuesta">
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="respuesta"
                            value={input.answer}
                            onChange={changeAnswerHandler}
                        >
                            <Form.Label>
                                <h3>Ingrese su respuesta aquí: </h3>
                            </Form.Label>
                            <br></br>
                            <Form.Control type="respuesta" placeholder="" />
                        </Form.Group>
                    </Form>
                    {trueAnswer == 1 ? (
                        <h3>¡Respuesta Correcta. Obtienes 7 puntos!</h3>
                    ) : trueAnswer == 0 ? (
                        <h3>Respuesta Incorrecta. Obtienes 1 punto.</h3>
                    ) : (
                        <button varian="primary" onClick={compararRespuestas}>
                            Verificar Respuesta
                        </button>
                    )}
                </div>
                <hr></hr>
            </HomeStyle>
        </div>
    );
}

const GlobalStyle = createGlobalStyle`
body { 
    background-color: #F6F4EB;
}
`;

const HomeStyle = styled.nav`
.text-enunciado {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}
.code-box {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 20px;
    color: black;
}
.respuesta {
    justify-content: center;
    padding-bottom: 50px;
    color: black;
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
`