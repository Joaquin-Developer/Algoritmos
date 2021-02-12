/**
 * 
 * En general funciona bien, pero genera algunos undefined con 
 * índices fuera de rango. Arreglar eso!!
 * @param passLength
 */
function generateAuthentication(passLength: number): string {
    
    const numbers: string[] = getArray([48, 57]);
    const symbols: string[] = getArray([33, 47]);
    const may: string[] = getArray([65, 90]);
    const min: string[] = getArray([97, 122]);
    const allElems: string[] = numbers.concat(symbols, may, min);
    let generatedAuth: string = "";

    for (let index = 0; index <= passLength; index++) {
        generatedAuth += (allElems[(Math.floor(Math.random() * allElems.length) + 1)]);
    }
    return generatedAuth;
}

function getArray(range: number[]): string[] {
    let array: string[] = [];
    for (let index = range[0]; index <= range[1]; index++) {
        array.push(String.fromCharCode(index));
    }
    return array;
}

(function main(): void {
    console.log(`Contraseña generada: ${generateAuthentication(10)}`);
    // for (let index = 0; index < 10; index++) {
    //     console.log(generateAuthentication(10));
    //     console.log();
    // }
})();
