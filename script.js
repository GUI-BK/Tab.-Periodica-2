import { colecaoElementosExp } from "./dados.js";
function criarTabPer(elementos){
const table = document.createElement('table');
table.classList.add('tabela-periodica');
table.classList.add('col-12');
for(let i = 1; i <= 10; i++){
    let row = document.createElement('tr');

    for( let j = 1; j <= 18; j++){
        let col = document.createElement('td');

        const elemment = elementos.find(el => el.linha == i && el.coluna == j);
        if(elemment){
        col.innerHTML =`
        <div style="background-color:${elemment.corGrupo || '#FFFFF'};"></div>
        `

        }
        row.appendChild(col);
    }
    table.appendChild(row);
}
    document.body.appendChild(table);
}
criarTabPer(colecaoElementosExp);
