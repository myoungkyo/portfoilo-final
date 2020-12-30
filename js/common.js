$(function(){
  $("nav ul li a,.back_to_top a,a.button,.footer_top a").click(function(e){
    var thisElem = $(this.hash);
    $("html,body").stop();
    $("html,body").animate({scrollTop : thisElem.offset().top},1500);
    return false;
  });

  $(window).scroll(function(){
    var wHeight = $(this).height();
    var thisScrollTop = $(this).scrollTop();
    if(thisScrollTop > 0){
      $(".back_to_top").fadeIn("slow");
    }else{
      $(".back_to_top").fadeOut("slow");
    }

    var navBar = $("nav");
    if( thisScrollTop > wHeight - 70){
      navBar.addClass("fixed");
    }else{
      navBar.removeClass("fixed");
    }
  });

  var wHeight = $(window).height();
  $(window).scroll(function(){
    var thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      var thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop+150 && thisScrollTop <= thisOffset.top+wHeight ){
        $(this).addClass("active");
      }
    });
  });
});
