function showSectionById(id) {
    // hidden form
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history-section').classList.add('hidden');

    // show form / sections
    document.getElementById(id).classList.remove('hidden');
}