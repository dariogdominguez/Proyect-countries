import React from 'react';
import { Link } from 'react-router-dom';
import {LandigPageDiv, LandigPageTittle, GoButton} from "../styles/Body"



export default function LandigPage(){
    return(
        <LandigPageDiv >
            <LandigPageTittle >
            <h1>Bienvenido a mi App de paises</h1>
            <Link  to="Home">
                <GoButton >GO!!!</GoButton>
            </Link>
            </LandigPageTittle>
        </LandigPageDiv>
    )
}