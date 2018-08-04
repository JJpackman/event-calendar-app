const FormValidator = () => {
  const _rules = Symbol();
  const _fieldsWithErrors = Symbol();

  class FormValidator {
    constructor() {
      this[_rules] = {};
      this[_fieldsWithErrors] = [];
    }

    addRule(fieldName, patterns) {
      this[_rules][fieldName] = {
        patterns
      };
    }

    removeRule(fieldName) {
      this.hasRule(fieldName) && delete this[_rules][fieldName];
    }

    validateField(fieldName, value, isRequired) {
      const isValidRequired = p => p.test(value) === true;
      const isValidNonRequired = p => value === '' || isValidRequired(p);
      const result = this[_rules][fieldName].patterns.some(isRequired ? isValidRequired : isValidNonRequired);

      if (!result) {
        this[_fieldsWithErrors].push(fieldName);
      } else {
        this[_fieldsWithErrors] = this[_fieldsWithErrors].filter(field => field !== fieldName);
      }

      return result;
    }

    get fieldsWithErrors() {
      return this[_fieldsWithErrors];
    }

    hasRule(fieldName) {
      return this[_rules].hasOwnProperty(fieldName);
    }
  }

  return FormValidator;
};

export default FormValidator();
