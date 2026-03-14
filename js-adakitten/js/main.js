'use strict';

//QUERYSELECTOR

const kittenList = document.querySelector (".js-list");
const btnMas = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".js-new-form");
const searchDesc = document.querySelector (".js_in_search_desc")
const searchBtn = document.querySelector (".js_button-search")
const breed = document.querySelector (".js_search_breed")


//DATOS

const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."
const kittenBreed1 = "Siamés"

const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."
const kittenBreed2 = "Sphynx"

const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."
const kittenBreed3 = "Maine Coon"

let breedText ="";


//FUNCIONES

//FUNCIONES EVENTOS

//EVENTOS

btnMas.addEventListener("click", () => {
  newForm.classList.toggle("collapsed");
})

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

    const searchBreed = breed.value
  kittenList.innerHTML =""
  if (kittenBreed1.includes(searchBreed)) {
    kittenList.innerHTML += kittenOne;}
  if (kittenBreed2.includes(searchBreed)) {
    kittenList.innerHTML += kittenTwo;}
  if (kittenBreed3.includes(searchBreed)) {
    kittenList.innerHTML += kittenThree;}

  if (kittenBreed1 === "") {
    breedText = `Uy que despiste, no sabemos su raza`;
  } else {
    breedText = kittenBreed1
  }

  if (kittenBreed2 === "") {
    breedText = `Uy que despiste, no sabemos su raza`;
  } else {
    breedText = kittenBreed2
  }

  if (kittenBreed3 === "") {
    card_race.innerHTML = `Uy que despiste, no sabemos su raza`
    /* breedText = `Uy que despiste, no sabemos su raza`; */
  } else {
    breedText = kittenBreed3
  }
})



//ACCIONES AL CARGAR LA PAGINA

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://api-pw.dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://api-pw.dev.adalab.es/sphynx-gato.webp"
    alt="gatito"
  />
  <h3 class="card_title">Fiona</h3>
  <h4 class="card_race">Sphynx</h4>
  <p class="card_description">
            Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.
   </p>
</article>
</li>`;

const kittenThree = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://api-pw.dev.adalab.es/maine-coon-cat.webp"
    alt="gatito"
  />
  <h3 class="card_title">Cielo</h3>
  <h4 class="card_race">Maine Coon</h4>
  <p class="card_description">
          Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.
   </p>
</article>
</li>`;

kittenList.innerHTML = kittenOne+kittenTwo+kittenThree;