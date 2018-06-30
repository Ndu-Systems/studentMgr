<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";

if (isset($_GET['id']) ){  
$id =$_GET['id'];
$rows  = array();

$result = $conn->prepare("SELECT * FROM user WHERE id = ?");
$result->execute(array(
    $id
));
if ($result->rowCount() > 0) {
    while ($row = $result->fetch(PDO::FETCH_OBJ)) {
        $user                 = new User();
        $user->id             = $row->id;
        $user->name = $row->name;
        $user->surname   = $row->surname;
		$user->GetCourse($conn);
        $rows[] = $user;
    }
}
echo json_encode($rows);
}

class User {
    public $id;
    public $name;
    public $surname;
    public $courseID;

    function GetCourse($conn){
        $result    = $conn->prepare("SELECT * FROM student_course WHERE StudentId =? Limit 1");
        $result->execute(array(
            $this->id
		));
        if ($result->rowCount() > 0) {
            while ($row = $result->fetch(PDO::FETCH_OBJ)) {
				$this->courseID = $row->courseID;
			}
		}
    }
}
?>