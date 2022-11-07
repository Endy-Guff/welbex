$(function(){

    // Липкий Header

      const onScrollHeader = () => {
        const header = $('.header__top')
    
        let prevScroll = $(window).scrollTop()
        let currentScroll
        $(window).scroll(() => {
          currentScroll = $(window).scrollTop()
          const headerHidden = () => header.hasClass('header__top-hidden')
          if (currentScroll > prevScroll && !headerHidden()) {
            header.addClass('header__top-hidden')
          }
          if (currentScroll < prevScroll && headerHidden()) {
            header.removeClass('header__top-hidden')
          }
          prevScroll = currentScroll
        })
      }
      onScrollHeader()
    
    // Скролл по меню

    $(".logo, .nav, .footer__nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 3500);
    });


    // Маска и перемещение в начало строки  

    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };
    $("#audit_tel, #calculation_tel, #individual_tel, #demonstration_tel, #access_tel").click(function(){
        $(this).setCursorPosition(3);
    }).mask("+7(999) 999-9999");

    $("#audit_tel, #calculation_tel, #individual_tel, #demonstration_tel, #access_tel").mask("+7(999) 999-9999");

    // Табы Widgets

    var tab = $('.tabs .tabs__items > div'); 
	  tab.hide().filter(':first').show();

    $('.tabs .tabs__nav-list a').click(function(){
      tab.hide(); 
      tab.filter(this.hash).show(); 
      $('.tabs .tabs__nav-list a').removeClass('tabs__nav-link--active');
      $(this).addClass('tabs__nav-link--active');
      return false;
    }).filter(':first').click();


    var tabLetters = $('.letters__tabs .letters__tabs-content > div'); 
	  tabLetters.hide().filter(':first').show();

    $('.letters__tabs .letters__tabs-nav a').click(function(){
      tabLetters.hide(); 
      tabLetters.filter(this.hash).show(); 
      $('.letters__tabs .letters__tabs-nav a').removeClass('letters__nav-link--active');
      $(this).addClass('letters__nav-link--active');
      return false;
    }).filter(':first').click();


})