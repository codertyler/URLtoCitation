export default function getLastName(arr) {
  console.log(typeof arr);
  if (arr.author && Array.isArray(arr.author)) {
    const strToArray = arr.author[0].name.toString().split(" ");
    return strToArray[strToArray.length - 1];
  } else if (arr.author) {
    const strToArray = arr.author.name.split(" ");
    return strToArray[strToArray.length - 1];
  } else {
    return;
  }
}
