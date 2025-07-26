const createValidator = (form, inputsFields) => {
  const validator = new JustValidate(form, {
    validateBeforeSubmitting: true,
  });

  validator
    .addField(inputsFields.name, rules.nameField)
    .addField(inputsFields.email, rules.emailField)
    .addField(inputsFields.checkbox, rules.checkboxField);

  return validator;
};

const rules = {
  nameField: [
    { rule: 'required', errorMessage: 'Введите ваше имя' },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'Максимальная длина - 20 символов',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимальная длина - 3 символа',
    },
  ],
  emailField: [
    { rule: 'required', errorMessage: 'Введите вашу почту' },
    {
      rule: 'customRegexp',
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      errorMessage: 'Почта введена неверно',
    },
  ],
  checkboxField: [{ rule: 'required', errorMessage: 'Согласие обязательно' }],
};

export default createValidator;
