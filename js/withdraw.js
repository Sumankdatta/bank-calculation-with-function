document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputValueById('withdraw')

    const previousWithdrawAmount = getPreviousValueById('withdraw-balance')

    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    const balanceTotalAmount = getPreviousValueById('balance');

    if (newWithdrawAmount > balanceTotalAmount) {
        alert('You have no enough money')
        return
    }

    const totalBalance = balanceTotalAmount - newWithdrawAmount;
    setTextElementValueById("withdraw-balance", totalWithdraw);
    setTextElementValueById('balance', totalBalance)
})