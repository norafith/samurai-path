const createValidation = {
  maxSymbolsCheck(maxAmount) {
    return function (string) {
      return string.length < maxAmount;
    };
  },

  loginPasswordCheck() {
    return function (string) {
      const regEx = /[a-zA-Z0-9@.]/;
      return string.match(regEx);
    };
  },
};

function createFormTest(maxSymbolsAmount) {
  return function formTest(formValues) {
    const errors = {};

    const maxSymbolsCheck = createValidation.maxSymbolsCheck(maxSymbolsAmount);
    const loginPasswordCheck = createValidation.loginPasswordCheck();

    for (let item in formValues) {
      if (!maxSymbolsCheck(formValues[item])) {
        errors[item] = `Max length is ${maxSymbolsAmount}.`;
      }

      if (item === "login" || item === "password") {
        if (!loginPasswordCheck(formValues[item])) {
          errors[item] = "Wrong format.";
        }
      }
    }

    return errors;
  };
}

export default createFormTest;
