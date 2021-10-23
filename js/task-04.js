let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueElement = document.getElementById('value');

const decrementCounterValue = () => {
    counterValue -= 1;
    valueElement.innerHTML = counterValue;
};

const incrementCounterValue = () => {
    counterValue += 1;
    valueElement.innerHTML = counterValue;
};

decrementBtn.addEventListener("click", decrementCounterValue);

incrementBtn.addEventListener("click", incrementCounterValue);