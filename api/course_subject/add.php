<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->courseID) ){  
 $courseID 		=$data->courseID;
 $subjectID 	=$data->subjectID;
 

$result = $conn->prepare("SELECT * FROM course_subject WHERE subjectID = ? and courseID = ?"); 
$result->execute(array($subjectID,$courseID));
if ($result->rowCount() ==0) {

$result = $conn->prepare("INSERT INTO `course_subject` ( `courseID`, `subjectID`, `createdate`) 
                VALUES (?,?,now())"); 
if($result->execute(array($courseID,$subjectID))){
	echo json_encode("subject created successfully!");
}else{
	echo json_encode("error while trying to add subject");
}		
	
}else{
	
	echo json_encode("subject already exists");
}
  
}
 else {
	echo json_encode( "500");
}
?>