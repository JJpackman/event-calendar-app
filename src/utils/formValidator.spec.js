import FormValidator from './formValidator';

describe('form validator', () => {
  let validator;

  beforeEach(() => {
    validator = new FormValidator();
  });

  it('should handle hasRule() return false if rule for field doesn\'t exist', () => {
    expect(validator.hasRule('initials')).toBeFalsy();
  });

  it('should handle hasRule() return true if rule for field exist', () => {
    validator.addRule('initials', [/^[A-Z]\.[A-Z]\.$/]);
    expect(validator.hasRule('initials')).toBeTruthy();
  });

  it('should handle addRule()', () => {
    expect(validator.hasRule('initials')).toBeFalsy();

    validator.addRule('initials', [/^[A-Z]\.[A-Z]\.$/]);
    expect(validator.hasRule('initials')).toBeTruthy();
  });

  it('should handle removeRule()', () => {
    validator.addRule('initials', [/^[A-Z]\.[A-Z]\.$/]);
    expect(validator.hasRule('initials')).toBeTruthy();

    validator.removeRule('initials');
    expect(validator.hasRule('initials')).toBeFalsy();
  });

  it('should handle fieldsWithErrors read only, not mutating', () => {
    expect(validator.fieldsWithErrors.length).toEqual(0);

    validator.fieldsWithErrors.push['initials'];

    expect(validator.fieldsWithErrors.length).toEqual(0);
  });

  it('should handle validateField() throw Error if rule for such field doesn\'t exist', () => {
    expect(validator.validateField.bind(validator, 'name')).toThrowError(TypeError);
  });

  it('should handle validateField() not throw Error if rule for such field exist, but \'value\' and \'isRequired\' params are not specified', () => {
    validator.addRule('initials', [/^[A-Z]\.[A-Z]\.$/]);
    expect(validator.validateField.bind(validator, 'initials')).not.toThrow();
  });

  it('should handle validateField() should return true for required field if field\'s value is correspond to its\' rule', () => {
    validator.addRule('initials', [/^[A-Z]\.[A-Z]\.$/]);
    expect(validator.validateField('initials', 'I.V.', true)).toBeTruthy();
  });

  it('should handle validateField() should return false for required field if field\'s value isn\'t correspond to its\' rule', () => {
    validator.addRule('initials', [/^[A-Z]\.[A-Z]\.$/]);

    expect(validator.validateField('initials', 'I.a.', true)).toBeFalsy();
    expect(validator.validateField('initials', 'I.A', true)).toBeFalsy();
    expect(validator.validateField('initials', 'm.G.', true)).toBeFalsy();
    expect(validator.validateField('initials', 'k.C', true)).toBeFalsy();
  });

  it('should handle validateField() should return true for non-required field if field\'s value is correspond to its\' rule or is equal to empty string', () => {
    validator.addRule('initials', [/^[A-Z]\.[A-Z]\.$/]);

    expect(validator.validateField('initials', 'I.V.', false)).toBeTruthy();
    expect(validator.validateField('initials', '', false)).toBeTruthy();
  });

  it('should handle validateField() should return false for non-required field if field\'s value isn\'t correspond to its\' rule or isn\'t equal to empty string', () => {
    validator.addRule('initials', [/^[A-Z]\.[A-Z]\.$/]);

    expect(validator.validateField('initials', 'I.v', false)).toBeFalsy();
    expect(validator.validateField('initials', undefined, false)).toBeFalsy();
    expect(validator.validateField('initials', null, false)).toBeFalsy();
  });
});
