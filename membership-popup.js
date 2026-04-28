(function () {
  'use strict';

  var DELAY_MS = 3500; // seconds before popup appears
  var STORAGE_KEY = 'lasact_reinstatement_popup_dismissed';

  function buildPopup() {
    // Overlay
    var overlay = document.createElement('div');
    overlay.className = 'lasact-popup-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    // Popup
    var popup = document.createElement('div');
    popup.className = 'lasact-popup';
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-modal', 'true');
    popup.setAttribute('aria-labelledby', 'lasact-popup-title');

    popup.innerHTML = [
      '<div class="lasact-popup__header">',
        '<p class="lasact-popup__header-eyebrow">Membership Notice</p>',
        '<h2 class="lasact-popup__header-title" id="lasact-popup-title">',
          'Important Update for<br>LASACT Members',
        '</h2>',
        '<button class="lasact-popup__close" aria-label="Close notice">',
          '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
            '<line x1="6" y1="6" x2="18" y2="18"/>',
            '<line x1="18" y1="6" x2="6" y2="18"/>',
          '</svg>',
        '</button>',
      '</div>',
      '<div class="lasact-popup__stripe"></div>',
      '<div class="lasact-popup__body">',
        '<div class="lasact-popup__icon">',
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">',
            '<circle cx="12" cy="12" r="10"/>',
            '<line x1="12" y1="8" x2="12" y2="12"/>',
            '<circle cx="12" cy="16" r="0.5" fill="#ebf7ff" stroke="none"/>',
          '</svg>',
        '</div>',
        '<p>',
          'Any individual membership <strong>not renewed by ',
          '<span class="lasact-popup__deadline">March 31, 2026</span>',
          '</strong> will require reinstatement to remain active.',
        '</p>',
        '<div class="lasact-popup__fee-box">',
          '<div class="lasact-popup__fee-box-amount">$120</div>',
          '<div class="lasact-popup__fee-box-label">',
            'Reinstatement fee<br>for lapsed memberships',
          '</div>',
        '</div>',
        '<p>',
          'If your membership has lapsed, please complete the reinstatement form below to restore your standing with LASACT.',
        '</p>',
        '<a ',
          'href="https://form.jotform.com/243025217306042" ',
          'target="_blank" ',
          'rel="noopener noreferrer" ',
          'class="lasact-popup__cta"',
        '>',
          'Reinstate My Membership &rarr;',
        '</a>',
        '<button class="lasact-popup__dismiss">I\'m already renewed &mdash; dismiss</button>',
      '</div>'
    ].join('');

    return { overlay: overlay, popup: popup };
  }

  function showPopup(overlay, popup) {
    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    // Trigger reflow so transitions fire
    overlay.getBoundingClientRect();
    popup.getBoundingClientRect();

    overlay.classList.add('visible');
    popup.classList.add('visible');

    // Trap focus inside popup when visible
    popup.querySelector('.lasact-popup__close').focus();
  }

  function hidePopup(overlay, popup) {
    overlay.classList.remove('visible');
    popup.classList.remove('visible');

    // Remove from DOM after transition completes
    var duration = 450;
    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      if (popup.parentNode) popup.parentNode.removeChild(popup);
    }, duration);
  }

  function init() {
    // Don't show if user already dismissed in this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    var els = buildPopup();
    var overlay = els.overlay;
    var popup = els.popup;

    setTimeout(function () {
      showPopup(overlay, popup);
    }, DELAY_MS);

    // Close on X button
    popup.querySelector('.lasact-popup__close').addEventListener('click', function () {
      sessionStorage.setItem(STORAGE_KEY, '1');
      hidePopup(overlay, popup);
    });

    // Close on dismiss link
    popup.querySelector('.lasact-popup__dismiss').addEventListener('click', function () {
      sessionStorage.setItem(STORAGE_KEY, '1');
      hidePopup(overlay, popup);
    });

    // Close on overlay click
    overlay.addEventListener('click', function () {
      sessionStorage.setItem(STORAGE_KEY, '1');
      hidePopup(overlay, popup);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && popup.classList.contains('visible')) {
        sessionStorage.setItem(STORAGE_KEY, '1');
        hidePopup(overlay, popup);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
