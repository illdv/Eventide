$(function() {
  $('.collapse').on('show.bs.collapse', function() {
    $(this).prev().find('.glyphicon-plus-sign').removeClass('glyphicon-plus-sign').addClass('glyphicon-minus-sign')
  });

  $('.collapse').on('hide.bs.collapse', function() {
    $(this).prev().find('.glyphicon-minus-sign').removeClass('glyphicon-minus-sign').addClass('glyphicon-plus-sign')
  });

	$('#collapse1').collapse({
  show: true
});

$('#register').validator({
  feedback: {
    success: 'glyphicon-ok-sign',
    error: 'glyphicon-remove-sign'
  }
});

$('.plan').select2({
  minimumResultsForSearch: Infinity
});

new WOW({
  offset: 100,
}).init();

$("body").on('click', 'a[href^="#u"]', function(e){
var fixed_offset = 100;
$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
e.preventDefault();
});
$(document).ready(function() {
    $("head").append("<link rel='stylesheet' href='css/select2.min.css' />");
})
});
