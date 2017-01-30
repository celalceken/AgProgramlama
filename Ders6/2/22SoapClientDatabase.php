<?php
/**
 * Created by PhpStorm.
 * User: wsan
 * Date: 21.01.2015
 * Time: 23:17
 */

require_once('References/nusoap-0.9.5/lib/nusoap.php');

$client = new nusoap_client("23Customer.wsdl", true);
$error  = $client->getError();

if ($error) {
    echo "<h2>Constructor error</h2><pre>" . $error . "</pre>";
}

$result = $client->call("PagilaCustomers.find", array("type" => $_GET['id']));
//echo "sonuc...";
//print_r($result);
echo $result;

if ($client->fault) {
    echo "<h2>Fault</h2><pre>";
    print_r($result);
      echo "</pre>";
} else {
    $error = $client->getError();
    if ($error) {
        echo "<h2>Error</h2><pre>" . $error . "</pre>";
    } else {
        echo "<h2>Main</h2>";
        echo $result;
    }
}

// show soap request and response
echo "<h2>Request</h2>";
echo "<pre>" . htmlspecialchars($client->request, ENT_QUOTES) . "</pre>";
echo "<h2>Response</h2>";
echo "<pre>" . htmlspecialchars($client->response, ENT_QUOTES) . "</pre>";