// Function to log in a user
async function loginUser(event) {
  event.preventDefault(); // Prevent the default form submission

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const { token } = await response.json();
    localStorage.setItem('authToken', token);
    alert('Login successful', 'alert-success');
    // Redirect or perform any other action after successful login
    window.location.href = 'items.html';

  } catch (error) {
    console.error('Error logging in:', error);
    alert('Login failed. Please try again.', 'alert-danger');
  }
}

document.getElementById('login-form').addEventListener('submit', loginUser);



