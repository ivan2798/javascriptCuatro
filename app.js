//Forma Uno tabla dinamica
/*console.log(tennisRankings);

const Djokovic = ` 
     <div><h2>${tennisRankings[0].name}</h2></div>
`

const Nadal = ` 
     <div><h2>${tennisRankings[1].name}</h2></div>
`

document.body.innerHTML = Djokovic + Nadal

*/

//Forma Dos tabla dinamica
/*
const player = `
      <div><h2>${tennisRankings[0].name}</h2></div>
      <div><h2>${tennisRankings[1].name}</h2></div>
      <div><h2>${tennisRankings[2].name}</h2></div>
      <div><h2>${tennisRankings[3].name}</h2></div>
      <div><h2>${tennisRankings[4].name}</h2></div>
      <div><h2>${tennisRankings[5].name}</h2></div>
      <div><h2>${tennisRankings[6].name}</h2></div>
      <div><h2>${tennisRankings[7].name}</h2></div>
`

document.body.innerHTML = player
*/

//Forma 3

const displayRanking = () => {
    //crear un elemento div
    let container = document.createElement("DIV");
    container.className = "container";
    //asignar clase CredentialsContainer
    //iterador - contar hasta 10 y ponernos el indice
    for (let i=0; i < 10; i++){
        container.innerHTML += `
        <div><h2>${tennisRankings[i].name}</h2></div>`
    }
    //añadir container a document.body
    document.body.appendChild(container);
    //return document.body
    return document.body;
}

displayRanking()