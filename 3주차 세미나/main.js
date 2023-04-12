// DOM 활용 버전입니다.

const btn = document.querySelector('.logo_btn');
const navbarMenu = document.querySelector('.navbar_menu');
const navbarLinks = document.querySelector('.navbar_links');

btn.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  navbarLinks.classList.toggle('active');
});

// // jQuery 활용 버전입니다.
// (function ($) {
//   $(document).ready(function () {
//     $('.logo_btn').click(function () {
//       $('.navbar_menu').toggleClass('active');
//       $('.navbar_links').toggleClass('active');
//     });
//   });
// })(jQuery);
