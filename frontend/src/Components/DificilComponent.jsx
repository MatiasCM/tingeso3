import React, { Component } from "react";
import Preguntas from "./PreguntasComponent";
import styled from "styled-components";
import Navbar from "./NavbarComponent";
import DificilService from "../Services/DificilService";

class DificilComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
        };
    }

    componentDidMount() {
        DificilService.obtenerDificiles().then((response) => {
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
                            <u>Prueba: Modo Dificil </u>
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

export default DificilComponent;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
}
.asd{
    padding-top: 10px;
    padding-bottom: 30px;

}
`