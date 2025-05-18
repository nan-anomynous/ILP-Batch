﻿namespace Assignment_REST.Managers { 

    public interface IUserManager
    {
        public string GetUserById(int id);
        public string AddUser(User user);
        public string UpdateUser(int id);
        public string DeleteUser(int id);
        public string GetAllUsers();
    }
}
