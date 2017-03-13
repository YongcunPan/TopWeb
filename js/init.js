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

  $(".slideBoxList").slide({
    startFun:function(i,c){
        $(".slideBoxList .bottomImg li").eq(i).addClass("active").siblings().removeClass("active");
    }
  });
  
  $(".slideParBox .slideChiBox").slide({ mainCell:"ul",vis:4,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop"});
  $(".slideParBox").slide({titCell:".parHd li",mainCell:".parBd"});

  $(".iListModule li a").mouseenter(function(){
    $(this).parent().addClass("on").siblings().removeClass("on");;
  });

}
