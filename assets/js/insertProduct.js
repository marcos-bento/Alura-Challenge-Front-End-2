import { conectApi } from "./conectaApi.js";

const image = document.querySelector("[data-image]");
const imageMobile = document.querySelector("[data-image-mobile]");
const promotionalCheckbox = document.querySelector("[data-promotional-checkbox]");
const promotionalPrice = document.querySelector("[data-promotional-area]");
const addButton = document.querySelector("[data-add-product]");

// product infos:
const name = document.querySelector("[data-name]");
const imageurl = document.querySelector("[data-image-url]");
const category = document.querySelector("[data-category]");
const description = document.querySelector("[data-description]");
const seller = document.querySelector("[data-seller]");
const price = document.querySelector("[data-price]");
const pricePromo = document.querySelector("[data-promotional-price]");
const color = [
    document.querySelector("[data-color-01]"),
    document.querySelector("[data-color-02]"),
    document.querySelector("[data-color-03]")
];
const size = [
    document.querySelector("[data-size-01]"),
    document.querySelector("[data-size-02]"),
    document.querySelector("[data-size-03]"),
    document.querySelector("[data-size-04]"),
    document.querySelector("[data-size-05]")
];

imageurl.addEventListener("focusout", function(){
    image.style.backgroundImage = "url("+imageurl.value+")";
    imageMobile.style.backgroundImage = "url("+imageurl.value+")";
});

promotionalCheckbox.addEventListener("click", function(){
    if (promotionalCheckbox.checked){
        promotionalPrice.style.display = "block"
    } else {
        promotionalPrice.style.display = "none"
    }
});

addButton.addEventListener("click", function(){
    if (name.value == "" || price.value == ""){
        alert ("Por favor preencha os campos corretamente!");
    } else { 
        conectApi.insertProduct(
            (imageurl.value === "") ? "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" : imageurl.value,
            name.value,
            (description.value === "") ? "Produto teste" : description.value,
            price.value,
            (pricePromo.value === "") ? price.value : pricePromo.value,
            (seller.value === "") ? "Riachuelo" : seller.value,
            category.value,
            "true",
            (color[0].value === "") ? "Black" : color[0].value,
            (color[1].value === "") ? "White" : color[1].value,
            (color[2].value === "") ? "Blue" : color[2].value,
            (size[0].value === "") ? "P" : size[0].value,
            (size[1].value === "") ? "PP" : size[1].value,
            (size[2].value === "") ? "M" : size[2].value,
            (size[3].value === "") ? "G" : size[3].value,
            (size[4].value === "") ? "GG" : size[4].value,
        )
        alert ("cadastrado com sucesso!");
    }
});

// ##################################################################################################################################
// Buttons
// ##################################################################################################################################

const homeButton = document.querySelector(".adminPanel_button_home");

homeButton.addEventListener("click", function(){
    window.location="index.html";
});

// ##################################################################################################################################
// Edit feature (2/2) ... part 1 on adminPanelShowProducts.js
// ##################################################################################################################################

// retrieving idEdit from localstorage

if (!localStorage["idEdit"]){
    localStorage['idEdit']="";
}else{
    let idEdit = localStorage.getItem("idEdit");
    console.log(idEdit);
};
