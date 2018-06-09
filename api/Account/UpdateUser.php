<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){  
 $name 		=$data->name;
 $surname 	=$data->surname;
 $cell 	=$data->cell; 
 $address 	= $data->address; 
 $city 	= $data->city; 
 $email 	= $data->email;


$result = $conn->prepare("SELECT * FROM user WHERE email = ?"); 
$result->execute(array($email));
if ($result->rowCount() == 1) {

$result = $conn->prepare("
    UPDATE user SET  
    name=?,
    surname=?,  
    cell=?,
    address=?,  
    city=?
    WHERE email = ?
"); 
if($result->execute(array($name,$surname,$cell,$address,$city,$email))){
    echo 1;
}else{
	echo json_encode("error while trying to update details please try again");
}		

	
}else{
	
	echo json_encode("Your account Does Not Exist, Please Contact System Administrator");
}
 
 
        
 
}
 else {

	echo json_encode( "500");
}
?>