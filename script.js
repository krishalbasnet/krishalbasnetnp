var topbar = document.getElementById("topbar");
topbar.innerHTML = `
<div class="topbar yatrafont    ">
            <div class="topitem topimg"><a href="/index.html">
                <img src="/Image/Topbarlogo.png" alt="">
            </a></div>
            <div class="topitem titem1"><a class="topimage" href="/index.html">Home</a></div>
           <!-- <div class="topitem titem2"><a href="">Blogs</a></div>-->
            <div class="topitem titem4"><a href="/past.html">Past Paper</a></div>
            <!--
            <div class="topitem titem5"><a href="/library.html">E-Library</a></div>
            <div class="topitem titem3"><a href="">Services</a></div>
            <div class="topitem titem6"><a href="">Dark</a></div>
            <div class="topitem titem7"><a href="">Login</a></div>
            <div class="topitem titem8"><a href="">Login</a></div>-->
           
        </div>
`;
var footer = document.getElementById("footer");
footer.innerHTML = `
<div class="footer yatrafont    ">
            <div class="copyright">
                <div>© 2023 The Engineering Junction. All Rights Reserved.</div>
                <div>Suggest us: 079bce052@ioepc.edu.np</div>
                <div>Designed & Developed By: <a class="g676" target="_blank" href="https://www.instagram.com/basnet__kazi_/"> Krishal Basnet</a></div>
            </div>
        </div>
`;
function solutiondisplay(x, y) {
  var id = "DRW" + x + "-" + y;
  var id2 = "DRW" + x  + y;
  var aghy = document.getElementById(id);
  var aghy2 = document.getElementById(id2);
  if (aghy.style.display === "none") {
    aghy.style.display = "block";
    aghy2.innerHTML = "Hide Answer";
  } else {
    aghy.style.display = "none";
    aghy2.innerHTML = "Show Answer"

  }
}
