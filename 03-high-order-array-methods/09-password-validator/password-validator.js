function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  return hasUppercase && hasLowercase && hasDigit;
}

module.exports = validatePassword;
