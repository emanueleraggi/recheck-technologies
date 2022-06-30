document.querySelector('.nav__btn').addEventListener('click', showNav);

function showNav() {
 document.querySelector('.nav__links').classList.toggle('show__links')
}

// Smooth scroll
// $('.nav a').click(function(link) {
//     link.preventDefault();

//     let target = $(this).attr('href');

//     $('html, body').stop().animate({
//         scrollTop: $(target).offset().top - 25
//     }, 3000);
// })

// sticky navbar less padding
$(window).scroll(function() {
    let position = $(this).scrollTop();
    
    if(position >= 718) {
        $('.nav__btn').addClass('navbar-background');
        $('.nav__btn').addClass('fixed-top');
    }
    else{
        $('.nav__btn').removeClass('navbar-background');
        $('.nav__btn').removeClass('fixed-top');
    }
})
