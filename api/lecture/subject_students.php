<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";

if (isset($_GET['subjectID']) ){  
$subjectID =$_GET['subjectID'];
$statement = $conn->prepare("
    SELECT st.* FROM `student_course_subject` scs
    inner join user st on st.id = scs.StudentId 
    inner join course c on c.id = scs.courseID
    inner join subject s  on s.id = scs.subject
    WHERE s.id = ?
");
$statement->execute(array($subjectID));
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo $json = json_encode($results);
}
?>