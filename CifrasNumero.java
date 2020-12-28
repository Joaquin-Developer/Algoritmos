import java.util.Scanner;

class CifrasNumero {

    public static void main(String[] args) {
        /**
         * No funciona correctamente con decimales grandes (5/DIC/2020)
         */
        try {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Ingresar un entero para conocer sus cifras: ");
            float numero = scanner.nextFloat();
            scanner.close();
            System.out.println(numero + " tiene " + cifrasNumero(numero) + " cifras");    
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    static int cifrasNumero(float number) {
        char numberChars[] = String.valueOf(number).toCharArray();
        int cifras = 0;

        for (char elem : numberChars) {
            if (elem == '.') 
                break;

            cifras++;
        }
        return cifras;
    }

}
