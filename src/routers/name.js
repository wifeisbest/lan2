const express = require('express');
const router = express.Router();

const nameController = require('../app/controllers/NameControoler');

router.get('/create', nameController.create);
router.get('/update', nameController.update);
router.post('/namecreate', nameController.namepost);
router.get('/:slug', nameController.show);
router.get('/', nameController.index);



module.exports = router;
