$('.card-container').on('click', function() {
  $('.card').toggleClass('flipped');
});

var url_string = window.location.href;
var url = new URL(url_string);
var user = url.searchParams.get("a");
var winner = "Buen intento, <br> vuelva a intentar <br> en navidad";
console.log(user);

switch (user) {
  case "1":
    console.log("ari");
    winner = "Ariana";
    break;
  case "2":
    console.log("mami");
    winner = "Kattia";
    break;
  case "3":
    console.log("papi");
    winner = "Edwin 1";
    break;
  case "4":
    console.log("ed");
    winner = "Edwin 2";
    break;
  case "5":
    console.log("js");
    winner = "Josue";
    break;

  case "a":
    console.log("js");
    winner = "nombre ganador";
    break;
  default:
    console.log("not found");
}

console.log("winner is " + winner);


setTimeout(function() {
  document.getElementById("reveal").innerHTML = winner;
}, 2000);