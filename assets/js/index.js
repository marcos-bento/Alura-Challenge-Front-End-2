const menu_button = document.querySelector('.hamb');
const menu_image_bars = document.querySelector('.fa-bars');
const close_menu_button = document.querySelector('.fa-x');
const menu_links = document.querySelector('.hamb_menu')

menu_button.addEventListener('click', () =>{
	hambOpen();
})

close_menu_button.addEventListener('click', () =>{
	hambOpen();
})

function hambOpen(){
    hambMenuShow(menu_links);
    hambMenuShow(menu_button);
}

function hambMenuShow(context){
    context.classList.toggle('active');
}

// ###################################
// JS FOR MODAL
// ###################################

var open_modal_button = document.getElementsByClassName("openModal");
var modal = document.getElementById("modal");
var close_button = document.getElementsByClassName("close")[0];

for (var i = 0; i < open_modal_button.length; i++) {
    open_modal_button[i].addEventListener("click", function() {
      modal.style.display = "block";
    });
}

close_button.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});