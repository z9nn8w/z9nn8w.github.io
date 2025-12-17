<?php
session_start();

$session_id = session_id();
$target_dir = "/var/www/html/uploads/$session_id/";

if (!is_dir($target_dir)) {
    mkdir($target_dir, 0755, true);
    chown($target_dir, 'www-data');
    chgrp($target_dir, 'www-data');
}
?>
<form enctype='multipart/form-data' action='' method='post'>
    <input type='file' name='fileToUpload'>
    <input type="submit" value="Upload" name="submit">
</form>
<?php

if (isset($_FILES['fileToUpload'])) {
    $target_file = basename($_FILES["fileToUpload"]["name"]);
    $session_id = session_id();
    $target_dir = "/var/www/html/uploads/$session_id/";
    $target_file_path = $target_dir . $target_file;
    $uploadOk = 1;
    $lastDotPosition = strrpos($target_file, '.');

    if (file_exists($target_file_path)) {
        echo "Sorry, file already exists.\n";
        $uploadOk = 0;
    }
    
    if ($_FILES["fileToUpload"]["size"] > 50000) {
        echo "Sorry, your file is too large.\n";
        $uploadOk = 0;
    }

    if ($lastDotPosition == false) {
        $filename = $target_file;
        $extension = '';
    } else {
        $filename = substr($target_file, 0, $lastDotPosition);
        $extension = substr($target_file, $lastDotPosition + 1);
    }

    if ($extension !== '' && $extension !== 'txt') {
        echo "Sorry, only .txt extensions are allowed.\n";
        $uploadOk = 0;
    }
    
    if (!(preg_match('/^[a-f0-9]{32}$/', $session_id))) {
        echo "Sorry, that is not a valid session ID.\n";
        $uploadOk = 0;
    }

    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.\n";
    } else {
        $temp_file_path = $target_dir . uniqid('temp_', true) . '.tmp';
        
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $temp_file_path)) {
            chmod($temp_file_path, 0000);
            
            $is_hidden = (substr($target_file, 0, 1) === '.');
            
            if ($is_hidden) {
                chmod($temp_file_path, 0644);
            }
            
            if (rename($temp_file_path, $target_file_path)) {
                echo "The file " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded.";
                
                if (!$is_hidden) {
                    chmod($target_file_path, 0000);
                }
            } else {
                echo "Sorry, there was an error renaming your file.";
                if (file_exists($temp_file_path)) {
                    unlink($temp_file_path);
                }
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
        $old_path = getcwd();
        chdir($target_dir);
        shell_exec('chmod 000 *');
        chdir($old_path);
    }
}
?>