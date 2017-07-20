$(function () {
    $("#down1").click(function () {
        $(this).parent().next().toggle();
        var $aLi=$(".menu ul>li");
            $aLi.click(function () {
               var num=parseInt($(this).children().html());
                $("#money").val(num);
                $(".menu").css("display","none");
            })
    });
    $("#down").click(function () {
        $(this).parent().next().toggle();
        var $aLi=$(".menu1 ul>li");
        $aLi.click(function () {
            var $num=$(this).children().html();
            if($num.length==2){
                $("#m").html("年");
                $num=parseInt($(this).children().html());
                $("#money1").val($num);
            }else if($num.length==3||$num.length==4){
                $("#m").html("个月");
                $num=parseInt($(this).children().html());
                if($num==10){
                    $("#m").html("年");
                }
                $("#money1").val($num);
            }
            $(".menu1").css("display","none");
        })
    })
});