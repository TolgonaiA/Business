const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
// const socials = document.getElementById('socials');

if (window.innerWidth < 901) {
  btn.classList.add('btn-media');
  nav.classList.add('main-nav-media');
  // socials.classList.add('socials-media');
}


const reportWindowSize = () => {
  if (window.innerWidth < 901) {
    btn.classList.add('btn-media');
    nav.classList.add('main-nav-media');
    // socials.classList.add('socials-media');
  } else if (window.innerWidth >= 901) {
    btn.classList.remove('btn-media');
    nav.classList.remove('main-nav-media');
    // socials.classList.remove('socials-media');
  }
}

window.onresize = reportWindowSize;

window.addEventListener("resize", reportWindowSize);

btn.addEventListener('click', () => {
  if (nav.classList.contains('main-nav-media-show')) {
    nav.classList.remove('main-nav-media-show')
  } else {
    nav.classList.add('main-nav-media-show')
  }
});