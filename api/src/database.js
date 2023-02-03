
const Api = require('./jsonProductos')
const { Product } = require('../db.js');


const insertPhone = () =>{
    Api.forEach(el => {
        Product.create({
            brand: el.brand,
            model: el.model,
            network: el.network,
            launch: el.launch,
            dimensions: el.body.dimensions,
            weight: el.body.weight,
            type: el.display.type,
            size: el.display.size,
            resolution: el.display.resolution,
            os: el.os,
            memoryRam: el.memory.map(el=>el.ram.map(el=>el)),
            memoryInterna: el.memory.map(el=>el.interna.map(el=>el)),
            cpuModel: el.cpu_model,
            selfieCamera: el.cameras.selfie.single,
            selfieVideo: el.cameras.selfie.video,
            mainCameraSpec: el.cameras.main.spec,
            mainCameraVideo: el.cameras.main.video,
            battery: el.battery,
            price: el.price,
            image: el.image,
        });
    });
    console.log('Phones loaded in data base');
}

module.exports = insertPhone;