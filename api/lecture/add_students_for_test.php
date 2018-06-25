<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->testID) ){  
 $testID = $data->testID;
$studentIDs = $data->studentIDs; 

foreach($studentIDs as $student) {
    $result = $conn->prepare("INSERT INTO `student_test`(`studentID`, `testID`, `createdate`, `status`) 
    VALUES (?,?,now(),?)");
if($result->execute(array(intval($student->id),intval($testID),'pending'))){			
}else{
	echo json_encode("error while trying to register client step 1 of 3");
}
} 
}
 else {

	echo json_encode( "500");
}
?>
