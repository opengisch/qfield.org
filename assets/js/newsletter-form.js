if (window.trustedTypes && !window.trustedTypes.defaultPolicy) {
  window.trustedTypes.createPolicy('default', {
    createHTML: function (input) { return input; },
    createScript: function (input) { return input; },
    createScriptURL: function (input) { return input; }
  });
}

window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
window.LOCALE = 'en';
window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = 'The information provided is invalid. Please review the field format and try again.';
window.REQUIRED_ERROR_MESSAGE = 'This field cannot be left blank. ';
window.GENERIC_INVALID_MESSAGE = 'The information provided is invalid. Please review the field format and try again.';
window.translation = {
  common: {
    selectedList: '{quantity} list selected',
    selectedLists: '{quantity} lists selected',
    selectedOption: '{quantity} selected',
    selectedOptions: '{quantity} selected',
  }
};
var AUTOHIDE = Boolean(0);
var qfieldNewsletterTurnstileToken = '';

function qfieldNewsletterSetCaptchaToken(token) {
  qfieldNewsletterTurnstileToken = token || '';
  var form = document.getElementById('sib-form');
  if (!form) { return; }
  var input = form.querySelector('input[name="cf-turnstile-response"]');
  if (!input) {
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'cf-turnstile-response';
    form.appendChild(input);
  }
  input.value = qfieldNewsletterTurnstileToken;
}

window.qfieldNewsletterTurnstileCallback = function (token) {
  qfieldNewsletterSetCaptchaToken(token);
};

window.qfieldNewsletterTurnstileExpiredCallback = function () {
  qfieldNewsletterSetCaptchaToken('');
};

window.qfieldNewsletterTurnstileOnLoad = function () {
  var container = document.querySelector('.cf-turnstile[data-explicit-render]');
  if (!container || !window.turnstile) { return; }
  window.turnstile.render(container, {
    sitekey: container.dataset.sitekey,
    callback: window.qfieldNewsletterTurnstileCallback,
    'expired-callback': window.qfieldNewsletterTurnstileExpiredCallback,
    'error-callback': window.qfieldNewsletterTurnstileExpiredCallback,
    language: 'en'
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('sib-form');
  var countryCode = document.getElementById('COUNTRY_CODE');
  var successMessage = document.getElementById('success-message');
  var errorMessage = document.getElementById('error-message');
  var submitButton = form ? form.querySelector('button[type="submit"]') : null;

  function showPanel(panel, message) {
    if (!panel) { return; }
    var text = panel.querySelector('.sib-form-message-panel__inner-text');
    if (text && message) { text.innerText = message; }
    panel.style.display = 'block';
    panel.classList.add('sib-form-message-panel--active');
  }

  function hidePanel(panel) {
    if (!panel) { return; }
    panel.style.display = 'none';
    panel.classList.remove('sib-form-message-panel--active');
  }

  if (!form || !countryCode || !submitButton) { return; }

  countryCode.addEventListener('input', function () {
    countryCode.value = countryCode.value.toUpperCase();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    hidePanel(successMessage);
    hidePanel(errorMessage);

    if (!form.reportValidity()) { return; }

    var captchaToken = qfieldNewsletterTurnstileToken ||
      (form.querySelector('input[name="cf-turnstile-response"]') || {}).value;
    if (!captchaToken) {
      showPanel(errorMessage, 'Please complete the captcha and try again.');
      return;
    }

    submitButton.disabled = true;
    submitButton.classList.add('sib-form-block__button-disabled');

    fetch(form.action + '?isAjax=1', {
      method: 'POST',
      body: new FormData(form),
      credentials: 'include'
    }).then(function (response) {
      return response.json().then(function (data) {
        return { ok: response.ok, data: data };
      });
    }).then(function (result) {
      if (result.ok && result.data.success) {
        showPanel(successMessage, result.data.message || 'Your subscription has been successful.');
        form.reset();
        qfieldNewsletterSetCaptchaToken('');
        if (window.turnstile) { window.turnstile.reset(); }
        return;
      }
      var errors = result.data && result.data.errors ? Object.values(result.data.errors).join(' ') : '';
      showPanel(errorMessage, errors || (result.data && result.data.message) || 'Your subscription could not be saved. Please try again.');
    }).catch(function () {
      showPanel(errorMessage, 'Your subscription could not be saved. Please try again.');
    }).finally(function () {
      submitButton.disabled = false;
      submitButton.classList.remove('sib-form-block__button-disabled');
    });
  });
});
