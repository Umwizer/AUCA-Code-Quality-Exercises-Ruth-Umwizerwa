/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if (typeof password !== "string") return 0;

  let passwordPoints = 0;
  let i = 0;

  while (i < password.length) {
    let count = 1;

    // Count consecutive identical characters
    while (i + 1 < password.length && password[i] === password[i + 1]) {
      count++;
      i++;
    }
    // Add penalties
    if (count === 2) passwordPoints += 1;
    else if (count >= 3) passwordPoints += 2;
    i++;
  }

  return passwordPoints;
}
