function spinalCase(str) {
  return str.replace(/[A-Z]/g, (match, offset) => {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }).replace(/[\s_]/g, '-').replace(/--/g, '-');
}

spinalCase("This Is Spinal Tap");  // returns "this-is-spinal-tap"
spinalCase("thisIsSpinalTap");  // returns "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show");  // returns "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh");  // returns "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things");  // returns "all-the-small-things"