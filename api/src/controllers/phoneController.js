const axios = require("axios");
const { Phone, Category } = require("../db");
const phoneJson = require("../phone.json");
require("dotenv").config();
const API_URL = process.env.API_URL;

const getApiInfo = async () => {
  const phones = (await axios(`${API_URL}/phones`)).data || phoneJson;
  const apiInfo = await phones.map((el) => ({
    id: el.id,
    brand: el.brand,
    name: el.name,
    model: el.model,
    network: el.network,
    launch: el.launch,
    dimensions: el.dimensions,
    weight: el.weight,
    displayType: el.display.type,
    displaySize: el.display.size,
    displayResolution: el.display.resolution,
    os: el.os,
    ram: el.memory.ram.map((el) => el),
    internMemory: el.memory.intern.map((el) => el),
    chipset: el.chipset,
    cpu: el.cpu,
    selfieCameraResolution: el.cameras.selfie.resolution,
    selfieCameraVideo: el.cameras.selfie.video,
    mainCameraResolution: el.cameras.main.resolution,
    mainCameraVideo: el.cameras.main.video,
    battery: el.battery,
    price: el.price,
    color: el.color.map((el) => el),
    image: el.image,
    categories: el.category.map((c) => ({ name: c.name })),
  }));
  return apiInfo;
};

const getDbInfo = async () => {
  return await Phone.findAll({
    include: {
      model: Category,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllPhones = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

const updatePhone = async ({
  id,
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
  category,
}) => {
  let phone = await Phone.findByPk(id);
  if (!phone) return { error: "PHONE NOT FOUND" };
  phone.brand = brand;
  phone.name = name;
  phone.model = model;
  phone.network = network;
  phone.launch = launch;
  phone.dimensions = dimensions;
  phone.weight = weight;
  phone.displaySize = displaySize;
  phone.displayResolution = displayResolution;
  phone.os = os;
  phone.ram = ram;
  phone.internMemory = internMemory;
  phone.chipset = chipset;
  phone.cpu = cpu;
  phone.selfieCameraResolution = selfieCameraResolution;
  phone.selfieCameraVideo = selfieCameraVideo;
  phone.mainCameraResolution = mainCameraResolution;
  phone.mainCameraVideo = mainCameraVideo;
  phone.battery = battery;
  phone.price = price;
  phone.color = color;
  phone.image = image;
  phone.category = category;
  await phone.save();
  return phone;
};

module.exports = {
  getAllPhones,
  updatePhone,
};
