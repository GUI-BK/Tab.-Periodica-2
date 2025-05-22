function criarTabPer(elemento){
const table = document.createElement('table');
table.classList.add('col-md-12');

for(let i = 1; i <= 10; i++){
    let row = document.createElement('tr');

    for( let j = 1; j <= 18; j++){
        let col = document.createElement('td');

        const elemment = elemento.find(el => el.linha == i && el.coluna == j);
        if(elemment){
        col.innerHTML = j;
        }
        row.appendChild(col);
    }
    table.appendChild(row);
}

}
criarTabPer();
