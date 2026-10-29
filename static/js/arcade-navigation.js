const toggle = document.querySelector('[data-arcade-toggle]');
const menu = document.querySelector('[data-arcade-menu]');

const setMenuOpen = open => {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
};

toggle?.addEventListener('click', () => {
  setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
});

menu?.addEventListener('click', event => {
  if (event.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    toggle.focus();
  }
});

const isRecentlyPublished = dateValue => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateValue || '');
  if (!match) return false;
  const published = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  if (published.getFullYear() !== Number(match[1]) || published.getMonth() !== Number(match[2]) - 1 || published.getDate() !== Number(match[3])) return false;
  const age = Date.now() - published.getTime();
  return age >= 0 && age <= 14 * 24 * 60 * 60 * 1000;
};

document.querySelectorAll('.quest-card').forEach(card => {
  const published = card.querySelector('time[datetime]');
  if (published && isRecentlyPublished(published.dateTime)) card.classList.add('quest-card--new');
});
