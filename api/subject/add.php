<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->tittle) ){  
 $tittle 		=$data->tittle;
 $description 	=$data->description;
 $credits 	=$data->credits;
 $status 	=$data->status;
 $code 	=$data->code;

$result = $conn->prepare("SELECT * FROM subject WHERE tittle = ?"); 
$result->execute(array($tittle));
if ($result->rowCount() ==0) {

$result = $conn->prepare("INSERT INTO subject (tittle ,code,  description ,  credits  ,  status,createdate)
                VALUES (?,?,?,?,?,now())"); 
if($result->execute(array($tittle,$code, $description,$credits,$status))){
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