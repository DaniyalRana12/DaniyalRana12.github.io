
var names = ["John", "Jane", "Mark", "Julia"];
function getGreeting(name) {
  if (name.charAt(0).toLowerCase() === 'j') {
    return "Goodbye " + name;
  } else {
    return "Hello " + name;
  }
}
for (var i = 0; i < names.length; i++) {
  var name = names[i];
  var message = getGreeting(name);
  console.log(message);
}
