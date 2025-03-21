// 공통 슬라이드 초기화 함수
function initSlider({
  triggerElement,containerElement,tabButtons,tabInner,tabWrap,slides,confettiEffect = null}) 
  {
  const defaultIndex = 3;

  window.addEventListener('DOMContentLoaded', () => {
    setActiveTab(defaultIndex);
    centerTab(defaultIndex);
    showSlide(defaultIndex);
  });

  triggerElement.addEventListener('click', () => {
    if (confettiEffect) confettiEffect();
    triggerElement.style.display = 'none';
    containerElement.classList.remove('hidden');
    containerElement.classList.add('show');
    setActiveTab(defaultIndex);
    centerTab(defaultIndex);
    showSlide(defaultIndex);
  });

  tabButtons.forEach((btn) => {
    const data_index = parseInt(btn.dataset.index);
    if (data_index < 3) return;
    btn.addEventListener('click', () => {
      setActiveTab(data_index);
      centerTab(data_index);
      showSlide(data_index);
    });
  });

  function setActiveTab(index) {
    tabButtons.forEach(b => b.classList.remove('active'));
    const target = [...tabButtons].find(btn => parseInt(btn.dataset.index) === index);
    if (target) target.classList.add('active');
  }

  function showSlide(data_index) {
    const slide_idx = data_index - 3;
    slides.forEach((item, idx) => {
      item.style.display = idx === slide_idx ? 'flex' : 'none';
    });
  }

  function centerTab(index) {
    const btn = [...tabButtons].find(b => parseInt(b.dataset.index) === index);
    if (!btn) return;
    const btn_center = btn.offsetLeft + btn.offsetWidth / 2;
    const wrap_center = tabWrap.offsetWidth / 2;
    let moveX = btn_center - wrap_center;
    const maxScroll = tabInner.scrollWidth - tabWrap.offsetWidth;
    moveX = Math.max(0, Math.min(moveX, maxScroll));
    tabInner.style.transform = `translateX(-${moveX}px)`;
  }
}

const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shootStars() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star'],
    spread: 720,  
    decay: 0.88,    
    startVelocity: 40  
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle'],
    spread: 720,       
    startVelocity: 40
  });
}

function startConfettiRain(durationSec = 5) {
  const duration = durationSec * 1000;
  const animationEnd = Date.now() + duration;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }
    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    });
  }, 250);
}

initSlider({
  triggerElement: document.querySelector('.r_box'),
  containerElement: document.querySelector('.slider_container'),
  tabButtons: document.querySelectorAll('.s_tab_btn'),
  tabInner: document.querySelector('.s_tab_inner'),
  tabWrap: document.querySelector('.s_t_wrap'),
  slides: document.querySelectorAll('.slide_item'),
  confettiEffect: () => startConfettiRain(5)
});

initSlider({
  triggerElement: document.querySelector('.wave_wrap'),
  containerElement: document.querySelector('.up_container'),
  tabButtons: document.querySelectorAll('.up_tab_btn'),
  tabInner: document.querySelector('.up_tab_inner'),
  tabWrap: document.querySelector('.up_t_wrap'),
  slides: document.querySelectorAll('.up_item'),
  confettiEffect: () => {
    setTimeout(shootStars, 0);
    setTimeout(shootStars, 100);
    setTimeout(shootStars, 200);
  }
});
