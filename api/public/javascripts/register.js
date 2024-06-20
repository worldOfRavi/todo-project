// Function to register a new user
async function registerUser(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      console.log('Registration successful! You can now log in.', 'alert-success');
      // Redirect or perform any other action after successful registration
      window.location.href = 'login.html';
      console.log("test")
    } catch (error) {
      console.error('Error registering user:', error);
      console.log('Registration failed. Please try again.', 'alert-danger');
    }
  }

  document.getElementById('register-form').addEventListener('submit', registerUser);

