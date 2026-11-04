
// ADVENTURE ESCAPE SA CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const activity = document.getElementById("activity").value;
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    let errors = [];

    // CHECK NAME
    if (name === "") {
      errors.push("Please enter your full name.");
    }

    // CHECK EMAIL
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    // CHECK PHONE NUMBER
    if (!/^[0-9+\s()-]{7,20}$/.test(phone)) {
      errors.push("Please enter a valid phone number.");
    }

    // CHECK ADVENTURE
    if (activity === "") {
      errors.push("Please select an adventure.");
    }

    // CHECK MESSAGE
    if (message.length < 5) {
      errors.push("Please enter a message of at least 5 characters.");
    }

    // DISPLAY ERRORS
    if (errors.length > 0) {

      formMessage.className = "error-message";
      formMessage.innerHTML = errors.join("<br>");

    } else {

      formMessage.className = "success-message";

      formMessage.textContent =
        "Your form has been completed successfully. This is a demonstration; your message has not been sent.";

      contactForm.reset();

    }

  });

}
