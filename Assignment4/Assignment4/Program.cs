using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment4
{
    class Program
    {
        public class FoodItem
        {
            public int ID;
            public string Name;
            public double Price;
            public string Category;
            
            public  FoodItem(int Id,string name,double price,string category)
            {
                ID = Id;
                Name = name;
                Price = price;
                Category = category;

            }
        }
        public static List<FoodItem> Menu = new List<FoodItem>();
        public static Dictionary<int,FoodItem> MenuOrder = new Dictionary<int, FoodItem>();
        public static Queue<FoodItem> PendingOrderlist = new Queue<FoodItem>();
        public static Stack<FoodItem> DeliverOrders = new Stack<FoodItem>();
        public static HashSet<string> UniqueCategory = new HashSet<string>();
        public static void AddFoodItem() 
        {
            Console.Write("Enter the food item to be added in menu");

            Console.Write("Enter the id of the food item: ");
            int id = int.Parse(Console.ReadLine());

            Console.Write("Enter the name of the food item: ");
            string name = Console.ReadLine();

            Console.Write("Enter the Price of the food item: ");
            double price = double.Parse(Console.ReadLine());

            Console.Write("Enter the Category of the food item: ");
            string category = Console.ReadLine();
            Console.WriteLine("Your Item Is Added In Menu");

            FoodItem foodItem = new FoodItem(id, name, price, category);

            Menu.Add(foodItem);
            UniqueCategory.Add(foodItem.Category);
        }
        public static void ShowMenu()
        {
            Console.WriteLine("The menu is");
            foreach (var item in Menu)
            {
                Console.WriteLine($"Id: {item.ID}, Name: {item.Name}, Price: {item.Price}, Category: {item.Category}");
            }
        }
        public static void PlaceOrder()
        {
            Console.WriteLine("Enter the food id");
            int id = int.Parse(Console.ReadLine());

            bool isThere = false;

            foreach (var item in Menu)
            {
                if (item.ID == id)
                {
                    MenuOrder.Add(item.ID, item);
                    PendingOrderlist.Enqueue(item);
                    isThere = true;
                }
            }

            if(isThere==true)
            {
                Console.WriteLine("Your order has been placed");
            }
            else
            {
                Console.WriteLine("Your order has not been placed");
            }
        }
        public static void DeliverOrder()
        {
            bool isDelivered = false; 
            if (PendingOrderlist.Count > 0)
            { 
                DeliverOrders.Push(PendingOrderlist.Dequeue());
                isDelivered = true;
            }

            if (isDelivered)
            {
                Console.WriteLine("The order is delvered");
            }else
            {
                Console.WriteLine("The order is not delvered");
            }
        }
        public static void ShowPendingOrder()
        {
            Console.WriteLine("The pending orders are");
            foreach (var item in PendingOrderlist)
            {
                Console.WriteLine($"Id: {item.ID}, Name: {item.Name}, Price: {item.Price}, Category: {item.Category}");
            }
        }
        public static void ShowDeliveredOrder()
        {
            Console.WriteLine("The delivered orders are");
            foreach (var item in DeliverOrders)
            {
                Console.WriteLine($"Id: {item.ID}, Name: {item.Name}, Price: {item.Price}, Category: {item.Category}");
            }
        }
        public static void ShowFoodCategoreies()
        {
            Console.WriteLine("The food catgories we have");
            foreach (var item in UniqueCategory)
            {
                Console.WriteLine($"{item}");
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to food ordering system");
            while (true)
            {
                Console.WriteLine("1. Add Food Item");
                Console.WriteLine("2. Show Menu");
                Console.WriteLine("3. Place Order");
                Console.WriteLine("4. Deliver Order");
                Console.WriteLine("5. Show Pending Deliveries");
                Console.WriteLine("6. Show Delivered Orders");
                Console.WriteLine("7. Show Food Categories");
                Console.WriteLine("8. Exit");
                Console.Write("Enter your choice: ");

                string choice = Console.ReadLine();

                if (choice == "1")
                {
                    AddFoodItem();
                }
                else if (choice == "2")
                {
                    ShowMenu();
                }
                else if (choice == "3")
                {
                    PlaceOrder();
                }
                else if (choice == "4")
                {
                    DeliverOrder();
                }
                else if (choice == "5")
                {
                    ShowPendingOrder();
                }
                else if (choice == "6")
                {
                    ShowDeliveredOrder();
                }
                else if (choice == "7")
                {
                    ShowFoodCategoreies();
                }
                else if (choice == "8")
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Your choice is wrong, enter a valid choice");
                }
            }
        }
    }
}
