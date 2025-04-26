// search : form submit reloading the page


// Login Button

// Step-1: Set event handler
document.getElementById('btn-login').addEventListener('click', function (event) {
    // Step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); // ভিগিনারদের জন্য বেজাল এটা। 
    console.log('login button clicked');


    // Step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);




})