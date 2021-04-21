<?php 

//sleep(5);
$todo = $_POST['todo'];

echo json_encode(['status'=>true, 'message'=>'Eklendi', 'class'=>'success']);
#echo json_encode(['status'=>false, 'message'=>'Eklendi başarısız', 'class'=>'error']);

/*
echo "<data>
    <status>true</status>
    <message>Eklendi</message>
    <class>success</class>
</data>";
*/

