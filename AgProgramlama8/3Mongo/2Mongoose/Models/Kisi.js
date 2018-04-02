var mongoose = require('mongoose');

//Types: String, Number, Date, Buffer, Boolean, Mixed, Objectid, Array, Decimal128

var kisiSema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    kullaniciAdi: {type:String,required:true, unique:true, lowercase: true}, //index:true

    adSoyad: { adi: { type: String, required: true}, soyadi: {type: String, required: true} },

    olusturulmaTarihi: {type: Date, default: Date.now() }
});

var kisi = mongoose.model('kisi', kisiSema);

module.exports = kisi;