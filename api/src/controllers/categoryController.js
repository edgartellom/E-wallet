const { Category } = require('../db');
const  categoryJson  = require('../category.json');

const getAllCategories = async () => {
    let allCategories = await categoryJson;
    allCategories = allCategories.map(el => el.name); 
    
    allCategories.forEach(category => {
        Category.findOrCreate({
            where: { name: category }
        });
    });
    console.log("Categories loaded into database succesfully!")
    return await Category.findAll();
}

module.exports = { 
    getAllCategories 
}