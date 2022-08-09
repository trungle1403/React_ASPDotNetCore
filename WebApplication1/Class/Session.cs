using Microsoft.AspNetCore.Mvc;
namespace WebApplication1.Class
{
    public class Session : Controller
    {
        public void SetID(string data)
        {
            HttpContext.Session.SetString("aa", "kkk");
        }
    }
}
