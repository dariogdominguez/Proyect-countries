import styled from "styled-components";
import LandigPage from "../components/LandigPage";

export const Container = styled.div`
height: 95vh;
width: 95vw;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
background-image: url('https://www.wallpaperup.com/uploads/wallpapers/2020/06/04/1377051/7617eb34ba8c8a0f8eb8e31c7c21078c-700.jpg');
background-repeat: no-repeat;
background-size: cover;
border: solid;
border-radius: 20px;
padding-bottom: 20px;
padding-left: 30px;
`;
export const ContainerOne = styled.div`
grid-area: 1 / 1 / 2 / 6;

`
export const ContainerThree = styled.div`
grid-area: 2 / 1 / 6 / 6;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
`;

export const ContainerTwo = styled.div`
  width: 94vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  border: solid;
`;

export const StyButton = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "black"};

cursor: pointer;
font-size: 1em;
margin: 0.5em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
text-decoration: none;
:hover {
    background-color: #707070;
    color: black;
}
@media (max-width: 850px){
    display: none;
}
`
export const LandigPageDiv = styled.div`
  background-image: url('https://i.pinimg.com/originals/79/e6/3f/79e63f4372b085bce16c7121210d39f9.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  height: 90vh;
  width: 90vw;
  display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
border-radius: 20px;
border-style:solid;
border-color: black;
margin:20px;
`

  export const LandigPageTittle = styled.div`
  grid-area: 2 / 1 / 3 / 3;
text-align:center;
color: black;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: larger;
`

export const GoButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: lightseagreen;
  cursor: pointer;
  :hover{
    background-color: seagreen;
    color: black;
  }
`