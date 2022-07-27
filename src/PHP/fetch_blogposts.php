<?php
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json; charset=utf-8');

include "server.php";
$query = "SELECT * FROM BlogPosts ORDER BY id DESC";
$posts = array();
$result = mysqli_query($conn, $query);
while ($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;
}

mysqli_close($conn);
echo json_encode($posts);
