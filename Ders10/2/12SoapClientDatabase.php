<?php
/**
 * Created by PhpStorm.
 * User: wsan
 * Date: 21.01.2015
 * Time: 23:17
 */

// SOAP modülü yüklenmeli sudo apt-get install php7.0-soap


$options = array(
    'uri' => 'http://localhost/AgProgramlama/Ders9/2/',
    'location' => 'http://localhost/AgProgramlama/Ders9/2/11SoapServerDatabase.php',
);
$client = new SOAPClient(null, $options);
echo $client->select($_GET['id']);

//var_dump( $client->add(15, 10));