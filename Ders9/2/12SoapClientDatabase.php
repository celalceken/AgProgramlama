<?php
/**
 * Created by PhpStorm.
 * User: wsan
 * Date: 21.01.2015
 * Time: 23:17
 */

$options = array(
    'uri' => 'http://localhostNetworkProgramming/Lecture6/2/',
    'location' => 'http://localhost/NetworkProgramming/Lecture6/2/11SoapServerDatabase.php',
);
$client = new SOAPClient(null, $options);
echo $client->select($_GET['id']);

//var_dump( $client->add(15, 10));