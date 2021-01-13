export default function getInitials(arr) {
 
  if(!arr.author) {
    return;
  }
  
  if ((arr.author && Array.isArray(arr.author)) && arr.author[0].name) {

    // if(Array.isArray(arr.author)) {
    //   return;
    // }

    const strToArray = arr.author[0].name.toString().split(" ");
    strToArray.pop();
    const initialsArray = [];
    for (let i = 0; i < strToArray.length; i++) {
      initialsArray.push(strToArray[i][0]);
    }

    const resultString = initialsArray.join(".") + ".";
    return resultString + ", ";
  } else if (arr.author.name) {
    const strToArray = arr.author.name.split(" ");
    strToArray.pop();
    const initialsArray = [];
    for (let i = 0; i < strToArray.length; i++) {
      initialsArray.push(strToArray[i][0]);
    }

    const resultString = initialsArray.join(".") + ".";
    return resultString + ", ";
  } else if (arr.author[0].name) {

    const strToArray = arr.author[0].name.split(" ");
    strToArray.pop();
    const initialsArray = [];
    for (let i = 0; i < strToArray.length; i++) {
      initialsArray.push(strToArray[i][0]);
    }

    const resultString = initialsArray.join(".") + ".";
    return resultString + ", ";
  } else {
    return arr["@type"];
  }
}
