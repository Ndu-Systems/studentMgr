<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Amount) ){  
 $Description 		=$data->Description;
 $Type 	=$data->Type;
 $Amount 	=$data->Amount;
 $UserId 	=$data->UserId;
 $Month 	= $data->Month;
 $CreateUserdId 	= $data->CreateUserdId;
 $ModifyUserId 	= 0;
 $AccountStatus 	= 1;



$result = $conn->prepare("INSERT INTO accounting (Description, Type, Amount, UserId, Month, CreateUserdId, ModifyUserId, AccountStatus,CreateDate)
                VALUES (?,?,?,?,?,?,?,?,now())"); 
if($result->execute(array($Description, $Type, $Amount, $UserId, $Month, $CreateUserdId, $ModifyUserId, $AccountStatus))){		
	echo $id =  $conn->lastInsertId();	 
}else{
	echo json_encode("while trying so save transiction");
}

 
 
        
 
}
 else {

	echo json_encode( "500");
}
?>