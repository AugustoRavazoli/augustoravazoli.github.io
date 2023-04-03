const form = document.getElementById('form');
const status = document.getElementById('status-bar');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  try {
    const res = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json'
      }
    });
    console.log(res);
    form.reset();
    showStatus('Sent with success!');
  } catch (err) {
    console.log(err);
    showStatus('An error has occurred...');
  }
}

function showStatus(message) {
  status.textContent = message;
  status.classList.add('contact__status-bar--active');
  setTimeout(() => {
    status.classList.remove('contact__status-bar--active');
  }, 3000);
}
