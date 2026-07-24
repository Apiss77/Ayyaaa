document.addEventListener('DOMContentLoaded', () => {
  const pullTab = document.getElementById('pullTab');
  const card = document.getElementById('card');
  const bouquetWrap = document.getElementById('bouquetWrap');

  pullTab.addEventListener('click', () => {
    const isOpen = card.hidden === false;

    if (isOpen) {
      card.hidden = true;
      pullTab.setAttribute('aria-expanded', 'false');
      pullTab.textContent = '';
      pullTab.append(makeRibbonIcon(), document.createTextNode('tarik pitanya'));
    } else {
      card.hidden = false;
      pullTab.setAttribute('aria-expanded', 'true');
      pullTab.textContent = '';
      pullTab.append(makeRibbonIcon(), document.createTextNode('sembunyikan pesan'));
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  function makeRibbonIcon() {
    const span = document.createElement('span');
    span.className = 'pull-tab__ribbon';
    span.setAttribute('aria-hidden', 'true');
    return span;
  }

  // small delight: clicking the bouquet itself gives it a gentle "bloom" pulse
  bouquetWrap.addEventListener('click', (e) => {
    if (e.target.closest('#pullTab')) return;
    bouquetWrap.classList.remove('bloom');
    // force reflow so the animation can retrigger
    void bouquetWrap.offsetWidth;
    bouquetWrap.classList.add('bloom');
  });
});
