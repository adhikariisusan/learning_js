//Create a function getGrade(score) that takes a numerical score and returns the corresponding letter grade (A, B, C, D, or F).


    function getGrade(score) {
        if (score >= 90 && score <= 100) {
            return "A";
        } else if (score >= 80 && score < 90) {
            return "B";
        } else if (score >= 70 && score < 80) {
            return "C";
        } else if (score >= 60 && score < 70) {
            return "D";
        } else if (score >= 0 && score < 60) {
            return "F";
        } else {
            return "Invalid";
        }
    }


console.log(getGrade(98));
console.log(getGrade(88));
console.log(getGrade(78));
console.log(getGrade(68));
console.log(getGrade(58));
console.log(getGrade(102));
console.log(getGrade(-2));