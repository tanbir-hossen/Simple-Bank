//step1: add event to deposit button
document.getElementById('btn-deposit').addEventListener('click', function() {
    // console.log('clicked')
    
    //step2: get deposit ammount from input field
    const depositField = document.getElementById('deposit-amount');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString)
    // console.log(newDepositAmount)

    //step3: clear deposit field
    depositField.value = ''





    //step4: get previous deposit ammount
    const previousDeposit = document.getElementById('deposit');
    const previousDepositAmmountString = previousDeposit.innerText;
    const currentDepositAmount = parseFloat(previousDepositAmmountString);

    //step5: calculate new deposit ammount
    const newDepositTotal = newDepositAmount + currentDepositAmount;

    previousDeposit.innerText = newDepositTotal;


    //get total balance current ammount 
    const currentTotal = document.getElementById('balance');
    const currentTotalBalanceString = currentTotal.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceString);

    //calculate new total balance
    const depositAndCurrentTotal = currentTotalBalance + newDepositAmount;

    currentTotal.innerText = depositAndCurrentTotal;
})



// withdraw 
// add event handler with withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldString);
    // console.log(withdrawFieldAmount)


    // get current with draw ammount
    const currentWithdraw = document.getElementById('current-withdraw');
    const currentWithdrawString = currentWithdraw.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawString)

    


    // calculate new withdraw ammount with current withdraw amount
    const newWithdrawAmount = currentWithdrawAmount + withdrawFieldAmount

    currentWithdraw.innerText = newWithdrawAmount

    withdrawField.value = ''


    //update total balance after withdraw

    const currentTotal = document.getElementById('balance');
    const currentTotalBalanceString = currentTotal.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceString);

    const totalBalance = currentTotalBalance - currentWithdrawAmount;
    
    currentTotal.innerText = totalBalance
})