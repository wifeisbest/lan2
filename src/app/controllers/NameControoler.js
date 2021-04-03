const Hoa = require('../models/Names');
const{one} = require('../../until/mongoose');
const{muti} = require('../../until/mongoose');

class NameController {
    // [GET] name/show
    show(req, res, next){
        Hoa.findOne({slug: req.params.slug})
            .then(duongs => res.render('shows/show',{
                duongs: one(duongs)
            }))
            .catch(next);
    }
    index(req,res){
        res.send('Please add slug in your Database')
    }
    // [GET] name/create
    create(req, res, next){
       res.render('create/create')
    }
    // [POST] name/namecreate
    namepost(req, res, next){
        const hoa = new Hoa(req.body);
        hoa.save()
            .then(()=> res.redirect('/'))
            .catch(next);
    }
    //  [get] /name/update
    update(req, res, next){
        Hoa.find({})
            .then(duongs => res.render('create/post-create',{
                duongs : muti(duongs)
            }))
            .catch(next);
    }
}

module.exports = new NameController;
