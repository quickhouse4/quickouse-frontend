export const formatPrice = (price) => {
  if (price === undefined) {
    return ""; 
  }
  price = price.toString();

  var parts = price.split(".");
  var wholeNumber = parts[0];
  var decimal = parts[1] || "";

  var formattedNumber = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  var formattedPrice = formattedNumber + (decimal ? "." + decimal : "");

  return formattedPrice;
}
