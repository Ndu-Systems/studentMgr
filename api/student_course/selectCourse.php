<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";

if (isset($_GET['studentID']) ){  
$studentID =$_GET['studentID'];
$rows = array();

$result = $conn->prepare("SELECT * FROM user WHERE id = ?");
$result->execute(array(
    $studentID 
));
if ($result->rowCount() > 0) {
    while ($row = $result->fetch(PDO::FETCH_OBJ)) {
        $data                 = new Stu_Course_Subjects();
        $data->id             = $row->id;
        $data->name             = $row->name;
        $data->surname             = $row->surname;
		$data->getCourse($conn);
		$data->GetSubjects($conn);
        $rows[] = $data;
    }
}
echo json_encode($rows);
}
class Stu_Course_Subjects{
    public $id;
    public $name;
    public $surname;

    public $course;
    public $department;
    public $credits;
    public $status;

    public $subjects;
    function GetSubjects($conn){
        $subjects = array();
        $result = $conn->prepare("SELECT * FROM student_course_subject WHERE StudentId = ?");
        $result->execute(array(
            $this->id 
        ));
        if ($result->rowCount() > 0) {
            while ($row = $result->fetch(PDO::FETCH_OBJ)) {
                $Subject            = $row->Subject;
                $course = $conn->prepare("SELECT * FROM subject WHERE id = ?");
                $course->execute(array(
                    $Subject
                ));
                if ($course->rowCount() > 0) {
                    while ($course_row = $course->fetch(PDO::FETCH_OBJ)) {
                        $subjects[] = $course_row;
                    }
                }
            }
        }

        $this->subjects =$subjects;
    }

    function getCourse($conn){
        
        $result = $conn->prepare("SELECT * FROM student_course WHERE studentID = ?");
            $result->execute(array(
                $this->id 
            ));
            if ($result->rowCount() > 0) {
                while ($row = $result->fetch(PDO::FETCH_OBJ)) {
                    $courseID            = $row->courseID;
                    $course = $conn->prepare("SELECT * FROM course WHERE id = ?");
                    $course->execute(array(
                        $courseID
                    ));
                    if ($course->rowCount() > 0) {
                        while ($course_row = $course->fetch(PDO::FETCH_OBJ)) {
                            $this->course            = $course_row->tittle;
                            $this->credits            = $course_row->credits;
                            $this->status            = $course_row->status;
                            $this->department            = $course_row->department;
                        }
                    }
                }
            }
    }

  
}
/*
$statement = $conn->prepare("
    SELECT c.* FROM `student_course_subject` scs
    inner join user st on st.id = scs.StudentId 
    inner join course c on c.id = scs.courseID
    inner join subject s  on s.id = scs.subject
    WHERE st.id = ?
");
$statement->execute(array($studentID));
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo $json = json_encode($results);
}
*/
?>