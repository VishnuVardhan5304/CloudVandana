function submitForm() {
    // Validate the form
    if (validateForm()) {
        // Display the popup with submitted values
        displayPopup();
        // Reset the form after displaying the popup
        resetForm();
    }
}

function validateForm() {
    // Implement your validation logic here
    // For simplicity, this example assumes all fields are valid
    return true;
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function displayPopup() {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = Array.from(document.getElementsByName('gender'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
        .join(', ');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Generate HTML content for the popup
    const popupHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    popupContent.innerHTML = popupHTML;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
