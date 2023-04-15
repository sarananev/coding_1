// ハンバーガーメニューの実装
const hamburgerMenu = document.querySelector('.hamberger-memu');
const navi = document.getElementById('navi');
const main_title = document.querySelector('.main-title');



hamburgerMenu.addEventListener('click', () =>{
  hamburgerMenu.classList.toggle('active');
  navi.classList.toggle('active');
  main_title.classList.toggle('active');
});

// maskエリアをクリックした時にメニューを閉じる
navi.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navi.classList.toggle('active');
  main_title.classList.toggle('active');
});

// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  centerdSlides: true,
  loop: true,
  loopAdditionalSlindes: 1,
  speed: 1000,
  autoplay: {
    enabled: true,
    delay: 4000,
    disableOnInteraction: false,
  },
});

// header scroll
window.addEventListener('DOMContentLoaded', () => {
  const Header = document.getElementById('header');
  const Intersect = document.querySelector('.swiper');

  const doWhenIntersect = entries => {
    Header.setAttribute('fixed', String(!entries[0].isIntersecting));
  }
  const observer = new IntersectionObserver(doWhenIntersect, {});
  observer.observe(Intersect);
});



