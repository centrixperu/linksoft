using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebRentalServiceApp.Controllers
{
    public class AuthenticationController : Controller
    {
        // GET: Authentication
        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }
    }
}