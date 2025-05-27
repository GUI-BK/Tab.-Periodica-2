//Importa a coleção de elementos da api
import { colecaoElementosExp } from "./dados.js";

//Captura a div da tabela pelo id
const tableDiv = document.getElementById('tableDiv');

//Função de criar uma tabela periódica
function criarTabPer(api_data){

//Cria um elemento table e armazena em uma variável
const table = document.createElement('table');

//Adiciona classes para a tabela
table.classList.add('tabela-periodica', 'col-12');

//Cria um sistema de loop usando for
for(let i = 1; i <= 10; i++){

    //Cria um elemento tr e armazena em uma variável
    let row = document.createElement('tr');

    //Cria um sistema de loop dentro do sistema de loop
    for( let j = 1; j <= 18; j++){

        //Cria um elemento td e armazena em uma variável
        let col = document.createElement('td');

        //Procura na api o elemento correspondente com o número de linhas e colunas
        const elemment = api_data.find(el => el.linha == i && el.coluna == j);

        //Cria um if para checar se o elemento foi encontrado
        if(elemment){
        
        //Define a estrutura HTML dos elementos, utilizando os dados do elemento encontrado para preenchimento
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
        //Insere o elemento na linha
        row.appendChild(col);
    };
    //Insere a linha na tabela
    table.appendChild(row);
};
    //Insere a tabela no container da tabela
    tableDiv.appendChild(table);
};

//Chama a função com os dados da api
criarTabPer(colecaoElementosExp);

//Cria um array com todos os elementos
const elementos = document.querySelectorAll('.elemento');

//Cria um sistema de loop no forEach
elementos.forEach(elemento => {
    //Cria um evento de clique para os elementos
    elemento.addEventListener('click', function() {
    
    //Captura o elemento que foi clicado
    let selectedElemment = this;
    
    //Captura o numero atomico do elemento clicado
    let selectedAtomico = selectedElemment.querySelector('.numero_atomico');

    //Procura na api o elemento correspondente usando o numero atomico
    const elemment = colecaoElementosExp.find(el => el.numeroAtomico == selectedAtomico.innerText);


    //Cria um elemento div e armazena na variável 'infoDiv'
    let infoDiv = document.createElement('div');

    //Define o id da infoDiv
    infoDiv.id = 'infoDiv';

    //Define a borda da infoDiv
    infoDiv.style.border = "3px solid " + elemment.corGrupo;

    //Define a cor do texto da infoDiv
    infoDiv.style.color = elemment.corGrupo

    //Adiciona uma classe de centralização de texto para a infoDiv
    infoDiv.classList.add('text-center');

    //Define a estrutura HTML da infoDiv, usando o elemento encontrado para preenchimento
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

    //Captura a removeDiv pelo id
    let removeDiv = document.getElementById('removeDiv');

    //Cria um if para checar se a removeDiv tem algum filho
    if(removeDiv.hasChildNodes()){
        //Caso sim:
            //Remove o filho mais velho
            removeDiv.removeChild(removeDiv.children[0]);

            //Adiciona a infoDiv nova
            removeDiv.appendChild(infoDiv);
    }else{
        //Caso não:
            //Adiciona a infoDiv na removeDiv
            removeDiv.appendChild(infoDiv)
    }
    
    });

    //Cria uma estrutura para checar se o elemento faz parte do grupo dos lantanídeos, usando a cor característica
    if(elemento.style.backgroundColor === 'rgb(255, 215, 0)'){
        
        //Caso sim, adiciona uma classe de margin-top para o elemento
        elemento.classList.add('mt-5');
    }
})

