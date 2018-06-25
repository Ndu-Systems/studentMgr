<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";

if (isset($_GET['testID']) ){  
$testID =$_GET['testID'];
$statement = $conn->prepare("
    SELECT s.* FROM student_test st
    INNER JOIN user s ON st.studentID = s.id
    INNER JOIN test t on st.testID = t.id
    WHERE t.id = ?
");
$statement->execute(array($testID));
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
}
?>