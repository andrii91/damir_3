$(document).ready(function(){$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(".play-btn").click(function(){var e="https://www.youtube.com/embed/"+$(this).parent().data("id")+"?autoplay=1&autohide=1&rel=0&amp;showinfo=0",i=$(this).parent().find(".preview").height(),t=$(this).parent().find(".preview").width();$(this).hide(),$(this).parent().find(".preview").hide(),$(this).parent().append('<iframe src="'+e+'?rel=0&amp;controls=0&amp;showinfo=0"  width="'+t+'" height="'+i+'"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')})});