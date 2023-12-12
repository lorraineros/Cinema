const baseUrl = 'https://api.kvikmyndir.is';

export async function authenticateUser() {
  try {
    const response = await fetch(`${baseUrl}/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic YW5oMDUxMjp0aHV2dTUxMg=='
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const token = await response.json().token;

    return token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
}
