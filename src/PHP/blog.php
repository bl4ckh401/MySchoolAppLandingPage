<?php

//include server configurations
include 'server.php';

$blog_name = $blog_content = $blog_author = "";
$blog_nameErr = $blog_contentErr = $blog_authorErr = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (empty($_POST['blog_name'])) {
        $blog_nameErr = "The blog name cannot be empty";
        echo $blog_nameErr;
    } else {
        $blog_name = $_POST['blog_name'];
    }
    if (empty($_POST['blog_content'])) {
        $blog_contentErr = "The blog post must contain a body and cannot be empty";
        echo $blog_contentErr;
    } else {
        $blog_content = $_POST['blog_content'];
    }
    if (empty($_POST['blog_content'])) {
        $blog_authorErr = "The blog post must have an author";
        echo $blog_authorErr;
    } else {
        $blog_author = $_POST['blog_author'];
    }

    $query = "INSERT INTO BlogPosts(`blog_name`,`blog_content`,`blog_author`) VALUES ('$blog_name','$blog_content','$blog_author')";
    $result = mysqli_query($conn, $query);
    mysqli_close($conn);
    echo "Query executed";
    if ($result) {
        echo "Blog Post created successfully";
    } else {
        die("Unable to create the blog post. Please checck the details");
    }

}
