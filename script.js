// Simple client-side form handler (no backend). It will open an email compose window with the form contents.
// You can replace with a real backend endpoint later.
function submitForm(e){
  e.preventDefault();
  const company = document.getElementById('company').value.trim();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  if(!company || !name || !email || !message){
    formMsg.textContent = 'Please fill all fields.';
    formMsg.style.color = 'crimson';
    return false;
  }

  // Create mailto link
  const subject = encodeURIComponent('Client referral from ' + company + ' - ' + name);
  const body = encodeURIComponent('Company: ' + company + '\nName: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message + '\n\n--\nRNNA Travel Consultant');
  const mailto = 'mailto:ransfordbrooksarmah@gmail.com?subject=' + subject + '&body=' + body;

  window.location.href = mailto;
  formMsg.textContent = 'Opening email composer...';
  formMsg.style.color = 'var(--green)';
  return false;
}

function mailtoFallback(){
  window.location.href = 'mailto:ransfordbrooksarmah@gmail.com';
}
