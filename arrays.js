var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  return [element,...array];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift('element');
}
function addElementToEndOfArray(array, element){
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}
function accessElementInArray(array, element){
  return array[2];
}
function removeElementFromBeginningOfArray(array, element){
  return array.slice(1);
}
function removeElementFromEndOfArray(array, element){
  return array.slice(0, array.length - 1);
}
