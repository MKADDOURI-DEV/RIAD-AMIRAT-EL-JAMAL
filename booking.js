// ============================================
// Connexion au moteur de réservation Nozoul
// Riad Amirat Al Jamal
// ============================================
//
// Le client saisit ses dates et ses voyageurs sur le site, puis il est envoyé
// sur le moteur Nozoul avec ces informations dans l'adresse, pour ne pas avoir
// à les ressaisir. Même principe que le site du Riad Dar Soufa.
//
// FORMAT ATTENDU PAR NOZOUL (le même que sur le site du Motel Safari) :
//   ?period=AAAA-MM-JJ,AAAA-MM-JJ&adults=2&child=1&ages=5
//   - period : date d'arrivée et date de départ séparées par une virgule
//   - adults : nombre d'adultes
//   - child  : nombre d'enfants (seulement s'il y en a)
//   - ages   : âge de chaque enfant, séparés par une virgule
// Les textes affichés (FR / EN) sont dans i18n.js.

import { t, onLangChange } from './i18n.js';

const NOZOUL_BOOKING_URL =
  'https://riadamirataljamal.nozoul.ma/#/be/3c3a2e91-729c-4f9a-bc11-94612f02a245/book';

/** Âge maximum d'un enfant pour le moteur Nozoul */
const MAX_CHILD_AGE = 12;

/** Date du jour + n jours, au format AAAA-MM-JJ (heure locale, pas UTC). */
function isoDate(offsetDays = 0, from) {
  const d = from ? new Date(`${from}T12:00:00`) : new Date();
  d.setDate(d.getDate() + offsetDays);
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

/** Adresse du moteur Nozoul avec les informations du client pré-remplies. */
function buildNozoulUrl(s) {
  const q = new URLSearchParams();
  q.set('period', `${s.checkIn},${s.checkOut}`);
  q.set('adults', String(s.adults || 1));
  if (s.children > 0) {
    q.set('child', String(s.children));
    const ages = s.childrenAges.slice(0, s.children).filter((a) => a >= 0).join(',');
    if (ages) q.set('ages', ages);
  }
  // Route « hash » : les paramètres se placent après la route du moteur.
  return `${NOZOUL_BOOKING_URL}?${q.toString()}`;
}

function initBooking() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const checkIn = document.getElementById('checkIn');
  const checkOut = document.getElementById('checkOut');
  const adults = document.getElementById('adults');
  const children = document.getElementById('children');
  const agesBox = document.getElementById('childAgesContainer');
  const errorBox = document.getElementById('bookingError');

  // Âges déjà choisis, conservés quand on change le nombre d'enfants (-1 = non renseigné)
  let ages = [];
  // Clé du message d'erreur affiché, pour le traduire si la langue change
  let errorKey = '';

  function showError(key) {
    errorKey = key;
    if (!errorBox) return;
    errorBox.textContent = key ? t(key) : '';
    errorBox.hidden = !key;
  }

  // ---- Dates ----
  checkIn.min = isoDate(0);
  checkOut.min = isoDate(1);

  checkIn.addEventListener('change', () => {
    showError('');
    if (!checkIn.value) return;
    checkOut.min = isoDate(1, checkIn.value);
    if (!checkOut.value || checkOut.value <= checkIn.value) {
      checkOut.value = isoDate(1, checkIn.value);
    }
  });
  checkOut.addEventListener('change', () => showError(''));
  adults.addEventListener('change', () => showError(''));

  // ---- Âge des enfants ----
  function renderAges() {
    const count = parseInt(children.value, 10) || 0;
    while (ages.length < count) ages.push(-1);
    ages = ages.slice(0, count);
    agesBox.innerHTML = '';
    agesBox.style.display = count ? 'flex' : 'none';

    for (let i = 0; i < count; i++) {
      const wrapper = document.createElement('div');
      wrapper.className = 'child-age-field';

      const label = document.createElement('label');
      label.setAttribute('for', `childAge${i + 1}`);
      label.textContent = `${t('book.childAge')} ${i + 1}`;

      const select = document.createElement('select');
      select.id = `childAge${i + 1}`;
      select.required = true;

      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = t('book.agePlaceholder');
      placeholder.disabled = true;
      select.appendChild(placeholder);

      for (let age = 0; age <= MAX_CHILD_AGE; age++) {
        const opt = document.createElement('option');
        opt.value = String(age);
        opt.textContent = age === 0
          ? t('book.lessThanOne')
          : `${age} ${t(age > 1 ? 'book.years' : 'book.year')}`;
        select.appendChild(opt);
      }
      select.value = ages[i] >= 0 ? String(ages[i]) : '';

      select.addEventListener('change', () => {
        ages[i] = parseInt(select.value, 10);
        showError('');
      });

      wrapper.appendChild(label);
      wrapper.appendChild(select);
      agesBox.appendChild(wrapper);
    }
  }
  children.addEventListener('change', () => { showError(''); renderAges(); });
  renderAges();

  // Changement de langue : on redessine les champs d'âge (valeurs conservées)
  onLangChange(() => {
    renderAges();
    showError(errorKey);
  });

  // ---- Envoi vers Nozoul ----
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nChildren = parseInt(children.value, 10) || 0;
    const chosenAges = ages.slice(0, nChildren);

    if (!checkIn.value) { showError('book.errorIn'); checkIn.focus(); return; }
    if (!checkOut.value || checkOut.value <= checkIn.value) {
      showError('book.errorOut'); checkOut.focus(); return;
    }
    if (chosenAges.length < nChildren || chosenAges.some((a) => !(a >= 0))) {
      showError('book.errorAge'); return;
    }
    showError('');

    window.location.href = buildNozoulUrl({
      checkIn: checkIn.value,
      checkOut: checkOut.value,
      adults: parseInt(adults.value, 10) || 1,
      children: nChildren,
      childrenAges: chosenAges,
    });
  });

  // ---- Boutons « Réserver » des chambres : ramènent au formulaire ----
  document.querySelectorAll('[data-book]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => checkIn.focus({ preventScroll: true }), 500);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBooking);
} else {
  initBooking();
}
