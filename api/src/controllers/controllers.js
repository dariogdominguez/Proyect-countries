const axios = require ('axios');
const { Op } = require("sequelize");
const { response } = require('express');

//importamos los modelos para usar en las funciones
const {Country, Activity} = require ('../db');

//importamos los distintos endpoints del archivo.env
const { END_POINT, END_POINT_NAME, END_POINT_CODE } = process.env;



const allApiInfo = async () =>{
    await axios.get(END_POINT)
    .then(response => response.data)
    .then(data => apiInfo = data.map(e => {
        let {cca3, name, flags, continents, capital, subregion, area, population} = e
        console.logcca3, name, flags, continents, capital, subregion, area, population
        Country.findOrCreate({
        where: { id: cca3 },
        defaults:{
            id: cca3,
            name: name.common,
            oficialName: name.official,
            flagImage: flags.png,
            continent: continents[0],
            capital: capital?capital[0]:"undefined",
            subRegion: subregion,
            area: area,
            population: population
        },
        })
    }))
}
allApiInfo();

const bdInfo = async (req, res) =>{
    let apiInfo = await Country.findAll({
        include: [
            {
            model: Activity,
            attributes: ["name"],
            through: {
                attributes: [],
            },
            },
        ],
        });
    try {
        if(req.query.name){
            let filtered = await apiInfo.filter( e => e.name.toLowerCase().includes (req.query.name.toLowerCase()));
            filtered.length ?
            res.status(200).send(filtered) :
            res.status(400).send('There is not a matching county');
        }else{
            res.status(200).send(apiInfo);}
    } catch (error) {
        throw error
    }  
}

const bdId = async (req, res) =>{
    let apiInfo = await Country.findAll({
        include: [
            {
            model: Activity,
            attributes: ["name"],
            through: {
                attributes: [],
            },
            },
        ],
        });
    try {
        if(req.params.id){
            let filtered = await apiInfo.filter( e => e.id.toLowerCase().includes (req.params.id.toLowerCase()));
            filtered.length ?
            res.status(200).send(filtered) :
            res.status(400).send('There is not a matching county');
        }else{
            res.status(200).send(apiInfo);}
    } catch (error) {
        throw error
    }  
}
const postAct = async (req, res) =>{
    if(!req.body.name || !req.body.dificulty || !req.body.duration|| !req.body.season ||!req.body.countries
        )res.status(400).send('Missing data');
    try {
        let {name, dificulty, duration, season, countries} = req.body
        let newAct = await Activity.create({
            name,
            dificulty,
            duration,
            season
        })
        let filteredCountries = await Country.findAll({
            where: {[Op.or]: [
                { name: countries },
                { oficialName: countries }
        ]}
        })
        newAct.addCountry(filteredCountries)
        console.log(filteredCountries);
        res.status(201).send('new activity created')
    } catch (error) {
        res.status(400).send(error.parent.detail)
    }
}

module.exports = { allApiInfo, bdInfo, bdId, postAct }