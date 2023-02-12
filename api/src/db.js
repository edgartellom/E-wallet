require('dotenv').config();
const { Sequelize} = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY
} = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/phoenix`, {
//   logging: false, 
//   native: false,
// });

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false, 
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Category, Order, User ,Phone } = sequelize.models; //extraer datos y asignarlos como variables

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
//relation user Phones
const Phone_Category = sequelize.define('phone_category', {}, { timestamps: false, freezeTableName: true });
Phone.belongsToMany(Category,{through: Phone_Category})
Category.belongsToMany(Phone,{through: Phone_Category}); //se utiliza para crear una asociación de muchos a muchos entre dos tablas

const Phone_Order = sequelize.define('phone_order', {}, { timestamps: false, freezeTableName: true });
Phone.belongsToMany(Order,{through: Phone_Order})
Order.belongsToMany(Phone,{through: Phone_Order}); 

//aqui las demasrelaciones 




module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};