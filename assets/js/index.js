// ###################################
// JS FOR HAMBURGUER MENU
// ###################################

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
// JS FOR NEWSLETTER MODAL
// ###################################

const newsletter_button = document.querySelector('.newsletter_button');
var news_modal = document.getElementById("modal_newsletter");
const news_close_button = document.getElementsByClassName("news_close")[0];

newsletter_button.addEventListener("click", function() {
  news_modal.style.display = "block";
});

news_close_button.addEventListener("click", function() {
  news_modal.style.display = "none";
});

window.addEventListener("click", function(event) {
if (event.target == news_modal) {
  news_modal.style.display = "none";
}
});
