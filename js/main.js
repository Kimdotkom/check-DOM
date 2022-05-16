function heart(heartid) {

    var element = document.getElementById(heartid);
        element.className = "fa-solid fa-heart fa-2xl";
        element.style.color = "#FF0000";
  }



function deletecard(cardid) {

    var element = document.getElementById(cardid);
        element.remove();
} 



/*function plus(plusid) {
    var element = document.getElementById(plusid);
    element.innerHTML += 1;
}*/


function plus(cardid) {
     
    var elemt = document.getElementById(cardid);

    elemt.querySelector("#quantity").stepUp();
    
    var price =elemt.querySelector("#price");
    var quantity =elemt.querySelector("#quantity").value;

    elemt.querySelector("#price").innerHTML = (Number(price.innerHTML)) * quantity;
}



 function minus(cardid) {

    var elemt = document.getElementById(cardid);

    

    var price =elemt.querySelector("#price");
    var quantity = elemt.querySelector("#quantity").value;
        elemt.querySelector("#quantity").stepDown();   
    

        elemt.querySelector("#price").innerHTML = (Number(price.innerHTML)) / quantity;
 }


