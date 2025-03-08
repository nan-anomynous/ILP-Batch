using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {

        static void Main(string[] args)
        {

            Logger logger = GetLogger("cloud");
            logger.Log();

            Logger logger2 = GetLogger("db");
            logger2.Log();

            Logger logger3 = GetLogger("file");
            logger3.Log();


              ILoggerInterface loggerinterface = GetInterfaceLogger("cloud");
              loggerinterface.Log();

            ILoggerInterface loggerinterface1 = GetInterfaceLogger("file");
            loggerinterface1.Log();

            ILoggerInterface loggerinterface2 = GetInterfaceLogger("db");
            loggerinterface2.Log();
        }

        public static Logger GetLogger(string type)
        {
            if (type == "file")
            {
                return new FileLogger();
            } else if (type == "cloud")
            {
                return new CloudLogger();
            } else
            {
                return new DbLogger();
            }
        }
        public static ILoggerInterface GetInterfaceLogger(string type)
        {
            if (type == "file")
            {
                return new FileInterfaceLogger();
            }
            else if (type == "cloud")
            {
                return new CloudInterfaceLogger();
            }
            else
            {
                return new DbInterfaceLogger();
            }
        }
    }
}
