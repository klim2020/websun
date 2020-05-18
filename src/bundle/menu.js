$(window).on('load',function () {


//jQuery to collapse the navbar on scroll
   $(window).scroll(function () {
        console.log( $(this).scrollTop() );
        if ( $(this).scrollTop() > 150  ){

            $(".navbar").addClass("scrolled").addClass("bounceInDown");

        } else if($(this).scrollTop() <= 100) {

            $(".navbar").removeClass("scrolled");

        }

    });


    $('.mobile-menu').slicknav({
        prependTo: '.menuplaceholder',
        parentTag: 'div',
        allowParentLinks: true,
        duplicate: false,
        label: '',
        closedSymbol: '<i class="fa fa-chevron-right"></i>',
        openedSymbol: '<i class="fa fa-chevron-down"></i>',
    });
});
