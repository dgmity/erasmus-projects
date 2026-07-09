<?php
    include "db.php";

    if(isset($_POST['student_id']) && $_POST['student_id'] != "") {
        $student_id = $_POST['student_id'];

        $sql = "SELECT * FROM students WHERE student_id = '$student_id'";
    } else {
        $sql = "SELECT * FROM students";
    }

    $result = $conn -> query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View students</title>
    <link rel="stylesheet" href="view_students.css">
</head>
<body>
    <h2>Student List</h2>

    <form method="post">
        <label for="student_id">Search by Student ID</label>
        <input type="text" name="student_id" id="student_id">
        <input type="submit" value="search">
    </form>
    <table>
        <tr>
            <th>Full Name</th>
            <th>Student</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Departament</th>
            <th>Semester</th>
            <th>Update</th>
        </tr>

        <?php

        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){

        
        ?>

        <tr>
            <td><?php echo $row['fullname']; ?></td>
            <td><?php echo $row['student_id']; ?></td>
            <td><?php echo $row['email']; ?></td>
            <td><?php echo $row['phone']; ?></td>
            <td><?php echo $row['department']; ?></td>
            <td><?php echo $row['semester']; ?></td>
            <td><a href="update.php?id=<?php echo $row['id'];?>">Update this student</a></td>
        </tr>

        <?php
            }
        }
            $conn -> close();
        ?>
    </table><br>

    <a href="dashboard.php">Back to dashboard</a>
</body>
</html>