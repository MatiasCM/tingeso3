import React, { Component } from "react";
import Preguntas from "./PreguntasComponent";
import styled from "styled-components";
import Navbar from "./NavbarComponent";
import IntermedioService from "../Services/IntermedioService";

class IntermedioComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
        };
    }

    componentDidMount() {
        IntermedioService.obtenerIntermedias().then((response) => {
            this.setState({ datas: response.data });
        }
        );
    }

    getRandomQuestions = () => {
        const { datas } = this.state;
        // Clonamos el array para no afectar el estado original
        const shuffledQuestions = [...datas];
        // Obtenemos 4 preguntas aleatorias sin repetir
        const randomQuestions = [];
        while (randomQuestions.length < 4 && shuffledQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * shuffledQuestions.length);
            const randomQuestion = shuffledQuestions.splice(randomIndex, 1)[0];
            randomQuestions.push(randomQuestion);
        }
        return randomQuestions;
    };
    render() {
        const randomQuestions = this.getRandomQuestions();
        return (
            <HomeStyle>
                <Navbar />
                <div className="text-center">
                    <h1 className="asd">
                        <b>
                            <b>Modo Intermedio </b>
                        </b>
                    </h1>
                    {randomQuestions.map((datas) => (
                        <Preguntas
                            id={datas.id}
                            enunciado={datas.enunciado}
                            codigo={datas.codigo}
                            respuesta={datas.respuesta}
                        ></Preguntas>
                    ))}
                </div>
            </HomeStyle>
        );
    }
}

export default IntermedioComponent;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}
.asd{
    padding-top: 10px;
    padding-bottom: 30px;

}
`