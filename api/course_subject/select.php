<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";

if (isset($_GET['courseID']) ){  
$courseID =$_GET['courseID'];
$statement = $conn->prepare("
SELECT c.* , s.* , cs.id ,cs.SubjectID FROM course_subject cs INNER JOIN course c on c.id = cs.courseID INNER JOIN subject s on s.id = cs.SubjectID WHERE c.id = ?
");
$statement->execute(array($courseID));
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
echo $json = json_encode($results);
}
?>