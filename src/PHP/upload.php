<?php
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json; charset=utf-8');

//include server config
include 'server.php';

$statusmsg = "";

//file upload path
$response = array();
$upload_url = "/opt/lampp/htdocs/uploads/";
$serverurl = "http://127.0.0.1:3301/Pamatech/myshoolappp";

if ($_FILES["file"]) {
    $img_name = $_FILES["file"]["name"];
    $img_nameindb = strtolower($img_name);
    $img_tempname = $_FILES["file"]["tmp_name"];
    $error = $_FILES["file"]["error"];

    if ($error > 0) {
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!",
        );
    } else {
        $random_name = rand(1000, 1000000) . "-" . $img_nameindb;
        $upload_name = $upload_url . strtolower($random_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
        echo $img_name;

        if (move_uploaded_file($img_tempname, $upload_name)) {
            $result = mysqli_query($conn, "INSERT INTO Images(`file_name`) VALUES ('$random_name')");
            mysqli_close($conn);
            echo "Connection to database closed";
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $server_url . "/" . $upload_name,
            );
        } else {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!",
            );
        }
    }

} else {

    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "No file was sent!",
    );
}

echo json_encode($response);
