<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) ){  
 $name 		=$data->name;
 $surname 	=$data->surname;
 $cell 	=$data->cell;
 $password 	=$data->surname;
 $address 	= $data->address;
 $role 	= $data->role;
 $city 	= $data->city;
 $idnumber 	= $data->idnumber;
 $email 	= $data->email;
 $courseId = $data->courseId;

$result = $conn->prepare("SELECT * FROM user WHERE email = ?"); 
$result->execute(array($email));
if ($result->rowCount() ==0) {

$result = $conn->prepare("INSERT INTO user (name,email, surname, password,createdate,cell,address, role,city,idnumber)
                VALUES (?,?,?,?, now(),?,?,?,?,?)"); 
if($result->execute(array($name,$email, $surname,$password, $cell,$address,$role,$city,$idnumber))){		
	echo  json_encode($conn->lastInsertId());	  
}else{
	echo json_encode("error while trying to register client step 1 of 3");
}

}else{
	
	echo json_encode("Your account already exists, please go to login");
}
 
 
        
 
}
 else {

	echo json_encode( "500");
}
?>