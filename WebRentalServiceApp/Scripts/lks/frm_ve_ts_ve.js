/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																VARIABLES DE FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fa_frm_tab = ['Ficha', 'Items'];
var fc_frm_cb = 'form_main';
var fc_frm_dt_1 = 'frm_grid_it';
var fc_frm_anulacion = 'form_anulacion';

var fn_ccod_ve = 0;
var fb_grid_insert = true;
var fn_ts_ve__ct_opve__bafecto_igv = 0;

// Item
var fn_it_nid_it = 0;
var fc_it_ccod_it = '';
var fc_it_cdsc_it = '';
var fn_it_ncant = 0;
var fc_it_ccod_um = '';
var fc_it_cdsc_um = '';
var fc_it_cabr_um = '';
var fc_it_ctipo_it = '';
var fc_it_ctipo_it_dsc = '';
var fc_it_ccod_lp = '';
var fc_it_cdsc_lp = '';
var fc_it_cglosa = '';

// IGV
var fn_it_bexonerado = 0;
var fn_it_bigv = 0;
var fc_it_ccod_imp_igv = '';
/*
var fc_it_cdsc_imp_igv = '';
var fc_it_cabr_imp_igv = '';
*/
var fn_it_ntasa_imp_igv = 0;

// ISC
var fn_it_bisc = 0;
var fc_it_ccod_imp_isc = 0;
/*
var fc_it_cdsc_imp_isc = '';
var fc_it_cabr_imp_isc = '';
*/
var fn_it_ntasa_imp_isc = 0;

// Percepcion
var fn_it_bper = 0;
var fc_it_ccod_imp_per = '';
/*
var fc_it_cdsc_imp_per = '';
var fc_it_cabr_imp_per = '';
*/
var fn_it_ntasa_imp_per = 0;

// Importes
var fn_it_ncam = 0;
var fn_it_nimp_pl_u = 0;
var fn_it_nimp_vp_u = 0;
var fn_it_nimp_pf_u = 0;
var fn_it_nimp_isc_u = 0;
var fn_it_nimp_isc_t = 0;
var fn_it_nimp_igv_u = 0;
var fn_it_nimp_igv_t = 0;
var fn_it_nimp_t_sigv = 0;
var fn_it_nimp_t_cigv = 0;
var fn_it_nimp_in_u = 0;
var fn_it_nimp_in_t = 0;
var fn_it_nimp_ex_u = 0;
var fn_it_nimp_ex_t = 0;
var fn_it_nimp_per_u = 0;
var fn_it_nimp_per_t = 0;
var fn_it_nimp_u_ms = 0;
var fn_it_nimp_n_ms = 0;
var fn_it_nimp_d_ms = 0;
var fn_it_nimp_i_ms = 0;
var fn_it_nimp_t_ms = 0;

var fn_it_nsaldo = 0;
//var fc_it_nsaldo_ccod_um = '';

// Moneda
var fc_cb_ccod_mon = '';
var fn_cb_ccod_mon_tpc = 0; // Valor que se carga cuando la moneda cabecera es distinta a la moneda nacional
var fb_cb_mon_tpc_modificado = false; // true: Este valor se asigna cuando el usuario modifica valores de tipos de cambio de monedas

// Direccion
var gc_prefijo__em_dir__em_prs__ccodigo = 'EM_PRS-'; // Obtener este valor de BD, mediante select
var fc_em_dir__em_prs__ccodigo = '';
var fn_ccod_dir = 0;
// =========================================================





/* ...::: Arrays :::... */
var fa_ve_ts_ve_dt_tt = []; // Totales del documento por tipos de moneda
var fa_ve_ts_ve_dt_it = []; // Detalles de los items incluyendo los totales por tipos de monedas

var fa_lq_usp_ve_ts_ve_dt_it_list = [];

var fa_lq_usp_al_ct_it_dt_um_list = [];
var fa_lq_usp_al_ct_it_dt_um_list_tmp = [];

// Tipos de cambio por fecha
var fa_slq_usp_Get_em_mon_tpc_ln = [];


// Saldo
var fa_lq_usp_al_it_saldo_list = [];


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

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_child_set_menu()
{
	fnc_SET_variables_de_menu('2518');
};

function fnc_child_set_html()
{
};

function fnc_child_ready()
{
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

function fnc_child_objects_load_functions()
{
	// Accesos rapidos
	shortcut.add(fc_shortcuts_search_prs, function () {
		if ($('#mdl_grid_it_seleccion').is(":visible")) {
			if ($('#mdl_grid_al_it_saldo').is(":visible") || $('#mdl_grid_al_it_srv').is(":visible") || $('#mdl_grid_it').is(":visible")) {return;}
			$("[data-lnk='" + fc_shortcuts_search_it_b_link + "']")[0].click();
		}
		else {
			if ($('#mdl_grid_em_ct_prs').is(":visible")) {return;}
			if (fnc_validar_lnk('_lnk_open_modal_prs')) {$('.tabs').tabs('select', 'tab_1');}
			$("[data-lnk='" + fc_shortcuts_search_prs_link + "']")[0].click();
		}
	}, {
		"type": "keydown",
		"propagate": true,
		"target": document
	});

	shortcut.add(fc_shortcuts_search_it_add, function () {
		if ($('#mdl_grid_em_ct_prs').is(":visible")) {return;}

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

/*
fnc_child_cargar_valores_iniciales: Funcion que se maneja solo en el formulario hijo, carga valores una vez, valores constantes en el formulario hijo.
*/
function fnc_child_cargar_valores_iniciales()
{
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
						'grid_em_ct_prs',
						'out',
						'',
						'',
						'', false, false, true, 
						'height_90 width_80 reload_ajax',
						'Seleccionar persona'
						);

	fnc_create_mdl_search(
						'grid_al_it_saldo',
						'out',
						'',
						'',
						'', false, false, true,
						'height_90 width_65 reload_ajax',
						'Seleccionar artículo'
						);

	fnc_create_mdl_search(
						'grid_mon_tpc',
						'out',
						'',
						'', '', false, false, true,
						'height_90 width_50 not_btn_add',
						'Tipo de cambio'
						);
/*
	f_create_html_table(
						'grid_al_it_saldo_x_alm',
						'',
						false, '', '', false, false, true
						);
*/
	f_load_select_ajax(fc_frm_cb, 'alm', 'ccod_uop', 'cdsc_uop', '/home/Get_em_empuop_ln?p_ccod_emp=' + gc_ccod_emp, false, '');
	f_load_select_ajax(fc_frm_cb, 'uop', 'ccod_uop', 'cdsc_uop', '/home/Get_em_empuop_ln?p_ccod_emp=' + gc_ccod_emp, false, '');
	f_load_select_ajax(fc_frm_cb, 'zn', 'ccod_zn', 'cdsc_zn', '/home/lq_usp_ve_ct_zn_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=', false, '');
	f_load_select_ajax(fc_frm_cb, 'cdp', 'ccod_cdp', 'cdsc_cdp', '/home/lq_usp_ve_ct_cdp_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=', false, '');
	f_load_select_ajax(fc_frm_cb, 'opve', 'ccod_opve', 'cdsc_opve', '/home/lq_usp_ve_ct_opve_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_ccod_opve=' + '&ic_load_BD=', false, '');
	//f_load_select_ajax(fc_frm_cb, 'tbj_ven', 'ccod_tbj', 'cdsc_prs', '/home/JR_usp_Get_em_tbj_ct?p_ccod_emp=' + gc_ccod_emp + '&p_cest=' + fc_ct_cest_Activo, false, '');
	//f_load_select_ajax(fc_frm_cb, 'tbj_cob', 'ccod_tbj', 'cdsc_prs', '/home/JR_usp_Get_em_tbj_ct?p_ccod_emp=' + gc_ccod_emp + '&p_cest=' + fc_ct_cest_Activo, false, '');
	
	// CAMBIAR NOMBRE
	// Anulacion
	f_load_select_ajax('form_anulacion', 'tpa', 'ccod_tpa', 'cdsc_tpa', '/home/lq_usp_fa_fe_tpa_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=', false, '');

	var pc_url = '';
	pc_url = '/home/lq_usp_al_ct_it_dt_um_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_it=' + '&ic_ccod_um=' + '&in_row=0' + '&ic_load_BD=';
	fa_lq_usp_al_ct_it_dt_um_list = f_eject_ajax(pc_url, ['All'], []);

};

function fnc_child_cargar_valores_post_proceso()
{
	var pc_url = '/home/lq_usp_ve_ts_ve_dt_it_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_uop=' + gc_ccod_uop + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_ccod_ve=' + '0' + '&ic_ccod_mon=' + '' + '&ic_load_BD=load_BD';
	fa_lq_usp_ve_ts_ve_dt_it_list = f_eject_ajax(pc_url, ['All'], []);

	fnc_SET_lnk_open_modal_tpc__hb(1);
	
	fnc_table_reload(
					'grid_lista',
					'/home/lq_usp_ve_ts_ve_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_load_BD=load_BD',
					'grid_lista'
					);
};

function fnc_objects_load_functions_post_child()
{
	// Entorno
	if (mb_EntFAC_modificar_precio_venta === false)
	{
		fnc_SET_Obj_Attributes(fc_frm_dt_1, 'nimp_lp_u', ['hb_n'], ['n'], false);
	}
	else
	{
		fnc_SET_Obj_Attributes(fc_frm_dt_1, 'nimp_lp_u', ['hb_n'], ['s'], true);
	}
	
	// Entorno
	if (mb_EntFAC_permitir_precio_venta_cero === false)
	{
		$(Obj_Col(fc_frm_dt_1, 'nimp_lp_u')).removeClass('ft_vacio');
		$(Obj_Col(fc_frm_dt_1, 'nimp_lp_u')).addClass('ft_cero_vacio');
	}
	else
	{
		$(Obj_Col(fc_frm_dt_1, 'nimp_lp_u')).removeClass('ft_cero_vacio');
		$(Obj_Col(fc_frm_dt_1, 'nimp_lp_u')).addClass('ft_vacio');
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
		fnc_set_RowData__array_tpc();

		// Actualizar valores por cambio de valor
		fnc_load_grid_it_x_modificacion_tpc();
	});

	$(Obj_Col('', 'i_filter_' + 'grid_al_it_saldo')).on('keyup change', function (event) {
		if (event.which == 13) {return;}
		$('[data-lnk="_lnk_saldos"]').addClass('display_none');
	});

	fnc_tabs_select_tab('tab_main', 'tab_lista');
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES DEL PROCESO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	  GRID LISTA																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

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

function fnc_grid_lista_setear_campos_child_post (row_data)
{
	fr_row_data_cb = row_data;

	$(Obj_Col(fc_frm_cb, 'cdsc_est')).html(fnc_GET_span_proc_est('cdsc_est', row_data.cdsc_est));
	$(Obj_Col(fc_frm_cb, 'cdsc_est_sn')).html(fnc_GET_span_proc_est('cdsc_est_sn', row_data.cdsc_est_sn));
	
	fc_em_dir__em_prs__ccodigo = gc_prefijo__em_dir__em_prs__ccodigo + String(fr_row_data_cb.ccod_prs);
	fn_ccod_dir = fr_row_data_cb.ccod_dir;

	// grid_it
	fa_ve_ts_ve_dt_it = fnc_Array_Filtrar_por_columnas(fa_lq_usp_ve_ts_ve_dt_it_list, ['ccod_ve', 'ccod_mon_lt'], [fr_row_data_cb.ccod_ve, fr_row_data_cb.ccod_mon]);
	fnc_Array_Object_add_column(fa_ve_ts_ve_dt_it, [''], [jc_grid_row_opts_v]);
	fa_ve_ts_ve_dt_it = fnc_Array_sortByKeyAsc(fa_ve_ts_ve_dt_it, 'nid_it');
	fnc_DataTable_fnAddData_to_array('grid_it', fa_ve_ts_ve_dt_it);

	fnc_SET_lnk_open_modal_tpc__hb(2);
};

function fnc_add_grid_lista()
{
	fnc_tabs_select_tab('tab_main', 'tab_1');
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		LINKS																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/



/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	TRANSACCIONES																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_child_nuevo()
{
	fb_cb_mon_tpc_modificado = false;
	$(Obj_lnk('', '_lnk_grid_it_aceptar')).css({ display: 'inline-block' });
	
	fn_ccod_ve = 0;
	fn_ccod_dir = 0;
	fc_em_dir__em_prs__ccodigo = '';
	fa_ve_ts_ve_dt_tt = [];
	fa_ve_ts_ve_dt_it = [];
	
	$(Obj_Col(fc_frm_cb, 'cdsc_est', 'div')).html(fnc_GET_span_proc_est('cdsc_est', 'I:Creación'));
	$(Obj_Col(fc_frm_cb, 'cdsc_est_sn', 'div')).html(fnc_GET_span_proc_est('cdsc_est', 'I:Creación'));
	$(Obj_Col(fc_frm_cb, 'ccod_eje')).val(gc_ccod_eje);
	$(Obj_Col(fc_frm_cb, 'ccod_per')).val(gc_ccod_per);
	
	$(Obj_Col(fc_frm_cb, 'nimp_n_ms')).val('0').trigger('change');
	$(Obj_Col(fc_frm_cb, 'nimp_dsc')).val('0').trigger('change');
	$(Obj_Col(fc_frm_cb, 'nimp_i_ms')).val('0').trigger('change');
	$(Obj_Col(fc_frm_cb, 'nimp_t')).val('0').trigger('change');

	$(Obj_Col(fc_frm_cb, 'dfch_emi')).val(gd_dfch_main);
	$(Obj_Col(fc_frm_cb, 'dfch_venc')).val(gd_dfch_main);
	//fa_slq_usp_Get_em_mon_tpc_ln = fnc_get_tpc_fecha(gd_dfch_main);
	fnc_get_tpc_fecha(gd_dfch_main);
	fnc_set_RowData__array_tpc();
};

function fnc_child_valores_predeterminados()
{
	$(Obj_Col(fc_frm_cb, 'opve')).val('FVES').trigger('change');
	$(Obj_Col(fc_frm_cb, 'alm')).val('100').trigger('change');
	$(Obj_Col(fc_frm_cb, 'uop')).val(gc_ccod_uop).trigger('change');
};

function fnc_child_editar()
{
	fn_ccod_ve = fr_row_data_cb.ccod_ve;
	fc_cb_ccod_mon = fr_row_data_cb.ccod_mon;

	if (fr_row_data_cb.ccod_est === 'C')
	{
		$(Obj_lnk('', '_lnk_grid_it_aceptar')).css({ display: 'none' });
	}
	else if (fr_row_data_cb.ccod_est === 'B')
	{
		// Series
		var pc_ccod_doc = $("input[data-col='ccod_doc']").val();
		pc_url = '/home/JR_usp_Get_fa_doc_ser_ln?p_ccod_emp=' + gc_ccod_emp + '&p_cest=' + fc_ct_cest_Activo + '&p_ccod_doc=' + pc_ccod_doc;
		f_load_select_ajax(fc_frm_cb, '_drt_ccod_ser', 'ccod_ser', 'cdsc_ser', pc_url, false, '');
		$("select[data-col='_drt_ccod_ser']").val(fr_row_data_cb.ccod_ser).trigger('change');

		// Direccion
		fnc_s_em_dir__load(fn_ccod_dir);

		// Items
		var data_col_opts = $('#grid_it').data('col_opts');
		fnShowHide('grid_it', data_col_opts, true);

		fa_ve_ts_ve_dt_it = fnc_Array_Filtrar_por_columnas(fa_lq_usp_ve_ts_ve_dt_it_list, ['ccod_ve'], [fr_row_data_cb.ccod_ve]);
		fa_ve_ts_ve_dt_it = fnc_Array_to_Array_for_Columns(
													fa_ve_ts_ve_dt_it,
													[
													'id_ts_ve_dt_it',
													'nid_it',
													'ccod_it',
													'cdsc_it',
													'ncant',
													'ccod_um',
													'cdsc_um',
													'cabr_um',
													'ctipo_it',
													'ctipo_it_dsc',
													'ccod_lp',
													'cdsc_lp',
													'cglosa',
													'ccod_mon_lt',
													'ncam',
													'nimp_lp_u',
													'nimp_vp_u',
													'nimp_pf_u',
													'nimp_isc_u',
													'nimp_isc_t',
													'nimp_igv_u',
													'nimp_igv_t',
													'nimp_t_sigv',
													'nimp_t_cigv',
													'nimp_in_u',
													'nimp_in_t',
													'nimp_ex_u',
													'nimp_ex_t',
													'nimp_per_u',
													'nimp_per_t',
													'nimp_u_ms',
													'nimp_n_ms',
													'nimp_d_ms',
													'nimp_i_ms',
													'nimp_t_ms'
													],
													jc_grid_row_opts_n
													);
		fnc_load_grid_it_x_cod_mon(fc_cb_ccod_mon);
		fnc_cb_calcular_importes();

		// Tipo de cambio
		if (fa_ve_ts_ve_dt_it.length > 0)
		{
			fb_cb_mon_tpc_modificado = true;
			fa_slq_usp_Get_em_mon_tpc_ln = fnc_get_tpc_registro();
			fnc_DataTable_fnAddData_to_array('grid_mon_tpc', fa_slq_usp_Get_em_mon_tpc_ln);
		}
		else
		{
			fb_cb_mon_tpc_modificado = false;
			//fa_slq_usp_Get_em_mon_tpc_ln = fnc_get_tpc_fecha($(Obj_Col(fc_frm_cb, 'dfch_emi')).val());
			fnc_get_tpc_fecha($(Obj_Col(fc_frm_cb, 'dfch_emi')).val());
		}
		fnc_set_RowData__array_tpc();

		$(Obj_lnk('', '_lnk_grid_it_aceptar')).css({ display: 'inline-block' });
	}
};

function fnc_child_registrar()
{
	var pc_accion = jc_est_form;
	var pc_ccod_est = 'C';
	if (fb_fnc_registrar_borrador === true)
	{
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

	var pc_RowData__ve_ts_ve = fnc_Get_File_Values([
													pc_accion,
													gc_ccod_emp,
													fn_ccod_ve,
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
													$(Obj_Col(fc_frm_cb, 'opve')).find(":selected").val(),
													$(Obj_Col(fc_frm_cb, 'cdp')).find(":selected").val(),
													$(Obj_Col(fc_frm_cb, 'zn')).find(":selected").val(),
													$(Obj_Col(fc_frm_cb, 'tbj_ven')).find(":selected").val(),
													$(Obj_Col(fc_frm_cb, 'tbj_cob')).find(":selected").val(),
													$(Obj_Col(fc_frm_cb, 'cglosa')).val()
													]);

	var pc_RowData__ve_ts_ve_dt_tt = fnc_set_RowData_desde_Array(fa_ve_ts_ve_dt_tt, [
																					'ccod_mon', 'ncam',
																					'nimp_stv', 'nimp_dsc', 'nimp_vvt',
																					'nimp_isc', 'nimp_op_gr', 'nimp_op_in',
																					'nimp_op_ex', 'nimp_igv', 'nimp_icbper',
																					'nimp_ot_ca', 'nimp_ot_tr', 'nimp_ant',
																					'nimp_st', 'nimp_per', 'nimp_ret',
																					'nimp_n_ms', 'nimp_i_ms', 'nimp_t'
																					]);

	var fa_ve_ts_ve_dt_it__x__ccod_mon = fa_ve_ts_ve_dt_it.filter(function (row) {return row.ccod_mon_lt === fc_cb_ccod_mon;});
	var pc_RowData__ve_ts_ve_dt_it = fnc_set_RowData_desde_Array(fa_ve_ts_ve_dt_it__x__ccod_mon, [
																									'ccod_it', 'nid_it', 'ctipo_it',
																									'cdsc_it', '', '',
																									'ccod_um', 'ncant', 'ccod_lp',
																									'cglosa'
																									]);

	var pc_RowData__ve_ts_ve_dt_it_dt_tt = fnc_set_RowData_desde_Array(fa_ve_ts_ve_dt_it, [
																							'ccod_it', 'nid_it', 'ccod_mon_lt', 'ncam',
																							'nimp_lp_u', 'nimp_vp_u', 'nimp_pf_u',
																							'nimp_isc_u', 'nimp_isc_t', 'nimp_igv_u',
																							'nimp_igv_t', 'nimp_t_sigv', 'nimp_t_cigv',
																							'nimp_in_u', 'nimp_in_t', 'nimp_ex_u',
																							'nimp_ex_t', 'nimp_per_u', 'nimp_per_t',
																							'nimp_u_ms', 'nimp_n_ms', 'nimp_d_ms',
																							'nimp_i_ms', 'nimp_t_ms'
																							]);

	var pa_data = [pc_RowData__ve_ts_ve, pc_RowData__ve_ts_ve_dt_tt, pc_RowData__ve_ts_ve_dt_it, pc_RowData__ve_ts_ve_dt_it_dt_tt];
	return [pa_data];
};

function fnc_child_form_objs_verificar_requeridos()
{
	var pb_process_validacion = true;
	var pd_dfch_emi = fnc_GET_Date_to_String($(Obj_Col(fc_frm_cb, 'dfch_emi')).val());
	var pd_dfch_venc = fnc_GET_Date_to_String($(Obj_Col(fc_frm_cb, 'dfch_venc')).val());
	if (pd_dfch_emi > pd_dfch_venc)
	{
		swal(gc_msj_titulo_error, '¡La fecha de vencimiento debe ser igual o mayor a la fecha de emisión!', gc_msj_tipo_error);
		pb_process_validacion = false;
	}

	if (fb_fnc_registrar_borrador === false)
	{
		if (pb_process_validacion === false)
		{
			return false;
		}
		else
		{
			return fnc_form_objs_verificar_requeridos([fc_frm_cb]);
		}
	}
	else {
		return pb_process_validacion;
	}
};

function fnc_child_registrar_select (ir_dataResult)
{
	var pa_result = fnc_GET_ArrayValues_to_RowString(ir_dataResult);
	
	ia_columns = ['ccod_ve'];
	ia_values = [pa_result[0]];
};

function fnc_child_eliminar()
{
	if (fr_row_data_cb.ccod_est === 'C') {
		swal(gc_msj_titulo_error, '¡Para eliminar, primero se debe anular el documento!', gc_msj_tipo_error);
		return [];
	}

	return ['Eliminar', [fnc_Get_File_Values(['d', gc_ccod_emp, fr_row_data_cb.ccod_ve]), '', '', ''], [], []];
};

function fnc_child_eliminar_post()
{
	fnc_child_cargar_valores_post_proceso();
};

function fnc_child_pre_anular()
{
	//f_frm_objs_clear(fc_frm_anulacion);
	
	fnc_frm_objs_habilitar(fc_frm_anulacion, 'n');

	$(Obj_Col(fc_frm_anulacion, 'ccod_doc')).val($(Obj_Col(fc_frm_cb, 'ccod_doc')).val());
	$(Obj_Col(fc_frm_anulacion, 'ccod_ser')).val($(Obj_Col(fc_frm_cb, 'i_s__drt_ccod_ser')).val());
	$(Obj_Col(fc_frm_anulacion, 'cdoc_nro')).val($(Obj_Col(fc_frm_cb, 'cdoc_nro')).val());
	//$(Obj_Col(fc_frm_anulacion, 'tpa')).val(null).trigger("change");
	
	$(Obj_Col(fc_frm_anulacion, 'tpa')).val('002').trigger("change");

	fnc_frm_objs_validar([fc_frm_anulacion]);

	$('#mdl_anulacion').modal('open');
};

function fnc_open_anulacion_temp ()
{
	$('#mdl_anulacion').modal('open');
};

function fnc_mdl_anulacion_aceptar()
{	
	//fnc_frm_objs_validar([fc_frm_anulacion]);
	//return;
	
	if (fnc_form_objs_verificar_requeridos([fc_frm_anulacion])) 
	{
	
		/*
		if ($.trim($(Obj_Col(fc_frm_anulacion, 'tpa')).find(":selected").text()) === '')
		{
			fnc_set_focus(fc_frm_anulacion, 'tpa');
			fnc_mensaje_validacion('Ingrese valor: Tipo de Nota de Crédito');
			return;
		}
		
		if ($.trim($(Obj_Col(fc_frm_anulacion, 'cmotivo_anu')).val()) === '')
		{
			fnc_set_focus(fc_frm_anulacion, 'cmotivo_anu');
			fnc_mensaje_validacion('Ingrese valor: Motivo');
			return;
		}
		*/
		
		fb_pre_anular_valido = true;
		fnc_anular();
	}
};

function fnc_child_anular()
{
	// Valores de anulacion
	var pc_ccod_tpa = $(Obj_Col(fc_frm_anulacion, 'tpa')).find(":selected").val();
	var pc_cmotivo_anu = $(Obj_Col(fc_frm_anulacion, 'cmotivo_anu')).val();
	
	// Columnas y valores para la seleccion del registro anulado
	ia_columns = ['ccod_ve'];
	ia_values = [fr_row_data_cb.ccod_ve];

	return ['Anular', [fnc_Get_File_Values(['x', gc_ccod_emp, fr_row_data_cb.ccod_ve, pc_ccod_tpa, pc_cmotivo_anu]), '', '', ''], [], []];
};

function fnc_child_anular_cancel()
{
	// Columnas y valores para la seleccion del registro anulado
	ia_columns = [];
	ia_values = [];
};
function fnc_child_anular_post()
{
	if (mb_EntGEN_FE === true)
	{
		fnc_frm_objs_habilitar(fc_frm_anulacion, 'v');
		
		var pa_result = fnc_GET_ArrayValues_to_RowString(fa_results[0].or_dataResult);

		$(Obj_Col('form_anulacion', 'ccod_doc_ref')).val(pa_result[0]);
		$(Obj_Col('form_anulacion', 'ccod_ser_ref')).val(pa_result[1]);
		$(Obj_Col('form_anulacion', 'cdoc_nro_ref')).val(pa_result[2]);
	}

	fnc_child_cargar_valores_post_proceso();
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	CABECERA: Venta																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

$(Obj_Col(fc_frm_cb, 'opve', 'select')).change(function() {
	var lc_ccod_opve =  $(this).val();
	if (lc_ccod_opve !== '') {

		var pc_url = '/home/lq_usp_ve_ct_opve_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + '&ic_ccod_opve=' + lc_ccod_opve + '&ic_load_BD=';
		var pa_columns = ['ccod_doc', 'bafecto_igv', 'ccod_mon', 'cdsc_mon', 'csim_mon'];
		var pa_results = f_eject_ajax(pc_url, pa_columns, []);
		
		for (var i = 0; i < pa_results.length; i++) {
			// Asignacion de valores
			fn_ts_ve__ct_opve__bafecto_igv = pa_results[i].bafecto_igv;
			fc_cb_ccod_mon = pa_results[i].ccod_mon;
			$(Obj_Col(fc_frm_cb, 'ccod_doc')).val(pa_results[i].ccod_doc);
			$(Obj_Col(fc_frm_cb, 'cdsc_mon')).val(pa_results[i].cdsc_mon);
			$(".input-csim").attr('data-before', pa_results[i].csim_mon);
			
			// Series
			var p_ccod_doc = $("input[data-col='ccod_doc']").val();
			// MEJORAR ESTE PROCESO URL
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

function fnc_open_modal_tt()
{
	$('#mdl_tt').modal('open');
};

function fnc_open_modal_estados()
{
	$('#mdl_estados').modal('open');
};

function fnc_cb_calcular_importes()
{
	// ::::::::::::: Calculando Totales del Documento - Inicio :::::::::::::
	var pl_ccod_mon = '';
	var pl_ncam = 0;
	var pn_nimp_stv	= 0;
	var pn_nimp_dsc	= 0;
	var pn_nimp_vvt	= 0;
	var pn_nimp_isc	= 0;
	var pn_nimp_op_gr = 0;
	var pn_nimp_op_in = 0;
	var pn_nimp_op_ex = 0;
	var pn_nimp_igv	= 0;
	var pn_nimp_icbper = 0;
	var pn_nimp_ot_ca = 0;
	var pn_nimp_ot_tr = 0;
	var pn_nimp_ant	= 0;
	var pn_nimp_st = 0;
	var pn_nimp_per	= 0;
	var pn_nimp_ret	= 0;
	var pn_nimp_n_ms = 0;
	var pn_nimp_i_ms = 0;
	var pn_nimp_t = 0;

	fa_ve_ts_ve_dt_tt = [];
	
	// Obtenemos lista de monedas
	var da_fa_fa_ln_cod_mon = fnc_Array_EliminarDuplicados(fa_ve_ts_ve_dt_it, "ccod_mon_lt");
	for (var i = 0; i < da_fa_fa_ln_cod_mon.length; i++)
	{
		pl_ccod_mon = da_fa_fa_ln_cod_mon[i].ccod_mon_lt;
		pl_ncam = da_fa_fa_ln_cod_mon[i].ncam;
		
		// Limpiamos valores para cada Tipo de Moneda
		pn_nimp_stv	= 0;
		pn_nimp_dsc	= 0;
		pn_nimp_vvt	= 0;
		pn_nimp_isc	= 0;
		pn_nimp_op_gr = 0;
		pn_nimp_op_in = 0;
		pn_nimp_op_ex = 0;
		pn_nimp_igv	= 0;
		pn_nimp_icbper = 0;
		pn_nimp_ot_ca = 0;
		pn_nimp_ot_tr = 0;
		pn_nimp_ant	= 0;
		pn_nimp_st = 0;
		pn_nimp_per	= 0;
		pn_nimp_ret	= 0;
		pn_nimp_n_ms = 0;
		pn_nimp_i_ms = 0;
		pn_nimp_t = 0;
		
		// Filtramos items por Tipo de Moneda
		var fa_ve_ts_ve_dt_it__x__ccod_mon = fa_ve_ts_ve_dt_it.filter(function (row) {return row.ccod_mon_lt === pl_ccod_mon;});
		for (var i2 = 0; i2 < fa_ve_ts_ve_dt_it__x__ccod_mon.length; i2++)
		{		
			// Sumanos valores por Tipo de Moneda

			// Importes del item
			fn_it_nimp_pl_u = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_pl_u;
			fn_it_nimp_vp_u = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_vp_u;
			fn_it_nimp_pf_u = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_pf_u;
			fn_it_nimp_isc_u = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_isc_u;
			fn_it_nimp_isc_t = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_isc_t;
			fn_it_nimp_igv_u = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_igv_u;
			fn_it_nimp_igv_t = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_igv_t;
			fn_it_nimp_t_sigv = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_t_sigv;
			fn_it_nimp_t_cigv = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_t_cigv;
			fn_it_nimp_in_u = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_in_u;
			fn_it_nimp_in_t = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_in_t;
			fn_it_nimp_ex_u = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_ex_u;
			fn_it_nimp_ex_t = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_ex_t;
			fn_it_nimp_per_u = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_per_u;
			fn_it_nimp_per_t = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_per_t;
			fn_it_nimp_u_ms = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_u_ms;
			fn_it_nimp_n_ms = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_n_ms;
			fn_it_nimp_d_ms = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_d_ms;
			fn_it_nimp_i_ms = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_i_ms;
			fn_it_nimp_t_ms = fa_ve_ts_ve_dt_it__x__ccod_mon[i2].nimp_t_ms;
			
			// Suma de importes de la cabecera
			pn_nimp_stv	+= fn_it_nimp_t_sigv;
			//pn_nimp_dsc	= 0;
			//pn_nimp_vvt	= 0;
			pn_nimp_isc	+= fn_it_nimp_isc_t;
			//pn_nimp_op_gr = 0;
			pn_nimp_op_in += fn_it_nimp_in_t;
			pn_nimp_op_ex += fn_it_nimp_ex_t;
			//pn_nimp_igv	= 0;
			//pn_nimp_icbper = 0;
			//pn_nimp_ot_ca = 0;
			//pn_nimp_ot_tr = 0;
			//pn_nimp_ant	= 0;
			//pn_nimp_st = 0;
			pn_nimp_per	+= fn_it_nimp_per_t;
			//pn_nimp_ret	= 0;
			pn_nimp_i_ms += (fn_it_nimp_igv_t + fn_it_nimp_isc_t + fn_it_nimp_per_t);
			//pn_nimp_t = 0;
		}

		// Calculo de importes de la cabecera
		//pn_nimp_stv	= 0;
		//pn_nimp_dsc	= 0;
		pn_nimp_vvt	= pn_nimp_stv - pn_nimp_dsc;
		//pn_nimp_isc	= 0;
		pn_nimp_op_gr = pn_nimp_vvt + pn_nimp_isc;
		//pn_nimp_op_in = 0;
		//pn_nimp_op_ex = 0;
		pn_nimp_igv	= pn_nimp_op_gr * 0.18;
		//pn_nimp_icbper = 0;
		//pn_nimp_ot_ca = 0;
		//pn_nimp_ot_tr = 0;
		//pn_nimp_ant	= 0;
		pn_nimp_st = pn_nimp_op_gr + pn_nimp_op_in + pn_nimp_op_ex + pn_nimp_igv + pn_nimp_icbper + pn_nimp_ot_ca + pn_nimp_ot_tr + pn_nimp_ant;
		//pn_nimp_per	= 0;
		//pn_nimp_ret	= 0;
		//pn_nimp_i_ms = 0;
		
		pn_nimp_n_ms = pn_nimp_stv + pn_nimp_op_in + pn_nimp_op_ex;
		
		pn_nimp_t = pn_nimp_st + pn_nimp_per - pn_nimp_ret;
		
		
		// Agregamos registro Total Proceso por Tipo de Moneda
		fa_ve_ts_ve_dt_tt.push(
							{
								'ccod_mon': pl_ccod_mon,
								'ncam': pl_ncam,
								'nimp_stv': pn_nimp_stv,
								'nimp_dsc': pn_nimp_dsc,
								'nimp_vvt': pn_nimp_vvt,
								'nimp_isc': pn_nimp_isc,
								'nimp_op_gr': pn_nimp_op_gr,
								'nimp_op_in': pn_nimp_op_in,
								'nimp_op_ex': pn_nimp_op_ex,
								'nimp_igv': pn_nimp_igv,
								'nimp_icbper': pn_nimp_icbper,
								'nimp_ot_ca': pn_nimp_ot_ca,
								'nimp_ot_tr': pn_nimp_ot_tr,
								'nimp_ant': pn_nimp_ant,
								'nimp_st': pn_nimp_st,
								'nimp_per': pn_nimp_per,
								'nimp_ret': pn_nimp_ret,
								'nimp_n_ms': pn_nimp_n_ms,
								'nimp_i_ms': pn_nimp_i_ms,
								'nimp_t': pn_nimp_t
							}
						);
	}
	// ::::::::::::: Calculando Totales del Documento - Fin :::::::::::::

	fnc_cb_tt_view();
};

function fnc_cb_tt_view() {
	// Filtramos totales por tipo de moneda
	var fa_ve_ts_ve_dt_tt__x__ccod_mon = fa_ve_ts_ve_dt_tt.filter(function (row) {return row.ccod_mon === fc_cb_ccod_mon;});
	// View
	if (fa_ve_ts_ve_dt_tt__x__ccod_mon.length === 1)
	{
		$(Obj_Col(fc_frm_cb, 'nimp_n_ms')).val(fa_ve_ts_ve_dt_tt__x__ccod_mon[0].nimp_n_ms).trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_dsc')).val(fa_ve_ts_ve_dt_tt__x__ccod_mon[0].nimp_dsc).trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_i_ms')).val(fa_ve_ts_ve_dt_tt__x__ccod_mon[0].nimp_i_ms).trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_t')).val(fa_ve_ts_ve_dt_tt__x__ccod_mon[0].nimp_t).trigger('change');
	}
	else if (fa_ve_ts_ve_dt_tt__x__ccod_mon.length === 0)
	{
		$(Obj_Col(fc_frm_cb, 'nimp_n_ms')).val('0').trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_dsc')).val('0').trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_i_ms')).val('0').trigger('change');
		$(Obj_Col(fc_frm_cb, 'nimp_t')).val('0').trigger('change');
	}
};


function fnc_open_modal_email() {
	var pb_access = ($('#i_ccod_prs').val() === '' ? false : true);
	if (pb_access === false) {
		f_msj('¡Seleccione un cliente!','','e','bottomLeft','');
		return;
	}

	$('#mdl_email').modal('open');
};

function fnc_open_modal_dsc()
{
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																CABECERA: Anulación																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

$(Obj_Col('form_anulacion', 'tpa', 'select')).change(function() {
	// $(Obj_Col('form_anulacion', 'cmotivo_anu')).val($(Obj_Col('form_anulacion', 'tpa')).find(":selected").text());
	$(Obj_Col('form_anulacion', 'cmotivo_anu')).val($(this).find(":selected").text()).trigger('change');;
});

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::															DETALLE 1: Items (frm_grid_it)															::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_open_modal_it_dsc()
{
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

$(Obj_Col(fc_frm_dt_1, 'nimp_lp_u', 'input')).on("change keyup", function() {
	if (mb_EntFAC_modificar_precio_venta === true)
	{
		fnc_it_calcular_importes();
	}
});

function fnc_it_s_um_change()
{
	if (mb_bloquear_process === true) {return;}
	
	// Parametros it
	fc_it_ccod_um = $(Obj_Col(fc_frm_dt_1, 'um')).find(":selected").val();
	fc_it_cdsc_um = $(Obj_Col(fc_frm_dt_1, 'um')).find(":selected").text();
	if (fc_it_ccod_um === '') {return;}


	// Obtener saldo
	var fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_saldo_list, ['ccod_it', 'ccod_um', 'nfila'], [fc_it_ccod_it, fc_it_ccod_um, 1]);
	fn_it_nsaldo = f_a_data(fa_lq_usp_al_it_saldo_list_tmp, ['nsaldo']);
	//fc_it_nsaldo_ccod_um = fc_it_ccod_um;
	
	$(Obj_Col(fc_frm_dt_1, 'nsaldo')).val(fn_it_nsaldo).trigger('change');

	
	// Listas de precios
	//var fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_saldo_list, ['ccod_it', 'ccod_um', 'ccod_mon_lp', 'ccod_lp'], [fc_it_ccod_it, fc_it_ccod_um, fc_cb_ccod_mon, ''], ['=', '=', '=', '<>']);
	var fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_saldo_list, ['ccod_it', 'ccod_um', 'ccod_lp'], [fc_it_ccod_it, fc_it_ccod_um, ''], ['=', '=', '<>']);
	fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_EliminarDuplicados(fa_lq_usp_al_it_saldo_list_tmp, 'ccod_lp');
	fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_sortByKeyDesc(fa_lq_usp_al_it_saldo_list_tmp, 'bpdt_lp');
	f_load_select_array(fc_frm_dt_1, 'lp', 'ccod_lp', 'cdsc_lp', fa_lq_usp_al_it_saldo_list_tmp, true, '');
};

function fnc_it_s_lp_change ()
{
	if (mb_bloquear_process === true) {return;}
	
	// Parametros it
	fc_it_ccod_lp = $(Obj_Col(fc_frm_dt_1, 'lp')).find(":selected").val();
	fc_it_cdsc_lp = $(Obj_Col(fc_frm_dt_1, 'lp')).find(":selected").text();

	
	// Obtener importe desde 'Lista de Precio'
	var fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_saldo_list, ['ccod_it', 'ccod_um', 'ccod_lp', 'ccod_lp'], [fc_it_ccod_it, fc_it_ccod_um, fc_it_ccod_lp, ''], ['=', '=', '=', '<>']);
	fn_it_nimp_lp_u = f_a_data(fa_lq_usp_al_it_saldo_list_tmp, ['nprecio']);
	var pc_ccod_mon_lp = f_a_data(fa_lq_usp_al_it_saldo_list_tmp, ['ccod_mon_lp']);


	if (fn_it_nimp_lp_u === '')
	{
		f_msj('¡No existe lista(s) de precio definida para el item!','','e','bottomRight','');
		fn_it_nimp_lp_u = 0;
		$(Obj_Col(fc_frm_dt_1, 'nimp_lp_u')).val('');
	}
	else
	{
		if (pc_ccod_mon_lp === fc_cb_ccod_mon) {
			$(Obj_Col(fc_frm_dt_1, 'label_precio')).html('Precio');
		}
		else {
			$(Obj_Col(fc_frm_dt_1, 'label_precio')).html('Precio convertido');
		}

		/*
		if (fc_cb_ccod_mon !== gc_ccod_mon_nac)
		{
			fn_it_nimp_lp_u = fn_it_nimp_lp_u / fn_cb_ccod_mon_tpc;
		}
		*/
		
		fn_it_nimp_lp_u = fnc_redondear_importe(fn_it_nimp_lp_u);
		$(Obj_Col(fc_frm_dt_1, 'nimp_lp_u')).val(fn_it_nimp_lp_u).trigger('change');
	}
	
	fnc_it_calcular_importes();
};

function fnc_grid_it_row_delete(pi_row_data)
{
	// Eliminamos filas de del it
	var pa_columns = ['ccod_it', 'nid_it'];
	var pa_values = [pi_row_data.ccod_it, pi_row_data.nid_it];
	fa_ve_ts_ve_dt_it = fnc_Array_Eliminar_por_columnas(fa_ve_ts_ve_dt_it, pa_columns, pa_values);
	

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


function fnc_it_recalcular_importes()
{
	// Filtramos array con la moneda nacional
	var fa_ve_ts_ve_dt_it_tmp = fa_ve_ts_ve_dt_it.filter(function (row) {return row.ccod_mon_lt === gc_ccod_mon_nac;});	

	fa_ve_ts_ve_dt_it = [];

	// fer_mon
	//var pa_mon_tpcs = fnc_obtener_lista_de_tipos_de_cambio();

	for (var i = 0; i < fa_ve_ts_ve_dt_it_tmp.length; i++)
	{
		// Valores del it
		fn_it_nid_it = fa_ve_ts_ve_dt_it_tmp[i].nid_it;
		fc_it_ccod_it = fa_ve_ts_ve_dt_it_tmp[i].ccod_it;
		fc_it_cdsc_it = fa_ve_ts_ve_dt_it_tmp[i].cdsc_it;
		fn_it_ncant = fa_ve_ts_ve_dt_it_tmp[i].ncant;
		fc_it_ccod_um = fa_ve_ts_ve_dt_it_tmp[i].ccod_um;
		fc_it_cdsc_um = fa_ve_ts_ve_dt_it_tmp[i].cdsc_um;
		fc_it_cabr_um = fa_ve_ts_ve_dt_it_tmp[i].cabr_um;
		fc_it_ctipo_it = fa_ve_ts_ve_dt_it_tmp[i].ctipo_it;
		fc_it_ctipo_it_dsc = fa_ve_ts_ve_dt_it_tmp[i].ctipo_it_dsc;
		fc_it_ccod_lp = fa_ve_ts_ve_dt_it_tmp[i].ccod_lp;
		fc_it_cdsc_lp = fa_ve_ts_ve_dt_it_tmp[i].cdsc_lp;
		fc_it_cglosa = fa_ve_ts_ve_dt_it_tmp[i].cglosa;

		fn_it_bexonerado = fa_ve_ts_ve_dt_it_tmp[i].bexonerado;
		fn_it_bigv = fa_ve_ts_ve_dt_it_tmp[i].bigv;
		fc_it_ccod_imp_igv = fa_ve_ts_ve_dt_it_tmp[i].ccod_imp_igv;
		/*
		fc_it_cdsc_imp_igv = fa_ve_ts_ve_dt_it_tmp[i].cdsc_imp_igv;
		fc_it_cabr_imp_igv = fa_ve_ts_ve_dt_it_tmp[i].cabr_imp_igv;
		*/
		fn_it_ntasa_imp_igv = fa_ve_ts_ve_dt_it_tmp[i].ntasa_imp_igv;

		fn_it_bisc = fa_ve_ts_ve_dt_it_tmp[i].bisc;
		fc_it_ccod_imp_isc = fa_ve_ts_ve_dt_it_tmp[i].ccod_imp_isc;
		/*
		fc_it_cdsc_imp_isc = fa_ve_ts_ve_dt_it_tmp[i].cdsc_imp_isc;
		fc_it_cabr_imp_isc = fa_ve_ts_ve_dt_it_tmp[i].cabr_imp_isc;
		*/
		fn_it_ntasa_imp_isc = fa_ve_ts_ve_dt_it_tmp[i].ntasa_imp_isc;

		fn_it_bper = fa_ve_ts_ve_dt_it_tmp[i].bper;
		fc_it_ccod_imp_per = fa_ve_ts_ve_dt_it_tmp[i].ccod_imp_per;
		/*
		fc_it_cdsc_imp_per = fa_ve_ts_ve_dt_it_tmp[i].cdsc_imp_per;
		fc_it_cabr_imp_per = fa_ve_ts_ve_dt_it_tmp[i].cabr_imp_per;
		*/
		fn_it_ntasa_imp_per = fa_ve_ts_ve_dt_it_tmp[i].ntasa_imp_per;

		// Importes en moneda nacional
		var pn_it_nimp_lp_u_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_lp_u;
		var pn_it_nimp_vp_u_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_vp_u;
		var pn_it_nimp_pf_u_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_pf_u;
		var pn_it_nimp_isc_u_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_isc_u;
		var pn_it_nimp_isc_t_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_isc_t;
		var pn_it_nimp_igv_u_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_igv_u;
		var pn_it_nimp_igv_t_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_igv_t;
		var pn_it_nimp_t_sigv_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_t_sigv;
		var pn_it_nimp_t_cigv_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_t_cigv;
		var pn_it_nimp_in_u_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_in_u;
		var pn_it_nimp_in_t_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_in_t;
		var pn_it_nimp_ex_u_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_ex_u;
		var pn_it_nimp_ex_t_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_ex_t;
		var pn_it_nimp_per_u_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_per_u;
		var pn_it_nimp_per_t_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_per_t;
		var pn_it_nimp_u_ms_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_u_ms;
		var pn_it_nimp_n_ms_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_n_ms;
		var pn_it_nimp_d_ms_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_d_ms;
		var pn_it_nimp_i_ms_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_i_ms;
		var pn_it_nimp_t_ms_nac = fa_ve_ts_ve_dt_it_tmp[i].nimp_t_ms;




		var pc_ccod_mon_tpc = '';
		var pn_ntpc = 0;

		for (var t = 0; t < fa_slq_usp_Get_em_mon_tpc_ln.length; t++) {
			pc_ccod_mon_tpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ccod_mon;
			pn_ntpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ntc_c;

			fn_it_nimp_lp_u = pn_it_nimp_lp_u_nac / pn_ntpc;
			fn_it_nimp_vp_u = pn_it_nimp_vp_u_nac / pn_ntpc;
			fn_it_nimp_pf_u = pn_it_nimp_pf_u_nac / pn_ntpc;
			fn_it_nimp_isc_u = pn_it_nimp_isc_u_nac / pn_ntpc;
			fn_it_nimp_isc_t = pn_it_nimp_isc_t_nac / pn_ntpc;
			fn_it_nimp_igv_u = pn_it_nimp_igv_u_nac / pn_ntpc;
			fn_it_nimp_igv_t = pn_it_nimp_igv_t_nac / pn_ntpc;
			fn_it_nimp_t_sigv = pn_it_nimp_t_sigv_nac / pn_ntpc;
			fn_it_nimp_t_cigv = pn_it_nimp_t_cigv_nac / pn_ntpc;
			fn_it_nimp_in_u = pn_it_nimp_in_u_nac / pn_ntpc;
			fn_it_nimp_in_t = pn_it_nimp_in_t_nac / pn_ntpc;
			fn_it_nimp_ex_u = pn_it_nimp_ex_u_nac / pn_ntpc;
			fn_it_nimp_ex_t = pn_it_nimp_ex_t_nac / pn_ntpc;
			fn_it_nimp_per_u = pn_it_nimp_per_u_nac / pn_ntpc;
			fn_it_nimp_per_t = pn_it_nimp_per_t_nac / pn_ntpc;
			fn_it_nimp_u_ms = pn_it_nimp_u_ms_nac / pn_ntpc;
			fn_it_nimp_n_ms = pn_it_nimp_n_ms_nac / pn_ntpc;
			fn_it_nimp_d_ms = pn_it_nimp_d_ms_nac / pn_ntpc;
			fn_it_nimp_i_ms = pn_it_nimp_i_ms_nac / pn_ntpc;
			fn_it_nimp_t_ms = pn_it_nimp_t_ms_nac / pn_ntpc;

			f_da_fa_fa_it_ln_ADD(pc_ccod_mon_tpc, pn_ntpc);
		}

	}
	Array.prototype.push.apply(fa_ve_ts_ve_dt_it, fa_ve_ts_ve_dt_it_tmp);
	fnc_load_grid_it_x_cod_mon(fc_cb_ccod_mon);
};

function fnc_it_calcular_importes ()
{
	if (mb_bloquear_process === true) {return;}

	// Variables proceso
	fn_it_nimp_vp_u = 0;
	fn_it_nimp_pf_u = 0;
	fn_it_nimp_isc_u = 0;
	fn_it_nimp_isc_t = 0;
	fn_it_nimp_igv_u = 0;
	fn_it_nimp_igv_t = 0;
	fn_it_nimp_t_sigv = 0;
	fn_it_nimp_t_cigv = 0;
	fn_it_nimp_in_u = 0;
	fn_it_nimp_in_t = 0;
	fn_it_nimp_ex_u = 0;
	fn_it_nimp_ex_t = 0;
	fn_it_nimp_per_u = 0;
	fn_it_nimp_per_t = 0;
	// Variables de muestra
	fn_it_nimp_u_ms = 0;
	fn_it_nimp_n_ms = 0;
	fn_it_nimp_d_ms = 0;
	fn_it_nimp_i_ms = 0;
	fn_it_nimp_t_ms = 0;

	// Entorno de Venta
	if (mb_EntFAC_modificar_precio_venta === true) {
		fn_it_nimp_lp_u = fnc_redondear_importe($(Obj_Col(fc_frm_dt_1, 'nimp_lp_u')).val());
	}
	fn_it_ncant = fnc_redondear_saldo_inventario($(Obj_Col(fc_frm_dt_1, 'ncant')).val());

	// Factores IGV
	var pn_imp_igv_ts = 0;
	var pn_imp_igv_f1 = 0;
	var pn_imp_igv_f2 = 0;	
	if (fn_it_bigv === 1)
	{
		pn_imp_igv_ts = parseFloat(fn_it_ntasa_imp_igv); // 18
		pn_imp_igv_f1 = (100 + pn_imp_igv_ts) / 100; // 1.18
		pn_imp_igv_f2 = pn_imp_igv_ts / 100; // 0.18
	}

	if (fn_ts_ve__ct_opve__bafecto_igv === 0) // No Grabado
	{
		
	}
	else if (fn_ts_ve__ct_opve__bafecto_igv === 1) // Segun Articulo
	{
		if (mb_EntFAC_precio_incluye_impuestos === true)
		{
			if (fn_it_bigv === 1)
			{
				fn_it_nimp_vp_u = fn_it_nimp_lp_u / pn_imp_igv_f1;
				fn_it_nimp_pf_u = fn_it_nimp_lp_u;
				fn_it_nimp_u_ms = fn_it_nimp_pf_u;
				
				fn_it_nimp_igv_u = fn_it_nimp_vp_u * pn_imp_igv_f2;
				fn_it_nimp_igv_t = fn_it_nimp_igv_u * fn_it_ncant;

				fn_it_nimp_t_sigv = fn_it_nimp_vp_u * fn_it_ncant;
				fn_it_nimp_t_cigv = (fn_it_nimp_vp_u + fn_it_nimp_igv_u) * fn_it_ncant;
				
				fn_it_nimp_in_u = 0;
				fn_it_nimp_in_t = 0;
				fn_it_nimp_ex_u = 0;
				fn_it_nimp_ex_t = 0;
				
				fn_it_nimp_n_ms = fn_it_nimp_t_sigv;
				fn_it_nimp_t_ms = fn_it_nimp_t_cigv;
			}
			else
			{
				fn_it_nimp_vp_u = fn_it_nimp_lp_u;
				fn_it_nimp_pf_u = fn_it_nimp_lp_u;
				fn_it_nimp_u_ms = fn_it_nimp_pf_u;
				
				fn_it_nimp_igv_u = 0;
				fn_it_nimp_igv_t = 0;

				fn_it_nimp_t_sigv = 0;
				fn_it_nimp_t_cigv = 0;
				
				if (fn_it_bexonerado === true)
				{
					fn_it_nimp_in_u = 0;
					fn_it_nimp_in_t = 0;
					fn_it_nimp_ex_u = fn_it_nimp_vp_u;
					fn_it_nimp_ex_t = fn_it_nimp_vp_u * fn_it_ncant;
					
					fn_it_nimp_n_ms = fn_it_nimp_ex_t;
					fn_it_nimp_t_ms = fn_it_nimp_ex_t;
				}
				else
				{
					fn_it_nimp_in_u = fn_it_nimp_vp_u;
					fn_it_nimp_in_t = fn_it_nimp_vp_u * fn_it_ncant;
					fn_it_nimp_ex_u = 0;
					fn_it_nimp_ex_t = 0;
					
					fn_it_nimp_n_ms = fn_it_nimp_in_t;
					fn_it_nimp_t_ms = fn_it_nimp_in_t;
				}
			}
		}
		else
		{
			if (fn_it_bigv === 1)
			{
				fn_it_nimp_vp_u = fn_it_nimp_lp_u;
				fn_it_nimp_pf_u = fn_it_nimp_lp_u * pn_imp_igv_f1;
				fn_it_nimp_u_ms = fn_it_nimp_vp_u;
				
				fn_it_nimp_igv_u = fn_it_nimp_vp_u * pn_imp_igv_f2;
				fn_it_nimp_igv_t = fn_it_nimp_igv_u * fn_it_ncant;
				
				fn_it_nimp_t_sigv = fn_it_nimp_vp_u * fn_it_ncant;
				fn_it_nimp_t_cigv = (fn_it_nimp_vp_u + fn_it_nimp_igv_u) * fn_it_ncant;
				
				fn_it_nimp_in_u = 0;
				fn_it_nimp_in_t = 0;
				fn_it_nimp_ex_u = 0;
				fn_it_nimp_ex_t = 0;
				
				fn_it_nimp_n_ms = fn_it_nimp_t_sigv;
				fn_it_nimp_t_ms = fn_it_nimp_t_cigv;
			}
			else
			{
				fn_it_nimp_vp_u = fn_it_nimp_lp_u;
				fn_it_nimp_pf_u = fn_it_nimp_lp_u;
				fn_it_nimp_u_ms = fn_it_nimp_vp_u;
				
				fn_it_nimp_igv_u = 0;
				fn_it_nimp_igv_t = 0;
				
				fn_it_nimp_t_sigv = 0;
				fn_it_nimp_t_cigv = 0;
				
				if (fn_it_bexonerado === true)
				{
					fn_it_nimp_in_u = 0;
					fn_it_nimp_in_t = 0;
					fn_it_nimp_ex_u = fn_it_nimp_vp_u;
					fn_it_nimp_ex_t = fn_it_nimp_vp_u * fn_it_ncant;
					
					fn_it_nimp_n_ms = fn_it_nimp_ex_t;
					fn_it_nimp_t_ms = fn_it_nimp_ex_t;
				}
				else
				{
					fn_it_nimp_in_u = fn_it_nimp_vp_u;
					fn_it_nimp_in_t = fn_it_nimp_vp_u * fn_it_ncant;
					fn_it_nimp_ex_u = 0;
					fn_it_nimp_ex_t = 0;
					
					fn_it_nimp_n_ms = fn_it_nimp_in_t;
					fn_it_nimp_t_ms = fn_it_nimp_in_t;
				}
			}
		}
	}

	fn_it_nimp_i_ms = fn_it_nimp_igv_t;
	
	// Redondeo de importes
	fn_it_nimp_vp_u = fnc_redondear_importe(fn_it_nimp_vp_u);
	fn_it_nimp_pf_u = fnc_redondear_importe(fn_it_nimp_pf_u);
	fn_it_nimp_isc_u = fnc_redondear_importe(fn_it_nimp_isc_u);
	fn_it_nimp_isc_t = fnc_redondear_importe(fn_it_nimp_isc_t);
	fn_it_nimp_igv_u = fnc_redondear_importe(fn_it_nimp_igv_u);
	fn_it_nimp_igv_t = fnc_redondear_importe(fn_it_nimp_igv_t);
	fn_it_nimp_t_sigv = fnc_redondear_importe(fn_it_nimp_t_sigv);
	fn_it_nimp_t_cigv = fnc_redondear_importe(fn_it_nimp_t_cigv);
	fn_it_nimp_in_u = fnc_redondear_importe(fn_it_nimp_in_u);
	fn_it_nimp_in_t = fnc_redondear_importe(fn_it_nimp_in_t);
	fn_it_nimp_ex_u = fnc_redondear_importe(fn_it_nimp_ex_u);
	fn_it_nimp_ex_t = fnc_redondear_importe(fn_it_nimp_ex_t);
	fn_it_nimp_per_u = fnc_redondear_importe(fn_it_nimp_per_u);
	fn_it_nimp_per_t = fnc_redondear_importe(fn_it_nimp_per_t);
	// Redondeo de importes de muestra
	fn_it_nimp_n_ms = fnc_redondear_importe(fn_it_nimp_n_ms);
	fn_it_nimp_d_ms = fnc_redondear_importe(fn_it_nimp_d_ms);
	fn_it_nimp_i_ms = fnc_redondear_importe(fn_it_nimp_i_ms);
	fn_it_nimp_t_ms = fnc_redondear_importe(fn_it_nimp_t_ms);
	// Muestra de importes
	$(Obj_Col(fc_frm_dt_1, 'nimp_n_ms')).val(fn_it_nimp_n_ms).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_d_ms')).val(fn_it_nimp_d_ms).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_i_ms')).val(fn_it_nimp_i_ms).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_t_ms')).val(fn_it_nimp_t_ms).trigger('change');
};

function fnc_grid_it_enumerar (ic_tipo)
{
	// Obtenemos un registro por it
	var fa_ve_ts_ve_dt_it_tmp = [];
	for (var b = 0; b < fa_ve_ts_ve_dt_it.length; b++) {
		if (fa_ve_ts_ve_dt_it[b].ccod_mon_lt === gc_ccod_mon_nac) {
			fa_ve_ts_ve_dt_it_tmp.push({
								'nid_it': fa_ve_ts_ve_dt_it[b].nid_it,
								'ccod_it': fa_ve_ts_ve_dt_it[b].ccod_it,
								'ctipo_it': fa_ve_ts_ve_dt_it[b].ctipo_it,
								'ccod_mon_lt': fa_ve_ts_ve_dt_it[b].ccod_mon_lt
								});
		}
	}
	fa_ve_ts_ve_dt_it_tmp = fnc_Array_sortByKeyAsc(fa_ve_ts_ve_dt_it_tmp, 'ctipo_it');

	// Proceso de enumeracion
	var i = 0;
	var pn_factor = 0;
	var pb_while = true;

	if (ic_tipo === 'I') {
		i = fa_ve_ts_ve_dt_it_tmp.length - 1;
		pn_factor = -1;
	}
	else if (ic_tipo === 'E') {
		i = 0;
		pn_factor = 1;
	}

	while (pb_while === true) {
		// it
		for (var b = 0; b < fa_ve_ts_ve_dt_it.length; b++) {
			if (fa_ve_ts_ve_dt_it[b].nid_it === fa_ve_ts_ve_dt_it_tmp[i].nid_it && fa_ve_ts_ve_dt_it[b].ccod_it === fa_ve_ts_ve_dt_it_tmp[i].ccod_it) {
				if (fa_ve_ts_ve_dt_it[b].nid_it === fn_it_nid_it && fa_ve_ts_ve_dt_it[b].ccod_it === fc_it_ccod_it) {fn_it_nid_it = i + 1;}
				fa_ve_ts_ve_dt_it[b].nid_it = i + 1;
			}
		}
		// Controlador de bucle
		i += pn_factor;
		if (ic_tipo === 'I') {
			if (i < 0) {pb_while = false;}
		}
		else if (ic_tipo === 'E') {
			if (i >= fa_ve_ts_ve_dt_it_tmp.length) {pb_while = false;}
		}
	}
};

function fnc_grid_it_estructura (ic_tipo)
{
    if (ic_tipo === 'B')
	{
		fc_it_ctipo_it = 'B';
		fc_it_ctipo_it_dsc = 'Bienes';

		$("#mdl_grid_it_sc_2").css({ display: 'block' });
		$("#mdl_grid_it").removeClass('height_75').addClass('height_90');
		$("#mdl_grid_it .modal-sub-content").removeClass('height_-99px').addClass('height_-185px');
	}
	else if (ic_tipo === 'S')
	{
		fc_it_ctipo_it = 'S';
		fc_it_ctipo_it_dsc = 'Servicios';
		
		$("#mdl_grid_it_sc_2").css({ display: 'none' });
		$("#mdl_grid_it").removeClass('height_90').addClass('height_75');
		$("#mdl_grid_it .modal-sub-content").removeClass('height_-185px').addClass('height_-99px');
	}

	$(Obj_Col(fc_frm_dt_1, 'ctipo_it', 'div')).html(ic_tipo === 'B' ? 'Bien' : 'Servicio');
};

function fnc_open_modal_it_add()
{
	$(Obj_lnk('', '_lnk_grid_it_aceptar')).html('Agregar');
	$('#mdl_grid_it_seleccion').modal('open');
};

function fnc_open_modal_it_b()
{
	fnc_grid_it_row_new('B');
};

function fnc_open_modal_it_s()
{
	fnc_grid_it_row_new('S');
};

function fnc_grid_it_row_new (ic_tipo)
{
	// SAMI
	// Validaciones
	if (!fnc_VAL_array_tpc())
	{
		$('#mdl_grid_it_seleccion').modal('close');
		return;
	}
	
	var pa_validacion = [fc_frm_cb + ', opve'];
	if (!fnc_form_objs_verificar_requeridos(pa_validacion))
	{
		$('#mdl_grid_it_seleccion').modal('close');
		return;
	}
	
    if (ic_tipo === 'B')
	{
		pa_validacion = [fc_frm_cb + ', alm', fc_frm_cb + ', dfch_emi'];
		if (!fnc_form_objs_verificar_requeridos(pa_validacion))
		{
			$('#mdl_grid_it_seleccion').modal('close');
			return;
		}
	}
	else if (ic_tipo === 'S')
	{
		pa_validacion = [fc_frm_cb + ', dfch_emi'];
		if (!fnc_form_objs_verificar_requeridos(pa_validacion))
		{
			$('#mdl_grid_it_seleccion').modal('close');
			return;
		}
	}

	// Proceso
	fn_it_nid_it = $('#grid_it').DataTable().data().count() + 1;

	fnc_grid_it_estructura(ic_tipo);

	var pc_load_BD = '';
	var pc_msj = '';
    if (ic_tipo === 'B')
	{
		/*
		if ($("select[data-col='alm']").val() === '')
		{
			pc_msj = '¡Ingrese un almacén para agregar artículo(s)!';
		}
		*/
		
		pc_load_BD = 'load_BD';
		$('#mdl_grid_al_it_saldo .modal_header_inner h3').html('Seleccionar artículo');
		fnc_SET_text__to__column_header__DataTable('grid_al_it_saldo', 6, 'Artículo');
		fnShowHide('grid_al_it_saldo', 24, true);
		fnShowHide('grid_al_it_saldo', 25, true);

		/*
		var pc_url = '/home/lq_usp_al_it_saldo_list/?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_ccod_uop=' + gc_ccod_uop + 
												   '&id_dfch=' + $(Obj_Col(fc_frm_cb, 'dfch_emi')).val() + '&ic_ccod_mon=' + fc_cb_ccod_mon + '&ir_RowData_tpc=' + pc_RowData_fa_slq_usp_Get_em_mon_tpc_ln + 
												   '&in_bvisible=' + '1' + '&ic_ccod_it=' + '' + '&ic_ccod_um=' + '' + '&ic_load_BD=load_BD';

		fnc_table_reload(
						'grid_al_it_saldo',
						pc_url,
						''
						);
		*/
	}
	else if (ic_tipo === 'S')
	{
		pc_load_BD = '';
		$('#mdl_grid_al_it_saldo .modal_header_inner h3').html('Seleccionar servicio');
		fnc_SET_text__to__column_header__DataTable('grid_al_it_saldo', 6, 'Servicio');
		fnShowHide('grid_al_it_saldo', 24, false);
		fnShowHide('grid_al_it_saldo', 25, false);
	}
	
	
	// Grilla	
	var pc_url = '/home/lq_usp_al_it_saldo_list/?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_ccod_uop=' + gc_ccod_uop + 
											   '&id_dfch=' + $(Obj_Col(fc_frm_cb, 'dfch_emi')).val() + '&ic_ccod_mon=' + fc_cb_ccod_mon + '&ir_RowData_tpc=' + pc_RowData_fa_slq_usp_Get_em_mon_tpc_ln + 
											   '&in_bvisible=' + '0' + '&ic_ccod_it=' + '' + '&ic_ccod_um=' + '' + 
											   '&ic_load_BD=' + pc_load_BD;
	fa_lq_usp_al_it_saldo_list = f_eject_ajax(pc_url, ['All'], []);
	var fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_saldo_list, ['ctipo_it', 'bvisible'], [ic_tipo, 1]);
	//fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_sortByKeyAsc(fa_lq_usp_al_it_saldo_list_tmp, 'ccod_it');
	fnc_DataTable_fnAddData_to_array('grid_al_it_saldo', fa_lq_usp_al_it_saldo_list_tmp);




	/*
	// Validacion 2
	if ($("input[data-col='cdsc_mon']").val() === '')
	{
		pc_msj = '¡Ingrese tipo de moneda para agregar artículo(s)!';
	}
	// Verificar validaciones
	if (pc_msj !== '')
	{
		$("#tab_main").tabs("select", "tab_1");
		$('#mdl_grid_it_seleccion').modal('close');
		f_msj(pc_msj,'','e','bottomRight','');
		return;		
	}	
	*/




	fb_grid_insert = true;





	$('#mdl_grid_al_it_saldo').modal('open');
	fnc_set_focus('', 'i_filter_grid_al_it_saldo');





	/*
	// Modal
	if (ic_tipo === 'B') {
		$('#mdl_grid_al_it_saldo').modal('open');
		fnc_set_focus('', 'i_filter_grid_al_it_saldo');
	}
	else if (ic_tipo === 'S') {
		$('#mdl_grid_al_it_srv').modal('open');
		fnc_set_focus('', 'i_filter_grid_al_it_srv');
	}
	*/
};

function fnc_mdl_grid_al_it_saldo_post_finish_load_modal()
{
	//$('[data-lnk="_lnk_saldos"]').removeClass('display_none');
	// $('[data-lnk="_lnk_saldos1"]').removeClass('display_none');
};

function fnc_mdl_grid_al_it_saldo_post_finish_close_modal()
{
	$('[data-lnk="_lnk_saldos"]').addClass('display_none');
	// $('[data-lnk="_lnk_saldos1"]').addClass('display_none');
};

function fnc_add_grid_al_it_saldo()
{
	fnc_add_grid_it();
};

function fnc_add_grid_al_it_srv()
{
    fnc_add_grid_it();
};

function fnc_grid_al_it_saldo_row_click (ir_row_data)
{
	if (ir_row_data.ctipo_it === 'B')
	{
		$('[data-lnk="_lnk_saldos"]').removeClass('display_none');
	}
};

function fnc_grid_al_it_saldo_row_dblclick (ir_row_data)
{
	fnc_add_grid_al_it_saldo();
};

function fnc_grid_al_it_srv_row_dblclick (ir_row_data)
{
	fnc_add_grid_al_it_srv();
};

function fnc_grid_al_it_saldo_nsaldo_column_link (ir_row_data)
{
	// esto solo era para prueba
	/*
	var pc_url = '/home/lq_usp_al_it_saldo_list/?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_ccod_uop=' + gc_ccod_uop + 
											   '&id_dfch=' + $(Obj_Col(fc_frm_cb, 'dfch_emi')).val() + '&ic_ccod_mon=' + fc_cb_ccod_mon + '&ir_RowData_tpc=' + pc_RowData_fa_slq_usp_Get_em_mon_tpc_ln + 
											   '&in_bvisible=' + '1' + '&ic_ccod_it=' + '' + '&ic_ccod_um=' + '' + '&ic_load_BD=load_BD';

	fnc_table_reload(
					'grid_al_it_saldo_x_alm',
					pc_url,
					''
					);
	*/
	$('#mdl_grid_al_it_saldo_x_alm').modal('open');
};

function fnc_add_grid_it()
{
	mb_bloquear_process = true;
	fnc_frm_objs_habilitar('frm_grid_it');
	mb_bloquear_process = false;
	
	$(Obj_Col(fc_frm_dt_1, 'ccod_alm')).val($(Obj_Col(fc_frm_cb, 'alm')).find(":selected").val());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_alm')).val($(Obj_Col(fc_frm_cb, 'alm')).find(":selected").text());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_mon')).val($(Obj_Col(fc_frm_cb, 'cdsc_mon')).val());
	$(Obj_Col(fc_frm_dt_1, 'ncant')).val('1'); // Puede ser un entorno
	
	//fnc_frm_objs_validar(['frm_grid_it']);



	
	var data = fnc_Get_DataTable_RowData_Selected('grid_al_it_saldo');
	
	
	


	/*
	var pc_table;
	if (fc_it_ctipo_it === 'B') {
        pc_table = 'grid_al_it_saldo';
    }
    else if (fc_it_ctipo_it === 'S') {
		pc_table = 'grid_al_it_srv';
    }
	var data = fnc_Get_DataTable_RowData_Selected(pc_table);
	*/
	
	

	// Valores de item seleccionado
	fc_it_ccod_it = data.ccod_it;
	fc_it_cdsc_it = data.cdsc_it;

	$(Obj_Col(fc_frm_dt_1, 'ccod_it')).val(fc_it_ccod_it);
	$(Obj_Col(fc_frm_dt_1, 'cdsc_it')).val(fc_it_cdsc_it);

	// IGV
	fn_it_bexonerado = data.bexonerado;
	fn_it_bigv = data.bigv;
	fc_it_ccod_imp_igv = data.ccod_imp_igv;
	fn_it_ntasa_imp_igv = data.ntasa_imp_igv;
	
	// ISC
	fn_it_bisc = data.bisc;
	fc_it_ccod_imp_isc = data.ccod_imp_isc;
	fn_it_ntasa_imp_isc = data.ntasa_imp_isc;

	// Percepcion
	fn_it_bper = data.bper;
	fc_it_ccod_imp_per = data.ccod_imp_per;
	fn_it_ntasa_imp_per = data.ntasa_imp_per;
	
	// UM
	fa_lq_usp_al_ct_it_dt_um_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_ct_it_dt_um_list, ['ccod_it'], [data.ccod_it]);
	fa_lq_usp_al_ct_it_dt_um_list_tmp = fnc_Array_sortByKeyAsc(fa_lq_usp_al_ct_it_dt_um_list_tmp, 'nid_um');
	f_load_select_array(fc_frm_dt_1, 'um', 'ccod_um', 'cdsc_um', fa_lq_usp_al_ct_it_dt_um_list_tmp, true, '');

	$("#frm_grid_it_c_nsaldo").css('display', fc_it_ctipo_it === 'B' ? 'block' : 'none');

	fnc_frm_objs_validar(['frm_grid_it']);

	$('#mdl_grid_al_it_srv').modal('close');
	$('#mdl_grid_al_it_saldo').modal('close');
	$('#mdl_grid_it').modal('open');
};

function fnc_mdl_grid_it_post_finish_load_modal()
{
	fnc_set_focus(fc_frm_dt_1, 'ncant');
};

function fnc_grid_it_aceptar()
{
	// Validaciones
	if (!(fnc_validar_numero_mayor_a_cero(fc_frm_dt_1, 'ncant', '¡ingrese cantidad!'))) {return;}

	// Entorno
	if (mb_EntFAC_permitir_precio_venta_cero === false) {
		if (!(fnc_validar_numero_mayor_a_cero(fc_frm_dt_1, 'nimp_lp_u', '¡ingresar precio!'))) {return;}
	}
	else if (mb_EntFAC_permitir_precio_venta_cero === true) {
		if (!(fnc_validar_numero_mayor_a_NaN(fc_frm_dt_1, 'nimp_lp_u', '¡ingresar precio!'))) {return;}
	}

	// Parametros it (Bien - Servicio)
	fc_it_cglosa = $(Obj_Col(fc_frm_dt_1, 'cglosa')).val();

	// Obtener detalles de la UM Seleccionada - Parametros it (Bien - Servicio)
	fa_lq_usp_al_ct_it_dt_um_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_ct_it_dt_um_list, ['ccod_it', 'ccod_um'], [fc_it_ccod_it, fc_it_ccod_um]);
	fc_it_cabr_um = f_a_data(fa_lq_usp_al_ct_it_dt_um_list_tmp, ['cabr_um']);

	var pc_msj = '¡artículo';
	if (fc_it_ctipo_it === 'S') {pc_msj = '¡servicio';}
	if (fb_grid_insert === true) {pc_msj += ' agregado!';} else {pc_msj += ' modificado!';}

	fnc_grid_it_insert();

	fnc_cb_calcular_importes();
	
	f_msj(pc_msj, '', 's', 'bottomRight', '');

	$('#mdl_grid_it').modal('close');
};

function fnc_grid_it_insert()
{
	// Eliminamos filas de del item
	var pa_columns = ['ccod_it', 'nid_it'];
	var pa_values = [fc_it_ccod_it, fn_it_nid_it];
	fa_ve_ts_ve_dt_it = fnc_Array_Eliminar_por_columnas(fa_ve_ts_ve_dt_it, pa_columns, pa_values);

	// Tipo de cambio
	var pc_ccod_mon_tpc = '';
	var pn_ntpc = parseFloat(fnc_obtener_tpc_moneda_cabecera(fc_cb_ccod_mon, fa_slq_usp_Get_em_mon_tpc_ln));

	// Insertar importes en moneda de cabecera
	f_da_fa_fa_it_ln_ADD(fc_cb_ccod_mon, (fc_cb_ccod_mon === gc_ccod_mon_nac ? 0 : pn_ntpc));

	// Obtenemos importes en moneda nacional
	var pn_it_nimp_lp_u_nac = fn_it_nimp_lp_u * pn_ntpc;
	var pn_it_nimp_vp_u_nac = fn_it_nimp_vp_u * pn_ntpc;
	var pn_it_nimp_pf_u_nac = fn_it_nimp_pf_u * pn_ntpc;
	var pn_it_nimp_isc_u_nac = fn_it_nimp_isc_u * pn_ntpc;
	var pn_it_nimp_isc_t_nac = fn_it_nimp_isc_t * pn_ntpc;
	var pn_it_nimp_igv_u_nac = fn_it_nimp_igv_u * pn_ntpc;
	var pn_it_nimp_igv_t_nac = fn_it_nimp_igv_t * pn_ntpc;
	var pn_it_nimp_t_sigv_nac = fn_it_nimp_t_sigv * pn_ntpc;
	var pn_it_nimp_t_cigv_nac = fn_it_nimp_t_cigv * pn_ntpc;
	var pn_it_nimp_in_u_nac = fn_it_nimp_in_u * pn_ntpc;
	var pn_it_nimp_in_t_nac = fn_it_nimp_in_t * pn_ntpc;
	var pn_it_nimp_ex_u_nac = fn_it_nimp_ex_u * pn_ntpc;
	var pn_it_nimp_ex_t_nac = fn_it_nimp_ex_t * pn_ntpc;
	var pn_it_nimp_per_u_nac = fn_it_nimp_per_u * pn_ntpc;
	var pn_it_nimp_per_t_nac = fn_it_nimp_per_t * pn_ntpc;
	var pn_it_nimp_u_ms_nac = fn_it_nimp_u_ms * pn_ntpc;
	var pn_it_nimp_n_ms_nac = fn_it_nimp_n_ms * pn_ntpc;
	var pn_it_nimp_d_ms_nac = fn_it_nimp_d_ms * pn_ntpc;
	var pn_it_nimp_i_ms_nac = fn_it_nimp_i_ms * pn_ntpc;
	var pn_it_nimp_t_ms_nac = fn_it_nimp_t_ms * pn_ntpc;

	// Insertar importes en Moneda(s) distinta(s) a la Moneda de cabecera
	for (var t = 0; t < fa_slq_usp_Get_em_mon_tpc_ln.length; t++) {
		pc_ccod_mon_tpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ccod_mon;

		if (pc_ccod_mon_tpc === fc_cb_ccod_mon)
		{
			pc_ccod_mon_tpc = gc_ccod_mon_nac;
			pn_ntpc = 0;

			fn_it_nimp_lp_u =  pn_it_nimp_lp_u_nac;
			fn_it_nimp_vp_u =  pn_it_nimp_vp_u_nac;
			fn_it_nimp_pf_u =  pn_it_nimp_pf_u_nac;
			fn_it_nimp_isc_u =  pn_it_nimp_isc_u_nac;
			fn_it_nimp_isc_t =  pn_it_nimp_isc_t_nac;
			fn_it_nimp_igv_u =  pn_it_nimp_igv_u_nac;
			fn_it_nimp_igv_t =  pn_it_nimp_igv_t_nac;
			fn_it_nimp_t_sigv =  pn_it_nimp_t_sigv_nac;
			fn_it_nimp_t_cigv =  pn_it_nimp_t_cigv_nac;
			fn_it_nimp_in_u =  pn_it_nimp_in_u_nac;
			fn_it_nimp_in_t =  pn_it_nimp_in_t_nac;
			fn_it_nimp_ex_u =  pn_it_nimp_ex_u_nac;
			fn_it_nimp_ex_t =  pn_it_nimp_ex_t_nac;
			fn_it_nimp_per_u =  pn_it_nimp_per_u_nac;
			fn_it_nimp_per_t =  pn_it_nimp_per_t_nac;
			fn_it_nimp_u_ms =  pn_it_nimp_u_ms_nac;
			fn_it_nimp_n_ms =  pn_it_nimp_n_ms_nac;
			fn_it_nimp_d_ms =  pn_it_nimp_d_ms_nac;
			fn_it_nimp_i_ms =  pn_it_nimp_i_ms_nac;
			fn_it_nimp_t_ms =  pn_it_nimp_t_ms_nac;
		}
		else
		{
			pn_ntpc = fa_slq_usp_Get_em_mon_tpc_ln[t].ntc_c;
		
			fn_it_nimp_lp_u =  pn_it_nimp_lp_u_nac / pn_ntpc;
			fn_it_nimp_vp_u =  pn_it_nimp_vp_u_nac / pn_ntpc;
			fn_it_nimp_pf_u =  pn_it_nimp_pf_u_nac / pn_ntpc;
			fn_it_nimp_isc_u =  pn_it_nimp_isc_u_nac / pn_ntpc;
			fn_it_nimp_isc_t =  pn_it_nimp_isc_t_nac / pn_ntpc;
			fn_it_nimp_igv_u =  pn_it_nimp_igv_u_nac / pn_ntpc;
			fn_it_nimp_igv_t =  pn_it_nimp_igv_t_nac / pn_ntpc;
			fn_it_nimp_t_sigv =  pn_it_nimp_t_sigv_nac / pn_ntpc;
			fn_it_nimp_t_cigv =  pn_it_nimp_t_cigv_nac / pn_ntpc;
			fn_it_nimp_in_u =  pn_it_nimp_in_u_nac / pn_ntpc;
			fn_it_nimp_in_t =  pn_it_nimp_in_t_nac / pn_ntpc;
			fn_it_nimp_ex_u =  pn_it_nimp_ex_u_nac / pn_ntpc;
			fn_it_nimp_ex_t =  pn_it_nimp_ex_t_nac / pn_ntpc;
			fn_it_nimp_per_u =  pn_it_nimp_per_u_nac / pn_ntpc;
			fn_it_nimp_per_t =  pn_it_nimp_per_t_nac / pn_ntpc;
			fn_it_nimp_u_ms =  pn_it_nimp_u_ms_nac / pn_ntpc;
			fn_it_nimp_n_ms =  pn_it_nimp_n_ms_nac / pn_ntpc;
			fn_it_nimp_d_ms =  pn_it_nimp_d_ms_nac / pn_ntpc;
			fn_it_nimp_i_ms =  pn_it_nimp_i_ms_nac / pn_ntpc;
			fn_it_nimp_t_ms =  pn_it_nimp_t_ms_nac / pn_ntpc;
		}

		f_da_fa_fa_it_ln_ADD(pc_ccod_mon_tpc, pn_ntpc);
	}

	if (fb_grid_insert === true) {fnc_grid_it_enumerar('I');}

	fnc_load_grid_it_x_cod_mon(fc_cb_ccod_mon);
};

function f_da_fa_fa_it_ln_ADD (pi_ccod_mon_lt, pi_ncam)
{
	fa_ve_ts_ve_dt_it.push(
						{
						'id_ts_ve_dt_it': 0,
						'nid_it': fn_it_nid_it,
						'ccod_it': fc_it_ccod_it,
						'cdsc_it': fc_it_cdsc_it,
						'ncant': fn_it_ncant,
						'ccod_um': fc_it_ccod_um,
						'cdsc_um': fc_it_cdsc_um,
						'cabr_um': fc_it_cabr_um,
						'ctipo_it': fc_it_ctipo_it,
						'ctipo_it_dsc': fc_it_ctipo_it_dsc,
						'ccod_lp': fc_it_ccod_lp,
						'cdsc_lp': fc_it_cdsc_lp,
						'cglosa': fc_it_cglosa,
						'ccod_mon_lt': pi_ccod_mon_lt,
						'ncam': fn_redondear_tpc(pi_ncam),
						'nimp_lp_u': fn_it_nimp_lp_u,
						'nimp_vp_u': fn_it_nimp_vp_u,
						'nimp_pf_u': fn_it_nimp_pf_u,
						'nimp_isc_u': fn_it_nimp_isc_u,
						'nimp_isc_t': fn_it_nimp_isc_t,
						'nimp_igv_u': fn_it_nimp_igv_u,
						'nimp_igv_t': fn_it_nimp_igv_t,
						'nimp_t_sigv': fn_it_nimp_t_sigv,
						'nimp_t_cigv': fn_it_nimp_t_cigv,
						'nimp_in_u': fn_it_nimp_in_u,
						'nimp_in_t': fn_it_nimp_in_t,
						'nimp_ex_u': fn_it_nimp_ex_u,
						'nimp_ex_t': fn_it_nimp_ex_t,
						'nimp_per_u': fn_it_nimp_per_u,
						'nimp_per_t': fn_it_nimp_per_t,
						'nimp_u_ms': fn_it_nimp_u_ms,
						'nimp_n_ms': fn_it_nimp_n_ms,
						'nimp_d_ms': fn_it_nimp_d_ms,
						'nimp_i_ms': fn_it_nimp_i_ms,
						'nimp_t_ms': fn_it_nimp_t_ms,
						'': jc_grid_row_opts_n

						/*
						// <!-- Vw -->
						"nid_it": ,
						"ccod_it": ,
						"cdsc_it": ,
						"cabr_um": ,
						"nimp_u": fnc_redondear_importe(pi_nimp_u),
						"ncant": ,
						"nimp_t": fnc_redondear_importe(pi_nimp_t),
						// <!-- it -->
						"ctipo_it": ,
						"ctipo_it_dsc": ,
						"ccod_um": ,
						"cdsc_um": ,
						"ccod_lp": ,
						"cdsc_lp": ,
						"cglosa": ,
						// <!-- tt -->
						"ccod_mon_lt": ,
						"ncam": ,
						"nimp_n": fnc_redondear_importe(pi_nimp_n),
						"nimp_i": fnc_redondear_importe(pi_nimp_i),
						"nimp_d": fnc_redondear_importe(pi_nimp_d),
						// <!-- Opts -->
						*/
							
						}
					);
};

function fnc_load_grid_it_x_cod_mon (pi_ccod_mon)
{
	if (fa_ve_ts_ve_dt_it.length == 0) {
		fnc_DataTable_fnAddData_to_array('grid_it', []);
		return;
	}

	// Ordenamos array
	//fa_ve_ts_ve_dt_it = fnc_Array_sortByKeyAsc(fa_ve_ts_ve_dt_it, 'nid_it');

	// Filtramos items por moneda de cabecera y lo cargamos al Datatable
	var da_fa_fa_it_x_cod_mon = fa_ve_ts_ve_dt_it.filter(function (row) {return row.ccod_mon_lt === pi_ccod_mon;});
	da_fa_fa_it_x_cod_mon = fnc_Array_sortByKeyAsc(da_fa_fa_it_x_cod_mon, 'nid_it');
	fnc_DataTable_fnAddData_to_array('grid_it', da_fa_fa_it_x_cod_mon);

	// Columnas y valores para la seleccion del registro insertado o modificado
	ia_columns = ['nid_it', 'ccod_it'];
	ia_values = [fn_it_nid_it, fc_it_ccod_it];
	fnc_grid_seleccionar_x_valores('grid_it');

	fnc_cb_tt_view();
};





// ============================================================
// Seleccion de item en la grilla
function fnc_grid_it_cdsc_it_column_link (ir_row_data)
{
	var pc_tipo = fnc_definir_tipo_origen();

	if (pc_tipo === 'form') {
		fnc_grid_it_row_edit(ir_row_data);
	}
	else if (pc_tipo === 'bd') {
		fnc_grid_it_row_view(ir_row_data);
	}
};

// View
function fnc_grid_it_row_view (ir_row_data)
{
	var ic_tipo = ir_row_data.ctipo_it;

	fnc_grid_it_estructura(ic_tipo);
	
	fnc_frm_objs_habilitar(fc_frm_dt_1);

	$(Obj_lnk('', '_lnk_grid_it_aceptar')).css({ display: 'none' });

	fnc_setear_campos_child(fc_frm_dt_1, 'grid_it');

	$('#mdl_grid_it').modal('open');
};

function fnc_grid_it_setear_campos_child_post (row_data)
{
	fr_row_data_dt_1 = row_data;

	var pc_ctipo_it = $(Obj_Col(fc_frm_dt_1, 'ctipo_it', 'div')).html();
	$(Obj_Col(fc_frm_dt_1, 'ctipo_it', 'div')).html(pc_ctipo_it === 'B' ? 'Bien' : 'Servicio');
	
	$(Obj_Col(fc_frm_dt_1, 'ccod_alm')).val($(Obj_Col(fc_frm_cb, 'ccod_alm')).val());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_alm')).val($(Obj_Col(fc_frm_cb, 'i_s_alm')).val());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_mon')).val($(Obj_Col(fc_frm_cb, 'cdsc_mon')).val());
};

// Edicion
function fnc_grid_it_row_edit (ir_row_data)
{
	// Valores del it
	fn_it_nid_it = ir_row_data.nid_it;
	fc_it_ccod_it = ir_row_data.ccod_it;
	fc_it_cdsc_it = ir_row_data.cdsc_it;
	fn_it_ncant = ir_row_data.ncant;
	fc_it_ccod_um = ir_row_data.ccod_um;
	fc_it_cdsc_um = ir_row_data.cdsc_um;
	fc_it_cabr_um = ir_row_data.cabr_um;
	fc_it_ctipo_it = ir_row_data.ctipo_it;
	fc_it_ctipo_it_dsc = ir_row_data.ctipo_it_dsc;
	fc_it_ccod_lp = ir_row_data.ccod_lp;
	fc_it_cdsc_lp = ir_row_data.cdsc_lp;
	fc_it_cglosa = ir_row_data.cglosa;

	fn_it_bexonerado = ir_row_data.bexonerado;
	fn_it_bigv = ir_row_data.bigv;
	fc_it_ccod_imp_igv = ir_row_data.ccod_imp_igv;
	/*
	fc_it_cdsc_imp_igv = ir_row_data.cdsc_imp_igv;
	fc_it_cabr_imp_igv = ir_row_data.cabr_imp_igv;
	*/
	fn_it_ntasa_imp_igv = ir_row_data.ntasa_imp_igv;

	fn_it_bisc = ir_row_data.bisc;
	fc_it_ccod_imp_isc = ir_row_data.ccod_imp_isc;
	/*
	fc_it_cdsc_imp_isc = ir_row_data.cdsc_imp_isc;
	fc_it_cabr_imp_isc = ir_row_data.cabr_imp_isc;
	*/
	fn_it_ntasa_imp_isc = ir_row_data.ntasa_imp_isc;

	fn_it_bper = ir_row_data.bper;
	fc_it_ccod_imp_per = ir_row_data.ccod_imp_per;
	/*
	fc_it_cdsc_imp_per = ir_row_data.cdsc_imp_per;
	fc_it_cabr_imp_per = ir_row_data.cabr_imp_per;
	*/
	fn_it_ntasa_imp_per = ir_row_data.ntasa_imp_per;

	fn_it_ncam = ir_row_data.ncam;
	fn_it_nimp_lp_u = ir_row_data.nimp_lp_u;
	fn_it_nimp_vp_u = ir_row_data.nimp_vp_u;
	fn_it_nimp_pf_u = ir_row_data.nimp_pf_u;
	fn_it_nimp_isc_u = ir_row_data.nimp_isc_u;
	fn_it_nimp_isc_t = ir_row_data.nimp_isc_t;
	fn_it_nimp_igv_u = ir_row_data.nimp_igv_u;
	fn_it_nimp_igv_t = ir_row_data.nimp_igv_t;
	fn_it_nimp_t_sigv = ir_row_data.nimp_t_sigv;
	fn_it_nimp_t_cigv = ir_row_data.nimp_t_cigv;
	fn_it_nimp_in_u = ir_row_data.nimp_in_u;
	fn_it_nimp_in_t = ir_row_data.nimp_in_t;
	fn_it_nimp_ex_u = ir_row_data.nimp_ex_u;
	fn_it_nimp_ex_t = ir_row_data.nimp_ex_t;
	fn_it_nimp_per_u = ir_row_data.nimp_per_u;
	fn_it_nimp_per_t = ir_row_data.nimp_per_t;
	fn_it_nimp_u_ms = ir_row_data.nimp_u_ms;
	fn_it_nimp_n_ms = ir_row_data.nimp_n_ms;
	fn_it_nimp_d_ms = ir_row_data.nimp_d_ms;
	fn_it_nimp_i_ms = ir_row_data.nimp_i_ms;
	fn_it_nimp_t_ms = ir_row_data.nimp_t_ms;
	
	
	

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
	fa_lq_usp_al_ct_it_dt_um_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_ct_it_dt_um_list, ['ccod_it'], [ir_row_data.ccod_it]);
	fa_lq_usp_al_ct_it_dt_um_list_tmp = fnc_Array_sortByKeyAsc(fa_lq_usp_al_ct_it_dt_um_list_tmp, 'nid_um');
	f_load_select_array(fc_frm_dt_1, 'um', 'ccod_um', 'cdsc_um', fa_lq_usp_al_ct_it_dt_um_list_tmp, true, fc_it_ccod_um);


	
	
	
	// ===========================================================================================
	// ===========================================================================================
	
	// Listas de precios
	$(Obj_Col(fc_frm_dt_1, 'nimp_lp_u')).val(fn_it_nimp_lp_u).trigger('change');

	//var fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_saldo_list, ['ccod_it', 'ccod_um', 'ccod_mon_lp', 'ccod_lp'], [fc_it_ccod_it, fc_it_ccod_um, fc_cb_ccod_mon, ''], ['=', '=', '=', '<>']);
	var fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_Filtrar_por_columnas(fa_lq_usp_al_it_saldo_list, ['ccod_it', 'ccod_um'], [fc_it_ccod_it, fc_it_ccod_um]);
	fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_EliminarDuplicados(fa_lq_usp_al_it_saldo_list_tmp, 'ccod_lp');
	fa_lq_usp_al_it_saldo_list_tmp = fnc_Array_sortByKeyDesc(fa_lq_usp_al_it_saldo_list_tmp, 'bpdt_lp');
	f_load_select_array(fc_frm_dt_1, 'lp', 'ccod_lp', 'cdsc_lp', fa_lq_usp_al_it_saldo_list_tmp, true, fc_it_ccod_lp);

	
	// ===========================================================================================
	// ===========================================================================================

	$(Obj_Col(fc_frm_dt_1, 'nimp_n_ms')).val(fn_it_nimp_n_ms).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_d_ms')).val(fn_it_nimp_d_ms).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_i_ms')).val(fn_it_nimp_i_ms).trigger('change');
	$(Obj_Col(fc_frm_dt_1, 'nimp_t_ms')).val(fn_it_nimp_t_ms).trigger('change');

	$(Obj_Col(fc_frm_dt_1, 'cglosa')).val(fc_it_cglosa);
	mb_bloquear_process = false;

	fb_grid_insert = false;
	
	$("#frm_grid_it_c_nsaldo").css('display', fc_it_ctipo_it === 'B' ? 'block' : 'none');

	fnc_frm_objs_validar(['frm_grid_it']);

	$(Obj_lnk('', '_lnk_grid_it_aceptar')).html('Modificar');
	$('#mdl_grid_it').modal('open');
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		MONEDA																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_SET_lnk_open_modal_tpc__hb (in_estado)
{
	if (in_estado === 1)
	{
		if (gc_cant_monedas === 1)
		{
			fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['n', 'n', 'n'], false);
		}
		else
		{
			fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['n', 's', 'n'], false);
		}
	}
	else if (in_estado === 2)
	{
		if (fr_row_data_cb.ccod_est === 'C')
		{
			if (fa_ve_ts_ve_dt_it.length > 0)
			{
				var fa_slq_usp_Get_em_mon_tpc_ln_tmp = fnc_get_tpc_registro();			
				
				if (fa_slq_usp_Get_em_mon_tpc_ln_tmp.length > 0)
				{
					if (gc_cant_monedas === 1)
					{
						fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['s', 'n', 's'], false);
					}
					else
					{
						fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['s', 's', 's'], false);
					}
				}
				else
				{
					fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['n', 'n', 'n'], false);
				}
			}
		}
		else if (fr_row_data_cb.ccod_est === 'B')
		{
			if (fa_ve_ts_ve_dt_it.length > 0)
			{
				var fa_slq_usp_Get_em_mon_tpc_ln_tmp = fnc_get_tpc_registro();			
				
				if (fa_slq_usp_Get_em_mon_tpc_ln_tmp.length > 0)
				{
					if (gc_cant_monedas === 1)
					{
						fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['s', 'n', 's'], false);
					}
					else
					{
						fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['s', 's', 's'], false);
					}
				}
				else
				{
					if (gc_cant_monedas === 1)
					{
						fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['n', 'n', 'n'], false);
					}
					else
					{
						fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['s', 's', 's'], false);
					}
				}
			}
			else
			{
				if (gc_cant_monedas === 1)
				{
					fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['n', 'n', 'n'], false);
				}
				else
				{
					fnc_SET_Obj_Attributes(fc_frm_cb, '_lnk_open_modal_tpc', ['hb_v', 'hb_n', 'hb_e'], ['s', 's', 's'], false);
				}
			}
		}
	}
};

function fnc_VAL_array_tpc ()
{
	var pb_value = true;
	if (fa_slq_usp_Get_em_mon_tpc_ln.length === 0 && gc_cant_monedas > 1)
	{
		pb_value = false;
		swal(gc_msj_titulo_error, '¡Aperture tipos de cambio mediante una fecha!', gc_msj_tipo_error);
	}
	else
	{
		$.each(fa_slq_usp_Get_em_mon_tpc_ln, function (i, option) {
			if (parseFloat(option.ntc_c) === 0) {
				pb_value = false;
				fnc_open_modal_tpc();
				swal(gc_msj_titulo_error, '¡Ingrese valor(es) de cambio de moneda(s)!', gc_msj_tipo_error);
			}
		});
	}

	return pb_value;
};

$(Obj_Col(fc_frm_cb, 'dfch_emi', 'input')).change(function()
{
	var pc_value_new = fnc_trim(String($(Obj_Col(fc_frm_cb, 'dfch_emi')).val()));
	pc_value_new = pc_value_new.substring(0, 10);

	if (pc_value_new !== '')
	{
		var pc_value_old = fnc_trim(String($(this).attr('data-old_value')));
		pc_value_old = pc_value_old.substring(0, 10);
	
		if (pc_value_new !== pc_value_old)
		{
			fb_cb_mon_tpc_modificado = false;
			//fa_slq_usp_Get_em_mon_tpc_ln = fnc_get_tpc_fecha(pc_value_new);
			fnc_get_tpc_fecha(pc_value_new);
			fnc_set_RowData__array_tpc();
		}
	}
	else
	{
		fb_cb_mon_tpc_modificado = false;
		fa_slq_usp_Get_em_mon_tpc_ln = [];
		fnc_set_RowData__array_tpc();

		fa_ve_ts_ve_dt_it = [];
		fnc_load_grid_it_x_cod_mon(fc_cb_ccod_mon);
		fnc_cb_calcular_importes();
	}
});

var pc_RowData_fa_slq_usp_Get_em_mon_tpc_ln;
function fnc_set_RowData__array_tpc()
{
	pc_RowData_fa_slq_usp_Get_em_mon_tpc_ln = "";
	if (fa_slq_usp_Get_em_mon_tpc_ln.length > 0)
	{
		pc_RowData_fa_slq_usp_Get_em_mon_tpc_ln = fnc_set_RowData_desde_Array(fa_slq_usp_Get_em_mon_tpc_ln, ['ccod_mon', 'ntc_c', 'ntc_v']);
	}
};


function fnc_get_tpc_fecha (ic_fecha)
{
	var pc_url = '/home/slq_usp_Get_em_mon_tpc_ln/?ic_ccod_emp=' + gc_ccod_emp + '&ic_dfch_tpc=' + ic_fecha;
	//return f_eject_ajax(pc_url, ['All'], []);
	fa_slq_usp_Get_em_mon_tpc_ln = f_eject_ajax(pc_url, ['All'], []);
};

function fnc_get_tpc_registro()
{
	var fa_lq_usp_ve_ts_ve_dt_it_list_tpc = fnc_Array_Filtrar_por_columnas(
																		fa_lq_usp_ve_ts_ve_dt_it_list,
																		['ccod_ve', 'ccod_mon_lt'],
																		[fr_row_data_cb.ccod_ve, fnc_GET_val__of__localStorage(lS_ccod_mon_nac)],
																		['=', '<>']
																	);

	fa_lq_usp_ve_ts_ve_dt_it_list_tpc = fnc_Array_EliminarDuplicados(fa_lq_usp_ve_ts_ve_dt_it_list_tpc, 'ccod_mon_lt');

	fa_lq_usp_ve_ts_ve_dt_it_list_tpc = fnc_Array_to_Array_for_Columns(
																	fa_lq_usp_ve_ts_ve_dt_it_list_tpc,
																	['ccod_mon_lt, ccod_mon', 'cdsc_mon', 'ncam, ntc_c', 'ntc_v=0', 'cabr_mon', 'csim_mon', 'group_=Monedas'],
																	''
																);
	return fa_lq_usp_ve_ts_ve_dt_it_list_tpc;
};

function fnc_open_modal_tpc ()
{
	var pc_tipo = fnc_definir_tipo_origen();

	if (pc_tipo === 'form')
	{
		if ($(Obj_Col(fc_frm_cb, 'dfch_emi')).val() === '')
		{
			swal(gc_msj_titulo_error, '¡Para aperturar tipos de cambio, ingrese Fecha de Emisión!', gc_msj_tipo_error);
			return;
		}
		
		if (fb_cb_mon_tpc_modificado === false)
		{
			var pc_dfch_emi = String($(Obj_Col(fc_frm_cb, 'dfch_emi')).val());
			pc_dfch_emi = pc_dfch_emi.substring(0, 10);
			
			var pc_url = '/home/slq_usp_Get_em_mon_tpc_ln/?ic_ccod_emp=' + gc_ccod_emp + '&ic_dfch_tpc=' + pc_dfch_emi;
			fa_slq_usp_Get_em_mon_tpc_ln = f_eject_ajax(pc_url, ['All'], []);
			fnc_DataTable_fnAddData_to_array('grid_mon_tpc', fa_slq_usp_Get_em_mon_tpc_ln);
		}
	}
	else if (pc_tipo === 'bd')
	{
		fnc_DataTable_fnAddData_to_array('grid_mon_tpc', fnc_get_tpc_registro());
	}

	$('#mdl_grid_mon_tpc').modal('open');
	fnc_set_focus('', 'i_filter_grid_mon_tpc');
};

function fnc_load_grid_it_x_modificacion_tpc() {
	if (fa_ve_ts_ve_dt_it.length == 0) {return;}

	fnc_it_recalcular_importes();
	//fnc_it_recalcular_importes_impuestos();

	// Obtener tpc de moneda cabecera si fuera diferente a la moneda nacional
	// fn_cb_ccod_mon_tpc = parseFloat(fnc_obtener_tpc_moneda_cabecera(fc_cb_ccod_mon, fnc_obtener_lista_de_tipos_de_cambio()));
	fn_cb_ccod_mon_tpc = parseFloat(fnc_obtener_tpc_moneda_cabecera(fc_cb_ccod_mon, fa_slq_usp_Get_em_mon_tpc_ln));
	
	fnc_cb_calcular_importes();
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		PERSONA																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_add_grid_em_ct_prs() {
	var data = fnc_Get_DataTable_RowData_Selected('grid_em_ct_prs');

	//mb_bloquear_process = true;
	$(Obj_Col(fc_frm_cb, 'ccod_prs')).val(data.ccod_prs).trigger('change');
	$(Obj_Col(fc_frm_cb, 'cdsc_prs')).val(data.cdsc_prs).trigger('change');
	//mb_bloquear_process = false;

	fnc_s_em_dir__load('');
	
	$('#mdl_grid_em_ct_prs').modal('close');
};

function fnc_grid_em_ct_prs_row_dblclick (ir_row_data) {
	fnc_add_grid_em_ct_prs();
};

// validar si se usa o no ::::: Utilizar Proceso despues de registrar un cliente - EN EL FORMULARIO EXTERNO
function fnc_em_dir__load_listas() {
	fnc_table_reload(
					'grid_em_ct_prs',
					'/home/lq_usp_em_prs_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs=' + '&ic_cest=A' + '&ic_cmp_OrderBy=cdsc_prs_tip' + '&ic_load_BD=load_BD',
					''
					);

	f_eject_ajax('/home/lq_usp_em_dt_dir_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccodigo=' + '&in_ccod_dir=0' + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=load_BD');
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
	var pc_url = '/home/lq_usp_em_dt_dir_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccodigo=' + fc_em_dir__em_prs__ccodigo + '&in_ccod_dir=0' + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=';
	f_load_select_ajax(fc_frm_cb, 'dir', 'ccod_dir', 'cdsc_dir', pc_url, true, in_ccod_dir);
};

function fnc_open_modal_prs1() {
	
	$('#mdl_grid_em_ct_prs').modal('close');
		
	// open_form('http://localhost:48458/Home/Index');
	open_form('/Home/frm_em_ct_prs', gc_group_popup_window);

	return;
	
	//============================================================
	
	//jc_grid_row_opts = jc_grid_row_opts_n;
	
	//jc_est_form = 'n';
	//fnc_hb_usu_opts();
			
	fnc_frm_objs_habilitar(fc_frm_cb_em_prs, 'n');
	//fnc_inputs_cargar_caracteristicas('', ''); //quitado validar si va o no
	
	fnc_child_nuevo_em_prs();

	fnc_frm_objs_validar([fc_frm_cb_em_prs]);

	//$('.nav_title_sub').html('(Nuevo Registro)');
	
	//============================================================
	
	
	
	$('#mdl_grid_em_ct_prs').modal('close');
	$('#mdl_' + fc_frm_cb_em_prs).modal('open');
};


function fnc_open_modal_prs()
{
	var pc_url = '/home/lq_usp_em_ct_prs_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs=' + '&ic_cest=' + fc_ct_cest_Activo + '&ic_cmp_OrderBy=cdsc_prs_tip' + '&ic_load_BD=ic_load_BD';

	fnc_table_reload(
					'grid_em_ct_prs',
					pc_url,
					''
					);
	
	$('#mdl_grid_em_ct_prs').modal('open');
	fnc_set_focus('', 'i_filter_grid_em_ct_prs');
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
function fnc_mdl_grid_em_ct_prs_post_finish_load_modal() {
	$('[data-lnk="_lnk_open_modal_prs1"]').removeClass('display_none');
};

function fnc_mdl_grid_em_ct_prs_post_finish_close_modal() {
	$('[data-lnk="_lnk_open_modal_prs1"]').addClass('display_none');
};

