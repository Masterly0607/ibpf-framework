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

const checkPaymentStatusColor = (paymentString) => {
  let key = paymentString || "pending";
  let data = {
    color: "grey-11",
    icon: "mdi",
  };
  // paid (teal-11), unpaid (red-11), pending (amber-11), reject (red-12), cancel (red-12)
  switch (key) {
    case "paid":
      data.color = "teal";
      data.icon = "mdi-check";
      break;
    case "unpaid":
      data.color = "red";
      data.icon = "mdi-close";
      break;
    case "pending":
      data.color = "orange";
      data.icon = "mdi-exclamation";
      break;
    case "reject" || "cancel":
      color = "red";
      data.icon = "mdi-close-octagon";
      break;
    default:
      break;
  }

  return data;
};

export { formatCurrency, formatDate, checkPaymentStatusColor };
