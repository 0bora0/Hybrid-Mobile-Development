function validateEmail(email) {
  const atSymbolIndex = email.indexOf("@");
  if (atSymbolIndex > 0 && email.indexOf(".", atSymbolIndex) > atSymbolIndex) {
    return true;
  }
  return false;
}

module.exports = validateEmail;
