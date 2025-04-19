using Microsoft.AspNetCore.Mvc;
using Assignment_REST.Managers;

namespace Assignment_REST.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : Controller
    {
        private IBookManager _bookManager;

        public BookController(IBookManager bookManager) 
        {
            _bookManager = bookManager;
        }

        [HttpGet("/books")]
        public IActionResult GetAllBooks()
        {
            var res = _bookManager.GetAllBooks();
            return Ok(res);
        }

        [HttpGet("/books/get")]
        public IActionResult GetBookById(int id)
        {
            var res = _bookManager.GetBookById(id);
            return Ok(res);
        }

        [HttpPost("/books/add")]
        public IActionResult AddBook([FromBody] Book book)
        {
            var res = _bookManager.AddBook(book);
            return Ok(res);
        }

        [HttpPut("/book/update")]
        public IActionResult UpdateBook(int id)
        {
            var res = _bookManager.UpdateBook(id);
            return Ok(res);
        }

        [HttpDelete("/books/delete")]
        public IActionResult DeleteBook(int id)
        {
            var res = _bookManager.DeleteBook(id);
            return Ok(res);
        }
    }
}

public class Book
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Author { get; set; }
    public int yearOfPublication { get; set; }
}
