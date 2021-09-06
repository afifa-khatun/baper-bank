document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    console.log(newDepositText);
    const newDepositAmount = parseFloat(newDepositText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    console.log(depositTotal.innerText);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // clear the deposit input field
    depositInput.value = '';


    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;


})
// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);

  


    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawtext = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawtext);
    console.log(previousWithdrawTotal);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear withdraw input
    withdrawInput.value = '';


      // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalancetotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalancetotal;

})


