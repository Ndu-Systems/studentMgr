<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";

$data = json_decode(file_get_contents("php://input"));
$email = $_GET['email'];
$pass= $_GET['password'];
$userData = null;

$result = $conn->prepare("SELECT * FROM user WHERE email = ? AND password = ?");
$result->execute(array(
  $email, $pass
));
if ($result->rowCount() > 0) {
    while ($row = $result->fetch(PDO::FETCH_OBJ)) {
     $user = new User();
     $user->id = $row->id;
     $user->name = $row->name;
     $user->surname = $row->surname;
     $user->email = $row->email;
     $user->role = $row->role;
     $user->cell = $row->cell;
     $user->address = $row->address;
     $user->city = $row->city;
     $user->idnumber = $row->idnumber;
     $user->password = $row->password;
     $userData = $user;
    }
}
echo json_encode($userData);

class User{
  public $id;
  public $name;
  public $surname;
  public $email;
  public $role;
}
?>
