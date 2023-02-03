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

module.exports = {
    getPhones
}