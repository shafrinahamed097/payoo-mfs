// Cash Out

document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutBalance = document.getElementById('input-cash-out-money').value;
    const pinNumber = document.getElementById('cash-out-pin-number').value;
    if (isNaN(cashOutBalance)) {
        alert("Failed to add money");
        return;
    }

    if (pinNumber === "1234") {
        const balance = document.getElementById('account-balance').innerText;
        const previousBalance = parseFloat(balance);
        const withdrawBalance = parseFloat(cashOutBalance);

        const newBalance = previousBalance - withdrawBalance;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out</h4>  
        <p>${cashOutBalance} TK. withdraw. New Balance ${newBalance} TK.</p>      
        `

        document.getElementById('transaction-container').appendChild(div);
    } else {
        alert("No money for you... Go to the hell!");
    }

});