const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");
const inputListener = () => {
    const value = inputElement.value;

    if (value === '') {
        outputElement.innerHTML = 'Anonymous';
    } else {
        outputElement.innerHTML = value;
    };
}

inputElement.addEventListener("input", inputListener);
