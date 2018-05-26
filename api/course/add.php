<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->tittle) ){  
 $tittle 		=$data->tittle;
 $description 	=$data->description;
 $credits 	=(int)$data->credits;
 $department 	=$data->department;
 $status 	=$data->status;

$result = $conn->prepare("SELECT * FROM course WHERE tittle = ?"); 
$result->execute(array($tittle));
if ($result->rowCount() ==0) {

$result = $conn->prepare("INSERT INTO course (tittle ,  description ,department,  credits      ,  status,createdate)
                VALUES (?,?,?,?,?,now())"); 
if($result->execute(array($tittle, $description,$department,$credits,$status))){
	echo json_encode("course created successfully!");
}else{
	echo json_encode("error while trying to add course");
}		
	
}else{
	
	echo json_encode("course already exists");
}
 
 
        
 
}
 else {

	echo json_encode( "500");
}
?>