function functionMenu() {
    var x = document.getElementById("index");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }