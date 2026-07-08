<?php
    include "db.php";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];

        $password = $_POST['password'];

        $sql = "SELECT * FROM students WHERE email = '$email' AND password = '$password'";

        $result = $conn -> query($sql);

        if ($result -> num_rows > 0) {
            $_SESSION['email'] = $email;

            header("Location: dashboard.php");
            exit();
        } else {
            echo "<h2>Invalid email or password! Try again</h2>";
        }
    }

    $conn -> close();
?>