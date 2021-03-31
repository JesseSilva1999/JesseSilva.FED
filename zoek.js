

function myFunction() {
  var ingeklapt = document.getElementById("ingeklapt");
  var meer = document.getElementById("meer");
  var buttontext = document.getElementById("button");

  if (ingeklapt.style.display === "none") {
    ingeklapt.style.display = "inline";
    buttontext.innerHTML = "Bekijk meer";
    meer.style.display = "none";
  } else {
    ingeklapt.style.display = "none";
    buttontext.innerHTML = "bekijk minder";
    meer.style.display = "inline";
  }
}

// Bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_read_more
