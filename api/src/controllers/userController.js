const axios = require("axios");
const { User } = require("../db");
require("dotenv").config();
const API_FIRESTORE_URL = process.env.API_FIRESTORE_URL;

const getApiInfo = async () => {
  try {
    const dataFireStore = (await axios(API_FIRESTORE_URL)).data;
    const users = dataFireStore.documents.map((user) => user.fields);
    const apiInfo = await users.map((el) => ({
      id: el.id?.stringValue,
      username: el.username?.stringValue,
      email: el.email?.stringValue,
      admin: el.admin?.booleanValue,
    }));
    console.log(apiInfo);
    return apiInfo;
  } catch (error) {
    console.log(error.message);
  }
};

const loadApiInDb = async () => {
  try {
    const data = await getApiInfo();
    data.map(async (userData) => {
      const userCreated = await User.findOrCreate({
        where: {
          id: userData.id,
        },
        defaults: {
          username: userData.username,
          email: userData.email,
          admin: userData.admin,
        },
      });
    });
    console.log("Users loaded in data base!");
  } catch (error) {
    console.log({ message: error.message });
  }
};

loadApiInDb();
