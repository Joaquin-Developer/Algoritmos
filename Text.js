
function validText(text) {
    let valid = false
    const array = text.split("")

    if (array.length === 0) {
        return false
    }

    for (const elem of array) {
        console.log(elem)
        if (elem !== " ") {
            valid = true
        }
    }
    return valid
}

const text = " d"
console.log(validText(text))

