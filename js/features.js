// show the cash out form
// document.getElementById('btn-show-cash-out').addEventListener('click', function () {
//     document.getElementById('cash-out-form').classList.remove('hidden');
//     document.getElementById('add-money-form').classList.add('hidden');
// });

// // show the add money form

// document.getElementById('btn-show-add-money').addEventListener('click', function () {
//     document.getElementById('add-money-form').classList.remove('hidden');
//     document.getElementById('cash-out-form').classList.add('hidden');
// });

document.getElementById('btn-show-add-money').addEventListener('click', function () {
    showSectionById('add-money-form');
});

document.getElementById('btn-show-cash-out').addEventListener('click', function () {
    showSectionById("cash-out-form");
});

document.getElementById('btn-transaction').addEventListener("click", function () {
    showSectionById('transaction-history-section');
})