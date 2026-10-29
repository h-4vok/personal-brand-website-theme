const section = document.querySelector('#blog');
const cards = [...(section?.querySelectorAll('[data-field-note-card]') || [])];

const setBeat = (card, index) => {
  card.querySelectorAll('[data-field-note-beat]').forEach((beat, i) => beat.classList.toggle('is-active', i === index));
  card.querySelectorAll('[data-field-note-beat-button]').forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
};

cards.forEach(card => {
  const controls = card.querySelector('.field-note-card__controls');
  if (controls) controls.hidden = false;
  card.querySelectorAll('[data-field-note-beat-button]').forEach(button => {
    button.addEventListener('click', () => setBeat(card, Number(button.dataset.fieldNoteBeatButton)));
  });
});
section?.classList.add('has-field-notes-js');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) cards.forEach(card => card.classList.toggle('is-active', card === visible.target));
  }, { threshold: 0.35 });
  cards.forEach(card => observer.observe(card));
}
