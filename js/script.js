/*light/dark favicon*/
$(document).ready(function () {
    if (!window.matchMedia)
        return;

    var current = $('head > link[rel="icon"][media]');
    $.each(current, function (i, icon) {
        var match = window.matchMedia(icon.media);

        function swap() {
            if (match.matches) {
                current.remove();
                current = $(icon).appendTo('head');
            }
        }
        match.addListener(swap);
        swap();
    });
});

/*Navbar on scroll*/
window.onscroll = function () {
    var navbar = $('nav');
    if (window.pageYOffset > 126) {
        $('nav').addClass('scrolled')

    } else {
        $('nav').removeClass('scrolled');
        $('nav').addClass('unscrolled')
    }
};
/*Navbar on scroll Ends*/

/*Mobile Navigation*/
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
var acc = $(".accordion-mini")
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
/*Mobile Navigation Ends*/



/*footer-date*/
$('#date').text(new Date().getFullYear());
