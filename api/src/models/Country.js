const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// Country.beforeValidate(c => { 
//   c.name.length === 0 || c.continent.length === 0 || c.capital.length === 0 || c.img.length === 0 ? new Error('It requires') : ''
// })

//HACER LAS VALIDACIONES

module.exports = (sequelize) => {
  sequelize.define('Turism', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING
    },
    level:{
      type: DataTypes.ENUM({
        values: ['1','2','3','4','5']
      })
    },
    duration:{
      type: DataTypes.TIME
    },
    temp:{
      type: DataTypes.ENUM({
        values: ['Verano', 'Otoño', 'Invierno', 'Primavera']
      })
    }
  })
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING ,
      allowNull: false,
    },
    subReg:{
      type: DataTypes.STRING
    },
    area:{
      type: DataTypes.BIGINT
    },
    pob:{
      type: DataTypes.INTEGER
    }
  });
  
};
