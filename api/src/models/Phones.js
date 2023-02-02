// base de datos de prueba 

const {DataTypes}= require ('sequelize')

module.exports= (sequelize)=>{

sequelize.define( 'Phones', {

name:{
    type: DataTypes.STRING,
    allowNull: false,

}

    
},
{
    timestamps:false
});


}