using Centrix.DataAccess;
using Centrix.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Centrix.BusinessLogic
{
    public class BLPrueba
    {
        DALPrueba objDALPrueba = new DALPrueba();







            


        public List<E_Get_em_empuop_ln> Listar_Get_em_empuop_ln(string p_ccod_emp)
        {
            return objDALPrueba.Listar_Get_em_empuop_ln(p_ccod_emp);
        }




        public List<E_usp_Get_ad_usu_men_opt_ln> Lista_usp_Get_ad_usu_men_opt_ln(string pi_ccod_emp, string pi_ccod_usu)
        {
            return objDALPrueba.LstBD_usp_Get_ad_usu_men_opt_ln(pi_ccod_emp, pi_ccod_usu);
        }




        public List<E_usp_Get_em_mon_tpc_ln> Lista_usp_Get_em_mon_tpc_ln(string ic_ccod_emp, string ic_dfch_tpc)
        {
            return objDALPrueba.LstBD_usp_Get_em_mon_tpc_ln(ic_ccod_emp, ic_dfch_tpc);
        }

        public List<E_usp_Get_fa_doc_ser_ln> Lista_usp_Get_fa_doc_ser_ln(string p_ccod_emp, string p_cest)
        {
            return objDALPrueba.LstBD_usp_Get_fa_doc_ser_ln(p_ccod_emp, p_cest);
        }

        public List<E_usp_Get_em_tbj_ct> Lista_usp_Get_em_tbj_ct(string p_ccod_emp, string p_cest)
        {
            return objDALPrueba.LstBD_usp_Get_em_tbj_ct(p_ccod_emp, p_cest);
        }

  

        public List<E_usp_Get_al_it_um_saldo> Lista_usp_Get_al_it_um_saldo(string p_ccod_emp, string p_ccod_eje, string p_ccod_per, string p_ccod_uop, string p_ccod_it, string p_ccod_um)
        {
            return objDALPrueba.LstBD_usp_Get_al_it_um_saldo(p_ccod_emp, p_ccod_eje, p_ccod_per, p_ccod_uop, p_ccod_it, p_ccod_um);
        }
        
        public List<E_usp_Get_si_usu_ctl_conf> Lista_usp_Get_si_usu_ctl_conf(string ic_ccod_emp, string ic_ccod_usu)
        {
            return objDALPrueba.p_bd_usp_Get_si_usu_ctl_conf(ic_ccod_emp, ic_ccod_usu);
        }

        //===============================================================================================================================
        // Registro
        

        //============================================================ MODIFICADOS
        //============================================================ MODIFICADOS
        //============================================================ MODIFICADOS


        public List<E_usp_em_dir_delete> Lista_usp_em_dir_delete(string ic_ccod_emp, string ic_ccodigo, int in_ccod_dir)
        {
            return objDALPrueba.p_bd_usp_em_dir_delete(ic_ccod_emp, ic_ccodigo, in_ccod_dir);
        }

        //================================================================================== new de news



        public List<E_usp_ad_mod_men_list> Lista_usp_ad_mod_men_list(/*string ic_ccod_emp, */string ic_ccod_usu)
        {
            return objDALPrueba.p_bd_usp_ad_mod_men_list(/*ic_ccod_emp, */ic_ccod_usu);
        }
        public List<E_usp_ad_usu_men_opt_list> Lista_usp_ad_usu_men_opt_list(string ic_ccod_emp, string ic_ccod_usu)
        {
            return objDALPrueba.p_bd_usp_ad_usu_men_opt_list(ic_ccod_emp, ic_ccod_usu);
        }

        public List<E_usp_al_it_imp_list> Lista_usp_al_it_imp_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_al_it_imp_list(ic_ccod_emp);
        }

        public List<E_usp_fa_fa_anular> Lista_usp_fa_fa_anular(string ic_ccod_emp, string ic_ccod_doc, string ic_ccod_ser, string ic_cdoc_nro)
        {
            return objDALPrueba.p_bd_usp_fa_fa_anular(ic_ccod_emp, ic_ccod_doc, ic_ccod_ser, ic_cdoc_nro);
        }
    

        /*
        public List<E_usp_al_it_srv_list> Lista_usp_al_it_srv_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_al_it_srv_list(ic_ccod_emp);
        }
        */

        /*
        public List<E_usp_fa_lp_it_ln_list> Lista_usp_fa_lp_it_ln_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_Get_fa_lp_it_ln(ic_ccod_emp);
        }
        */

        public List<E_usp_fa_fe_tpa_ct_list> Lista_usp_fa_fe_tpa_ct_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_fa_fe_tpa_ct_list(ic_ccod_emp);
        }

        public List<E_usp_exec_sp> Lista_usp_exec_sp(string ic_sp, string[] data)
        {
            return objDALPrueba.p_bd_usp_exec_sp(ic_sp, data);
        }

        public List<E_usp_ga_aac_ct_list> Lista_usp_ga_aac_ct_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_ga_aac_ct_list(ic_ccod_emp);
        }

        public List<E_usp_ga_nac_ct_list> Lista_usp_ga_nac_ct_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_ga_nac_ct_list(ic_ccod_emp);
        }

        public List<E_usp_ga_per_ct_list> Lista_usp_ga_per_ct_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_ga_per_ct_list(ic_ccod_emp);
        }

        public List<E_usp_ga_gac_ct_list> Lista_usp_ga_gac_ct_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_ga_gac_ct_list(ic_ccod_emp);
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

        public List<E_usp_ve_ct_opve_list> Lista_usp_ve_ct_opve_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_ve_ct_opve_list(ic_ccod_emp);
        }
                
        public List<E_usp_fi_ct_doc_list> Lista_usp_fi_ct_doc_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_fi_ct_doc_list(ic_ccod_emp);
        }

        public List<E_usp_em_ct_mon_list> Lista_usp_em_ct_mon_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_mon_list(ic_ccod_emp);
        }

        public List<E_usp_al_ct_opal_list> Lista_usp_al_ct_opal_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_al_ct_opal_list(ic_ccod_emp);
        }
        
        public List<E_usp_al_ct_it_list> Lista_usp_al_ct_it_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_al_ct_it_list(ic_ccod_emp);
        }

        public List<E_usp_al_ct_lin_list> Lista_usp_al_ct_lin_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_al_ct_lin_list(ic_ccod_emp);
        }

        public List<E_usp_al_ct_slin_list> Lista_usp_al_ct_slin_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_al_ct_slin_list(ic_ccod_emp);
        }

        public List<E_usp_al_ct_tip_prod_list> Lista_usp_al_ct_tip_prod_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_al_ct_tip_prod_list(ic_ccod_emp);
        }

        public List<E_usp_al_ct_um_list> Lista_usp_al_ct_um_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_al_ct_um_list(ic_ccod_emp);
        }

        public List<E_usp_al_ct_mc_list> Lista_usp_al_ct_mc_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_al_ct_mc_list(ic_ccod_emp);
        }


        public List<E_usp_co_ct_imp_list> Lista_usp_co_ct_imp_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_co_ct_imp_list(ic_ccod_emp);
        }


        public List<E_usp_al_ct_it_dt_um_list> Lista_usp_al_ct_it_dt_um_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_al_ct_it_dt_um_list(ic_ccod_emp);
        }

        public List<E_usp_em_ct_mdc_list> Lista_usp_em_ct_mdc_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_mdc_list(ic_ccod_emp);
        }

        public List<E_usp_em_ct_prs_list> Lista_usp_em_ct_prs_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_prs_list(ic_ccod_emp);
        }


        public List<E_usp_em_ct_prs_csf_list> Lista_usp_em_ct_prs_csf_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_prs_csf_list(ic_ccod_emp);
        }


        public List<E_usp_em_ct_prs_tip_list> Lista_usp_em_ct_prs_tip_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_prs_tip_list(ic_ccod_emp);
        }

        public List<E_usp_em_ct_prs_tsx_list> Lista_usp_em_ct_prs_tsx_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_prs_tsx_list(ic_ccod_emp);
        }

        public List<E_usp_em_dt_mdc_list> Lista_usp_em_dt_mdc_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_dt_mdc_list(ic_ccod_emp);
        }

        public List<E_usp_em_ct_prs_dt_doc_list> Lista_usp_em_ct_prs_dt_doc_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_prs_dt_doc_list(ic_ccod_emp);
        }

        public List<E_usp_em_ct_prs_doc_list> Lista_usp_em_ct_prs_doc_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_prs_doc_list(ic_ccod_emp);
        }

        public List<E_usp_em_ct_dir_det_list> Lista_usp_em_ct_dir_det_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_dir_det_list(ic_ccod_emp);
        }

        public List<E_usp_em_ct_dir_tpv_list> Lista_usp_em_ct_dir_tpv_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_dir_tpv_list(ic_ccod_emp);
        }

        public List<E_usp_em_ct_dir_tpz_list> Lista_usp_em_ct_dir_tpz_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_dir_tpz_list(ic_ccod_emp);
        }

        public List<E_usp_em_dt_dir_list> Lista_usp_em_dt_dir_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_dt_dir_list(ic_ccod_emp);
        }

        public List<E_usp_em_dt_dir_dt_det_list> Lista_usp_em_dt_dir_dt_det_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_dt_dir_dt_det_list(ic_ccod_emp);
        }


        public List<E_usp_em_ct_dir_dst_list> Lista_usp_em_ct_dir_dst_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_em_ct_dir_dst_list(ic_ccod_emp);
        }

        public List<E_usp_ve_ts_ve_list> Lista_usp_ve_ts_ve_list(string ic_ccod_emp, string ic_ccod_eje, string ic_ccod_per)
        {
            return objDALPrueba.p_bd_usp_ve_ts_ve_list(ic_ccod_emp, ic_ccod_eje, ic_ccod_per);
        }

        
        /*
        public List<E_usp_fa_fa_imp_list> Lista_usp_fa_fa_imp_list(string ic_ccod_emp, string ic_ccod_eje, string ic_ccod_per)
        {
            return objDALPrueba.p_bd_usp_fa_fa_imp_list(ic_ccod_emp, ic_ccod_eje, ic_ccod_per);
        }
        */

        public List<E_usp_ve_ts_ve_dt_it_list> Lista_usp_ve_ts_ve_dt_it_list(string ic_ccod_emp, string ic_ccod_uop, string ic_ccod_eje, string ic_ccod_per)
        {
            return objDALPrueba.p_bd_usp_ve_ts_ve_dt_it_list(ic_ccod_emp, ic_ccod_uop, ic_ccod_eje, ic_ccod_per);
        }

        public List<E_usp_ve_ct_zn_list> Lista_usp_ve_ct_zn_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_ve_ct_zn_list(ic_ccod_emp);
        }


        public List<E_usp_ve_ct_cdp_list> Lista_usp_ve_ct_cdp_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_ve_ct_cdp_list(ic_ccod_emp);
        }
                
        public List<E_usp_al_it_saldo_list> Lista_usp_al_it_saldo_list(
                                                                    string ic_ccod_emp, string ic_ccod_eje, string ic_ccod_per, string ic_ccod_uop,
                                                                    string id_dfch,
                                                                    string ic_ccod_mon,
                                                                    string ir_RowData_tpc
                                                                    )
        {
            return objDALPrueba.p_bd_usp_al_it_saldo_list(ic_ccod_emp, ic_ccod_eje, ic_ccod_per, ic_ccod_uop, id_dfch, ic_ccod_mon, ir_RowData_tpc);
        }
        
        public List<E_usp_ad_ct_usu_dt_emp_list> Lista_usp_ad_ct_usu_dt_emp_list(string ic_ccod_emp)
        {
            return objDALPrueba.p_bd_usp_ad_ct_usu_dt_emp_list(ic_ccod_emp);
        }
        
        public List<E_usp_em_ct_emp_dt_uop_list> Lista_usp_em_ct_emp_dt_uop_list()
        {
            return objDALPrueba.p_bd_usp_em_ct_emp_dt_uop_list();
        }


































    }
}