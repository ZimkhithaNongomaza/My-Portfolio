// Initialize EmailJS with your User ID
(function() {
    emailjs.init('service_raapvsb'); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Collect form data
    const form = event.target;
    const formData = new FormData(form);

    // Get the values from the form
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Send the email using EmailJS
    emailjs.sendForm('service_raapvsb', 'template_wgo925r', form)
        .then(function(response) {
            // Success callback
            alert('Your message has been sent successfully!');
            form.reset(); // Reset the form after successful submission
        }, function(error) {
            // Error callback
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS error:', error);
        });
});
