const getLastName = (str) => {
  if (typeof str === "object") {
    const strToArray = str[0].name.toString().split(" ");
    return strToArray[strToArray.length - 1];
  }

  const strToArray = str.name.toString().split(" ");
  return strToArray[strToArray.length - 1];
};

exports.getLastName = getLastName;
