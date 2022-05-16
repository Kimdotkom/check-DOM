/* Declaration dse tableaux*/

let favs = Array.from(document.querySelectorAll(".fa-heart"));

let dell = Array.from(document.querySelectorAll(".fa-trash-can"));

let plus = Array.from(document.querySelectorAll(".fa-circle-plus"));

let minus = Array.from(document.querySelectorAll(".fa-circle-minus"));

let cards = Array.from(document.querySelectorAll(".card"));

// Favourites

for (let fav of favs) {
  fav.addEventListener("click", function () {
    if (fav.style.color === "black") {
      fav.style.color = "red";
    } else {
      fav.style.color = "black";
    }
  });
}

// Deletes

for (let i in dell) {
  dell[i].addEventListener("click", function () {
    cards[i].remove();
    total();
  });
}

// Plus

for (let p of plus) {
  p.addEventListener("click", function () {
    p.nextElementSibling.innerHTML++;
    total();
  });
}

//Minus

for (let m of minus) {
  m.addEventListener("click", function () {
    if (m.previousElementSibling.innerHTML > 0) {
      m.previousElementSibling.innerHTML--;
      // } else {
      //   null;
    }
    total();
  });
}

// Total Price

function total() {
  // Tableau
  let q = Array.from(document.querySelectorAll(".qte"));

  let price = Array.from(document.querySelectorAll(".p2"));

  let s = 0;
  for (let i = 0; i < price.length; i++) {
    s = s + parseFloat(price[i].innerHTML) * parseFloat(q[i].innerHTML);
  }
  document.getElementById("total-price").innerHTML = s;
  console.log(q);
}
