fetch("http://localhost:3001/profile")
  .then((profile) => profile.json())
  .then((profileJSON) => display(profileJSON));
function display(content) {
  document.getElementById("importedHTML").innerHTML = content.fullName;
}

fetch("http://localhost:3001/profile")
  .then((profile) => profile.json())
  .then((profileJSON) => username(profileJSON));
function username(content) {
  document.getElementById("username").innerHTML = content.username;
}

fetch("http://localhost:3001/profile")
  .then((profile) => profile.json())
  .then((profileJSON) => languages(profileJSON));
function languages(content) {
  document.getElementById("languages").innerHTML = content.languages;
}

fetch("http://localhost:3001/profile")
  .then((profile) => profile.json())
  .then((profileJSON) => hobby(profileJSON));
function hobby(content) {
  document.getElementById("hobby").innerHTML = content.hobby;
}
