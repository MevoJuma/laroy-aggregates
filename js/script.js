// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields!');
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
