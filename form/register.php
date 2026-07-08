<?php
    include "db.php";

    $fullname = $_POST['fullname'];
    $student_id = $_POST['student_id'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $department = $_POST['department'];
    $semester = $_POST['semester'];
    $address = $_POST['address'];
    $password = $_POST['password'];

    $sql = "INSERT INTO students (fullname, student_id, email, phone, dob, gender, department, semester, address, password)
    
    VALUES
    
    ('$fullname',
    '$student_id',
    '$email',
    '$phone',
    '$dob',
    '$gender',
    '$department',
    '$semester',
    '$address',
    '$password')";

    if($conn -> query($sql)) {
        echo "Student Registered Successfully!";
    } else {
        echo "Error: " . $conn -> error;
    }

    $conn -> close();
?>