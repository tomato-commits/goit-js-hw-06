const inputElement = document.getElementById("validation-input");
const blurListener = () => {
    const valueLength = inputElement.value.length;
    const maxLength = +inputElement.dataset.length; // data-length attribute

    if (valueLength === maxLength) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
    }
}

inputElement.addEventListener("blur", blurListener);