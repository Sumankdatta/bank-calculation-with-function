
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('deposit-field');
    console.log(newDepositAmount);

    const previousDeposit = getPreviousValueById('deposit-total');
    const totalDeposit = newDepositAmount + previousDeposit;

    const totalBalanceAmount = getPreviousValueById('balance')
    const totalBalance = totalBalanceAmount + newDepositAmount;

    setTextElementValueById('deposit-total', totalDeposit)
    setTextElementValueById('balance', totalBalance)
})