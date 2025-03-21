window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.logo_wrap').classList.add('show');
});

const logo = document.querySelector('.logo');
const questionBox = document.querySelector('.questionBox');

logo.addEventListener('click', () => {
  logo.style.opacity = '0';
  logo.style.transform = 'scale(0.8)';
  setTimeout(() => {
    logo.style.display = 'none';
    questionBox.style.display = 'block';
    questionBox.style.opacity = '1';
  }, 500);
});

const yes_btn = document.querySelector('.yes_btn');
const no_Btn = document.querySelector('.no_Btn');
const q_b1 = document.querySelectorAll('.q_b')[0]; 
const q_b2 = document.querySelectorAll('.q_b')[1];

const b1_yes_btn = document.querySelector('.b1_yes_btn');
const b1_no_btn = document.querySelector('.b1_no_btn');
const b2_yes_btn = document.querySelector('.b2_yes_btn');
const d_no_btn = document.querySelector('.d_no_btn');

function addHoverEffect(imgElement, normalSrc, hoverSrc, cursorSrc) {
  imgElement.addEventListener('mouseover', () => {
    imgElement.src = hoverSrc;
    imgElement.style.cursor = `url(${cursorSrc}), pointer`;
  });
  imgElement.addEventListener('mouseout', () => {
    imgElement.src = normalSrc;
    imgElement.style.cursor = 'pointer';
  });
}


addHoverEffect(yes_btn, 'svg/yes_bt.svg', 'svg/yes_bt_h.svg', 'svg/yes_pointer.svg');
addHoverEffect(no_Btn, 'svg/no_bt.svg', 'svg/no_bt_h.svg', 'svg/no_pointer.svg');


addHoverEffect(b1_yes_btn, 'svg/yes_bt.svg', 'svg/yes_bt_h.svg', 'svg/yes_pointer.svg');
addHoverEffect(b1_no_btn, 'svg/no_bt.svg', 'svg/no_bt_h.svg', 'svg/no_pointer.svg');


addHoverEffect(b2_yes_btn, 'svg/yes_bt.svg', 'svg/yes_bt_h.svg', 'svg/yes_pointer.svg');



yes_btn.addEventListener('click', () => {
  location.href = 'main.html';
});


no_Btn.addEventListener('click', () => {
  q_b1.style.display = 'flex';
});


b1_yes_btn.addEventListener('click', () => {
  q_b1.style.display = 'none';
});


b1_no_btn.addEventListener('click', () => {
  q_b1.style.display = 'none';
  q_b2.style.display = 'flex';
});


b2_yes_btn.addEventListener('click', () => {
  location.href = 'main.html';
});
