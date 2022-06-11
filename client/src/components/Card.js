import React from "react";
import { useState } from "react";

import { CardWrapper, CardImage, CardTextWrapper, 
        CardTextTitle, CardStatWrapper, CardTextBody, StyledList, Score, H4} from "../styles/Cards.Styles";

const imageOne = "https://cdn-icons-png.flaticon.com/512/616/616821.png";
const imageTwo = "https://cdn-icons-png.flaticon.com/512/616/616655.png";

export default function Card ({id, name, continent, capital, imgUrl}) {
    const [scoreImg, setScoreImg] = useState(false)

    return(
        <CardWrapper >
            <CardImage src={imgUrl}>
            <Score>
            <img src={scoreImg?imageTwo:imageOne} onClick={()=>{setScoreImg(!scoreImg)}}alt=" " width="50" height="50"></img>
            </Score>
            </CardImage>
            <CardTextWrapper >
                <CardTextTitle>{name}</CardTextTitle>
                <br></br>
                <H4>{continent}</H4>
            </CardTextWrapper>
        </CardWrapper>
    );
}