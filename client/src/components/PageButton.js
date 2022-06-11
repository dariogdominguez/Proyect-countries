import React from "react";
import { InputThree} from "../styles/Navbar.Styles";



export default function PageButton({onClick, pag}){
            return(
                <form >
                    <InputThree key={Math.random(0,9)}
                    type='button'
                    value={pag}
                    onClick={e => onClick(e.target.value)}
                    ></InputThree>
                </form>
            )
        };