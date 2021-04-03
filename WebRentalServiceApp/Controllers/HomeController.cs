using Centrix.BusinessLogic;
using Centrix.Common;
using Centrix.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebRentalServiceApp.Controllers
{
    public class HomeController : Controller
    {

        // GET: Home
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }
        


        [AllowAnonymous]
        public ActionResult frm_al_sv_ct()
        {
            return View();
        }


        /*
        [AllowAnonymous]
        public ActionResult frm_ga_aac_ct()
        {
            return View();
        }


        [AllowAnonymous]
        public ActionResult frm_ga_nac_ct()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult frm_ga_per_ct()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult frm_ga_gac_ct()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult frm_ga_alu_ct()
        {
            return View();
        }
        */


        //=============================================================================
        [AllowAnonymous]
        public ActionResult frm_main()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult frm_main_modulo()
        {
            return View();
        }


        [AllowAnonymous]
        public ActionResult frm_ve_ct_opve()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult frm_al_ct_it()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult frm_em_ct_prs()
        {
            return View();
        }


        [AllowAnonymous]
        public ActionResult frm_ve_ts_ve()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult frm_login()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult frm_change_password()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult tbc_ve_prs()
        {
            return View();
        }
        //=============================================================================
















        [AllowAnonymous]
        public JsonResult Get_em_empuop_ln(string p_ccod_emp)
        {
            BLPrueba objBLPrueba = new BLPrueba();
            List<E_Get_em_empuop_ln> lstPrueba = new List<E_Get_em_empuop_ln>();
            lstPrueba = objBLPrueba.Listar_Get_em_empuop_ln(p_ccod_emp);

            return Json(lstPrueba, JsonRequestBehavior.AllowGet);
        }





        
        [AllowAnonymous]
        public JsonResult slq_usp_Get_em_mon_tpc_ln(string ic_ccod_emp, string ic_dfch_tpc)
        {

            //pi_dfch_tpc = pi_dfch_tpc.Replace("'", "");
            /*
            if (pi_dfch_tpc != "")
            {
                EndExecute;
            }
            */

            BLPrueba objBLPrueba = new BLPrueba();
            List<E_usp_Get_em_mon_tpc_ln> lstPrueba = new List<E_usp_Get_em_mon_tpc_ln>();
            lstPrueba = objBLPrueba.Lista_usp_Get_em_mon_tpc_ln(ic_ccod_emp, ic_dfch_tpc);

            return Json(lstPrueba, JsonRequestBehavior.AllowGet);
        }


        [AllowAnonymous]
        public JsonResult slq_usp_Get_al_it_um_saldo(string p_ccod_emp, string p_ccod_eje, string p_ccod_per, string p_ccod_uop, string p_ccod_it, string p_ccod_um)
        {
            BLPrueba objBLPrueba = new BLPrueba();
            List<E_usp_Get_al_it_um_saldo> lstPrueba = new List<E_usp_Get_al_it_um_saldo>();
            lstPrueba = objBLPrueba.Lista_usp_Get_al_it_um_saldo(p_ccod_emp, p_ccod_eje, p_ccod_per, p_ccod_uop, p_ccod_it, p_ccod_um);

            return Json(lstPrueba, JsonRequestBehavior.AllowGet);
        }


        //------------------------------------------------------- SESSION

      /*-----------------------------------------------------------------------------------------------------------------------------------------*/




        //------------------------------------------------------------------------------------------------------------------------------------

        
        //------------------------------------------------------------------------------------------------------------------------------------

     




        //------------------------------------------------------------------------------------------------------------------------------------





            
        //------------------------------------------------------------------------------------------------------------------------------------
            
        List<E_usp_Get_fa_doc_ser_ln> lq_usp_Get_fa_doc_ser_ln = new List<E_usp_Get_fa_doc_ser_ln>();
        BLPrueba objBL_usp_Get_fa_doc_ser_ln;

        [AllowAnonymous]
        public JsonResult JR_usp_Get_fa_doc_ser_ln(string p_ccod_emp, string p_cest, string p_ccod_doc)
        {
            objBL_usp_Get_fa_doc_ser_ln = new BLPrueba();

            //lq_usp_Get_fa_doc_ser_ln = (List<E_usp_Get_fa_doc_ser_ln>)Session[EnumSession.Variable.ES_usp_Get_fa_doc_ser_ln.ToString()];
            lq_usp_Get_fa_doc_ser_ln = (List<E_usp_Get_fa_doc_ser_ln>)Session[EnumSession.Variable.ES_usp_Get_fa_doc_ser_ln_Mtz.ToString()];

            if (!(lq_usp_Get_fa_doc_ser_ln != null))
            {
                lq_usp_Get_fa_doc_ser_ln = objBL_usp_Get_fa_doc_ser_ln.Lista_usp_Get_fa_doc_ser_ln(p_ccod_emp, p_cest);
                Session[EnumSession.Variable.ES_usp_Get_fa_doc_ser_ln_Mtz.ToString()] = lq_usp_Get_fa_doc_ser_ln;
            }

                        
            Session[EnumSession.Variable.ES_usp_Get_fa_doc_ser_ln.ToString()] = lq_usp_Get_fa_doc_ser_ln.Where(x => x.ccod_doc == p_ccod_doc).ToList();
            return Json(Session[EnumSession.Variable.ES_usp_Get_fa_doc_ser_ln.ToString()], JsonRequestBehavior.AllowGet);

            /*
            Session[EnumSession.Variable.ES_usp_Get_fa_doc_ser_ln.ToString()] = lq_usp_Get_fa_doc_ser_ln;
            return Json(lq_usp_Get_fa_doc_ser_ln, JsonRequestBehavior.AllowGet);
            */
        }

        //------------------------------------------------------------------------------------------------------------------------------------
        
        List<E_usp_Get_em_tbj_ct> lq_usp_Get_em_tbj_ct = new List<E_usp_Get_em_tbj_ct>();
        BLPrueba objBL_usp_Get_em_tbj_ct;

        [AllowAnonymous]
        public JsonResult JR_usp_Get_em_tbj_ct(string p_ccod_emp, string p_cest)
        {
            objBL_usp_Get_em_tbj_ct = new BLPrueba();

            //lq_usp_Get_em_tbj_ct = (List<E_usp_Get_em_tbj_ct>)Session[EnumSession.Variable.ES_usp_Get_em_tbj_ct.ToString()];
            lq_usp_Get_em_tbj_ct = (List<E_usp_Get_em_tbj_ct>)Session[EnumSession.Variable.ES_usp_Get_em_tbj_ct_Mtz.ToString()];

            if (!(lq_usp_Get_em_tbj_ct != null))
            {
                lq_usp_Get_em_tbj_ct = objBL_usp_Get_em_tbj_ct.Lista_usp_Get_em_tbj_ct(p_ccod_emp, p_cest);
                Session[EnumSession.Variable.ES_usp_Get_em_tbj_ct_Mtz.ToString()] = lq_usp_Get_em_tbj_ct;
            }

            Session[EnumSession.Variable.ES_usp_Get_em_tbj_ct.ToString()] = lq_usp_Get_em_tbj_ct;
            return Json(lq_usp_Get_em_tbj_ct, JsonRequestBehavior.AllowGet);
        }
        

        //------------------------------------------------------------------------------------------------------------------------------------


        //------------------------------------------------------------------------------------------------------------------------------------




        //------------------------------------------------------------------------------------------------------------------------------------

        // REGISTRO

        //------------------------------------------------------------------------------------------------------------------------------------
       

        //============================================================ MODIFICADOS
        //============================================================ MODIFICADOS
        //============================================================ MODIFICADOS




        //---------------------------------------------------------- SESSION



        //------------------------------------------------------------------------------------------------------------------------------------


        //------------------------------------------------------------------------------------------------------------------------------------
        


        //------------------------------------------------------------------------------------------------------------------------------------
        [AllowAnonymous]
        public JsonResult slq_usp_em_dir_delete(string ic_ccod_emp, string ic_ccodigo, int in_ccod_dir)
        {
            BLPrueba objBLPrueba = new BLPrueba();
            List<E_usp_em_dir_delete> lstPrueba = new List<E_usp_em_dir_delete>();
            lstPrueba = objBLPrueba.Lista_usp_em_dir_delete(ic_ccod_emp, ic_ccodigo, in_ccod_dir);

            return Json(lstPrueba, JsonRequestBehavior.AllowGet);
        }


        //------------------------------------------------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------------------
        //-----------------------------------------------------------------NEW DE NEWS


        
        

        List<E_usp_ad_mod_men_list> v_lq_usp_ad_mod_men_list = new List<E_usp_ad_mod_men_list>();
        BLPrueba objBL_usp_ad_mod_men_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ad_mod_men_list(string ic_ccod_emp, string ic_ccod_usu, string ic_ccod_mod, int in_nnivel, int ic_ccod_men_rel, string ic_load_BD)
        {
            objBL_usp_ad_mod_men_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ad_mod_men_list = (List<E_usp_ad_mod_men_list>)Session[EnumSession.Variable.ES_usp_ad_mod_men_list_Mtz.ToString()];
            if (!(v_lq_usp_ad_mod_men_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ad_mod_men_list = objBL_usp_ad_mod_men_list.Lista_usp_ad_mod_men_list(/*ic_ccod_emp, */ic_ccod_usu);
                Session[EnumSession.Variable.ES_usp_ad_mod_men_list_Mtz.ToString()] = v_lq_usp_ad_mod_men_list;
            }
            /*
            // Seleccion de data
            if (ic_ccod_mod != "" && in_nnivel > 0 & ic_ccod_men_rel >= 0)
            {
                Session[EnumSession.Variable.ES_usp_ad_mod_men_list.ToString()] = v_lq_usp_ad_mod_men_list.Where(a => a.ccod_mod == ic_ccod_mod).Where(b => b.nnivel == in_nnivel).Where(c => c.ccod_men_rel == ic_ccod_men_rel).OrderBy(d => d.norden).ToList();
            }
            else if (ic_ccod_mod != "" && in_nnivel > 0 & ic_ccod_men_rel == -1)
            {
                Session[EnumSession.Variable.ES_usp_ad_mod_men_list.ToString()] = v_lq_usp_ad_mod_men_list.Where(a => a.ccod_mod == ic_ccod_mod).Where(b => b.nnivel == in_nnivel).OrderByDescending(c => c.norden).ToList();
            }
            //// Lista de Modulos Disponibles
            //else if (ic_ccod_mod == "" && in_nnivel > 0 & ic_ccod_men_rel == 0)
            //{
            //    Session[EnumSession.Variable.ES_usp_ad_mod_men_list.ToString()] = v_lq_usp_ad_mod_men_list.Where(a => a.nnivel == in_nnivel).OrderBy(d => d.norden).ToList();
            //}            
            else
            {
                Session[EnumSession.Variable.ES_usp_ad_mod_men_list.ToString()] = v_lq_usp_ad_mod_men_list.ToList();
            }
            */
            Session[EnumSession.Variable.ES_usp_ad_mod_men_list.ToString()] = v_lq_usp_ad_mod_men_list.ToList();

            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ad_mod_men_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_ad_usu_men_opt_list> v_lq_usp_ad_usu_men_opt_list = new List<E_usp_ad_usu_men_opt_list>();
        BLPrueba objBL_usp_ad_usu_men_opt_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ad_usu_men_opt_list(string ic_ccod_emp, string ic_ccod_usu,int in_ccod_men, string ic_load_BD)
        {
            objBL_usp_ad_usu_men_opt_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ad_usu_men_opt_list = (List<E_usp_ad_usu_men_opt_list>)Session[EnumSession.Variable.ES_usp_ad_usu_men_opt_list_Mtz.ToString()];
            if (!(v_lq_usp_ad_usu_men_opt_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ad_usu_men_opt_list = objBL_usp_ad_usu_men_opt_list.Lista_usp_ad_usu_men_opt_list(ic_ccod_emp, ic_ccod_usu);
                Session[EnumSession.Variable.ES_usp_ad_usu_men_opt_list_Mtz.ToString()] = v_lq_usp_ad_usu_men_opt_list;
            }
            // Seleccion de data
            if (in_ccod_men > 0)
            {
                Session[EnumSession.Variable.ES_usp_ad_usu_men_opt_list.ToString()] = v_lq_usp_ad_usu_men_opt_list.Where(a => a.ccod_men == in_ccod_men).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_ad_usu_men_opt_list.ToString()] = v_lq_usp_ad_usu_men_opt_list.ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ad_usu_men_opt_list.ToString()], JsonRequestBehavior.AllowGet);
        }
        
        List<E_usp_al_it_imp_list> v_lq_usp_al_it_imp_list = new List<E_usp_al_it_imp_list>();
        BLPrueba objBL_usp_al_it_imp_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_it_imp_list(string ic_ccod_emp, string ic_ccod_it, string ic_cest, string ic_load_BD)
        {
            objBL_usp_al_it_imp_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_it_imp_list = (List<E_usp_al_it_imp_list>)Session[EnumSession.Variable.ES_usp_al_it_imp_list_Mtz.ToString()];
            if (!(v_lq_usp_al_it_imp_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_it_imp_list = objBL_usp_al_it_imp_list.Lista_usp_al_it_imp_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_al_it_imp_list_Mtz.ToString()] = v_lq_usp_al_it_imp_list;
            }
            // Seleccion de data
            if (ic_ccod_it != "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_al_it_imp_list.ToString()] = v_lq_usp_al_it_imp_list.Where(a => a.ccod_it == ic_ccod_it).Where(b => b.cest == ic_cest).OrderBy(c => c.cdsc_imp).ToList();
            }
            else if (ic_ccod_it != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_al_it_imp_list.ToString()] = v_lq_usp_al_it_imp_list.Where(a => a.ccod_it == ic_ccod_it).OrderBy(b => b.cdsc_imp).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_al_it_imp_list.ToString()] = v_lq_usp_al_it_imp_list.ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_it_imp_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        [AllowAnonymous]
        public JsonResult slq_usp_fa_fa_anular(string ic_ccod_emp, string ic_ccod_doc, string ic_ccod_ser, string ic_cdoc_nro)
        {
            BLPrueba objBLPrueba = new BLPrueba();
            List<E_usp_fa_fa_anular> lstPrueba = new List<E_usp_fa_fa_anular>();
            lstPrueba = objBLPrueba.Lista_usp_fa_fa_anular(ic_ccod_emp, ic_ccod_doc, ic_ccod_ser, ic_cdoc_nro);
            return Json(lstPrueba, JsonRequestBehavior.AllowGet);
        }

        /*
        List<E_usp_al_it_srv_list> v_lq_usp_al_it_srv_list = new List<E_usp_al_it_srv_list>();
        BLPrueba objBL_usp_al_it_srv_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_it_srv_list(string ic_ccod_emp, string ic_load_BD)
        {
            objBL_usp_al_it_srv_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_it_srv_list = (List<E_usp_al_it_srv_list>)Session[EnumSession.Variable.ES_usp_al_it_srv_list_Mtz.ToString()];
            if (!(v_lq_usp_al_it_srv_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_it_srv_list = objBL_usp_al_it_srv_list.Lista_usp_al_it_srv_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_al_it_srv_list_Mtz.ToString()] = v_lq_usp_al_it_srv_list;
            }
            
            Session[EnumSession.Variable.ES_usp_al_it_srv_list.ToString()] = v_lq_usp_al_it_srv_list.ToList();
            
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_it_srv_list.ToString()], JsonRequestBehavior.AllowGet);
        }
        */

        [AllowAnonymous]
        public JsonResult slq_usp_Get_si_usu_ctl_conf(string ic_ccod_emp, string ic_ccod_usu)
        {
            BLPrueba objBLPrueba = new BLPrueba();
            List<E_usp_Get_si_usu_ctl_conf> lstPrueba = new List<E_usp_Get_si_usu_ctl_conf>();
            lstPrueba = objBLPrueba.Lista_usp_Get_si_usu_ctl_conf(ic_ccod_emp, ic_ccod_usu);

            return Json(lstPrueba, JsonRequestBehavior.AllowGet);
        }

        /*
        List<E_usp_Get_si_usu_ctl_conf> v_lq_usp_Get_si_usu_ctl_conf = new List<E_usp_Get_si_usu_ctl_conf>();
        BLPrueba objBL_usp_Get_si_usu_ctl_conf;
        [AllowAnonymous]
        public JsonResult lq_usp_Get_si_usu_ctl_conf(string ic_ccod_emp, string ic_ccod_usu, string ic_cform, string pi_cctrl, string pi_cft_group_cdsc, string ic_load_BD)
        {
            objBL_usp_Get_si_usu_ctl_conf = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_Get_si_usu_ctl_conf = (List<E_usp_Get_si_usu_ctl_conf>)Session[EnumSession.Variable.ES_usp_Get_si_usu_ctl_conf_Mtz.ToString()];
            if (!(v_lq_usp_Get_si_usu_ctl_conf != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_Get_si_usu_ctl_conf = objBL_usp_Get_si_usu_ctl_conf.Lista_usp_Get_si_usu_ctl_conf(ic_ccod_emp, ic_ccod_usu);
                Session[EnumSession.Variable.ES_usp_Get_si_usu_ctl_conf_Mtz.ToString()] = v_lq_usp_Get_si_usu_ctl_conf;
            }

            if (ic_ccod_usu != "" && ic_cform != "" && pi_cft_group_cdsc == "")
            {
                Session[EnumSession.Variable.ES_usp_Get_si_usu_ctl_conf.ToString()] = v_lq_usp_Get_si_usu_ctl_conf.Where(x => x.ccod_usu == ic_ccod_usu).Where(x => x.cform == ic_cform).Where(x => x.cctrl == pi_cctrl).OrderBy(x => x.nord).ToList();
            }
            else if (ic_ccod_usu != "" && ic_cform != "" && pi_cft_group_cdsc != "")
            {
                Session[EnumSession.Variable.ES_usp_Get_si_usu_ctl_conf.ToString()] = v_lq_usp_Get_si_usu_ctl_conf.Where(x => x.ccod_usu == ic_ccod_usu).Where(x => x.cform == ic_cform).Where(x => x.cctrl == pi_cctrl).OrderBy(x => x.cft_group_cdsc).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_Get_si_usu_ctl_conf.ToString()] = v_lq_usp_Get_si_usu_ctl_conf.ToList();
            }

            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_Get_si_usu_ctl_conf.ToString()], JsonRequestBehavior.AllowGet);
        }
        */

        /*
        List<E_usp_fa_lp_it_ln_list> v_lq_usp_fa_lp_it_ln_list = new List<E_usp_fa_lp_it_ln_list>();
        BLPrueba objBL_usp_fa_lp_it_ln_list;
        [AllowAnonymous]
        public JsonResult lq_usp_fa_lp_it_ln_list(string ic_ccod_emp, string ic_load_BD)
        {
            objBL_usp_fa_lp_it_ln_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_fa_lp_it_ln_list = (List<E_usp_fa_lp_it_ln_list>)Session[EnumSession.Variable.ES_usp_fa_lp_it_ln_list_Mtz.ToString()];
            if (!(v_lq_usp_fa_lp_it_ln_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_fa_lp_it_ln_list = objBL_usp_fa_lp_it_ln_list.Lista_usp_fa_lp_it_ln_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_fa_lp_it_ln_list_Mtz.ToString()] = v_lq_usp_fa_lp_it_ln_list;
            }

            Session[EnumSession.Variable.ES_usp_fa_lp_it_ln_list.ToString()] = v_lq_usp_fa_lp_it_ln_list.ToList();
            
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_fa_lp_it_ln_list.ToString()], JsonRequestBehavior.AllowGet);
        }
        */

        List<E_usp_fa_fe_tpa_ct_list> v_lq_usp_fa_fe_tpa_ct_list = new List<E_usp_fa_fe_tpa_ct_list>();
        BLPrueba objBL_usp_fa_fe_tpa_ct_list;
        [AllowAnonymous]
        public JsonResult lq_usp_fa_fe_tpa_ct_list(string ic_ccod_emp, string ic_cest, string ic_load_BD)
        {
            objBL_usp_fa_fe_tpa_ct_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_fa_fe_tpa_ct_list = (List<E_usp_fa_fe_tpa_ct_list>)Session[EnumSession.Variable.ES_usp_fa_fe_tpa_ct_list_Mtz.ToString()];
            if (!(v_lq_usp_fa_fe_tpa_ct_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_fa_fe_tpa_ct_list = objBL_usp_fa_fe_tpa_ct_list.Lista_usp_fa_fe_tpa_ct_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_fa_fe_tpa_ct_list_Mtz.ToString()] = v_lq_usp_fa_fe_tpa_ct_list;
            }
            // Seleccion de data
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_fa_fe_tpa_ct_list.ToString()] = v_lq_usp_fa_fe_tpa_ct_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_tpa).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_fa_fe_tpa_ct_list.ToString()] = v_lq_usp_fa_fe_tpa_ct_list.ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_fa_fe_tpa_ct_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        [AllowAnonymous]
        public JsonResult slq_usp_exec_sp(string ic_sp, string[] data)
        {
            BLPrueba objBLPrueba = new BLPrueba();
            List<E_usp_exec_sp> lstPrueba = new List<E_usp_exec_sp>();
            lstPrueba = objBLPrueba.Lista_usp_exec_sp(ic_sp, data);

            return Json(lstPrueba, JsonRequestBehavior.AllowGet);
        }

        List<E_usp_ga_aac_ct_list> v_lq_usp_ga_aac_ct_list = new List<E_usp_ga_aac_ct_list>();
        BLPrueba objBL_usp_ga_aac_ct_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ga_aac_ct_list(string ic_ccod_emp, int ic_cest, string ic_load_BD)
        {
            objBL_usp_ga_aac_ct_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ga_aac_ct_list = (List<E_usp_ga_aac_ct_list>)Session[EnumSession.Variable.ES_usp_ga_aac_ct_list_Mtz.ToString()];
            if (!(v_lq_usp_ga_aac_ct_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ga_aac_ct_list = objBL_usp_ga_aac_ct_list.Lista_usp_ga_aac_ct_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_ga_aac_ct_list_Mtz.ToString()] = v_lq_usp_ga_aac_ct_list;
            }

            // Seleccion de data
            if (ic_cest != -1)
            {
                Session[EnumSession.Variable.ES_usp_ga_aac_ct_list.ToString()] = v_lq_usp_ga_aac_ct_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_aac).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_ga_aac_ct_list.ToString()] = v_lq_usp_ga_aac_ct_list.ToList();
            }

            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ga_aac_ct_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_ga_nac_ct_list> v_lq_usp_ga_nac_ct_list = new List<E_usp_ga_nac_ct_list>();
        BLPrueba objBL_usp_ga_nac_ct_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ga_nac_ct_list(string ic_ccod_emp, string ic_ccod_aac,int ic_cest, string ic_load_BD)
        {
            objBL_usp_ga_nac_ct_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ga_nac_ct_list = (List<E_usp_ga_nac_ct_list>)Session[EnumSession.Variable.ES_usp_ga_nac_ct_list_Mtz.ToString()];
            if (!(v_lq_usp_ga_nac_ct_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ga_nac_ct_list = objBL_usp_ga_nac_ct_list.Lista_usp_ga_nac_ct_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_ga_nac_ct_list_Mtz.ToString()] = v_lq_usp_ga_nac_ct_list;
            }
            // Seleccion de data
            if (ic_ccod_aac != "")
            {
                Session[EnumSession.Variable.ES_usp_ga_nac_ct_list.ToString()] = v_lq_usp_ga_nac_ct_list.Where(a => a.ccod_aac == ic_ccod_aac).OrderBy(b => b.cdsc_nac).ToList();
            }
            else if (ic_cest != -1)
            {
                Session[EnumSession.Variable.ES_usp_ga_nac_ct_list.ToString()] = v_lq_usp_ga_nac_ct_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_nac).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_ga_nac_ct_list.ToString()] = v_lq_usp_ga_nac_ct_list.ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ga_nac_ct_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_ga_per_ct_list> v_lq_usp_ga_per_ct_list = new List<E_usp_ga_per_ct_list>();
        BLPrueba objBL_usp_ga_per_ct_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ga_per_ct_list(string ic_ccod_emp, int ic_cest, string ic_load_BD)
        {
            objBL_usp_ga_per_ct_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ga_per_ct_list = (List<E_usp_ga_per_ct_list>)Session[EnumSession.Variable.ES_usp_ga_per_ct_list_Mtz.ToString()];
            if (!(v_lq_usp_ga_per_ct_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ga_per_ct_list = objBL_usp_ga_per_ct_list.Lista_usp_ga_per_ct_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_ga_per_ct_list_Mtz.ToString()] = v_lq_usp_ga_per_ct_list;
            }
            // Seleccion de data
            if (ic_cest != -1)
            {
                Session[EnumSession.Variable.ES_usp_ga_per_ct_list.ToString()] = v_lq_usp_ga_per_ct_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_nac).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_ga_per_ct_list.ToString()] = v_lq_usp_ga_per_ct_list.OrderBy(b => b.cagrupador).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ga_per_ct_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_ga_gac_ct_list> v_lq_usp_ga_gac_ct_list = new List<E_usp_ga_gac_ct_list>();
        BLPrueba objBL_usp_ga_gac_ct_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ga_gac_ct_list(string ic_ccod_emp, int ic_cest, string ic_load_BD)
        {
            objBL_usp_ga_gac_ct_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ga_gac_ct_list = (List<E_usp_ga_gac_ct_list>)Session[EnumSession.Variable.ES_usp_ga_gac_ct_list_Mtz.ToString()];
            if (!(v_lq_usp_ga_gac_ct_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ga_gac_ct_list = objBL_usp_ga_gac_ct_list.Lista_usp_ga_gac_ct_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_ga_gac_ct_list_Mtz.ToString()] = v_lq_usp_ga_gac_ct_list;
            }
            // Seleccion de data
            if (ic_cest != -1)
            {
                Session[EnumSession.Variable.ES_usp_ga_gac_ct_list.ToString()] = v_lq_usp_ga_gac_ct_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_gac).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_ga_gac_ct_list.ToString()] = v_lq_usp_ga_gac_ct_list.OrderBy(b => b.cagrupador).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ga_gac_ct_list.ToString()], JsonRequestBehavior.AllowGet);
        }



        //------------------------------- MODIFICADO DESDE ACA 11/01/2021
        //------------------------------- MODIFICADO DESDE ACA 11/01/2021
        //------------------------------- MODIFICADO DESDE ACA 11/01/2021
        //------------------------------- MODIFICADO DESDE ACA 11/01/2021
        //------------------------------- MODIFICADO DESDE ACA 11/01/2021
        //------------------------------- MODIFICADO DESDE ACA 11/01/2021
        //------------------------------- MODIFICADO DESDE ACA 11/01/2021
        //------------------------------- MODIFICADO DESDE ACA 11/01/2021
        //------------------------------- MODIFICADO DESDE ACA 11/01/2021
        //------------------------------- MODIFICADO DESDE ACA 11/01/2021




        List<E_usp_ve_ct_opve_list> v_lq_usp_ve_ct_opve_list = new List<E_usp_ve_ct_opve_list>();
        BLPrueba objBL_usp_ve_ct_opve_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ve_ct_opve_list(string ic_ccod_emp, string ic_cest, string ic_ccod_opve, string ic_load_BD)
        {
            objBL_usp_ve_ct_opve_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ve_ct_opve_list = (List<E_usp_ve_ct_opve_list>)Session[EnumSession.Variable.ES_usp_ve_ct_opve_list_Mtz.ToString()];
            if (!(v_lq_usp_ve_ct_opve_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ve_ct_opve_list = objBL_usp_ve_ct_opve_list.Lista_usp_ve_ct_opve_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_ve_ct_opve_list_Mtz.ToString()] = v_lq_usp_ve_ct_opve_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_ve_ct_opve_list.ToString()] = v_lq_usp_ve_ct_opve_list.Where(a => a.cest == ic_cest).Where(b => b.cest_mon == "A").OrderBy(c => c.cdsc_opve).ToList();
            }
            // Seleccion de 1 registro
            else if (ic_ccod_opve != "")
            {
                Session[EnumSession.Variable.ES_usp_ve_ct_opve_list.ToString()] = v_lq_usp_ve_ct_opve_list.Where(x => x.ccod_opve == ic_ccod_opve).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_ve_ct_opve_list.ToString()] = v_lq_usp_ve_ct_opve_list.OrderByDescending(a => a.id_ct_opve).ToList();
                //Session[EnumSession.Variable.ES_usp_ve_ct_opve_list.ToString()] = v_lq_usp_ve_ct_opve_list.ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ve_ct_opve_list.ToString()], JsonRequestBehavior.AllowGet);
        }


        List<E_usp_fi_ct_doc_list> v_lq_usp_fi_ct_doc_list = new List<E_usp_fi_ct_doc_list>();
        BLPrueba objBL_usp_fi_ct_doc_list;
        [AllowAnonymous]
        public JsonResult lq_usp_fi_ct_doc_list(string ic_ccod_emp, string ic_cest, string ic_ccod_doc, string ic_load_BD)
        {
            objBL_usp_fi_ct_doc_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_fi_ct_doc_list = (List<E_usp_fi_ct_doc_list>)Session[EnumSession.Variable.ES_usp_fi_ct_doc_list_Mtz.ToString()];
            if (!(v_lq_usp_fi_ct_doc_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_fi_ct_doc_list = objBL_usp_fi_ct_doc_list.Lista_usp_fi_ct_doc_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_fi_ct_doc_list_Mtz.ToString()] = v_lq_usp_fi_ct_doc_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_fi_ct_doc_list.ToString()] = v_lq_usp_fi_ct_doc_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_doc).ToList();
            }
            // Seleccion de 1 registro
            else if (ic_ccod_doc != "")
            {
                Session[EnumSession.Variable.ES_usp_fi_ct_doc_list.ToString()] = v_lq_usp_fi_ct_doc_list.Where(x => x.ccod_doc == ic_ccod_doc).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_fi_ct_doc_list.ToString()] = v_lq_usp_fi_ct_doc_list.OrderByDescending(a => a.id_ct_doc).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_fi_ct_doc_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_ct_mon_list> v_lq_usp_em_ct_mon_list = new List<E_usp_em_ct_mon_list>();
        BLPrueba objBL_usp_em_ct_mon_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_mon_list(string ic_ccod_emp, string ic_cest, string ic_ccod_mon, string ic_load_BD)
        {
            objBL_usp_em_ct_mon_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_mon_list = (List<E_usp_em_ct_mon_list>)Session[EnumSession.Variable.ES_usp_em_ct_mon_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_mon_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_mon_list = objBL_usp_em_ct_mon_list.Lista_usp_em_ct_mon_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_mon_list_Mtz.ToString()] = v_lq_usp_em_ct_mon_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_mon_list.ToString()] = v_lq_usp_em_ct_mon_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_mon).ToList();
            }
            // Seleccion de 1 registro
            else if (ic_ccod_mon != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_mon_list.ToString()] = v_lq_usp_em_ct_mon_list.Where(x => x.ccod_mon == ic_ccod_mon).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_mon_list.ToString()] = v_lq_usp_em_ct_mon_list.OrderByDescending(a => a.id_ct_mon).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_mon_list.ToString()], JsonRequestBehavior.AllowGet);
        }


        List<E_usp_al_ct_opal_list> v_lq_usp_al_ct_opal_list = new List<E_usp_al_ct_opal_list>();
        BLPrueba objBL_usp_al_ct_opal_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_ct_opal_list(string ic_ccod_emp, string ic_cest, string ic_ccod_opal, string ic_load_BD)
        {
            objBL_usp_al_ct_opal_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_ct_opal_list = (List<E_usp_al_ct_opal_list>)Session[EnumSession.Variable.ES_usp_al_ct_opal_list_Mtz.ToString()];
            if (!(v_lq_usp_al_ct_opal_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_ct_opal_list = objBL_usp_al_ct_opal_list.Lista_usp_al_ct_opal_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_al_ct_opal_list_Mtz.ToString()] = v_lq_usp_al_ct_opal_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_al_ct_opal_list.ToString()] = v_lq_usp_al_ct_opal_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_opal).ToList();
            }
            // Seleccion de 1 registro
            else if (ic_ccod_opal != "")
            {
                Session[EnumSession.Variable.ES_usp_al_ct_opal_list.ToString()] = v_lq_usp_al_ct_opal_list.Where(x => x.ccod_opal == ic_ccod_opal).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_al_ct_opal_list.ToString()] = v_lq_usp_al_ct_opal_list.OrderByDescending(a => a.id_ct_opal).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_ct_opal_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_al_ct_it_list> v_lq_usp_al_ct_it_list = new List<E_usp_al_ct_it_list>();
        BLPrueba objBL_usp_al_ct_it_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_ct_it_list(string ic_ccod_emp, string ic_ctipo_it, string ic_cest, string ic_load_BD)
        {
            objBL_usp_al_ct_it_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_ct_it_list = (List<E_usp_al_ct_it_list>)Session[EnumSession.Variable.ES_usp_al_ct_it_list_Mtz.ToString()];
            if (!(v_lq_usp_al_ct_it_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_ct_it_list = objBL_usp_al_ct_it_list.Lista_usp_al_ct_it_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_al_ct_it_list_Mtz.ToString()] = v_lq_usp_al_ct_it_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_ctipo_it != "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_al_ct_it_list.ToString()] = v_lq_usp_al_ct_it_list.Where(a => a.ctipo_it == ic_ctipo_it).Where(b => b.cest == ic_cest).OrderBy(c => c.cdsc_it).ToList();
            }
            // Seleccion de registros 'Activos' e 'Inactivos'
            else if (ic_ctipo_it != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_al_ct_it_list.ToString()] = v_lq_usp_al_ct_it_list.Where(a => a.ctipo_it == ic_ctipo_it).OrderByDescending(b => b.id_ct_it).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_al_ct_it_list.ToString()] = v_lq_usp_al_ct_it_list.OrderByDescending(a => a.id_ct_it).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_ct_it_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_al_ct_lin_list> v_lq_usp_al_ct_lin_list = new List<E_usp_al_ct_lin_list>();
        BLPrueba objBL_usp_al_ct_lin_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_ct_lin_list(string ic_ccod_emp, string ic_cest, string ic_ctipo_lin, string ic_load_BD)
        {
            objBL_usp_al_ct_lin_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_ct_lin_list = (List<E_usp_al_ct_lin_list>)Session[EnumSession.Variable.ES_usp_al_ct_lin_list_Mtz.ToString()];
            if (!(v_lq_usp_al_ct_lin_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_ct_lin_list = objBL_usp_al_ct_lin_list.Lista_usp_al_ct_lin_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_al_ct_lin_list_Mtz.ToString()] = v_lq_usp_al_ct_lin_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "" && ic_ctipo_lin == "")
            {
                Session[EnumSession.Variable.ES_usp_al_ct_lin_list.ToString()] = v_lq_usp_al_ct_lin_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_lin).ToList();
            }
            // Seleccion de registros 'Activos' y 'Tipo de Linea'
            else if (ic_cest != "" && ic_ctipo_lin != "")
            {
                Session[EnumSession.Variable.ES_usp_al_ct_lin_list.ToString()] = v_lq_usp_al_ct_lin_list.Where(a => a.cest == ic_cest).Where(b => b.ctipo_lin == ic_ctipo_lin).OrderBy(c => c.cdsc_lin).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_al_ct_lin_list.ToString()] = v_lq_usp_al_ct_lin_list.OrderByDescending(a => a.id_ct_lin).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_ct_lin_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_al_ct_slin_list> v_lq_usp_al_ct_slin_list = new List<E_usp_al_ct_slin_list>();
        BLPrueba objBL_usp_al_ct_slin_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_ct_slin_list(string ic_ccod_emp, string ic_ccod_lin, string ic_cest, string ic_load_BD)
        {
            objBL_usp_al_ct_slin_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_ct_slin_list = (List<E_usp_al_ct_slin_list>)Session[EnumSession.Variable.ES_usp_al_ct_slin_list_Mtz.ToString()];
            if (!(v_lq_usp_al_ct_slin_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_ct_slin_list = objBL_usp_al_ct_slin_list.Lista_usp_al_ct_slin_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_al_ct_slin_list_Mtz.ToString()] = v_lq_usp_al_ct_slin_list;
            }
            // Seleccion de registros 'Activos', 'Linea'
            if (ic_ccod_lin != "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_al_ct_slin_list.ToString()] = v_lq_usp_al_ct_slin_list.Where(a => a.ccod_lin == ic_ccod_lin).Where(b => b.cest == ic_cest).OrderBy(c => c.cdsc_slin).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_al_ct_slin_list.ToString()] = v_lq_usp_al_ct_slin_list.OrderByDescending(a => a.id_ct_slin).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_ct_slin_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_al_ct_tip_prod_list> v_lq_usp_al_ct_tip_prod_list = new List<E_usp_al_ct_tip_prod_list>();
        BLPrueba objBL_usp_al_ct_tip_prod_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_ct_tip_prod_list(string ic_ccod_emp, string ic_cest, string ic_load_BD)
        {
            objBL_usp_al_ct_tip_prod_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_ct_tip_prod_list = (List<E_usp_al_ct_tip_prod_list>)Session[EnumSession.Variable.ES_usp_al_ct_tip_prod_list_Mtz.ToString()];
            if (!(v_lq_usp_al_ct_tip_prod_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_ct_tip_prod_list = objBL_usp_al_ct_tip_prod_list.Lista_usp_al_ct_tip_prod_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_al_ct_tip_prod_list_Mtz.ToString()] = v_lq_usp_al_ct_tip_prod_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_al_ct_tip_prod_list.ToString()] = v_lq_usp_al_ct_tip_prod_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_tip_prod).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_al_ct_tip_prod_list.ToString()] = v_lq_usp_al_ct_tip_prod_list.OrderByDescending(a => a.id_ct_tip_prod).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_ct_tip_prod_list.ToString()], JsonRequestBehavior.AllowGet);
        }


        List<E_usp_al_ct_um_list> v_lq_usp_al_ct_um_list = new List<E_usp_al_ct_um_list>();
        BLPrueba objBL_usp_al_ct_um_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_ct_um_list(string ic_ccod_emp, string ic_ctipo_um, string ic_cest, string ic_load_BD)
        {
            objBL_usp_al_ct_um_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_ct_um_list = (List<E_usp_al_ct_um_list>)Session[EnumSession.Variable.ES_usp_al_ct_um_list_Mtz.ToString()];
            if (!(v_lq_usp_al_ct_um_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_ct_um_list = objBL_usp_al_ct_um_list.Lista_usp_al_ct_um_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_al_ct_um_list_Mtz.ToString()] = v_lq_usp_al_ct_um_list;
            }
            // Seleccion de registros 'Activos' y 'Tipo UM: B o S'
            if (ic_ctipo_um != "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_al_ct_um_list.ToString()] = v_lq_usp_al_ct_um_list.Where(a => a.ctipo_um == ic_ctipo_um).Where(b => b.cest == ic_cest).OrderBy(c => c.cdsc_um).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_al_ct_um_list.ToString()] = v_lq_usp_al_ct_um_list.OrderByDescending(a => a.id_ct_um).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_ct_um_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_al_ct_mc_list> v_lq_usp_al_ct_mc_list = new List<E_usp_al_ct_mc_list>();
        BLPrueba objBL_usp_al_ct_mc_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_ct_mc_list(string ic_ccod_emp, string ic_cest, string ic_load_BD)
        {
            objBL_usp_al_ct_mc_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_ct_mc_list = (List<E_usp_al_ct_mc_list>)Session[EnumSession.Variable.ES_usp_al_ct_mc_list_Mtz.ToString()];
            if (!(v_lq_usp_al_ct_mc_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_ct_mc_list = objBL_usp_al_ct_mc_list.Lista_usp_al_ct_mc_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_al_ct_mc_list_Mtz.ToString()] = v_lq_usp_al_ct_mc_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_al_ct_mc_list.ToString()] = v_lq_usp_al_ct_mc_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_mc).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_al_ct_mc_list.ToString()] = v_lq_usp_al_ct_mc_list.OrderByDescending(a => a.id_ct_mc).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_ct_mc_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_co_ct_imp_list> v_lq_usp_co_ct_imp_list = new List<E_usp_co_ct_imp_list>();
        BLPrueba objBL_usp_co_ct_imp_list;
        [AllowAnonymous]
        public JsonResult lq_usp_co_ct_imp_list(string ic_ccod_emp, string ic_ccod_imp, string ic_cest, string ic_load_BD)
        {
            objBL_usp_co_ct_imp_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_co_ct_imp_list = (List<E_usp_co_ct_imp_list>)Session[EnumSession.Variable.ES_usp_co_ct_imp_list_Mtz.ToString()];
            if (!(v_lq_usp_co_ct_imp_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_co_ct_imp_list = objBL_usp_co_ct_imp_list.Lista_usp_co_ct_imp_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_co_ct_imp_list_Mtz.ToString()] = v_lq_usp_co_ct_imp_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_ccod_imp == "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_co_ct_imp_list.ToString()] = v_lq_usp_co_ct_imp_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_imp).ToList();
            }
            // Seleccion de registro por 'Codigo de Impuesto'
            else if (ic_ccod_imp != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_co_ct_imp_list.ToString()] = v_lq_usp_co_ct_imp_list.Where(a => a.ccod_imp == ic_ccod_imp).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_co_ct_imp_list.ToString()] = v_lq_usp_co_ct_imp_list.OrderByDescending(a => a.id_ct_imp).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_co_ct_imp_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_al_ct_it_dt_um_list> v_lq_usp_al_ct_it_dt_um_list = new List<E_usp_al_ct_it_dt_um_list>();
        BLPrueba objBL_usp_al_ct_it_dt_um_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_ct_it_dt_um_list(string ic_ccod_emp, string ic_ccod_it, string ic_ccod_um, int in_row, string ic_load_BD)
        {
            objBL_usp_al_ct_it_dt_um_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_ct_it_dt_um_list = (List<E_usp_al_ct_it_dt_um_list>)Session[EnumSession.Variable.ES_usp_al_ct_it_dt_um_list_Mtz.ToString()];
            if (!(v_lq_usp_al_ct_it_dt_um_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_ct_it_dt_um_list = objBL_usp_al_ct_it_dt_um_list.Lista_usp_al_ct_it_dt_um_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_al_ct_it_dt_um_list_Mtz.ToString()] = v_lq_usp_al_ct_it_dt_um_list;
            }
            // Seleccion de data
            if (ic_ccod_it != "" && ic_ccod_um == "" && in_row == 0)
            {
                Session[EnumSession.Variable.ES_usp_al_ct_it_dt_um_list.ToString()] = v_lq_usp_al_ct_it_dt_um_list.Where(a => a.ccod_it == ic_ccod_it).OrderBy(b => b.nid_um).ToList();
            }
            else if (ic_ccod_it != "" && ic_ccod_um != "" && in_row == 0)
            {
                Session[EnumSession.Variable.ES_usp_al_ct_it_dt_um_list.ToString()] = v_lq_usp_al_ct_it_dt_um_list.Where(a => a.ccod_it == ic_ccod_it).Where(b => b.ccod_um == ic_ccod_um).ToList();
            }
            else if (ic_ccod_it != "" && ic_ccod_um == "" && in_row == 2)
            {
                Session[EnumSession.Variable.ES_usp_al_ct_it_dt_um_list.ToString()] = v_lq_usp_al_ct_it_dt_um_list.Where(a => a.ccod_it == ic_ccod_it).Where(b => b.nid_um > 1).OrderBy(c => c.nid_um).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_al_ct_it_dt_um_list.ToString()] = v_lq_usp_al_ct_it_dt_um_list.OrderByDescending(a => a.id_ct_it_dt_um).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_ct_it_dt_um_list.ToString()], JsonRequestBehavior.AllowGet);
        }


        List<E_usp_em_ct_mdc_list> v_lq_usp_em_ct_mdc_list = new List<E_usp_em_ct_mdc_list>();
        BLPrueba objBL_usp_em_ct_mdc_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_mdc_list(string ic_ccod_emp, string ic_ccod_mdc, string ic_cest, string ic_load_BD)
        {
            objBL_usp_em_ct_mdc_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_mdc_list = (List<E_usp_em_ct_mdc_list>)Session[EnumSession.Variable.ES_usp_em_ct_mdc_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_mdc_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_mdc_list = objBL_usp_em_ct_mdc_list.Lista_usp_em_ct_mdc_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_mdc_list_Mtz.ToString()] = v_lq_usp_em_ct_mdc_list;
            }
            // Seleccion de registros 'Activos' - Validar si es necesario el primer parametro
            if (ic_ccod_mdc == "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_mdc_list.ToString()] = v_lq_usp_em_ct_mdc_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_mdc).ToList();
            }
            // Seleccion de 1 registro - Validar si es necesario el primer parametro
            else if (ic_ccod_mdc != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_mdc_list.ToString()] = v_lq_usp_em_ct_mdc_list.Where(a => a.ccod_mdc == ic_ccod_mdc).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_mdc_list.ToString()] = v_lq_usp_em_ct_mdc_list.OrderByDescending(a => a.id_ct_mdc).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_mdc_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_ct_prs_list> v_lq_usp_em_ct_prs_list = new List<E_usp_em_ct_prs_list>();
        BLPrueba objBL_usp_em_ct_prs_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_prs_list(string ic_ccod_emp, string ic_ccod_prs, string ic_cest, string ic_cmp_OrderBy, string ic_load_BD)
        {
            objBL_usp_em_ct_prs_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_prs_list = (List<E_usp_em_ct_prs_list>)Session[EnumSession.Variable.ES_usp_em_ct_prs_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_prs_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_prs_list = objBL_usp_em_ct_prs_list.Lista_usp_em_ct_prs_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_prs_list_Mtz.ToString()] = v_lq_usp_em_ct_prs_list;
            }
            // Seleccion de 1 registro - Validar si es necesario el 2 parametro
            if (ic_ccod_prs != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_list.ToString()] = v_lq_usp_em_ct_prs_list.Where(a => a.ccod_prs == ic_ccod_prs).ToList();
            }
            // Seleccion de registros 'Activos' - Validar si es necesario el primer parametro
            else if (ic_ccod_prs == "" && ic_cest == "A")
            {
                if (ic_cmp_OrderBy == "cdsc_prs_tip")
                {
                    Session[EnumSession.Variable.ES_usp_em_ct_prs_list.ToString()] = v_lq_usp_em_ct_prs_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_prs_tip).ToList();
                }
                else
                {
                    Session[EnumSession.Variable.ES_usp_em_ct_prs_list.ToString()] = v_lq_usp_em_ct_prs_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_prs).ToList();
                }
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_list.ToString()] = v_lq_usp_em_ct_prs_list.OrderByDescending(a => a.id_ct_prs).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_prs_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_ct_prs_csf_list> v_lq_usp_em_ct_prs_csf_list = new List<E_usp_em_ct_prs_csf_list>();
        BLPrueba objBL_usp_em_ct_prs_csf_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_prs_csf_list(string ic_ccod_emp, string ic_ccod_prs_csf, string ic_cest, string ic_load_BD)
        {
            objBL_usp_em_ct_prs_csf_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_prs_csf_list = (List<E_usp_em_ct_prs_csf_list>)Session[EnumSession.Variable.ES_usp_em_ct_prs_csf_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_prs_csf_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_prs_csf_list = objBL_usp_em_ct_prs_csf_list.Lista_usp_em_ct_prs_csf_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_prs_csf_list_Mtz.ToString()] = v_lq_usp_em_ct_prs_csf_list;
            }
            // Seleccion de registros 'Activos' - Validar si es necesario el primer parametro
            if (ic_ccod_prs_csf == "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_csf_list.ToString()] = v_lq_usp_em_ct_prs_csf_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_prs_csf).ToList();
            }
            // Seleccion de registros por 'Clasificacion' - Validar si es necesario el segundo parametro
            else if (ic_ccod_prs_csf != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_csf_list.ToString()] = v_lq_usp_em_ct_prs_csf_list.Where(a => a.ccod_prs_csf == ic_ccod_prs_csf).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_csf_list.ToString()] = v_lq_usp_em_ct_prs_csf_list.OrderByDescending(a => a.id_ct_prs_csf).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_prs_csf_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_ct_prs_tip_list> v_lq_usp_em_ct_prs_tip_list = new List<E_usp_em_ct_prs_tip_list>();
        BLPrueba objBL_usp_em_ct_prs_tip_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_prs_tip_list(string ic_ccod_emp, string ic_ccod_prs_tip, string ic_cest, string ic_load_BD)
        {
            objBL_usp_em_ct_prs_tip_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_prs_tip_list = (List<E_usp_em_ct_prs_tip_list>)Session[EnumSession.Variable.ES_usp_em_ct_prs_tip_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_prs_tip_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_prs_tip_list = objBL_usp_em_ct_prs_tip_list.Lista_usp_em_ct_prs_tip_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_prs_tip_list_Mtz.ToString()] = v_lq_usp_em_ct_prs_tip_list;
            }
            // Agregar descripcion
            if (ic_ccod_prs_tip == "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_tip_list.ToString()] = v_lq_usp_em_ct_prs_tip_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_prs_tip).ToList();
            }
            // Agregar descripcion
            else if (ic_ccod_prs_tip != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_tip_list.ToString()] = v_lq_usp_em_ct_prs_tip_list.Where(a => a.ccod_prs_tip == ic_ccod_prs_tip).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_tip_list.ToString()] = v_lq_usp_em_ct_prs_tip_list.OrderByDescending(a => a.id_ct_prs_tip).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_prs_tip_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_ct_prs_tsx_list> v_lq_usp_em_ct_prs_tsx_list = new List<E_usp_em_ct_prs_tsx_list>();
        BLPrueba objBL_usp_em_ct_prs_tsx_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_prs_tsx_list(string ic_ccod_emp, string ic_ccod_tsx, string ic_cest, string ic_load_BD)
        {
            objBL_usp_em_ct_prs_tsx_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_prs_tsx_list = (List<E_usp_em_ct_prs_tsx_list>)Session[EnumSession.Variable.ES_usp_em_ct_prs_tsx_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_prs_tsx_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_prs_tsx_list = objBL_usp_em_ct_prs_tsx_list.Lista_usp_em_ct_prs_tsx_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_prs_tsx_list_Mtz.ToString()] = v_lq_usp_em_ct_prs_tsx_list;
            }
            // Agregar descripcion
            if (ic_ccod_tsx == "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_tsx_list.ToString()] = v_lq_usp_em_ct_prs_tsx_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_tsx).ToList();
            }
            // Agregar descripcion
            else if (ic_ccod_tsx != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_tsx_list.ToString()] = v_lq_usp_em_ct_prs_tsx_list.Where(a => a.ccod_tsx == ic_ccod_tsx).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_tsx_list.ToString()] = v_lq_usp_em_ct_prs_tsx_list.OrderByDescending(a => a.id_ct_prs_tsx).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_prs_tsx_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_dt_mdc_list> v_lq_usp_em_dt_mdc_list = new List<E_usp_em_dt_mdc_list>();
        BLPrueba objBL_usp_em_dt_mdc_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_dt_mdc_list(string ic_ccod_emp, string ic_ccodigo, string ic_load_BD)
        {
            objBL_usp_em_dt_mdc_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_dt_mdc_list = (List<E_usp_em_dt_mdc_list>)Session[EnumSession.Variable.ES_usp_em_dt_mdc_list_Mtz.ToString()];
            if (!(v_lq_usp_em_dt_mdc_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_dt_mdc_list = objBL_usp_em_dt_mdc_list.Lista_usp_em_dt_mdc_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_dt_mdc_list_Mtz.ToString()] = v_lq_usp_em_dt_mdc_list;
            }
            // Seleccion de registros referidos al codigo
            if (ic_ccodigo != "")
            {
                Session[EnumSession.Variable.ES_usp_em_dt_mdc_list.ToString()] = v_lq_usp_em_dt_mdc_list.Where(a => a.ccodigo == ic_ccodigo).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_dt_mdc_list.ToString()] = v_lq_usp_em_dt_mdc_list.OrderByDescending(a => a.id_dt_mdc).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_dt_mdc_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_ct_prs_dt_doc_list> v_lq_usp_em_ct_prs_dt_doc_list = new List<E_usp_em_ct_prs_dt_doc_list>();
        BLPrueba objBL_usp_em_ct_prs_dt_doc_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_prs_dt_doc_list(string ic_ccod_emp, string ic_ccod_prs, string ic_cest, string ic_load_BD)
        {
            objBL_usp_em_ct_prs_dt_doc_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_prs_dt_doc_list = (List<E_usp_em_ct_prs_dt_doc_list>)Session[EnumSession.Variable.ES_usp_em_ct_prs_dt_doc_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_prs_dt_doc_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_prs_dt_doc_list = objBL_usp_em_ct_prs_dt_doc_list.Lista_usp_em_ct_prs_dt_doc_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_prs_dt_doc_list_Mtz.ToString()] = v_lq_usp_em_ct_prs_dt_doc_list;
            }
            // Agregar descripcion
            if (ic_ccod_prs == "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_dt_doc_list.ToString()] = v_lq_usp_em_ct_prs_dt_doc_list.Where(a => a.cest == ic_cest).OrderBy(b => b.ccod_prs_doc).ToList();
            }
            // Agregar descripcion
            else if (ic_ccod_prs != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_dt_doc_list.ToString()] = v_lq_usp_em_ct_prs_dt_doc_list.Where(a => a.ccod_prs == ic_ccod_prs).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_dt_doc_list.ToString()] = v_lq_usp_em_ct_prs_dt_doc_list.OrderByDescending(a => a.id_ct_prs_dt_doc).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_prs_dt_doc_list.ToString()], JsonRequestBehavior.AllowGet);
        }
        
        List<E_usp_em_ct_prs_doc_list> v_lq_usp_em_ct_prs_doc_list = new List<E_usp_em_ct_prs_doc_list>();
        BLPrueba objBL_usp_em_ct_prs_doc_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_prs_doc_list(string ic_ccod_emp, string ic_ccod_prs_doc, string ic_cprs_tip, string ic_cest, string ic_load_BD)
        {
            objBL_usp_em_ct_prs_doc_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_prs_doc_list = (List<E_usp_em_ct_prs_doc_list>)Session[EnumSession.Variable.ES_usp_em_ct_prs_doc_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_prs_doc_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_prs_doc_list = objBL_usp_em_ct_prs_doc_list.Lista_usp_em_ct_prs_doc_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_prs_doc_list_Mtz.ToString()] = v_lq_usp_em_ct_prs_doc_list;
            }
            // Agregar descripcion
            if (ic_ccod_prs_doc == "" && ic_cprs_tip != "" && ic_cest != "")
            {
                // UTILIZAR PARA VARIOS CASOS
                string[] pa_cprs_tip = new[] { "A", ic_cprs_tip };
                Session[EnumSession.Variable.ES_usp_em_ct_prs_doc_list.ToString()] = v_lq_usp_em_ct_prs_doc_list.Where(o => pa_cprs_tip.Contains(o.cprs_tip)).Where(b => b.cest == ic_cest).OrderBy(b => b.cdsc_prs_doc).ToList();
            }
            // Agregar descripcion
            else if (ic_ccod_prs_doc != "" && ic_cprs_tip == "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_doc_list.ToString()] = v_lq_usp_em_ct_prs_doc_list.Where(a => a.ccod_prs_doc == ic_ccod_prs_doc).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_prs_doc_list.ToString()] = v_lq_usp_em_ct_prs_doc_list.OrderByDescending(a => a.id_ct_prs_doc).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_prs_doc_list.ToString()], JsonRequestBehavior.AllowGet);
        }


        List<E_usp_em_ct_dir_det_list> v_lq_usp_em_ct_dir_det_list = new List<E_usp_em_ct_dir_det_list>();
        BLPrueba objBL_usp_em_ct_dir_det_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_dir_det_list(string ic_ccod_emp, string ic_cest, string ic_ccod_dir_det, string ic_load_BD)
        {
            objBL_usp_em_ct_dir_det_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_dir_det_list = (List<E_usp_em_ct_dir_det_list>)Session[EnumSession.Variable.ES_usp_em_ct_dir_det_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_dir_det_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_dir_det_list = objBL_usp_em_ct_dir_det_list.Lista_usp_em_ct_dir_det_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_dir_det_list_Mtz.ToString()] = v_lq_usp_em_ct_dir_det_list;
            }


            //if (p_action == "load")
            /*
            if (p_ccod_it != "")
            {
                v_lq_usp_em_ct_dir_det_list = (List<E_usp_em_ct_dir_det_list>)Session[EnumSession.Variable.ES_usp_em_ct_dir_det_list_Mtz.ToString()];
            }
            else
            {
                v_lq_usp_em_ct_dir_det_list = objBL_usp_em_ct_dir_det_list.Lista_usp_em_ct_dir_det_list(pi_ccod_emp, pi_cest);
                Session[EnumSession.Variable.ES_usp_em_ct_dir_det_list_Mtz.ToString()] = v_lq_usp_em_ct_dir_det_list;
            }
            */

            // para los casos que haya error de carga
            /*
            if (!(lq_usp_em_ct_dir_det_list != null))
            {
                lq_usp_em_ct_dir_det_list = objBL_usp_em_ct_dir_det_list.Lista_usp_em_ct_dir_det_list(p_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_dir_det_list_Mtz.ToString()] = lq_usp_em_ct_dir_det_list;
            }
            */

            // Agregar descripcion
            if (ic_ccod_dir_det != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_det_list.ToString()] = v_lq_usp_em_ct_dir_det_list.Where(x => x.ccod_dir_det == ic_ccod_dir_det).ToList();
            }
            /*
            else if (p_ccod_um != "" && p_ccod_lp != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_det_list.ToString()] = lq_usp_em_ct_dir_det_list.Where(x => x.ccod_um == p_ccod_um).Where(y => y.ccod_lp == p_ccod_lp).ToList();
            }
            */
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_det_list.ToString()] = v_lq_usp_em_ct_dir_det_list.OrderByDescending(a => a.id_ct_dir_det).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_dir_det_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_ct_dir_tpv_list> v_lq_usp_em_ct_dir_tpv_list = new List<E_usp_em_ct_dir_tpv_list>();
        BLPrueba objBL_usp_em_ct_dir_tpv_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_dir_tpv_list(string ic_ccod_emp, string ic_cest, string ic_ccod_dir_tpv, string ic_load_BD)
        {
            objBL_usp_em_ct_dir_tpv_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_dir_tpv_list = (List<E_usp_em_ct_dir_tpv_list>)Session[EnumSession.Variable.ES_usp_em_ct_dir_tpv_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_dir_tpv_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_dir_tpv_list = objBL_usp_em_ct_dir_tpv_list.Lista_usp_em_ct_dir_tpv_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_dir_tpv_list_Mtz.ToString()] = v_lq_usp_em_ct_dir_tpv_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_tpv_list.ToString()] = v_lq_usp_em_ct_dir_tpv_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_dir_tpv).ToList();
            }
            // Seleccion de 1 registro
            else if (ic_ccod_dir_tpv != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_tpv_list.ToString()] = v_lq_usp_em_ct_dir_tpv_list.Where(x => x.ccod_dir_tpv == ic_ccod_dir_tpv).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_tpv_list.ToString()] = v_lq_usp_em_ct_dir_tpv_list.OrderByDescending(a => a.id_ct_dir_tpv).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_dir_tpv_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_ct_dir_tpz_list> v_lq_usp_em_ct_dir_tpz_list = new List<E_usp_em_ct_dir_tpz_list>();
        BLPrueba objBL_usp_em_ct_dir_tpz_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_dir_tpz_list(string ic_ccod_emp, string ic_cest, string ic_ccod_dir_tpz, string ic_load_BD)
        {
            objBL_usp_em_ct_dir_tpz_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_dir_tpz_list = (List<E_usp_em_ct_dir_tpz_list>)Session[EnumSession.Variable.ES_usp_em_ct_dir_tpz_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_dir_tpz_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_dir_tpz_list = objBL_usp_em_ct_dir_tpz_list.Lista_usp_em_ct_dir_tpz_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_dir_tpz_list_Mtz.ToString()] = v_lq_usp_em_ct_dir_tpz_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_tpz_list.ToString()] = v_lq_usp_em_ct_dir_tpz_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_dir_tpz).ToList();
            }
            // Seleccion de 1 registro
            else if (ic_ccod_dir_tpz != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_tpz_list.ToString()] = v_lq_usp_em_ct_dir_tpz_list.Where(x => x.ccod_dir_tpz == ic_ccod_dir_tpz).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_tpz_list.ToString()] = v_lq_usp_em_ct_dir_tpz_list.OrderByDescending(a => a.id_ct_dir_tpz).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_dir_tpz_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_dt_dir_list> v_lq_usp_em_dt_dir_list = new List<E_usp_em_dt_dir_list>();
        BLPrueba objBL_usp_em_dt_dir_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_dt_dir_list(string ic_ccod_emp, string ic_ccodigo, int in_ccod_dir, string ic_cest, string ic_load_BD)
        {
            objBL_usp_em_dt_dir_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_dt_dir_list = (List<E_usp_em_dt_dir_list>)Session[EnumSession.Variable.ES_usp_em_dt_dir_list_Mtz.ToString()];
            if (!(v_lq_usp_em_dt_dir_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_dt_dir_list = objBL_usp_em_dt_dir_list.Lista_usp_em_dt_dir_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_dt_dir_list_Mtz.ToString()] = v_lq_usp_em_dt_dir_list;
            }
            // Agregar descripcion
            if (ic_ccodigo != "" && in_ccod_dir == 0 && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_em_dt_dir_list.ToString()] = v_lq_usp_em_dt_dir_list.Where(a => a.ccodigo == ic_ccodigo).OrderByDescending(b => b.bpdt).ToList();
            }
            // Agregar descripcion
            else if (ic_ccodigo != "" && in_ccod_dir == 0 && ic_cest == "A")
            {
                Session[EnumSession.Variable.ES_usp_em_dt_dir_list.ToString()] = v_lq_usp_em_dt_dir_list.Where(a => a.ccodigo == ic_ccodigo).Where(b => b.cest == ic_cest).OrderByDescending(c => c.bpdt).ToList();
            }
            // Agregar descripcion
            else if (ic_ccodigo != "" && in_ccod_dir > 0)
            {
                Session[EnumSession.Variable.ES_usp_em_dt_dir_list.ToString()] = v_lq_usp_em_dt_dir_list.Where(a => a.ccodigo == ic_ccodigo).Where(b => b.ccod_dir == in_ccod_dir).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                //Session[EnumSession.Variable.ES_usp_em_dt_dir_list.ToString()] = v_lq_usp_em_dt_dir_list.OrderByDescending(a => a.id_dt_dir).ToList();
                Session[EnumSession.Variable.ES_usp_em_dt_dir_list.ToString()] = v_lq_usp_em_dt_dir_list.ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_dt_dir_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_dt_dir_dt_det_list> v_lq_usp_em_dt_dir_dt_det_list = new List<E_usp_em_dt_dir_dt_det_list>();
        BLPrueba objBL_usp_em_dt_dir_dt_det_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_dt_dir_dt_det_list(string ic_ccod_emp, string ic_ccodigo, int in_ccod_dir, string ic_load_BD)
        {
            objBL_usp_em_dt_dir_dt_det_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_dt_dir_dt_det_list = (List<E_usp_em_dt_dir_dt_det_list>)Session[EnumSession.Variable.ES_usp_em_dt_dir_dt_det_list_Mtz.ToString()];
            if (!(v_lq_usp_em_dt_dir_dt_det_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_dt_dir_dt_det_list = objBL_usp_em_dt_dir_dt_det_list.Lista_usp_em_dt_dir_dt_det_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_dt_dir_dt_det_list_Mtz.ToString()] = v_lq_usp_em_dt_dir_dt_det_list;
            }
            // Agregar Descripcion
            if (ic_ccodigo != "" && in_ccod_dir == 0)
            {
                Session[EnumSession.Variable.ES_usp_em_dt_dir_dt_det_list.ToString()] = v_lq_usp_em_dt_dir_dt_det_list.Where(a => a.ccodigo == ic_ccodigo).OrderByDescending(b => b.ccod_dir_det).ToList();
            }
            // Agregar Descripcion
            else if (ic_ccodigo != "" && in_ccod_dir == 0)
            {
                Session[EnumSession.Variable.ES_usp_em_dt_dir_dt_det_list.ToString()] = v_lq_usp_em_dt_dir_dt_det_list.Where(a => a.ccodigo == ic_ccodigo).OrderByDescending(b => b.ccod_dir_det).ToList();
            }
            // Agregar Descripcion
            else if (ic_ccodigo != "" && in_ccod_dir > 0)
            {
                Session[EnumSession.Variable.ES_usp_em_dt_dir_dt_det_list.ToString()] = v_lq_usp_em_dt_dir_dt_det_list.Where(a => a.ccodigo == ic_ccodigo).Where(b => b.ccod_dir == in_ccod_dir).ToList();
            }
            else
            // Seleccion de todos los registros
            {
                Session[EnumSession.Variable.ES_usp_em_dt_dir_dt_det_list.ToString()] = v_lq_usp_em_dt_dir_dt_det_list.OrderByDescending(a => a.id_dt_dir_dt_det).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_dt_dir_dt_det_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_ct_dir_dst_list> v_lq_usp_em_ct_dir_dst_list = new List<E_usp_em_ct_dir_dst_list>();
        BLPrueba objBL_usp_em_ct_dir_dst_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_dir_dst_list(string ic_ccod_emp, string ic_cest, string ic_load_BD)
        {
            objBL_usp_em_ct_dir_dst_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_dir_dst_list = (List<E_usp_em_ct_dir_dst_list>)Session[EnumSession.Variable.ES_usp_em_ct_dir_dst_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_dir_dst_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_dir_dst_list = objBL_usp_em_ct_dir_dst_list.Lista_usp_em_ct_dir_dst_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_em_ct_dir_dst_list_Mtz.ToString()] = v_lq_usp_em_ct_dir_dst_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_dst_list.ToString()] = v_lq_usp_em_ct_dir_dst_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_dir_prv).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_em_ct_dir_dst_list.ToString()] = v_lq_usp_em_ct_dir_dst_list.OrderByDescending(a => a.id_ct_dir_dst).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_dir_dst_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_ve_ts_ve_list> v_lq_usp_ve_ts_ve_list = new List<E_usp_ve_ts_ve_list>();
        BLPrueba objBL_usp_ve_ts_ve_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ve_ts_ve_list(string ic_ccod_emp, string ic_ccod_eje, string ic_ccod_per, string ic_load_BD)
        {
            objBL_usp_ve_ts_ve_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ve_ts_ve_list = (List<E_usp_ve_ts_ve_list>)Session[EnumSession.Variable.ES_usp_ve_ts_ve_list_Mtz.ToString()];
            if (!(v_lq_usp_ve_ts_ve_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ve_ts_ve_list = objBL_usp_ve_ts_ve_list.Lista_usp_ve_ts_ve_list(ic_ccod_emp, ic_ccod_eje, ic_ccod_per);
                Session[EnumSession.Variable.ES_usp_ve_ts_ve_list_Mtz.ToString()] = v_lq_usp_ve_ts_ve_list;
            }
            // Seleccion de data
            /*
            if (ic_ccod_prs != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_ve_ts_ve_list.ToString()] = v_lq_usp_ve_ts_ve_list.Where(a => a.ccod_prs == ic_ccod_prs).ToList();
            }
            else if (ic_ccod_prs == "" && ic_cest == "A")
            {
                Session[EnumSession.Variable.ES_usp_ve_ts_ve_list.ToString()] = v_lq_usp_ve_ts_ve_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_prs).ToList();
            }
            else
            {
            */
            Session[EnumSession.Variable.ES_usp_ve_ts_ve_list.ToString()] = v_lq_usp_ve_ts_ve_list.OrderByDescending(a => a.id_ts_ve).ToList();
            //}
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ve_ts_ve_list.ToString()], JsonRequestBehavior.AllowGet);
        }
        
        /* ELIMINAR ESTE BLOQUE */
        /*
        List<E_usp_fa_fa_imp_list> v_lq_usp_fa_fa_imp_list = new List<E_usp_fa_fa_imp_list>();
        BLPrueba objBL_usp_fa_fa_imp_list;
        [AllowAnonymous]
        public JsonResult lq_usp_fa_fa_imp_list(string ic_ccod_emp, string ic_ccod_eje, string ic_ccod_per, string ic_ccod_doc, string ic_ccod_ser, string ic_cdoc_nro, string ic_ccod_mon, string ic_ccod_it, int in_nid_it, string ic_load_BD)
        {
            objBL_usp_fa_fa_imp_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_fa_fa_imp_list = (List<E_usp_fa_fa_imp_list>)Session[EnumSession.Variable.ES_usp_fa_fa_imp_list_Mtz.ToString()];
            if (!(v_lq_usp_fa_fa_imp_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_fa_fa_imp_list = objBL_usp_fa_fa_imp_list.Lista_usp_fa_fa_imp_list(ic_ccod_emp, ic_ccod_eje, ic_ccod_per);
                Session[EnumSession.Variable.ES_usp_fa_fa_imp_list_Mtz.ToString()] = v_lq_usp_fa_fa_imp_list;
            }
            // Seleccion de data
            if (ic_ccod_doc != "" && ic_ccod_ser != "" && ic_cdoc_nro != "" && ic_ccod_mon != "" && ic_ccod_it == "" && in_nid_it == 0)
            {
                Session[EnumSession.Variable.ES_usp_fa_fa_imp_list.ToString()] = v_lq_usp_fa_fa_imp_list.Where(a => a.ccod_doc == ic_ccod_doc).Where(b => b.ccod_ser == ic_ccod_ser).Where(c => c.cdoc_nro == ic_cdoc_nro).Where(d => d.ccod_mon == ic_ccod_mon).Where(e => e.ccod_it == "").Where(f => f.nid_it == 0).OrderBy(g => g.nid_imp).ToList();
            }
            else if (ic_ccod_doc != "" && ic_ccod_ser != "" && ic_cdoc_nro != "" && ic_ccod_mon != "" && ic_ccod_it != "" && in_nid_it > 0)
            {
                Session[EnumSession.Variable.ES_usp_fa_fa_imp_list.ToString()] = v_lq_usp_fa_fa_imp_list.Where(a => a.ccod_doc == ic_ccod_doc).Where(b => b.ccod_ser == ic_ccod_ser).Where(c => c.cdoc_nro == ic_cdoc_nro).Where(d => d.ccod_mon == ic_ccod_mon).Where(e => e.ccod_it == ic_ccod_it).Where(f => f.nid_it == in_nid_it).OrderBy(g => g.nid_imp).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_fa_fa_imp_list.ToString()] = v_lq_usp_fa_fa_imp_list.ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_fa_fa_imp_list.ToString()], JsonRequestBehavior.AllowGet);
        }
        */


        List<E_usp_ve_ts_ve_dt_it_list> v_lq_usp_ve_ts_ve_dt_it_list = new List<E_usp_ve_ts_ve_dt_it_list>();
        BLPrueba objBL_usp_ve_ts_ve_dt_it_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ve_ts_ve_dt_it_list(string ic_ccod_emp, string ic_ccod_uop, string ic_ccod_eje, string ic_ccod_per, int ic_ccod_ve,string ic_ccod_mon, string ic_load_BD)
        {
            objBL_usp_ve_ts_ve_dt_it_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ve_ts_ve_dt_it_list = (List<E_usp_ve_ts_ve_dt_it_list>)Session[EnumSession.Variable.ES_usp_ve_ts_ve_dt_it_list_Mtz.ToString()];
            if (!(v_lq_usp_ve_ts_ve_dt_it_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ve_ts_ve_dt_it_list = objBL_usp_ve_ts_ve_dt_it_list.Lista_usp_ve_ts_ve_dt_it_list(ic_ccod_emp, ic_ccod_uop, ic_ccod_eje, ic_ccod_per);
                Session[EnumSession.Variable.ES_usp_ve_ts_ve_dt_it_list_Mtz.ToString()] = v_lq_usp_ve_ts_ve_dt_it_list;
            }
            // Seleccion de data
            if (ic_ccod_ve > 0 && ic_ccod_mon != "")
            {
                Session[EnumSession.Variable.ES_usp_ve_ts_ve_dt_it_list.ToString()] = v_lq_usp_ve_ts_ve_dt_it_list.Where(a => a.ccod_ve == ic_ccod_ve).Where(d => d.ccod_mon_lt == ic_ccod_mon).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_ve_ts_ve_dt_it_list.ToString()] = v_lq_usp_ve_ts_ve_dt_it_list.ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ve_ts_ve_dt_it_list.ToString()], JsonRequestBehavior.AllowGet);
        }


        List<E_usp_ve_ct_zn_list> v_lq_usp_ve_ct_zn_list = new List<E_usp_ve_ct_zn_list>();
        BLPrueba objBL_usp_ve_ct_zn_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ve_ct_zn_list(string ic_ccod_emp, string ic_cest, string ic_load_BD)
        {
            objBL_usp_ve_ct_zn_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ve_ct_zn_list = (List<E_usp_ve_ct_zn_list>)Session[EnumSession.Variable.ES_usp_ve_ct_zn_list_Mtz.ToString()];
            if (!(v_lq_usp_ve_ct_zn_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ve_ct_zn_list = objBL_usp_ve_ct_zn_list.Lista_usp_ve_ct_zn_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_ve_ct_zn_list_Mtz.ToString()] = v_lq_usp_ve_ct_zn_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_ve_ct_zn_list.ToString()] = v_lq_usp_ve_ct_zn_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_zn).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_ve_ct_zn_list.ToString()] = v_lq_usp_ve_ct_zn_list.OrderByDescending(a => a.id_ct_zn).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ve_ct_zn_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_ve_ct_cdp_list> v_lq_usp_ve_ct_cdp_list = new List<E_usp_ve_ct_cdp_list>();
        BLPrueba objBL_usp_ve_ct_cdp_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ve_ct_cdp_list(string ic_ccod_emp, string ic_cest, string ic_load_BD)
        {
            objBL_usp_ve_ct_cdp_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ve_ct_cdp_list = (List<E_usp_ve_ct_cdp_list>)Session[EnumSession.Variable.ES_usp_ve_ct_cdp_list_Mtz.ToString()];
            if (!(v_lq_usp_ve_ct_cdp_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ve_ct_cdp_list = objBL_usp_ve_ct_cdp_list.Lista_usp_ve_ct_cdp_list(ic_ccod_emp);
                Session[EnumSession.Variable.ES_usp_ve_ct_cdp_list_Mtz.ToString()] = v_lq_usp_ve_ct_cdp_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_ve_ct_cdp_list.ToString()] = v_lq_usp_ve_ct_cdp_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_cdp).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_ve_ct_cdp_list.ToString()] = v_lq_usp_ve_ct_cdp_list.OrderByDescending(a => a.id_ct_cdp).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ve_ct_cdp_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        /*
        [AllowAnonymous]
        public JsonResult slq_usp_al_it_saldo_list(string ic_ccod_emp, string ic_ccod_eje, string ic_ccod_per, string ic_ccod_uop)
        {
            BLPrueba objBLPrueba = new BLPrueba();
            List<E_usp_al_it_saldo_list> lstPrueba = new List<E_usp_al_it_saldo_list>();
            lstPrueba = objBLPrueba.Lista_usp_al_it_saldo_list(ic_ccod_emp, ic_ccod_eje, ic_ccod_per, ic_ccod_uop);

            return Json(lstPrueba, JsonRequestBehavior.AllowGet);
        }
        */

        List<E_usp_al_it_saldo_list> v_lq_usp_al_it_saldo_list = new List<E_usp_al_it_saldo_list>();
        BLPrueba objBL_usp_al_it_saldo_list;
        [AllowAnonymous]
        public JsonResult lq_usp_al_it_saldo_list(
                                                string ic_ccod_emp, string ic_ccod_eje, string ic_ccod_per, string ic_ccod_uop,
                                                string id_dfch,
                                                string ic_ccod_mon,
                                                string ir_RowData_tpc,
                                                int in_bvisible,

                                                string ic_ccod_it,
                                                string ic_ccod_um,

                                                //string ic_ctipo_it,

                                                string ic_load_BD
                                                )
        {
            objBL_usp_al_it_saldo_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_al_it_saldo_list = (List<E_usp_al_it_saldo_list>)Session[EnumSession.Variable.ES_usp_al_it_saldo_list_Mtz.ToString()];
            if (!(v_lq_usp_al_it_saldo_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_al_it_saldo_list = objBL_usp_al_it_saldo_list.Lista_usp_al_it_saldo_list(ic_ccod_emp, ic_ccod_eje, ic_ccod_per, ic_ccod_uop, id_dfch, ic_ccod_mon, ir_RowData_tpc);
                Session[EnumSession.Variable.ES_usp_al_it_saldo_list_Mtz.ToString()] = v_lq_usp_al_it_saldo_list;
            }

            // Seleccion de data
            if (ic_ccod_it != "" && ic_ccod_um != "")
            {
                //Session[EnumSession.Variable.ES_usp_al_it_saldo_list.ToString()] = v_lq_usp_al_it_saldo_list.Where(a => a.ctipo_it == ic_ctipo_it).Where(b => b.ccod_it == ic_ccod_it).Where(c => c.ccod_um == ic_ccod_um).ToList();
                Session[EnumSession.Variable.ES_usp_al_it_saldo_list.ToString()] = v_lq_usp_al_it_saldo_list.Where(a => a.ccod_it == ic_ccod_it).Where(b => b.ccod_um == ic_ccod_um).ToList();
            }
            else if (in_bvisible == 1)
            {
                //Session[EnumSession.Variable.ES_usp_al_it_saldo_list.ToString()] = v_lq_usp_al_it_saldo_list.Where(a => a.ctipo_it == ic_ctipo_it).Where(b => b.bvisible == in_bvisible).ToList();
                Session[EnumSession.Variable.ES_usp_al_it_saldo_list.ToString()] = v_lq_usp_al_it_saldo_list.Where(a => a.bvisible == in_bvisible).ToList();
            }
            else
            {
                Session[EnumSession.Variable.ES_usp_al_it_saldo_list.ToString()] = v_lq_usp_al_it_saldo_list.ToList();
            }

            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_al_it_saldo_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_ad_ct_usu_dt_emp_list> v_lq_usp_ad_ct_usu_dt_emp_list = new List<E_usp_ad_ct_usu_dt_emp_list>();
        BLPrueba objBL_usp_ad_ct_usu_dt_emp_list;
        [AllowAnonymous]
        public JsonResult lq_usp_ad_ct_usu_dt_emp_list(string ic_ccod_usu, string ic_cest, string ic_load_BD)
        {
            objBL_usp_ad_ct_usu_dt_emp_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_ad_ct_usu_dt_emp_list = (List<E_usp_ad_ct_usu_dt_emp_list>)Session[EnumSession.Variable.ES_usp_ad_ct_usu_dt_emp_list_Mtz.ToString()];
            if (!(v_lq_usp_ad_ct_usu_dt_emp_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_ad_ct_usu_dt_emp_list = objBL_usp_ad_ct_usu_dt_emp_list.Lista_usp_ad_ct_usu_dt_emp_list(ic_ccod_usu);
                Session[EnumSession.Variable.ES_usp_ad_ct_usu_dt_emp_list_Mtz.ToString()] = v_lq_usp_ad_ct_usu_dt_emp_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_ad_ct_usu_dt_emp_list.ToString()] = v_lq_usp_ad_ct_usu_dt_emp_list.Where(a => a.cest == ic_cest).OrderBy(b => b.cdsc_prs).ToList();
            }
            // Seleccion de todos los registros
            else
            {
                Session[EnumSession.Variable.ES_usp_ad_ct_usu_dt_emp_list.ToString()] = v_lq_usp_ad_ct_usu_dt_emp_list.OrderByDescending(a => a.id_ct_usu_dt_emp).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_ad_ct_usu_dt_emp_list.ToString()], JsonRequestBehavior.AllowGet);
        }

        List<E_usp_em_ct_emp_dt_uop_list> v_lq_usp_em_ct_emp_dt_uop_list = new List<E_usp_em_ct_emp_dt_uop_list>();
        BLPrueba objBL_usp_em_ct_emp_dt_uop_list;
        [AllowAnonymous]
        public JsonResult lq_usp_em_ct_emp_dt_uop_list(string ic_ccod_emp, string ic_cest, string ic_load_BD)
        {
            objBL_usp_em_ct_emp_dt_uop_list = new BLPrueba();
            // Verificamos si existe data
            v_lq_usp_em_ct_emp_dt_uop_list = (List<E_usp_em_ct_emp_dt_uop_list>)Session[EnumSession.Variable.ES_usp_em_ct_emp_dt_uop_list_Mtz.ToString()];
            if (!(v_lq_usp_em_ct_emp_dt_uop_list != null) || ic_load_BD == "load_BD")
            {
                v_lq_usp_em_ct_emp_dt_uop_list = objBL_usp_em_ct_emp_dt_uop_list.Lista_usp_em_ct_emp_dt_uop_list();
                Session[EnumSession.Variable.ES_usp_em_ct_emp_dt_uop_list_Mtz.ToString()] = v_lq_usp_em_ct_emp_dt_uop_list;
            }
            // Seleccion de registros 'Activos'
            if (ic_ccod_emp != "" && ic_cest != "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_emp_dt_uop_list.ToString()] = v_lq_usp_em_ct_emp_dt_uop_list.Where(a => a.ccod_emp == ic_ccod_emp).Where(b => b.cest == ic_cest).OrderBy(c => c.cdsc_uop).ToList();
            }
            // Seleccion de todos los registros
            else if (ic_ccod_emp != "" && ic_cest == "")
            {
                Session[EnumSession.Variable.ES_usp_em_ct_emp_dt_uop_list.ToString()] = v_lq_usp_em_ct_emp_dt_uop_list.Where(a => a.ccod_emp == ic_ccod_emp).OrderByDescending(b => b.id_ct_emp_dt_uop).ToList();
            }
            // Retorno de data
            return Json(Session[EnumSession.Variable.ES_usp_em_ct_emp_dt_uop_list.ToString()], JsonRequestBehavior.AllowGet);
        }





















































































        //public static string ABC { get; set; } = string.Empty;
    }
}