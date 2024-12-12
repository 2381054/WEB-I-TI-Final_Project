document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form elements
    const fullName = document.getElementById('fullName').value.trim();
    const studentId = document.getElementById('studentId').value.trim();
    const email = document.getElementById('email').value.trim();
    const facultyMajor = document.getElementById('facultyMajor').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();


    let isValid = true;

     // Validate all fields are filled
     if (!fullName || !studentId || !email || !facultyMajor || !dob || !gender || !address || !phone) {
        alert("Please fill in all fields.");
        isValid = false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email && !emailRegex.test(email)){
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Validate phone number (only numbers and min length)
    const phoneRegex = /^[0-9]+$/;
    if(phone && (!phoneRegex.test(phone) || phone.length < 8)){
        alert("Please enter a valid phone number with minimum 8 digits.");
        isValid = false;
    }

     if(isValid){
         alert("Registration Successful!")
          document.getElementById('registrationForm').reset();
     }
});
 // Highlight inputs on focus
const inputs = document.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.classList.add('ring-2', 'ring-[#387ed1]');
    });
     input.addEventListener('blur', function() {
        this.classList.remove('ring-2', 'ring-[#387ed1]');
    });
});