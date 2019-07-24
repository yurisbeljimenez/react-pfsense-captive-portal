<?php
require_once("auth.inc");
require_once("functions.inc");
require_once("captiveportal.inc");

function getTime(){
    require_once("init_vars.php");

    $cpsession = captiveportal_isip_logged($clientip);


    if(!empty($cpsession)){
        echo json_encode($cpsession);
    }
    return;
}

getTime();
?>