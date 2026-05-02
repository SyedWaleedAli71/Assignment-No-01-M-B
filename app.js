// Q no. 1
// var sub1 = +prompt("Enter marks for Subject 1");
// var sub2 = +prompt("Enter marks for Subject 2");

// if ((sub1 === "" || sub2 === "") || sub1 < 0 || sub1 > 100 || sub2 < 0 || sub2 > 100) {
//     alert("Invalid input! Marks must be numbers between 0 and 100.");
// }
// else {

//     if (sub1 < 40 || sub2 < 40) {
//         alert("Result: Fail (Less than 40 in one subject)");
//     }
//     else {

//         var avg = (sub1 + sub2) / 2;
//         var grade;

//         if (avg >= 75) {
//             grade = "Excellent";
//         }
//         else if (avg >= 60) {
//             grade = "Good";
//         }
//         else if (avg >= 50) {
//             grade = "Pass";
//         }
//         else {
//             grade = "Fail";
//         }

//         alert("Average: " + avg + "\nGrade: " + grade);

//         if (sub1 > 85 && sub2 > 85) {
//             alert("Outstanding Performance");
//         }
//     }
// }

// 
// Q no. 2
// var correctUsername = "Waleed".toLowerCase();
// var correctPassword = "error123".toLowerCase();

// var username = prompt("Enter Username:");

// if (username !== correctUsername) {
//     alert("Access Denied");
// }
// else {

//     var attempts = 0;
//     var isLoggedIn = false;

//     while (attempts < 3) {

//         var password = prompt("Enter Password:");

//         if (password === correctPassword) {

//             if (attempts === 0) {
//                 alert("Login Successful Welcome Back");
//             } else {
//                 alert("Login Successful");
//             }

//             isLoggedIn = true;
//             break; 
//         }
//         else {
//             attempts++;
            
//             if (attempts > 2) {
//                 alert("Too many attempts");
//             } else {
//                 alert("Incorrect Password");
//             }
//         }
//     }
// }

// 
// Q no.3 
// var products = {
//     "laptop": 60000,
//     "mobile": 30000,
//     "headphones": 1500
// };

// var productName = prompt("Enter product name:").toLowerCase();

// if (!products[productName]) {
//     alert("Product not available");
// }
// else {

//     var price = products[productName];
//     var total = price;

//     if (price > 4000) {
//         alert("Premium Product Selected");
//     }

//     var discount = 0;

//     if (total > 5000) {
//         discount = 15;
//     }
//     else if (total > 3000) {
//         discount = 10;
//     }

//     var finalAmount = total - (total * discount / 100);

//     alert("Original Price: " + total +
//           "\nDiscount: " + discount + "%" +
//           "\nFinal Bill: " + finalAmount);
// }

// 
// Q no.4
// var hours = +prompt("Enter working hours:");

// if ((hours === "") || hours < 0 || hours > 24) {
//     alert("Invalid input! Hours must be between 0 and 24.");
// }
// else {

//     if (hours >= 8) {
//         alert("Status: Full Working Day");
//     }
//     else if (hours >= 4) {
//         alert("Status: Partially Present");
//     }
//     else {
//         alert("Status: Absent");
//     }

//     if (hours > 10) {
//         alert("Overtime Detected");
//     }
// }

// 
// Q no. 5
// 
// var password = prompt("Enter your password:");

// if (password.length < 6) {
//     alert("Weak Password");
// }
// else {

//     var hasNumber = false;
//     var hasLetter = false;

//     for (var i = 0; i < password.length; i++) {
//         var char = password[i];

//         if (char >= '0' && char <= '9') {
//             hasNumber = true;
//         }
//         else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//             hasLetter = true;
//         }
//     }

//     if (hasNumber && hasLetter) {
//         alert("Strong Password");
//     }
//     else {
//         alert("Medium Password");
//     }

//     if (password.indexOf("123") !== -1) {
//         alert("Avoid common patterns");
//     }
// }

// 
// Q no.6