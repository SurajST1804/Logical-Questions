//14 .Write a program to Capitalize the first letter of a String?

function Capital(name) {
  var newName = name.charAt(0).toUpperCase() + name.slice(1);
  console.log(newName);
}
Capital("sikandar");
