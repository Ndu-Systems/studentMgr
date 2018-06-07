<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";

if (isset($_GET['studentID']) ){  
$studentID =$_GET['studentID'];
$statement = $conn->prepare("
    SELECT s.* FROM `student_course_subject` scs
    inner join user st on st.id = scs.StudentId 
    inner join course c on c.id = scs.courseID
    inner join subject s  on s.id = scs.subject
    WHERE st.id = ?
");
$statement->execute(array($studentID));
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo $json = json_encode($results);
}
?>