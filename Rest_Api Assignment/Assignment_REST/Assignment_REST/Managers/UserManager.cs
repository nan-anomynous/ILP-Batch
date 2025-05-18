namespace Assignment_REST.Managers
{
    public class UserManager : IUserManager
    {
        public string AddUser(User user)
        {
            return "User added";
        }

        public string DeleteUser(int id)
        {
            return "User is Deleted";
        }

        public string GetAllUsers()
        {
            return "All Users are recieved";
        }

        public string GetUserById(int id)
        {
            return "User recieved of the id that you provided";
        }

        public string UpdateUser(int id)
        {
            return "User is Updated";
        }
    }
}
