var topbar = document.getElementById("topbar");
topbar.innerHTML = `
<div class="topbar yatrafont    ">
            <div class="topitem topimg"><a href="/index.html">
            <img 
    id="main-logo" 
    src="/Image/Topbarlogo.png" 
    alt="Site Logo"
    data-light-logo="/Image/Topbarlogo.png"
    data-dark-logo="/Image/Topbarlogo-dark.png"
  >


            </a></div>
            <div class="navglass">
              <div class="topitem titem1"><a class="topimage" href="/index.html">Home</a></div>
              <div class="topitem titem2"><a href="/past.html">Past Paper</a></div>
              <div class="topitem titem3"><a href="/library.html">E-Library</a></div> 
              <div class="topitem titem4"><a href="/classes.html">Classes</a></div>  </div>
              <div class="topitem titem5"><a href="/cheatsheet.html">CheatSheet</a></div> 
           
           <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
  <img class="lamp-img" 
       src="/Image/light-lamp.png" 
       data-light-icon="/Image/light-lamp.png" 
       data-dark-icon="/Image/dark-lamp.png"
       alt="Theme toggle icon">
</button>

           
        </div>
`;
var footer = document.getElementById("footer");
footer.innerHTML = `
<br>
<div class="footer">
        <div class="mainfooter">
             <div class="footer1"> 
<img class="footerimg" src="/Image/The Engineering Junction-logos_white - Copy.png" alt="">
               




                
             </div> 
             <div class="footer2"> 
                 <!--<div class="footerhead4">FOOTER TOP HEAD</div> 
                 <div><a href="">TEST</a></div> 
                 <div><a href="">TEST</a></div> 
                 <div><a href="">TEST</a></div> 
                 <div><a href="">TEST</a></div> -->
             </div> 
            <div class="footer3">
                <!--<div class="footerhead4">Information</div>-->
                <div><a href="/syll_old.html">Old Syllabus</a></div><!--
                <div><a href="/syllnew.html">New Syllabus</a></div>
                <div><a href="">Cut-off</a></div> -->
            </div>
            <div class="footer4">
                <!--<div class="footerhead4">FOOTER TOP HEAD</div> 
                 <div><a href="">TEST</a></div> 
                 <div><a href="">TEST</a></div> 
                 <div><a href="">TEST</a></div> 
                 <div><a href="">TEST</a></div>  -->
            </div>
        </div>
        <div class="copyrightfooter">
            <div>© 2024 The Engineering Junction. All Rights Reserved.</div>
            <div>Designed & Developed By: Krishal Basnet</div>
        </div>
    </div>
`;
function solutiondisplay(x, y) {
  var id = "DRW" + x + "-" + y;
  var id2 = "DRW" + x + y;
  var aghy = document.getElementById(id);
  var aghy2 = document.getElementById(id2);
  if (aghy.style.display === "none") {
    aghy.style.display = "block";
    aghy2.innerHTML = "Hide Answer";
  } else {
    aghy.style.display = "none";
    aghy2.innerHTML = "Show Answer";
  }
}
disable;
