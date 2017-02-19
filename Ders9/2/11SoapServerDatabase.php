<?php
/**
 * Created by PhpStorm.
 * User: wsan
 * Date: 21.01.2015
 * Time: 23:14
 */


// Soap and php 2014 (reference)
// Kendi sistemlerimiz arasında haberleşme yapılacaksa WSDL kullanmaya gerek yok...

class DBService
{
    public function select($x)
    {
        $connectionID=pg_connect("host=localhost dbname=Pagila user=LectureUser password=LecturePassword")
        or die("Can't connect to database".pg_last_error());
        $query = "SELECT * FROM customer where customer_id=$x";

        $rs = pg_query($connectionID, $query) or die("Cannot execute query: $query\n");

        $row = pg_fetch_row($rs);


        return $row[0].$row[1].$row[2].$row[3].$row[4].$row[5].$row[6].$row[7];

    }
}

$options = array(
    'uri' => 'http://localhost',
    'location' => 'http://localhost',
);

$server = new SOAPServer(null, $options);
$server->setObject(new DBService());
$server->handle();