// "use strict";

const bodyEl = document.querySelector("body");
const checkBox = document.querySelector(".switch input");
const selectOptions = document.querySelector(".content select");
const searchBtn = document.querySelector(".search");
const disContainer = document.querySelector(".disctonary_content");
const partofSeech = document.querySelector(".partofSeachNoun");
const ulEl = document.querySelector(".meanings");
const SysEl = document.querySelector(".syn");
const verbEl = document.querySelector(".verb");
const form = document.querySelector("form");
const inputForm = document.querySelector("#form-input");
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

searchBtn.addEventListener("click", () => {
  Adata()
  if (inputForm.value !== "") {
    inputForm.style.border = "";
    inputForm.value = "";
  } else {
    inputForm.style.border = "1px solid red";
  }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
  //   searching(inputEl.value);
  //   inputEl.value = "";
  });
  selectOptions.addEventListener("change", (e) => {
    let fonts = e.target.value;
    bodyEl.style.fontFamily = fonts;
  });
  checkBox.addEventListener("click", () => {
    bodyEl.classList.toggle("dark");
  });

  inputForm.addEventListener("keypress" , (e) => {
    if (e.keyCode == 13) {
        Adata()
  }
  })

      
  function Adata() {
    
    fetch(`${API_URL}${inputForm.value}`).
    then(res => res.json())
    .then(data => {
    
        console.log(data)
        
        showData(data)
    })
}

function showData(data) {
    
    let title1 = document.getElementById("title1")
    title1.innerHTML = `${data[0].word}`

    let titleParagraph = document.getElementById("title_paragraph")
    titleParagraph.innerHTML = `${data[0].phonetics[1].text}`


    let audio = document.getElementById("audio-content")
  audio.addEventListener("click" , () => {
       var audio1 = `${data[0].phonetics[1].audio}`
       var audio1 = new Audio ('audio');
        audio1.play(); })

        let noun1 = document.querySelector("#noun1")
        let noun2 = document.querySelector("#noun2")
        let noun3 = document.querySelector("#noun3")
          
        noun1.innerHTML = `${data[0].meanings[0].definitions[0].definition}`
        noun2.innerHTML = `${data[0].meanings[0].definitions[1].definition}`
        noun3.innerHTML = `${data[0].meanings[0].definitions[2].definition}`

        partofSeech.innerHTML = `${data[0].meanings[0].partOfSpeech}`


        let meaningli1 = document.getElementById("meanings-li1")
        let meaningli2 = document.getElementById("meanings-li2")

        // meaningli1.innerHTML = `${data[0].meanings[1].definitions[0].definition}`
        // meaningli2.innerHTML = `${data[0].meanings[1].definitions[1].definition}`
      

        if (`${data[0].meanings[1].definitions[0].definition}` ==  null) {
            meaningli1.innerHTML = " "
        }else{
          meaningli1.innerHTML = `${data[0].meanings[1].definitions[0].definition}`
        }

        if (!`${data[0].meanings[1].definitions[1].definition == null}`) {
          meaningli2.innerHTML = "  "
      }else{
        meaningli2.innerHTML = `${data[0].meanings[1].definitions[1].definition}`
      }


}


