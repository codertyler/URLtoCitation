export default function getInitials(arr) {
  if (arr.author && Array.isArray(arr.author)) {
    const strToArray = arr.author[0].name.toString().split(" ");
    strToArray.pop();
    const initialsArray = [];
    for (let i = 0; i < strToArray.length; i++) {
      initialsArray.push(strToArray[i][0]);
    }

    const resultString = initialsArray.join(".") + ".";
    return resultString;
  } else if (arr.author) {
    const strToArray = arr.author.name.split(" ");
    strToArray.pop();
    const initialsArray = [];
    for (let i = 0; i < strToArray.length; i++) {
      initialsArray.push(strToArray[i][0]);
    }

    const resultString = initialsArray.join(".") + ".";
    return resultString;
  } else {
    return arr["@type"];
  }
}
