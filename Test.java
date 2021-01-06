import java.util.Scanner;

public class Test {
    
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingresar un numero: (usar , para separar decimales)");
        try {
            Double num = Double.valueOf(scanner.nextFloat());
            scanner.close();
            System.out.println("El numero " + num + " tiene " + calculateDigits(num) + " cifras");
        } catch (Exception ex) {
            System.out.println("Error: " + ex.toString());
        }
        
    }

    static int calculateDigits(Double num) {
        String myNumString = num.toString();

        for (int i = 0; i < myNumString.length(); i++) {
            if (myNumString.charAt(i) == '.') {
                return i;
            }
        }
        return 0;
    }

}
