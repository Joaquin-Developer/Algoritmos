



def factorial(number: int) -> int:
    if number == 0:
        return 1
    return (number * factorial(number - 1))

def combinatoria(n: int, k: int) -> int:
    return factorial(n) / (factorial(n - k) * factorial(k))
    # (n!) / ((n - k)! k!)

if __name__ == '__main__':
    n = int(input("enter value of n: "))
    k = int(input("enter value of k: "))
    # print(combinatoria(8, 5))
    print(combinatoria(n, k))
