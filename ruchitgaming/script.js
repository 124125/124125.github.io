// Contact Form Validation and Submission (optional)
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for your message! I'll get back to you soon.");
        // You can add AJAX or an API call here to send the form data
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
