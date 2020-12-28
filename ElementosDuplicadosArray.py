
def unaFormaDeResolverlo(array):
    arrayAux = []
    for elem in array:
        if not (elem in arrayAux):
            arrayAux.append(elem)

    return arrayAux

# otra forma de hacer la función de arriba:
def removeDuplicates(array):
    return list(set(array))

array = removeDuplicates([1,2,5,3,2,3,4,5,1,1,6,6,7])

cadena = ""
for elem in array:
    cadena += (str(elem) + " ")
    #print(elem)

print(cadena)    

