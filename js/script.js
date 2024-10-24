// Welcome message with name
document.getElementById('name').addEventListener('input', function(e) {
    document.getElementById('welcome-message').textContent = 
        'Hi ' + (e.target.value || 'Welcome');
});

// Form validation
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Phone validation
    const phonePattern = /^\d{10,}$/;
    if (!phonePattern.test(phone.replace(/[^0-9]/g, ''))) {
        alert('Please enter a valid phone number (minimum 10 digits)');
        return false;
    }

    // If validation passes, show the form values
    alert(
        'Form Submitted Successfully!\n\n' +
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + phone + '\n' +
        'Message: ' + message
    );
    
    return true;
}