$(function(){
    var wishes=[
        "Дорогая Настя! Поздравляю тебя с Днём рождения!",
        "Желаю тебе успехов на пути развития профессиональных навыков, побольше надежных друзей, чтобы твое желание узнать что-то новое и добиться целей оставалось с тобой на всю жизнь, меньше разочарований...",
        "Хотя у нас было пару ссор и я поступал как последний мудак, но я правда осознал это и мне очень жаль, что я так поступил:( Ты очень хороший человек и мне правда приносит удовольствие общение с тобой",
        "Надеюсь, ты дашь мне второй шанс и мы сможем общаться так же как и раньше!:)"
    ];
    var responses=[
        {
            yes:"Хм, забавно",
            no:"О боже, что это за фигня?!"
        },
        {
            yes:"Хэх, спасибо, спасибо",
            no:"Мда, зря я это продолжила..."
        },
        {
            yes:"Неожиданно, и что дальше",
            no:"Так, все, пока"
        },
        {
            yes:"Да, все круто!:)",
            no:"Эммм...Прости, но нет"
        }
    ];
    var audio=document.getElementById("music");
    audio.volume=0.1;
    audio.play();
    var video=document.getElementById("video");
    video.volume=0;
    video.play();
    var $buttons=$(".btn");
    var $yes=$("#y"), $no=$("#n");
    var $wish=$(".wish-text");
    var counter=0;
    function wish(){
        $wish.css("left", "100%");
        $wish.text(wishes[counter]);
        window.setTimeout(function(){
            $wish.css("opacity", "1");
            $wish.css("left", "0");
        }, 500);
    }
    function suggestResponse(){
        $yes.text(responses[counter].yes);
        $no.text(responses[counter++].no);
    }
    function start(){
        wish();
        window.setTimeout(function(){
            $buttons.css("opacity", "1");
            $buttons.css("width", "15%");
            $buttons.css("height", "12%");
            suggestResponse();
        }, 2000);
    }
    $yes.click(function(){
        if(counter===responses.length){
            $("body").append("<div class=\"end\"><img style='position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:30%;animation:spinAll 3s linear infinite' src='images/smile-end.png'></div>");
            window.setTimeout(function() {
                $(".end").css("width", "100%");
                $(".end").css("height", "100%");
            }, 500);
        }
        var currentWY=parseFloat($yes.css("width").substring(0, $yes.css("width").length-2)),
            currentWN=parseFloat($no.css("width").substring(0, $no.css("width").length-2)),
            currentHY=parseFloat($yes.css("height").substring(0, $yes.css("height").length-2)),
            currentHN=parseFloat($no.css("height").substring(0, $no.css("height").length-2));
        $yes.css("width", currentWY*2+"px");
        $yes.css("height", currentHY*2+"px");
        $no.css("width", currentWN/2+"px");
        $no.css("height", currentHN/2+"px");
    });
    $no.click(function(){
        $("body").append("<div class=\"end\"><img style='position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:30%;animation:spinAll 3s linear infinite' src='images/sad-end.png'></div>");
        window.setTimeout(function() {
            $(".end").css("width", "100%");
            $(".end").css("height", "100%");
        }, 500);
        var currentWY=parseFloat($yes.css("width").substring(0, $yes.css("width").length-2)),
            currentWN=parseFloat($no.css("width").substring(0, $no.css("width").length-2)),
            currentHY=parseFloat($yes.css("height").substring(0, $yes.css("height").length-2)),
            currentHN=parseFloat($no.css("height").substring(0, $no.css("height").length-2));
        $yes.css("width", currentWY/2+"px");
        $yes.css("height", currentHY/2+"px");
        $no.css("width", currentWN*2+"px");
        $no.css("height", currentHN*2+"px");
    });
    $buttons.click(function(){
        $wish.css("left", "-100%");
        $wish.css("opacity", "0");
        window.setTimeout(function(){wish()},500);
        $buttons.css("opacity", "0");
        window.setTimeout(function(){
            $buttons.css("opacity", "1");
            $buttons.css("width", "15%");
            $buttons.css("height", "12%");
            suggestResponse();
        }, 2000);
    });
    start();
});