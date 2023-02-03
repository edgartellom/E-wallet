const { DataTypes }= require ('sequelize')

module.exports= (sequelize)=>{

    sequelize.define( 'Product',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey: true,
          },
    
        brand:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        model:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        network:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        launch:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dimensions:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        type:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        size:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        resolution:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        os:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpuModel:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        selfieCamera:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        selfieVideo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        mainCameraSpec:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        mainCameraVideo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        battery:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    
    },
    {
        timestamps:false
    });
    
    
    }
   
    