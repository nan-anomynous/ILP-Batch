using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    public class Logger
    {
        public virtual void Log()
        {
            Console.WriteLine("I am a logger");
        }
    }

    public class DbLogger : Logger
    {
        public override void Log()
        {
            Console.WriteLine("Db logger");
        }
    }
    public class FileLogger : Logger
    {
        public override void Log()
        {
            Console.WriteLine("File logger");
        }
    }
    public class CloudLogger : Logger
    {
        public override void Log()
        {
            Console.WriteLine("Cloud logger");
        }
    }
}
