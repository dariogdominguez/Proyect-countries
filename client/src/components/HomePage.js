import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container,ContainerOne, ContainerThree, ContainerTwo} from "../styles/Body";
import Nav from "../components/Nav";
import Filters from "./Filters";
import PageButton from "./PageButton";
import Card from "./Card";
import { getCountries } from '../features/filters/countriesSlice'


export default function Home(){
    let currentPageList = [];

    const [page, setPage] = useState (1)
    function onClick(page){
        setPage(page)
    }
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

    const allCountries = useSelector ((state) => state.countries.list);
    const amountOfCountries = useSelector (state => state.countries.amount);
    const copyList = allCountries.slice();

    const  paginatedCountries = [];

    function onClick(page){
        setPage(page)
    }
    console.log(page);
    let buttons = Math.ceil(amountOfCountries/10);
    let bot = [];
    

    while(copyList.length > 0) {     
        paginatedCountries.push(copyList.splice(0, 10))
    };


return(
<div>
<Nav />
<Container >
<ContainerOne >
<Filters></Filters>
<ContainerTwo >
{(() => {for(let i=1; i<=buttons;i++){
bot.push(<PageButton key={1+Math.random(0,9)} onClick={onClick} pag={i}></PageButton>)}
return bot})()
}
</ContainerTwo>
</ContainerOne >
<ContainerThree>
{paginatedCountries[page-1]?.map((element)=>(
<>
<Card key={1+Math.random(0,9)} id={element.id} name={element.name} continent={element.continent} capital={element.capital} imgUrl={element.flagImage+"?api_key=4240cbd0-42d7-438f-aa4d-0d1432907ea0"}></Card>
</>
))}
</ContainerThree>
</Container>
</div>
)
}