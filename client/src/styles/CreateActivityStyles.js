import styled from "styled-components";

export const MainContainer = styled.div`
height: 95vh;
width: 95vw;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
background-image: url('https://www.wallpaperup.com/uploads/wallpapers/2020/06/04/1377051/7617eb34ba8c8a0f8eb8e31c7c21078c-700.jpg');
background-repeat: no-repeat;
background-size: cover;
border: solid;
border-radius: 20px;
padding-bottom: 20px;
padding-left: 30px;
`

export const TitleContainer = styled.div`
grid-area: 1 / 2 / 2 / 3;
text-align: center;
color: white;
`

export const FormContainer = styled.div`
grid-area: 2 / 2 / 5 / 3;
background-color: rgb(166, 166, 166, 0.7);
border-radius: 15px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
padding: 50px;
`
export const ListContainer = styled.div`
grid-area: 2 / 3 / 6 / 4;
background-color: rgb(166, 166, 166, 0.7);
border-radius: 15px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
text-align: center;
margin-left: 20px;
margin-right: 20px;
color: white;
`

export const StyledLabel = styled.label`
color: black;
font-size: large;
font-weight: bold;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin: 5px;
margin-bottom: 15px;
`
export const StyledInputTwo = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 5px;
  width: 200px;
`

export const StyledButton = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid papayawhip;
  border-radius: 3px;
  :hover{
      background-color: gray;
      cursor: pointer;
  }
  :disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
`
export const StyledTextArea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 5px;
`

export const StyledP = styled.p`
background-color: rgb(255, 77, 77);
margin:5px;
text-decoration: solid;
color: black;
font-size: large;
font-weight: bold;
`
