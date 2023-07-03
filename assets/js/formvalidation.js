document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields must be filled out.');
        return false;
    }

    if (!email.includes('@')) {
        alert('Invalid email address.');
        return false;
    }

    e.target.submit();
});