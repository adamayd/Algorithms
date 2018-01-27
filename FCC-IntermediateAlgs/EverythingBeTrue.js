function truthCheck(collection, pre) {
  return collection.every((truth, idx) => collection[idx][pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") ;  // returns true
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") ;  // returns false
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") ;  // returns false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") ;  // returns false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") ;  // returns true
truthCheck([{"single": "yes"}], "single") ;  // returns true
truthCheck([{"single": ""}, {"single": "double"}], "single") ;  // returns false
truthCheck([{"single": "double"}, {"single": undefined}], "single") ;  // returns false
truthCheck([{"single": "double"}, {"single": NaN}], "single") ;  // returns false
