// We have provided a function isValidPassword in the passwordValidation.js file. This function receives a password and your job is to check if it is a valid one or not.

// A password is valid when it satisfies the following criteria

// The password is exactly 10 digits or characters;
// The password is composed by digits and numbers;
// The password does not contain special characters like @, /, #, etc;
// The password contain a mix of uppercase and lowercase characters;
// Whenever we have a sequence of numbers, these can not be sequences of directly ascending or descending digits, ex: it would fail for a12345678A but not for a88765432A;
// it is not a forbidden password (in the passwordValidation.js file we provide an array with the forbidden passwords);
// it consists of at least 4 different digits/characters, e.g. BBBBcc1111 is not allowed, since it consists of only 3 types of symbols: B, c and 1;
export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  if (typeof password !== "string") password = String(password);

  // 1. Forbidden passwords
  if (forbiddenPasswords.includes(password)) return false;
  // 2. Exactly 10 characters, only letters and digits
  if (!/^[A-Za-z0-9]{10}$/.test(password)) return false;
  // 3. Must contain at least one lowercase and one uppercase
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) return false;
  // 4. Must contain at least one digit
  if (!/\d/.test(password)) return false;
  // 5. Cannot be only numbers
  if (/^\d+$/.test(password)) return false;
  // 6. At least 4 different characters
  const uniqueChars = new Set(password);
  if (uniqueChars.size < 4) return false;
  // 7. Check ascending/descending numeric sequences
  const digits = password.match(/\d+/g);
  if (digits) {
    for (const seq of digits) {
      for (let i = 0; i < seq.length - 1; i++) {
        const diff = seq.charCodeAt(i + 1) - seq.charCodeAt(i);
        if (diff === 1 || diff === -1) return false;
      }
    }
  }

  return true;
}
