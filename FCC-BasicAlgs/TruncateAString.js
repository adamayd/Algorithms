function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else if (num <= 3) {
    return str.slice(0, num) + '...';
  }
  return str.slice(0, num - 3) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);  // returns "A-tisket..."
truncateString("Peter Piper picked a peck of pickled peppers", 14);  // returns "Peter Piper..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);  // returns "A-tisket a-tasket A green and yellow basket"
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);  // returns "A-tisket a-tasket A green and yellow basket"
truncateString("A-", 1);  // returns "A..."
truncateString("Absolutely Longer", 2);  // returns "Ab..."