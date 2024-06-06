const formatCurrency = (value, includeDecimals = true) => {
  if (isNaN(value)) return "";
  let formattedValue = parseFloat(value).toFixed(includeDecimals ? 2 : 0);
  return formattedValue.replace(/\d(?=(\d{3})+(?:\.\d{0,2})?$)/g, "$&,");
};

export { formatCurrency };
