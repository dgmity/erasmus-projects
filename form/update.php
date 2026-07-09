<?php
    include "db.php";

    $id = $_GET['id'];

    if (isset($id)) {
        $sql1 = "SELECT * FROM students WHERE id = '$id';";

        $result = $conn -> query($sql1);

        $row = $result -> fetch_assoc();

    }


    if(isset($_POST['update'])) {

        $student_id = $_POST['student_id'];
        
        $full_name = $_POST['full_name'];

        $email = $_POST['email'];

        $phone = $_POST['phone'];

        $sql = "UPDATE students SET
        fullname = '$full_name',
        email = '$email',
        phone = '$phone' WHERE student_id = '$student_id'";

        if ($conn -> query($sql)) {
            echo "<h2>Student updated successfully!</h2>";
        } else {
            echo "<h2>Error: " . $conn -> error . "</h2>";
        }
    }

    $conn -> close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update students</title>
    <link rel="stylesheet" href="update.css">
</head>
<body>
    <main>
        <form method="post">
            <h2>Update Student Information</h2>
            <label for="student_id">Student ID</label>
            <input type="text" name="student_id" id="student_id" value="<?php echo $row['student_id']; ?>" required><br><br>

            <label for="full_name">Full name</label>
            <input type="text" name="full_name" id="full_name" value="<?php echo $row['fullname']; ?>"><br><br>

            <label for="email">Email</label>
            <input type="email" name="email" id="email" value="<?php echo $row['email']; ?>"><br><br>

            <label for="phone">Phone</label>
            <input type="text" name="phone" id="phone" required value="<?php echo $row['phone']; ?>"><br><br>

            <input type="submit" name="update" value="Update students" id="update">
        </form>        
    </main>
    
</body>
</html>