const {DataTypes}= require ('sequelize')

module.exports= (sequelize)=>{

    sequelize.define ( 'Category', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey:true
        },
        name:{
            type: DataTypes.STRING,
        },

    } , {
        timestamps:false,
        freezeTableName:true
    });

}