const { Router } = require('express');
const axios = require('axios');
const { Country, Turism } = require('../db.js');
const router = Router()

let asd//AUXILIAR VARIABLE
router.get('/', async (req, res) => {
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
       return res.redirect('/countries')
    } catch {
        return res.status(418).json({message: `i'm a teapot`})
    }
    }
    if (req.query.p === "all"){
        asd = await Country.findAll()
        return res.json(asd)
    }
    if (req.query.name) {
        asd = await Country.findAll({where: {name: req.query.name}})
        if (asd.length === 0) {return res.status(404).json({message: 'la database tiene amsiedad, no encontro nada'})}
        return res.status(200).json(asd);
    }
    if (req.query.p) {
        let num = req.query.p *10
        asd = await Country.findAll({limit:num})
        asd.splice(0, num-10)
        return res.status(200).json(asd);
    }
    res.status(200).json(asd)
})

router.get('/:idPais', async (req, res) => {
    let {idPais} = req.params;
    let {data} = await axios(`https://restcountries.eu/rest/v2/alpha/${idPais}`);
    const con = await Country.findByPk(idPais, {include: Turism})
    con.subReg = data.subregion;
    con.area = data.area;
    con.pob =  data.population;
    await con.save();
    res.status(200).json(con);
});

module.exports = router
