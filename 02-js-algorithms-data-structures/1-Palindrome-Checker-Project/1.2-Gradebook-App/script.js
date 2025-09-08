// Calculate the average of all scores in an array
function getAverage(scores) {
  let sum = 0;

  // Add up all scores
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  // Divide total by number of scores
  return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); 
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// Convert a numeric score into a letter grade
function getGrade(score) {
  if (score === 100) {
    return "A++"; // perfect score
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F"; // below 60
  }
}

console.log(getGrade(96)); // A
console.log(getGrade(82)); // B
console.log(getGrade(56)); // F

// Check if a score is passing (not an F)
function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade !== "F";
}

console.log(hasPassingGrade(100)); // true
console.log(hasPassingGrade(53));  // false
console.log(hasPassingGrade(87));  // true

// Build a message for the student with average, grade, and pass/fail
function studentMsg(totalScores, studentScore) {
  let passFail;

  // Decide if student passed or failed
  if (hasPassingGrade(studentScore)) {
    passFail = "You passed the course.";
  } else {
    passFail = "You failed the course.";
  }

  // Combine into full message
  return "Class average: " + getAverage(totalScores) + ". Your grade: " 
       + getGrade(studentScore) + ". " + passFail;
}

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
