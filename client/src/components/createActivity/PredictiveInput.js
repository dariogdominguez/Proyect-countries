import React from "react";
import { StyledInputTwo } from "../../styles/CreateActivityStyles";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";


export default function PredictiveInput () {
    const list = useSelector ((state) => state.countries.list);
    const [countries, setCountries] = useState("");
    const dispatch = useDispatch()



    return(
        <form>
        <StyledInputTwo
        type = "text"
        placeholder="Select country"
        autoComplete = "off"
        value = {countries}
        onChange ={ e => setCountries(e.target.value)}></StyledInputTwo>
        <ul></ul>
        </form>
    )
}