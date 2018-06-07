<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->courseId) ){  
 $lectureId =$data->lectureId;
 $courseId = $data->courseId;

// $result = $conn->prepare("SELECT * FROM user WHERE email = ?"); 
// $result->execute(array($email));
// if ($result->rowCount() ==0) {

$result = $conn->prepare("INSERT INTO `lecture_course_subject`(`lectureId`, `CourseId`,`Year`,`Status`) 
    VALUES (?,?,now(),'In Progress')");
if($result->execute(array($lectureId,$courseId))){			
        echo $conn->lastInsertId();
}else{
	echo json_encode("error while trying to register client step 1 of 3");
}

// }else{
	
// 	echo json_encode("Your account already exists, please go to login");
// } 
        
 
}
 else {

	echo json_encode( "500");
}
?>