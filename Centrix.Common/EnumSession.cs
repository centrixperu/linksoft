using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Centrix.Common
{
    public class EnumSession
    {
        public enum Variable
        {
            IdPersonal,
            NombreUsuario,
            ApellidoPaterno,
            ApellidoMaterno,
            MiContexto,
            lstUbigeo,
            NroDocumento,
            IdUsuario,
            CorreoElectronico,
            NumeroCelular1,
            FechaNacimiento,
            Sexo,
            SessionId,
            IdCliente,
            NombreCliente,
            IdTienda,
            Sucursal,
            NombreTienda,
            DireccionTienda,
            NombreTiendaGuia,
            Menu,
            Botones,
            KeyConfig,
            FlagGeneratePreview,
            lstReporteCargaMasiva,
            lstReporte,
            lstReporteVenta,
            lstReporteCodigoBarras,
            lstReporteCierreDiario,
            lstFormularios,
            lstUNSPSC,
            NoticeNotAllowed,
            NoticeTimeToExpiration,
            NoticeDateExpiration,
            NoticeRequestSupport,
            NroGuia,
            ControlValue,
            Image,
            NroNotaVenta,
            returnUrl,
            EmisorRUC,
            EmisorDireccion,
            EmisorUrbanizacion,
            EmisorDistrito,
            EmisorProvincia,
            EmisorDepartamento,
            EmisorUbigeo,
            NombreComprobante,
            MenuMensaje,
            NumeroMensaje,

            ES_usp_Get_ad_usu_men_opt_ln,
            ES_usp_Get_ad_usu_men_opt_ln_Mtz,


            ES_usp_Get_fa_doc_ser_ln,
            ES_usp_Get_fa_doc_ser_ln_Mtz,

            ES_usp_Get_em_tbj_ct,
            ES_usp_Get_em_tbj_ct_Mtz,


            /*
            ES_usp_fa_lp_it_ln_list,
            ES_usp_fa_lp_it_ln_list_Mtz,
            */

            //eso funciona con el lq
            /*
            ES_usp_Get_si_usu_ctl_conf,
            ES_usp_Get_si_usu_ctl_conf_Mtz,
            */

            // Registro


            ES_usp_em_dir_insert,
            ES_usp_em_dir_insert_Mtz,

            //============================================================ MODIFICADOS
            //============================================================ MODIFICADOS
            //============================================================ MODIFICADOS




            ES_usp_ad_mod_men_list,
            ES_usp_ad_mod_men_list_Mtz,

            ES_usp_ad_usu_men_opt_list,
            ES_usp_ad_usu_men_opt_list_Mtz,


            ES_usp_al_it_imp_list,
            ES_usp_al_it_imp_list_Mtz,



            
            /*
            ES_usp_al_it_srv_list,
            ES_usp_al_it_srv_list_Mtz,
            */


            ES_usp_fa_fe_tpa_ct_list,
            ES_usp_fa_fe_tpa_ct_list_Mtz,

            ES_usp_ga_aac_ct_list,
            ES_usp_ga_aac_ct_list_Mtz,

            ES_usp_ga_nac_ct_list,
            ES_usp_ga_nac_ct_list_Mtz,

            ES_usp_ga_per_ct_list,
            ES_usp_ga_per_ct_list_Mtz,

            ES_usp_ga_gac_ct_list,
            ES_usp_ga_gac_ct_list_Mtz,


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


            ES_usp_ve_ct_opve_list,
            ES_usp_ve_ct_opve_list_Mtz,


            ES_usp_fi_ct_doc_list,
            ES_usp_fi_ct_doc_list_Mtz,

            ES_usp_em_ct_mon_list,
            ES_usp_em_ct_mon_list_Mtz,

            ES_usp_al_ct_opal_list,
            ES_usp_al_ct_opal_list_Mtz,

            ES_usp_al_ct_it_list,
            ES_usp_al_ct_it_list_Mtz,

            ES_usp_al_ct_lin_list,
            ES_usp_al_ct_lin_list_Mtz,

            ES_usp_al_ct_slin_list,
            ES_usp_al_ct_slin_list_Mtz,

            ES_usp_al_ct_tip_prod_list,
            ES_usp_al_ct_tip_prod_list_Mtz,

            ES_usp_al_ct_um_list,
            ES_usp_al_ct_um_list_Mtz,

            ES_usp_al_ct_mc_list,
            ES_usp_al_ct_mc_list_Mtz,
            
            ES_usp_co_ct_imp_list,
            ES_usp_co_ct_imp_list_Mtz,

            ES_usp_al_ct_it_dt_um_list,
            ES_usp_al_ct_it_dt_um_list_Mtz,

            ES_usp_em_ct_mdc_list,
            ES_usp_em_ct_mdc_list_Mtz,

            ES_usp_em_ct_prs_list,
            ES_usp_em_ct_prs_list_Mtz,

            ES_usp_em_ct_prs_csf_list,
            ES_usp_em_ct_prs_csf_list_Mtz,

            ES_usp_em_ct_prs_tip_list,
            ES_usp_em_ct_prs_tip_list_Mtz,

            ES_usp_em_ct_prs_tsx_list,
            ES_usp_em_ct_prs_tsx_list_Mtz,

            ES_usp_em_dt_mdc_list,
            ES_usp_em_dt_mdc_list_Mtz,

            ES_usp_em_ct_prs_dt_doc_list,
            ES_usp_em_ct_prs_dt_doc_list_Mtz,

            ES_usp_em_ct_prs_doc_list,
            ES_usp_em_ct_prs_doc_list_Mtz,

            ES_usp_em_ct_dir_det_list,
            ES_usp_em_ct_dir_det_list_Mtz,

            ES_usp_em_ct_dir_tpv_list,
            ES_usp_em_ct_dir_tpv_list_Mtz,

            ES_usp_em_ct_dir_tpz_list,
            ES_usp_em_ct_dir_tpz_list_Mtz,

            ES_usp_em_dt_dir_list,
            ES_usp_em_dt_dir_list_Mtz,

            ES_usp_em_dt_dir_dt_det_list,
            ES_usp_em_dt_dir_dt_det_list_Mtz,

            ES_usp_em_ct_dir_dst_list,
            ES_usp_em_ct_dir_dst_list_Mtz,

            ES_usp_ve_ts_ve_list,
            ES_usp_ve_ts_ve_list_Mtz,

            
            /*
            ES_usp_fa_fa_imp_list,
            ES_usp_fa_fa_imp_list_Mtz,
            */

            ES_usp_ve_ts_ve_dt_it_list,
            ES_usp_ve_ts_ve_dt_it_list_Mtz,


            ES_usp_ve_ct_zn_list,
            ES_usp_ve_ct_zn_list_Mtz,

            ES_usp_ve_ct_cdp_list,
            ES_usp_ve_ct_cdp_list_Mtz,

            ES_usp_al_it_saldo_list,
            ES_usp_al_it_saldo_list_Mtz,

            ES_usp_ad_ct_usu_dt_emp_list,
            ES_usp_ad_ct_usu_dt_emp_list_Mtz,

            ES_usp_em_ct_emp_dt_uop_list,
            ES_usp_em_ct_emp_dt_uop_list_Mtz,
            /*            
            ES_,
            ES__Mtz,

            ES_,
            ES__Mtz,

            ES_,
            ES__Mtz,

            ES_,
            ES__Mtz,

            ES_,
            ES__Mtz,
            
            ES_,
            ES__Mtz,

            ES_,
            ES__Mtz,

            ES_,
            ES__Mtz,

            ES_,
            ES__Mtz,

            ES_,
            ES__Mtz,
            */











        }
    }
}
