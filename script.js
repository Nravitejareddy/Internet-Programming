// script.js

document.getElementById('registrationForm').onsubmit = function(e) {
    const contactNumber = document.getElementById('contactNumber').value;
    
    // Validate contact number (should be exactly 10 digits)
    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(contactNumber)) {
        alert("Please enter a valid 10-digit contact number.");
        e.preventDefault(); // Prevent form submission
        return false;
    }

    return true; // Allow form submission
};
