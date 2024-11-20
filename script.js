// script.js

function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let contactNumber = document.getElementById("contactNumber").value;

    // Validate that none of the fields are empty
    if (firstName === "" || lastName === "" || username === "" || password === "" || address === "" || contactNumber === "") {
        alert("All fields must be filled out.");
        return false;
    }

    // Validate the contact number (only numbers allowed)
    let contactNumberPattern = /^[0-9]{10}$/;
    if (!contactNumber.match(contactNumberPattern)) {
        alert("Please enter a valid 10-digit contact number.");
        return false;
    }

    // Password validation: minimum 6 characters
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // If everything is valid, return true to submit the form
    alert("Registration successful!");
    return true;
}
