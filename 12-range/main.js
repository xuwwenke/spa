$(function(){
    var $range=$('#range'),$age=$('#age');
    $age.html('0')
    $range.change(function(){
        $age.html($range.val());
    });
});