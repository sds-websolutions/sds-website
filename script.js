// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
if (btn) btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});

// Contact form -> opens the visitor's email app (no backend needed).
// To receive enquiries directly, replace this with Formspree / Web3Forms.
const form = document.getElementById('enquiry');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const body = `Name: ${d.get('name')}\nEmail: ${d.get('email')}\nService: ${d.get('service')}\n\n${d.get('details')}`;
  window.location.href = 'mailto:smartdesksolutions.sds@gmail.com?subject=' +
    encodeURIComponent('Project enquiry: ' + d.get('service')) + '&body=' + encodeURIComponent(body);
  document.getElementById('msg').textContent = 'Thanks! Your email app should open to send the enquiry.';
});
