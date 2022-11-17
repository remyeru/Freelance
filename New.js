goTO = (keyword) => {
    const identifier = '0' + keyword;
    const protfolio = document.querySelector(indetifier);
    protfolio.scrollIntoView({behavior: 'smooth'});
}
window.addEventListener('DOMContentLoaded', event => {
// nav bar function//
var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }

};
// nav shrinker
navbarShrink();
// 
document.addEventListener('scroll', navbarShrink);
// 
const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new navigation.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };
    // 
const navbarToggler = document.body.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
);
responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
            }
         });
    });
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
// $(function(){

// $('#sinopsi').click(function(){  // Activates the popups
//   $('#popup1').fadeIn('fast')
// });

// $('#fitxa').click(function(){
//   $('#popup2').fadeIn('fast')
// });

// $('#sinopsi').click(function(){
//   $('#popup3').fadeIn('fast')
// });

/* //Note that if your HTML is properly nested you could easily have this command execute your popups instead of the three above

$('.openlink').click(function(){
  $(this)
    .find('.popup')  // finds your nested popup div
    .fadeIn('fast')
  ;
});

*/

// $('.closex').click(function(){  // closes the popup, when X is clicked
//   $('.popup').fadeOut('fast');
// });

// $('.popup').keypress(function(e){  // close popup via ESC key.
//   if(e.keyCode==27){
//     $(this).fadeOut('fast');
//   }
// }); 

// $('.popup').css({opacity: "0.7"}); // copies over the transparency 

// });
$('.first-popup-link, .second-popup-link, .third-popup-link').magnificPopup({
    closeBtnInside:true
});