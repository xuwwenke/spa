$(function(){
    //get dom elem
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');

    $btnCal.click(function(){
        // validate if error return;
        if(!validate('#width')||!validate('#height')) return;
        //get value
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        var p=Math.round(2*(w+h)*Math.pow(10,3))/Math.pow(10,3)
            ,a=Math.round(w*h*Math.pow(10,3))/Math.pow(10,3);
        //output
        $perimeter.val(p),
        $area.val(a);
    })
    $width.focusout(function(){
        // if(!validate(width)) select this;
        if(!validate('#width'))$width.select();
    })
    $height.focusout(function(){
        // if(!validate(height)) select this;
        if(!validate('#height'))$width.select();
    })
    function validate(field){
        // get DOM error message
        var $data=$(field),
            $msg=$(field+'-validation-message');
        //validate null
        if($data.val()===''){
            $msg.html('不能为空!');
            $data.select();
            return false;
        }
        // validate number
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须是数值!');
            $data.select();
            return false;
        }
        // validate>0
        if(Number($data.val())<0){
            $msg.html('必须大于0!');
            $data.select();
            return false;
        }
            // prompt error message
            // return false
        $msg.html(' ')
        return true;
    }
})