var x, y;

var skillDelay = 0;
var laungageDelay = 0;
            
var educationLaunch = false;
var laungagesLaunch = false;
var skillsLaunch = false;
    
var educationHeight;
var educationTopPosition;
var educationBottomPosition;
    
var laungagesHeight;
var laungagesTopPosition;
var laungagesBottomPosition;
            
var skillsHeight;
var skillsTopPosition;
var skillsBottomPosition;

function laungageItem(i, l){  
    for(c = 1; c <= l; c++ ){  
        $("table tr:nth-child("+i+") td:nth-child("+ (c+1) +") .circle-level").delay(laungageDelay).animate({backgroundColor: '#27ae60'}, 500);  
        laungageDelay = laungageDelay + 150;  
    }  
}
function header(){
    $(".img").delay(300).animate({marginLeft: '0px', opacity: '1.0'}, "slow");
    $("header div:nth-child(2) h1").delay(600).animate({paddingLeft: '200px', opacity: '1.0'}, "slow");
    $("header div:nth-child(2) h4").delay(900).animate({paddingLeft: '200px', opacity: '1.0'}, "slow");
};
function headerXS(){
    $(".img-xs").delay(300).animate({opacity: '1.0'}, "slow");
    $("header div:last-child h1").delay(600).animate({opacity: '1.0'}, "slow");
    $("header div:last-child h4").delay(900).animate({opacity: '1.0'}, "slow");
};
function education(){
    // time-line
    $(".time-line").animate({height: '100%'}, 800);
    // number-circle 2004
    $(".principal section:nth-child(2) .col-md-12 div.hidden-xs div.col-sm-10 div:nth-child(1) div.number-circle").fadeIn("slow");
    // number-circle 2006
    $(".principal section:nth-child(2) .col-md-12 div.hidden-xs > div.col-sm-10 div:nth-child(2) div.number-circle").delay(500).fadeIn("slow");
    // talkbuuble 2004
    $(".principal section:nth-child(2) .col-md-12 div.hidden-xs > div.col-sm-10 div:nth-child(1) div.talkbubble").animate({marginLeft: '45px', opacity: '1.0'}, "slow");
    // talkbuuble 2006
    $(".principal section:nth-child(2) .col-md-12 div.hidden-xs > div.col-sm-10 div:nth-child(2) div.talkbubble").delay(250).animate({marginLeft: '45px', opacity: '1.0'}, "slow");
    
};
function educationXS(){
    $(".time-line").animate({height: '100%'}, 800);
    $(".principal section:nth-child(2) .col-md-12 div:nth-child(2) div:nth-child(1) .number-circle").fadeIn("slow");
    $(".principal section:nth-child(2) .col-md-12 div:nth-child(2) div:nth-child(2) .number-circle").delay(400).fadeIn("slow");
    $(".principal section:nth-child(2) .col-md-12 div:nth-child(2) div:nth-child(1)").delay(800).animate({backgroundPosition: "0%"}, 400);
    $(".principal section:nth-child(2) .col-md-12 div:nth-child(2) div:nth-child(2)").delay(1200).animate({backgroundPosition: "0%"}, 400);
    $('.principal section:nth-child(2) .col-md-12 div:nth-child(2) div:nth-child(1) .education-content').delay(1200).animate({opacity: '1.0'}, "slow");
    $('.principal section:nth-child(2) .col-md-12 div:nth-child(2) div:nth-child(2) .education-content').delay(1600).animate({opacity: '1.0'}, "slow");
};
function skills(){
    lenght = parseInt($(".secondary section:nth-child(2)").attr("data-length"));
    for(c = 0; c < lenght; c++){
        i = c + 1;
        level = $(".progress:nth-of-type(" + i + ") .progress-bar").attr("data-level");
        $(".progress:nth-of-type(" + i + ") .progress-bar").animate({width: level}, skillDelay);
        skillDelay = skillDelay + 400;
    }
};
function laungages(){
    laungageItem(1, 2);
    laungageItem(2, 3);
    laungageItem(3, 1);
    laungageItem(4, 4);
    
    /*---------------- * Add your laungage item here * ----------------+
    |                                                                  |
    |   laungageItem(INDEX, LEVEL);                                    |
    |                                                                  |
    +-----------------------------------------------------------------*/
};


$(document).ready(function(){

    /* Recovery section of education position */
    educationHeight = $(".principal section:nth-child(2)").outerHeight();
    educationTopPosition = $(".principal section:nth-child(2)").offset().top;
    educationBottomPosition = educationTopPosition + educationHeight;

    laungagesHeight = $(".secondary section:nth-child(3)").outerHeight();
    laungagesTopPosition = $(".secondary section:nth-child(3)").offset().top;
    laungagesBottomPosition = laungagesTopPosition + laungagesHeight;

    skillsHeight = $(".secondary section:nth-child(2)").outerHeight();
    skillsTopPosition = $(".secondary section:nth-child(2)").offset().top;
    skillsBottomPosition = skillsTopPosition + skillsHeight;

    if($.strapPoint.is('sm') || $.strapPoint.is('md') || $.strapPoint.is('lg')){

        $("header").css("margin-bottom", "50px");
        $(".principal").css("padding-right", "20px");
        $(".secondary").css("padding-left", "20px");

        header();
        education();
        skills();
        laungages();
    }
    if($.strapPoint.is('xs')){
        headerXS();
        $("body").css("padding-top", "10px")
        $("body").css("padding-left", "10px");
        $("body").css("padding-right", "10px");
        $("body").css("padding-bottom", "10px");

        $("header").css("margin-bottom", "10px");

        $(".principal section:nth-child(3)").css("margin-bottom", "10px");
    } 

});


$.strapPoint.change(function (direction) {
    if($.strapPoint.is('sm') || $.strapPoint.is('md') || $.strapPoint.is('lg')){
        location.reload();
    }
    if($.strapPoint.is('xs')){
        location.reload();
    }
});


$(document).scroll(function () {

    if($.strapPoint.is('xs')){

        var windowHeight = $(window).height();
        var windowTopPosition = $(window).scrollTop();
        var windowBottomPosition = windowTopPosition + windowHeight;

        //formules:
        x = (windowBottomPosition + windowTopPosition) / 2;
        y = parseInt((windowBottomPosition - windowTopPosition) * 0.35 + windowTopPosition);


        if (y > educationTopPosition && educationLaunch == false) {
            educationLaunch = true;
            educationXS();
        }
        if (y > skillsTopPosition && skillsLaunch == false){
            skillsLaunch = true;
            skills();
        }
        if (x > laungagesTopPosition && laungagesLaunch == false){
            laungagesLaunch = true;
            laungages();
        }

    }
});