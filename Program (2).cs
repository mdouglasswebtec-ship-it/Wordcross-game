using System;

class Program
{
    static char[,] grid = {
        { 'C', 'A', 'T', ' ', ' ' },
        { ' ', ' ', 'A', ' ', ' ' },
        { 'D', 'O', 'G', ' ', ' ' },
        { ' ', ' ', ' ', ' ', ' ' },
        { ' ', ' ', ' ', ' ', ' ' }
    };

    static string[] words = { "CAT", "DOG" };
    static bool[] found = { false, false };

    static void Main()
    {
        Console.WriteLine("Welcome to Wordcross!\n");
        Console.WriteLine("Find the hidden words in the grid. Type your guess (e.g., CAT):\n");
        while (!AllWordsFound())
        {
            PrintGrid();
            Console.Write("Your guess: ");
            string guess = Console.ReadLine().ToUpper();
            bool correct = false;
            for (int i = 0; i < words.Length; i++)
            {
                if (!found[i] && guess == words[i])
                {
                    found[i] = true;
                    correct = true;
                    Console.WriteLine($"Correct! You found: {guess}\n");
                }
            }
            if (!correct)
            {
                Console.WriteLine("Incorrect or already found. Try again!\n");
            }
        }
        Console.WriteLine("Congratulations! You found all the words!");
    }

    static void PrintGrid()
    {
        Console.WriteLine("Grid:");
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                if (grid[i, j] == ' ')
                    Console.Write(". ");
                else
                    Console.Write(grid[i, j] + " ");
            }
            Console.WriteLine();
        }
        Console.WriteLine();
    }

    static bool AllWordsFound()
    {
        foreach (bool f in found)
            if (!f) return false;
        return true;
    }
}
