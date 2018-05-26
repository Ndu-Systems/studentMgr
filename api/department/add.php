<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) ){  
 $name 		=$data->name;
 $status 	=$data->status;

$result = $conn->prepare("SELECT * FROM department WHERE name = ?"); 
$result->execute(array($name));
if ($result->rowCount() ==0) {

$result = $conn->prepare("INSERT INTO department (name, status, startdate)
                VALUES (?,?, now())"); 
if($result->execute(array($name, $status))){
	echo json_encode("Department created successfully!");
}else{
	echo json_encode("error while trying to add department");
}		

	
}else{
	
	echo json_encode("Department already exists");
}
 
 
        
 
}
 else {

	echo json_encode( "500");
}
?>