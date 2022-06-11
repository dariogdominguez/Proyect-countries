import React from "react";
import { NavbarContainer, LeftContainer,
        RightContainer, NavbarInnerContainer,
        LinksContainer, StyNavLink,SttyH4} from "../styles/Navbar.Styles";
import { useState } from "react";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper} from "../styles/styledCheckbox";
import { useDispatch } from "react-redux";
import { Separator } from "../styles/Body";


function Nav() {        
        const [sort, setSort] = useState (true)
        const dispatch = useDispatch();
return (
        <NavbarContainer >
                <NavbarInnerContainer >
                <LeftContainer >
                        <LinksContainer >
                                <StyNavLink  to="/Home">Home</StyNavLink>
                                <StyNavLink  to="/CreateActivity">Create new activity</StyNavLink>
                                <StyNavLink  to="/CountryDetails">Country details</StyNavLink>
                        </LinksContainer>
                </LeftContainer> 
                <RightContainer >
                        <SttyH4 >A-Z</SttyH4>
                        <Separator ></Separator>
                        <CheckBoxWrapper >
                        <form onChange={(e) =>{
                        e.preventDefault();
                        dispatch()
                        setSort(!sort)
                        }}>
                        <CheckBox  id="checkbox" type="checkbox"/>
                        <CheckBoxLabel  htmlFor="checkbox" />
                        </form>
                        </CheckBoxWrapper>
                </RightContainer>
                </NavbarInnerContainer>
        </NavbarContainer>

);
}

export default Nav;
