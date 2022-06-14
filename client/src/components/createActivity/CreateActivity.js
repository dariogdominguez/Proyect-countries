import React from "react";
import Nav from "../Nav";
import { useState, useEffect } from "react";
import { MainContainer, FormContainer, TitleContainer,
        StyledLabel, StyledInputTwo, StyledButton, StyledP, ListContainer} from "../../styles/CreateActivityStyles";
import {validate} from './Validaciones';
import PredictiveInput from "./PredictiveInput";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from '../../features/filters/countriesSlice'


export default function NewActivity (){
    const [name, setName] = useState("")
    const [dificulty, setDificulty] = useState("");
    const [duration, setDuration] = useState("");
    const [season, setSeason] = useState("");
    const [list, setList] = useState([]);

    const dispatch = useDispatch();

    const errorMessage = validate(name, dificulty, duration, season);
    const allCountries = useSelector (state => state.countries.countriesList);

    const callBack = (childData) => {
        if(list.find(
            (contry) => 
            contry.toLowerCase() === childData.toLowerCase())){ 
                alert("This country already has been added");
            }
            else setList([...list, childData])
    }

    useEffect(()=>{
    dispatch(getCountries());
    }, [dispatch])

    console.log(list)

    return(
        <div>
            <Nav />
            <MainContainer>
            <TitleContainer >
            <h1>Create your own activity</h1>
            <p></p>
            </TitleContainer>
            {(()=> {if(list.length>0) return <ListContainer>
                <ul>
                    {
                        list.map(e => <li>{e}</li>)
                    }
                </ul>
            </ListContainer>})()}
            <FormContainer >
                <form onSubmit={e => {
                e.preventDefault()
                validate(name, dificulty, duration, season);
                let NewActivity ={
                    name,
                    dificulty,
                    duration,
                    season, 
                }
                if(list.length>=1){}//crear
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
                    <td><PredictiveInput suggestions={allCountries} callBack ={callBack}> </PredictiveInput></td>
                    </tr>
                <StyledP >{errorMessage}</StyledP>
                <StyledButton  type="submit" disabled={errorMessage}>Enviar</StyledButton>
                </form>
            </FormContainer>
            </MainContainer>
        </div>
    )

}