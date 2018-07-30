$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.play-btn').click(function () {
    var iframe_url = "https://www.youtube.com/embed/" + $(this).parent().data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
    var iframe_height = $(this).parent().find('.preview').height();
    var iframe_width = $(this).parent().find('.preview').width();
    $(this).hide();
    $(this).parent().find('.preview').hide();
    $(this).parent().append('<iframe src="' + iframe_url + '?rel=0&amp;controls=0&amp;showinfo=0"  width="' + iframe_width + '" height="' + iframe_height + '"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
  });

});