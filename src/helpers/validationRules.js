// src/rules/validationRules.js
const isHexColor = (val) => {
  const hexColorRegex = /^#([a-f0-9]{3}){1,2}$/i;
  return (
    hexColorRegex.test(val) ||
    "This field must be a valid hexadecimal color code."
  );
};

const isSelected = (val) => {
  return !!val || "Please select one";
};

const isRequired = (val) => {
  return (
    (val !== null && val !== undefined && val !== "") ||
    "This field is required."
  );
};

const minLength = (length) => {
  return (val) =>
    val.length >= length ||
    `This field must be at least ${length} characters long.`;
};

const maxLength = (length) => {
  return (val) =>
    val.length <= length ||
    `This field must be no more than ${length} characters long.`;
};

const minNumber = (min) => {
  return (val) => {
    if (!val && val !== 0) return true; // Allow empty values if the field is not required
    return val >= min || `The number must be at least ${min}.`;
  };
};

const maxNumber = (max) => {
  return (val) => {
    if (!val && val !== 0) return true; // Allow empty values if the field is not required
    return val <= max || `The number must be no more than ${max}.`;
  };
};

const isText = (val) => {
  return typeof val === "string" || "This field must be a text.";
};

const isNumber = (val) => {
  return (
    (!isNaN(parseFloat(val)) && isFinite(val)) || "This field must be a number."
  );
};

const longTextRequired = (val) => {
  return (val) => {
    if (!val && val.length !== 0) return true;
    return (!!val && val !== "<br>") || "Field is required";
  };
};

// Add more reusable rules as needed

export {
  isHexColor,
  isSelected,
  isRequired,
  minLength,
  maxLength,
  minNumber,
  maxNumber,
  isText,
  isNumber,
  longTextRequired,
};
