// base de datos de prueba 

const {DataTypes}= require ('sequelize')

module.exports= (sequelize)=>{

sequelize.define ( 'usuarios', {
email:{
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
},
id:{
    type: DataTypes.UUID,
    allowNull: false
}

   
} , {
    timestamps:false
}
);


}
