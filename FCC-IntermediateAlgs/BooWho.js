function booWho(bool) {
  if (typeof(bool) === "boolean") return true;
  return false;
}

booWho(true);  // returns true
booWho(false);  // returns true
booWho([1, 2, 3]);  // returns false
booWho([].slice);  // returns false
booWho({ "a": 1 });  // returns false
booWho(1);  // returns false
booWho(NaN);  // returns false
booWho("a");  // returns false
booWho("true");  // returns false
booWho("false");  // returns false