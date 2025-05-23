import { colecaoElementosExp } from "./dados.js";
function criarTabPer(elemments){
const table = document.createElement('table');
table.classList.add('tabela-periodica');
table.classList.add('col-12');
for(let i = 1; i <= 10; i++){
    let row = document.createElement('tr');

    for( let j = 1; j <= 18; j++){
        let col = document.createElement('td');

        const elemment = elemments.find(el => el.linha == i && el.coluna == j);
        if(elemment){
            
        col.innerHTML =`
        <div class="elemento col-12" style="background-color:${elemment.corGrupo};">
            <div class="row" style="height: 25%;">
                <div class="col-12 d-flex justify-content-end">
                    <span class"numero_atomico">${elemment.numeroAtomico}</span>
                </div>
            </div>
            <div class="row" style="height: 50%;">
                <div class="col-12 d-flex justify-content-center">
                    <strong class="simbolo">${elemment.simbolo}</strong>
                </div>
            </div>    
            <div class="row" style="height: 25%;">
                <div class="col-12 d-flex justify-content-center">
                    <span class="massa_atomica">${parseFloat(elemment.massaAtomica).toFixed(2)}</span>
                </div>
            </div>    
        </div>
        `
        if(elemment.grupo === 'lantanídeo'){
            const elementos = document.querySelectorAll('.elemento');
            console.log(elementos);
            elementos.forEach(elemento => {
                elemento.classList.add('margin-top');
            });
        }

        }
        row.appendChild(col);
    };
    table.appendChild(row);
};
    document.body.appendChild(table);
};
criarTabPer(colecaoElementosExp);
