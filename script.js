document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let course = document.getElementById("course").value;
        let message = document.getElementById("message").value;

        let mailtoLink = `mailto:your-email@example.com?subject=Course Enrollment&body=Name: ${name}%0AEmail: ${email}%0ACourse: ${course}%0AMessage: ${message}`;

        window.location.href = mailtoLink; // Opens email client

        document.getElementById("confirmationMessage").style.display = "block"; // Show confirmation
        document.getElementById("contactForm").reset(); // Reset form fields
    });
});
