using Centrix.Entity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Centrix.DataAccess
{
    public class DALPrueba
    {
        Helper.HelperDataBase.HelperDataBaseCommands SqlCommand_ = new Helper.HelperDataBase.HelperDataBaseCommands();
        Helper.HelperDataBase.HelperMapping Mapping_ = new Helper.HelperDataBase.HelperMapping();
  
       








        public List<E_Get_em_empuop_ln> Listar_Get_em_empuop_ln(string p_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@p_ccod_emp", p_ccod_emp)
                                                               };
                return (Mapping_.DataReaderMapToListSQL<E_Get_em_empuop_ln>(SqlCommand_.ExecuteReaderSQL("usp_get_em_empuop_ln", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_Get_ad_usu_men_opt_ln> LstBD_usp_Get_ad_usu_men_opt_ln(string pi_ccod_emp, string pi_ccod_usu)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@pi_ccod_emp", pi_ccod_emp),
                                                                    new SqlParameter("@pi_ccod_usu", pi_ccod_usu)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_Get_ad_usu_men_opt_ln>(SqlCommand_.ExecuteReaderSQL("usp_Get_ad_usu_men_opt_ln", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }





        public List<E_usp_Get_em_mon_tpc_ln> LstBD_usp_Get_em_mon_tpc_ln(string ic_ccod_emp, string ic_dfch_tpc)
        {
            if (ic_dfch_tpc == "")
            {
                ic_dfch_tpc = "01/01/2000";
            }

            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp),
                                                                    new SqlParameter("@id_dfch_tpc", Convert.ToDateTime(ic_dfch_tpc))
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_Get_em_mon_tpc_ln>(SqlCommand_.ExecuteReaderSQL("usp_Get_em_mon_tpc_ln", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_Get_fa_doc_ser_ln> LstBD_usp_Get_fa_doc_ser_ln(string p_ccod_emp, string p_cest)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@p_ccod_emp", p_ccod_emp),
                                                                    new SqlParameter("@p_cest", p_cest)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_Get_fa_doc_ser_ln>(SqlCommand_.ExecuteReaderSQL("usp_Get_fa_doc_ser_ln", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_Get_em_tbj_ct> LstBD_usp_Get_em_tbj_ct(string p_ccod_emp, string p_cest)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@p_ccod_emp", p_ccod_emp),
                                                                    new SqlParameter("@p_cest", p_cest)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_Get_em_tbj_ct>(SqlCommand_.ExecuteReaderSQL("usp_Get_em_tbj_ct", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_Get_al_it_um_saldo> LstBD_usp_Get_al_it_um_saldo(string p_ccod_emp, string p_ccod_eje, string p_ccod_per, string p_ccod_uop, string p_ccod_it, string p_ccod_um)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@p_ccod_emp", p_ccod_emp),
                                                                    new SqlParameter("@p_ccod_eje", p_ccod_eje),
                                                                    new SqlParameter("@p_ccod_per", p_ccod_per),
                                                                    new SqlParameter("@p_ccod_uop", p_ccod_uop),
                                                                    new SqlParameter("@p_ccod_it", p_ccod_it),
                                                                    new SqlParameter("@p_ccod_um", p_ccod_um)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_Get_al_it_um_saldo>(SqlCommand_.ExecuteReaderSQL("usp_Get_al_it_um_saldo", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        



        // ================================================================================================================================================
        // Registro
        // ================================================================================================================================================



        //============================================================ MODIFICADOS
        //============================================================ MODIFICADOS
        //============================================================ MODIFICADOS



        



                
        public List<E_usp_em_dir_delete> p_bd_usp_em_dir_delete(string ic_ccod_emp, string ic_ccodigo, int in_ccod_dir)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp),
                                                                    new SqlParameter("@ic_ccodigo", ic_ccodigo),
                                                                    new SqlParameter("@in_ccod_dir", in_ccod_dir)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_dir_delete>(SqlCommand_.ExecuteReaderSQL("usp_em_dir_delete", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        //================================================================================ NEW DE NEWS

        public List<E_usp_ad_mod_men_list> p_bd_usp_ad_mod_men_list(/*string ic_ccod_emp,*/string ic_ccod_usu)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    /*new SqlParameter("@ic_ccod_emp", ic_ccod_emp),*/
                                                                    new SqlParameter("@ic_ccod_usu", ic_ccod_usu)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ad_mod_men_list>(SqlCommand_.ExecuteReaderSQL("usp_ad_mod_men_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_ad_usu_men_opt_list> p_bd_usp_ad_usu_men_opt_list(string ic_ccod_emp, string ic_ccod_usu)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp),
                                                                    new SqlParameter("@ic_ccod_usu", ic_ccod_usu)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ad_usu_men_opt_list>(SqlCommand_.ExecuteReaderSQL("usp_ad_usu_men_opt_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }



        
        // eLIMINAR TODO LO RELACIONADO A ESTE PROCESO
        public List<E_usp_al_it_imp_list> p_bd_usp_al_it_imp_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_it_imp_list>(SqlCommand_.ExecuteReaderSQL("usp_al_it_imp_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        

        public List<E_usp_fa_fa_anular> p_bd_usp_fa_fa_anular(string ic_ccod_emp, string ic_ccod_doc, string ic_ccod_ser, string ic_cdoc_nro)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp),
                                                                    new SqlParameter("@ic_ccod_doc", ic_ccod_doc),
                                                                    new SqlParameter("@ic_ccod_ser", ic_ccod_ser),
                                                                    new SqlParameter("@ic_cdoc_nro", ic_cdoc_nro)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_fa_fa_anular>(SqlCommand_.ExecuteReaderSQL("usp_fa_fa_anular", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        /*
        public List<E_usp_al_it_srv_list> p_bd_usp_al_it_srv_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_it_srv_list>(SqlCommand_.ExecuteReaderSQL("usp_al_it_srv_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        */
        public List<E_usp_Get_si_usu_ctl_conf> p_bd_usp_Get_si_usu_ctl_conf(string ic_ccod_emp, string ic_ccod_usu)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp),
                                                                    new SqlParameter("@ic_ccod_usu", ic_ccod_usu)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_Get_si_usu_ctl_conf>(SqlCommand_.ExecuteReaderSQL("usp_Get_si_usu_ctl_conf", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        
        /*
        public List<E_usp_fa_lp_it_ln_list> p_bd_usp_Get_fa_lp_it_ln(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_fa_lp_it_ln_list>(SqlCommand_.ExecuteReaderSQL("usp_fa_lp_it_ln_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        */
        
        public List<E_usp_fa_fe_tpa_ct_list> p_bd_usp_fa_fe_tpa_ct_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_fa_fe_tpa_ct_list>(SqlCommand_.ExecuteReaderSQL("usp_fa_fe_tpa_ct_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_exec_sp> p_bd_usp_exec_sp(
                                                    string ic_sp,
                                                    string[] data
                                                    )
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                new SqlParameter("@ic_sp", ic_sp),
                                                                new SqlParameter("@ir_RowData_1", data[0]),
                                                                new SqlParameter("@ir_RowData_2", data[1]),
                                                                new SqlParameter("@ir_RowData_3", data[2]),
                                                                new SqlParameter("@ir_RowData_4", data[3]),
                                                                new SqlParameter("@ir_RowData_5", data[4]),
                                                                new SqlParameter("@ir_RowData_6", data[5]),
                                                                new SqlParameter("@ir_RowData_7", data[6]),
                                                                new SqlParameter("@ir_RowData_8", data[7]),
                                                                new SqlParameter("@ir_RowData_9", data[8]),
                                                                new SqlParameter("@ir_RowData_10", data[9]),
                                                               };
                return (Mapping_.DataReaderMapToListSQL<E_usp_exec_sp>(SqlCommand_.ExecuteReaderSQL("usp_exec_sp", Parametros)));
            }
            catch (Exception Ex)

            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_ga_aac_ct_list> p_bd_usp_ga_aac_ct_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ga_aac_ct_list>(SqlCommand_.ExecuteReaderSQL("usp_ga_aac_ct_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_ga_nac_ct_list> p_bd_usp_ga_nac_ct_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ga_nac_ct_list>(SqlCommand_.ExecuteReaderSQL("usp_ga_nac_ct_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_ga_per_ct_list> p_bd_usp_ga_per_ct_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ga_per_ct_list>(SqlCommand_.ExecuteReaderSQL("usp_ga_per_ct_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_ga_gac_ct_list> p_bd_usp_ga_gac_ct_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ga_gac_ct_list>(SqlCommand_.ExecuteReaderSQL("usp_ga_gac_ct_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
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

        public List<E_usp_ve_ct_opve_list> p_bd_usp_ve_ct_opve_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ve_ct_opve_list>(SqlCommand_.ExecuteReaderSQL("usp_ve_ct_opve_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_fi_ct_doc_list> p_bd_usp_fi_ct_doc_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_fi_ct_doc_list>(SqlCommand_.ExecuteReaderSQL("usp_fi_ct_doc_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_mon_list> p_bd_usp_em_ct_mon_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_mon_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_mon_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_al_ct_opal_list> p_bd_usp_al_ct_opal_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_ct_opal_list>(SqlCommand_.ExecuteReaderSQL("usp_al_ct_opal_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_al_ct_it_list> p_bd_usp_al_ct_it_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_ct_it_list>(SqlCommand_.ExecuteReaderSQL("usp_al_ct_it_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        
        public List<E_usp_al_ct_lin_list> p_bd_usp_al_ct_lin_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_ct_lin_list>(SqlCommand_.ExecuteReaderSQL("usp_al_ct_lin_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_al_ct_slin_list> p_bd_usp_al_ct_slin_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_ct_slin_list>(SqlCommand_.ExecuteReaderSQL("usp_al_ct_slin_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        
        public List<E_usp_al_ct_tip_prod_list> p_bd_usp_al_ct_tip_prod_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_ct_tip_prod_list>(SqlCommand_.ExecuteReaderSQL("usp_al_ct_tip_prod_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        
        public List<E_usp_al_ct_um_list> p_bd_usp_al_ct_um_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_ct_um_list>(SqlCommand_.ExecuteReaderSQL("usp_al_ct_um_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_al_ct_mc_list> p_bd_usp_al_ct_mc_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_ct_mc_list>(SqlCommand_.ExecuteReaderSQL("usp_al_ct_mc_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_co_ct_imp_list> p_bd_usp_co_ct_imp_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_co_ct_imp_list>(SqlCommand_.ExecuteReaderSQL("usp_co_ct_imp_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_al_ct_it_dt_um_list> p_bd_usp_al_ct_it_dt_um_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_ct_it_dt_um_list>(SqlCommand_.ExecuteReaderSQL("usp_al_ct_it_dt_um_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_em_ct_mdc_list> p_bd_usp_em_ct_mdc_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_mdc_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_mdc_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_prs_list> p_bd_usp_em_ct_prs_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                 new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                               };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_prs_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_prs_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_prs_csf_list> p_bd_usp_em_ct_prs_csf_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_prs_csf_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_prs_csf_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_prs_tip_list> p_bd_usp_em_ct_prs_tip_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_prs_tip_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_prs_tip_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        
        public List<E_usp_em_ct_prs_tsx_list> p_bd_usp_em_ct_prs_tsx_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_prs_tsx_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_prs_tsx_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_dt_mdc_list> p_bd_usp_em_dt_mdc_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_dt_mdc_list>(SqlCommand_.ExecuteReaderSQL("usp_em_dt_mdc_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_prs_dt_doc_list> p_bd_usp_em_ct_prs_dt_doc_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_prs_dt_doc_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_prs_dt_doc_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_prs_doc_list> p_bd_usp_em_ct_prs_doc_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_prs_doc_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_prs_doc_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_dir_det_list> p_bd_usp_em_ct_dir_det_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_dir_det_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_dir_det_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_dir_tpv_list> p_bd_usp_em_ct_dir_tpv_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_dir_tpv_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_dir_tpv_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_dir_tpz_list> p_bd_usp_em_ct_dir_tpz_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_dir_tpz_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_dir_tpz_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_em_dt_dir_list> p_bd_usp_em_dt_dir_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                 new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                               };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_dt_dir_list>(SqlCommand_.ExecuteReaderSQL("usp_em_dt_dir_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_dt_dir_dt_det_list> p_bd_usp_em_dt_dir_dt_det_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_dt_dir_dt_det_list>(SqlCommand_.ExecuteReaderSQL("usp_em_dt_dir_dt_det_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_dir_dst_list> p_bd_usp_em_ct_dir_dst_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_dir_dst_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_dir_dst_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_ve_ts_ve_list> p_bd_usp_ve_ts_ve_list(string ic_ccod_emp, string ic_ccod_eje, string ic_ccod_per)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                 new SqlParameter("@ic_ccod_emp", ic_ccod_emp),
                                                                 new SqlParameter("@ic_ccod_eje", ic_ccod_eje),
                                                                 new SqlParameter("@ic_ccod_per", ic_ccod_per)
                                                               };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ve_ts_ve_list>(SqlCommand_.ExecuteReaderSQL("usp_ve_ts_ve_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        /* ELIMINAR */
        /*
        public List<E_usp_fa_fa_imp_list> p_bd_usp_fa_fa_imp_list(string ic_ccod_emp, string ic_ccod_eje, string ic_ccod_per)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp),
                                                                    new SqlParameter("@ic_ccod_eje", ic_ccod_eje),
                                                                    new SqlParameter("@ic_ccod_per", ic_ccod_per)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_fa_fa_imp_list>(SqlCommand_.ExecuteReaderSQL("usp_fa_fa_imp_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }
        */

        public List<E_usp_ve_ts_ve_dt_it_list> p_bd_usp_ve_ts_ve_dt_it_list(string ic_ccod_emp, string ic_ccod_uop, string ic_ccod_eje, string ic_ccod_per)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp),
                                                                    new SqlParameter("@ic_ccod_uop", ic_ccod_uop),
                                                                    new SqlParameter("@ic_ccod_eje", ic_ccod_eje),
                                                                    new SqlParameter("@ic_ccod_per", ic_ccod_per)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ve_ts_ve_dt_it_list>(SqlCommand_.ExecuteReaderSQL("usp_ve_ts_ve_dt_it_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_ve_ct_zn_list> p_bd_usp_ve_ct_zn_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ve_ct_zn_list>(SqlCommand_.ExecuteReaderSQL("usp_ve_ct_zn_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_ve_ct_cdp_list> p_bd_usp_ve_ct_cdp_list(string ic_ccod_emp)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ve_ct_cdp_list>(SqlCommand_.ExecuteReaderSQL("usp_ve_ct_cdp_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }


        public List<E_usp_al_it_saldo_list> p_bd_usp_al_it_saldo_list(
                                                                    string ic_ccod_emp,
                                                                    string ic_ccod_eje,
                                                                    string ic_ccod_per,
                                                                    string ic_ccod_uop,

                                                                    string id_dfch,
                                                                    string ic_ccod_mon,
                                                                    string ir_RowData_tpc
                                                                    )
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_emp", ic_ccod_emp),
                                                                    new SqlParameter("@ic_ccod_eje", ic_ccod_eje),
                                                                    new SqlParameter("@ic_ccod_per", ic_ccod_per),
                                                                    new SqlParameter("@ic_ccod_uop", ic_ccod_uop),

                                                                    new SqlParameter("@id_dfch", Convert.ToDateTime(id_dfch)),
                                                                    new SqlParameter("@ic_ccod_mon", ic_ccod_mon),
                                                                    new SqlParameter("@ir_RowData_tpc", ir_RowData_tpc)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_al_it_saldo_list>(SqlCommand_.ExecuteReaderSQL("usp_al_it_saldo_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_ad_ct_usu_dt_emp_list> p_bd_usp_ad_ct_usu_dt_emp_list(string ic_ccod_usu)
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {
                                                                    new SqlParameter("@ic_ccod_usu", ic_ccod_usu)
                                                                };
                return (Mapping_.DataReaderMapToListSQL<E_usp_ad_ct_usu_dt_emp_list>(SqlCommand_.ExecuteReaderSQL("usp_ad_ct_usu_dt_emp_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }

        public List<E_usp_em_ct_emp_dt_uop_list> p_bd_usp_em_ct_emp_dt_uop_list()
        {
            try
            {
                SqlParameter[] Parametros = new SqlParameter[] {};
                return (Mapping_.DataReaderMapToListSQL<E_usp_em_ct_emp_dt_uop_list>(SqlCommand_.ExecuteReaderSQL("usp_em_ct_emp_dt_uop_list", Parametros)));
            }
            catch (Exception Ex)
            {
                throw new Exception(Ex.Message);
            }
        }



























































    }

}
