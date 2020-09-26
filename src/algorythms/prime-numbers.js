/**
 * Check if provided number is prime or not
 * @param {providedNumber} providedNumber - The second color, in hexadecimal format.
 * @return {boolean} determine if provided number is boolean or not.
 */

const isPrimeNuber = (providedNumber) => {
  if (providedNumber < 2) {
    return false;
  } else if (providedNumber === 2) {
    return true;
  }

  let itteratorPtr = 3;

  /**
   * providedNumber could not be devided by providedNumber larger than half of it
   * if providedNumber is not divided by 2 and 3
   * also providedNumber could not be devided by providedNumber larger than 1 / 3 of it
   */
  const limit = providedNumber / 3;

  while (itteratorPtr < limit) {
    if (providedNumber % itteratorPtr === 0) {
      return false;
    }
    itteratorPtr += 2;
  }
  return true;
};

export default isPrimeNuber;
