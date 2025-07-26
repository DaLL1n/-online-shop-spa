const sendFeedbackForm = async (formData) => {
  try {
    const response = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Ошибка отправки: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Ошибка отправки формы: ${error}`);

    throw error;
  }
};

export default sendFeedbackForm;
