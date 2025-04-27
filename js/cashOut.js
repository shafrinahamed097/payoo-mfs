// Cash Out

document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutBalance = document.getElementById('input-cash-out-money').value;
    const pinNumber = document.getElementById('cash-out-pin-number').value;

    if (pinNumber === "1234") {
        const balance = document.getElementById('account-balance').innerText;
        const previousBalance = parseFloat(balance);
        const withdrawBalance = parseFloat(cashOutBalance);

        const newBalance = previousBalance - withdrawBalance;
        document.getElementById('account-balance').innerText = newBalance;
    }

});