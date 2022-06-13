import React, { createRef } from "react";
import Nav from "../Nav";
import { useState } from "react";
import { MainContainer, FormContainer, TitleContainer,
        StyledLabel, StyledInputTwo, StyledButton, StyledP, StyledTextArea} from "../../styles/CreateActivityStyles";
import {validate} from './Validaciones';
import PredictiveInput from "./PredictiveInput";
import { useSelector } from "react-redux";


export default function NuevaReceta (){
    const [name, setName] = useState("")
    const [dificulty, setDificulty] = useState("");
    const [duration, setDuration] = useState("");
    const [season, setSeason] = useState("");
    const [tipoDeDieta, setTipoDeDieta] = useState([]);

    const errorMessage = validate(name, dificulty, duration, season)

    return(
        <div>
            <Nav />
            <MainContainer>
            <TitleContainer >
            <h1>Create your own activity</h1>
            <p></p>
            </TitleContainer>
            <FormContainer >
                <form onSubmit={e => {
                e.preventDefault()
                validate(name, dificulty, duration, season);
                let nuevaReceta ={
                    name,
                    dificulty,
                    duration,
                    season, 
                }
                if(tipoDeDieta.length>=1){}//crear
            }}>
                    <tr>
                    <td><StyledLabel >Name:</StyledLabel></td>
                    <td><StyledInputTwo 
                    type = "text"
                    placeholder="Activity´s name"
                    autoComplete = "off"
                    value = {name}
                    onChange ={ e => setName(e.target.value)
                    }></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Dificulty: </StyledLabel></td>
                    <td><StyledInputTwo 
                    type = "text"
                    placeholder="Activity´s dificulty"
                    autoComplete = "off"
                    value = {dificulty}
                    onChange ={ e => setDificulty(e.target.value)}
                    ></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Duration: </StyledLabel></td>
                    <td><StyledInputTwo                      
                    type = "text"
                    placeholder="Activity´s duration"
                    autoComplete = "off"
                    value = {duration}
                    onChange ={ e => setDuration(e.target.value)}></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Season: </StyledLabel></td>
                    <td><StyledInputTwo                      
                    type = "text"
                    placeholder="Activity´s season"
                    autoComplete = "off"
                    value = {season}
                    onChange ={ e => setSeason(e.target.value)}></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Select Country: </StyledLabel></td>
                    <td><PredictiveInput></PredictiveInput></td>
                    </tr>
                <StyledP >{errorMessage}</StyledP>
                <StyledButton  type="submit" disabled={errorMessage}>Enviar</StyledButton>
                </form>
            </FormContainer>
            </MainContainer>
        </div>
    )

}