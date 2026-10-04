// catches both button clicks and enter key submits
document.getElementById('loginForm').addEventListener('submit', function(e) {
    // stops page reload to handle validation via js
    e.preventDefault();
    
    // removes accidental whitespace before checking format
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // clears old status alerts from previous attempts
    messageDiv.textContent = '';
    messageDiv.className = '';

    // --- Client-Side Validation ---
    // halts early if required values are missing
    if (!email || !password) {
        // stops further execution on blank input
        messageDiv.textContent = 'Client Error: All fields are required.';
        messageDiv.className = 'error';
        return;
    }

    // rejects malformed emails early on the client
    if (!email.includes('@')) {
        messageDiv.textContent = 'Client Error: Invalid email format (missing "@").';
        messageDiv.className = 'error';
        return;
    }

    // blocks weak passwords before reaching the server
    if (password.length < 8) {
        messageDiv.textContent = 'Client Error: Password must be at least 8 characters.';
        messageDiv.className = 'error';
        return;
    }

    // demonstrates defense-in-depth across application layers
    simulateServerAuthentication(email, password, messageDiv);
});

function simulateServerAuthentication(email, password, outputElement) {
    // normalizes casing to prevent bypass tricks
    const sanitizedEmail = String(email).toLowerCase();
    
    // re-verifies input because client checks can be bypassed
    if (!sanitizedEmail.includes('@') || password.length < 8) {
        // conceals specific failure details from potential attackers
        outputElement.textContent = 'Server Error: Authentication failed due to invalid payload.';
        outputElement.className = 'error';
        return;
    }

    // uses textcontent instead of innerhtml to prevent xss execution
    outputElement.textContent = 'Login successful (Client & Server Validation Passed)';
    outputElement.className = 'success';
}