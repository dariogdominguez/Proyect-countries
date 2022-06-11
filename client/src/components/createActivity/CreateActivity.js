import React, { createRef } from "react";
import Nav from "../Nav";
import { useState } from "react";
import { MainContainer, FormContainer, TitleContainer,
        StyledLabel, StyledInputTwo, StyledButton, StyledP, StyledTextArea} from "../../styles/CreateActivityStyles";
import {validate} from './Validaciones';


export default function NuevaReceta (){
    const [name, setName] = useState("")
    const [dificulty, setDificulty] = useState("");
    const [duration, setDuration] = useState("");
    const [season, setSeason] = useState("");
    const [pasoAPaso, setPasoAPaso] = useState("");
    const [tipoDeDieta, setTipoDeDieta] = useState([]);
    

    const errorMessage = validate(name, dificulty, duration, season, tipoDeDieta, pasoAPaso)

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
                    <br/>
                    <StyledLabel >Tipos de receta </StyledLabel><br/>
                    <tr>
                    <td><StyledLabel >gluten free</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"gluten free"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >dairy free</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"dairy free"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >vegan</StyledLabel></td>
                    <td><StyledInputTwo type={"checkbox"} value={"vegan"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >fodmap friendly</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"fodmap friendly"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >ketogenic</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"ketogenic"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >paleolithic</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"paleolithic"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >primal</StyledLabel></td>
                    <td><StyledInputTwo type={"checkbox"} value={"primal"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >pescatarian</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"pescatarian"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    </tr>
                <StyledP >{errorMessage}</StyledP>
                <StyledButton  type="submit" disabled={errorMessage}>Enviar</StyledButton>
                </form>
            </FormContainer>
            </MainContainer>
        </div>
    )

}