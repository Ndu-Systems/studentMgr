<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Amount) ){  
 $Description 		=$data->Description;
 $TypeId 	=$data->TypeId;
 $Amount 	=$data->Amount;
 $UserId 	=$data->UserId;
 $Month 	= $data->Month;
 $CreateUserdId = $data->CreateUserdId;
 $ModifyUserId 	= $data->UserId;
 $StatusId 	= 1;


 $result = $conn->prepare("INSERT INTO accounting (Description, TypeId, Amount, UserId, Month, CreateUserdId, CreateDate, ModifyDate, ModifyUserId, StatusId) 
 VALUES (?,?,?,?,?,?,now(),now(),?,?)"); 
if($result->execute(array($Description, $TypeId, $Amount, $UserId, $Month, $CreateUserdId, $ModifyUserId, $StatusId))){		
echo $id =  $conn->lastInsertId();	 
}else{
echo json_encode("while trying so save transiction");
} 
 
}
 else {

	echo json_encode( "500");
}
?>