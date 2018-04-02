/**
 *
 * Mongoose ile mongoDB işlemleri
 *
 */

var mongoose = require('mongoose');

var kisi = require('./Models/Kisi');

mongoose.connect('mongodb://localhost/obs', function (err) {

    if (err) throw err;

    console.log('Veritabanına bağlanıldı');



    var kisi1 = new kisi({
        _id: new mongoose.Types.ObjectId(),
        kullaniciAdi:'ayseyilmaz4',
        adSoyad: {
            adi: 'Ayşe',
            soyadi: 'Yılmaz'
        },
        olusturmaTarihi:Date.now()

    });


    //Ekleme
   /* kisi1.save(function(err) {
        if (err) throw err;

        console.log('Kisi kaydedildi.');
    });*/

//Arama İşlemleri için   find()-Hepsi, findOne()-ilkBulunan and findById()
    kisi.find({ kullaniciAdi: 'ayseyilmaz2' //  'adSoyad.adi': 'Ayşe' //
    }).sort('-created')
        .limit(5)
        .exec(function(err, kisiler) {
            if (err) throw err;

            console.log(kisiler);
        });



// Güncelleme İşlemleri için
    kisi.findByIdAndUpdate('5ac123f0e3b4b71563917905', { kullaniciAdi: 'ayilmaz' }, function(err, kisi) {
        if (err) throw err;

        console.log('Değiştirildi--->'+ kisi);
    });


    //Silme : remove() findByIdAndRemove() findOneAndRemove()
    kisi.remove({ kullaniciAdi: 'ayseyilmaz2'
    }).exec(function(err, kisi) {
            if (err) throw err;

            console.log('Silme---->'+kisi);
        });


});
