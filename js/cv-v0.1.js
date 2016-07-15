var x, y;
            
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

var header = function(){
    $(".img-sm-md-lg").delay(300).animate({marginLeft: '0px', opacity: '1.0'}, "slow");
    $("h1.head-title").delay(600).animate({paddingLeft: '200px', opacity: '1.0'}, "slow");
    $("#head-text-two").delay(900).animate({paddingLeft: '200px', opacity: '1.0'}, "slow");
};
var headerXS = function(){
    $("#img-profile-sm").delay(300).animate({opacity: '1.0'}, "slow");
    $("#head-text-one-sm").delay(600).animate({opacity: '1.0'}, "slow");
    $("#head-text-two-sm").delay(900).animate({opacity: '1.0'}, "slow");
};
var education = function(){
    $("#time-line").animate({height: '100%'}, 750);
    $("#number-circle-2004").fadeIn("slow");
    $("#number-circle-2006").delay(500).fadeIn("slow");
    $("#talkbubble-2004").animate({marginLeft: '45px', opacity: '1.0'}, "slow");
    $("#talkbubble-2006").delay(250).animate({marginLeft: '45px', opacity: '1.0'}, "slow");
};
var educationXS = function(){
    $("#time-line-xs").animate({height: '100%'}, 800);
    $("#number-circle-xs-2004").fadeIn("slow");
    $("#number-circle-xs-2006").delay(400).fadeIn("slow");
    $("#row-2004-xs").delay(800).animate({backgroundPosition: "0%"}, 400);
    $("#row-2006-xs").delay(1200).animate({backgroundPosition: "0%"}, 400);
    $('#educ-bloc-xs-2004').delay(1200).animate({opacity: '1.0'}, "slow");
    $('#educ-bloc-xs-2006').delay(1600).animate({opacity: '1.0'}, "slow");
};
var skills = function(){
    $("#pHTML").animate({width: '70%'}, 500);
    $("#pCSS").animate({width: '40%'}, 750);
    $("#pJS").animate({width: '20%'}, 1000);
};
var resetSkills = function(){
    $("#pHTML").css("width", "0%");
    $("#pCSS").css("width", "0%");
    $("#pJS").css("width", "0%");
};
var laungages = function(){
    $("#lau-en-cer-one").animate({backgroundColor: '#27ae60'}, 500);
    $("#lau-en-cer-two").delay(100).animate({backgroundColor: '#27ae60'}, 500);
    
    $("#lau-fr-cer-one").delay(200).animate({backgroundColor: '#27ae60'}, 500);
    $("#lau-fr-cer-two").delay(300).animate({backgroundColor: '#27ae60'}, 500);
    $("#lau-fr-cer-three").delay(400).animate({backgroundColor: '#27ae60'}, 500);

    $("#lau-de-cer-one").delay(500).animate({backgroundColor: '#27ae60'}, 500);
    
    $("#lau-ar-cer-one").delay(600).animate({backgroundColor: '#27ae60'}, 500);
    $("#lau-ar-cer-two").delay(700).animate({backgroundColor: '#27ae60'}, 500);
    $("#lau-ar-cer-three").delay(800).animate({backgroundColor: '#27ae60'}, 500);
    $("#lau-ar-cer-four").delay(900).animate({backgroundColor: '#27ae60'}, 500);
};
            
            $(document).ready(function(){
                
                educationHeight = $("#education").outerHeight();
                educationTopPosition = $("#education").offset().top;
                educationBottomPosition = educationTopPosition + educationHeight;
                
                laungagesHeight = $("#laungages").outerHeight();
                laungagesTopPosition = $("#laungages").offset().top;
                laungagesBottomPosition = laungagesTopPosition + laungagesHeight;
                
                skillsHeight = $("#skills").outerHeight();
                skillsTopPosition = $("#skills").offset().top;
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
                    
                    $("#experiences").css("margin-bottom", "10px");
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