const firebase = require("firebase");
const { User } = require("../db");

firebase
  .auth()
  .listUsers()
  .then((users) => {
    const userRecords = users.map((user) => ({
      uid: user.uid,
      email: user.email,
      // otros campos de usuario aquí
    }));

    User.bulkcreate(userRecords)
      .then(() => {
        console.log("Users loaded into database");
      })
      .catch((error) => {
        console.log("Error to load users into database");
      });
  })
  .catch((error) => {
    console.log("Error to recover users from Firebase");
  });
