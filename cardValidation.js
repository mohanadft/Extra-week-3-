function isValid(cardNumber) {
  if (typeof cardNumber === "number" && cardNumber.toString().length == 16) {
    let sum = 0;
    for (let i = 0; i < cardNumber.toString().length; i++) {
      if (typeof parseInt(cardNumber.toString()[i]) === "number") {
        if (
          Number(cardNumber.toString()[cardNumber.toString().length - 1]) %
            2 ===
          0
        ) {
          if (sum > 16) {
            return true;
          }
        }
      }
      sum += Number(cardNumber.toString());
    }
  }
  return false;
}
