
let options = {
    passwordLength: 10,  // total de carácteres que quiero que tenga mi array.
    numbers: true,  // 0..9
    may: true,      // mayus
    symbols: true   // all simbols (!@$%&/(())/=? etc...)
};

// completar: ...
let numbers: string[];
let mayus: string[];
let symbols: string[];
let myFinalArray: string[];

function generatePassword(): void {

    if (options.numbers) myFinalArray = myFinalArray.concat(numbers);
    if (options.may) myFinalArray = myFinalArray.concat(mayus);
    if (options.symbols) myFinalArray = myFinalArray.concat(symbols);


    // seguir...

}


generatePassword();
