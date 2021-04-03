const Hoa = require('../models/Names');
const {muti} = require('../../until/mongoose');

class SiteController {
    index(req, res, next){
        Hoa.find({})
            .then(duongs => res.render('home',{
                duongs: muti(duongs)
            }))
            .catch(next);
    }
}





module.exports = new SiteController;
