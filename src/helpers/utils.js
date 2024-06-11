import {
  format,
  formatDistanceToNow,
  parseISO,
  isBefore,
  subMonths,
} from "date-fns";

const formatCurrency = (value, includeDecimals = true) => {
  if (isNaN(value)) return "";
  let formattedValue = parseFloat(value).toFixed(includeDecimals ? 2 : 0);
  return formattedValue.replace(/\d(?=(\d{3})+(?:\.\d{0,2})?$)/g, "$&,");
};

const formatDate = (dateString) => {
  const date = parseISO(dateString);
  const sixMonthsAgo = subMonths(new Date(), 6);

  if (isBefore(date, sixMonthsAgo)) {
    return format(date, "dd-MMM-yyyy");
  } else {
    return formatDistanceToNow(date, { addSuffix: true });
  }
};

export { formatCurrency, formatDate };
