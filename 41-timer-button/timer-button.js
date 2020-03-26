// 工厂函数
// var $timerButton=(function(){
//     // $btn.css({
//     //     height:'50px',
//     //     width:'100px'
//     // })
//     function show(conf){
//         var $btn=$('<input type="button" class="timer-button">');
//         var timer,num,
//             cfg={
//                 container:'body',
//                 tLength:6,
//                 enable:'disabled',
//                 title:'同意',
//                 onClick:null
//             };
//         // 1.DOM draw
//         $(cfg.container).append($btn);
//         // 扩展
//         $.extend(cfg,conf);
//         num=cfg.tLength

//         $btn.val(cfg.title+'('+cfg.tLength+'s)')
//         $btn.attr("disabled",cfg.enable);
//         timer=setInterval(function(){
//             num--;
//             if(num===0){
//                 clearInterval(timer);
//                 $btn.val(cfg.title);
//                 $btn.removeAttr('disabled');
//             }else{
//                 $btn.val(cfg.title+'('+num+'s)')
//             }
//         },1000)
//         $btn.click(function(){
//             cfg.onClick();
//         })
//         // 2.event bind
//     }
//     return {
//         show:show
//     }
// }());
// // 不用page load event

// // 封装成对象

// // 1.简单对象自变量,不完全是面向对象，不能包含私有方法
// // var timerBtn={
// //     show:function(){}
// // }
// // 2.工厂函数:一个函数返回值是一个简单对象
// // var timerBtn=(function(){
// //     return {
// //         show:function(){}
// //     }
// // }())
// // 3.构造函数:function TimerBtn(){

// // }
// // var tb=new timerBtn()


// var $timerButton=(function(){
// 构造函数
function TimerButton(){
    var $btn=$('<input type="button" class="timer-button">');
    var timer,num,
        cfg={
            container:'body',
            tLength:6,
            enable:'disabled',
            title:'同意',
            onClick:null
        };
    // $btn.css({
    //     height:'50px',
    //     width:'100px'
    // })
    // 这是一个公共函数
    this.show=function(conf){
        // 1.DOM draw
        $(cfg.container).append($btn);
        // 扩展
        $.extend(cfg,conf);
        num=cfg.tLength

        $btn.val(cfg.title+'('+cfg.tLength+'s)')
        $btn.attr("disabled",cfg.enable);
        timer=setInterval(function(){
            num--;
            if(num===0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            }else{
                $btn.val(cfg.title+'('+num+'s)')
            }
        },1000)
        $btn.click(function(){
            cfg.onClick();
        })
        // 2.event bind
    }
}
// 不用page load event

// 封装成对象

// 1.简单对象自变量,不完全是面向对象，不能包含私有方法
// var timerBtn={
//     show:function(){}
// }
// 2.工厂函数:一个函数返回值是一个简单对象
// var timerBtn=(function(){
//     return {
//         show:function(){}
//     }
// }())
// 3.构造函数:function TimerBtn(){

// }
// var tb=new timerBtn()
