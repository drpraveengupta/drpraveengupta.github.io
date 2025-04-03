document.addEventListener("DOMContentLoaded", function() {
    // Load header and footer dynamically
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});

// Function to collect student feedback
function submitFeedback() {
    let feedback = prompt("Please enter your feedback:");
    if (feedback) {
        alert("Thank you for your feedback!");
    }
}
