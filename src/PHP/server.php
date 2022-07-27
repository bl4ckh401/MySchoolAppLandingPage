<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: *');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$servername = "localhost";
$dbname = "Pamatech";
$password = "";
$user = "root";

$conn = mysqli_connect('localhost', 'root', '', 'Pamatech');
if (!$conn) {
    die('Error Connection failed :' . mysqli_connect_error());
}
