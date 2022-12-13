a = 5;
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (a == 5) {
    document.getElementById("logo567").src = "logo2222.png";
    a = 4;
  } else {
    document.getElementById("logo567").src = "logo2.png";
    a = 5;
  }
}
