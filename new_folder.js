// Function to calculate the percentage and grade
function calculateGrade() {
    // Get the scores of the 10 subjects
    const Bengali = parseFloat(document.getElementById('Bengali').value);
    const English = parseFloat(document.getElementById('English').value);
    const History = parseFloat(document.getElementById('History').value);
    const Geography = parseFloat(document.getElementById('Geography').value);
    const Math = parseFloat(document.getElementById('Math').value);
    const Physics = parseFloat(document.getElementById('Physics').value);
    const Chemisty = parseFloat(document.getElementById('Chemistry').value);
    const Biology = parseFloat(document.getElementById('Biology').value);
    const Computer = parseFloat(document.getElementById('Computer').value);
    const Education = parseFloat(document.getElementById('Education').value);

    // Calculate the total score
    const totalScore = Bengali + English + History + Geography + Math + Physics + Chemisty + Biology + Computer + Education;

    // Calculate the percentage
    const percentage = (totalScore / 1000) * 100;

    // Determine the grade based on the percentage
    let grade;
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Result</h2>
        <p>Total Score: ${totalScore}</p>
        <p>Percentage: ${percentage}%</p>
        <p>Grade: ${grade}</p>
    `;
}

// Add event listener to the form submit button
const form = document.getElementById('grade-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateGrade();
});