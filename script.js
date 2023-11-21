document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('licenseForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // Submit the form to the server
            alert('License allocated successfully!');
            form.reset();
        }
    });

    function validateForm() {
        const userName = document.getElementById('userName').value.trim();
        const licenseKey = document.getElementById('licenseKey').value.trim();
        const expirationDate = document.getElementById('expirationDate').value.trim();
        const numLicenses = document.getElementById('numLicenses').value;

        // Basic validation example (you can add more complex validation logic)
        if (!userName || !licenseKey || !expirationDate || numLicenses <= 0) {
            alert('Please fill in all fields and provide a valid number of licenses.');
            return false;
        }

        return true;
    }
});
