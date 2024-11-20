<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "job_applications";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $gender = $conn->real_escape_string($_POST['gender']);
    $degree = $conn->real_escape_string($_POST['degree']);

    $sql = "INSERT INTO applicants (name, email, phone, gender, degree)
            VALUES ('$name', '$email', '$phone', '$gender', '$degree')";

    if ($conn->query($sql) === TRUE) {
        echo "Record added successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
