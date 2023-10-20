export function getFormattedPrice(currencyID, priceAmt) {
  return priceAmt.toLocaleString("en-US", {
    style: "currency",
    currency: currencyID,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function getDishSpiceURL(spiceID) {
  return spiceID > 0 && spiceID < 4
    ? "/icons/Icon_Spice_" + spiceID + ".svg"
    : "icons/Icon_Spice_1.svg";
}

export function getDishClassURL(classID) {
  return classID.replace(/\s+/g, "").toLowerCase() === "nonveg"
    ? "/icons/Icon_Class_NonVeg.svg"
    : "/icons/Icon_Class_Veg.svg";
}

export function getDishCDN_Model(awsURL) {
  return (
    "https://drfl3tis6tn64.cloudfront.net/" +
    awsURL.substring(awsURL.lastIndexOf("/") + 1)
  );
}

export function getDishCDN_Poster(awsURL) {
  return (
    "https://d2wtj1o62pzq01.cloudfront.net/" +
    awsURL.substring(awsURL.lastIndexOf("/") + 1)
  );
}
