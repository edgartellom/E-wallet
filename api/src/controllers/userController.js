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
    console.log({ message: error.message });
  }
};

const getAllUsers = async () => {
  try {
    const apiInfo = await getApiInfo();
    const promises = apiInfo.map(async (userData) => {
      const [created, userCreated] = await User.findOrCreate({
        where: {
          id: userData.id,
          email: userData.email,
        },
        defaults: {
          username: userData.username,
          admin: userData.admin,
        },
      });
      return { created, userCreated };
    });
    await Promise.all(promises);
    const allUsers = await User.findAll();
    const numNewUsers = promises.filter((promise) => promise.created).length;
    if (numNewUsers) {
      console.log("Users loaded into database successfully!");
    } else {
      console.log("Users database already up to date");
    }
    console.log(`${numNewUsers} new users created`);
    return { users: allUsers, status: "success" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const createUser = async (user) => {
  const { email } = user;
  try {
    let userFound = User.findOne({
      where: {
        email: email,
      },
    });
    if (!userFound) {
      User.create(user);
      return { message: "User created succesfully", status: "success" };
    } else {
      return { message: "User already exists", status: "error" };
    }
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const updateUser = async (user) => {
  const { id, username, email, admin, state } = user;
  try {
    const userFromDb = User.findByPk(id);
    if (userFromDb) {
      userFromDb.update({
        username,
        admin,
        state,
      });
    }
    return { message: "User updated succesfully", status: "success" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
};
