// ============================================
// Nozoul PMS — Channel Manager Booking Engine
// ============================================
const NOZOUL_BASE_URL = 'https://riadamirataljamal.nozoul.ma/#/be/3c3a2e91-729c-4f9a-bc11-94612f02a245/book';

(function () {
  'use strict';

  var state = {
    checkin: [],
    checkout: [],
    childAges: []
  };

  var checkInInput, checkOutInput, adultsSelect, childrenSelect, childAgesContainer;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  /* Format une date au format ISO attendu par le Booking Engine Nozoul : AAAA-MM-JJ */
  function formatISO(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }

  function parseInputDate(value) {
    if (!value) return null;
    var parts = value.split('-'); // YYYY-MM-DD from <input type="date">
    return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  }

  /* Construit l'URL de redirection (GET) vers le Booking Engine Nozoul,
     avec les critères de recherche saisis par le client. */
  function buildNozoulUrl() {
    var nChildren = parseInt(childrenSelect.value, 10) || 0;
    var period = formatISO(state.checkin) + "," + formatISO(state.checkout);
    var adults = adultsSelect.value;

    var qs = "period=" + encodeURIComponent(period) +
      "&adults=" + encodeURIComponent(adults);

    if (nChildren > 0) {
      var ages = state.childAges.slice(0, nChildren).join(",");
      qs += "&child=" + encodeURIComponent(String(nChildren));
      if (ages) {
        qs += "&ages=" + encodeURIComponent(ages);
      }
    }

    return NOZOUL_BASE_URL + "?" + qs;
  }

  function renderChildAgeFields() {
    var count = parseInt(childrenSelect.value, 10) || 0;
    childAgesContainer.innerHTML = '';

    if (count === 0) {
      childAgesContainer.style.display = 'none';
      state.childAges = [];
      return;
    }

    childAgesContainer.style.display = 'flex';

    for (var i = 1; i <= count; i++) {
      (function (index) {
        var wrapper = document.createElement('div');
        wrapper.className = 'child-age-field';

        var label = document.createElement('label');
        label.setAttribute('for', 'childAge' + index);
        label.textContent = 'Âge enfant ' + index;

        var select = document.createElement('select');
        select.id = 'childAge' + index;
        select.name = 'childAge' + index;
        select.required = true;

        for (var age = 0; age <= 12; age++) {
          var option = document.createElement('option');
          option.value = String(age);
          option.textContent = age + (age <= 1 ? ' an' : ' ans');
          select.appendChild(option);
        }

        select.value = state.childAges[index - 1] != null ? String(state.childAges[index - 1]) : '0';
        state.childAges[index - 1] = parseInt(select.value, 10);

        select.addEventListener('change', function () {
          state.childAges[index - 1] = parseInt(select.value, 10);
        });

        wrapper.appendChild(label);
        wrapper.appendChild(select);
        childAgesContainer.appendChild(wrapper);
      })(i);
    }

    state.childAges.length = count;
  }

  document.addEventListener('DOMContentLoaded', function () {
    checkInInput = document.getElementById('checkIn');
    checkOutInput = document.getElementById('checkOut');
    adultsSelect = document.getElementById('adults');
    childrenSelect = document.getElementById('children');
    childAgesContainer = document.getElementById('childAgesContainer');

    if (!childrenSelect || !childAgesContainer) return;

    if (checkInInput) {
      checkInInput.addEventListener('change', function () {
        state.checkin = parseInputDate(checkInInput.value);
      });
    }
    if (checkOutInput) {
      checkOutInput.addEventListener('change', function () {
        state.checkout = parseInputDate(checkOutInput.value);
      });
    }

    childrenSelect.addEventListener('change', renderChildAgeFields);
    renderChildAgeFields();
  });

  window.buildNozoulUrl = buildNozoulUrl;
  window.updateNozoulDates = function () {
    state.checkin = parseInputDate(checkInInput.value);
    state.checkout = parseInputDate(checkOutInput.value);
  };
})();

