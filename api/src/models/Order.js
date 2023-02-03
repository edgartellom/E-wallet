const {DataTypes}= require ('sequelize')

module.exports= (sequelize)=>{

    sequelize.define ( 'Order', {
        id:{
            type: DataTypes.UUID,
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