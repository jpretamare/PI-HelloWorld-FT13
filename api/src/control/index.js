const axios = require('axios');
const { Country, Turism } = require('../db.js');
const { v4: uuidv4 } = require('uuid');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op

let asd//AUXÍLIAME VARIABLE

const get = async (req, res) => {
    if (req.query.cont) {
        try {
            asd = await Country.findAll({where: {continent: {[Op.iLike]:`%${req.query.cont}%`}}})
            return res.status(200).json(asd)
        } catch {
            return res.status(500).json({message:'Internal Error'})
        }
    }
    if(req.query.tur){
        try {
		    asd = await Country.findAll({
			    include:{
				    model: Turism,
				    where: {
					    name: {[Op.iLike]:`%${req.query.tur}%`}
				    },
				    required: true
			    }
		    })
		    return res.status(200).json(asd)
        } catch {
            return res.status(500).json({message:'Internal Error'})
        }
	}
    if (req.query.p){
        try {
			if (req.query.p === 'all') {
                asd = await Country.findAll()
            	return res.json(asd)
        	}
        	let num = req.query.p *10
			if (num > asd.length){
				asd.splice(0, asd.length -10)
			} else {
        		asd.splice(0, num-10)
			}
        	return res.status(200).json(asd);
		} catch {
			return res.status(400).json({message: 'Bad Request', status: 400})
		}
    }
    if (req.query.name) {
        try {
            asd = await Country.findAll({where: {name: {[Op.iLike]:`%${req.query.name}%`}}})
            if (asd.length === 0) {return res.status(400).json({message: 'Bad Request', status:500})}
        } catch {
            return res.status(500).json({message: 'la database tiene amsiedad, no encontro nada'})
        }
        return res.status(200).json(asd);
    }
	try {
        asd = await Country.findAll({limit:10}) 
        res.status(200).json(asd)
    } catch {
        return res.status(500).json({status:500, message:'Falló la sincronización con la DB'})
    }
}

const pais = async (req, res) => {
    let {idPais} = req.params;
	idPais = idPais.toUpperCase()
    try {
        asd = await Country.findByPk(idPais, {include: Turism})
        return res.status(200).json(asd);
    } catch {
        return res.status(400).json({status: 400, message:'Bad Request'})
    }
}

const activ = async(req,res) => {
    let id = uuidv4();
    asd = {...req.body, id}
    if(!req.body.name || !req.body.level || !req.body.duration || !req.body.temp) {
        return res.status(400).send({status: 400, message: 'Bad Request'});
    }
    try {
        let turis= await Turism.create(asd);
        let {paises} = req.body
		await paises.forEach(p => {
			p = p.toUpperCase()
			turis.addCountry(p, {through: 'country_turism'});
		})
		return res.status(201).json({message: 'Actividad creada', status: 201});
    } catch {
        return res.status(500).json({message: 'Internal Server Error', status: 500});
    }
}

const tur = async(req,res) => {
    try {
        asd = await Turism.findAll()
        return res.status(200).json(asd)
    } catch {
        return res.status(500).json({message: 'Internal Server Error'})
    }
}

const connect = async (req, res) => {
    try {
        const {data} = await axios('https://restcountries.eu/rest/v2/all')
        await data.forEach(c => Country.create({
            id: c.alpha3Code,
            name: c.name,
            continent: c.region,
            img: c.flag,
            capital: c.capital,
            subReg: c.subregion,
            area: c.area,
            pob:  c.population
        }))
    } catch {
        return res.status(500).json({message: 'Internal Error', status: 500})
    }
}

const puro = async(req, res) => {
    try {
        const {data} = await axios('https://restcountries.eu/rest/v2/all')
        return res.status(200).json(data)
    }
    catch {
        return res.status(418).send({meesage: 'soy una tetera', status:418})
    }
} 

module.exports = {
    get,
    pais,
    activ,
    puro,
    tur,
    connect
}