<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

$rows = array();
//students
$result = $conn->prepare("SELECT * FROM user WHERE role = ?"); 
$result->execute(array('student'));

$counts = new Counts();
$counts->key ="Students";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//admins
$result = $conn->prepare("SELECT * FROM user WHERE role = ?"); 
$result->execute(array('admin'));

$counts = new Counts();
$counts->key ="Admins";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;
//subject
$result = $conn->prepare("SELECT * FROM subject"); 
$result->execute(array());

$counts = new Counts();
$counts->key ="Subjects";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//lecture
$result = $conn->prepare("SELECT * FROM user WHERE role = ?"); 
$result->execute(array('lecture'));

$counts = new Counts();
$counts->key ="Lectures";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;
//department
$result = $conn->prepare("SELECT * FROM department"); 
$result->execute(array());

$counts = new Counts();
$counts->key ="Departments";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;
//course
$result = $conn->prepare("SELECT * FROM course"); 
$result->execute(array());

$counts = new Counts();
$counts->key ="Courses";
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
