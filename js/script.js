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

$("a[href='#bottom']").click(function () {
  $("html, body").animate({
      scrollTop: $(document).height(),
    },
    2000
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

$(document).ready(function () {
  $("#burger").click(function () {
    $(
      "nav, .menu, .menuCover, .firstLine, .secondLine, .thirdLine"
    ).toggleClass("active");
  });
});

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(document).ready(function () {
  $("#datepicker")
    .datepicker({
      numberOfMonth: 1,
      changeYear: true,
      changeMonth: true,
      showWeek: true,
      showOtherMonths: true,
    })
    .css({
      color: "green",
    });
});