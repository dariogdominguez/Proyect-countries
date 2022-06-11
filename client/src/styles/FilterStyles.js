import styled from "styled-components";


export const StyFilterDiv = styled.div`
height: 80px;
width: 95%;
border-radius: 15px;
margin-left: 30px;
display: flex;
padding-left: 25px;
`

export const InputImage = styled.input`
cursor: pointer;
border-radius: 30%;
font-size: 1.5em;
border: 1px solid black;
margin: 5px;
padding:10px;
height: 50px;
width: 50px;
background-color: rgb(255, 255, 255, 0.3);
[title]:hover::after {
  content: attr(title);
  position: absolute;
  top: -100%;
  left: 0;
}
`

export const RadioInputWrapper = styled.div`
  font-size: 1.0625rem;
  font-family: sans-serif;
  label {
    display: inline-block;
    background-color: #e8eeef;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border-radius: 4px;
    margin: 20px;
  }
  label:hover {
    background-color: #f4f7f8;
  }
  input {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  input:checked + label {
    background: palevioletred;
  }
`;