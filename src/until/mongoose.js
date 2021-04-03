
module.exports = {
    muti: function (mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    one: function ( mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};