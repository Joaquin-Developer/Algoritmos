using System;

namespace piedra_papel_tijera
{
    class Program
    {
        static void Main(string[] args)
        {
            new Game().Start();
        }
    }

    class Game
    {
        private double PtsUser { get; set; }
        private double PtsComputer { get; set; }
        private string Username { get; set; }

        public void Start()
        {
            Console.WriteLine("Ingresar nombre de usuario");
            this.Username = Console.ReadLine();
            Console.WriteLine($"Nombre ingresado: { this.Username }");
        }

        void Reset()
        {
            this.PtsComputer = 0;
            this.PtsUser = 0;
        }

    }

}
