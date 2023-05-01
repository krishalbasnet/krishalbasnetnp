function bar1(){
    var divbar = document.getElementById("topbar");
    var div1 = document.createElement("div");
    var a1 = document.createElement("a");
    div1.classList.add("topnamebar");
    var txt1 = document.createTextNode("Krishal Basnet");
    divbar.appendChild(div1);
    div1.appendChild(a1);
    a1.setAttribute("href","index.html");
    a1.appendChild(txt1);

    var div2 = document.createElement("div");
    var a2 = document.createElement("a");
    var txt2 = document.createTextNode("Home");
    divbar.appendChild(div2);
    div2.appendChild(a2);   
    a2.classList.add("item23");
    a2.appendChild(txt2);
    a2.setAttribute("href","index.html");

    var div6 = document.createElement("div");
    var a6 = document.createElement("a");
    var txt6 = document.createTextNode("Portfolio");
    divbar.appendChild(div6);
    a6.classList.add("item23");
    div6.appendChild(a6);
    a6.appendChild(txt6);

    var div3 = document.createElement("div");
    var a3 = document.createElement("a");
    var txt3 = document.createTextNode("Engineering");
    divbar.appendChild(div3);
    a3.classList.add("item23");
    div3.appendChild(a3);
    a3.appendChild(txt3);

    var div4 = document.createElement("div");
    var a4 = document.createElement("a");
    var txt4 = document.createTextNode("Our Work");
    divbar.appendChild(div4);
    a4.classList.add("item23");
    div4.appendChild(a4);
    a4.appendChild(txt4);

    var div5 = document.createElement("div");
    var a5 = document.createElement("a");
    var txt5 = document.createTextNode("Contact");
    divbar.appendChild(div5);
    a5.classList.add("item23");
    div5.appendChild(a5);
    a5.appendChild(txt5);

}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;

    if (username === 'krishalbasnet1@gmail.com' && password === 'HailHydra7') {
        window.location.href = 'personal567.html';
    } else {
        alert('Invalid username or password.');
    }
});

function bar2(){
    var divbar = document.getElementById("topbar");
    var div1 = document.createElement("div");
    var a1 = document.createElement("a");
    div1.classList.add("topnamebar");
    var txt1 = document.createTextNode("Krishal Basnet");
    divbar.appendChild(div1);
    div1.appendChild(a1);
    a1.setAttribute("href","../index.html");
    a1.appendChild(txt1);

    var div2 = document.createElement("div");
    var a2 = document.createElement("a");
    var txt2 = document.createTextNode("Home");
    divbar.appendChild(div2);
    a2.classList.add("item23");
    div2.appendChild(a2);   
    a2.appendChild(txt2);
    a2.setAttribute("href","../index.html");

    var div6 = document.createElement("div");
    var a6 = document.createElement("a");
    var txt6 = document.createTextNode("Portfolio");
    divbar.appendChild(div6);
    a6.classList.add("item23");
    div6.appendChild(a6);
    a6.appendChild(txt6);

    var div3 = document.createElement("div");
    var a3 = document.createElement("a");
    var txt3 = document.createTextNode("Engineering");
    divbar.appendChild(div3);
    a3.classList.add("item23");
    div3.appendChild(a3);
    a3.appendChild(txt3);

    var div4 = document.createElement("div");
    var a4 = document.createElement("a");
    var txt4 = document.createTextNode("Our Work");
    divbar.appendChild(div4);
    a4.classList.add("item23");
    div4.appendChild(a4);
    a4.appendChild(txt4);

    var div5 = document.createElement("div");
    var a5 = document.createElement("a");
    var txt5 = document.createTextNode("Contact");
    divbar.appendChild(div5);
    div5.appendChild(a5);
    a5.classList.add("item23");
    a5.appendChild(txt5);

}