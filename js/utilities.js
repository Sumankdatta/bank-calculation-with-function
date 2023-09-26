function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountString = inputField.value;
    const inputAmount = parseFloat(inputAmountString);

    if (isNaN(inputAmount)) {
        alert("Please enter a valid number.");

        return null
    }

    inputField.value = ''
    return inputAmount
}

function getPreviousValueById(previousValueId) {
    const previousField = document.getElementById(previousValueId);
    const previousAmountString = previousField.innerText;
    const previousAmount = parseFloat(previousAmountString)

    return previousAmount
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue
}
