const { Router } = require('express');
const { Phone, Order, Category, User } = require("../db");
const { getAllPhones, updatePhone } = require('../controllers/phoneController');

const router = Router()

router.get("/", async  (req, res, next) => {
    try {
        const { brand } = req.query;
        const allPhones = await getAllPhones();
        if(brand){
            let phoneBrand = await allPhones.filter(el => 
                el.brand.toLowerCase().includes(brand.toLowerCase())
                );
                phoneBrand.length ? res.status(200).send(phoneBrand) :
                res.status(400).send("BRAND NOT FOUND");
        }else{
            res.status(200).send(allPhones);
        }        
    } catch (error) {
        next(error)
    }
});



router.post('/', async  (req,res, next) => {  //some errors trying to create
    try {
            let {
                    brand,
                    name,
                    model,
                    network,
                    launch,
                    dimensions,
                    weight,
                    displaySize,
                    displayResolution,
                    os,
                    ram,
                    internMemory,
                    chipset,
                    cpu,
                    selfieCameraResolution,
                    selfieCameraVideo,
                    mainCameraResolution,
                    mainCameraVideo,
                    battery,
                    price,
                    color,
                    image,
                    category
                } = req.body;
            let newPhone = await Phone.create({
                brand,
                name,
                model,
                network,
                launch,
                dimensions,
                weight,
                displaySize,
                displayResolution,
                os,
                ram,
                internMemory,
                chipset,
                cpu,
                selfieCameraResolution,
                selfieCameraVideo,
                mainCameraResolution,
                mainCameraVideo,
                battery,
                price,
                color,
                image,
                category
            }); 
            let categoryDb = await Category.findAll({
                where: {name: category}
            })
            newPhone.addCategory(categoryDb);
            res.status(200).send(newPhone); 
        } catch(error){
            res.status(404).send('NOT FOUND')
        }
            
    });


    router.get("/:id", async  (req, res, next) => {
    try {
        const { id } = req.params;
        let allPhones = await getAllPhones();
        if (id){
            let phoneId = await allPhones.filter(e => e.id == id);
            phoneId.length?
            res.status(200).send(phoneId) :
            res.status(404).send('Phone not found!');
        }
    } catch (error) {
        next(error)
    }
});


    router.delete("/:id", async  (req, res, next) => {
        try {
            const { id } = req.params;
            let allPhones = await getAllPhones();
            if (id){
                let phoneId = await allPhones.filter(e => e.id == id);
                await Phone.destroy({
                    where: {id: id}
                })
                phoneId.length?
                res.status(200).send(phoneId) :
                res.status(404).send('Phone not found!');
            }
            allPhones = allPhones.filter(e => e.id != id)
        } catch (error) {
            next(error)
        }
    });



    router.put("/", async (req,res,next) => {
        try {
            let { id, brand, name, model, price, color, image } = req.body;
            if( !brand || !name || !model || !price || !color || !image){
                return res.status(400).send({error:"Missing info"});
            }else{
                let modifyPhone = await updatePhone({ id, brand, name, model, price, color, image });
            
                return res.status(200).send(modifyPhone);
            }
            
        } catch (error) {
            console.log(error);
            return res.status(400).send("Error");
            
        }
    }); 



module.exports = router;

