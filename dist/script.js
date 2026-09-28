const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    siteNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }
});

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const select = document.querySelector('#service');
    select.value = link.dataset.service;
  });
});

const quoteForm = document.querySelector('#quote-form');
const formError = document.querySelector('#form-error');
const requestReady = document.querySelector('#request-ready');
const requestMessage = document.querySelector('#request-message');
const copyRequest = document.querySelector('#copy-request');
const copyStatus = document.querySelector('#copy-status');

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formError.textContent = '';
  copyStatus.textContent = '';

  if (!quoteForm.checkValidity()) {
    formError.textContent = 'Please complete every field before continuing.';
    quoteForm.reportValidity();
    return;
  }

  const data = new FormData(quoteForm);
  requestMessage.value = [
    'Hello Simtech Hub, I would like to request a quote.',
    '',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Service: ${data.get('service')}`,
    `Details: ${data.get('details')}`
  ].join('\n');

  requestReady.hidden = false;
  requestReady.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

copyRequest.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(requestMessage.value);
    copyStatus.textContent = 'Request copied. Open Telegram and paste it into the chat.';
  } catch {
    requestMessage.select();
    document.execCommand('copy');
    copyStatus.textContent = 'Request copied. Open Telegram and paste it into the chat.';
  }
});

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

document.querySelector('#year').textContent = new Date().getFullYear();
