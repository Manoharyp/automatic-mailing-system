function sendEmail() {
    const to = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const text = document.getElementById('content').value;

    if (!to || !subject || !text) {
        alert("All fields are required.");
        return;
    }

    fetch('http://127.0.0.1:3000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, text })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => alert(data.message))
        .catch(error => console.error('Error:', error));
}
