// base de datos de prueba 

const {DataTypes}= require ('sequelize')

module.exports= (sequelize)=>{

    sequelize.define ( 'order', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey:true
        },
        state:{
            type: DataTypes.STRING,
        },
        detail:{
            type: DataTypes.JSON
        },

    } , {
        timestamps:false,
        freezeTableName:true
    });

}