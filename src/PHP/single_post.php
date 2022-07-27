<?php
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json; charset=utf-8');

include "server.php";

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $id = $_GET['id'];
    $query = "SELECT * FROM BlogPosts WHERE id='$id'";
    $post = "";
    $result = mysqli_query($conn, $query);
    while ($row = mysqli_fetch_assoc($result)) {
        $post = $row;
    }

    mysqli_close($conn);
    echo json_encode($post);

}
