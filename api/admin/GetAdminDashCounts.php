<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

$rows = array();
//students [0]
$result = $conn->prepare("SELECT * FROM user WHERE role = ?"); 
$result->execute(array('student'));

$counts = new Counts();
$counts->key ="Students";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//admins [1]
$result = $conn->prepare("SELECT * FROM user WHERE role = ?"); 
$result->execute(array('admin'));

$counts = new Counts();
$counts->key ="Admins";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;
//subject [2]
$result = $conn->prepare("SELECT * FROM subject"); 
$result->execute(array());

$counts = new Counts();
$counts->key ="Subjects";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//staff [3]
$result = $conn->prepare("SELECT * FROM user WHERE role != ?"); 
$result->execute(array('student'));

$counts = new Counts();
$counts->key ="Staff";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;
//department [4]
$result = $conn->prepare("SELECT * FROM department"); 
$result->execute(array());

$counts = new Counts();
$counts->key ="Departments";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;
//course [5]
$result = $conn->prepare("SELECT * FROM course"); 
$result->execute(array());

$counts = new Counts();
$counts->key ="Courses";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//account-types [6]
$result = $conn->prepare("SELECT * FROM accounttypes WHERE TypeID NOT IN (?,?)"); 
$result->execute(array(1,2));

$counts = new Counts();
$counts->key ="Accounts";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

echo json_encode($rows);

?>
  <?php
        class Counts {
            public $key ;
            public $value;
          }
          
        ?>
