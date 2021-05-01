$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  $(window).scroll(function () {
    if (this.scrollY < 30) $('.scroll-up-btn').addClass('vanished');
    else $('.scroll-up-btn').removeClass('vanished');
  });
  //scroll up botton
  $('.scroll-up-btn').click(function () {
    $(window).scrollTop(0);
  });

  //text animation
  var typed = new Typed('.animated-text-1', {
    strings: ['Backend Developer', 'Devops specialist', 'Penetration Tester'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
  var typed = new Typed('.animated-text-2', {
    strings: ['Backend Developer', 'Devops specialist', 'Penetration Tester'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
});
