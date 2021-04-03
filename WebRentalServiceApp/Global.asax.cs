using Centrix.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.SessionState;
using WebRentalServiceApp.App_Start;

namespace WebRentalServiceApp
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            System.Web.Http.GlobalConfiguration.Configure(WebApiConfig.Register);
            GlobalFilters.Filters.Add(new AuthorizeAttribute());
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
        protected void Session_Start(object sender, EventArgs e)
        {
            HttpCookie WebRentalApplicatioCookie_ = Request.Cookies["_WebRentalApplication"];
            string SId_;
            if (WebRentalApplicatioCookie_ == null)
            {
                SessionIDManager manager = new SessionIDManager();
                SId_ = manager.CreateSessionID(HttpContext.Current);
                Session[EnumSession.Variable.SessionId.ToString()] = SId_;
                HttpCookie WebRentalApplicatioCookie = new HttpCookie("_WebRentalApplication");
                WebRentalApplicatioCookie.Values.Add("_SId", SId_);
                WebRentalApplicatioCookie.Expires = DateTime.Now.AddYears(1);
                Response.Cookies.Add(WebRentalApplicatioCookie);
            }
            else
            {
                if (!string.IsNullOrEmpty(WebRentalApplicatioCookie_.Values["_SId"]))
                {
                    SId_ = WebRentalApplicatioCookie_.Values["_SId"].ToString();
                    Session[EnumSession.Variable.SessionId.ToString()] = SId_;
                }
                else
                {
                    SessionIDManager manager = new SessionIDManager();
                    SId_ = manager.CreateSessionID(HttpContext.Current);
                    Session[EnumSession.Variable.SessionId.ToString()] = SId_;
                    WebRentalApplicatioCookie_.Values.Add("_SId", SId_);
                    WebRentalApplicatioCookie_.Expires = DateTime.Now.AddYears(1);
                    Response.Cookies.Add(WebRentalApplicatioCookie_);
                }
            }
        }
        protected void Application_Error(object sender, EventArgs e)
        {
            Exception exception = Server.GetLastError();
            Response.Clear();

            HttpException httpException = exception as HttpException;

            int error = httpException != null ? httpException.GetHttpCode() : 0;

            Server.ClearError();
            Response.Redirect(String.Format("~/ErrorPage/Index/{0}", error, exception.Message));
        }
        protected void Application_PostAuthorizeRequest()
        {
            System.Web.HttpContext.Current.SetSessionStateBehavior(System.Web.SessionState.SessionStateBehavior.Required);
        }
    }
}
