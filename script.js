import { colecaoElementosExp } from "./dados.js";

const tableDiv = document.getElementById('tableDiv');
function criarTabPer(api_data){
const table = document.createElement('table');
table.classList.add('tabela-periodica', 'col-12');

for(let i = 1; i <= 10; i++){
    let row = document.createElement('tr');

    for( let j = 1; j <= 18; j++){
        let col = document.createElement('td');

        const elemment = api_data.find(el => el.linha == i && el.coluna == j);
        if(elemment){
            
        col.innerHTML =`
        <div class="elemento col-12 rounded-2" style="background-color:${elemment.corGrupo};">
            <div class="row" style="height: 25%;">
                <div class="col-12 d-flex justify-content-end">
                    <span class="numero_atomico">${elemment.numeroAtomico}</span>
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
     
        }
        row.appendChild(col);
    };
    table.appendChild(row);
};
    tableDiv.appendChild(table);
};
criarTabPer(colecaoElementosExp);

function info_div(api_data) {

    
    let selectedAtomico = this.querySelector('.numero_atomico');

    const elemment = api_data.find(el => el.numeroAtomico == selectedAtomico);



    let infoDiv = document.createElement('div');
    infoDiv.id = 'infoDiv';
    infoDiv.innerHTML = `
        <div class="row">
            <div class="col-12">
                <h1 id="info_nome">${elemment.nome}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <span id="info_atomico">${elemment.numeroAtomico}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <span id="info_grupo">${elemment.grupo}</span>
            </div>
        </div>
         <div class="row">
            <div class="col-12">
                <span id="info_massa">${elemment.massaAtomica}</span>
            </div>
        </div>
        
    `;

    tableDiv.appendChild(infoDiv);
}

const elementos = document.querySelectorAll('.elemento');
elementos.forEach(elemento => {
    elemento.addEventListener('click', function() {
    let selectedElemment = this;
    
    let selectedAtomico = selectedElemment.querySelector('.numero_atomico');

    const elemment = colecaoElementosExp.find(el => el.numeroAtomico == selectedAtomico.innerText);



    let infoDiv = document.createElement('div');
    infoDiv.id = 'infoDiv';
    infoDiv.style.border = "3px solid " + elemment.corGrupo;
    infoDiv.style.color = elemment.corGrupo
    infoDiv.classList.add('text-center');
    infoDiv.innerHTML = `
        <div class="row">
            <div class="col-12">
                <h1 id="info_nome">${elemment.nome}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <span id="info_atomico">${elemment.numeroAtomico}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <span id="info_grupo">${elemment.grupo}</span>
            </div>
        </div>
         <div class="row">
            <div class="col-12">
                <span id="info_massa">${elemment.massaAtomica}</span>
            </div>
        </div>
        
    `;
    let removeDiv = document.getElementById('removeDiv');
    if(removeDiv.hasChildNodes()){
        removeDiv.removeChild(removeDiv.children[0]);
        removeDiv.appendChild(infoDiv);
    }else{
        removeDiv.appendChild(infoDiv)
    }
    
    });

    if(elemento.style.backgroundColor === 'rgb(255, 215, 0)'){
        elemento.classList.add('mt-5');
    }
})

