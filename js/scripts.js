$(function() {
  $(".collapse").on("show.bs.collapse", function() {
    $(this).prev().find(".glyphicon-plus-sign").removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign")
  }), $(".collapse").on("hide.bs.collapse", function() {
    $(this).prev().find(".glyphicon-minus-sign").removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign")
  }), $("#collapse1").collapse({
    show: !0
  }),
  $("#uregister").validator({
    feedback: {
      success: "glyphicon-ok-sign",
      error: "glyphicon-remove-sign"
    }
  }),  new WOW({
    offset: 50
  }).init(), $("body").on("click", 'a[href^="#u"]', function(s) {
    $("html,body").stop().animate({
      scrollTop: $(this.hash).offset().top - 100
    }, 1e3), s.preventDefault()
  });
  $('.plan').select2({
    minimumResultsForSearch: Infinity
  });
});
