function isValidIPv4(str) {
  const octets = str.split(".");
  if (octets.length !== 4) {
    return false;
  }
  for (let i = 0; i < octets.length; i++) {
    const octet = octets[i];
    if (!/^\d+$/.test(octet)) {
      return false;
    }
    const num = parseInt(octet, 10);
    if (num < 0 || num > 255) {
      return false;
    }
    if (octet !== "0" && octet.startsWith("0")) {
      return false;
    }
  }
  return true;
}

module.exports = isValidIPv4;
