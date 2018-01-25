function whatIsInAName(collections, source) {
  var arr = [];
  var searchKeys = Object.keys(source); // find key to search for 
  collections.forEach(collection => {
    var hasAllKeys = searchKeys.every(item => {
      return collection.hasOwnProperty(item) && collection[item] == source[item];
    });
    if (hasAllKeys) arr.push(collection);
  });
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });  // returns [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });  // returns [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });  // returns [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });  // returns [{ "a": 1, "b": 2, "c": 2 }]