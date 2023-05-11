$(document).ready(function () {
    $(".fe-btn").click(function (e) {
      e.preventDefault();
      $(".front-end").removeClass("hidden");
      $(".back-end").addClass("hidden");
      $(".others").addClass("hidden");
    });
  
    $(".be-btn").click(function (e) {
      e.preventDefault();
      $(".front-end").addClass("hidden");
      $(".back-end").removeClass("hidden");
      $(".others").addClass("hidden");
    });
  
    $(".os-btn").click(function (e) {
      e.preventDefault();
      $(".front-end").addClass("hidden");
      $(".back-end").addClass("hidden");
      $(".others").removeClass("hidden");
    });

    $('.material-icons').click(function (e) { 
        e.preventDefault();
        $('nav>.menu').toggleClass('show');
    });
  });  