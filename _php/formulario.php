<?php

$para= "";
$assunto= "Contato pelo Site";

    $empresa= $_REQUEST['empresa'];
    $cnpj= $_REQUEST['cnpj'];
    $contato= $_REQUEST['contato'];
    $end=$_REQUEST['end'];
    $cidade=$_REQUEST['cidade'];
    $tcom=$_REQUEST['tcom'];
    $cel=$_REQUEST['cel'];
    $email=$_REQUEST['email'];
    $msg=$_REQUEST['msg'];

        $corpo= "<strong>CONTATO PELO SITE</strong><br/><br/>";
        $corpo.= "<strong>EMPRESA: </strong>$empresa<br/>";
        $corpo.= "<strong>CNPJ: </strong>$cnpj<br/>";
        $corpo.= "<strong>CONTATO: </strong>$contato<br/>";
        $corpo.= "<strong>ENDEREÇO: </strong>$end<br/>";
        $corpo.= "<strong>CIDADE: </strong>$cidade<br/>";
        $corpo.= "<strong>TEL. COMERCIAL:: </strong>$tcom<br/>";
        $corpo.= "<strong>CELULAR: </strong>$cel<br/>";
        $corpo.= "<strong>EMAIL: </strong>$email<br/>";
        $corpo.= "<strong>MENSAGEM: </strong>$msg<br/>";

            $header= "Content-Type: text/html; charset= UTF-8\n";
            $header.= "From: $email Reply-to: $email\n";

mail($para,$assunto,$corpo,$header);

header("location:../contato.html?msg=enviado");

?>
