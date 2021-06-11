const axios = require('axios');
const { Country, Turism } = require('../db.js');
const { v4: uuidv4 } = require('uuid');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op

let asd//AUXÍLIAME VARIABLE
let x = 0;// X = LLamo o no llamo 

const get = async (req, res) => {
    if (x !== 1){
       try {
        let {data} = await axios('https://restcountries.eu/rest/v2/all')
        await data.forEach(c => Country.create({
           id: c.alpha3Code,
           name: c.name,
           continent: c.region,
           img: c.flag,
           capital: c.capital
       }))
	   x=1
       return res.redirect(`/countries${req.query.p ? '?p='+req.query.p : req.query.name ? '?name='+req.query.name : ''}`)
    } catch {
        return res.status(418).json({status: 418, message: `i'm a teapot`})
    }
    }
    if (req.query.p){
        try {
			if (req.query.p === 'all') {
            asd = await Country.findAll()
            return res.json(asd)
        }
        let num = req.query.p *10
        asd = await Country.findAll({limit:num})
		if (num > asd.length){asd.splice(0, asd.length -10)} else{
        asd.splice(0, num-10)}
        return res.status(200).json(asd);
		} catch {
			return res.status(400).json({message: 'Bad Request', status: 400})
		}
    }
    if (req.query.name) {
        try {
            asd = await Country.findAll({where: {name: {[Op.iLike]:`%${req.query.name}%`}}})
        } catch {
            return res.status(404).json({message: 'la asdbase tiene amsiedad, no encontro nada'})
        }
        return res.status(200).json(asd);
    }
	asd = await Country.findAll({limit:10}) 
    res.status(200).json(asd)
}

const pais = async (req, res) => {
    let {idPais} = req.params;
	idPais = idPais.toUpperCase()
    try {asd = await axios(`https://restcountries.eu/rest/v2/alpha/${idPais}`)} catch {return res.status(400).json({status: 400, message:'Bad Request'})}
    const con = await Country.findByPk(idPais, {include: Turism})
    if (con === null && x !== 1){
        try {
            asd = await axios('https://restcountries.eu/rest/v2/all')
            await asd.data.forEach(c => Country.create({
               id: c.alpha3Code,
               name: c.name,
               continent: c.region,
               img: c.flag,
               capital: c.capital
           }))
		   x = 1
           return res.redirect(`/countries/${idPais}`)
        } catch {
            res.json({message: 'todo ha fallado!'})
        }
    }
    con.subReg = asd.data.subregion;
    con.area = asd.data.area;
    con.pob =  asd.data.population;
    await con.save();
    res.status(200).json(con);
}

const activ = async(req,res) => {
    let id = uuidv4();
    const country = {...req.body, id};
    if(!req.body.name || !req.body.level || !req.body.duration || !req.body.temp || !req.body.paises) {
        return res.send({
            message: 'Es necesaria la información',
        });
    }
    try {
        let turis= await Turism.create(country);
        let {paises} = req.body
		asd = paises.split(',')
		await asd.forEach(p => {
			p = p.toUpperCase()
			turis.addCountry(p, {through: 'country_turism'});
		})
		return res.status(201).json({message: 'Actividad creada', status: 201});
    } catch {
        return res.status(500).json({message: 'Internal Server Error', status: 500});
    }

}

module.exports = {
    get,
    pais,
    activ
}