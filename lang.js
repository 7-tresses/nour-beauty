function setLang(lang) {
  const html = document.getElementById('html-root');
  const elements = document.querySelectorAll('[data-fr]');

  if (lang === 'ar') {
    html.lang = 'ar';
    html.dir = 'rtl';
    elements.forEach(el => el.textContent = el.getAttribute('data-ar'));
  } else {
    html.lang = 'fr';
    html.dir = 'ltr';
    elements.forEach(el => el.textContent = el.getAttribute('data-fr'));
  }

  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'fr';
  setLang(saved);
});
