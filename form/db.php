<?php
    $host = "127.0.0.1"; // Changed from "localhost"
    $user = "root";
    $password = "";
    $database = "buranok";

    $conn = new mysqli($host, $user, $password, $database);

    if ($conn -> connect_error) 
        die("Connection Failed: " . $conn -> connect_error);
?>