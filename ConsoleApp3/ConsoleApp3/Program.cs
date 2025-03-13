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
            Customer customer = new GoldCustomerRegister
            {
                FirstName = "chunnu",
                LastName = "Pandit",
                Email = "chuunu@pandit.com",

            };
            customer.Register();

            ICustomerDiscount discountCustomer = new GoldCustomerDiscount();
            discountCustomer.GetDiscountPercentage();

            IProcessOrder process = new ProcessorOrdered(discountCustomer);
            process.ProcessOrder();

            
        }
    }

    public class Customer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        //public CustomerType Type { get; set; }

        public virtual void Register()
        {
            Console.WriteLine("Customer is registered");
        }

    }
    public class GoldCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a GOLD customer");
        }
    }

    public class SilverCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Silver customer");
        }
    }

    public class BronzeCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Bronze customer");
        }
    }

    public class PlatinumCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Platinum customer");
        }
    }

    public interface ICustomerDiscount
    {
        int GetDiscountPercentage();
    }

    public class BronzeCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 15;
        }
    }

    public class SilverCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 20;
        }
    }

    public class GoldCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 25;
        }
    }

    public class PlatinumCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 27;
        }
    }

    public interface Isavecustomer
    {
        bool SaveCustomer();
    }

    public class savedcustomer : Isavecustomer
    {
        private Customer _customer;

        public savedcustomer(Customer customer)
        {
            _customer = customer;
        }
        public bool SaveCustomer()
        {
            Console.WriteLine($"{_customer.FirstName} saved to database.");
            return true;
        }
    }

    public interface IProcessOrder
    {
        void ProcessOrder();
    }

    public class ProcessorOrdered : IProcessOrder
    {
        private ICustomerDiscount _customerDiscount;
        public ProcessorOrdered(ICustomerDiscount customerDiscount)
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

    public class Leads:Customer

    {
        public string Name;
        public string Lastname;

        public void GetLeadsDetails()
        {
            Console.WriteLine($"{Name}");
        }
    }
}

