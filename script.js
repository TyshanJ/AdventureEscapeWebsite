
// =====================================
// ADVENTURE ESCAPE SA
// CONTACT FORM VALIDATION
// =====================================

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

    if (name === "") {
      errors.push("Please enter your full name.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (!/^[0-9+\s()-]{7,20}$/.test(phone)) {
      errors.push("Please enter a valid phone number.");
    }

    if (activity === "") {
      errors.push("Please select an adventure.");
    }

    if (message.length < 5) {
      errors.push("Please enter a message of at least 5 characters.");
    }

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


// =====================================
// ADVENTURE ESCAPE SA
// BOOKING DISCOUNT CALCULATOR
// =====================================

const discountForm = document.getElementById("discountForm");

if (discountForm) {

  discountForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const bookingCount = Number(
      document.getElementById("bookingCount").value
    );

    const totalPrice = Number(
      document.getElementById("totalPrice").value
    );

    const result = document.getElementById("discountResult");

    // CHECK INPUTS

    if (
      !Number.isInteger(bookingCount) ||
      bookingCount < 1 ||
      !Number.isFinite(totalPrice) ||
      totalPrice <= 0
    ) {

      result.className = "error-message";
      result.textContent =
        "Please enter at least 1 booking and a valid total price.";

      return;
    }

    // CALCULATE DISCOUNT

    let discountRate = 0;

    if (bookingCount === 2) {
      discountRate = 0.05;
    } else if (bookingCount === 3) {
      discountRate = 0.10;
    } else if (bookingCount >= 4) {
      discountRate = 0.15;
    }

    const discountAmount = totalPrice * discountRate;
    const finalPrice = totalPrice - discountAmount;

    // FORMAT SOUTH AFRICAN CURRENCY

    const formatPrice = amount =>
      "R" + amount.toFixed(2);

    // DISPLAY RESULT

    result.className = "success-message";

    result.textContent =
      "Discount: " + (discountRate * 100) + "% | " +
      "You save: " + formatPrice(discountAmount) + " | " +
      "Final price: " + formatPrice(finalPrice);

  });

}
