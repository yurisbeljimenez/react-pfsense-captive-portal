<?php
require_once("auth.inc");
require_once("functions.inc");
require_once("captiveportal.inc");

function disconect(){
    require_once("init_vars.php");

    $ourhostname = portal_hostname_from_client_ip($clientip);
	$protocol = (isset($cpcfg['httpslogin'])) ? 'https://' : 'http://';
    $redirurl = "{$protocol}{$ourhostname}/?zone={$cpzone}";
    echo $redirurl;

    $safe_logout_id = SQLite3::escapeString($_POST['logout_id']);
    captiveportal_disconnect_client($safe_logout_id, 1, "LOGOUT");
    // portal_reply_page($redirurl, "login", null, $_POST['clientmac'], $_POST['clientip']);
}

disconect();
?>
