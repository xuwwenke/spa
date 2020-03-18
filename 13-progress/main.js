$(function(){
    var $progress=$('#progress'),
        $start=$('#start'),
        $suspend=$('#suspend'),
        $repeat=$('#repeat');

    var value=0,s=0;
    $start.click(function(){
        s=window.setInterval(function(){
            value++;
            $progress.val(value);
        },100)
    })
    $suspend.click(function(){
        window.clearInterval(s);
        s=0;
    })
    $repeat.click(function(){
        $progress.val(0);
        window.clearInterval(s);
        value=0;
    })
})