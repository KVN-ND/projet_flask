
let index = 0;


function TailleImage(event, s) {
  a= event.srcElement;
  a.style.scale = s;

}

let chaussures = [
  ['New Balance 9060', 190 , 'beige' ,'https://nb.scene7.com/is/image/NB/u9060wht_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/9060/U9060V1-48838.html?dwvar_U9060V1-48838_style=U9060WHT','S' ],
  ['New Balance 530', 70 ,'blanc','https://nb.scene7.com/is/image/NB/mr530ad_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/530/MR530-32265.html?dwvar_MR530-32265_style=MR530SG','S' ],
  ['New Balance 1000', 170 ,'rose', 'https://nb.scene7.com/is/image/NB/m1000mc_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1000/M1000V1-47835.html?dwvar_M1000V1-47835_style=M1000MC','M'],
  ['New balance 1906R', 90, 'Marron','https://nb.scene7.com/is/image/NB/m1906rph_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1906r/M1906RV1-48798.html?dwvar_M1906RV1-48798_style=M1906RPH','M'],
  ['New Balance 2002R', 110, 'bleu', 'https://nb.scene7.com/is/image/NB/m2002rpq_nb_03_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600','https://www.newbalance.fr/fr/pd/2002r/M2002RV1-47324.html?dwvar_M2002RV1-47324_style=M2002RPQ','L'], 
  ['New Balance 1906A', 140 , 'noir' ,'https://nb.scene7.com/is/image/NB/m1906af_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1906a/M1906AV1-48796.html?dwvar_M1906AV1-48796_style=M1906AF','L'],
];


function genererChaussures(liste) {
  let block = document.getElementById('block');

  while (block.firstChild) {
    block.removeChild(block.lastChild);
  }

  for (let i = 0; i < liste.length; i++) {
    

    let card = document.createElement('div');
    card.classList.add('card');

    let h2 = document.createElement('h3');
    h2.innerHTML = liste[i][0];

    let ul = document.createElement('ul');

    let li1 = document.createElement('li');
    li1.innerHTML = liste[i][1] + '€';

    let li2 = document.createElement('li');
    li2.innerHTML = 'Couleur: '+ liste[i][2];

    let img = document.createElement('img');
    img.setAttribute('src',liste[i][3]);
    
    let lien = document.createElement('a');
    lien.setAttribute('href',liste[i][4] );
    
    let li3 = document.createElement('li');
    li3.innerHTML = 'Taille: '+ liste[i][5];




    img.addEventListener(
        'mouseenter',
        (e) => { tailleImage(e, 1.2) }
    );
    img.addEventListener(
        'mouseleave',
        (e) => { tailleImage(e, 1) }
    );

    lien.appendChild(img);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    card.appendChild(h2);
    card.appendChild(ul);
    card.appendChild(lien);

    block.appendChild(card);
}
}

window.onload = () => {
  genererChaussures(chaussures)
  
}


function tailleImage(el, s) {
  el.srcElement.style.scale = s;
}

function glissiere() {
  var valeur = document.getElementById("entree").value;
  var tranchePrix = document.getElementById("tranche-prix");

  if (valeur >=1 && valeur < 4) {
    tranchePrix.innerHTML = "50€ - 99€";
    genererChaussures(
      [
  ['New Balance 530', 70 ,'blanc','https://nb.scene7.com/is/image/NB/mr530ad_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/530/MR530-32265.html?dwvar_MR530-32265_style=MR530SG','S' ],
      
  ['New balance 1906R', 90, 'Marron','https://nb.scene7.com/is/image/NB/m1906rph_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1906r/M1906RV1-48798.html?dwvar_M1906RV1-48798_style=M1906RPH','M'],
     
      ]
    )
  } else if (valeur >= 5 && valeur < 8) {
    tranchePrix.innerHTML = "100€ - 149€";
    genererChaussures(
      [
  ['New Balance 1906A', 140 , 'noir' ,'https://nb.scene7.com/is/image/NB/m1906af_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1906a/M1906AV1-48796.html?dwvar_M1906AV1-48796_style=M1906AF','L'],
  ['New Balance 2002R', 110, 'bleu', 'https://nb.scene7.com/is/image/NB/m2002rpq_nb_03_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600','https://www.newbalance.fr/fr/pd/2002r/M2002RV1-47324.html?dwvar_M2002RV1-47324_style=M2002RPQ','L'], 
      
      ]
    )
  } else if (valeur >= 9 && valeur <= 12) {
    tranchePrix.innerHTML = "150€ - 200€";
    genererChaussures(
      [
  ['New Balance 1000', 170 ,'rose', 'https://nb.scene7.com/is/image/NB/m1000mc_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1000/M1000V1-47835.html?dwvar_M1000V1-47835_style=M1000MC','M'],
  ['New Balance 9060', 190 , 'beige' ,'https://nb.scene7.com/is/image/NB/u9060wht_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/9060/U9060V1-48838.html?dwvar_U9060V1-48838_style=U9060WHT','S' ],
       
      ]
    )
  }
}

function rose() {
  genererChaussures(
  [
  ['New Balance 1000', 170 ,'rose', 'https://nb.scene7.com/is/image/NB/m1000mc_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1000/M1000V1-47835.html?dwvar_M1000V1-47835_style=M1000MC','M'],
    
  ]
  )
}

function bleu() {
  genererChaussures(
  [
  ['New Balance 2002R', 110, 'bleu', 'https://nb.scene7.com/is/image/NB/m2002rpq_nb_03_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600','https://www.newbalance.fr/fr/pd/2002r/M2002RV1-47324.html?dwvar_M2002RV1-47324_style=M2002RPQ','L'], 
   
  ]
  )
}

function noir() {
  genererChaussures(
  [
  ['New Balance 1906A', 140 , 'noir' ,'https://nb.scene7.com/is/image/NB/m1906af_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1906a/M1906AV1-48796.html?dwvar_M1906AV1-48796_style=M1906AF','L'],
    
  ]
  )
}

function blanc() {
  genererChaussures(
  [
    ['New Balance 530', 70 ,'blanc','https://nb.scene7.com/is/image/NB/mr530ad_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/530/MR530-32265.html?dwvar_MR530-32265_style=MR530SG','S' ],
  
  ]
  )
}

function marron() {
  genererChaussures(
  [
  ['New balance 1906R', 90, 'Marron','https://nb.scene7.com/is/image/NB/m1906rph_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1906r/M1906RV1-48798.html?dwvar_M1906RV1-48798_style=M1906RPH','M'],
    
  ]
  )
}

function beige() {
  genererChaussures(
  [
    ['New Balance 9060', 190 , 'beige' ,'https://nb.scene7.com/is/image/NB/u9060wht_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/9060/U9060V1-48838.html?dwvar_U9060V1-48838_style=U9060WHT','S' ],
  
  ]
  )
}


function S() {
  genererChaussures(
  [
    ['New Balance 9060', 190 , 'beige' ,'https://nb.scene7.com/is/image/NB/u9060wht_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/9060/U9060V1-48838.html?dwvar_U9060V1-48838_style=U9060WHT','S' ],
    ['New Balance 530', 70 ,'blanc','https://nb.scene7.com/is/image/NB/mr530ad_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/530/MR530-32265.html?dwvar_MR530-32265_style=MR530SG','S' ],
     
  ]
  )
}

function M() {
  genererChaussures(
  [
    ['New Balance 1000', 170 ,'rose', 'https://nb.scene7.com/is/image/NB/m1000mc_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1000/M1000V1-47835.html?dwvar_M1000V1-47835_style=M1000MC','M'],
    ['New balance 1906R', 90, 'Marron','https://nb.scene7.com/is/image/NB/m1906rph_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1906r/M1906RV1-48798.html?dwvar_M1906RV1-48798_style=M1906RPH','M'],
   
    
  ]
  )
}

function L() {
  genererChaussures(
  [
    ['New Balance 2002R', 110, 'bleu', 'https://nb.scene7.com/is/image/NB/m2002rpq_nb_03_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600','https://www.newbalance.fr/fr/pd/2002r/M2002RV1-47324.html?dwvar_M2002RV1-47324_style=M2002RPQ','L'], 
    ['New Balance 1906A', 140 , 'noir' ,'https://nb.scene7.com/is/image/NB/m1906af_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880','https://www.newbalance.fr/fr/pd/1906a/M1906AV1-48796.html?dwvar_M1906AV1-48796_style=M1906AF','L'],
  
  ]
  )
}