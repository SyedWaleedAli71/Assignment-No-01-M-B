var sub1 = +prompt("Enter marks for Subject 1");
var sub2 = +prompt("Enter marks for Subject 2");

if ((sub1 === "" || sub2 === "") || sub1 < 0 || sub1 > 100 || sub2 < 0 || sub2 > 100) {
    alert("Invalid input! Marks must be numbers between 0 and 100.");
}
else {

    if (sub1 < 40 || sub2 < 40) {
        alert("Result: Fail (Less than 40 in one subject)");
    }
    else {

        var avg = (sub1 + sub2) / 2;
        var grade;

        if (avg >= 75) {
            grade = "Excellent";
        }
        else if (avg >= 60) {
            grade = "Good";
        }
        else if (avg >= 50) {
            grade = "Pass";
        }
        else {
            grade = "Fail";
        }

        alert("Average: " + avg + "\nGrade: " + grade);

        if (sub1 > 85 && sub2 > 85) {
            alert("Outstanding Performance");
        }
    }
}