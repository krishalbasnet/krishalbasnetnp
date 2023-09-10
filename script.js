function showPreloader() {
  var load = document.getElementById("loadingscreenid");
  load.style.display = "block";
  setTimeout(function () {
    load.style.display = "none";
  }, 1000);
}
window.addEventListener("load", showPreloader);
