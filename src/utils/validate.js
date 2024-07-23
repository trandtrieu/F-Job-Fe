// export const validatePassword = (password) => {
//   const regex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
//       password
//     );

//   if (!regex) {
//     return "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
//   }
//   return null;
// };

export const validatePassword = (password) => {

  
  if (!hasMinimumLength(password)) {
    return "Password must be at least 8 characters long.";
  }

  if (!hasUppercaseLetter(password)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!hasLowercaseLetter(password)) {
    return "Password must contain at least one lowercase letter.";
  }

  if (!hasNumber(password)) {
    return "Password must contain at least one number.";
  }

  if (!hasSpecialCharacter(password)) {
    return "Password must contain at least one special character.";
  }



  return null; // No errors
};

const hasMinimumLength = (password) => {
  return password.length >= 8;
};

const hasUppercaseLetter = (password) => {
  return /[A-Z]/.test(password);
};

const hasLowercaseLetter = (password) => {
  return /[a-z]/.test(password);
};

const hasNumber = (password) => {
  return /\d/.test(password);
};

const hasSpecialCharacter = (password) => {
  return /[!@#$%^&*?]/.test(password); // Add more special characters as needed
};

export const validateForm = (formData) => {
  const newErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const vietnameseNameRegex = /^[\p{L}\s']+$/u;

  if (!formData.fullName) {
    newErrors.fullName = "Your name is required.";
  } else if (formData.fullName.length < 2) {
    newErrors.fullName = "Your name must be at least 2 characters.";
  } else if (!vietnameseNameRegex.test(formData.fullName)) {
    newErrors.fullName =
      "Your name must contain only Vietnamese letters and spaces.";
  }

  if (!formData.email) {
    newErrors.email = "Email is required.";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Email is not valid.";
  }

  if (!formData.phone) {
    newErrors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(formData.phone)) {
    newErrors.phone = "Phone number is not valid.";
  }

  if (formData.dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(formData.dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
      newErrors.dateOfBirth = "You must be at least 18 years old.";
    }
  }

  return newErrors;
};
