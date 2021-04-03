using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebRentalServiceApp.Controllers
{
    [AllowAnonymous]
    public class ErrorPageController : Controller
    {
        // GET: ErrorPage
        public ActionResult Index(int error = 0)
        {
            switch (error)
            {
                case 505:
                    ViewBag.TitleError = "Ocurrio un error inesperado";
                    ViewBag.DescriptionError = "Esto es muy vergonzoso, esperemos que no vuelva a pasar.";
                    break;

                case 404:
                    ViewBag.TitleError = "Página no encontrada";
                    ViewBag.DescriptionError = "La URL que está intentando ingresar no existe.";
                    break;

                default:
                    ViewBag.TitleError = "Algo salio mal";
                    ViewBag.DescriptionError = "Estamos trabajando para solucionarlo.";
                    break;
            }
            return View();
        }
    }
}