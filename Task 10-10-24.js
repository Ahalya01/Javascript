//SCENARIO -01. Amazon (E-commerce Shopping Experience)
console.log("-----***Amazon (E-commerce Shopping Experience)***-----");
let cartItems = ['Laptop', 'Headphones', 'Phone Case', 'Charger'];
for (let i = 0; i < cartItems.length; i++) {
    let confirmPurchase = confirm(`Do you want to confirm purchase ${cartItems[i]}?`);
    if (confirmPurchase) {
        alert(`${cartItems[i]} has been added to your purchase.`);
    } else {
        alert(`You skipped purchasing ${cartItems[i]}.`);
    }
}
alert('Thank you for shopping with us!');
//SCENARIO -02. Hotstar: Subscription Plan Selection (Switch Case & Prompt)
console.log("-----***Hotstar: Subscription Plan Selection (Switch Case & Prompt)***-----");
let plan = prompt("Choose a subscription plan: Basic, Premium, or VIP");
switch(plan) {
    case 'Basic':
        alert("You selected the Basic Plan: $5/month")
        break;
         case 'Premium':
             alert("You selected the Premium Plan: $10/month");
              break;
              case 'VIP':
                alert("You selected the VIP Plan: $15/month");
                 break;
                 default:
                    alert("Invalid selection. Please choose a valid plan.");
                }
//SCENARIO-03 Uber (Ride Booking Experience)
console.log("-----***Uber (Ride Booking Experience)***-----");
function confirmRideBooking() {
    alert("Your ride has been successfully booked!");
}
let confirmBooking = confirm("Do you want to book a ride?");
if (confirmBooking) {
    alert("Booking your ride...");
    setTimeout(confirmRideBooking, 3000); 
} else {
    alert("Booking cancelled.");
}
//SCENARIO-04 Amazon Product Rating Feature 
console.log("-----***Amazon Product Rating Feature ***-----"); 
let rating = prompt("Please rate the product from 1 to 5 stars:");
for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
        alert(`You rated: ${i} star(s)`);
    } else {
        alert(`You did not rate: ${i} star(s)`);
    }
}
alert("Thank you for rating the product!");
//SCENARIO -04 Hotstar (Video Quality Selection)
console.log("-----***Hotstar (Video Quality Selection)***-----"); 
let quality = prompt("Select video quality: 480p, 720p, 1080p, 4K");

switch(quality) {
    case '480p':
        alert("You selected 480p quality.");
        break;
    case '720p':
        alert("You selected 720p quality.");
        break;
    case '1080p':
        alert("You selected 1080p quality.");
        break;
    case '4K':
        alert("You selected 4K quality.");
        break;
    default:
        alert("Invalid quality selection.");
}
//SCENARIO-06  Hotstar (Logging Out)
console.log("-----*** Hotstar (Logging Out)***-----"); 
function redirectToLogin() {
    alert("You have been logged out.");
    window.location.href = 'https://www.hotstar.com/in/mypage#mp-login';
}
let confirmLogout = confirm("Are you sure you want to log out?");
if (confirmLogout) {
    alert("Logging you out...");
    setTimeout(redirectToLogin, 3000); 
} else {
    alert("You remain logged in.");
}


