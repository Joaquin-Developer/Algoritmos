
public class Max {

    public static void main(String[] args) {
        int a = 4, b = 2;
        System.out.println("Maximo entre " + a + " y " + b + ": "+ max(a, b));
        infininteLoop();
    }

    static int max(int a, int b) {
        return (a > b) ? a : b;
    }

    static void infininteLoop() {
        for ( ; true; ) {
            System.out.println("xd");
        }
    }

}