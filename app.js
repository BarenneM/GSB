const visiteurs = document.querySelector('#visiteurs');

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
//Poster un rapport --> POST http://localhost:90/gsb/rapport
//Modifier un rapport --> PUT http://localhost:90/gsb/rapport/{id}
//Supprimer un rapport --> DELETE http://localhost:90/gsb/rapport/{id}


/* VISITEURS */

//Récupérer tous les visiteurs
//GET http://localhost:90/gsb/visiteur
let url = `http://localhost:90/gsb/visiteur`;
fetch(url)
    .then(response => response.json()
        .then((data) => {
            console.log(data);
            data.forEach(visiteur => {
                console.log(visiteur);
                visiteurs.insertAdjacentHTML('beforeend', `
                <li class="usersList"> 
                    <h4> ${visiteur.nom} </h4>
                    <p Matricule : ${visiteur.id} </p>
                </li>
                `);
            });
        }))
    .catch((e) => {
        console.log(e);
    });





