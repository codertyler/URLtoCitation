
const testData = "John Doe Brother";

const getInitials = (str) => {
  const strToArray = str.split(" ");
  strToArray.pop();
  const initialsArray = [];
  for (let i = 0; i < strToArray.length; i ++) {
    // initialsArray.push(strToArray[i][0]);
  }

  // console.log(initialsArray.toString(" "));

}

getInitials(testData);
