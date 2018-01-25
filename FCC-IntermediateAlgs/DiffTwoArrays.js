function diffArray(arr1, arr2) {
  
  var newArr = [];
  
  function filterArray(arr1, arr2) {
    arr1.forEach(function(query) {
      if (arr2.indexOf(query) < 0) {
        newArr.push(query); 
      }
    });
  }
  
  filterArray(arr1, arr2);
  filterArray(arr2, arr1);
  return(newArr);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);  // returns an array.
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);  // returns ["pink wool"].
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);  // returns ["diorite", "pink wool"].
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);  // returns [].
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);  // returns [4].
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);  // returns ["piglet", 4].
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);  // returns ["snuffleupagus", "cookie monster", "elmo"].
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);  // returns [1, "calf", 3, "piglet", 7, "filly"]