
/* VISITEURS */

const visiteurs = document.querySelector('#visiteurs');

//Récupérer tous les visiteurs
//GET http://localhost:90/gsb/visiteur
let urlVisiteur = `http://localhost:90/gsb/visiteur`;
fetch(urlVisiteur)
    .then(response => response.json()
        .then((data) => {
            console.log(data);
            data.forEach(visiteur => {
                console.log(visiteur);
                visiteurs.insertAdjacentHTML('beforeend', `
                    <li class="usersList"> 
                        <h4> ${visiteur.nom} </h4>
                        <p> Matricule : ${visiteur.id} </p>
                    </li>
                `);
            });
        }))
    .catch((e) => {
        console.log(e);
    });


/* RAPPORT */

//Récupération de la liste des rapports
//GET http://localhost:90/gsb/rapport

// let url = `http://localhost:90/gsb/rapport`;
// fetch(url)
// .then(response => response.json()
// .then((data) => {
//     console.log(data);
//     data.Search.forEach(rapport => {
//         console.log(rapport);
//         rapports.insertAdjacentHTML('beforeend', `
//         <li> 
//             ${rapport} 
//         </li>
//         `);
//     });
// }))
// .catch((e) => {
//     console.log(e);
// });

//Récupérer un rapport par son ID  --> GET http://localhost:90/gsb/rapport/{id}


//Poster un rapport --> POST  http://localhost:90/gsb/visiteur/1/rapport
const motif = document.querySelector('#motif');
const bilan = document.querySelector('#bilan');
const form = document.querySelector('form');
const bouton = document.querySelector('#submitRapports');
console.log(bouton);
    
bouton.addEventListener('click', (event) => {
    event.preventDefault();

    const id = 3;
    const urlRapport =  `http://localhost:90/gsb/visiteur/${id}/rapport`; 

    /* SANS FORMDATA */

    // fetch(urlRapport, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         motif: motif.value,
    //         bilan: bilan.value
    //     }),
    //     headers: { 
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(response => response.json())
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((e) => {
    //     console.log(e);
    // });  


    /* AVEC FORM DATA */
    const formData = new FormData();
    var newRapport = {
        motif: motif.value,
        bilan: bilan.value
    };
        
    formData.forEach(function(value, key){
        object[key] = value;
    });

    var json = JSON.stringify(newRapport);

    fetch(urlRapport, {
        method: 'POST',
        body: json,
        headers: { 
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    });  
});

//Modifier un rapport --> PUT http://localhost:90/gsb/rapport/{id}
//Supprimer un rapport --> DELETE http://localhost:90/gsb/rapport/{id}





