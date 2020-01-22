  // Mobile Navigation
  $('.sidenav-toggle').on('click', function () {
      var $sidenav, $this;
      $this = $(this);
      $sidenav = $('.ct-sidenav');
      if ($this.hasClass('active')) {
          $this.removeClass('active');
          return $sidenav.removeClass('active');
      } else {
          $this.addClass('active');
          return $sidenav.addClass('active');
      }
  });
  $('#sidenav-toggle').on('click', function () {
      var $sidenav, $this;
      $this = $(this);
      $sidenav = $('.ct-sidenav');
      if ($this.hasClass('open')) {
          $this.removeClass('open');
          return $sidenav.removeClass('open');
      } else {
          $this.addClass('open');
          return $sidenav.addClass('open');
      }
  });
  $('.ct-sidenav').find('button.close').on('click', function () {
      $(this).parent().removeClass('open');
      return $('#sidenav-toggle').removeClass('open');
  });

  /*on mobile click*/

var acc = document.getElementsByClassName("accordion-mini");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

  /*navbar on scroll*/
  var navbar = $('nav');
  window.onscroll = function () {
      if (window.pageYOffset > 132) {
          $('nav').addClass('scrolled')

      } else {
          $('nav').removeClass('scrolled')
      }
  };

  /*Homepage country accordion*/
  $('#my-accordion').gridAccordion({
      width: 600,
      height: 500,
      responsive: 'true',
      responsiveMode: 'auto',
      columns: 3,
      rows: 3,
      mouseWheel: false,
      openPanelDuration: 400,
      closePanelDuration: 300,
      mouseDelay: 0,
      autoplay: false
  });

  /*number-section*/
  window.onscroll = function () {
      if (window.pageYOffset > 1000) {
          $('.counter').each(function () {
              var $this = $(this),
                  countTo = $this.attr('data-count');

              $({
                  countNum: $this.text()
              }).animate({
                  countNum: countTo
              }, {
                  duration: 9000,
                  easing: 'linear',
                  step: function () {
                      $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                      $this.text(this.countNum);
                      //alert('finished');
                  }
              });
          });

      } else {

      }
  };



  /*footer-date*/
  $('#date').text(new Date().getFullYear());
