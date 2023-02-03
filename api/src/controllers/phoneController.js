const { Phone } = require('../db');
const phoneJson = require('../phone.json');

const getPhones = async () => {
    let phones = await phoneJson
    phones.forEach(phone => {
        Phone.create({
            "brand":phone.brand,
            "model":phone.model,
            "price":phone.price,
            "image":phone.image,
            "detail": {
                "network": phone.network,
                "launch": phone.launch,
                "dimensions": phone.body.dimensions,
                "weight": phone.body.weight,
                "display": {
                    "type": phone.display.type,
                    "size": phone.display.size,
                    "resolution": phone.display.resolution
                },
                "os": phone.os,
                "memory": {
                    "ram": phone.memory.ram,
                    "intern": phone.memory.intern
                },
                "cpu_model": phone.cpu_model,
                "camera": {
                    "selfie": {
                        "single": phone.camera.selfie.single,
                        "video": phone.camera.selfie.video
                    },
                    "main": {
                        "main": phone.camera.main.main,
                        "video": phone.camera.main.video
                    }
                },
                "battery": phone.battery,
                "color": phone.color.map(el => el)
            }
        })
    })
    console.log('Phones loaded in data base succesfully!');
    return await Phone.findAll();
}

const updatePhone = async ({id,brand,model,price,image,detail}) => {
    let phone = await Phone.findByPk(id);
    if(!phone) return {error:"PHONE NOT FOUND"};
    phone.id = id;
    phone.brand = brand;
    phone.model = model;
    phone.price = price;
    phone.image = image;
    phone.detail = detail;
    await phone.save();
    return phone;
}


module.exports = {
    getPhones,
    updatePhone
}