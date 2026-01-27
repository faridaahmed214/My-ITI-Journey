$(document).ready(function () {
  $("#btn-about").click(function () {
    $(".content-section").hide();
    $("#about-section").fadeIn();
    $("#services-menu").slideUp();
    $(".nav-btn").removeClass("active-btn");
    $(this).addClass("active-btn");
  });
  $("#btn-gallery").click(function () {
    $(".content-section").hide();
    $("#gallery-section").fadeIn();
    $("#services-menu").slideUp();
    $(".nav-btn").removeClass("active-btn");
    $(this).addClass("active-btn");
  });

  $("#btn-services").click(function () {
    $(".nav-btn").removeClass("active-btn");
    $(this).addClass("active-btn");
    $(".content-section").hide();
    $("#services-menu").slideToggle("slow");
  });
  $("#btn-complain").click(function () {
    $(".content-section").hide();
    $("#complain-section").fadeIn();
    $("#services-menu").slideUp();
    $(".nav-btn").removeClass("active-btn");
    $(this).addClass("active-btn");
  });
  $("#next-img").click(function () {
    var imgCount = $("#img-count").text();
    if (imgCount == 4) {
      imgCount = 0;
    }
    $("#main-image").attr("src", "img" + ++imgCount + ".jpg");
    $("#img-count").text(imgCount);
  });
  $("#prev-img").click(function () {
    var imgCount = $("#img-count").text();
    if (imgCount == 1) {
      imgCount = 5;
    }
    $("#main-image").attr("src", "img" + --imgCount + ".jpg");
    $("#img-count").text(imgCount);
  });

  $("#btn-send").click(function () {
    if (
      $("#inp-name").val() == "" ||
      $("#inp-email").val() == "" ||
      $("#inp-phone").val() == "" ||
      $("#inp-msg").val() == ""
    ) {
      $("#btn-send").effect("shake", { times: 3, distance: 10 }, 100);
      if ($("#error-msg").length == 0) {
        $("#complain-section").append(
          '<div style="color: red" id="error-msg">Please fill all the fields!</div>',
        );
      }
    } else {
      $("#error-msg").remove();
      $("#form-view").hide();
      $("#summary-view").fadeIn();
      $("#out-name").text($("#inp-name").val());
      $("#out-email").text($("#inp-email").val());
      $("#out-phone").text($("#inp-phone").val());
      $("#out-msg").text($("#inp-msg").val());
    }
  });
  $("#btn-back").click(function () {
    $("#form-view").fadeIn();
    $("#summary-view").hide();
  });
});
