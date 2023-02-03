const { Router } = require('express');
const { getAllPhones, deleteOne, updataOne, createNew } = require('../controlls');

const router = Router();
 router.get('/', getAllPhones )
 router.post('/', createNew)
 router.delete('/id:delete', deleteOne)


module.exports = router;
