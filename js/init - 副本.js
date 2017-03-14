$(function(){
  initauto();
});

function initauto() {

  $(".menu li,.labels label").each(function(){
    $(this).click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

  $(".slideBox").slide({autoPlay:true});

  // 背景图片
  var  bgImg=["url(./pages/web/images/icon_01.png) no-repeat center center","url(./pages/web/images/icon_02.png) no-repeat center center","url(./pages/web/images/icon_03.png) no-repeat center center","url(./pages/web/images/icon_04.png) no-repeat center center","url(./pages/web/images/icon_05.png) no-repeat center center","url(./pages/web/images/icon_06.png) no-repeat center center","url(./pages/web/images/icon_07.png) no-repeat center center","url(./pages/web/images/icon_08.png) no-repeat center center"];
  var  bgImgOn=["url(./pages/web/images/icon_01-on.png) no-repeat center center","url(./pages/web/images/icon_02-on.png) no-repeat center center","url(./pages/web/images/icon_03-on.png) no-repeat center center","url(./pages/web/images/icon_04-on.png) no-repeat center center","url(./pages/web/images/icon_05-on.png) no-repeat center center","url(./pages/web/images/icon_06-on.png) no-repeat center center","url(./pages/web/images/icon_07-on.png) no-repeat center center","url(./pages/web/images/icon_08-on.png) no-repeat center center"];
  var bottomImgON=["url(./pages/web/images/icon_on.png) no-repeat center center"];
  $(".slideBoxList").slide({
    startFun:function(i,c){
      $(".slideBoxList .bottomImg li").eq(i).addClass("active").siblings().removeClass("active");
        //判断是否是IE浏览器
        if (navigator.appName === 'Microsoft Internet Explorer') { 
          //判断浏览器内核是否为Trident内核IE8.0
          if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 8.0/i)) { 
            console.info('IE8');
            $(".slideBoxList .topImg li").each(function(m) {
              $(this).css("background",bgImg[m]);
            });
            $(".slideBoxList .topImg li").eq(i).css("background",bgImgOn[i]);
            $(".slideBoxList .bottomImg li").eq(i).css("background",bottomImgON[0]).siblings().css("background","");
          }
        }
    }
  });
  
  $(".slideParBox .slideChiBox").slide({ mainCell:"ul",vis:4,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop"});
  $(".slideParBox").slide({titCell:".parHd li",mainCell:".parBd"});

  $(".iListModule li a").mouseenter(function(){
    $(this).parent().addClass("on").siblings().removeClass("on");;
  });

}
