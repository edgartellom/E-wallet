const data = require('../services/services')


const getAllPhones= (req , res)=>{
   const Allphone= data.getAllPhones()
    res.send({status:'estoy lo hice horita', data:Allphone})
}
const createNew= (req , res)=>{
    const create= data.createNew()
    res.send('get all fones ')
}
const deleteOne= (req , res)=>{
    const deletes= data.deleteOne()
    res.send('get all fones ')
}
const updataOne= (req , res)=>{
    const updata= data.updataOne()
    res.send('get all fones ')
}


module.exports={
    getAllPhones,
    createNew,
    deleteOne,
    updataOne
}