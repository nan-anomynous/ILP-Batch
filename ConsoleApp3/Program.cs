using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    public class Program
    { 
        public static void Main(string[] args)
        {
            ICustomer customer = new GoldCustomer
            {
                FirstName = "chunnu",
                LastName = "Pandit",
                Email = "chuunu@pandit.com",

            };
            customer.Register();

            IDiscount discountCustomer = new GoldCustomer();
            discountCustomer.GetDiscountPercentage();

            IOrder process = new Order(discountCustomer);
            process.ProcessOrder();
            
        }
    }
    public interface ICustomer
    {
        int CustomerId { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
        string Email { get; set; }

        //public CustomerType Type { get; set; }

        void Register();

    }
    public class GoldCustomer : ICustomer, IDiscount
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a GOLD customer");
        }
        public int GetDiscountPercentage()
        {
            return 25;
        }
    }

    public class SilverCustomer : ICustomer, IDiscount
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Silver customer");
        }
        public int GetDiscountPercentage()
        {
            return 20;
        }
    }

    public class BronzeCustomer : ICustomer, IDiscount
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Bronze customer");
        }
        public int GetDiscountPercentage()
        {
            return 15;
        }
    }

    public class PlatinumCustomer : ICustomer, IDiscount
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Platinum customer");
        }
        public int GetDiscountPercentage()
        {
            return 27;
        }
    }

    public interface IDiscount
    {
        int GetDiscountPercentage();
    }

    public interface ICustomerRepository
    {
        bool SaveCustomer();
    }

    public class savedcustomer : ICustomerRepository
    {
        private ICustomer _customer;

        public savedcustomer(ICustomer customer)
        {
            _customer = customer;
        }
        public bool SaveCustomer()
        {
            Console.WriteLine($"{_customer.FirstName} saved to database.");
            return true;
        }
    }

    public interface IOrder
    {
        void ProcessOrder();
    }

    public class Order : IOrder
    {
        private IDiscount _customerDiscount;
        public Order(IDiscount customerDiscount)
        {
            _customerDiscount = customerDiscount;
        }
        public void ProcessOrder()
        {
            var discount = _customerDiscount.GetDiscountPercentage();
            Console.WriteLine($"Order processed with {discount}% discount.");
            Console.WriteLine("Order Placed Successfully");
        }
    }

    public class Leads:IDiscount

    {
        public string Name;
        public string Lastname;

        public int GetDiscountPercentage()
        {
            return 5;
        }

        public void GetLeadsDetails()
        {
            Console.WriteLine($"{Name}");
        }
    }
}

