<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Description) ){  
 $Description 		=$data->Description;
 $AccountTypeID 	=$data->AccountTypeID;  
 $CreateUserdId = $data->CreateUserdId;
  $StatusId 	= 1;


 $result = $conn->prepare("INSERT INTO accounttypes(Description, AccountTypeID, CreatUserId, CreateDate, ModifyUserId, ModifyDate, StatusId) 
 VALUES (?,?,?,now(),?,now(),?)"); 
if($result->execute(array($Description, $AccountTypeID, $CreateUserdId, $CreateUserdId, $StatusId))){		
echo $id =  $conn->lastInsertId();	 
}else{
echo json_encode("while trying so save account type");
} 
 
}
 else {

	echo json_encode( "500");
}
?>