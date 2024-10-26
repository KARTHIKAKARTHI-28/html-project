function showServiceDetails(serviceName) {
    alert(`You selected ${serviceName}`);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-message').textContent = 'Thank you for your message!';
});