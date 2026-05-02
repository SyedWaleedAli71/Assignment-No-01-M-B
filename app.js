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
// var balance = 10000;

// var deposit = +prompt("Enter deposit amount:");

// if ((deposit === "") || deposit <= 0) {
//     alert("Invalid Amount! Please enter a positive number.");
// }
// else {

//     balance = balance + deposit;

//     if (deposit > 20000) {
//         alert("Large Deposit Detected");
//     }

//     if (balance > 100000) {
//         alert("High Account Balance");
//     }

//     alert("Updated Balance: " + balance);
// }

// 
// Q no.7
// var totalDays = 30;

// var presentDays = +prompt("Enter present days (out of 30):");

// if ((presentDays === "") || presentDays < 0 || presentDays > 30) {
//     alert("Invalid Input! Days must be between 0 and 30.");
// }
// else {

//     var percentage = (presentDays / totalDays) * 100;

//     if (percentage >= 75) {
//         alert("Eligible");
//     }
//     else if (percentage >= 50) {
//         alert("Warning");
//     }
//     else {
//         alert("Not Eligible");
//     }

//     if (presentDays === 30) {
//         alert("Perfect Attendance");
//     }
// }

// 
// Q no.8
// var brands = ["Samsung", "Apple", "Xiaomi"];
// var prices = [30000, 80000, 15000];

// var userBrand = prompt("Enter mobile brand:").toLowerCase();

// var index = -1;

// for (var i = 0; i < brands.length; i++) {
//     if (brands[i].toLowerCase() === userBrand) {
//         index = i;
//         break;
//     }
// }

// if (index === -1) {
//     alert("Brand not available");
// }
// else {

//     var price = prices[index];

//     alert("Price: " + price);

//     if (price > 50000) {
//         alert("High-End Device");
//     }
//     else if (price >= 20000) {
//         alert("Mid-Range Device");
//     }
//     else {
//         alert("Budget Device");
//     }

//     if (index === 0) {
//         alert("Top Selling Brand");
//     }
// }

// 
// Q no.9
// var q1 = "Waleed".toLowerCase();
// var q2 = "Karachi".toLowerCase();
// var q3 = "Javascript".toLowerCase();

// var score = 0;

// var ans1 = prompt("Q1 What is Your Name:");
// var ans2 = prompt("Q2 Where are you Located:");
// var ans3 = prompt("Q3 What is your Favorite Language:");

// if (ans1 === q1) {
//     score++;
// }

// if (ans2 === q2) {
//     score++;
// }

// if (ans3 === q3) {
//     score++;
// }

// if (score === 3) {
//     alert("Excellent Performance");

//     alert("Perfect Score");
// }
// else if (score === 2) {
//     alert("Good Job");
// }
// else if (score === 1) {
//     alert("Needs Improvement");
// }
// else {
//     alert("Try Again");
// }

// 
// Q no.10
// var item1 = +prompt("Enter price of item 1:");
// var item2 = +prompt("Enter price of item 2:");
// var item3 = +prompt("Enter price of item 3:");

// if ((item1 === "") || item1 <= 0 || (item2 === "") || item2 <= 0 || (item3 === "") || item3 <= 0) {
    
//     alert("Invalid input! Prices must be greater than 0.");
// }
// else {

//     var total = item1 + item2 + item3;

//     if (item1 > 2000 || item2 > 2000 || item3 > 2000) {
//         alert("Expensive Item Included");
//     }

//     var discount = 0;

//     if (total > 5000) {
//         discount = 15;
//     }
//     else if (total > 3000) {
//         discount = 10;
//     }

//     var finalBill = total - (total * discount / 100);

//     alert("Total: " + total + "\nDiscount: " + discount + "%" + "\nFinal Bill: " + finalBill);
// }