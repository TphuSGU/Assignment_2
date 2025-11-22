// Validation utilities

export const validateRequired = (value) => {
  if (!value || value.trim() === '') {
    return 'This field is required';
  }
  return null;
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    return 'Invalid email format';
  }
  return null;
};

export const validateMinLength = (value, minLength) => {
  if (value.length < minLength) {
    return `Must be at least ${minLength} characters`;
  }
  return null;
};



 // validateUsername 
 
export const validateUsername = (username) => {
  if (!username || username.trim() === "") {
    return "Username does not empty";
  }

  if (username.length < 3) {
    return "Username must be at least 3 characters";
  }

  if (username.length > 20) {
    return "Username must not exceed 20 characters";
  }

  
  const regex = /^[a-zA-Z0-9_]+$/;
  if (!regex.test(username)) {
    return "Username can only contain letters, numbers, and underscores";
  }

  return "";
};

  // validatePassword 
 
export const validatePasswordd = (password) => {
  if (!password || password.trim() === "") {
    return "Password must not be empty";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  if (password.length > 30) {
    return "Password must not exceed 30 characters";
  }

  const hasLetter = /[A-Za-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  if (!hasLetter || !hasDigit) {
    return "Password must contain both letters and numbers";
  }

  return "";
};