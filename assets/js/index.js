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