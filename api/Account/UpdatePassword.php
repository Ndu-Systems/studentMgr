<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){  
 $password 		=$data->password;
 $email 	= $data->email;

$result = $conn->prepare("SELECT * FROM user WHERE email = ?"); 
$result->execute(array($email));
if ($result->rowCount() == 1) {

$result = $conn->prepare("
    UPDATE user SET  
    password=?,
    token =?
    WHERE email = ?
"); 
if($result->execute(array($password,null,$email))){
    echo 1;
}else{
	echo json_encode("error while trying to update password please try again");
}		

	
}else{
	
	echo json_encode("Your account Does Not Exist, Please Contact System Administrator");
}        
 
}
 else {

	echo json_encode( "500");
}
?>