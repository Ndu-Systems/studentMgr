<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->type)) {
    
    $type     = $data->type;
    $date     = $data->date;
    $duration = $data->duration;
    $location = $data->location;
    $time     = $data->time;
    $status   = $data->status;
    $tittle   = $data->tittle;
    $score    = $data->score;
    $subjectID = $data->subjectID;
    $lectureID = $data->lectureID;
    
    
    
    
    $result = $conn->prepare("INSERT INTO test(lectureID,type, date, duration, location, time, status, tittle, score, subjectID,createdate)
     VALUES (?,?,?,?,?,?,?,?,?,?,now())");
    if ($result->execute(array(
        $lectureID,
        $type,
        $date,
        $duration,
        $location,
        $time,
        $status,
        $tittle,
        $score,
        $subjectID
    ))) {
        echo json_encode($conn->lastInsertId());
    } else {
        echo json_encode("error while trying to register client step 1 of 3");
    }
    
    
} else {
    
    echo json_encode("500");
}
?>