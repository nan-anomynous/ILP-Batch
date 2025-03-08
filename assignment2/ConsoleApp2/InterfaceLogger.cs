using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    public interface ILoggerInterface
    {
        void Log();
    } 

    public class DbInterfaceLogger: ILoggerInterface
    {
        public void Log()
        {
            Console.WriteLine("DB logger by interface");
        }
    }

    public class CloudInterfaceLogger : ILoggerInterface
    {
        public void Log()
        {
            Console.WriteLine("Cloud logger by interface");
        }
    }

    public class FileInterfaceLogger : ILoggerInterface
    {
        public void Log()
        {
            Console.WriteLine("File logger by interface");
        }
    }
}