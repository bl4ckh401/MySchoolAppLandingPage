<?php
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json; charset=utf-8');

include "server.php";

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $imgsrc = $_GET['imgsrc'];
    $upload_url = "uploads/";
    $image = array();
    $query = "SELECT file_name FROM Images WHERE file_name='$imgsrc' ";
    $result = mysqli_query($conn, $query);

    if ($result->num_rows > 0) {
        $x = 0;
        while ($x < $result->num_rows) {
            $row = mysqli_fetch_assoc($result);
            $image_name = $row["file_name"];
            $image_src = $upload_url . $image_name;
            $images[] = $image_src;
            $x += 1;
        }

    }
    mysqli_close($conn);
    echo json_encode($image);
}
