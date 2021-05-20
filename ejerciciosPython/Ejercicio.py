

def f1(x, y):
    return (pow(x, 5) / 5 * y ) + (pow(x, 4) / 4 * y ) + (pow(x, 3) / 3 * y ) + (pow(x, 2) / 2 * y ) + (1)

def f2(x, y):
    return None

if __name__ == "__main__":
    x = int(input("Ingresar valor de x: "))
    y = int(input("Ingresar valor de y: "))
    print("f1({},{}) = {}".format(x, y, f1(x, y)))
    print("f2({},{}) = {}".format(x, y, f2(x, y)))

