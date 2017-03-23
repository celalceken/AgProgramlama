//Dependencies
var express    = require('express');
var monk = require("monk"); // MongoDB Driver
var bodyParser = require('body-parser'); // get parameters from a request
var morgan     = require('morgan'); // log requests to the console
var should = require("should"); //  try-catch mechanism

// configurations

var app = express();
app.use(morgan('dev')); //express middleware
app.use(bodyParser.urlencoded({ extended: true })); //express middleware - parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json


var db = monk('localhost/OgrenciBilgiSistemi');
should.exists(db);
var collection = db.get("ogrenciler");
should.exists(collection);

var router = express.Router(); //isteklerin proseslere hangi yoldan erişeceğini tanımlar
// Tüm istekler için kök dizin
app.use('/RestAPI', router); // proseslere erişmek için istekler "sunucuSoketAdresi/RestAPI" ile başlayacak
                             // http://localhost:8080/RestAPI


// Start server
var port=8080;
app.listen(port);
console.log('Listening ' + port);

// Routes

// all requests are routed here firstly, then directed to the related route
router.use(function(req, res, next) {
	console.log('Web Servisine istek geldi...');
	next();
});



//for GET http://localhost:8080/RestAPI requests

router.get('/', function(req, res) {
	res.json({ message: 'Rest API Ana Dizini ' });
});

//  http://localhost:8080/RestAPI/Ogrenciler
router.route('/Ogrenciler')

	// insert operation
	.post(function(req, res) {

        var kayit= {
            "ogrenciNo": req.body.ogrenciNo,
            "adi": req.body.adi,
            "soyadi": "Yılmaz",
            "telefon": {
                "ev": "12345678",
                "is": "87654321"
            }
        }


        collection.insert(kayit, function(err, doc){
            if(err)
            {
                console.log("Hata");
            }
            else
            {
                console.log("eklendi - ");
                res.json({ message: 'Kayıt Eklenmiştir' });
            }
        });
		
	})

    // select  operation (all rows)
	.get(function(req, res) {
        collection.find({}, { limit : 50 }, function (err, docs){
            /*for(i=0;i<docs.length;i++)
                console.log(docs[i]);
            });*/
		    res.json(docs);
		});
	});

//for  http://localhost:8080/RestAPI/Ogrenciler/ogrenciNo requests
router.route('/Ogrenciler/:ogrenciNo')

    // select  operation (ogrenciNo)
	.get(function(req, res) {
        console.log(req.params.ogrenciNo);
        collection.find({ogrenciNo:req.params.ogrenciNo},{ }, function (err, doc){
			if (err)
				res.send(err);
			res.json(doc);
		});
	})

    // update  operation (ogrenciNo)
	.put(function(req, res) {
        console.log(req.body.adi + '' +req.body.soyadi+''+ req.params.ogrenciNo);


        // collection.update({ogrenciNo:req.params.ogrenciNo}, { "adi": req.body.adi,  "soyadi": req.body.adi});


        collection.findAndModify(
            {
                query: {ogrenciNo: req.params.ogrenciNo},

                update: { $set: {
                                    adi: req.body.adi,
                                    soyadi: req.body.soyadi
                                }
                        }
            },
            /*{"new": true, "upsert": true},*/
            function (err, doc) {
                if (err) throw err;
                console.log(doc);
            }
        );
        res.json({ message: 'Güncelleme işlemi başarılı' });

    })




    // delete  operation (ogrenciNo)
	.delete(function(req, res) {
        collection.remove({ogrenciNo:req.params.ogrenciNo}, function (err){
            if (err) throw err;

        res.json({ message: 'Silme işlemi başarılı' });
        })

});


