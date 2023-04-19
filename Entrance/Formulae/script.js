// Get all .sheader elements
var sheaders = document.querySelectorAll(".sheader");

// Add event listeners to each .sheader element
for (var i = 0; i < sheaders.length; i++) {
  sheaders[i].addEventListener("click", function () {
    // Get the next sibling element of the clicked .sheader element
    var nextElement = this.nextElementSibling;

    // Toggle the display of the next element
    if (nextElement.style.display === "none") {
      nextElement.style.display = "block";
    } else {
      nextElement.style.display = "none";
    }
  });
}
