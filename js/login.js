// search : form submit reloading the page


// Login Button

// Step-1: Set event handler
// document.getElementById('btn-login').addEventListener('click', function (event) {
//     // Step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault(); // ভিগিনারদের জন্য

//     // Step-3: get the phone number & Phone Number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     // this is temporary. You should not do like this
//     if (phoneNumber === "5" && pinNumber === '1234') {
//         console.log("You are logged in");
//         // Step-5: Allow user to use the website


//     } else {
//         alert("Wrong phone number or pin");

//     }






// })

document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin-number').value;

    if (phoneNumber === "123456" && pin === "1234") {
        console.log("Your Logged in");
        window.location.href = '/home.html';
    } else {
        alert("Phone Number Or PIN number Wrong")
    }
})