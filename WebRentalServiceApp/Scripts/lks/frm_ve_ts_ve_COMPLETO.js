// ======================================================================================================================================
// ===================================================== Variables de Formulario ========================================================
// ======================================================================================================================================
// variable a prueba
var fa_frm_tab = ['Ficha', 'Items', '', '', '', '', '', '', '', ''];


var fa_frm_tab_fa = ['Ficha', 'Items', '', '', '', '', '', '', '', ''];
var fc_frm_cb_fa = ''

var fc_em_dir__em_prs__ccodigo = '';
var fn_ccod_dir = 0;

var fc_frm_cb = 'form_main';
var fc_frm_dt_1 = 'frm_grid_it';

var fb_grid_insert = true;

/* ...::: Arrays :::... */
var fa_fa_fa_tt = []; // Totales del documento por tipos de moneda
var fa_fa_fa_imp_tt = []; // Totales de Impuestos del Documento por tipos de moneda

var fa_fa_fa_it = []; // Detalles de los items incluyendo los totales por tipos de monedas
var fa_fa_fa_it_imp_tt = []; // Impuestos de los items por tipos de moneda
var fa_fa_fa_it_imp_tt_tmp = []; // Impuestos de los items por tipos de moneda - Mientras se va agregando el it

var fa_lq_usp_fa_fa_it_list = [];
var fa_lq_usp_fa_fa_imp_list = [];

var fa_lq_usp_al_it_um_list = [];
var fa_lq_usp_al_it_um_list_tmp = [];

var fa_lq_usp_al_it_imp_list = [];
var fa_lq_usp_al_it_imp_list_tmp = [];

// Tipos de cambio por fecha
var fa_slq_usp_Get_em_mon_tpc_ln = [];

// Lista de precios
var fa_lq_usp_fa_lp_it_ln_list = [];
var fa_lq_usp_fa_lp_it_ln_list_tmp = [];


var fn_ccod_fa = 0;

/* ...::: Variables de Item :::... */
// Vw
var fn_it_nid_it = 0;
var fc_it_ccod_it = '';
var fc_it_cdsc_it = '';
var fn_it_ncant = 0;
var fc_it_cabr_um = '';
var fn_it_nimp_u = 0;
var fn_it_nimp_t = 0;
// it
var fc_it_ctipo_it = '';
var fc_it_ctipo_it_dsc = '';
var fc_it_ccod_um = '';
var fc_it_cdsc_um = '';
var fc_it_ccod_lp = '';
var fc_it_cdsc_lp = '';
var fc_it_cglosa = '';
// tt
var fn_it_ncam = 0;
var fn_it_nimp_n = 0;
var fn_it_nimp_d = 0;
var fn_it_nimp_i = 0;

var fn_it_nsaldo = 0;
//var fc_it_nsaldo_ccod_um = '';

// Moneda
var fc_cb_ccod_mon = '';
var fn_cb_ccod_mon_tpc = 0; // Valor que se carga cuando la moneda cabecera es distinta a la moneda nacional
var fb_cb_mon_tpc_modificado = false; // true: Este valor se asigna cuando el usuario modifica valores de tipos de cambio de monedas

// cest
var fc_cest_span_creacion = '<span class="label label-success">Creacion</span>';
var fc_cest_span_borrador = '<span class="label label-warning">Borrador</span>';
var fc_cest_span_correcto = '<span class="label label-success">Correcto</span>';
var fc_cest_span_anulado = '<span class="label label-danger">Anulado</span>';
var fc_cest_span_pendiente = '<span class="label label-warning">Pendiente</span>';

// cest_sn
var fc_cest_sn_span_creacion = '<span class="label label-success">Creacion</span>';
var fc_cest_sn_span_borrador = '<span class="label label-warning">Borrador</span>';
var fc_cest_sn_span_correcto = '<span class="label label-success">Correcto</span>';
var fc_cest_sn_span_pendiente = '<span class="label label-warning">Pendiente</span>';
var fc_cest_sn_span_rechazado = '<span class="label label-danger">Rechazado</span>';

// ======================================================================================================================================
// ====================================================== Funciones Complementos ========================================================
// ======================================================================================================================================

function fnc_child_set_html() {

};

function fnc_child_ready() {

	// Temporal, variables que se carga en el click del menu link
	mc_ccod_men = '76';
	mc_cdsc_men = 'Venta';
	mc_men_form = 'frm_fa_fa';
	mc_tipo_form = 'form_transaccion';
	mc_style_form = 'form_ts_style_1'

	fnc_child_objects_load_functions();
	fnc_child_cargar_valores_iniciales();
};

/*
fnc_child_objects_load_functions: Funcion que se maneja solo en el formulario hijo, carga valores de objetos una vez.
*/

var fc_shortcuts_search_prs = 'alt+1';
var fc_shortcuts_search_prs_link = '_lnk_open_modal_prs';

var fc_shortcuts_search_it_add = 'alt+2';
var fc_shortcuts_search_it_add_link = '_lnk_open_modal_it_add';

var fc_shortcuts_search_it_b = 'alt+1';
var fc_shortcuts_search_it_b_link = '_lnk_open_modal_it_b';

var fc_shortcuts_search_it_s = 'alt+2';
var fc_shortcuts_search_it_s_link = '_lnk_open_modal_it_s';

function fnc_child_objects_load_functions() {
	
	// Accesos rapidos
	shortcut.add(fc_shortcuts_search_prs, function () {
		if ($('#mdl_grid_it_seleccion').is(":visible")) {
			if ($('#mdl_grid_al_it_saldo').is(":visible") || $('#mdl_grid_al_it_srv').is(":visible") || $('#mdl_grid_it').is(":visible")) {return;}
			$("[data-lnk='" + fc_shortcuts_search_it_b_link + "']")[0].click();
		}
		else {
			if ($('#mdl_grid_em_prs_ct').is(":visible")) {return;}
			if (fnc_validar_lnk('_lnk_open_modal_prs')) {$('.tabs').tabs('select', 'tab_1');}
			$("[data-lnk='" + fc_shortcuts_search_prs_link + "']")[0].click();
		}
	}, {
		"type": "keydown",
		"propagate": true,
		"target": document
	});

	shortcut.add(fc_shortcuts_search_it_add, function () {
		if ($('#mdl_grid_em_prs_ct').is(":visible")) {return;}

		if ($('#mdl_grid_it_seleccion').is(":visible")) {
			if ($('#mdl_grid_al_it_saldo').is(":visible") || $('#mdl_grid_al_it_srv').is(":visible") || $('#mdl_grid_it').is(":visible")) {return;}
			$("[data-lnk='" + fc_shortcuts_search_it_s_link + "']")[0].click();
		}
		else {
			if (fnc_validar_lnk('_lnk_open_modal_it_add')) {$('.tabs').tabs('select', 'tab_2');}
			$("[data-lnk='" + fc_shortcuts_search_it_add_link + "']")[0].click();
		}
	}, {
		"type": "keydown",
		"propagate": true,
		"target": document
	});
};

function fnc_objects_load_functions_post_child() {
	
	// Entorno
	if (mb_EntFAC_modificar_precio_venta === false) {
		fnc_obj_enabled(fc_frm_dt_1, 'nimp_u', false, false);
		fnc_set_data_object(fc_frm_dt_1, 'nimp_u', 'hb_n', 'n');
	}
	else {
		fnc_obj_enabled(fc_frm_dt_1, 'nimp_u', true, true);
		fnc_set_data_object(fc_frm_dt_1, 'nimp_u', 'hb_n', 's');
	}
	
	// Entorno
	if (mb_EntFAC_permitir_precio_venta_cero === false) {
		$(Obj_Col(fc_frm_dt_1, 'nimp_u')).removeClass('ft_vacio');
		$(Obj_Col(fc_frm_dt_1, 'nimp_u')).addClass('ft_cero_vacio');
	}
	else {
		$(Obj_Col(fc_frm_dt_1, 'nimp_u')).removeClass('ft_cero_vacio');
		$(Obj_Col(fc_frm_dt_1, 'nimp_u')).addClass('ft_vacio');
	}

	// ===================================================================
	

	fnShowHide('grid_mon_tpc', 3, false);
	
	$('#grid_mon_tpc').on('change', 'input', function () {

		fb_cb_mon_tpc_modificado = true;
		/*
		if (parseFloat($(this).val()) === 0 || $.trim($(this).val()) === '' || isNaN(parseFloat($(this).val())))
		{
			f_msj('¡Ingrese valor de cambio para la moneda seleccionada!','','e','bottomRight','');
			$(this).select();
			$(this).focus();
			return;
		}
		*/
		var pn_tpc = parseFloat($(this).val());
		if (isNaN(pn_tpc)) {pn_tpc = 0;}

		// Update DataTable
		fo_table.cell({row: fn_rowIndex, column: fn_colIndex}).data(fc_cellData_value);
		// Update Array
		fnc_Array_Update_por_columnas(fa_slq_usp_Get_em_mon_tpc_ln, ['ccod_mon'], [fr_row_data.ccod_mon], [fc_colName], [pn_tpc]);
		
		// Actualizar valores por cambio de valor
		fnc_load_grid_it_x_modificacion_tpc();
	});

	$(Obj_Col('', 'i_filter_' + 'grid_al_it_saldo')).on('keyup change', function (event) {
		if (event.which == 13) {return;}
		$('[data-lnk="_lnk_saldos"]').addClass('display_none');
	});

	$('#tab_main').tabs('select', 'tab_lista');
};

// ======================================================================================================================================
// =============================================================== Transacciones ========================================================
// ======================================================================================================================================
/*
fnc_child_cargar_valores_iniciales: Funcion que se maneja solo en el formulario hijo, carga valores una vez, valores constantes en el formulario hijo.
*/
function fnc_child_cargar_valores_iniciales() {
	
	f_create_html_table(
						'grid_lista',
						'',
						false,
						'data-row_data',
						'', false, false, false
						);

	f_create_html_table(
						'grid_it',
						'',
						true, '', '', false, true, false
						);
	
	fnc_create_mdl_search(
						'grid_em_prs_ct',
						'out',
						'/home/lq_usp_em_prs_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs=' + '&ic_cest=' + fc_ct_cest_Activo + '&ic_cmp_OrderBy=cdsc_prs_tip' + '&ic_load_BD=', 
						'data-row_dblclick',
						'', false, false, true, 
						'height_90 width_80 finish_load_modal finish_close_modal',
						'Seleccionar persona'
						);

	fnc_create_mdl_search(
						'grid_al_it_saldo',
						'out',
						'',
						'data-row_click data-row_dblclick',
						'', false, false, true,
						'height_90 width_65 finish_load_modal finish_close_modal reload_ajax',
						'Seleccionar artículo'
						);
	
	fnc_create_mdl_search(
						'grid_al_it_srv',
						'out',
						'/home/lq_usp_al_it_srv_list/?ic_ccod_emp=' + gc_ccod_emp + '&ic_load_BD=',
						'data-row_dblclick',
						'', false, false, true,
						'height_90 width_65',
						'Seleccionar servicio'
						);

	fnc_create_mdl_search(
						'grid_imp',
						'out',
						'',
						'', '', false, false, true,
						'height_90 width_50 not_btn_add',
						'Impuestos'
						);

	fnc_create_mdl_search(
						'grid_mon_tpc',
						'out',
						'',
						'', '', false, false, true,
						'height_90 width_50 not_btn_add',
						'Tipo de cambio'
						);

	f_create_html_table(
						'grid_al_it_saldo_x_alm',
						'',
						false, '', '', false, false, true
						);

	f_load_select_ajax(fc_frm_cb, 'alm', 'ccod_uop', 'cdsc_uop', '/home/Get_em_empuop_ln?p_ccod_emp=' + gc_ccod_emp, false, '');
	f_load_select_ajax(fc_frm_cb, 'uop', 'ccod_uop', 'cdsc_uop', '/home/Get_em_empuop_ln?p_ccod_emp=' + gc_ccod_emp, false, '');
	f_load_select_ajax(fc_frm_cb, 'zn', 'ccod_zn', 'cdsc_zn', '/home/JR_usp_Get_fa_zn_ct?pi_ccod_emp=' + gc_ccod_emp, false, '');
	f_load_select_ajax(fc_frm_cb, 'cdp', 'ccod_cdp', 'cdsc_cdp', '/home/JR_usp_Get_fa_cdp_ct?ac_ccod_emp=' + gc_ccod_emp + '&ac_cest=' + fc_ct_cest_Activo, false, '');
	f_load_select_ajax(fc_frm_cb, 'opfa', 'ccod_opfa', 'cdsc_opfa', '/home/JR_usp_Get_fa_opfa_ct?p_ccod_emp=' + gc_ccod_emp + '&p_cest=' + fc_ct_cest_Activo, false, '');
	f_load_select_ajax(fc_frm_cb, 'tbj_ven', 'ccod_tbj', 'cdsc_prs', '/home/JR_usp_Get_em_tbj_ct?p_ccod_emp=' + gc_ccod_emp + '&p_cest=' + fc_ct_cest_Activo, false, '');
	f_load_select_ajax(fc_frm_cb, 'tbj_cob', 'ccod_tbj', 'cdsc_prs', '/home/JR_usp_Get_em_tbj_ct?p_ccod_emp=' + gc_ccod_emp + '&p_cest=' + fc_ct_cest_Activo, false, '');
	
	// Anulacion
	f_load_select_ajax('form_anulacion', 'tpa', 'ccod_tpa', 'cdsc_tpa', '/home/lq_usp_fa_fe_tpa_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=', false, '');

	var pc_url = '';
	pc_url = '/home/lq_usp_al_it_um_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_it=' + '&ic_ccod_um=' + '&in_row=0' + '&ic_load_BD=';
	fa_lq_usp_al_it_um_list = f_eject_ajax(pc_url, ['All'], []);
	
	pc_url = '/home/lq_usp_al_it_imp_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_it=' + '&ic_cest=' + '&ic_load_BD=';
	fa_lq_usp_al_it_imp_list = f_eject_ajax(pc_url, ['All'], []);

	// Listas de precios
	pc_url = '/home/lq_usp_fa_lp_it_ln_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_load_BD=';
	fa_lq_usp_fa_lp_it_ln_list = f_eject_ajax(pc_url, ['All'], []);
	fa_lq_usp_fa_lp_it_ln_list = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_lp_it_ln_list, ['cest'], [fc_ct_cest_Activo]);
};

function fnc_child_cargar_valores_post_proceso() {
	var pc_url = '';

	pc_url = '/home/lq_usp_fa_fa_imp_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_ccod_doc=' + '' + '&ic_ccod_ser=' + '' + '&ic_cdoc_nro=' + '' + '&ic_ccod_mon=' + '' + '&ic_ccod_it=' + '' + '&in_nid_it=' + '0' + '&ic_load_BD=load_BD';
	fa_lq_usp_fa_fa_imp_list = f_eject_ajax(pc_url, ['All'], []);

	pc_url = '/home/lq_usp_fa_fa_it_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_uop=' + gc_ccod_uop + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_cdoc=' + '' + '&ic_cdoc_serie=' + '' + '&ic_cdoc_nro=' + '' + '&ic_ccod_mon=' + '' + '&ic_load_BD=load_BD';
	fa_lq_usp_fa_fa_it_list = f_eject_ajax(pc_url, ['All'], []);

	fnc_table_reload(
					'grid_lista',
					'/home/lq_usp_fa_fa_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_load_BD=load_BD',
					'grid_lista'
					);
};

function fnc_child_nuevo() {

	fb_cb_mon_tpc_modificado = false;
	
	fn_ccod_fa = 0;

	$(Obj_Col(fc_frm_cb, 'cdsc_est', 'div')).html(fnc_GET_span_proc_est('cdsc_est', 'I:Creación'));
	$(Obj_Col(fc_frm_cb, 'cdsc_est_sn', 'div')).html(fnc_GET_span_proc_est('cdsc_est', 'I:Creación'));

	$(Obj_Col(fc_frm_cb, 'nimp_n')).val('0').trigger('change');
	$(Obj_Col(fc_frm_cb, 'nimp_d')).val('0').trigger('change');
	$(Obj_Col(fc_frm_cb, 'nimp_i')).val('0').trigger('change');
	$(Obj_Col(fc_frm_cb, 'nimp_t')).val('0').trigger('change');

	fc_em_dir__em_prs__ccodigo = '';
	fn_ccod_dir = 0;

	fa_slq_usp_Get_em_mon_tpc_ln = fnc_get_tpc_fecha(gd_dfch_main);

	fa_fa_fa_tt = [];
	fa_fa_fa_imp_tt = [];
	fa_fa_fa_it_imp_tt = [];
	fa_fa_fa_it = [];

	$(Obj_lnk('', '_lnk_grid_it_aceptar')).css({ display: 'inline-block' });
};

function fnc_child_valores_predeterminados() {

	$(Obj_Col(fc_frm_cb, 'dfch_emi')).val(gd_dfch_main);
	$(Obj_Col(fc_frm_cb, 'dfch_venc')).val(gd_dfch_main);
	$(Obj_Col(fc_frm_cb, 'ccod_eje')).val(gc_ccod_eje);
	$(Obj_Col(fc_frm_cb, 'ccod_per')).val(gc_ccod_per);

	$(Obj_Col(fc_frm_cb, 'opfa')).val('FVES').trigger('change');
	$(Obj_Col(fc_frm_cb, 'uop')).val(gc_ccod_uop).trigger('change');

	$(Obj_Col(fc_frm_cb, 'alm')).val('100').trigger('change');

};


function fnc_GET_Date_to_String(ic_date) {
	
	//data_col = data_col.substring(4, data_col.length);
	pc_day = ic_date.substring(0, 2);
	pc_month = ic_date.substring(3, 5);
	pc_year = ic_date.substring(6, 10);

	return new Date(pc_month + '/' + pc_day + '/' + pc_year);
};

function fnc_child_form_objs_verificar_requeridos() {
	var pb_process_validacion = true;
	$.each(fa_slq_usp_Get_em_mon_tpc_ln, function (i, option) {
		if (parseFloat(option.ntc_c) === 0) {
			fnc_open_modal_tpc();
			//f_msj('¡Ingrese valor(es) de cambio de moneda!','','e','bottomRight','');
			swal(gc_msj_titulo_error, '¡Ingrese valor(es) de cambio de moneda!', gc_msj_tipo_error);
			pb_process_validacion = false;
		}
	});

	var pd_dfch_emi = fnc_GET_Date_to_String($(Obj_Col(fc_frm_cb, 'dfch_emi')).val());
	var pd_dfch_venc = fnc_GET_Date_to_String($(Obj_Col(fc_frm_cb, 'dfch_venc')).val());
	if (pd_dfch_emi > pd_dfch_venc) {
		swal(gc_msj_titulo_error, '¡La fecha de vencimiento debe ser igual o mayor a la fecha de emisión!', gc_msj_tipo_error);
		pb_process_validacion = false;
	}

	if (fb_fnc_registrar_borrador === false) {
		if (pb_process_validacion === false) {
			return false;
		}
		else {
			return fnc_form_objs_verificar_requeridos('form_main');
		}	
	}
	else {
		return pb_process_validacion;
	}
};

function fnc_child_editar() {

	fn_ccod_fa = fr_row_data_cb.ccod_fa;
	fc_cb_ccod_mon = fr_row_data_cb.ccod_mon;

	if (fr_row_data_cb.ccod_est === 'C') {
		$(Obj_lnk('', '_lnk_grid_it_aceptar')).css({ display: 'none' });
	}
	else if (fr_row_data_cb.ccod_est === 'B') {
	
		// Series
		var pc_ccod_doc = $("input[data-col='ccod_doc']").val();
		pc_url = '/home/JR_usp_Get_fa_doc_ser_ln?p_ccod_emp=' + gc_ccod_emp + '&p_cest=' + fc_ct_cest_Activo + '&p_ccod_doc=' + pc_ccod_doc;
		f_load_select_ajax(fc_frm_cb, '_drt_ccod_ser', 'ccod_ser', 'cdsc_ser', pc_url, false, '');
		$("select[data-col='_drt_ccod_ser']").val(fr_row_data_cb.ccod_ser).trigger('change');

		//Direccion
		fnc_s_em_dir__load(fn_ccod_dir);
		
	
		
		
		
		
		
		/*
		fnc_Array_Update_por_columnas(fa_fa_fa_it, [''], [jc_grid_row_opts_v], [''], [jc_grid_row_opts_n]);
		//fnc_Array_Object_add_column(fa_fa_fa_it, [''], [jc_grid_row_opts_v]);
		fnc_DataTable_fnAddData_to_array('grid_it', fa_fa_fa_it);
		*/

		var data_col_opts = $('#grid_it').data('col_opts');
		fnShowHide('grid_it', data_col_opts, true);

		
		// =====================================================
		fa_fa_fa_it = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_fa_it_list, ['ccod_fa'], [fr_row_data_cb.ccod_fa]);
		fa_fa_fa_it = fnc_Array_to_Array_for_Columns(
													fa_fa_fa_it,
													[
													'nid_it',
													'ccod_it',
													'cdsc_it',
													'cabr_um',
													'nimp_u',
													'ncant',
													'nimp_t',
													'ctipo_it',
													'ctipo_it_dsc',
													'ccod_um',
													'cdsc_um',
													'ccod_lp',
													'cdsc_lp',
													'cglosa',
													'ccod_mon_lt',
													'ncam',
													'nimp_n',
													'nimp_i',
													'nimp_d'
													],
													jc_grid_row_opts_n
													);
		// fa_fa_fa_it = fnc_Array_sortByKeyAsc(fa_fa_fa_it, 'nid_it');
		// fnc_DataTable_fnAddData_to_array('grid_it', fa_fa_fa_it);
		fnc_load_grid_it_x_cod_mon(fc_cb_ccod_mon);
		fnc_cb_calcular_importes();
		
		
		/*
		// grid_it
		fa_fa_fa_it = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_fa_it_list, ['ccod_fa'], [fr_row_data_cb.ccod_fa]);
		fnc_Array_Object_add_column(fa_fa_fa_it, [''], [jc_grid_row_opts_n]);
		fa_fa_fa_it = fnc_Array_sortByKeyAsc(fa_fa_fa_it, 'nid_it');
		// fnc_DataTable_fnAddData_to_array('grid_it', fa_fa_fa_it);
		*/



		// =============================================
			
		fa_fa_fa_imp_tt = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_fa_imp_list, ['ccod_fa', 'ccod_it'], [fr_row_data_cb.ccod_fa, '']);
		fa_fa_fa_imp_tt = fnc_Array_to_Array_for_Columns(
														fa_fa_fa_imp_tt,
														[
														'cabr_mon',
														'ccod_doc',
														'ccod_imp',
														'ccod_it',
														'ccod_mon',
														'ccod_ser',
														'cdoc_nro',
														'cdsc_imp',
														'cdsc_mon',
														'csim_mon',
														'ctip',
														'ncam',
														'nid_imp',
														'nid_it',
														'nimp_imp',
														'ntasa_imp'
														],
														''
														);
		//fa_fa_fa_imp_tt = fnc_Array_sortByKeyAsc(fa_fa_fa_imp_tt, 'nid_it');
		
		// =============================================


		
		fa_fa_fa_it_imp_tt = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_fa_imp_list, ['ccod_fa', 'ccod_it'], [fr_row_data_cb.ccod_fa, ''], ['=', '<>']);
		fa_fa_fa_it_imp_tt = fnc_Array_to_Array_for_Columns(
															fa_fa_fa_it_imp_tt,
															[
															'cabr_mon',
															'ccod_doc',
															'ccod_imp',
															'ccod_it',
															'ccod_mon',
															'ccod_ser',
															'cdoc_nro',
															'cdsc_imp',
															'cdsc_mon',
															'csim_mon',
															'ctip',
															'ncam',
															'nid_imp',
															'nid_it',
															'nimp_imp',
															'ntasa_imp'
															],
															''
															);


		// =======================================================================================================================================

		if (fa_fa_fa_it.length > 0) {
			fb_cb_mon_tpc_modificado = true;
			fa_slq_usp_Get_em_mon_tpc_ln = fnc_get_tpc_registro();
			fnc_DataTable_fnAddData_to_array('grid_mon_tpc', fa_slq_usp_Get_em_mon_tpc_ln);
		}
		else {
			fb_cb_mon_tpc_modificado = false;
			fa_slq_usp_Get_em_mon_tpc_ln = fnc_get_tpc_fecha($(Obj_Col(fc_frm_cb, 'dfch_emi')).val());
		}

		// =======================================================================================================================================

		$(Obj_lnk('', '_lnk_grid_it_aceptar')).css({ display: 'inline-block' });
	}	
	
};

function fnc_child_registrar_select(ir_dataResult) {
	var pa_result = fnc_GET_ArrayValues_to_RowString(ir_dataResult);
	
	ia_columns = ['ccod_fa'];
	ia_values = [pa_result[0]];
};

function fnc_child_registrar() {

	var pc_accion = jc_est_form;
	var pc_ccod_est = 'C';
	if (fb_fnc_registrar_borrador === true) {
		pc_ccod_est = 'B';
		pc_accion += ':B';
	}

	var pc_cdoc = $(Obj_Col(fc_frm_cb, 'ccod_doc')).val();
	var pc_cdoc_serie = $(Obj_Col(fc_frm_cb, '_drt_ccod_ser')).find(":selected").val();
	var pc_cdoc_nro = $(Obj_Col(fc_frm_cb, 'cdoc_nro')).val();
	
	/*
	if (jc_est_form === 'e') {
		pc_cdoc = fr_row_data_cb.ccod_doc;
		pc_cdoc_serie = fr_row_data_cb.ccod_ser;
		pc_cdoc_nro = fr_row_data_cb.cdoc_nro;
	}
	*/
	
	var pa_RowData_cab = [
							pc_accion,
							gc_ccod_emp,
							fn_ccod_fa,
							pc_cdoc,
							pc_cdoc_serie,
							pc_cdoc_nro,
							pc_ccod_est,
							'P',
							gc_ccod_uop,
							gc_ccod_eje,
							gc_ccod_per,
							'F',
							$(Obj_Col(fc_frm_cb, 'dfch_emi')).val(),
							$(Obj_Col(fc_frm_cb, 'dfch_venc')).val(),
							fc_cb_ccod_mon,
							$(Obj_Col(fc_frm_cb, 'alm')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'ccod_prs')).val(),
							$(Obj_Col(fc_frm_cb, 'cdsc_prs')).val(),
							$(Obj_Col(fc_frm_cb, 'dir')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'dir')).find(":selected").text(),
							$(Obj_Col(fc_frm_cb, 'opfa')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'cdp')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'zn')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'tbj_ven')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'tbj_cob')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'cglosa')).val()
						];
	var pc_RowData_cab = fnc_Get_File_Values(pa_RowData_cab);

	// :::::::::::::: fa_tt - Inicio ::::::::::::::
	var pa_RowData_fa_tt = [];
	var pc_RowData_fa_tt = '';
	
	for (var i = 0; i < fa_fa_fa_tt.length; i++) {
		pa_RowData_fa_tt = [
							fa_fa_fa_tt[i].ccod_mon,
							fa_fa_fa_tt[i].ncam,
							fa_fa_fa_tt[i].nimp_n,
							fa_fa_fa_tt[i].nimp_i,
							fa_fa_fa_tt[i].nimp_d,
							fa_fa_fa_tt[i].nimp_t
							];
		pc_RowData_fa_tt = pc_RowData_fa_tt + fnc_Get_File_Values(pa_RowData_fa_tt);
	}
	// :::::::::::::: fa_tt - fin ::::::::::::::
	
	
	// ::::::::::::: fa_fa_imp_tt - Inicio :::::::::::::
	var pa_RowData_fa_imp = [];
	var pc_RowData_fa_imp = '';

	for (var i = 0; i < fa_fa_fa_imp_tt.length; i++) {
		pa_RowData_fa_imp = [
							fa_fa_fa_imp_tt[i].ccod_imp,
							fa_fa_fa_imp_tt[i].ccod_mon,
							fa_fa_fa_imp_tt[i].ncam,
							fa_fa_fa_imp_tt[i].nid_imp,
							fa_fa_fa_imp_tt[i].ntasa_imp,
							fnc_obtener_numero(fa_fa_fa_imp_tt[i].nimp_imp)
							];
		pc_RowData_fa_imp = pc_RowData_fa_imp + fnc_Get_File_Values(pa_RowData_fa_imp);
	}
	// ::::::::::::: fa_fa_imp_tt - Fin :::::::::::::
	
	
	// :::::::::::::: fa_it - Inicio ::::::::::::::
	var pa_RowData_fa_it = [];
	var pc_RowData_fa_it = '';

	// Filtramos items por Tipo de Moneda
	var fa_fa_fa_it_x_ccod_mon = fa_fa_fa_it.filter(function (row) {return row.ccod_mon_lt === fc_cb_ccod_mon;});
	for (var i = 0; i < fa_fa_fa_it_x_ccod_mon.length; i++) {
		pa_RowData_fa_it = [
							fa_fa_fa_it_x_ccod_mon[i].ccod_it,
							fa_fa_fa_it_x_ccod_mon[i].nid_it,
							fa_fa_fa_it_x_ccod_mon[i].ctipo_it,
							fa_fa_fa_it_x_ccod_mon[i].cdsc_it,
							'',
							'',
							fa_fa_fa_it_x_ccod_mon[i].ccod_um,
							//fa_fa_fa_it_x_ccod_mon[i].cabr_um,
							fa_fa_fa_it_x_ccod_mon[i].ncant,
							fa_fa_fa_it_x_ccod_mon[i].ccod_lp,
							fa_fa_fa_it_x_ccod_mon[i].cglosa
							];
		pc_RowData_fa_it = pc_RowData_fa_it + fnc_Get_File_Values(pa_RowData_fa_it);
	}	
	// :::::::::::::: fa_it - fin ::::::::::::::
	
	// :::::::::::::: fa_it_tt - Inicio ::::::::::::::
	var pa_RowData_fa_it_tt = [];
	var pc_RowData_fa_it_tt = '';

	for (var i = 0; i < fa_fa_fa_it.length; i++) {
		pa_RowData_fa_it_tt = [
							fa_fa_fa_it[i].ccod_it,
							fa_fa_fa_it[i].nid_it,
							fa_fa_fa_it[i].ccod_mon_lt,
							fa_fa_fa_it[i].ncam,
							fa_fa_fa_it[i].nimp_u,
							fa_fa_fa_it[i].nimp_n,
							fa_fa_fa_it[i].nimp_i,
							fa_fa_fa_it[i].nimp_d,
							fa_fa_fa_it[i].nimp_t
							//pl_nimp_n = pl_nimp_n + parseFloat(fa_fa_fa_it_x_ccod_mon[i].nimp_n);
							//fn_it_nimp_u = fnc_obtener_numero($('#i_it_nimp_u').val());
							];
		pc_RowData_fa_it_tt = pc_RowData_fa_it_tt + fnc_Get_File_Values(pa_RowData_fa_it_tt);
	}
	// :::::::::::::: fa_it_tt - fin ::::::::::::::
	
	// ::::::::::::: fa_fa_it_imp_tt - Inicio :::::::::::::
	var pa_RowData_fa_it_imp = [];
	var pc_RowData_fa_it_imp = '';

	for (var i = 0; i < fa_fa_fa_it_imp_tt.length; i++) {
		pa_RowData_fa_it_imp = [
								fa_fa_fa_it_imp_tt[i].ccod_it,
								fa_fa_fa_it_imp_tt[i].nid_it,
								fa_fa_fa_it_imp_tt[i].ccod_imp,
								fa_fa_fa_it_imp_tt[i].ccod_mon,
								fa_fa_fa_it_imp_tt[i].ncam,
								fa_fa_fa_it_imp_tt[i].nid_imp,
								fa_fa_fa_it_imp_tt[i].ntasa_imp,
								fnc_obtener_numero(fa_fa_fa_it_imp_tt[i].nimp_imp)
							];
		pc_RowData_fa_it_imp = pc_RowData_fa_it_imp + fnc_Get_File_Values(pa_RowData_fa_it_imp);
	}
	// ::::::::::::: fa_fa_it_imp_tt - Fin :::::::::::::

	var pa_data = [pc_RowData_cab, pc_RowData_fa_tt, pc_RowData_fa_imp, pc_RowData_fa_it, pc_RowData_fa_it_tt, pc_RowData_fa_it_imp];
	return ['fa_fa_insert', pa_data];
	//return [mc_men_form, pa_data];
};

function fnc_child_eliminar() {

	if (fr_row_data_cb.ccod_est === 'C') {
		swal(gc_msj_titulo_error, '¡Para eliminar, primero se debe anular el documento!', gc_msj_tipo_error);
		return [];
	}
	
	//return [mc_men_form, 'Eliminar', [fnc_Get_File_Values([gc_ccod_emp, fr_row_data_cb.ccod_fa])], '', 'fnc_child_eliminar_post', []];
	return ['fa_fa_delete', 'Eliminar', [fnc_Get_File_Values([gc_ccod_emp, fr_row_data_cb.ccod_fa])], '', 'fnc_child_eliminar_post', []];
};

function fnc_child_eliminar_post() {
	fnc_child_cargar_valores_post_proceso();
};

function fnc_child_pre_anular() {

	//f_frm_objs_clear('form_anulacion');
	
	
	
	fnc_frm_objs_habilitar('form_anulacion', 'n');
	
	

	$(Obj_Col('form_anulacion', 'ccod_doc')).val($(Obj_Col(fc_frm_cb, 'ccod_doc')).val());
	$(Obj_Col('form_anulacion', 'ccod_ser')).val($(Obj_Col(fc_frm_cb, 'i_s__drt_ccod_ser')).val());
	$(Obj_Col('form_anulacion', 'cdoc_nro')).val($(Obj_Col(fc_frm_cb, 'cdoc_nro')).val());
	//$(Obj_Col('form_anulacion', 'tpa')).val(null).trigger("change");
	
	
	$(Obj_Col('form_anulacion', 'tpa')).val('002').trigger("change");
	

	fnc_frm_objs_validar('form_anulacion', '');

	$('#mdl_anulacion').modal('open');
};

function fnc_mdl_anulacion_aceptar() {
	
	
	//fnc_frm_objs_validar('form_anulacion', '');
	//return;
	
	if (fnc_form_objs_verificar_requeridos('form_anulacion') === true) 
	{
	
		/*
		if ($.trim($(Obj_Col('form_anulacion', 'tpa')).find(":selected").text()) === '')
		{
			fnc_set_focus('form_anulacion', 'tpa');
			fnc_mensaje_validacion('Ingrese valor: Tipo de Nota de Crédito');
			return;
		}
		
		if ($.trim($(Obj_Col('form_anulacion', 'cmotivo_anu')).val()) === '')
		{
			fnc_set_focus('form_anulacion', 'cmotivo_anu');
			fnc_mensaje_validacion('Ingrese valor: Motivo');
			return;
		}
		*/
		
		fb_pre_anular_valido = true;
		fnc_anular();
	}
};

function fnc_child_anular() {
	// Valores de anulacion
	var pc_ccod_tpa = $(Obj_Col('form_anulacion', 'tpa')).find(":selected").val();
	var pc_cmotivo_anu = $(Obj_Col('form_anulacion', 'cmotivo_anu')).val();
	
	// Columnas y valores para la seleccion del registro anulado
	ia_columns = ['ccod_fa'];
	ia_values = [fr_row_data_cb.ccod_fa];

	//return [mc_men_form, 'Anular', [fnc_Get_File_Values([gc_ccod_emp, fr_row_data_cb.ccod_fa, pc_ccod_tpa, pc_cmotivo_anu])], 'fnc_child_anular_cancel', 'fnc_child_anular_post', []];
	return ['fa_fa_cancel', 'Anular', [fnc_Get_File_Values([gc_ccod_emp, fr_row_data_cb.ccod_fa, pc_ccod_tpa, pc_cmotivo_anu])], 'fnc_child_anular_cancel', 'fnc_child_anular_post', []];
};
function fnc_child_anular_cancel() {
	// Columnas y valores para la seleccion del registro anulado
	ia_columns = [];
	ia_values = [];
};
function fnc_child_anular_post() {

	if (mb_EntGEN_FE === true) {
		var pa_result = fnc_GET_ArrayValues_to_RowString(fa_results[0].or_dataResult);

		$(Obj_Col('form_anulacion', 'ccod_doc_ref')).val(pa_result[0]);
		$(Obj_Col('form_anulacion', 'ccod_ser_ref')).val(pa_result[1]);
		$(Obj_Col('form_anulacion', 'cdoc_nro_ref')).val(pa_result[2]);
		
		//$('#mdl_anulacion').modal('close');
	}

	fnc_child_cargar_valores_post_proceso();
};




// ======================================================================================================================================
// =========================================================== Grid Lista - Inicio ======================================================
// ======================================================================================================================================

/*
function fnc_grid_lista_cest (ic_columnName, ic_cellData) {
	var ic_cellData = String(ic_cellData);
	var pc_ccod_est = '';
	var	pc_cdsc_est = '';
	if (ic_cellData.indexOf(':') > -1) {
		pc_ccod_est = ic_cellData.substring(0, ic_cellData.indexOf(':'));
		pc_cdsc_est = ic_cellData.substring(ic_cellData.indexOf(':') + 1, ic_cellData.length);
	}
	
	return fnc_GET_span_proc_est(pc_ccod_est, pc_cdsc_est);	
};
*/
/*
function fnc_grid_lista_cest_sn (ic_columnName, ic_cellData) {
	var pc_cellData = '';
	if (ic_cellData === 'P') {pc_cellData = fc_cest_sn_span_pendiente;}
	else if (ic_cellData === 'N') {pc_cellData = fc_cest_sn_span_creacion;}
	else if (ic_cellData === 'B') {pc_cellData = fc_cest_sn_span_borrador;}
	else if (ic_cellData === 'C') {pc_cellData = fc_cest_sn_span_correcto;}
	else if (ic_cellData === 'R') {pc_cellData = fc_cest_sn_span_rechazado;}
	return pc_cellData;
};
*/

function fnc_grid_lista_setear_campos_child_post (row_data) {

	fr_row_data_cb = row_data;

	$(Obj_Col(fc_frm_cb, 'cdsc_est')).html(fnc_GET_span_proc_est('cdsc_est', row_data.cdsc_est));
	$(Obj_Col(fc_frm_cb, 'cdsc_est_sn')).html(fnc_GET_span_proc_est('cdsc_est_sn', row_data.cdsc_est_sn));
	
	fc_em_dir__em_prs__ccodigo = gc_prefijo__em_dir__em_prs__ccodigo + String(fr_row_data_cb.ccod_prs);
	fn_ccod_dir = fr_row_data_cb.ccod_dir;

	// grid_it
	// fa_fa_fa_it = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_fa_it_list, ['ccod_doc', 'ccod_ser', 'cdoc_nro' , 'ccod_mon_lt'], [fr_row_data_cb.ccod_doc, fr_row_data_cb.ccod_ser, fr_row_data_cb.cdoc_nro, fr_row_data_cb.ccod_mon]);
	fa_fa_fa_it = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_fa_it_list, ['ccod_fa', 'ccod_mon_lt'], [fr_row_data_cb.ccod_fa, fr_row_data_cb.ccod_mon]);
	fnc_Array_Object_add_column(fa_fa_fa_it, [''], [jc_grid_row_opts_v]);
	fa_fa_fa_it = fnc_Array_sortByKeyAsc(fa_fa_fa_it, 'nid_it');
	fnc_DataTable_fnAddData_to_array('grid_it', fa_fa_fa_it);

};

// Validar por que no funciona
function fnc_add_grid_lista() {
	$("#tab_main").tabs("select", "tab_1");
};

// ======================================================================================================================================
// ========================================================== Cabecera Main =============================================================
// ======================================================================================================================================

function fnc_cb_calcular_importes() {

	// ::::::::::::: Calculando Totales del Documento - Inicio :::::::::::::
	var pl_ccod_mon = '';
	var pl_ncam = 0;
	var pl_nimp_n = 0;
	var pl_nimp_i = 0;
	var pl_nimp_d = 0;
	var pl_nimp_t = 0;
	
	fa_fa_fa_tt = [];
	
	// Obtenemos lista de monedas
	var da_fa_fa_ln_cod_mon = fnc_Array_EliminarDuplicados(fa_fa_fa_it, "ccod_mon_lt");
	for (var i = 0; i < da_fa_fa_ln_cod_mon.length; i++) {
		
		pl_ccod_mon = da_fa_fa_ln_cod_mon[i].ccod_mon_lt;
		pl_ncam = da_fa_fa_ln_cod_mon[i].ncam;
		
		// Limpiamos valores para cada Tipo de Moneda
		pl_nimp_n = 0;
		pl_nimp_i = 0;
		pl_nimp_d = 0;
		pl_nimp_t = 0;
		
		// Filtramos items por Tipo de Moneda
		var fa_fa_fa_it_x_ccod_mon = fa_fa_fa_it.filter(function (row) {return row.ccod_mon_lt === pl_ccod_mon;});
		for (var i2 = 0; i2 < fa_fa_fa_it_x_ccod_mon.length; i2++) {		
			// Sumanos valores por Tipo de Moneda
			pl_nimp_n = pl_nimp_n + parseFloat(fa_fa_fa_it_x_ccod_mon[i2].nimp_n);
			pl_nimp_i = pl_nimp_i + parseFloat(fa_fa_fa_it_x_ccod_mon[i2].nimp_i);
			pl_nimp_d = pl_nimp_d + parseFloat(fa_fa_fa_it_x_ccod_mon[i2].nimp_d);
			pl_nimp_t = pl_nimp_t + parseFloat(fa_fa_fa_it_x_ccod_mon[i2].nimp_t);
		}
		
		// Agregamos registro Total Proceso por Tipo de Moneda
		fa_fa_fa_tt.push(
							{
								"ccod_mon": pl_ccod_mon,
								"ncam": pl_ncam,
								"nimp_n": pl_nimp_n,
								"nimp_i": pl_nimp_i,
								"nimp_d": pl_nimp_d,
								"nimp_t": pl_nimp_t
							}
						);
	}
	// ::::::::::::: Calculando Totales del Documento - Fin :::::::::::::

	// ::::::::::::: Calculando Totales de Impuestos del Documento - Inicio :::::::::::::
	var pc_ccod_mon = '';
	var pn_ncam = 0;
	
	var pn_nimp_imp = 0;

	fa_fa_fa_imp_tt = [];
	
	// Obtenemos lista de impuestos
	var pc_ccod_imp = '';
	var pn_ntasa_imp = 0;
	var pc_cdsc_imp = '';
	
	var pa_fa_fa_it_imp_x_ccod_imp = fnc_Array_EliminarDuplicados(fa_fa_fa_it_imp_tt, "ccod_imp");
	for (var i0 = 0; i0 < pa_fa_fa_it_imp_x_ccod_imp.length; i0++) {	

		// Valores del Impuesto
		pc_ccod_imp = pa_fa_fa_it_imp_x_ccod_imp[i0].ccod_imp;
		pn_ntasa_imp = pa_fa_fa_it_imp_x_ccod_imp[i0].ntasa_imp;
		pc_cdsc_imp = pa_fa_fa_it_imp_x_ccod_imp[i0].cdsc_imp;

		pn_nid_imp = i0 + 1;
		
		// Obtenemos lista de monedas
		var fa_fa_fa_it_imp_cod_mon = fnc_Array_EliminarDuplicados(fa_fa_fa_it_imp_tt, "ccod_mon");
		for (var i = 0; i < fa_fa_fa_it_imp_cod_mon.length; i++) {
			
			pc_ccod_mon = fa_fa_fa_it_imp_cod_mon[i].ccod_mon;
			pn_ncam = fa_fa_fa_it_imp_cod_mon[i].ncam;
			
			// Limpiamos valores para cada Tipo de Moneda
			pn_nimp_imp = 0;
			
			// Filtramos items por Tipo de Moneda y Tipo de Impuesto
			var pa_fa_fa_it_imp_result = fa_fa_fa_it_imp_tt.filter(function (row) {return row.ccod_mon === pc_ccod_mon && row.ccod_imp === pc_ccod_imp;});
			for (var i2 = 0; i2 < pa_fa_fa_it_imp_result.length; i2++) {		
				// Sumanos valores por Tipo de Moneda
				pn_nimp_imp = pn_nimp_imp + fnc_obtener_numero(pa_fa_fa_it_imp_result[i2].nimp_imp);
			}
			
			// Agregamos Totales de Impuestos de Proceso por Tipo de Moneda
			fa_fa_fa_imp_tt.push(
								{
									'ccod_doc': '',
									'ccod_ser': '',
									'cdoc_nro': '',
									'ccod_it': '',
									'nid_it': '',
									'nid_imp': fnc_formatear_enumerador(pn_nid_imp),
									'ccod_imp': pc_ccod_imp,
									'cdsc_imp': pc_cdsc_imp,
									'ntasa_imp': fnc_formatear_importe(pn_ntasa_imp),
									'ccod_mon': pc_ccod_mon,
									'ncam': pn_ncam,
									'cdsc_mon': '',
									'cabr_mon': '',
									'csim_mon': '',
									'nimp_imp': fnc_formatear_importe(pn_nimp_imp),
									'ctip': 'Impuestos'
								}
							);
		}
	}
	// ::::::::::::: Calculando Totales de Impuestos del Documento - Fin :::::::::::::

	fnc_cb_tt_view();
};

function fnc_cb_tt_view() {
	// Filtramos totales por tipo de moneda
	var fa_fa_fa_tt_x_ccod_mon = fa_fa_fa_tt.filter(function (row) {return row.ccod_mon === fc_cb_ccod_mon;});
	// View
	if (fa_fa_fa_tt_x_ccod_mon.length === 1) {
		$(Obj_Col(fc_frm_cb, 'nimp_n')).val(fa_fa_fa_tt_x_ccod_mon[0].nimp_n).trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_d')).val(fa_fa_fa_tt_x_ccod_mon[0].nimp_d).trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_i')).val(fa_fa_fa_tt_x_ccod_mon[0].nimp_i).trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_t')).val(fa_fa_fa_tt_x_ccod_mon[0].nimp_t).trigger('change');

	}
	else if (fa_fa_fa_tt_x_ccod_mon.length === 0) {
		$(Obj_Col(fc_frm_cb, 'nimp_n')).val('0').trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_d')).val('0').trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_i')).val('0').trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_t')).val('0').trigger('change');
	}
};

$(Obj_Col(fc_frm_cb, 'opfa', 'select')).change(function() {
	var lc_ccod_opfa =  $(this).val();
	if (lc_ccod_opfa !== '') {
		var pc_url = '/home/JR_usp_Get_fa_opfa_ct_cc?p_ccod_emp=' + gc_ccod_emp + '&p_cest=' + fc_ct_cest_Activo + '&p_ccod_opfa=' + lc_ccod_opfa;
		var pa_columns = ['ccod_mon','ccod_doc','cdsc_mon','csim_mon'];
		var pa_results = f_eject_ajax(pc_url, pa_columns, []);
		for (var i = 0; i < pa_results.length; i++) {
			// Asignacion de valores
			fc_cb_ccod_mon = pa_results[i].ccod_mon;
			$(Obj_Col(fc_frm_cb, 'ccod_doc')).val(pa_results[i].ccod_doc);
			$(Obj_Col(fc_frm_cb, 'cdsc_mon')).val(pa_results[i].cdsc_mon);
			$(".input-csim").attr('data-before', pa_results[i].csim_mon);
			
			// Series
			var p_ccod_doc = $("input[data-col='ccod_doc']").val();
			pc_url = '/home/JR_usp_Get_fa_doc_ser_ln?p_ccod_emp=' + gc_ccod_emp + '&p_cest=' + fc_ct_cest_Activo + '&p_ccod_doc=' + p_ccod_doc;
			f_load_select_ajax(fc_frm_cb, '_drt_ccod_ser', 'ccod_ser', 'cdsc_ser', pc_url, false, '');

			// Obtener tpc de moneda cabecera si fuera diferente a la moneda nacional
			// fer_mon
			// fn_cb_ccod_mon_tpc = parseFloat(fnc_obtener_tpc_moneda_cabecera(fc_cb_ccod_mon, fnc_obtener_lista_de_tipos_de_cambio()));
			fn_cb_ccod_mon_tpc = parseFloat(fnc_obtener_tpc_moneda_cabecera(fc_cb_ccod_mon, fa_slq_usp_Get_em_mon_tpc_ln));

			// Cargar Item detalles los valores segun moneda
			fnc_load_grid_it_x_cod_mon(fc_cb_ccod_mon);
		}
	}
	else {
		// Asignacion de valores
		fc_cb_ccod_mon = '';
		fn_cb_ccod_mon_tpc = 0;
		$(Obj_Col(fc_frm_cb, 'ccod_doc')).val('');
		$(Obj_Col(fc_frm_cb, 'cdsc_mon')).val('');
		$('.input-csim').attr('data-before', '');
		$(Obj_Col(fc_frm_cb, '_drt_ccod_ser')).empty();
	}
});
$(Obj_Col(fc_frm_cb, '_drt_ccod_ser', 'select')).change(function() {
	$(Obj_Col(fc_frm_cb, 'ccod_ser')).val($(Obj_Col(fc_frm_cb, '_drt_ccod_ser')).find(":selected").text());

	/*
	(new fnc_fact_tour_parte_1()).fnc_fact_tour_parte_1_next();
	//var foo = fnc_fact_tour_parte_1();
	//foo.fnc_fact_tour_parte_1_next();
	*/
});
$(Obj_Col(fc_frm_cb, 'cdp', 'select')).change(function() {
	//(new fnc_fact_tour_parte_1()).fnc_fact_tour_parte_1_next();
});


// ======================================================================================================================================
// ========================================================= Anulacion =====================================================
// ======================================================================================================================================

$(Obj_Col('form_anulacion', 'tpa', 'select')).change(function() {
	// $(Obj_Col('form_anulacion', 'cmotivo_anu')).val($(Obj_Col('form_anulacion', 'tpa')).find(":selected").text());
	$(Obj_Col('form_anulacion', 'cmotivo_anu')).val($(this).find(":selected").text()).trigger('change');;
});


function fnc_click_close() {

};

// ======================================================================================================================================
// ========================================================= Grid Detalle It (Items) =====================================================
// ======================================================================================================================================
// fer33
function fnc_open_modal_it_imp() {
	var pc_tipo = fnc_definir_tipo_origen();

	if (pc_tipo === 'form') {
		fnc_load_grid_it_imp_it_x_cod_mon(fc_cb_ccod_mon);
	}
	else if (pc_tipo === 'bd') {
		fa_fa_fa_it_imp_tt_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_fa_imp_list, ['ccod_fa', 'ccod_mon', 'ccod_it', 'nid_it'], [fr_row_data_cb.ccod_fa, fr_row_data_cb.ccod_mon, fr_row_data_dt_1.ccod_it, fr_row_data_dt_1.nid_it]);
		fa_fa_fa_it_imp_tt_tmp = fnc_Array_sortByKeyAsc(fa_fa_fa_it_imp_tt_tmp, 'nid_imp');
		fnc_DataTable_fnAddData_to_array('grid_imp', fa_fa_fa_it_imp_tt_tmp);
		$('#mdl_grid_imp').modal('open');
	}
};
function fnc_mdl_grid_it_post_finish_load_modal() {
	fnc_set_focus(fc_frm_dt_1, 'ncant');
};
function fnc_open_modal_it_add() {
	$(Obj_lnk('', '_lnk_grid_it_aceptar')).html('Agregar');
	$('#mdl_grid_it_seleccion').modal('open');
};
function fnc_open_modal_it_b() {
	fnc_grid_it_row_new('B');
};
function fnc_open_modal_it_s() {
	fnc_grid_it_row_new('S');
};
function fnc_add_grid_al_it_srv() {
    fnc_add_grid_it();
};
function fnc_add_grid_al_it_saldo() {
	fnc_add_grid_it();
};

function fnc_mdl_grid_al_it_saldo_post_finish_load_modal() {
	//$('[data-lnk="_lnk_saldos"]').removeClass('display_none');
	// $('[data-lnk="_lnk_saldos1"]').removeClass('display_none');
};

function fnc_mdl_grid_al_it_saldo_post_finish_close_modal() {
	$('[data-lnk="_lnk_saldos"]').addClass('display_none');
	// $('[data-lnk="_lnk_saldos1"]').addClass('display_none');
};

function fnc_grid_it_setear_campos_child_post(row_data) {
	fr_row_data_dt_1 = row_data;

	var pc_ctipo_it = $(Obj_Col(fc_frm_dt_1, 'ctipo_it', 'div')).html();
	$(Obj_Col(fc_frm_dt_1, 'ctipo_it', 'div')).html(pc_ctipo_it === 'B' ? 'Bien' : 'Servicio');
	
	$(Obj_Col(fc_frm_dt_1, 'ccod_alm')).val($(Obj_Col(fc_frm_cb, 'ccod_alm')).val());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_alm')).val($(Obj_Col(fc_frm_cb, 'i_s_alm')).val());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_mon')).val($(Obj_Col(fc_frm_cb, 'cdsc_mon')).val());
};

function fnc_grid_it_estructura(ic_tipo) {
    if (ic_tipo === 'B') {
		// Valores
		fc_it_ctipo_it = 'B';
		fc_it_ctipo_it_dsc = 'Bienes';

		$("#mdl_grid_it_sc_2").css({ display: 'block' });
		
		$("#mdl_grid_it").removeClass('height_75').addClass('height_90');
		
		$("#mdl_grid_it .modal-sub-content").removeClass('height_-94px').addClass('height_-175px');
	}
	else if (ic_tipo === 'S') {
		// Valores
		fc_it_ctipo_it = 'S';
		fc_it_ctipo_it_dsc = 'Servicios';
		
		$("#mdl_grid_it_sc_2").css({ display: 'none' });

		$("#mdl_grid_it").removeClass('height_90').addClass('height_75');
		
		$("#mdl_grid_it .modal-sub-content").removeClass('height_-175px').addClass('height_-94px');
	}

	$(Obj_Col(fc_frm_dt_1, 'ctipo_it', 'div')).html(ic_tipo === 'B' ? 'Bien' : 'Servicio');

	// Entorno
	/*
	var pc_tipo = fnc_definir_tipo_origen();
	if (pc_tipo === 'form') {
		if (mb_EntFAC_modificar_precio_venta === false) {
			fnc_obj_enabled(fc_frm_dt_1, 'nimp_u', false, false);
		}
		else {
			fnc_obj_enabled(fc_frm_dt_1, 'nimp_u', true, true);
		}
	}
	else if (pc_tipo === 'bd') {
		fnc_obj_enabled(fc_frm_dt_1, 'nimp_u', false, false);
	}
	*/
};

function fnc_grid_it_row_new(ic_tipo) {
	
	// Parametros it (Bien - Servicio)
	fn_it_nid_it = $('#grid_it').DataTable().data().count() + 1;

	fnc_grid_it_estructura(ic_tipo);

	// Validacion 1
	var pc_msj = '';
    if (ic_tipo === 'B') {
		if ($("select[data-col='alm']").val() === '') {
			pc_msj = '¡Ingrese un almacén para agregar artículo(s)!';
		}

		fnc_table_reload(
						'grid_al_it_saldo',
						'/home/slq_usp_al_it_saldo_list/?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_ccod_uop=' + gc_ccod_uop,
						''
						);
	}
	else if (ic_tipo === 'S') {
	}
	// Validacion 2
	if ($("input[data-col='cdsc_mon']").val() === '') {
		pc_msj = '¡Ingrese tipo de moneda para agregar artículo(s)!';
	}
	// Verificar validaciones
	if (pc_msj !== '') {
		$("#tab_main").tabs("select", "tab_1");
		$('#mdl_grid_it_seleccion').modal('close');
		f_msj(pc_msj,'','e','bottomRight','');
		return;		
	}	

	fb_grid_insert = true;

	// Modal
	if (ic_tipo === 'B') {
		$('#mdl_grid_al_it_saldo').modal('open');
		fnc_set_focus('', 'i_filter_grid_al_it_saldo');
	}
	else if (ic_tipo === 'S') {
		$('#mdl_grid_al_it_srv').modal('open');
		fnc_set_focus('', 'i_filter_grid_al_it_srv');
	}
};

function fnc_grid_al_it_saldo_nsaldo_column_link (ir_row_data) {

	fnc_table_reload(
				'grid_al_it_saldo_x_alm',
				'/home/slq_usp_al_it_saldo_list/?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_ccod_uop=' + gc_ccod_uop,
				''
				);

	$('#mdl_grid_al_it_saldo_x_alm').modal('open');
};

function fnc_grid_it_cdsc_it_column_link (ir_row_data) {
	var pc_tipo = fnc_definir_tipo_origen();

	if (pc_tipo === 'form') {
		fnc_grid_it_row_edit(ir_row_data);
	}
	else if (pc_tipo === 'bd') {
		fnc_grid_it_row_view(ir_row_data);
	}
};

function fnc_grid_it_row_view(ir_row_data) {

	var ic_tipo = ir_row_data.ctipo_it;

	fnc_grid_it_estructura(ic_tipo);
	
	fnc_frm_objs_habilitar(fc_frm_dt_1);

	$(Obj_lnk('', '_lnk_grid_it_aceptar')).css({ display: 'none' });
	
	fnc_setear_campos_child(fc_frm_dt_1, 'grid_it');
	
	$('#mdl_grid_it').modal('open');
};

function fnc_add_grid_it() {

	mb_bloquear_process = true;
	fnc_frm_objs_habilitar('frm_grid_it');
	mb_bloquear_process = false;
	
	$(Obj_Col(fc_frm_dt_1, 'ccod_alm')).val($(Obj_Col(fc_frm_cb, 'alm')).find(":selected").val());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_alm')).val($(Obj_Col(fc_frm_cb, 'alm')).find(":selected").text());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_mon')).val($(Obj_Col(fc_frm_cb, 'cdsc_mon')).val());
	$(Obj_Col(fc_frm_dt_1, 'ncant')).val('');
	
	//fnc_frm_objs_validar('frm_grid_it','');
	
	var pc_table;
	if (fc_it_ctipo_it === 'B') {
        pc_table = 'grid_al_it_saldo';
    }
    else if (fc_it_ctipo_it === 'S') {
		pc_table = 'grid_al_it_srv';
    }	
	var data = fnc_Get_DataTable_RowData_Selected(pc_table);

	// Valores de item seleccionado
	fc_it_ccod_it = data.ccod_it;
	fc_it_cdsc_it = data.cdsc_it;

	$(Obj_Col(fc_frm_dt_1, 'ccod_it')).val(fc_it_ccod_it);
	$(Obj_Col(fc_frm_dt_1, 'cdsc_it')).val(fc_it_cdsc_it);
	
	// UM
	fa_lq_usp_al_it_um_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_um_list, ['ccod_it'], [data.ccod_it]);
	fa_lq_usp_al_it_um_list_tmp = fnc_Array_sortByKeyAsc(fa_lq_usp_al_it_um_list_tmp, 'nid_um');
	f_load_select_array(fc_frm_dt_1, 'um', 'ccod_um', 'cdsc_um', fa_lq_usp_al_it_um_list_tmp, true, '');

	$("#frm_grid_it_c_nsaldo").css('display', fc_it_ctipo_it === 'B' ? 'block' : 'none');

	fnc_frm_objs_validar('frm_grid_it','');

	$('#mdl_grid_al_it_srv').modal('close');
	$('#mdl_grid_al_it_saldo').modal('close');
	$('#mdl_grid_it').modal('open');
};

function fnc_grid_it_row_edit(ir_row_data) {

	// Valores del it
	fn_it_nid_it = ir_row_data.nid_it;
	fc_it_ccod_it = ir_row_data.ccod_it;
	fc_it_cdsc_it = ir_row_data.cdsc_it;
	fn_it_ncant = ir_row_data.ncant;
	fc_it_cabr_um = ir_row_data.cabr_um;
	fn_it_nimp_u = ir_row_data.nimp_u;
	fn_it_nimp_t = ir_row_data.nimp_t;
	// it
	fc_it_ctipo_it = ir_row_data.ctipo_it;
	fc_it_ctipo_it_dsc = ir_row_data.ctipo_it_dsc;
	fc_it_ccod_um = ir_row_data.ccod_um;
	fc_it_cdsc_um = ir_row_data.cdsc_um;
	fc_it_ccod_lp = ir_row_data.ccod_lp;
	fc_it_cdsc_lp = ir_row_data.cdsc_lp;
	fc_it_cglosa = ir_row_data.cglosa;
	// tt
	fn_it_ncam = ir_row_data.ncam;
	fn_it_nimp_n = ir_row_data.nimp_n;
	fn_it_nimp_d = ir_row_data.nimp_d;
	fn_it_nimp_i = ir_row_data.nimp_i;

	fnc_grid_it_estructura(fc_it_ctipo_it);
	
	mb_bloquear_process = true;
	fnc_frm_objs_habilitar(fc_frm_dt_1);

	$(Obj_Col(fc_frm_dt_1, 'ccod_alm')).val($(Obj_Col(fc_frm_cb, 'alm')).find(":selected").val());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_alm')).val($(Obj_Col(fc_frm_cb, 'alm')).find(":selected").text());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_mon')).val($(Obj_Col(fc_frm_cb, 'cdsc_mon')).val());

	// Valores de item seleccionado
	$(Obj_Col(fc_frm_dt_1, 'ccod_it')).val(fc_it_ccod_it);
	$(Obj_Col(fc_frm_dt_1, 'cdsc_it')).val(fc_it_cdsc_it);

	$(Obj_Col(fc_frm_dt_1, 'ncant')).val(fn_it_ncant).trigger('change');

	// UM
	fa_lq_usp_al_it_um_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_um_list, ['ccod_it'], [ir_row_data.ccod_it]);
	fa_lq_usp_al_it_um_list_tmp = fnc_Array_sortByKeyAsc(fa_lq_usp_al_it_um_list_tmp, 'nid_um');
	f_load_select_array(fc_frm_dt_1, 'um', 'ccod_um', 'cdsc_um', fa_lq_usp_al_it_um_list_tmp, true, fc_it_ccod_um);

	// Listas de precios
	$(Obj_Col(fc_frm_dt_1, 'nimp_u')).val(fn_it_nimp_u).trigger('change');
	fa_lq_usp_fa_lp_it_ln_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_lp_it_ln_list, ['ccod_it', 'ccod_um'], [fc_it_ccod_it, fc_it_ccod_um]);
	//fa_lq_usp_fa_lp_it_ln_list_tmp = fnc_Array_sortByKeyAsc(fa_lq_usp_fa_lp_it_ln_list_tmp, 'ccod_lp');
	f_load_select_array(fc_frm_dt_1, 'lp', 'ccod_lp', 'cdsc_lp', fa_lq_usp_fa_lp_it_ln_list_tmp, true, fc_it_ccod_lp);

	$(Obj_Col(fc_frm_dt_1, 'nimp_n')).val(fn_it_nimp_n).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_d')).val(fn_it_nimp_d).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_i')).val(fn_it_nimp_i).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_t')).val(fn_it_nimp_t).trigger('change');

	$(Obj_Col(fc_frm_dt_1, 'cglosa')).val(fc_it_cglosa);
	mb_bloquear_process = false;

	// Agrega filas de impuestos del it por tipo de monedas del item a actualizar
	var pa_columns = ['ccod_it', 'nid_it'];
	var pa_values = [fc_it_ccod_it, fn_it_nid_it];
	fa_fa_fa_it_imp_tt_tmp = fnc_Array_Filtrar_por_columnas(fa_fa_fa_it_imp_tt, pa_columns, pa_values);

	fb_grid_insert = false;
	
	$("#frm_grid_it_c_nsaldo").css('display', fc_it_ctipo_it === 'B' ? 'block' : 'none');

	fnc_frm_objs_validar('frm_grid_it','');

	$(Obj_lnk('', '_lnk_grid_it_aceptar')).html('Modificar');
	$('#mdl_grid_it').modal('open');
};

$(Obj_Col(fc_frm_dt_1, 'um', 'select')).change(function() {
	fnc_it_s_um_change();
});
$(Obj_Col(fc_frm_dt_1, 'lp', 'select')).change(function() {
	fnc_it_s_lp_change();
});

$(Obj_Col(fc_frm_dt_1, 'ncant', 'input')).on("change keyup", function() {
	fnc_it_calcular_importes();
});

$(Obj_Col(fc_frm_dt_1, 'nimp_u', 'input')).on("change keyup", function() {
	if (mb_EntFAC_modificar_precio_venta === true) {fnc_it_calcular_importes();}
});

function fnc_it_s_um_change() {
	if (mb_bloquear_process === true) {return;}
	
	// Parametros it
	fc_it_ccod_um = $(Obj_Col(fc_frm_dt_1, 'um')).find(":selected").val();
	fc_it_cdsc_um = $(Obj_Col(fc_frm_dt_1, 'um')).find(":selected").text();
	if (fc_it_ccod_um === '') {return;}

	// Obtener saldo
	var pc_url = '/home/slq_usp_Get_al_it_um_saldo?p_ccod_emp=' + gc_ccod_emp + '&p_ccod_eje=' + gc_ccod_eje + '&p_ccod_per=' + gc_ccod_per + '&p_ccod_uop=' + gc_ccod_uop + '&p_ccod_it=' + fc_it_ccod_it + '&p_ccod_um=' + fc_it_ccod_um;
	fn_it_nsaldo = fnc_ajax_extraer_dato(pc_url, 'nsaldo');
	//fc_it_nsaldo_ccod_um = fc_it_ccod_um;
	
	$(Obj_Col(fc_frm_dt_1, 'nsaldo')).val(fn_it_nsaldo).trigger('change');

	// Listas de precios
	fa_lq_usp_fa_lp_it_ln_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_lp_it_ln_list, ['ccod_it', 'ccod_um'], [fc_it_ccod_it, fc_it_ccod_um]);
	//fa_lq_usp_fa_lp_it_ln_list_tmp = fnc_Array_sortByKeyAsc(fa_lq_usp_fa_lp_it_ln_list_tmp, 'ccod_lp');
	f_load_select_array(fc_frm_dt_1, 'lp', 'ccod_lp', 'cdsc_lp', fa_lq_usp_fa_lp_it_ln_list_tmp, true, '');
	 
};

function fnc_it_s_lp_change() {
	if (mb_bloquear_process === true) {return;}
	
	// Parametros it
	fc_it_ccod_lp = $(Obj_Col(fc_frm_dt_1, 'lp')).find(":selected").val();
	fc_it_cdsc_lp = $(Obj_Col(fc_frm_dt_1, 'lp')).find(":selected").text();

	// Obtener importe desde 'Lista de Precio'
	fa_lq_usp_fa_lp_it_ln_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_lp_it_ln_list, ['ccod_it', 'ccod_um', 'ccod_lp'], [fc_it_ccod_it, fc_it_ccod_um, fc_it_ccod_lp]);
	fn_it_nimp_u = f_a_data(fa_lq_usp_fa_lp_it_ln_list_tmp, ['nprecio']);

	if (fn_it_nimp_u === '') {
		f_msj('¡No existe lista(s) de precio definida para el item!','','e','bottomRight','');
		fn_it_nimp_u = 0;
		$(Obj_Col(fc_frm_dt_1, 'nimp_u')).val('');
	}
	else {
		if (fc_cb_ccod_mon !== gc_ccod_mon_nac) {fn_it_nimp_u = fn_it_nimp_u / fn_cb_ccod_mon_tpc;}
		fn_it_nimp_u = fnc_redondear_importe(fn_it_nimp_u);
		$(Obj_Col(fc_frm_dt_1, 'nimp_u')).val(fn_it_nimp_u).trigger('change');
	}
	fnc_it_calcular_importes();
};

function fnc_it_calcular_importes () {
	if (mb_bloquear_process === true) {return;}

	/* ...::: Asignar Valores it :::... */
	if (mb_EntFAC_modificar_precio_venta === true) {
		fn_it_nimp_u = fnc_redondear_importe($(Obj_Col(fc_frm_dt_1, 'nimp_u')).val());
	}
	fn_it_ncant = fnc_redondear_saldo_inventario($(Obj_Col(fc_frm_dt_1, 'ncant')).val());

	/* ...::: Asignar Valores it_tt :::... */
	fn_it_nimp_n = 0;
	fn_it_nimp_d = 0;
	fn_it_nimp_i = 0;
	fn_it_nimp_t = 0;

	if (mb_EntFAC_precio_incluye_impuestos === true) {
	
		var pn_it_nid_it_imp = $('#grid_imp').DataTable().data().count() + 1;
		fn_it_nimp_t = fnc_redondear_importe(fn_it_ncant * fn_it_nimp_u);
		
		/******************************** IMPUESTOS DEL ITEM - INICIO ********************************/
		fa_fa_fa_it_imp_tt_tmp = [];
		// Variables: Factores del impuesto
		var pn_imp_porc = 0;
		var pn_imp_f1 = 0;
		var pn_imp_f2 = 0;
		// Variables: Importe del impuesto
		var pn_it_imp = 0;

		// Array impuestos
		fa_lq_usp_al_it_imp_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_imp_list, ['ccod_it', 'cest'], [fc_it_ccod_it, fc_ct_cest_Activo]);
		//fa_lq_usp_al_it_imp_list_tmp = fnc_Array_sortByKeyAsc(fa_lq_usp_al_it_imp_list_tmp, 'nid_um'); //Traer el identificador que numera
		$.each(fa_lq_usp_al_it_imp_list_tmp, function (i, option) {
			// Factores del impuesto
			pn_imp_porc = parseFloat(option.ntasa_imp); // 18
			pn_imp_f1 = (100 + pn_imp_porc) / 100; // 1.18
			pn_imp_f2 = pn_imp_porc / 100; // 0.18

			// Importe del impuesto - moneda del documento
			pn_it_imp = (fn_it_nimp_t / pn_imp_f1) * pn_imp_f2;
			fn_it_nimp_i = fn_it_nimp_i + pn_it_imp;

			/******************************** IMPUESTO DEL ITEM POR TIPOS DE MONEDA- INICIO ********************************/
			// Variables Tipo de Cambio
			var pc_ccod_mon_tpc = '';
			var pn_ntpc = 0;
			// Variables Moneda Nacional
			var pn_it_imp_nac = 0;
			
			// Insertar Valores de Moneda Cabecera
			fa_fa_fa_it_imp_tt_tmp.push(
										{
											'ccod_doc': '',
											'ccod_ser': '',
											'cdoc_nro': '',
											'ccod_it': fc_it_ccod_it,
											'nid_it': fn_it_nid_it,
											'nid_imp': fnc_formatear_enumerador(pn_it_nid_it_imp),
											'ccod_imp': option.ccod_imp,
											'cdsc_imp': option.cdsc_imp,
											'ntasa_imp': fnc_formatear_importe(option.ntasa_imp),
											'ccod_mon': fc_cb_ccod_mon,
											'ncam': fn_it_ncam,
											'cdsc_mon': '',
											'cabr_mon': '',
											'csim_mon': '',
											'nimp_imp': fnc_formatear_importe(pn_it_imp),
											'ctip': 'Impuestos'
										}
									);

			// fer_mon
			pn_it_imp_nac = pn_it_imp * parseFloat(fnc_obtener_tpc_moneda_cabecera(fc_cb_ccod_mon, fa_slq_usp_Get_em_mon_tpc_ln));

			// Insertar Valores de Moneda(s) distinta(s) a la Moneda del Documento
			for (var t = 0; t < fa_slq_usp_Get_em_mon_tpc_ln.length; t++) {
				pc_ccod_mon_tpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ccod_mon;
				pn_ntpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ntc_c;

				if (pc_ccod_mon_tpc === fc_cb_ccod_mon)
				{
					pc_ccod_mon_tpc = gc_ccod_mon_nac;
					pn_it_imp = pn_it_imp_nac;
				}
				else {
					pn_it_imp = pn_it_imp_nac / pn_ntpc;
				}
				
				fa_fa_fa_it_imp_tt_tmp.push(
											{
												'ccod_doc': '',
												'ccod_ser': '',
												'cdoc_nro': '',
												'ccod_it': fc_it_ccod_it,
												'nid_it': fn_it_nid_it,
												'nid_imp': fnc_formatear_enumerador(pn_it_nid_it_imp),
												'ccod_imp': option.ccod_imp,
												'cdsc_imp': option.cdsc_imp,
												'ntasa_imp': fnc_formatear_importe(option.ntasa_imp),
												'ccod_mon': pc_ccod_mon_tpc,
												'ncam': pn_ntpc,
												'cdsc_mon': '',
												'cabr_mon': '',
												'csim_mon': '',
												'nimp_imp': fnc_formatear_importe(pn_it_imp),
												'ctip': 'Impuestos'
											}
										);
			}
			/******************************** IMPUESTO DEL ITEM POR TIPOS DE MONEDA- FIN ********************************/
		});
		/******************************** IMPUESTOS DEL ITEM - FIN ********************************/
		fn_it_nimp_n = fn_it_nimp_t - fn_it_nimp_i;
	}
	
	// Redondeo de importes - Validar
	fn_it_nimp_n = fnc_redondear_importe(fn_it_nimp_n);
	fn_it_nimp_d = fnc_redondear_importe(fn_it_nimp_d);
	fn_it_nimp_i = fnc_redondear_importe(fn_it_nimp_i);
	fn_it_nimp_t = fnc_redondear_importe(fn_it_nimp_t);

	// Muestra de importes
	$(Obj_Col(fc_frm_dt_1, 'nimp_n')).val(fn_it_nimp_n).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_d')).val(fn_it_nimp_d).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_i')).val(fn_it_nimp_i).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_t')).val(fn_it_nimp_t).trigger('change');
};

function fnc_grid_it_row_delete(pi_row_data) {

	// Eliminamos filas de del it
	var pa_columns = ['ccod_it', 'nid_it'];
	var pa_values = [pi_row_data.ccod_it, pi_row_data.nid_it];
	fa_fa_fa_it = fnc_Array_Eliminar_por_columnas(fa_fa_fa_it, pa_columns, pa_values);
	fa_fa_fa_it_imp_tt = fnc_Array_Eliminar_por_columnas(fa_fa_fa_it_imp_tt, pa_columns, pa_values);

	fnc_grid_it_enumerar('E');

	fnc_load_grid_it_x_cod_mon(fc_cb_ccod_mon);

	fnc_cb_calcular_importes();

	return true;

	/*
	var toastHTML = '<span>Se ha eliminado un item</span><button class="btn-flat toast-action">Deshacer</button>';
	M.toast({html: toastHTML});
	*/
	
	iziToast.show({
		timeout: 7000,
		position: 'bottomRight',
		messageColor: '#fff',
		displayMode: false,
		//zindex: 777,
		backgroundColor: '#323232',
		title: '',
		
		//message: 'Se ha eliminado un item',
		message: pi_row_data.cdsc_it,
		
		transitionIn: 'bounceInUp',
		buttons: [
	        ['<div class="lbl_undo">Deshacer</div>', function (instance, toast) {
	            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
	        }],
	    ],
		/*
	    onClosing: function(instance, toast, closedBy){
	        console.info('Closing | closedBy: ' + closedBy);
	    },
	    onClosed: function(instance, toast, closedBy){
	        console.info('Closed | closedBy: ' + closedBy);
	    }
		*/
	});
	
};

function fnc_grid_it_aceptar() {
	// Validaciones
	if (!(fnc_validar_numero_mayor_a_cero(fc_frm_dt_1, 'ncant', '¡ingrese cantidad!'))) {return;}

	// Entorno
	if (mb_EntFAC_permitir_precio_venta_cero === false) {
		if (!(fnc_validar_numero_mayor_a_cero(fc_frm_dt_1, 'nimp_u', '¡ingrese precio!'))) {return;}
	}
	else if (mb_EntFAC_permitir_precio_venta_cero === true) {
		if (!(fnc_validar_numero_mayor_a_NaN(fc_frm_dt_1, 'nimp_u', '¡ingrese precio!'))) {return;}
	}

	// Parametros it (Bien - Servicio)
	fc_it_cglosa = $(Obj_Col(fc_frm_dt_1, 'cglosa')).val();

	// Obtener detalles de la UM Seleccionada - Parametros it (Bien - Servicio)
	fa_lq_usp_al_it_um_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_um_list, ['ccod_it', 'ccod_um'], [fc_it_ccod_it, fc_it_ccod_um]);
	fc_it_cabr_um = f_a_data(fa_lq_usp_al_it_um_list_tmp, ['cabr_um']);

	var pc_msj = '¡artículo';
	if (fc_it_ctipo_it === 'S') {pc_msj = '¡servicio';}
	if (fb_grid_insert === true) {pc_msj += ' agregado!';} else {pc_msj += ' modificado!';}

	fnc_grid_it_insert();

	fnc_cb_calcular_importes();
	
	f_msj(pc_msj, '', 's', 'bottomRight', '');

	$('#mdl_grid_it').modal('close');
};

function fnc_grid_it_insert() {

	// Eliminamos filas de del it
	var pa_columns = ['ccod_it', 'nid_it'];
	var pa_values = [fc_it_ccod_it, fn_it_nid_it];
	fa_fa_fa_it = fnc_Array_Eliminar_por_columnas(fa_fa_fa_it, pa_columns, pa_values);
	fa_fa_fa_it_imp_tt = fnc_Array_Eliminar_por_columnas(fa_fa_fa_it_imp_tt, pa_columns, pa_values);

	// Variables Tipo de Cambio
	var pc_ccod_mon_tpc = '';
	var pn_ntpc = 0;
	// Variables Moneda Nacional
	var ld_nimp_u_nac = 0;
	var ld_nimp_n_nac = 0;
	var ld_nimp_d_nac = 0;
	var ld_nimp_i_nac = 0;
	var ld_nimp_t_nac = 0;
	// Variables Moneda comodin
	var ld_nimp_u = 0;
	var ld_nimp_n = 0;
	var ld_nimp_d = 0;
	var ld_nimp_i = 0;
	var ld_nimp_t = 0;
	
	// Insertar Valores de Moneda Documento
	f_da_fa_fa_it_ln_ADD(
						fc_cb_ccod_mon,
						fn_it_ncam,
						fn_it_nimp_u,
						fn_it_nimp_n,
						fn_it_nimp_i,
						fn_it_nimp_d,
						fn_it_nimp_t
						);
	//fer_mon
	pn_ntpc = parseFloat(fnc_obtener_tpc_moneda_cabecera(fc_cb_ccod_mon, fa_slq_usp_Get_em_mon_tpc_ln));

	ld_nimp_u_nac = fn_it_nimp_u * pn_ntpc;
	ld_nimp_n_nac = fn_it_nimp_n * pn_ntpc;
	ld_nimp_i_nac = fn_it_nimp_i * pn_ntpc;
	ld_nimp_d_nac = fn_it_nimp_d * pn_ntpc;
	ld_nimp_t_nac = fn_it_nimp_t * pn_ntpc;

	// Insertar Valores de Moneda(s) distinta(s) a la Moneda del Documento
	for (var t = 0; t < fa_slq_usp_Get_em_mon_tpc_ln.length; t++) {
		pc_ccod_mon_tpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ccod_mon;
		pn_ntpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ntc_c;
				
		if (pc_ccod_mon_tpc === fc_cb_ccod_mon)
		{
			pc_ccod_mon_tpc = gc_ccod_mon_nac;
			
			ld_nimp_u = ld_nimp_u_nac;
			ld_nimp_n = ld_nimp_n_nac;
			ld_nimp_d = ld_nimp_d_nac;
			ld_nimp_i = ld_nimp_i_nac;
			ld_nimp_t = ld_nimp_t_nac;
		}
		else {
			ld_nimp_u = ld_nimp_u_nac / pn_ntpc;
			ld_nimp_n = ld_nimp_n_nac / pn_ntpc;
			ld_nimp_d = ld_nimp_d_nac / pn_ntpc;
			ld_nimp_i = ld_nimp_i_nac / pn_ntpc;
			ld_nimp_t = ld_nimp_t_nac / pn_ntpc;
		}

		f_da_fa_fa_it_ln_ADD(
							pc_ccod_mon_tpc,
							pn_ntpc,
							ld_nimp_u,
							ld_nimp_n,
							ld_nimp_i,
							ld_nimp_d,
							ld_nimp_t
							);
	}

	// Insertamos impuestos del it
	Array.prototype.push.apply(fa_fa_fa_it_imp_tt, fa_fa_fa_it_imp_tt_tmp);

	if (fb_grid_insert === true) {fnc_grid_it_enumerar('I');}

	fnc_load_grid_it_x_cod_mon(fc_cb_ccod_mon);
};

function fnc_grid_it_enumerar(ic_tipo) {

	// Obtenemos un registro por it
	var fa_fa_fa_it_tmp = [];
	for (var b = 0; b < fa_fa_fa_it.length; b++) {
		if (fa_fa_fa_it[b].ccod_mon_lt === gc_ccod_mon_nac) {
			fa_fa_fa_it_tmp.push({
								'nid_it': fa_fa_fa_it[b].nid_it,
								'ccod_it': fa_fa_fa_it[b].ccod_it,
								'ctipo_it': fa_fa_fa_it[b].ctipo_it,
								'ccod_mon_lt': fa_fa_fa_it[b].ccod_mon_lt
								});
		}
	}
	fa_fa_fa_it_tmp = fnc_Array_sortByKeyAsc(fa_fa_fa_it_tmp, 'ctipo_it');

	// Proceso de enumeracion
	var i = 0;
	var pn_factor = 0;
	var pb_while = true;

	if (ic_tipo === 'I') {
		i = fa_fa_fa_it_tmp.length - 1;
		pn_factor = -1;
	}
	else if (ic_tipo === 'E') {
		i = 0;
		pn_factor = 1;
	}

	while (pb_while === true) {
		// it
		for (var b = 0; b < fa_fa_fa_it.length; b++) {
			if (fa_fa_fa_it[b].nid_it === fa_fa_fa_it_tmp[i].nid_it && fa_fa_fa_it[b].ccod_it === fa_fa_fa_it_tmp[i].ccod_it) {
				if (fa_fa_fa_it[b].nid_it === fn_it_nid_it && fa_fa_fa_it[b].ccod_it === fc_it_ccod_it) {fn_it_nid_it = i + 1;}
				fa_fa_fa_it[b].nid_it = i + 1;
			}
		}
		// Impuestos it
		for (var c = 0; c < fa_fa_fa_it_imp_tt.length; c++) {
			if (fa_fa_fa_it_imp_tt[c].nid_it === fa_fa_fa_it_tmp[i].nid_it && fa_fa_fa_it_imp_tt[c].ccod_it === fa_fa_fa_it_tmp[i].ccod_it) {
				fa_fa_fa_it_imp_tt[c].nid_it = i + 1;
			}
		}
		// Controlador de bucle
		i += pn_factor;
		if (ic_tipo === 'I') {
			if (i < 0) {pb_while = false;}
		}
		else if (ic_tipo === 'E') {
			if (i >= fa_fa_fa_it_tmp.length) {pb_while = false;}
		}
	}
};

function f_da_fa_fa_it_ln_ADD(
								pi_ccod_mon_lt,
								pi_ncam,
								pi_nimp_u,
								pi_nimp_n,
								pi_nimp_i,
								pi_nimp_d,
								pi_nimp_t
							 )
{
	fa_fa_fa_it.push(
						{
							// <!-- Vw -->
							"nid_it": fn_it_nid_it,
							"ccod_it": fc_it_ccod_it,
							"cdsc_it": fc_it_cdsc_it,
							"cabr_um": fc_it_cabr_um,
							"nimp_u": fnc_redondear_importe(pi_nimp_u),
							"ncant": fn_it_ncant,
							"nimp_t": fnc_redondear_importe(pi_nimp_t),
							// <!-- it -->
							"ctipo_it": fc_it_ctipo_it,
							"ctipo_it_dsc": fc_it_ctipo_it_dsc,
							"ccod_um": fc_it_ccod_um,
							"cdsc_um": fc_it_cdsc_um,
							"ccod_lp": fc_it_ccod_lp,
							"cdsc_lp": fc_it_cdsc_lp,
							"cglosa": fc_it_cglosa,
							// <!-- tt -->
							"ccod_mon_lt": pi_ccod_mon_lt,
							"ncam": fn_redondear_tpc(pi_ncam),
							"nimp_n": fnc_redondear_importe(pi_nimp_n),
							"nimp_i": fnc_redondear_importe(pi_nimp_i),
							"nimp_d": fnc_redondear_importe(pi_nimp_d),
							// <!-- Opts -->
							"": jc_grid_row_opts_n
						}
					);
};

function fnc_grid_al_it_saldo_row_click (ir_row_data) {
	$('[data-lnk="_lnk_saldos"]').removeClass('display_none');
};

function fnc_grid_al_it_saldo_row_dblclick (ir_row_data) {
	fnc_add_grid_al_it_saldo();
};
function fnc_grid_al_it_srv_row_dblclick (ir_row_data) {
	fnc_add_grid_al_it_srv();
};

// ======================================================================================================================================
// ============================================================= Moneda - Inicio ========================================================
// ======================================================================================================================================

function fnc_get_tpc_fecha(ic_fecha)
{
	var pc_url = '/home/slq_usp_Get_em_mon_tpc_ln/?ic_ccod_emp=' + gc_ccod_emp + '&ic_dfch_tpc=' + ic_fecha;
	return f_eject_ajax(pc_url, ['All'], []);
};

function fnc_get_tpc_registro() {
	var fa_lq_usp_fa_fa_it_list_tpc = fnc_Array_Filtrar_por_columnas(
																		fa_lq_usp_fa_fa_it_list,
																		['ccod_fa', 'ccod_mon_lt'],
																		[fr_row_data_cb.ccod_fa, fr_row_data_cb.ccod_mon],
																		['=', '<>']
																	);
		fa_lq_usp_fa_fa_it_list_tpc = fnc_Array_EliminarDuplicados(fa_lq_usp_fa_fa_it_list_tpc, 'ccod_mon_lt');
		fa_lq_usp_fa_fa_it_list_tpc = fnc_Array_to_Array_for_Columns(
																		fa_lq_usp_fa_fa_it_list_tpc,
																		['ccod_mon_lt, ccod_mon', 'cdsc_mon', 'ncam, ntc_c', 'ntc_v=', 'cabr_mon', 'csim_mon', 'group_=Monedas'],
																		''
																	);
		//fa_fa_fa_imp_tt = fnc_Array_sortByKeyAsc(fa_lq_usp_fa_fa_it_list_tpc, 'nid_imp');
		
	return fa_lq_usp_fa_fa_it_list_tpc;
};

function fnc_open_modal_tpc () {
	var pc_tipo = fnc_definir_tipo_origen();

	if (pc_tipo === 'form') {
		if (fb_cb_mon_tpc_modificado === false)
		{
			var pc_dfch_emi = String($(Obj_Col(fc_frm_cb, 'dfch_emi')).val());
			pc_dfch_emi = pc_dfch_emi.substring(0, 10);
			
			var pc_url = '/home/slq_usp_Get_em_mon_tpc_ln/?ic_ccod_emp=' + gc_ccod_emp + '&ic_dfch_tpc=' + pc_dfch_emi;
			fa_slq_usp_Get_em_mon_tpc_ln = f_eject_ajax(pc_url, ['All'], []);
			fnc_DataTable_fnAddData_to_array('grid_mon_tpc', fa_slq_usp_Get_em_mon_tpc_ln);
		}
	}
	else if (pc_tipo === 'bd') {
		fnc_DataTable_fnAddData_to_array('grid_mon_tpc', fnc_get_tpc_registro());
	}

	$('#mdl_grid_mon_tpc').modal('open');
	fnc_set_focus('', 'i_filter_grid_mon_tpc');
};

function fnc_load_grid_it_x_modificacion_tpc() {
	if (fa_fa_fa_it.length == 0) {return;}

	fnc_it_recalcular_importes();
	fnc_it_recalcular_importes_impuestos();

	// Obtener tpc de moneda cabecera si fuera diferente a la moneda nacional
	// fn_cb_ccod_mon_tpc = parseFloat(fnc_obtener_tpc_moneda_cabecera(fc_cb_ccod_mon, fnc_obtener_lista_de_tipos_de_cambio()));
	fn_cb_ccod_mon_tpc = parseFloat(fnc_obtener_tpc_moneda_cabecera(fc_cb_ccod_mon, fa_slq_usp_Get_em_mon_tpc_ln));
	
	fnc_cb_calcular_importes();
};

// ================================================================================================================================
// ================================================================================================================================

function fnc_it_recalcular_importes() {

	// Filtramos array con la moneda nacional
	var fa_fa_fa_it_tmp = fa_fa_fa_it.filter(function (row) {return row.ccod_mon_lt === gc_ccod_mon_nac;});	

	fa_fa_fa_it = [];

	// fer_mon
	//var pa_mon_tpcs = fnc_obtener_lista_de_tipos_de_cambio();

	for (var i = 0; i < fa_fa_fa_it_tmp.length; i++) {
		// View
		fn_it_nid_it = fa_fa_fa_it_tmp[i].nid_it;
		fc_it_ccod_it = fa_fa_fa_it_tmp[i].ccod_it;
		fc_it_cdsc_it = fa_fa_fa_it_tmp[i].cdsc_it;
		fc_it_cabr_um = fa_fa_fa_it_tmp[i].cabr_um;
		fn_it_ncant = fa_fa_fa_it_tmp[i].ncant;
		// Item
		fc_it_ctipo_it = fa_fa_fa_it_tmp[i].ctipo_it;
		fc_it_ctipo_it_dsc = fa_fa_fa_it_tmp[i].ctipo_it_dsc;
		fc_it_ccod_um = fa_fa_fa_it_tmp[i].ccod_um;
		fc_it_cdsc_um = fa_fa_fa_it_tmp[i].cdsc_um;
		fc_it_ccod_lp = fa_fa_fa_it_tmp[i].ccod_lp;
		fc_it_cdsc_lp = fa_fa_fa_it_tmp[i].cdsc_lp;
		fc_it_cglosa = fa_fa_fa_it_tmp[i].cglosa;

		var pc_ccod_mon_tpc = '';
		var pn_ntpc = 0;

		var ld_nimp_u_nac = fa_fa_fa_it_tmp[i].nimp_u;
		var ld_nimp_n_nac = fa_fa_fa_it_tmp[i].nimp_n;
		var ld_nimp_i_nac = fa_fa_fa_it_tmp[i].nimp_i;
		var ld_nimp_d_nac = fa_fa_fa_it_tmp[i].nimp_d;
		var ld_nimp_t_nac = fa_fa_fa_it_tmp[i].nimp_t;

		var ld_nimp_u = 0;
		var ld_nimp_n = 0;
		var ld_nimp_i = 0;
		var ld_nimp_d = 0;
		var ld_nimp_t = 0;

		for (var t = 0; t < fa_slq_usp_Get_em_mon_tpc_ln.length; t++) {
			pc_ccod_mon_tpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ccod_mon;
			pn_ntpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ntc_c;

			ld_nimp_u = ld_nimp_u_nac / pn_ntpc;
			ld_nimp_n = ld_nimp_n_nac / pn_ntpc;
			ld_nimp_i = ld_nimp_i_nac / pn_ntpc;
			ld_nimp_d = ld_nimp_d_nac / pn_ntpc;
			ld_nimp_t = ld_nimp_t_nac / pn_ntpc;

			f_da_fa_fa_it_ln_ADD(
								// tt
								pc_ccod_mon_tpc,
								pn_ntpc,
								ld_nimp_u,
								ld_nimp_n,
								ld_nimp_i,
								ld_nimp_d,
								ld_nimp_t
								);
		}

	}
	Array.prototype.push.apply(fa_fa_fa_it, fa_fa_fa_it_tmp);
	fnc_load_grid_it_x_cod_mon(fc_cb_ccod_mon);
};

function fnc_it_recalcular_importes_impuestos() {

	// Filtramos array con la moneda nacional
	fa_fa_fa_it_imp_tt_tmp = [];
	fa_fa_fa_it_imp_tt_tmp = fa_fa_fa_it_imp_tt.filter(function (row) {return row.ccod_mon === gc_ccod_mon_nac;});
	
	fa_fa_fa_it_imp_tt = [];

	//var pa_mon_tpcs = fnc_obtener_lista_de_tipos_de_cambio();

	var pc_ctip = '';
	var pc_ccod_it = '';
	var pn_nid_it = 0;
	var pc_ccod_imp = '';
	var pc_ccod_mon = '';
	var pn_ncam = 0;
	var pn_nid_imp = 0;
	var pn_ntasa_imp = 0;
	var pn_nimp_imp = 0;
	var pc_cdsc_imp = '';

	for (var i = 0; i < fa_fa_fa_it_imp_tt_tmp.length; i++) {
		
		// Valores del impuesto
		pc_ctip = fa_fa_fa_it_imp_tt_tmp[i].ctip;
		pc_ccod_it = fa_fa_fa_it_imp_tt_tmp[i].ccod_it;
		pn_nid_it = fa_fa_fa_it_imp_tt_tmp[i].nid_it;
		pc_ccod_imp = fa_fa_fa_it_imp_tt_tmp[i].ccod_imp;
		pc_ccod_mon = fa_fa_fa_it_imp_tt_tmp[i].ccod_mon;
		pn_ncam = fa_fa_fa_it_imp_tt_tmp[i].ncam;
		pn_nid_imp = fa_fa_fa_it_imp_tt_tmp[i].nid_imp;
		pn_ntasa_imp = fa_fa_fa_it_imp_tt_tmp[i].ntasa_imp;
		pc_cdsc_imp = fa_fa_fa_it_imp_tt_tmp[i].cdsc_imp;

		var pc_ccod_mon_tpc = '';
		var pn_ntpc = 0;

		var pn_nimp_imp_nac = fa_fa_fa_it_imp_tt_tmp[i].nimp_imp;

		var pn_nimp_imp = 0;

		for (var t = 0; t < fa_slq_usp_Get_em_mon_tpc_ln.length; t++) {
			pc_ccod_mon_tpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ccod_mon;
			pn_ntpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ntc_c;

			pn_nimp_imp = pn_nimp_imp_nac / pn_ntpc;

			fa_fa_fa_it_imp_tt.push(
										{
											'ccod_doc': '',
											'ccod_ser': '',
											'cdoc_nro': '',
											'ccod_it': pc_ccod_it,
											'nid_it': pn_nid_it,
											'nid_imp': fnc_formatear_enumerador(pn_nid_imp),
											'ccod_imp': pc_ccod_imp,
											'cdsc_imp': pc_cdsc_imp,
											'ntasa_imp': fnc_formatear_importe(pn_ntasa_imp),
											'ccod_mon': pc_ccod_mon_tpc,
											'ncam': pn_ntpc,
											'cdsc_mon': '',
											'cabr_mon': '',
											'csim_mon': '',
											'nimp_imp': fnc_formatear_importe(pn_nimp_imp),
											'ctip': pc_ctip
										}
									);
		}

	}
	Array.prototype.push.apply(fa_fa_fa_it_imp_tt, fa_fa_fa_it_imp_tt_tmp);
};

// ================================================================================================================================
// ================================================================================================================================

function fnc_load_grid_it_x_cod_mon(pi_ccod_mon) {
	if (fa_fa_fa_it.length == 0) {return;}
	
	// Ordenamos array
	fa_fa_fa_it = fnc_Array_sortByKeyAsc(fa_fa_fa_it, 'nid_it');

	// Filtramos array con la moneda de la cabecera
	var da_fa_fa_it_x_cod_mon = fa_fa_fa_it.filter(function (row) {return row.ccod_mon_lt === pi_ccod_mon;});
	
	// Cargamos Datatable con los valores filtrados
	$('#grid_it').dataTable().fnClearTable();
	$('#grid_it').dataTable().fnAddData(da_fa_fa_it_x_cod_mon);
	fnc_tables_ejecutar_alternos('grid_it');

	// Columnas y valores para la seleccion del registro insertado o modificado
	ia_columns = ['nid_it', 'ccod_it'];
	ia_values = [fn_it_nid_it, fc_it_ccod_it];
	fnc_grid_seleccionar_x_valores('grid_it');

	fnc_cb_tt_view();
};

// ======================================================================================================================================
// ========================================================= Grid Impuestos - Inicio ====================================================
// ======================================================================================================================================

function fnc_open_modal_tt() {
	$('#mdl_tt').modal('open');
};

function fnc_open_modal_imp() {

	if (jc_est_form === 'v') {
		if (fr_row_data_cb === undefined) {return;}

		fa_fa_fa_imp_tt = fnc_Array_Filtrar_por_columnas(fa_lq_usp_fa_fa_imp_list, ['ccod_fa', 'ccod_mon', 'nid_it'], [fr_row_data_cb.ccod_fa, fr_row_data_cb.ccod_mon, '0']);
		fa_fa_fa_imp_tt = fnc_Array_sortByKeyAsc(fa_fa_fa_imp_tt, 'nid_imp');
		fnc_DataTable_fnAddData_to_array('grid_imp', fa_fa_fa_imp_tt);
		if (fa_fa_fa_imp_tt.length > 0) {$('#mdl_grid_imp').modal('open');}
	}
	else {
		fnc_load_grid_imp_x_cod_mon(fc_cb_ccod_mon);		
	}

};

function fnc_load_grid_it_imp_it_x_cod_mon(ic_ccod_mon) {
	if (fa_fa_fa_it_imp_tt_tmp.length == 0) {return;}
	
	// Filtramos array con la moneda de la cabecera
	var pa_result = fa_fa_fa_it_imp_tt_tmp.filter(function (row) {return row.ccod_mon === ic_ccod_mon;});
	
	// Cargamos Datatable con los valores filtrados
	fnc_DataTable_fnAddData_to_array('grid_imp', pa_result);
	$('#mdl_grid_imp').modal('open');
};

function fnc_load_grid_imp_x_cod_mon(ic_ccod_mon) {
	if (fa_fa_fa_imp_tt.length == 0) {return;}
		
	// Filtramos array con la moneda de la cabecera
	var pa_result = fa_fa_fa_imp_tt.filter(function (row) {return row.ccod_mon === ic_ccod_mon;});

	// Cargamos Datatable con los valores filtrados
	fnc_DataTable_fnAddData_to_array('grid_imp', pa_result);
	$('#mdl_grid_imp').modal('open');
};

// ======================================================================================================================================
// ============================================================= LINKS ==================================================================
// ======================================================================================================================================

function fnc_open_modal_prs() {
	$('#mdl_grid_em_prs_ct').modal('open');
	fnc_set_focus('', 'i_filter_grid_em_prs_ct');
};
/*
function fnc_mdl_form_main_em_prs_post_finish_load_modal() {
	$("#tab_main_form_main_em_prs").tabs();
	$('[data-lnk="_lnk_registrar_em_prs"]').removeClass('display_none');
};

function fnc_mdl_form_main_em_prs_post_finish_close_modal() {
	$('[data-lnk="_lnk_registrar_em_prs"]').addClass('display_none');
};
*/
function fnc_mdl_grid_em_prs_ct_post_finish_load_modal() {
	$('[data-lnk="_lnk_open_modal_prs1"]').removeClass('display_none');
};

function fnc_mdl_grid_em_prs_ct_post_finish_close_modal() {
	$('[data-lnk="_lnk_open_modal_prs1"]').addClass('display_none');
};

function fnc_open_modal_email() {
	var pb_access = ($('#i_ccod_prs').val() === '' ? false : true);
	if (pb_access === false) {
		f_msj('¡Seleccione un cliente!','','e','bottomLeft','');
		return;
	}

	$('#mdl_email').modal('open');
};

// Descuentos
function fnc_open_modal_dsc() {
};

function fnc_open_modal_it_dsc() {
};

// ======================================================================================================================================
// ============================================================= PERSONA ================================================================
// ======================================================================================================================================

function fnc_add_grid_em_prs_ct() {
	var data = fnc_Get_DataTable_RowData_Selected('grid_em_prs_ct');

	//mb_bloquear_process = true;
	$(Obj_Col(fc_frm_cb, 'ccod_prs')).val(data.ccod_prs).trigger('change');
	$(Obj_Col(fc_frm_cb, 'cdsc_prs')).val(data.cdsc_prs).trigger('change');
	//mb_bloquear_process = false;

	fnc_s_em_dir__load('');
	
	$('#mdl_grid_em_prs_ct').modal('close');
};

function fnc_grid_em_prs_ct_row_dblclick (ir_row_data) {
	fnc_add_grid_em_prs_ct();
};

// validar si se usa o no ::::: Utilizar Proceso despues de registrar un cliente - EN EL FORMULARIO EXTERNO
function fnc_em_dir__load_listas() {
	fnc_table_reload(
					'grid_em_prs_ct',
					'/home/lq_usp_em_prs_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs=' + '&ic_cest=A' + '&ic_cmp_OrderBy=cdsc_prs_tip' + '&ic_load_BD=load_BD',
					''
					);

	f_eject_ajax('/home/lq_usp_em_dir_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccodigo=' + '&in_ccod_dir=0' + '&ic_cest=A' + '&ic_load_BD=load_BD');
};

function fnc_s_em_dir__load(in_ccod_dir) {
	
	var pc_ccod_prs = $(Obj_Col(fc_frm_cb, 'ccod_prs')).val();

	/*
	var pc_ccod_prs = '';
	if (jc_est_form === 'n') {
		pc_ccod_prs = $(Obj_Col(fc_frm_cb, 'ccod_prs')).val();
	}
	else if (jc_est_form === 'e') {
		pc_ccod_prs = fr_row_data_cb.ccod_prs;
	}
	*/

	fc_em_dir__em_prs__ccodigo = gc_prefijo__em_dir__em_prs__ccodigo + $.trim(pc_ccod_prs);
	var pc_url = '/home/lq_usp_em_dir_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccodigo=' + fc_em_dir__em_prs__ccodigo + '&in_ccod_dir=0' + '&ic_cest=A' + '&ic_load_BD=';
	f_load_select_ajax(fc_frm_cb, 'dir', 'ccod_dir', 'cdsc_dir', pc_url, true, in_ccod_dir);
};

function fnc_open_modal_prs1() {
	
	// open_form('http://localhost:48458/Home/Index');
	open_form('/Home/Index');
	return;

	
	//============================================================
	
	//jc_grid_row_opts = jc_grid_row_opts_n;
	
	//jc_est_form = 'n';
	//fnc_hb_usu_opts();
			
	fnc_frm_objs_habilitar(fc_frm_cb_em_prs, 'n');
	//fnc_inputs_cargar_caracteristicas('', ''); //quitado validar si va o no
	
	fnc_child_nuevo_em_prs();

	fnc_frm_objs_validar(fc_frm_cb_em_prs,'');

	//$('.nav_title_sub').html('(Nuevo Registro)');
	
	//============================================================
	
	
	
	$('#mdl_grid_em_prs_ct').modal('close');
	$('#mdl_' + fc_frm_cb_em_prs).modal('open');
};


