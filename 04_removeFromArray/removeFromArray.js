const removeFromArray = function (array, remove1, remove2 = null) {
  const index1 = array.indexOf(remove1);
  const index2 = array.indexOf(remove2);

  array.splice(index1, 1);
  if (remove2 !== null) {
    array.splice(index2, 1);
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1, 2, 3, 4], 3));
