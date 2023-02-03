// base de datos de prueba 

const { DataTypes }= require ('sequelize')

module.exports= (sequelize)=>{

    sequelize.define( 'Phone', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey:true
        },
        brand:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        model:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.FLOAT
        },
        image:{
            type: DataTypes.STRING
        },
        detail:{
            type: DataTypes.JSON
        }
            
    }, {
        timestamps:false,
        freezeTableName:true
    });

}