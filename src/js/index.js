function generateTypeformLinks() {
  const allParams = window.location.search;
  if (allParams.length === 0) return;

  const params = allParams.split('&');

  const paramsSplit = params.map((param) => {
    return param.split('=');
  });

  const linkSource = paramsSplit[0][1];
  const linkMedium = paramsSplit[1][1];

  const links = document.querySelectorAll('.square');
  links.forEach((link) => {
    const [linkBase, linkParams] = link.getAttribute('href').split('#');

    const newLinkParams = `origem=${linkSource}&target=${linkMedium}`;
    const newLinkCompleted = `${linkBase}#${newLinkParams}`;

    link.setAttribute('href', newLinkCompleted);
  });
}

//https://mandarin.com.br/mandabem?utm_source=facebook&utm_medium=ads&utm_campaign=ad1
//?utm_source=facebook&utm_medium=ads&utm_campaign=ad1
//[utm_source=facebook, utm_medium=ads, utm_campaign=ad1] ? e &
//[[utm_source, facebook], [utm_medium, ads], [utm_campaign, ad1]] =

window.addEventListener('load', generateTypeformLinks);

function changeMainPhoto(img) {
  const mainPhoto = document.querySelector('#main-photo');
  mainPhoto.src = `./src/img/${img}`;
}

// Collapse
function start() {
  const detailOne = document.querySelectorAll('.collapse');
  let img = document.querySelectorAll(`.title img`);

  detailOne.forEach((index, item) => {
    index.addEventListener('click', () => {
      console.log(img[item]);
      let atributo = index.getAttribute('open');
      if (atributo === null) {
        img[item].src = './src/img/arrow_up_orange.svg';
      } else {
        img[item].src = './src/img/arrow_down_black.svg';
      }
    });
  });
}

start();

$('.navbar-toggler').click(function () {
  $('.navbar-toggler-icon').toggleClass('invisible');
  $('.close-navbar').toggleClass('invisible');
  $('.nav-bar .items').toggleClass('none');
  $('.menu-mobile').toggleClass('none');
});

const menuItems = document.querySelectorAll('.navbar-nav li a');

//carousel
let counterIndex = 1;
function carousel(direction) {
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const carouselContainer = document.querySelector('.carousel-container');
  const allDots = document.querySelectorAll('.dots');
  const allDotsArray = Array.from(allDots);

  console.log(counterIndex);

  const divWidth = carouselContainer.offsetWidth;
  const wrapperDivWidth = carouselWrapper.offsetWidth;
  const leftNumber =
    carouselWrapper.style.left.length === 0
      ? 0
      : Number(carouselWrapper.style.left.replace('px', ''));

  if (direction === 'next') {
    carouselWrapper.style.left = `${
      leftNumber - divWidth <= -wrapperDivWidth ? 0 : leftNumber - divWidth
    }px`;
    counterIndex = counterIndex + 1 > 5 ? 1 : counterIndex + 1;
  }

  if (direction === 'prev') {
    carouselWrapper.style.left = `${
      leftNumber + divWidth > 0
        ? -1 * (wrapperDivWidth - divWidth)
        : leftNumber + divWidth
    }px`;
    counterIndex = counterIndex - 1 <= 0 ? 5 : counterIndex - 1;
  }

  allDots.forEach((dot) => {
    if (counterIndex === Number(dot.dataset.index) + 1) {
      dot.classList.toggle('active');
    } else {
      dot.classList = 'dots';
    }
  });
}

function setCarouselHeight() {
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const carousel = document.querySelector('.carousel');
  const wrapperDivHeight = carouselWrapper.offsetHeight;

  carousel.style.height = `${wrapperDivHeight}px`;
}

window.addEventListener('resize', setCarouselHeight);
window.addEventListener('load', setCarouselHeight);

// VIDEO CASE
let video = document.querySelector('video');
let playOrPause = document.querySelector('.playOrPause');
let iconButtonPlayPause = document.querySelector('.playOrPause img');

let fullscreen = document.querySelector('.fullscreen');

const openVideo = document.querySelector('.openVideo');
const backgroundVideo = document.querySelector('.background-video');
const closeVideo = document.querySelector('.closeVideo');

fullscreen.addEventListener('click', () => {
  const iframe = document.querySelector('iframe');
  let fullscreenImg = document.querySelector('.fullscreen img');

  iframe.requestFullscreen();
  iframe.webkitRequestFullscreen();
  iframe.mozRequestFullScreen();
  iframe.msRequestFullscreen();
});

closeVideo.addEventListener('click', () => {
  backgroundVideo.classList.toggle('d-none');
  document.querySelector('.section-video').classList.toggle('d-none');

  const iframe = document.querySelector('iframe').src;
  const newsrc = iframe.replace('&autoplay=1', '');
  document.querySelector('iframe').src = newsrc;
});

openVideo.addEventListener('click', () => {
  backgroundVideo.classList.toggle('d-none');
  document.querySelector('.section-video').classList.toggle('d-none');
});

