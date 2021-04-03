/* :::::::::::::::::::::::::	Variables de Formulario	   ::::::::::::::::::::::::: */
var fc_em_dir__em_prs__ccodigo = '';
var fn_ccod_dir = 0;



/* ...::: Arrays :::... */
var da_fa_fa_tt = []; // Totales del documento por tipos de moneda
var fa_fa_fa_imp = []; // Totales de Impuestos del Documento por tipos de moneda

var fa_fa_fa_it_imp = []; // da_fa_fa_it_imp_ln_ITEM // Impuestos de los items por tipos de moneda
var fa_fa_fa_it_imp_tmp = []; // da_fa_fa_it_imp_ln_ITEM // Impuestos de los items por tipos de moneda - Mientras se va agregando el it


//var da_fa_fa_cb_imp_tt = [];

var da_fa_fa_ln = [];


//var da_fa_fa_imp_cb_tt = [];
var da_fa_fa_it_imp_ln = [];


//var da_em_dir_ln = [];






/* ...::: It :::... */
// Vw
var lc_it_nid_it = 0;
var fc_it_ccod_it = '';
var lc_it_cdsc_it = '';
var fn_it_ncant = 0;
var lc_it_cabr_um = '';
var fn_it_nimp_u = 0;
var fn_it_nimp_t = 0;
// it
var lc_it_ctipo_it = '';
var lc_it_ctipo_it_dsc = '';
var lc_it_ccod_um = '';
var lc_it_ccod_lp = '';
var lc_it_cglosa = '';
// tt
var ln_it_ncam = 0;
var fn_it_nimp_n = 0;
var fn_it_nimp_d = 0;
var fn_it_nimp_i = 0;

var ln_it_nsaldo = 0;
var lc_it_nsaldo_ccod_um = '';



/*************	Variables de Formulario *************/
var cc_span_pendiente = '<span class="label label-warning">Pendiente</span>';
var cc_span_rechazado = '<span class="label label-danger">Rechazado</span>';



/*************	Variables de Registro *************/
var cc_ccod_mon_cb = '';
var cn_ccod_mon_cb_tpc = 0;



function f_s_um_change() {
	// Parametros it
	lc_it_ccod_um = $('#s_um').val();

	// Obtener saldo
	var la_columns = ['nsaldo'];
	// var lc_url = '@Url.Action("slq_usp_Get_al_it_um_saldo", "Home")?p_ccod_emp=' + cc_ccod_emp + '&p_ccod_eje=' + cc_ccod_eje + '&p_ccod_per=' + cc_ccod_per + '&p_ccod_uop=' + cc_ccod_uop + '&p_ccod_it=' + fc_it_ccod_it + '&p_ccod_um=' + lc_it_ccod_um;
	var lc_url = '/home/slq_usp_Get_al_it_um_saldo?p_ccod_emp=' + cc_ccod_emp + '&p_ccod_eje=' + cc_ccod_eje + '&p_ccod_per=' + cc_ccod_per + '&p_ccod_uop=' + cc_ccod_uop + '&p_ccod_it=' + fc_it_ccod_it + '&p_ccod_um=' + lc_it_ccod_um;
	var ln_nsaldo = f_a_data(f_eject_ajax(lc_url, la_columns), la_columns);
	$("#i_it_nsaldo").val(fnc_formatear_numero(ln_nsaldo, EntFact_cant_dig));

	// Listas de Precios
	// f_load_select_ajax('s_lp', 'ccod_lp', 'cdsc_lp', '@Url.Action("JR_usp_Get_fa_lp_it_ln_cc", "Home")?p_action=&p_ccod_emp=' + cc_ccod_emp + '&p_cest=' + cc_cest_A + '&p_ccod_it=' + fc_it_ccod_it + '&p_ccod_um=' + lc_it_ccod_um + '&p_ccod_lp=', true, '');
	f_load_select_ajax('s_lp', 'ccod_lp', 'cdsc_lp', '/home/JR_usp_Get_fa_lp_it_ln_cc?p_action=&p_ccod_emp=' + cc_ccod_emp + '&p_cest=' + cc_cest_A + '&p_ccod_it=' + fc_it_ccod_it + '&p_ccod_um=' + lc_it_ccod_um + '&p_ccod_lp=', true, '');
};

function f_s_lp_change() {

	// Parametros it
	lc_it_ccod_lp = $('#s_lp').val();

	// Obtener importe desde 'Lista de Precio'
	var la_columns = ['nprecio'];
	// var lc_url = '@Url.Action("JR_usp_Get_fa_lp_it_ln_cc", "Home")?p_action=&p_ccod_emp=' + cc_ccod_emp + '&p_cest=' + cc_cest_A + '&p_ccod_it=' + fc_it_ccod_it + '&p_ccod_um=' + lc_it_ccod_um + '&p_ccod_lp=' + lc_it_ccod_lp;
	var lc_url = '/home/JR_usp_Get_fa_lp_it_ln_cc?p_action=&p_ccod_emp=' + cc_ccod_emp + '&p_cest=' + cc_cest_A + '&p_ccod_it=' + fc_it_ccod_it + '&p_ccod_um=' + lc_it_ccod_um + '&p_ccod_lp=' + lc_it_ccod_lp;
	var ln_nprecio = f_a_data(f_eject_ajax(lc_url, la_columns), la_columns);

	if (ln_nprecio === '') {
		f_msj('¡No existe lista(s) de precio definida para el item!','','e','bottomLeft','');
		$('#i_it_nimp_u').val('');
	}
	else {
		if (cc_ccod_mon_cb !== cc_ccod_mon_nac) {ln_nprecio = ln_nprecio / cn_ccod_mon_cb_tpc;}
		$('#i_it_nimp_u').val(fnc_formatear_numero(ln_nprecio, EntFact_cant_dig));
	}

	f_mdl_grid_it_calcular_importes();
};


// ======================================================================================================================================
// =============================================================== Transacciones ========================================================
// ======================================================================================================================================
function fnc_nuevo_child() {

	$("#d_cest").html(cc_span_pendiente);
	$("#d_cest_sn").html(cc_span_pendiente);

	$('#i_nimp_n').val('0.00');
	$('#i_nimp_d').val('0.00');
	$('#i_nimp_i').val('0.00');
	$('#i_nimp_t').val('0.00');
	
};

function fnc_form_objs_valores_predeterminados_child() {

	fc_em_dir__em_prs__ccodigo = '';
	fn_ccod_dir = 0;

    $("#i_dfch_emi").val(cd_dfch_main);
    $("#i_dfch_venc").val(cd_dfch_main);

	$("#i_ccod_eje").val(cc_ccod_eje);
	$("#i_ccod_per").val(cc_ccod_per);
	
	$('#s_opfa').val('FVES').trigger('change');
	$('#s_uop').val(cc_ccod_uop).trigger('change');
	
};


function fnc_form_objs_verificar_requeridos_child() {
	return fnc_form_objs_verificar_requeridos('form_main');
};


function fnc_registrar_child() {

	// :::::::::::::: fa_tt - Inicio ::::::::::::::
	var pl_RowData_fa_tt = '';
	for (var i = 0; i < da_fa_fa_tt.length; i++) {
		pl_RowData_fa_tt += da_fa_fa_tt[i].ccod_mon + pl_sep_col;
		pl_RowData_fa_tt += da_fa_fa_tt[i].ncam + pl_sep_col;
		pl_RowData_fa_tt += da_fa_fa_tt[i].nimp_n + pl_sep_col;
		pl_RowData_fa_tt += da_fa_fa_tt[i].nimp_i + pl_sep_col;
		pl_RowData_fa_tt += da_fa_fa_tt[i].nimp_d + pl_sep_col;		
		pl_RowData_fa_tt += da_fa_fa_tt[i].nimp_t + pl_sep_fil;
	}
	// :::::::::::::: fa_tt - fin ::::::::::::::
	
	// ::::::::::::: fa_fa_imp_tt - Inicio :::::::::::::
	var pl_RowData_fa_imp = '';
	for (var i = 0; i < fa_fa_fa_imp.length; i++) {
		pl_RowData_fa_imp += fa_fa_fa_imp[i].ccod_imp + pl_sep_col;
		pl_RowData_fa_imp += fa_fa_fa_imp[i].ccod_mon + pl_sep_col;
		pl_RowData_fa_imp += fa_fa_fa_imp[i].ncam + pl_sep_col;
		pl_RowData_fa_imp += fa_fa_fa_imp[i].nid_imp + pl_sep_col;
		pl_RowData_fa_imp += fa_fa_fa_imp[i].ntasa_imp + pl_sep_col;
		pl_RowData_fa_imp += fnc_obtener_numero(fa_fa_fa_imp[i].nimp_imp) + pl_sep_fil; // VALIDAR
	}
	// ::::::::::::: fa_fa_imp_tt - Fin :::::::::::::

	// :::::::::::::: fa_it - Inicio ::::::::::::::
	var pl_RowData_fa_it = '';
	// Filtramos items por Tipo de Moneda
	var da_fa_fa_it_x_ccod_mon = da_fa_fa_ln.filter(function (row) {return row.ccod_mon_lt === cc_ccod_mon_cb;});
	for (var i = 0; i < da_fa_fa_it_x_ccod_mon.length; i++) {
		pl_RowData_fa_it += da_fa_fa_it_x_ccod_mon[i].ccod_it + pl_sep_col;
		pl_RowData_fa_it += da_fa_fa_it_x_ccod_mon[i].nid_it + pl_sep_col;
		pl_RowData_fa_it += da_fa_fa_it_x_ccod_mon[i].ctipo_it + pl_sep_col;
		pl_RowData_fa_it += da_fa_fa_it_x_ccod_mon[i].cdsc_it + pl_sep_col;
		pl_RowData_fa_it += '' + pl_sep_col;
		pl_RowData_fa_it += '' + pl_sep_col;
		pl_RowData_fa_it += da_fa_fa_it_x_ccod_mon[i].ccod_um + pl_sep_col;
		pl_RowData_fa_it += da_fa_fa_it_x_ccod_mon[i].cabr_um + pl_sep_col;
		pl_RowData_fa_it += da_fa_fa_it_x_ccod_mon[i].ncant + pl_sep_col;
		pl_RowData_fa_it += da_fa_fa_it_x_ccod_mon[i].ccod_lp + pl_sep_col;
		pl_RowData_fa_it += da_fa_fa_it_x_ccod_mon[i].cglosa + pl_sep_fil;
	}	
	// :::::::::::::: fa_it - fin ::::::::::::::
	
	// :::::::::::::: fa_it_tt - Inicio ::::::::::::::
	var pl_RowData_fa_it_tt = '';
	for (var i = 0; i < da_fa_fa_ln.length; i++) {
		pl_RowData_fa_it_tt += da_fa_fa_ln[i].ccod_it + pl_sep_col;
		pl_RowData_fa_it_tt += da_fa_fa_ln[i].nid_it + pl_sep_col;
		pl_RowData_fa_it_tt += da_fa_fa_ln[i].ccod_mon_lt + pl_sep_col;
		pl_RowData_fa_it_tt += da_fa_fa_ln[i].ncam + pl_sep_col;
		pl_RowData_fa_it_tt += da_fa_fa_ln[i].nimp_u + pl_sep_col;
		pl_RowData_fa_it_tt += da_fa_fa_ln[i].nimp_n + pl_sep_col;
		pl_RowData_fa_it_tt += da_fa_fa_ln[i].nimp_i + pl_sep_col;
		pl_RowData_fa_it_tt += da_fa_fa_ln[i].nimp_d + pl_sep_col;
		pl_RowData_fa_it_tt += da_fa_fa_ln[i].nimp_t + pl_sep_fil;		
		//pl_nimp_n = pl_nimp_n + parseFloat(da_fa_fa_it_x_ccod_mon[i].nimp_n);
		//fn_it_nimp_u = fnc_obtener_numero($('#i_it_nimp_u').val());
	}
	// :::::::::::::: fa_it_tt - fin ::::::::::::::
	
	// ::::::::::::: fa_fa_it_imp_tt - Inicio :::::::::::::
	var pl_RowData_fa_it_imp = '';
	for (var i = 0; i < fa_fa_fa_it_imp.length; i++) {	
		pl_RowData_fa_it_imp += fa_fa_fa_it_imp[i].ccod_it + pl_sep_col;
		pl_RowData_fa_it_imp += fa_fa_fa_it_imp[i].nid_it + pl_sep_col;
		pl_RowData_fa_it_imp += fa_fa_fa_it_imp[i].ccod_imp + pl_sep_col;
		pl_RowData_fa_it_imp += fa_fa_fa_it_imp[i].ccod_mon + pl_sep_col;
		pl_RowData_fa_it_imp += fa_fa_fa_it_imp[i].ncam + pl_sep_col;
		pl_RowData_fa_it_imp += fa_fa_fa_it_imp[i].nid_imp + pl_sep_col;
		pl_RowData_fa_it_imp += fa_fa_fa_it_imp[i].ntasa_imp + pl_sep_col;
		pl_RowData_fa_it_imp += fnc_obtener_numero(fa_fa_fa_it_imp[i].nimp_imp) + pl_sep_fil; // VALIDAR
	}
	// ::::::::::::: fa_fa_it_imp_tt - Fin :::::::::::::

	// var pp_url = '@Url.Action("slq_usp_fa_fa_insert", "Home")';
	var pp_url = '/home/slq_usp_fa_fa_insert';
		pp_url += '?pi_ccod_emp=' + cc_ccod_emp;
		pp_url += '&pi_cdoc=' + $('#i_cdoc').val();
		pp_url += '&pi_cdoc_serie=' + $('#s_ser').val();
		pp_url += '&pi_cdoc_nro=' + '';
		pp_url += '&pi_cest=' + 'P';
		
		pp_url += '&pi_ccod_uop=' + cc_ccod_uop;
		//pp_url += '&pi_ccod_uop=' + $('#i_ccod_uop').val();
		
		pp_url += '&pi_ccod_eje=' + cc_ccod_eje;
		pp_url += '&pi_ccod_per=' + cc_ccod_per;
		pp_url += '&pi_ctipo_doc=' + 'F';				
		pp_url += '&pi_dfch_emi=' + $('#i_dfch_emi').val();
		pp_url += '&pi_dfch_venc=' + $('#i_dfch_venc').val();		
		pp_url += '&pi_ccod_mon=' + cc_ccod_mon_cb;
		pp_url += '&pi_ccod_alm=' + $('#i_ccod_alm').val();
		pp_url += '&pi_ccod_prs=' + $('#i_ccod_prs').val();
		pp_url += '&pi_cdsc_prs=' + $('#i_cdsc_prs').val();
		pp_url += '&pi_ccod_dir=' + $('#s_dir').val();
		pp_url += '&pi_cdsc_dir=' + $('#s_dir').find(":selected").text();
		pp_url += '&pi_ccod_opfa=' + $('#i_ccod_opfa').val();
		pp_url += '&pi_ccod_cdp=' + $('#i_ccod_cdp').val();
		pp_url += '&pi_ccod_zn=' + $('#i_ccod_zn').val();
		pp_url += '&pi_ccod_tbj_ven=' + $('#i_ccod_tbj_ven').val();
		pp_url += '&pi_ccod_tbj_cob=' + $('#i_ccod_tbj_cob').val();
		pp_url += '&pi_cglosa=' + $('#i_cglosa').val();
		pp_url += '&pi_cest_sn=' + '';
		pp_url += '&pi_cemail_sn=' + $('#s_email_sn').find(":selected").text();
		pp_url += '&pi_ccod_hash_sn=' + $('#i_ccod_hash_sn').val();

		var pa_data = [pl_RowData_fa_tt, pl_RowData_fa_imp, pl_RowData_fa_it, pl_RowData_fa_it_tt, pl_RowData_fa_it_imp];

		// Variables Ajax
		var pn_codResult = 0;
		var pc_msjResult = '';
		var pb_result_bool = false;
		
		var pa_columns = ['on_codResult','oc_msjResult','oc_cdoc_nro'];
		var pa_results = f_eject_ajax(pp_url, pa_columns, pa_data);
		for (var i = 0; i < pa_results.length; i++) {
			pn_codResult = pa_results[i].on_codResult;
			pc_msjResult = pa_results[i].oc_msjResult;
			
			if (pn_codResult === 0)
			{
				pb_result_bool = true;
				fnc_Recargar_listas();
			}
			else if (pn_codResult < 0)
			{
				pb_result_bool = false;
			}
		}
		
		var pa_results_send = [pb_result_bool, pn_codResult, pc_msjResult];
		return pa_results_send;
};

function fnc_eliminar_child() {
	var pc_cdoc = $.trim($("#i_cdoc").val());
	var pc_s_ser = $.trim($("#i_s_ser").val());
	var pc_cdoc_nro = $.trim($("#i_cdoc_nro").val());

	if (pc_cdoc === '' || pc_s_ser === '' || pc_cdoc_nro === '') {
		swal("Cancelado", "Seleccione un registro a eliminar.", "error");
		return;
	}

	// var pc_url = '@Url.Action("slq_usp_fa_fa_delete", "Home")';
	var pc_url = '/home/slq_usp_fa_fa_delete';
		pc_url += '?ic_ccod_emp=' + cc_ccod_emp;
		pc_url += '&ic_ccod_doc=' + $("#i_cdoc").val();
		pc_url += '&ic_ccod_ser=' + $("#i_s_ser").val();
		pc_url += '&ic_cdoc_nro=' + $("#i_cdoc_nro").val();
	
	fnc_delete(pc_url,'fnc_eliminar_child_post', []);
};

function fnc_eliminar_child_post() {
	fnc_Recargar_listas()
};

// ======================================================================================================================================
// =========================================================== Grid Lista - Inicio ======================================================
// ======================================================================================================================================
function fnc_add_grid_lista() {
	$(".tabs").tabs("select", "tab_1");
};

function fnc_grid_lista_cest(nRow, nCol, cellData) {
	var pc_cellData = '';
	if (cellData === 'A') {
		pc_cellData = gc_span_activo;
	}
	else if (cellData === 'I') {
		pc_cellData = gc_span_inactivo;
	}
	$('td:eq(' + nCol + ')', nRow).html(pc_cellData);
};


function fnc_grid_lista_row_click(pi_row_data) {

	/*
	$("#i_ccod_lin").val(pi_row_data.ccod_lin);
	$("#i_s_lin").val(pi_row_data.cdsc_lin);
	
	$("#i_ccod_slin").val(pi_row_data.ccod_slin);
	$("#i_s_slin").val(pi_row_data.cdsc_slin);
	
	$("#i_cident_1").val(pi_row_data.cident_1);
	$("#i_cident_2").val(pi_row_data.cident_2);
	$("#i_cident_3").val(pi_row_data.cident_3);
	
	$("#i_ccod_it_tip").val(pi_row_data.ccod_it_tip);
	$("#i_s_it_tip").val(pi_row_data.cdsc_it_tip);
	
	$("#i_ccod_fab").val(pi_row_data.ccod_fab);

	$("#i_ccod_it").val(pi_row_data.ccod_it);
	//$("#i_cdsc_it").val(pi_row_data.cdsc_it);
	$("#i_cdsc_it_lga").val(pi_row_data.cdsc_it_lga);

	$("#i_ccod_um").val(pi_row_data.ccod_um);
	$("#i_s_um").val(pi_row_data.cdsc_um);
	
	$("#i_cmarca").val(pi_row_data.cmarca);
	$("#i_cmodelo").val(pi_row_data.cmodelo);
	$("#i_ccolor").val(pi_row_data.ccolor);
	$("#i_cpeso").val(pi_row_data.cpeso);
	$("#i_cvolumen").val(pi_row_data.cvolumen);
	$("#i_cgarantia").val(pi_row_data.cgarantia);
	$("#i_tobs").val(pi_row_data.tobs);

	$("#i_nstock_min").val((fnc_obtener_numero(pi_row_data.nstock_min) === 0 ? '' : fnc_formatear_saldo_inventario(pi_row_data.nstock_min)));
	$("#i_nstock_max").val((fnc_obtener_numero(pi_row_data.nstock_max) === 0 ? '' : fnc_formatear_saldo_inventario(pi_row_data.nstock_max)));
	*/

};
