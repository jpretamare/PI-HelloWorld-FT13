const axios = require('axios');
const { Country, Turism } = require('../db.js');

let asd//AUXILIAR VARIABLE

const get = async (req, res) => {
    asd = await Country.findAll({limit:10}) 
    if (asd.length === 0){
       try {
        let {data} = await axios('https://restcountries.eu/rest/v2/all')
        await data.forEach(c => Country.create({
           id: c.alpha3Code,
           name: c.name,
           continent: c.region,
           img: c.flag,
           capital: c.capital
       }))
       return res.redirect(`/countries${req.query.p ? '?p='+req.query.p : req.query.name ? '?name='+req.query.name : ''}`)
    } catch {
        return res.status(418).json({message: `i'm a teapot`})
    }
    }
    if (req.query.p){
        if (req.query.p === 'all') {
            asd = await Country.findAll()
            return res.json(asd)
        }
        let num = req.query.p *10
        asd = await Country.findAll({limit:num})
        asd.splice(0, num-10)
        return res.status(200).json(asd);
    }
    if (req.query.name) {
        try {
            // FALTA DEFINIR COMO HACER QUE LA BUSQUEDA NO SEA EXACTA
            asd = await Country.findAll({where: {name: req.query.name}})
        } catch {
            return res.status(404).json({message: 'la database tiene amsiedad, no encontro nada'})
        }
        return res.status(200).json(asd);
    }
    res.status(200).json(asd)
}

const pais = async (req, res) => {
    let {idPais} = req.params;
    let {data} = await axios(`https://restcountries.eu/rest/v2/alpha/${idPais}`);
    const con = await Country.findByPk(idPais, {include: Turism})
    con.subReg = data.subregion;
    con.area = data.area;
    con.pob =  data.population;
    await con.save();
    res.status(200).json(con);
}

const activ = async(req,res) => {
    // HAY QUE ARMAR ESTE POST
}

module.exports = {
    get,
    pais,
    activ
}