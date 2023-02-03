// base de datos de prueba 

const {DataTypes}= require ('sequelize')

module.exports= (sequelize)=>{

    sequelize.define ( 'User', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey:true
        },
        username:{
            type: DataTypes.STRING,
        },
        password:{
            type: DataTypes.CHAR
        },
        email:{
            type: DataTypes.CHAR,
            allowNull: false,
        },

    } , {
        timestamps:false,
        freezeTableName:true
    });

}
