function showPreloader() {
  var load = document.getElementById("loadingscreenid");
  load.style.display = "block";
  setTimeout(function () {
    load.style.display = "none";
  }, 2000);
}
window.addEventListener("load", showPreloader);
