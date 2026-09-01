// Header shadow
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); window.scrollTo({ top: t.offsetTop - header.offsetHeight - 12, behavior: 'smooth' }); }
  });
});

// Float CTA
const floatCta = document.getElementById('float-cta');
const heroCta = document.getElementById('hero-cta');
if (floatCta && heroCta) {
  new IntersectionObserver(([e]) => {
    floatCta.classList.toggle('visible', !e.isIntersecting);
  }, { threshold: 0 }).observe(heroCta);
}

// Carousel
const track = document.getElementById('carousel-track');
const dotsEl = document.getElementById('carousel-dots');
if (track && dotsEl) {
  const slides = track.querySelectorAll('.carousel-slide');
  const total = slides.length;
  let cur = 0, timer;

  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => go(i));
    dotsEl.appendChild(d);
  });

  function go(i) {
    cur = ((i % total) + total) % total;
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    dotsEl.querySelectorAll('.carousel-dot').forEach((d, j) => d.classList.toggle('active', j === cur));
  }

  function start() { timer = setInterval(() => go(cur + 1), 4000); }
  function stop() { clearInterval(timer); }
  start();

  track.addEventListener('mouseenter', stop);
  track.addEventListener('mouseleave', start);

  let sx = 0;
  track.addEventListener('touchstart', e => { sx = e.touches[0].clientX; stop(); }, { passive: true });
  track.addEventListener('touchend', e => {
    const d = sx - e.changedTouches[0].clientX;
    if (Math.abs(d) > 40) go(d > 0 ? cur + 1 : cur - 1);
    start();
  }, { passive: true });
}

// Scroll animate
const aio = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; aio.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.benefit-card, .plan-card, .step, .profile-card').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .45s ease, transform .45s ease';
  aio.observe(el);
});
