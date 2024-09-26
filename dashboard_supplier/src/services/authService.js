//for handling authentication logic
export const loginUser = async (emailId, password) => {
    try {
      const response = await fetch('http://localhost:8080/login/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailId, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };