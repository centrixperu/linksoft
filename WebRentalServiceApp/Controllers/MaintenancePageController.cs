using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebRentalServiceApp.Controllers
{
    [AllowAnonymous]
    public class MaintenancePageController : Controller
    {
        // GET: MaintenancePage
        public ActionResult Index()
        {
            return View();
        }
    }
}