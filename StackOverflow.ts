
function fun(): void {
    return anotherFun();
}

function anotherFun(): void {
    return fun();
}

fun();

