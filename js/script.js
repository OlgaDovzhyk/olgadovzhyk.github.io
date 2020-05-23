/* ............... Header Toggle Cover ................. */

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll == 0) {
      $(".wrapper").css({
        backgroundColor: "transparent",
      });
    } else {
      $(".wrapper").css({
        backgroundColor: "rgba(185, 169, 92, 0.8",
      });
    }
  });
});

/* ............... // Header Toggle Cover .............. */

/* ................. Button Scroll ..................... */

$("a[href='#bottom']").click(function () {
  $("html, body").animate({
      scrollTop: $(document).height(),
    },
    2000
  );
});

$("a[href='#Reservations']").click(function () {
  $("body, html").animate({
      scrollTop: 3410,
    },
    800
  );
});

$(".sbtn").click(function () {
  $("body, html").animate({
      scrollTop: 2015,
    },
    800
  );
});



$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 655) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("a[href='#toTop']").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      2000
    );
  });
});

/* .............. .. Button Scroll ..................... */

/* ................. Menu Toggle .................... */

$(document).ready(function () {
  $("#burger").click(function () {
    $(
      "nav, .menu, .menuCover, .firstLine, .secondLine, .thirdLine"
    ).toggleClass("active");
  });
});

/* .............. // Menu Toggle ................. */

/*  ................................... Calendar .....................................*/

$(document).ready(function () {
  $("#datepicker")
    .datepicker({
      numberOfMonth: 1,
      changeYear: true,
      changeMonth: true,
      showWeek: true,
      showOtherMonths: true,
      minDate: new Date(2020, 5, 21),
      maxDate: new Date(2021, 0, 1)
    })
    .css({
      color: "green",
    });
});

/*  ................................ // Calendar .....................................*/


$(document).ready(function () {

  $(".rightSide .dish").click(function () {
    $(this).animate({
      top: '-102%'
    }, "slow");
    $(".sweet").animate({
      top: '0%'
    }, 0);
  });
  $(".rightSide .sweet").click(function () {
    $(this).animate({
      top: '-102%'
    }, "slow");
    $(".fish").animate({
      top: '0%'
    }, 0);
  });
  $(".rightSide .fish").click(function () {
    $(".fish").animate({
      top: '-102%'
    }, "slow");
    $(".dish").animate({
      top: '0%'
    }, "slow");
  });
});