const Hoa = require('../models/Names');
const{ muti }= require('../../until/mongoose');
const{ one }= require('../../until/mongoose');


class Updel {
    update(req, res, next){
        Hoa.findById(req.params.id)
            .then(duongs => res.render('shows/update',{
                duongs: one(duongs)
            }))
            .catch(next);
    }
    // update data [put] updel/:id
    seveDataUpdate(req, res, next){
        Hoa.updateOne({_id: req.params.id}, req.body)
            .then(()=> res.redirect('/'))
            .catch(next);
    }
     // delete data [delete] updel/:id

    destroy(req, res, next){
        Hoa.deleteOne({_id: req.params.id })
            .then(()=> res.redirect('back'))
            .catch(next);
    }
}

module.exports = new Updel;
