document.write('\
\
<div id="overallnav">\
<div class="topnav" id="mytopnav">\
    <a href="javascript:void(0);" id="burgermenu" class="icon" onclick="myFunction()">\
    <i class="fa fa-bars"></i>\
</a>\
    <div id="searchwrapper">\
        <input type="text" name="searchbar" id="searchbar" placeholder="Nach Titel suchen..."/>\
        <button id="searchbutton">search</button>\
    </div>\
</div>\
\
<nav class="navbar" id="myNavbar">\
\
<div class="navContent">\
<button class="accordion">A</button>\
<div class="panel">\
  <p>Lorem ipsum...</p>\
</div>\
\
<button class="accordion">I</button>\
<div class="panel">\
    <a href="index.html">Index</a>\
</div>\
\
<button class="accordion">S</button>\
<div class="panel">\
  <a href="server.html">Server</a>\
</div>\
<a href="server.html">Server</a>\
\
</div>\
\
</nav>\
\
</div>\
');

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
      console.log(x.className);
    } else {
      x.className = "navbar";
      console.log(x.className);
    }
  }
