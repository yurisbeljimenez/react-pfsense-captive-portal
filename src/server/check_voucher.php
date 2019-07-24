<?php
require_once("auth.inc");
require_once("functions.inc");
require_once("captiveportal.inc");
require_once("init_vars.php");


function checkVoucher () {
    $voucher = trim($_POST['voucher']);
    $timecredit = 0;
    $result = voucher_auth($voucher, 1);
    if (strpos($result[0], "good for") !== false) {
        $timecredit = (int)explode(" ", $result[1])[3];
    }
    echo $timecredit;
}

checkVoucher();
?>
