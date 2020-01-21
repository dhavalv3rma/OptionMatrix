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
