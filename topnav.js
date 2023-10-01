function myFunction() {
  var x = document.getElementById("myTopnav");
  var links = x.getElementsByTagName("a");

  if (x.className === "topnav") {
    x.className += " responsive";

    for (var i = 0; i < links.length; i++) {
      if (!links[i].classList.contains("icon")) {
        links[i].className += " responsive-link";
      }
    }
  } else {
    x.className = "topnav";

    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("responsive-link");
    }
  }
}
