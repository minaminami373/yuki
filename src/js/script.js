jQuery(function ($) {
  // ハンバーガーメニュー
  $(function () {
      $(".js-hamburger").click(function () {
          $(this).toggleClass("is-open");
          if ($(this).hasClass("is-open")) {
              openDrawer();
          } else {
              closeDrawer();
          }
      });

      // backgroundまたはページ内リンクをクリックで閉じる
      $(".js-drawer a[href]").on("click", function () {
          closeDrawer();
      });

      // resizeイベント
      $(window).on('resize', function() {
          if (window.matchMedia("(min-width: 768px)").matches) {
              closeDrawer();
          }
      });
  });

  function openDrawer() {
      $(".js-drawer").addClass("is-open");
      $(".js-hamburger").addClass("is-open");
  }

  function closeDrawer() {
      $(".js-drawer").removeClass("is-open");
      $(".js-hamburger").removeClass("is-open");
  }

   // MV過ぎたらヘッダー背景色変化
   $(window).on("scroll", function () {
    mvHeight = $(".js-mv").height();
    if ($(window).scrollTop() > mvHeight) {
        $(".js-header").addClass("is-scroll");
        $(".js-header .header__nav-item a").addClass("is-scroll");
    } else {
        $(".js-header").removeClass("is-scroll");
        $(".js-header .header__nav-item a").removeClass("is-scroll");
    }
    });
});

jQuery(function ($) {
  $('.js-faq-question').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('is-open');
  });
});
