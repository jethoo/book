/*using javascript to display and hide form for buying book*/
/* toggle display of buying form*/

function formFunction(){
    let form = document.querySelector('form');
    if (form.style.display === "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
}

/* Purchase submit button */
function buySubmit(){
    alert("Your Purchase is successful. Book on the way. Thank you for your purchase.");
}

