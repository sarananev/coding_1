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
  hamburgerMenu.classList.remove('active');
  navi.classList.remove('active');
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

// チェックボタンを複数選ばないようにする
window.addEventListener('DOMContentLoaded', () => {
  new SingleCheck();
})

 class SingleCheck {
  constructor(scope) {
    this.DOM = {};
    this.DOM.scope = scope ? scope : document;
    this.DOM.targets = this.DOM.scope.querySelectorAll(".checkbox");
    this.#addEvent();
  }

  #singleSelect(el) {
    const name = el.name;
    const state = el.checked;
    const $sameNameEls = this.DOM.scope.querySelectorAll(`[name="${name}"]`);

    $sameNameEls.forEach(el => {
      el.checked = false;
    })

    if(state) {
      el.checked = state;
    }
  }

  #addEvent() {
    const that = this;

    this.DOM.targets.forEach(target => {
      target.addEventListener('click', (e) => {
        const el = e.currentTarget;
        that.#singleSelect(el);
      })
    })
  }
}
