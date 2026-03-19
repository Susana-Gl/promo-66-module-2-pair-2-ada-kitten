'use strict';

//QUERYSELECTOR

const kittenList = document.querySelector (".js-list");
const btnMas = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".js-new-form");
const searchDesc = document.querySelector (".js_in_search_desc")
const searchBtn = document.querySelector (".js_button-search")
const breed = document.querySelector (".js_search_breed")


//DATOS

const kittenImage1 = 'https://api-pw.dev.adalab.es/gato-siames.webp';
const kittenName1  = "Anastacio";
const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."
const kittenBreed1 = "Siamés"

const kittenImage2 = 'https://api-pw.dev.adalab.es/sphynx-gato.webp';
const kittenName2 = "Fiona";
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."
const kittenBreed2 = "Sphynx"

const kittenImage3 = 'https://api-pw.dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = "Cielo";
const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."
const kittenBreed3 = "Maine Coon"




//FUNCIONES

function showNewCatForm() {
  newForm.classList.remove("collapsed");
}

function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

//FUNCIONES EVENTOS

//EVENTOS

/*btnMas.addEventListener("click", () => {
  newForm.classList.toggle("collapsed");
})
*/
searchBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descrSearchText = searchDesc.value
  kittenList.innerHTML = ""
  if (kittenDesc1.includes(descrSearchText)) {
    kittenList.innerHTML += kittenOne;}
  if (kittenDesc2.includes(descrSearchText)) {
    kittenList.innerHTML += kittenTwo;}
  if (kittenDesc3.includes(descrSearchText)) {
    kittenList.innerHTML += kittenThree;}
})



//ACCIONES AL CARGAR LA PAGINA

let breedText ="";

if( kittenBreed1 === "" ) {
  breedText = "¡Ups! Se nos olvidó el nombre de la raza.";
}
else {
  breedText = kittenBreed1;
}

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage1}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${ kittenBreed1 || "Uy que despiste, no sabemos su raza" }</h4>
  <p class="card_description">
            ${kittenDesc1}
   </p>
</article>
</li>`;

if( kittenBreed2 === "" ) {
  breedText = "¡Ups! Se nos olvidó el nombre de la raza.";
}
else {
  breedText = kittenBreed2;
}

const kittenTwo = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage2}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenName2}</h3>
  <h4 class="card_race">${kittenBreed2 || "Uy que despiste, no sabemos su raza"}</h4>
  <p class="card_description">
            ${kittenDesc2}
   </p>
</article>
</li>`;

const kittenThree = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage3}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenName3}</h3>
  <h4 class="card_race">${kittenBreed3 || "Uy que despiste, no sabemos su raza"}</h4>
  <p class="card_description">
          ${kittenDesc3}
   </p>
</article>
</li>`;

kittenList.innerHTML = kittenOne+kittenTwo+kittenThree;