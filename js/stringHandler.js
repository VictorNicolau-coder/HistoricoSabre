export let ultimasEdicoes = [];

export function splitBlocks(value){
    const key_word = "OAC-";

    ultimasEdicoes = []

   // Limpeza inicial
    let rows = value
        .replace(/¥/g, '')        // remove o caractere indesejado
        .split("\n")              // quebra em linhas
        .map(row => row.trim())   // remove espaços nas bordas
        .filter(row => row !== ''); // remove linhas vazias

    // Agrupamento em blocos
    let blocks = [];
    let currentBlock = [];
    let prevRow = "";

    rows.forEach(row => {
    if (prevRow.includes(key_word)) {
            // Finaliza o bloco anterior ao encontrar a palavra-chave
            ultimasEdicoes.push(row);
            currentBlock.push(row);
            blocks.push(currentBlock);
            currentBlock = [];
        } else {
            currentBlock.push(row);
        }
        prevRow = row;
    });

    // Salva o último bloco
    if (currentBlock.length > 0) blocks.push(currentBlock);

    return blocks;
}

