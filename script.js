function bar1(){
    var div = document.getElementById("topbar");
    var div1 = document.createElement("div");
    var a1 = document.createElement("a");
    var img1 = document.createElement("img");
    img1.setAttribute("src","facebook_cover_psssshoto_2-cutout.png")
    div.appendChild(div1);
    div1.appendChild(a1);
    a1.appendChild(img1);
    div1.classList.add("topbarimg");
    a1.setAttribute("href","index.html")

    var div2 = document.createElement("div");
    var a2 = document.createElement("a");
    var txt2 = document.createTextNode("Home");
    div.appendChild(div2);
    div2.appendChild(a2);
    a2.appendChild(txt2);
    a2.classList.add("aftereffect");
    a2.setAttribute("href","index.html");

    var div3 = document.createElement("div");
    var a3 = document.createElement("a");
    var txt3 = document.createTextNode("Notes");
    div.appendChild(div3);
    div3.appendChild(a3);
    a3.appendChild(txt3);
    a3.classList.add("aftereffect");

    var div4 = document.createElement("div");
    var a4 = document.createElement("a");
    var txt4 = document.createTextNode("Subject");
    div.appendChild(div4);
    div4.appendChild(a4);
    a4.appendChild(txt4);
    a4.classList.add("aftereffect");

    var div5 = document.createElement("div");
    var a5 = document.createElement("a");
    var txt5 = document.createTextNode("Question Bank");
    div.appendChild(div5);
    div5.appendChild(a5);
    a5.appendChild(txt5);
    a5.classList.add("aftereffect");

    var div6 = document.createElement("div");
    var a6 = document.createElement("a");
    var txt6 = document.createTextNode("Contact");
    div.appendChild(div6);
    div6.appendChild(a6);
    a6.appendChild(txt6);
    a6.classList.add("aftereffect");
}