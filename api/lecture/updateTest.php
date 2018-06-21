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
    $tittle   = $data->tittle;
    $score    = $data->score;
    $id    = $data->id;

    
    
    
    
    $result = $conn->prepare("UPDATE test set  type=?, date=?, duration=?, location=?, time=?, tittle=?, score=? WHERE id =?");
    if ($result->execute(array(
    
        $type,
        $date,
        $duration,
        $location,
        $time,
        $tittle,
        $score,
        $id
    ))) {
        echo json_encode("Test updated :)");
    } else {
        echo json_encode("error while trying to register client step 1 of 3");
    }
    
    
} else {
    
    echo json_encode("500");
}
?>