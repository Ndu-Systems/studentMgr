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
    $moduleID = $data->moduleID;
    
    
    
    
    $result = $conn->prepare("INSERT INTO 'test'('type', 'date', 'duration', 'location', 'time', 'status', 'tittle', 'score', 'moduleID','createdate') VALUES (?,?,?,?,?,?,?,?,?,now())");
    if ($result->execute(array(
        $type,
        $date,
        $duration,
        $location,
        $time,
        $status,
        $tittle,
        $score,
        $moduleID
    ))) {
        echo json_encode($conn->lastInsertId());
    } else {
        echo json_encode("error while trying to register client step 1 of 3");
    }
    
    
} else {
    
    echo json_encode("500");
}
?>