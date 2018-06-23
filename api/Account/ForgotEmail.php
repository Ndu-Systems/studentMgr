<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";

$data = json_decode(file_get_contents("php://input"));
$email = $_GET['email']; 
$token = bin2hex(openssl_random_pseudo_bytes(16));

$result = $conn->prepare("SELECT * FROM user WHERE email = ?");
$result->execute(array(
  $email
));
if ($result->rowCount() > 0) {

    $tokenGen = $conn->prepare("UPDATE user SET Token = ? where email = ?");
    if($tokenGen->execute(array($token,$email))){
      echo json_encode(1);
    } 
}
else{
  echo json_encode("500");
}
class User{
  public $id;
  public $name;
  public $surname;
  public $email;
  public $role;
}
?>
