#include <iostream>
#include <stdio.h>
#include <string.h>
using namespace std;

int calculateDigits(double number) {
    string myNumberString = to_string(number);
    for (int index = 0; index < myNumberString.length(); index++) {
        if (myNumberString[index] == '.') {
            return index;
        }
    }
    return 0;
}

int main() {
    double number;
    printf("Ingrese un numero (usar , para separar decimales) \n");
    cin >> number;
    string digits = to_string(calculateDigits(number));
    cout << "\nEl numero " + to_string(number) + " tiene " + digits + " cifras\n";
}

