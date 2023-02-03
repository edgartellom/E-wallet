// base de datos de prueba 

const {DataTypes}= require ('sequelize')

module.exports= (sequelize)=>{

    sequelize.define ( 'user', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
