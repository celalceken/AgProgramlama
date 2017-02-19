# in order to run RestAPI
node server.js

# testing

http://localhost:8080/RestAPI/Ogrenciler

curl --request GET http://localhost:8080/RestAPI/Ogrenciler
curl --request GET http://localhost:8080/RestAPI/Ogrenciler/00000000003
curl --request POST http://localhost:8080/RestAPI/Ogrenciler --data 'ogrenciNo=00000002222&adi=Sena'

