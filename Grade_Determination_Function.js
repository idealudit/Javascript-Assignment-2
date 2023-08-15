function getGrade(marks) {
    // This function determines the grade of a student based on the marks obtained.
    // It uses a switch-case structure to categorize the grades.
    
    switch (true) {
        case (marks >= 90 && marks <= 100):
            return "S grade";
        case (marks >= 80 && marks < 90):
            return "A grade";
        case (marks >= 70 && marks < 80):
            return "B grade";
        case (marks >= 60 && marks < 70):
            return "C grade";
        case (marks >= 50 && marks < 60):
            return "D grade";
        case (marks >= 40 && marks < 50):
            return "E grade";
        case (marks >= 0 && marks < 40):
            return "Student has failed";
        default:
            return "Invalid marks";
    }
}

// Get input from the user
const marks = parseFloat(prompt("Enter the marks:"));

if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    const grade = getGrade(marks);
    console.log("Grade:", grade);
} else {
    console.log("Marks should be between 0 and 100.");
}
