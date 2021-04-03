using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace WebRentalServiceApp.App_Start
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundlesbefore/lib").Include(
                        "~/Content/datatable/_initialization/js/jquery.dataTables.js",
                        "~/Content/datatable/keyTable/js/dataTables.keyTable.js",

                        //"~/Content/datatable/responsive/js/dataTables.responsive.min.js",
                        "~/Content/datatable/responsive/js/dataTables.responsive.js",

                        "~/Content/datatable/select/js/dataTables.select.min.js",
                        "~/Content/input/js/input.lks.js",
                        "~/Content/select2/select2.full.js",
                        //"~/Content/scroll/js/jquery.mCustomScrollbar.concat.min.js",
                        //"~/Content/setting-active-states-on-sticky-navigations-while-scrolling/js/index.js",
                        "~/Content/datatable/rowGroup/js/dataTables.rowGroup.min.js",
                        "~/Content/menu_nivel/js/main.js",


                        "~/Content/datatable/exportar/js/dataTables.buttons.min.js",
                        "~/Content/datatable/exportar/js/jszip.min.js",
                        "~/Content/datatable/exportar/js/buttons.html5.min.js",
                        "~/Content/datatable/exportar/js/pdfmake.min.js",
                        "~/Content/datatable/exportar/js/vfs_fonts.js",
                        "~/Content/datatable/exportar/js/buttons.print.min.js",


                        "~/Content/datatable/FixedColumn/FixedColumns-3.2.5/js/dataTables.fixedColumns.js",

                        "~/Content/select2/i18n/es.js",

                        //"~/Content/enjoyhint/dist/all.js", // tour - 3 importaciones

                        "~/Scripts/jquery/jquery-3.3.1.js",



                        "~/Content/sweetalert/sweetalert-dev.js"



                        ));
            bundles.Add(new ScriptBundle("~/bundlesafter/lib").Include(
                        "~/Scripts/materialize/materialize.js",

                        "~/Scripts/lks/funciones.lks.js",
                        "~/Scripts/lks/lks.datatables.js",
                        "~/Scripts/lks/lks.datatables_detalles.js",
                        "~/Scripts/lks/lks.objects.js",
                        "~/Scripts/lks/lks.transaccion.js",

                        "~/Scripts/lks/loadingoverlay.js", // estudiar bien en internet y cambiar de js

                        //"~/Scripts/lks/mdl_distrito.js",


                        //"~/Content/enjoyhint/wizard_fact.js", // tour - 3 importaciones



                        "~/Scripts/numeral/numeral.js",

                        "~/Scripts/jquery-ui/jquery-ui.js",

                        "~/Scripts/jquery.hotkeys/jquery.hotkeys.js",

                        "~/Content/iziToast-master/dist/js/iziToast.min.js",
                        
                        "~/Content/select/js/chosen.jquery.js",
                        "~/Content/select/js/init.js",

                        "~/Content/uploader/dist/image-uploader.min.js"


                        ));
            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate.min.js",
                        "~/Scripts/jquery.validate.unobtrusive.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/materialize/materialize.css",

                      "~/Content/materialize/lks/css/materialize.lks.css",

                      "~/Content/datatable/_initialization/css/jquery.dataTables.css",
                      "~/Content/datatable/_initialization.lks/css/jquery.dataTables.lks.css",

                      "~/Content/datatable/_materialize/css/datatables.materialize.lks.css",

                      //"~/Content/datatable/responsive/css/responsive.dataTables.min.css",
                      "~/Content/datatable/responsive/css/responsive.dataTables.css",

                      "~/Content/menu_nivel/css/style.css",

                      "~/Content/select2/select2.css",
                      
                      //"~/Content/scroll/css/jquery.mCustomScrollbar.css",

                       //"~/Content/setting-active-states-on-sticky-navigations-while-scrolling/css/style.css",

                       "~/Content/datatable/rowGroup/css/rowGroup.dataTables.min.css",

                       "~/Content/animate/animate.css",

                       "~/Content/fuentes/css.css",

                       "~/Content/iziToast-master/dist/css/iziToast.css",

                       "~/Content/fonts/css/fonts.css",



                       //"~/Content/enjoyhint/dist/enjoyhint.css", // tour - 3 importaciones



                      "~/Content/sweetalert/sweetalert.css",

                      "~/Content/uploader/dist/image-uploader.min.css"





                      ));
        }
    }
}