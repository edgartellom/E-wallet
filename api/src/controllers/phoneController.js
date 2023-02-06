const e = require('express');
const { Phone, Category } = require('../db');
const phoneJson = require('../phone.json');

const getApiInfo = async () => {
    let phones = await phoneJson
    try {
        phones.forEach(el => {
            
            Phone.findOrCreate({
                where: {
                    "brand": el.brand,
                    "name": el.name,
                    "model": el.model,
                    "network": el.network,
                    "launch": el.launch,
                    "dimensions": el.dimensions,
                    "weight": el.weight,
                    "displayType": el.display.type,
                    "displaySize": el.display.size,
                    "displayResolution": el.display.resolution,
                    "os": el.os,
                    "ram": el.memory.ram.map(el => el),
                    "internMemory": el.memory.intern.map(el => el),
                    "chipset": el.chipset,
                    "cpu": el.cpu,
                    "selfieCameraResolution": el.cameras.selfie.resolution,
                    "selfieCameraVideo": el.cameras.selfie.video,
                    "mainCameraResolution": el.cameras.main.resolution,
                    "mainCameraVideo": el.cameras.main.video,
                    "battery": el.battery,
                    "price": el.price,
                    "color": el.color.map(el => el),
                    "image": el.image
                }
            })
            // .then(async(phone,created) => {
                    // let categories = el.category.map(category => category.name)//         
                    // let categoryDb = await (Category.findAll({
            //             where: {name: categories}
            //         }))
            //         phone.addCategory(categoryDb)
                
            // })
        })
    } catch (error) {
        console.log(error)
    }
    console.log('Phones loaded into database succesfully!');

    return await Phone.findAll();
}

const getDbInfo = async () => {
    return await Phone.findAll({
        include: {
            model: Category,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });
}

const getAllPhones = async () => {
    await getApiInfo();
    const infoTotal = await getDbInfo();
    return infoTotal;
}

const updatePhone = async ({ id, brand, name, model, price, color, image }) => {
    let phone = await Phone.findByPk(id);
    if(!phone) return {error:"PHONE NOT FOUND"};
    phone.brand = brand;
    phone.name = name;
    phone.model = model;
    phone.price = price;
    phone.color = color;
    phone.image = image;
    await phone.save();
    return phone;
}


module.exports = {
    getAllPhones,
    updatePhone
}