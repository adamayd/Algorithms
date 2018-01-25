function titleCase(str) {
  str = str.toLowerCase().split(' ').map(word => {
      return word.replace(/\w/, (letter) => {
        return letter.toUpperCase();
      });
  }).join(' ');
  return str;
}

titleCase("I'm a little tea pot");  // returns "I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt");  // returns "Short And Stout"
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");  // returns "Here Is My Handle Here Is My Spout"