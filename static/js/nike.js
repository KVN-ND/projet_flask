

let chaussures = [
  ['Nocta hot step Air Terra', 140, 'noir', 'https://images.stockx.com/images/Nike-Hot-Step-Air-Terra-Drake-NOCTA-Black-University-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1661437379&fm=webp&q=60','https://www.nocta.com/products/blkgld-hot-step','S' ],
  ['Jordan Legacy', 70,'bleu','https://images.stockx.com/images/Air-Jordan-Legacy-312-Low-White-Light-Dew-Womens.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725875610','https://www.nike.com/fr/t/chaussure-air-jordan-legacy-312-low-pour-QjmxdW/HJ9041-100?CP=EUNS_AFF_AWIN_FR_197535_httpwwwstylightcom_384611%7C384633&utm_source=httpwwwstylightcom&utm_medium=affiliate&utm_campaign=197535&utm_content=384611%7C384633&sv1=affiliate&sv_campaign_id=197535&awc=16328_1728679875_1ebe8a18bb14ab7ae81a47702d1b3d96','S' ],
  ['Air max 95', 90 ,'gris', 'https://images.stockx.com/images/Air-Max-95-Light-Bone-GID-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1668064192','https://stockx.com/fr-fr/air-max-95-light-bone-gid','M'],
  ['Shox R4', 110, 'blanc' ,'https://images.stockx.com/images/Nike-Shox-R4-White-Metallic-Platinum-Barely-Grape-Womens-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1718112573&fm=webp&q=60','https://nakedcph.com/products/nike-shox-r4-ar3565-101?cjdata=MXxZfDB8WXww&cjevent=19ef4d7c881411ef831e02d70a18b8fa','M' ],
  ['Nocta hot step 2', 200,'orange', 'https://images.stockx.com/images/Nike-Hot-Step-2-Drake-NOCTA-Total-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1711570152&fm=webp&q=60','https://addictsneakers.com/products/nike-hot-step-2-n-44','L'],
  ['Skepta', 170 , 'bleu' ,'https://images.stockx.com/images/Nike-Air-Max-Tailwind-V-Skepta-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1627326456&fm=webp&q=60','https://stockx.com/fr-fr/nike-air-max-tailwind-v-skepta','L'],
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
    li3.innerHTML = 'Taille '+ liste[i][5];



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
        ['Jordan Legacy', 70,'bleu','https://images.stockx.com/images/Air-Jordan-Legacy-312-Low-White-Light-Dew-Womens.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725875610','https://www.nike.com/fr/t/chaussure-air-jordan-legacy-312-low-pour-QjmxdW/HJ9041-100?CP=EUNS_AFF_AWIN_FR_197535_httpwwwstylightcom_384611%7C384633&utm_source=httpwwwstylightcom&utm_medium=affiliate&utm_campaign=197535&utm_content=384611%7C384633&sv1=affiliate&sv_campaign_id=197535&awc=16328_1728679875_1ebe8a18bb14ab7ae81a47702d1b3d96','S' ],
    ['Air max 95', 90 ,'gris', 'https://images.stockx.com/images/Air-Max-95-Light-Bone-GID-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1668064192','https://stockx.com/fr-fr/air-max-95-light-bone-gid','M'],
      
      ]
    )
  } else if (valeur >= 5 && valeur < 8) {
    tranchePrix.innerHTML = "100€ - 149€";
    genererChaussures(
      [
    ['Shox R4', 110, 'blanc' ,'https://images.stockx.com/images/Nike-Shox-R4-White-Metallic-Platinum-Barely-Grape-Womens-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1718112573&fm=webp&q=60','https://nakedcph.com/products/nike-shox-r4-ar3565-101?cjdata=MXxZfDB8WXww&cjevent=19ef4d7c881411ef831e02d70a18b8fa','M' ],
    ['Nocta hot step Air Terra', 140, 'noir', 'https://images.stockx.com/images/Nike-Hot-Step-Air-Terra-Drake-NOCTA-Black-University-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1661437379&fm=webp&q=60','https://www.nocta.com/products/blkgld-hot-step','S' ],
      
      ]
    )
  } else if (valeur >= 9 && valeur <= 12) {
    tranchePrix.innerHTML = "150€ - 200€";
    genererChaussures(
      [
       ['Nocta hot step 2', 200,'orange', 'https://images.stockx.com/images/Nike-Hot-Step-2-Drake-NOCTA-Total-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1711570152&fm=webp&q=60','https://addictsneakers.com/products/nike-hot-step-2-n-44','L'],
       ['Skepta', 170 , 'bleu' ,'https://images.stockx.com/images/Nike-Air-Max-Tailwind-V-Skepta-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1627326456&fm=webp&q=60','https://stockx.com/fr-fr/nike-air-max-tailwind-v-skepta','L'],
      
      ]
    )
  }
}

function blanc() {
  genererChaussures(
  [
    ['Shox R4', 110, 'blanc' ,'https://images.stockx.com/images/Nike-Shox-R4-White-Metallic-Platinum-Barely-Grape-Womens-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1718112573&fm=webp&q=60','https://nakedcph.com/products/nike-shox-r4-ar3565-101?cjdata=MXxZfDB8WXww&cjevent=19ef4d7c881411ef831e02d70a18b8fa','M' ],
  
  ]
  )
}

function bleu() {
  genererChaussures(
  [
   ['Jordan Legacy', 70,'bleu','https://images.stockx.com/images/Air-Jordan-Legacy-312-Low-White-Light-Dew-Womens.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725875610','https://www.nike.com/fr/t/chaussure-air-jordan-legacy-312-low-pour-QjmxdW/HJ9041-100?CP=EUNS_AFF_AWIN_FR_197535_httpwwwstylightcom_384611%7C384633&utm_source=httpwwwstylightcom&utm_medium=affiliate&utm_campaign=197535&utm_content=384611%7C384633&sv1=affiliate&sv_campaign_id=197535&awc=16328_1728679875_1ebe8a18bb14ab7ae81a47702d1b3d96','S' ],
  ['Skepta', 170 , 'bleu' ,'https://images.stockx.com/images/Nike-Air-Max-Tailwind-V-Skepta-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1627326456&fm=webp&q=60','https://stockx.com/fr-fr/nike-air-max-tailwind-v-skepta','L'],
    
  ]
  )
}

function noir() {
  genererChaussures(
  [
    ['Nocta hot step Air Terra', 140, 'noir', 'https://images.stockx.com/images/Nike-Hot-Step-Air-Terra-Drake-NOCTA-Black-University-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1661437379&fm=webp&q=60','https://www.nocta.com/products/blkgld-hot-step','S' ],
  

  ]
  )
}

function gris() {
  genererChaussures(
  [
    ['Air max 95', 90 ,'gris', 'https://images.stockx.com/images/Air-Max-95-Light-Bone-GID-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1668064192','https://stockx.com/fr-fr/air-max-95-light-bone-gid','M'],
       
  ]
  )
}

function orange() {
  genererChaussures(
  [
    ['Nocta hot step 2', 200,'orange', 'https://images.stockx.com/images/Nike-Hot-Step-2-Drake-NOCTA-Total-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1711570152&fm=webp&q=60','https://addictsneakers.com/products/nike-hot-step-2-n-44','L'],
  
  ]
  )
}

function S() {
  genererChaussures(
  [
  ['Jordan Legacy', 70,'bleu','https://images.stockx.com/images/Air-Jordan-Legacy-312-Low-White-Light-Dew-Womens.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725875610','https://www.nike.com/fr/t/chaussure-air-jordan-legacy-312-low-pour-QjmxdW/HJ9041-100?CP=EUNS_AFF_AWIN_FR_197535_httpwwwstylightcom_384611%7C384633&utm_source=httpwwwstylightcom&utm_medium=affiliate&utm_campaign=197535&utm_content=384611%7C384633&sv1=affiliate&sv_campaign_id=197535&awc=16328_1728679875_1ebe8a18bb14ab7ae81a47702d1b3d96','S' ],
  ['Nocta hot step Air Terra', 140, 'noir', 'https://images.stockx.com/images/Nike-Hot-Step-Air-Terra-Drake-NOCTA-Black-University-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1661437379&fm=webp&q=60','https://www.nocta.com/products/blkgld-hot-step','S' ],
    
  ]
  )
}

function M() {
  genererChaussures(
  [
  ['Air max 95', 90 ,'gris', 'https://images.stockx.com/images/Air-Max-95-Light-Bone-GID-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1668064192','https://stockx.com/fr-fr/air-max-95-light-bone-gid','M'],
  ['Shox R4', 110, 'blanc' ,'https://images.stockx.com/images/Nike-Shox-R4-White-Metallic-Platinum-Barely-Grape-Womens-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1718112573&fm=webp&q=60','https://nakedcph.com/products/nike-shox-r4-ar3565-101?cjdata=MXxZfDB8WXww&cjevent=19ef4d7c881411ef831e02d70a18b8fa','M' ],
  
    
  ]
  )
}

function L() {
  genererChaussures(
  [
  ['Nocta hot step 2', 200,'orange', 'https://images.stockx.com/images/Nike-Hot-Step-2-Drake-NOCTA-Total-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1711570152&fm=webp&q=60','https://addictsneakers.com/products/nike-hot-step-2-n-44','L'],
  ['Skepta', 170 , 'bleu' ,'https://images.stockx.com/images/Nike-Air-Max-Tailwind-V-Skepta-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&dpr=2&trim=color&updated_at=1627326456&fm=webp&q=60','https://stockx.com/fr-fr/nike-air-max-tailwind-v-skepta','L'],
    
  ]
  )
}

let index = 0;


function TailleImage(event, s) {
  a= event.srcElement;
  a.style.scale = s;

}


