export default function getLastName(arr) {

  const multipleNames = [];

  
  if(arr.author.length > 1) {
    for(let obj of arr.author) {
      const strToArray = obj.name.toString().split(" ");
      
      const strToArrayInitial = obj.name.toString().split(" ");
      strToArrayInitial.pop();
      const initialsArray = [];
      for (let i = 0; i < strToArrayInitial.length; i++) {
        initialsArray.push(strToArrayInitial[i][0]);
      }
  
      const resultString = initialsArray.join(".") + ".";

      multipleNames.push(" " + strToArray[strToArray.length - 1] + ", " + resultString);
    }
    return multipleNames;
  }
  
  if ((arr.author && Array.isArray(arr.author)) && arr.author[0].name) {
    const strToArray = arr.author[0].name.toString().split(" ");
    return strToArray[strToArray.length - 1];
  
  }
  
  
  
  
  
  if (arr.author && Array.isArray(arr.author)) {
     if(Array.isArray(arr.author)) {
       return arr.author[0];
     }
    const strToArray = arr.author[0].name.toString().split(" ");
    return strToArray[strToArray.length - 1];
  } else if (arr.author) {
    const strToArray = arr.author.name.split(" ");
    return strToArray[strToArray.length - 1];
  } else {
    return;
  }
}
