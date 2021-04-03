using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Centrix.Entity
{
   
    




    
        



    public class E_Get_em_empuop_ln
    {
        public string ccod_emp { get; set; }
        public string ccod_uop { get; set; }
        public string cest { get; set; }
        public string cdsc_uop { get; set; }
        public string balm_vta { get; set; }
        public string balm_consig_rec { get; set; }
        public string balm_consig_ent { get; set; }
        /*
        public string ccod_dir { get; set; }
        public string em_dir_ln_cest { get; set; }
        public string bpdt { get; set; }
        public string ccod_dirtp { get; set; }
        public string ccod_dirtpu { get; set; }
        public string ccod_dirtpv { get; set; }
        public string cdsc_via { get; set; }
        public string cnum { get; set; }
        public string cnum_dep { get; set; }
        public string cinterior { get; set; }
        public string cnum_pis { get; set; }
        public string cmz { get; set; }
        public string clt { get; set; }
        public string ckm { get; set; }
        public string cblock { get; set; }
        public string cetapa { get; set; }
        public string ccod_dirtpz { get; set; }
        public string cdsc_zon { get; set; }
        public string ccod_ubdst { get; set; }
        public string cdsc_dir { get; set; }
        public string cref { get; set; }
        public string ctel1 { get; set; }
        public string ctel2 { get; set; }
        public string cfax { get; set; }
        public string cema { get; set; }
        public string chor { get; set; }
        public string cobs { get; set; }
        */
    }



    public class E_usp_Get_ad_usu_men_opt_ln
    {
        public string ccod_men { get; set; }
        public string ccod_opt_men { get; set; }
        public string best { get; set; }
    }



    public class E_usp_Get_em_mon_tpc_ln
    {        
        public string ccod_mon { get; set; }
        public string cdsc_mon { get; set; }
        public decimal ntc_c { get; set; }
        public decimal ntc_v { get; set; }
        public string cabr_mon { get; set; }
        public string csim_mon { get; set; }
        public string group_ { get; set; }
    }

    public class E_usp_Get_fa_doc_ser_ln
    {
        public string ccod_doc { get; set; }
        public string ccod_ser { get; set; }
        public string cest { get; set; }
        public string ctipo_ser { get; set; }
        public string ccat_doc { get; set; }
        public string cdsc_ser { get; set; }
        public string cnro_maq_reg { get; set; }
        public string ccod_doc_ser_com { get; set; }
        public string ccorrelativo { get; set; }
        public string ccod_zn { get; set; }
    }

    public class E_usp_Get_em_tbj_ct
    {
        public string ccod_tbj { get; set; }
        public string ccod_prs { get; set; }
        public string cest { get; set; }

        // Persona
        public string cdsc_prs { get; set; }
        
    }
    
    /*
    public class E_usp_fa_lp_it_ln_list
    {
        public string ccod_it { get; set; }
        public string ccod_um { get; set; }
        public string ccod_lp { get; set; }
        public decimal nprecio { get; set; }

        // Lista de Precio
        public string cdsc_lp { get; set; }
        public string ccod_mon { get; set; }
        public string cest { get; set; }

    }
    */

    public class E_usp_Get_al_it_um_saldo
    {
        public decimal nsaldo { get; set; }
    }
    


    public class E_usp_Get_si_usu_ctl_conf
    {
        public string ccod_emp { get; set; }
        public string ccod_usu { get; set; }
        public string cform { get; set; }
        public string cctrl { get; set; }
        public int nord { get; set; }
        public string ccmp { get; set; }
        public string cdsc { get; set; }
        public string bvs { get; set; }
        public string bft { get; set; }
        public string cft_group_cdsc { get; set; }
        public string bft_pred { get; set; }
        public string cali { get; set; }
        public string bgroup { get; set; }
        public string corderby { get; set; }
        public string cfunction { get; set; }
        public string csys { get; set; }
        public string ctitle { get; set; }
    }

    // ================================================================================================================================================
    // Registro
    // ================================================================================================================================================


    //============================================================ MODIFICADOS
    //============================================================ MODIFICADOS
    //============================================================ MODIFICADOS






    public class E_usp_em_dir_delete
    {
        public int on_codResult { get; set; }
        public string oc_msjResult { get; set; }
    }

    //=================================================================================== new de news



    public class E_usp_ad_mod_men_list
    {
        public string ccod_emp { get; set; }
        public string ccod_mod { get; set; }
        public int ccod_men { get; set; }
        public int nnivel { get; set; }
        public int norden { get; set; }
        public int ccod_men_rel { get; set; }
        public string cdsc_men { get; set; }
        public string clink { get; set; }
        public string corigen { get; set; }
        public string cicon { get; set; }
        public string cdsc_frm { get; set; }
        public string ctip_frm { get; set; }
        public string cstyle_frm { get; set; }
    }

    public class E_usp_ad_usu_men_opt_list
    {
        public int ccod_men { get; set; }
        public int ccod_opt_men { get; set; }
    }

    public class E_usp_al_it_imp_list
    {
        // al_it_imp
        public string ccod_it { get; set; }
        public string ccod_imp { get; set; }

        // em_imp_ct
        public string cest { get; set; }
        public string cdsc_imp { get; set; }
        public string cabr_imp { get; set; }
        public decimal ntasa_imp { get; set; }
    }

    public class E_usp_fa_fa_anular
    {
        public int on_codResult { get; set; }
        public string oc_msjResult { get; set; }
    }
    /*
    public class E_usp_al_it_srv_list
    {
        public string ccod_lin { get; set; }
        public string cdsc_lin { get; set; }
        public string ccod_slin { get; set; }
        public string cdsc_slin { get; set; }
        public string ccod_it { get; set; }
        public string cdsc_it { get; set; }
        public decimal nprecio { get; set; }
        public string csim_mon__nprecio { get; set; }        
        public string ccod_um { get; set; }
        public string cdsc_um { get; set; }
        public string cabr_um { get; set; }
        public string ccod_lp { get; set; }
        public string cdsc_lp { get; set; }
        public string ccod_mon { get; set; }
        public string cdsc_mon { get; set; }
        public string cabr_mon { get; set; }
        public string csim_mon { get; set; }
    }
    */

    public class E_usp_fa_fe_tpa_ct_list
    {
        public int id_fe_tpa_ct { get; set; }
        public string ccod_tpa { get; set; }
        public string cest { get; set; }
        public string cdsc_tpa { get; set; }
    }

    public class E_usp_exec_sp
    {
        public int on_codResult { get; set; }
        public string oc_msjResult { get; set; }
        public string or_dataResult { get; set; }
    }

    public class E_usp_ga_aac_ct_list
    {
        public int id_aac_ct { get; set; }
        public string ccod_aac { get; set; }
        public int cest { get; set; }
        public int naac { get; set; }
        public int naac_cl { get; set; }
        public string cdsc_aac { get; set; }
        public string dfini { get; set; }
        public string dffin { get; set; }
        public string cagrupador { get; set; }
    }

    public class E_usp_ga_nac_ct_list
    {
        public int id_nac_ct { get; set; }
        public string ccod_aac { get; set; }
        public string cdsc_aac { get; set; }
        public string ccod_nac { get; set; }
        public int cest { get; set; }        
        public string cdsc_nac { get; set; }
        public string ccar_nac { get; set; }
        public string cagrupador { get; set; }
    }

    public class E_usp_ga_per_ct_list
    {
        public int id_per_ct { get; set; }
        public string ccod_aac { get; set; }
        public string cdsc_aac { get; set; }
        public string ccod_nac { get; set; }
        public string cdsc_nac { get; set; }
        public string ccod_per { get; set; }
        public int cest { get; set; }
        public string cdsc_per { get; set; }
        public string dfini { get; set; }
        public string dffin { get; set; }
        public string cagrupador { get; set; }
    }

    public class E_usp_ga_gac_ct_list
    {
        public int id_gac_ct { get; set; }
        public string ccod_aac { get; set; }
        public string cdsc_aac { get; set; }
        public string ccod_nac { get; set; }
        public string cdsc_nac { get; set; }
        public string ccod_gac { get; set; }
        public int cest { get; set; }
        public string cdsc_gac { get; set; }
        public string cagrupador { get; set; }
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

    public class E_usp_ve_ct_opve_list
    {
        public int id_ct_opve { get; set; }
        public string ccod_opve { get; set; }
        public string cest { get; set; }
        public string cdsc_opve { get; set; }
        public string ccod_doc { get; set; }
        public string cdsc_doc { get; set; }
        public int bafecto_igv { get; set; }

        // Moneda
        public string ccod_mon { get; set; }
        public string bnac { get; set; }
        public string cdsc_mon { get; set; }
        public string cabr_mon { get; set; }
        public string csim_mon { get; set; }
        public string cest_mon { get; set; }

        public string ccod_opal_sal { get; set; }
        public string cdsc_opal_sal { get; set; }
        public string ccod_opal_anu { get; set; }
        public string cdsc_opal_anu { get; set; }
        public string ccod_opve_nc { get; set; }
        public string cdsc_opve_nc { get; set; }
        public string cagrupador { get; set; }
    }


    public class E_usp_fi_ct_doc_list
    {
        public int id_ct_doc { get; set; }
        public string ccod_doc { get; set; }
        public string cest { get; set; }
        public string cdsc_doc { get; set; }
        public string cdsc_abr { get; set; }
        public string ccat_doc { get; set; }
        public string ccod_sunat { get; set; }
        public string cagrupador { get; set; }
    }

    public class E_usp_em_ct_mon_list
    {
        public int id_ct_mon { get; set; }
        public string ccod_mon { get; set; }
        public string cest { get; set; }
        public int bnac { get; set; }
        public string cdsc_mon { get; set; }
        public string cabr_mon { get; set; }
        public string csim_mon { get; set; }
        public string cagrupador { get; set; }
    }

    public class E_usp_al_ct_opal_list
    {
        public int id_ct_opal { get; set; }
        public string ccod_opal { get; set; }
        public string cest { get; set; }
        public string cdsc_opal { get; set; }
        public string cagrupador { get; set; }
    }


    public class E_usp_al_ct_it_list
    {
        public int id_ct_it { get; set; }
        public string ccod_it { get; set; }
        public string cest { get; set; }
        public string ctipo_it { get; set; }
        public string ccod_tip_prod { get; set; }
        public string cdsc_tip_prod { get; set; }
        public string ccod_lin { get; set; }
        public string cdsc_lin { get; set; }
        public string ccod_slin { get; set; }
        public string cdsc_slin { get; set; }
        public string cident_1 { get; set; }
        public string cident_2 { get; set; }
        public string cident_3 { get; set; }
        public string cdsc_it { get; set; }
        public string cdsc_it_lga { get; set; }
        public string tobs { get; set; }
        public string ccod_um { get; set; }
        public string cdsc_um { get; set; }
        public string ccod_um_al { get; set; }
        public string cdsc_um_al { get; set; }
        public string ccod_um_co { get; set; }
        public string cdsc_um_co { get; set; }
        public string ccod_um_ve { get; set; }
        public string cdsc_um_ve { get; set; }
        public string ccod_sunat { get; set; }
        public string ccod_mc { get; set; }
        public string cdsc_mc { get; set; }
        public string cmodelo { get; set; }
        public string ccolor { get; set; }
        public string cpeso { get; set; }
        public string cvolumen { get; set; }
        public string cgarantia { get; set; }
        public int bserie { get; set; }
        public int blote { get; set; }
        public string cstock_min { get; set; }
        public string cstock_max { get; set; }

        public int bexonerado { get; set; }

        public int bigv { get; set; }
        public string ccod_imp_igv { get; set; }
        public string cdsc_imp_igv { get; set; }
        public decimal ntasa_imp_igv { get; set; }

        public int bisc { get; set; }
        public string ccod_imp_isc { get; set; }
        public string cdsc_imp_isc { get; set; }
        public decimal ntasa_imp_isc { get; set; }
        
        public int bper { get; set; }
        public string ccod_imp_per { get; set; }
        public string cdsc_imp_per { get; set; }
        public decimal ntasa_imp_per { get; set; }
        public string cagrupador { get; set; }
    }

    public class E_usp_al_ct_lin_list
    {
        public int id_ct_lin { get; set; }
        public string ccod_lin { get; set; }
        public string cest { get; set; }
        public string cdsc_lin { get; set; }
        public string ctipo_lin { get; set; }
    }

    public class E_usp_al_ct_slin_list
    {
        public int id_ct_slin { get; set; }
        public string ccod_lin { get; set; }
        public string ccod_slin { get; set; }
        public string cest { get; set; }
        public string cdsc_slin { get; set; }
    }

    public class E_usp_al_ct_tip_prod_list
    {
        public int id_ct_tip_prod { get; set; }
        public string ccod_tip_prod { get; set; }
        public string cest { get; set; }
        public string cdsc_tip_prod { get; set; }
    }

    public class E_usp_al_ct_um_list
    {
        public int id_ct_um { get; set; }
        public string ccod_um { get; set; }
        public string cest { get; set; }
        public string ctipo_um { get; set; }
        public string cdsc_um { get; set; }
        public string cabr_um { get; set; }
        public string ccod_sunat { get; set; }
    }


    public class E_usp_al_ct_mc_list
    {
        public int id_ct_mc { get; set; }
        public string ccod_mc { get; set; }
        public string cest { get; set; }
        public string cdsc_mc { get; set; }
    }


    public class E_usp_co_ct_imp_list
    {
        public int id_ct_imp { get; set; }
        public string ccod_imp { get; set; }
        public string cest { get; set; }
        public string cdsc_imp { get; set; }
        public string cabr_imp { get; set; }
        public decimal ntasa_imp { get; set; }
    }

    public class E_usp_al_ct_it_dt_um_list
    {
        public int id_ct_it_dt_um { get; set; }
        public string ccod_it { get; set; }
        public int nid_um { get; set; }
        public string ccod_um { get; set; }
        public string cdsc_um { get; set; }
        public string cabr_um { get; set; }
        public decimal ncant_eq { get; set; }
        public string ccod_um_eq { get; set; }
    }

    public class E_usp_em_ct_mdc_list
    {
        public int id_ct_mdc { get; set; }
        public string ccod_mdc { get; set; }
        public string cest { get; set; }
        public string cdsc_mdc { get; set; }
        public string cabr_mdc { get; set; }
    }

    public class E_usp_em_ct_prs_list
    {
        public int id_ct_prs { get; set; }
        public string ccod_prs { get; set; }
        public string cest { get; set; }
        public string ccod_prs_csf { get; set; }
        public string cdsc_prs_csf { get; set; }
        public string ccod_prs_tip { get; set; }
        public string cdsc_prs_tip { get; set; }
        public string cdsc_prs { get; set; }
        public string cape_pat { get; set; }
        public string cape_mat { get; set; }
        public string cape_cas { get; set; }
        public string cnom { get; set; }
        public string ccod_tsx { get; set; }
        public string cdsc_tsx { get; set; }
        public string dfch_nac { get; set; }
        public string cobs { get; set; }
        public string cnom_comercial { get; set; }
        public string cdsc_dir { get; set; }
        public string cagrupador { get; set; }
    }

    public class E_usp_em_ct_prs_csf_list
    {
        public int id_ct_prs_csf { get; set; }
        public string ccod_prs_csf { get; set; }
        public string cest { get; set; }
        public string cdsc_prs_csf { get; set; }
    }


    public class E_usp_em_ct_prs_tip_list
    {
        public int id_ct_prs_tip { get; set; }
        public string ccod_prs_tip { get; set; }
        public string cest { get; set; }
        public string cdsc_prs_tip { get; set; }
        public string cprs_tip { get; set; }
    }


    public class E_usp_em_ct_prs_tsx_list
    {
        public decimal id_ct_prs_tsx { get; set; }
        public string ccod_tsx { get; set; }
        public string cest { get; set; }
        public string cdsc_tsx { get; set; }
    }

    public class E_usp_em_dt_mdc_list
    {
        public int id_dt_mdc { get; set; }
        public string ccodigo { get; set; }
        public string nid_mdc { get; set; }
        public string ccod_mdc { get; set; }
        public string cdsc_mdc { get; set; }
        public string bpdt { get; set; }
        public string cdsc { get; set; }
    }

    public class E_usp_em_ct_prs_dt_doc_list
    {
        public int id_ct_prs_dt_doc { get; set; }
        public string ccod_prs { get; set; }
        public string ccod_prs_doc { get; set; }
        public string cdsc_prs_doc { get; set; }
        public string cabr_prs_doc { get; set; }
        public string cest { get; set; }
        public string bpdt { get; set; }
        public string cnum_doc { get; set; }
    }


    public class E_usp_em_ct_prs_doc_list
    {
        public int id_ct_prs_doc { get; set; }
        public string ccod_prs_doc { get; set; }
        public string cest { get; set; }
        public string cdsc_prs_doc { get; set; }
        public string cabr_prs_doc { get; set; }
        public string cprs_tip { get; set; }
    }

    public class E_usp_em_ct_dir_det_list
    {
        public int id_ct_dir_det { get; set; }
        public string ccod_dir_det { get; set; }
        public string cest { get; set; }
        public string cdsc_dir_det { get; set; }
        public string cabr_dir_det { get; set; }
    }


    public class E_usp_em_ct_dir_tpv_list
    {
        public int id_ct_dir_tpv { get; set; }
        public string ccod_dir_tpv { get; set; }
        public string cest { get; set; }
        public string cdsc_dir_tpv { get; set; }
        public string cabr_dir_tpv { get; set; }
    }

    public class E_usp_em_ct_dir_tpz_list
    {
        public int id_ct_dir_tpz { get; set; }
        public string ccod_dir_tpz { get; set; }
        public string cest { get; set; }
        public string cdsc_dir_tpz { get; set; }
        public string cabr_dir_tpz { get; set; }
    }

    public class E_usp_em_dt_dir_list
    {
        public int id_dt_dir { get; set; }
        public string ccodigo { get; set; }
        public int ccod_dir { get; set; }
        public string cest { get; set; }
        public string bpdt { get; set; }
        public string cdsc_dir { get; set; }
        public string ccod_dir_tpv { get; set; }
        public string cdsc_via { get; set; }
        public string cnum { get; set; }
        public string ccod_dir_tpz { get; set; }
        public string cdsc_zon { get; set; }
        public string ccod_dir_dst { get; set; }
        public string cref { get; set; }
        public string cobs { get; set; }

        // em_dirtpv_ct
        public string cdsc_dir_tpv { get; set; }
        public string cabr_dir_tpv { get; set; }

        // em_dirtpz_ct
        public string cdsc_dir_tpz { get; set; }
        public string cabr_dir_tpz { get; set; }

        // Ubigeo
        public string cdsc_dir_dst { get; set; }
        public string cdsc_dir_prv { get; set; }
        public string cdsc_dir_dpt { get; set; }

        public string cagrupador { get; set; }
    }

    public class E_usp_em_dt_dir_dt_det_list
    {
        public int id_dt_dir_dt_det { get; set; }
        public string ccodigo { get; set; }
        public int ccod_dir { get; set; }
        public int ccod_dir_det { get; set; }
        public string cdsc_dir_det { get; set; }
    }


    public class E_usp_em_ct_dir_dst_list
    {
        public int id_ct_dir_dst { get; set; }
        public string ccod_dir_dst { get; set; }
        public string ccod_dir_pai { get; set; }
        public string ccod_dir_dpt { get; set; }
        public string ccod_dir_prv { get; set; }
        public string cest { get; set; }
        public string cdsc_dir_dst { get; set; }
        public string ccod_ubigeo_dir_dst { get; set; }
        // em_dir_prv_ct
        public string cdsc_dir_prv { get; set; }
        public string group_cdsc_dir_prv { get; set; }
        // em_dir_dpt_ct
        public string cdsc_dir_dpt { get; set; }
    }

    public class E_usp_ve_ts_ve_list
    {
        public int id_ts_ve { get; set; }
        public int ccod_ve { get; set; }
        public string dfch_emi { get; set; }
        public string dfch_venc { get; set; }
        public string ccod_uop { get; set; }
        public string cdsc_uop { get; set; }
        public string ccod_eje { get; set; }
        public string ccod_per { get; set; }
        public string ccod_doc { get; set; }
        public string ccod_ser { get; set; }
        public string cdoc_nro { get; set; }
        public string ctipo_doc { get; set; }
        public string ctipo_doc_dsc { get; set; }
        public string ccod_alm { get; set; }
        public string cdsc_alm { get; set; }
        public string ccod_prs { get; set; }
        public string cdsc_prs { get; set; }
        public string ccod_dir { get; set; }
        public string cdsc_dir { get; set; }
        public string ccod_opve { get; set; }
        public string cdsc_opve { get; set; }
        public string ccod_cdp { get; set; }
        public string cdsc_cdp { get; set; }
        public string ctipo_cdp { get; set; }
        public string ctipo_cdp_dsc { get; set; }
        public string ccod_mon { get; set; }
        public string cdsc_mon { get; set; }
        public string csim_mon { get; set; }
        public string ccod_zn { get; set; }
        public string cdsc_zn { get; set; }
        public string ccod_tbj_ven { get; set; }
        public string cdsc_tbj_ven { get; set; }
        public string ccod_tbj_cob { get; set; }
        public string cdsc_tbj_cob { get; set; }
        public string cglosa { get; set; }

        // tt
        public decimal ncam { get; set; }
        public decimal nimp_stv { get; set; }
        public decimal nimp_dsc { get; set; }
        public decimal nimp_vvt { get; set; }
        public decimal nimp_isc { get; set; }
        public decimal nimp_op_gr { get; set; }
        public decimal nimp_op_in { get; set; }
        public decimal nimp_op_ex { get; set; }
        public decimal nimp_igv { get; set; }
        public decimal nimp_icbper { get; set; }
        public decimal nimp_ot_ca { get; set; }
        public decimal nimp_ot_tr { get; set; }
        public decimal nimp_ant { get; set; }
        public decimal nimp_st { get; set; }
        public decimal nimp_per { get; set; }
        public decimal nimp_ret { get; set; }
        public decimal nimp_n_ms { get; set; }
        public decimal nimp_i_ms { get; set; }
        public decimal nimp_t { get; set; }

        // Estados
        public string ccod_est { get; set; }
        public string cdsc_est { get; set; }
        public string ccod_est_sn { get; set; }
        public string cdsc_est_sn { get; set; }
    }

    /*
    public class E_usp_fa_fa_imp_list
    {
        public int ccod_ve { get; set; }
        public string ccod_doc { get; set; }
        public string ccod_ser { get; set; }
        public string cdoc_nro { get; set; }
        public string ccod_it { get; set; }
        public int nid_it { get; set; }
        public string ccod_imp { get; set; }
        public string ccod_mon { get; set; }
        public string cdsc_imp { get; set; }
        public decimal ncam { get; set; }
        public string cdsc_mon { get; set; }
        public string cabr_mon { get; set; }
        public string csim_mon { get; set; }
        public int nid_imp { get; set; }
        public decimal ntasa_imp { get; set; }
        public decimal nimp_imp { get; set; }
        public string ctip { get; set; }
    }
    */


    public class E_usp_ve_ts_ve_dt_it_list
    {
        public int id_ts_ve_dt_it { get; set; }
        public int ccod_ve { get; set; }
        public decimal nid_it { get; set; }
        public string ctipo_it { get; set; }
        public string ctipo_it_dsc { get; set; }
        public string ccod_it { get; set; }
        public string cdsc_it { get; set; }
        public decimal ncant { get; set; }
        public string ccod_um { get; set; }
        public string cdsc_um { get; set; }
        public string cabr_um { get; set; }
        public string ccod_lp { get; set; }
        public string cdsc_lp { get; set; }
        public string cglosa { get; set; }

        // Totales
        public string ccod_mon_lt { get; set; }
        public decimal ncam { get; set; }
        public decimal nimp_lp_u { get; set; }
        public decimal nimp_vp_u { get; set; }
        public decimal nimp_pf_u { get; set; }
        public decimal nimp_isc_u { get; set; }
        public decimal nimp_isc_t { get; set; }
        public decimal nimp_igv_u { get; set; }
        public decimal nimp_igv_t { get; set; }
        public decimal nimp_t_sigv { get; set; }
        public decimal nimp_t_cigv { get; set; }
        public decimal nimp_in_u { get; set; }
        public decimal nimp_in_t { get; set; }
        public decimal nimp_ex_u { get; set; }
        public decimal nimp_ex_t { get; set; }
        public decimal nimp_per_u { get; set; }
        public decimal nimp_per_t { get; set; }
        public decimal nimp_u_ms { get; set; }
        public decimal nimp_n_ms { get; set; }
        public decimal nimp_d_ms { get; set; }
        public decimal nimp_i_ms { get; set; }
        public decimal nimp_t_ms { get; set; }

        // Moneda
        public string bnac { get; set; }
        public string cdsc_mon { get; set; }
        public string cabr_mon { get; set; }
        public string csim_mon { get; set; }
    }
    public class E_usp_ve_ct_zn_list
    {
        public int id_ct_zn { get; set; }
        public string ccod_zn { get; set; }
        public string cest { get; set; }
        public string cdsc_zn { get; set; }
    }

    public class E_usp_ve_ct_cdp_list
    {
        public int id_ct_cdp { get; set; }
        public string ccod_cdp { get; set; }
        public string cest { get; set; }
        public string cdsc_cdp { get; set; }
        public string ctipo_cdp { get; set; }
        public decimal ndias_vcto { get; set; }
        public decimal ndias_plazo { get; set; }
    }



    public class E_usp_al_it_saldo_list
    {
        public string ctipo_it { get; set; }
        public string ccod_lin { get; set; }
        public string cdsc_lin { get; set; }
        public string ccod_slin { get; set; }
        public string cdsc_slin { get; set; }
        public string ccod_it { get; set; }
        public string cdsc_it { get; set; }
        
        public string ccod_lp { get; set; }
        public string cdsc_lp { get; set; }
        public int bpdt_lp { get; set; }

        public string ccod_mon_lp { get; set; }
        public string cdsc_mon_lp { get; set; }
        public int bnac_lp { get; set; }
        public string cabr_mon_lp { get; set; }
        public string csim_mon_lp { get; set; }
        public decimal nprecio_lp { get; set; }
        public string csim_mon__nprecio_lp { get; set; }        

        public string ccod_mon { get; set; }
        public string cdsc_mon { get; set; }
        public int bnac { get; set; }
        public string cabr_mon { get; set; }
        public string csim_mon { get; set; }
        public decimal nprecio { get; set; }
        public string csim_mon__nprecio { get; set; }

        public decimal nsaldo { get; set; }
        public string ccod_um { get; set; }
        public string cdsc_um { get; set; }
        public string cabr_um { get; set; }
        public int bum_ve { get; set; }

        public int bexonerado { get; set; }
        public int bigv { get; set; }
        public string ccod_imp_igv { get; set; }
        public string cdsc_imp_igv { get; set; }
        public string cabr_imp_igv { get; set; }
        public decimal ntasa_imp_igv { get; set; }

        public int bisc { get; set; }
        public string ccod_imp_isc { get; set; }
        public string cdsc_imp_isc { get; set; }
        public string cabr_imp_isc { get; set; }
        public decimal ntasa_imp_isc { get; set; }

        public int bper { get; set; }
        public string ccod_imp_per { get; set; }
        public string cdsc_imp_per { get; set; }
        public string cabr_imp_per { get; set; }
        public decimal ntasa_imp_per { get; set; }

        public int nfila { get; set; }
        public int bvisible { get; set; }
    }

    public class E_usp_ad_ct_usu_dt_emp_list
    {
        public int id_ct_usu_dt_emp { get; set; }
        public string cest { get; set; }
        public string ccod_emp { get; set; }
        public string ccod_prs { get; set; }
        public string cdsc_prs { get; set; }
    }

    public class E_usp_em_ct_emp_dt_uop_list
    {
        public int id_ct_emp_dt_uop { get; set; }
        public string ccod_emp { get; set; }
        public string ccod_uop { get; set; }
        public string cest { get; set; }
        public string cdsc_uop { get; set; }
    }









































}