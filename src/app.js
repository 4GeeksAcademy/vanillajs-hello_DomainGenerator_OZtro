/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Aqui van las variables con los que se concatenaran con los for
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["belcebub", "satan"];
let dotcom = [".com", ".org"];

window.onload = function() {
  let domain = " ";

  //For anidados que recorre los arrays de las variables
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        for (let z = 0; z < dotcom.length; z++) {
          //Concateno Variables con los For, con una lista OL para que los enumere
          domain +=
            "<li>" + pronoun[i] + adj[x] + noun[y] + dotcom[z] + "</li>";
        }
      }
    }
  }
  document.getElementById("dominios").innerHTML = domain;
};
