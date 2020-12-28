class Libro {

    codigo: number;
    nombre: string;

    constructor(codigo: number, nombre: string) {
        this.codigo = codigo;
        this.nombre = nombre;
    }

    toString(): string {
        return "Codigo: " + this.codigo + ", Nombre: " + this.nombre;
    }

}

//let entrada: number = 4;

//let coleccion = Libro[];

let unLibro = new Libro(1, "Harry Potter");

console.log(unLibro.toString());

