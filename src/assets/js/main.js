(function ($) {
  "use strict";

  $(window).on("load", function () {
    /*
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $(".onepage-nev");
    var top_offset = OnePNav.height() - 40;
    OnePNav.onePageNav({
      currentClass: "active",
      scrollOffset: top_offset,
    });

    /*Page Loader active
    ========================================================*/
    $("#preloader").fadeOut();

    // Sticky Nav
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 200) {
        $(".scrolling-navbar").addClass("top-nav-collapse");
      } else {
        $(".scrolling-navbar").removeClass("top-nav-collapse");
      }
    });

    /* slicknav mobile menu active  */
    $(".mobile-menu").slicknav({
      prependTo: ".navbar-header",
      parentTag: "liner",
      allowParentLinks: true,
      duplicate: true,
      label: "",
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>',
    });

    /* slicknav mobile menu close  */
    $("html").on("click", function () {
      if (
        !$(event.target).hasClass(".menu a") &&
        !$(event.target).hasClass("ul.slicknav_nav li a") &&
        !$(event.target).hasClass("slicknav_menutxt") &&
        !$(event.target).hasClass("slicknav_icon") &&
        !$(event.target).hasClass("slicknav_icon-bar") &&
        !$(event.target).hasClass("slicknav_btn")
      ) {
        $(".onepage-nev").slicknav("close");
      }
    });

    /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false,
    });

    wow.init();

    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $(".back-to-top").fadeIn(400);
      } else {
        $(".back-to-top").fadeOut(400);
      }
    });

    $(".back-to-top").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  });
})(jQuery);
