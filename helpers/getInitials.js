const getInitials = (str) => {
  if (typeof str === "object") {
    const strToArray = str[0].name.toString().split(" ");
    strToArray.pop();
    const initialsArray = [];
    for (let i = 0; i < strToArray.length; i++) {
      initialsArray.push(strToArray[i][0]);
    }

    const resultString = initialsArray.join(".") + ".";
    return resultString;
  }

  const strToArray = str.name.toString().split(" ");
  strToArray.pop();
  const initialsArray = [];
  for (let i = 0; i < strToArray.length; i++) {
    initialsArray.push(strToArray[i][0]);
  }

  const resultString = initialsArray.join(".") + ".";
  return resultString;
};

exports.getInitials = getInitials;
