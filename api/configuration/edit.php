<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->AccountTypeID)) {
    
    $AccountTypeID     = $data->AccountTypeID;
    $Description     = $data->Description;
    $ModifyUserId     = $data->ModifyUserId;
    $StatusId     = $data->StatusId;
    $TypeID = $data->TypeID;

    $result = $conn->prepare("UPDATE accounttypes SET 
        Description=?,
        AccountTypeID=?,
        ModifyUserId=?,
        ModifyDate=now(),
        StatusId=? 
        WHERE TypeID=?
    ");
    if ($result->execute(array(        
        $Description,
        $AccountTypeID,
        $ModifyUserId,
        $StatusId,
        $TypeID    
     ))) {
        echo json_encode(1);
    } else {
        echo json_encode("error occured please contact system administrator!");
    }
    
    
} else {
    
    echo json_encode("500");
}
?>