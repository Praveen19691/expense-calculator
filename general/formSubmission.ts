// component/RegisterPage/formSubmission.ts
export const submitForm = async (
  data: { username: string; email: string; password: string; confirmPassword: string },
  setSuccessMessage: (message: string) => void,
  setEmailError: (message: string) => void
): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSuccessMessage('Data saved successfully');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } else if (response.status === 400) {
      setEmailError('Email ID already exists');
      setTimeout(() => {
        setEmailError('');
      }, 5000);
    } else {
      console.error('Error saving data');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};