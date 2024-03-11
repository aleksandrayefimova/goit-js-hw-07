function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.insertAdjacentHTML('beforeend', box.outerHTML);
    size += 10;
  }
}

document.querySelector('[data-create]').addEventListener('click', function () {
  const amountInput = document.querySelector('#controls input');
  const amount = parseInt(amountInput.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    amountInput.value = '';
  }
});

document.querySelector('[data-destroy]').addEventListener('click', function () {
  var boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
});
