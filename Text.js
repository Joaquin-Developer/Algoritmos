/**
 * Algoritmo para validar un string:
 * La cadena no puede empezar ni terminar con espacios
 * tampoco puede contener numeros, ni mayusculas
 */

const validText = (text) => {
    const array = text.split("")
    if (array.length == 0) return false

    for (const char of text) {
        if (!isNaN(char) || char == " ") {
            return false
        } else if (char.toUpperCase() == char) {
            return false
        }
    }
    
    return true
}
