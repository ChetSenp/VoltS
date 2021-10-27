/* $(docunent).ready(function(){
  $('.main_slider').slick({
      vertical: true,
      verticalSwiping: true,
      dots:true,
      arrows: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed:4000,
      infinity:true
  });
}); */

/* 
$('.main_slider').slick({

}); */

var numb = ['1','2','3']

$(document).ready(function(){
  $('.main_slider').slick({
    dots:true,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a>'+numb[i]+'</a>';
              },
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed:4000,
    infinity:true,
    vertical: true,
    verticalSwiping: true
  });
});


/* 
$('.main_slider').slick({
  vertical: true,
  verticalSwiping: true,
  dots:true,
  arrows: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed:4000,
  infinity:true,
}); */