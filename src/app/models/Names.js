const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Names = new Schema({
    name: { type: String  },
    age: { type: Number   },
    color: { type: String },
    slug: { type :String, slug: 'name', unique: true},
    
  },{
    timestamps: true,
  });

module.exports = mongoose.model('duong',Names);
