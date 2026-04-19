let righe = 0;
let colonne = 0;
let tr;
let td;
let p;
function creaTabella(){
  colonne = document.getElementById("getColonne").value;
  righe = document.getElementById("getRighe").value;

  let tabella = document.createElement(table);
  for(let i = 0; i < righe; i ++){
    tr = document.createElement("tr");
    for(let j = 0; j < colonne; j++){
      td = document.createElement("td");
      td.innerHTML = "skdjfasjdhfshf"
      tr.appendChild(td);
    }
    tabella.appendChild(tr);
  }
}
