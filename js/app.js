

//レスポンシブ
// SP
$(function(){
  if (window.matchMedia('(max-width:640px)').matches) {
    $('#remove').removeClass('header-bg');

    // topscrpll
$(document).ready(function(){
  $("#topBtn").hide();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 150) {
      $("#topBtn").fadeIn("fast");
    } else {
      $("#topBtn").fadeOut("fast");
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if ( scrollHeight - scrollPosition  <= footHeight ) {
      $("#topBtn").css({
        "position":"absolute",
        "bottom": footHeight + 15
        });
    } else {
      $("#topBtn").css({
        "position":"fixed",
        "bottom": "20px"
      });
    }
  });
  $('#topBtn').click(function () {
    $('body,html').animate({
    scrollTop: 0
    }, 600);
    return false;
  });
});



// PC
  } else if (window.matchMedia('(min-width:641px)').matches) {
    $('#remove').addClass('header-bg');

    // topscrpll
$(document).ready(function(){
  $("#topBtn").hide();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 150) {
      $("#topBtn").fadeIn("fast");
    } else {
      $("#topBtn").fadeOut("fast");
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if ( scrollHeight - scrollPosition  <= footHeight ) {
      $("#topBtn").css({
        "position":"absolute",
        "bottom": footHeight + 42
        });
    } else {
      $("#topBtn").css({
        "position":"fixed",
        "bottom": "20px"
      });
    }
  });
  $('#topBtn').click(function () {
    $('body,html').animate({
    scrollTop: 0
    }, 600);
    return false;
  });
});


}});
// レスポンシブここまで

// hamburger
$(function() {
  $('#drower-btn').on('click',function(){
    $(this).toggleClass('on');
    $(".drower").toggleClass('on');
  });
  $('.drower a').on('click', function(){
      $('#drower-btn').click();
    });
});

// ページ内リンク
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// swiper
var swiper = new Swiper('.swiper-container', {
  loop: true,
    autoplay: {
    disableOnInteraction: true
  },
  delay: 5000,
  speed: 1000,
  slidesPerView: 'auto',
  centeredSlides : true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
