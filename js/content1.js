window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hello').classList.add('show');
});

const tab_btn = document.querySelectorAll('.tab_btn');
const icon_group = document.querySelectorAll('.icon_group');

const main_tap = {
  tab1: { normal: 'svg/position.svg', hover: 'svg/position_h.svg', active: 'svg/position_h.svg' },
  tab2: { normal: 'svg/nexus.svg', hover: 'svg/nexus_h.svg', active: 'svg/nexus_h.svg' },
  tab3: { normal: 'svg/attack.svg', hover: 'svg/attack_h.svg', active: 'svg/attack_h.svg' },
  tab4: { normal: 'svg/jungle.svg', hover: 'svg/jungle_h.svg', active: 'svg/jungle_h.svg' },
};

tab_btn.forEach((tab, idx) => {
  const tab_class = tab.classList[1]; 
  tab.addEventListener('mouseover', () => {
    if (!tab.classList.contains('selected')) {
      tab.src = main_tap[tab_class].hover;
    }
  });

  tab.addEventListener('mouseout', () => {
    if (!tab.classList.contains('selected')) {
      tab.src = main_tap[tab_class].normal;
    }
  });

  tab.addEventListener('click', () => {
    icon_group.forEach(group => group.classList.remove('active'));
    icon_group[idx].classList.add('active');

    tab_btn.forEach(t => {
      const tab_class_loop = t.classList[1];
      t.classList.remove('selected');
      t.src = main_tap[tab_class_loop].normal;
    });

    tab.classList.add('selected');
    tab.src = main_tap[tab_class].active;
  });
});

const p_icons = document.querySelectorAll('.icon_wrap1 .map_icon');
const p_map = document.querySelector('.map_wrap .map_img');

p_icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    p_icons.forEach(otherIcon => {
      if (otherIcon !== icon) otherIcon.style.opacity = '0.3';
    });

    p_map.style.opacity = '0.5';

    const icon_class = icon.classList[1];
    const tt_Class = icon_class.replace('icon', 'tooltip');
    const tooltip = document.querySelector(`.${tt_Class}`);
    tooltip.classList.add('show');
  });

  icon.addEventListener('mouseout', () => {
    p_icons.forEach(otherIcon => {
      otherIcon.style.opacity = '1';
    });

    p_map.style.opacity = '1';

    const icon_class = icon.classList[1];
    const tt_Class = icon_class.replace('icon', 'tooltip');
    const tooltip = document.querySelector(`.${tt_Class}`);
    tooltip.classList.remove('show');
  });
});




const nexusIcons = document.querySelectorAll('.icon_wrap2 .map_icon');
const nexusMap = document.querySelector('.map_wrap .map_img');

nexusIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    nexusIcons.forEach(otherIcon => {
      if (otherIcon !== icon) otherIcon.style.opacity = '0.3';
    });

    nexusMap.style.opacity = '0.5';

    const icon_class = icon.classList[1];
    const tt_Class = icon_class.replace('nexus_icon', 'nexus_tooltip');
    const tooltip = document.querySelector(`.${tt_Class}`);
    tooltip.classList.add('show');
  });

  icon.addEventListener('mouseout', () => {
    nexusIcons.forEach(otherIcon => {
      otherIcon.style.opacity = '1';
    });

    nexusMap.style.opacity = '1';

    const icon_class = icon.classList[1];
    const tt_Class = icon_class.replace('nexus_icon', 'nexus_tooltip');
    const tooltip = document.querySelector(`.${tt_Class}`);
    tooltip.classList.remove('show');
  });
});




const a_icons = document.querySelectorAll('.icon_wrap3 .map_icon');
const a_map = document.querySelector('.map_wrap .map_img');

a_icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    a_icons.forEach(otherIcon => {
      if (otherIcon !== icon) otherIcon.style.opacity = '0.3';
    });

    a_map.style.opacity = '0.5';

    const icon_class = icon.classList[1];
    const tt_Class = icon_class.replace('attack_icon', 'attack_tooltip');
    const tooltip = document.querySelector(`.${tt_Class}`);
    tooltip.classList.add('show');
  });

  icon.addEventListener('mouseout', () => {
    a_icons.forEach(otherIcon => {
      otherIcon.style.opacity = '1';
    });

    a_map.style.opacity = '1';

    const icon_class = icon.classList[1];
    const tt_Class = icon_class.replace('attack_icon', 'attack_tooltip');
    const tooltip = document.querySelector(`.${tt_Class}`);
    tooltip.classList.remove('show');
  });
});




const jun_icons = document.querySelectorAll('.icon_wrap4 .map_icon');
const jun_map = document.querySelector('.map_wrap .map_img');

const ata_icons = [
  document.querySelector('.jungle_icon3'),
  document.querySelector('.jungle_icon4')
];
const ata_tooltip = document.querySelector('.jungle_tooltip3');

ata_icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    jun_icons.forEach(otherIcon => {
      if (!ata_icons.includes(otherIcon)) {
        otherIcon.style.opacity = '0.3';
      }
    });

    jun_map.style.opacity = '0.5';

    ata_icons.forEach(ai => {
      ai.style.opacity = '1';
      ai.style.transform = 'scale(1.15)';
    });

    ata_tooltip.classList.add('show');
  });

  icon.addEventListener('mouseout', () => {
    jun_icons.forEach(icon => {
      icon.style.opacity = '1';
      icon.style.transform = 'scale(1)';
    });

    jun_map.style.opacity = '1';
    ata_tooltip.classList.remove('show');
  });
});


const dra_icon = document.querySelector('.jungle_icon1');
const baron_icon = document.querySelector('.jungle_icon2');

const dra_tooltip = document.querySelector('.jungle_tooltip1');
const baron_tooltip = document.querySelector('.jungle_tooltip2');

dra_icon.addEventListener('mouseover', () => {
  baron_icon.style.opacity = '0.3';
  ata_icons.forEach(icon => icon.style.opacity = '0.3');
  jun_map.style.opacity = '0.5';

  dra_icon.style.transform = 'scale(1.15)';
  dra_tooltip.classList.add('show');
});

dra_icon.addEventListener('mouseout', () => {
  [baron_icon, ...ata_icons].forEach(icon => {
    icon.style.opacity = '1';
    icon.style.transform = 'scale(1)';
  });
  dra_icon.style.transform = 'scale(1)';
  jun_map.style.opacity = '1';
  dra_tooltip.classList.remove('show');
});

baron_icon.addEventListener('mouseover', () => {
  dra_icon.style.opacity = '0.3';
  ata_icons.forEach(icon => icon.style.opacity = '0.3');
  jun_map.style.opacity = '0.5';

  baron_icon.style.transform = 'scale(1.15)';
  baron_tooltip.classList.add('show');
});

baron_icon.addEventListener('mouseout', () => {
  [dra_icon, ...ata_icons].forEach(icon => {
    icon.style.opacity = '1';
    icon.style.transform = 'scale(1)';
  });
  baron_icon.style.transform = 'scale(1)';
  jun_map.style.opacity = '1';
  baron_tooltip.classList.remove('show');
});


