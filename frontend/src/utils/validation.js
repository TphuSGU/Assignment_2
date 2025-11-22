// validation.js
// Validation utilities

export const validateRequired = (value) => {
  if (!value || value.trim() === '') {
    return 'Trường này không được để trống';
  }
  return null;
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    return 'Email không hợp lệ';
  }
  return null;
};

export const validateMinLength = (value, minLength) => {
  if (value.length < minLength) {
    return `Phải có ít nhất ${minLength} ký tự`;
  }
  return null;
};

// validateUsername 
export const validateUsername = (username) => {
  if (!username || username.trim() === "") {
    return "Ten dang nhap khong duoc de trong";
  }

  if (username.length < 3) {
    return "Ten dang nhap phai co it nhat 3 ky tu";
  }

  if (username.length > 20) {
    return "Ten dang nhap khong duoc qua 20 ky tu";
  }

  const regex = /^[a-zA-Z0-9_]+$/;
  if (!regex.test(username)) {
    return "Ten dang nhap chi duoc chua chu cai, so va dau gach duoi";
  }

  return "";
};

// validatePassword 
export const validatePassword = (password) => {
  if (!password || password.trim() === "") {
    return "Mat khau khong duoc de trong";
  }

  if (password.length < 6) {
    return "Mat khau phai co it nhat 6 ky tu";
  }

  if (password.length > 30) {
    return "Mat khau khong duoc qua 30 ky tu";
  }

  const hasLetter = /[A-Za-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  if (!hasLetter || !hasDigit) {
    return "Mat khau phai chua ca chu va so";
  }

  return "";
};
