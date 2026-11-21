// Add the clinic estimate and the honest form response here.
const booking = document.querySelector('#booking');
const message = document.querySelector('#message');

booking.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Nothing was sent and nothing was booked: this page cannot take bookings yet.';
});

// Read the labelled controls, calculate the total, then show it.
const service = document.querySelector('#service');
const repairs = document.querySelector('#repairs');
const total = document.querySelector('#total');

function showEstimate() {
  const count = Math.max(0, Math.floor(Number(repairs.value) || 0));
  const servicePrice = Number(service.value);
  const repairsPrice = count * 5;
  const totalPrice = servicePrice + repairsPrice;

  total.textContent = 'EUR ' + totalPrice;
}

service.addEventListener('change', showEstimate);
repairs.addEventListener('input', showEstimate);

showEstimate();