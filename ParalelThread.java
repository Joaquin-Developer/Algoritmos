class ParalelThreads
{
    public static void runTasks() throws InterruptedException
    {
        DataCalculator dataCalculator =  new DataCalculator(1, 2);
        final int MAX_THREADS = 10;
        Thread[] threads = new Thread[MAX_THREADS];

        for (int index = 0; index < MAX_THREADS; index++)
        {
            threads[index] = new Thread(dataCalculator);
            threads[index].start();
        }
        for (int index = 0; index < MAX_THREADS; index++)
        {
            threads[index].join();
        }

    }

}

class DataCalculator implements Runnable
{
    private int a, b;

    public DataCalculator() { /* empty const. */ }
    public DataCalculator(int a, int b) { this.a = a; this.b = b; }

    @Override
    public void run()
    {
        
    }
}

