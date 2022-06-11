import React from "react";
import { StyFilterDiv, InputImage, RadioInputWrapper } from "../styles/FilterStyles";
import { Input} from "../styles/Navbar.Styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



export default function Filters(){
    useSelector ((state) => state.recetas);
    const [receta, setReceta] = useState("")

    const dispatch = useDispatch();

    return(
        <StyFilterDiv >
        <form onClick={(e) =>{
            e.preventDefault();
            dispatch();
            }}>
            <InputImage value={"Renovar"} title={"Renovar"} type="image" src="https://cdn-icons.flaticon.com/png/512/2315/premium/2315556.png?token=exp=1654726995~hmac=f544096204c9aa457dd5c4038968c171" />
            <InputImage value={"Gluten free"} title={"Gluten free"} type="image" src="https://cdn-icons-png.flaticon.com/512/625/625477.png" />
            <InputImage value={"Dairy free"} title={"Dairy free"} type="image" src="https://cdn-icons-png.flaticon.com/512/2017/2017258.png" />
            <InputImage value={"Lacto ovo vegetarian"}  title={"Lacto ovo vegetarian"} type="image" src="https://cdn-icons-png.flaticon.com/512/1187/1187540.png" />
            <InputImage value={"Paleolithic"}  title={"Paleolithic"} type="image" src="https://cdn-icons.flaticon.com/png/512/4722/premium/4722111.png?token=exp=1654727289~hmac=f56d33dbf462ba41b5b00a6b6929cc3d" />
            <InputImage value={"Whole 30"}  title={"Whole 30"} type="image" src="https://cdn-icons-png.flaticon.com/512/2808/2808418.png" />
            <InputImage value={"Primal"}  title={"Primal"} type="image" src="https://cdn-icons-png.flaticon.com/512/980/980780.png" />
            <InputImage value={"Pescatarian"}  title={"Pescatarian"} type="image" src="https://cdn-icons-png.flaticon.com/512/2364/2364126.png" />
            <InputImage value={"Ketogenic"}  title={"Ketogenic"} type="image" src="https://cdn-icons-png.flaticon.com/512/3163/3163735.png" />
        </form>
        <form onSubmit={(e) =>{
            e.preventDefault();
            dispatch();
            setReceta("")
        }}>
            <Input
            placeholder="Bucar por nombre..."
            value={receta}
            onChange={e =>setReceta(e.target.value)}
            ></Input>
            <Input type={'submit'} value={'Buscar'}></Input>
        </form>
        <RadioInputWrapper>
        </RadioInputWrapper>
        </StyFilterDiv>
    )
};
