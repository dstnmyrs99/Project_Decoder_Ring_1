/* eslint-disable strict */
function dustinRenderer() {
  const form = document.querySelector('#dustin');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const input = event.target['dustin-input'].value;
    const direction = event.target['dustin-options'].value;
    const result =
        direction === 'encode'
          ? dustin(input)
          : dustin(input, false);
  
    const alert = document.querySelector('#dustin-alert');
    if (result) {
      alert.classList.add('d-none');
      const output = document.querySelector('#dustin-output');
      output.innerHTML = result;
    } else {
      alert.classList.remove('d-none');
    }
  });
}
  
document.addEventListener('DOMContentLoaded', dustinRenderer);
  