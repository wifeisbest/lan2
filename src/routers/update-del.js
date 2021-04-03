const express = require('express');
const router  = express.Router();

const updel = require('../app/controllers/updel');

router.delete('/:id', updel.destroy);
router.put('/:id',updel.seveDataUpdate);
router.get('/:id/update',updel.update);


module.exports = router;
