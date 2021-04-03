/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																VARIABLES DE FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fa_frm_tab = ['Ficha'];
var fc_frm_cb = 'form_main';

var pa_results_doc = [];
var pa_results_mdc = [];

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_child_set_menu()
{
	fnc_SET_variables_de_menu('2103');
};

function fnc_child_set_html()
{
	fnc_html_em_dir('body .container');
};

function fnc_child_ready()
{
	fnc_child_cargar_valores_iniciales();
	fnc_child_objects_load_functions();
};

/*
fnc_child_objects_load_functions: Funcion que se maneja solo en el formulario hijo, carga valores de objetos una vez.
*/
function fnc_child_objects_load_functions()
{
	$(Obj_Col(fc_frm_cb, 'prs_tip', 'select')).change(function() {
		if (mb_bloquear_process === true) {return;}
		
		var pc_ccod_prs_tip =  $(this).val();
		if (pc_ccod_prs_tip !== '') {
			fnc_set_prs_tip(pc_ccod_prs_tip);
		}
	});

	$(
		Obj_Col(fc_frm_cb, 'cape_pat', 'input') + ', ' +
		Obj_Col(fc_frm_cb, 'cape_mat', 'input') + ', ' +
		Obj_Col(fc_frm_cb, 'cape_cas', 'input') + ', ' +
		Obj_Col(fc_frm_cb, 'cnom', 'input')
	).on('keyup', function() {
		fnc_generar_descripcion();
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

	f_load_select_ajax(
						fc_frm_cb, 'prs_csf', 'ccod_prs_csf', 'cdsc_prs_csf',
						'/home/lq_usp_em_ct_prs_csf_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs_csf=' + '&ic_cest=' + fc_ct_cest_Activo +  '&ic_load_BD=',
						false, ''
						);

	f_load_select_ajax(
						fc_frm_cb, 'prs_tip', 'ccod_prs_tip', 'cdsc_prs_tip',
						'/home/lq_usp_em_ct_prs_tip_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs_tip=' + '&ic_cest=' + fc_ct_cest_Activo +  '&ic_load_BD=',
						false, ''
						);

	f_load_select_ajax(
						fc_frm_cb, 'tsx', 'ccod_tsx', 'cdsc_tsx',
						'/home/lq_usp_em_ct_prs_tsx_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_tsx=' + '&ic_cest=' + fc_ct_cest_Activo +  '&ic_load_BD=',
						false, ''
						);

	// Direccion
	f_load_select_ajax(
						fc_frm_dt_dir, 'dir_tpv', 'ccod_dir_tpv', 'cdsc_dir_tpv',
						'/home/lq_usp_em_ct_dir_tpv_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_ccod_dir_tpv=' +  '&ic_load_BD=',
						false, ''
						);

	f_load_select_ajax(
						fc_frm_dt_dir, 'dir_tpz', 'ccod_dir_tpz', 'cdsc_dir_tpz',
						'/home/lq_usp_em_ct_dir_tpz_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_ccod_dir_tpz=' +  '&ic_load_BD=',
						false, ''
						);

};

function fnc_child_cargar_valores_post_proceso()
{
	var pa_columns = ['All'];
	var pc_url = '/home/lq_usp_em_dt_mdc_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccodigo=' + '&ic_load_BD=load_BD';
	pa_results_mdc = f_eject_ajax(pc_url, pa_columns, []);

	var pa_columns = ['All'];
	var pc_url = '/home/lq_usp_em_ct_prs_dt_doc_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs=' + '&ic_cest=' + '&ic_load_BD=load_BD';
	pa_results_doc = f_eject_ajax(pc_url, pa_columns, []);

	var pa_columns = ['All'];
	var pc_url = '/home/lq_usp_em_dt_dir_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccodigo=' + '&in_ccod_dir=0' + '&ic_cest=' + '&ic_load_BD=load_BD';
	pa_results_dir = f_eject_ajax(pc_url, pa_columns, []);

	var pa_columns = ['All'];
	var pc_url = '/home/lq_usp_em_dt_dir_dt_det_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccodigo=' + '&in_ccod_dir=0' + '&ic_load_BD=load_BD';
	fa_results_dir_det = f_eject_ajax(pc_url, pa_columns, []);

	fnc_table_reload(
					'grid_lista',
					'/home/lq_usp_em_ct_prs_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs=' + '&ic_cest=' + '&ic_cmp_OrderBy=' + '&ic_load_BD=load_BD',
					'grid_lista'
					);
};

function fnc_objects_load_functions_post_child() {
	fnc_tabs_select_tab('tab_main', 'tab_lista');
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	  GRID_LISTA																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_grid_lista_setear_campos_child_post(row_data) {
	fr_row_data_cb = row_data;
	fc_em_dir__em_prs__ccodigo = gc_prefijo__em_dir__em_prs__ccodigo + String(fr_row_data_cb.ccod_prs);

	mb_bloquear_process = true;
	fnc_set_prs_tip(fr_row_data_cb.ccod_prs_tip);
	fnc_add_rows_doc();
	fnc_add_rows_mdc();
	fnc_add_rows_dir();
	mb_bloquear_process = false;
	fnc_frm_objs_habilitar(fc_frm_cb + ' [data-rows]', 'v');
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

function fnc_child_nuevo() {
	fnc_checkbox_set_value(fc_frm_cb, 'cest', true);

	fnc_row_doc_nuevo();
	fnc_row_dir_nuevo();
	fnc_row_mdc_nuevo();
	
	fa_em_dir = [];
	fa_em_dir_det = [];
	
	$('.prs_tip_f').addClass('display_none');
	$('.prs_tip_j').addClass('display_none');
};

function fnc_child_valores_predeterminados() {
};

function fnc_child_editar() {
};

function fnc_child_registrar() {

	var pc_ccod_prs = $(Obj_Col(fc_frm_cb, 'ccod_prs')).val();
	if (jc_est_form === 'e') {
		pc_ccod_prs = fr_row_data_cb.ccod_prs;
	}
	
	var pc_accion = jc_est_form;

	var pa_RowData_cab = [
							jc_est_form, //pc_accion,
							gc_ccod_emp,
							pc_ccod_prs,
							($(Obj_Col(fc_frm_cb, 'cest')).is(':checked') ? 'A' : 'I'),
							$(Obj_Col(fc_frm_cb, 'prs_csf')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'prs_tip')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'cdsc_prs')).val(),
							$(Obj_Col(fc_frm_cb, 'cape_pat')).val(),
							$(Obj_Col(fc_frm_cb, 'cape_mat')).val(),
							$(Obj_Col(fc_frm_cb, 'cape_cas')).val(),
							$(Obj_Col(fc_frm_cb, 'cnom')).val(),
							$(Obj_Col(fc_frm_cb, 'tsx')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'dfch_nac')).val(),
							$(Obj_Col(fc_frm_cb, 'cnom_comercial')).val(),
							''
						];
	var pc_RowData_cab = fnc_Get_File_Values(pa_RowData_cab);
	
	var pc_RowData_doc = fnc_set_RowData(fc_frm_cb, ['prs_doc_', 'cnum_doc_']);
	var pc_RowData_mdc = fnc_set_RowData(fc_frm_cb, ['mdc_', 'cdsc_mdc_']);

	// :::::::::::::: em_dir - Inicio ::::::::::::::
	var pa_RowData_dir = [];
	var pc_RowData_dir = '';
	for (var i = 0; i < fa_em_dir.length; i++) {
		pa_RowData_dir = [
							fa_em_dir[i].ccod_dir,
							fa_em_dir[i].cest,
							fa_em_dir[i].bpdt,
							fa_em_dir[i].cdsc_dir,
							fa_em_dir[i].ccod_dir_tpv,
							fa_em_dir[i].cdsc_via,
							fa_em_dir[i].cnum,
							fa_em_dir[i].ccod_dir_tpz,
							fa_em_dir[i].cdsc_zon,
							fa_em_dir[i].ccod_dir_dst,
							fa_em_dir[i].cref,
							fa_em_dir[i].cobs
							];
		pc_RowData_dir = pc_RowData_dir + fnc_Get_File_Values(pa_RowData_dir);
	}
	// :::::::::::::: em_dir - fin ::::::::::::::

	// :::::::::::::: em_dir_det - Inicio ::::::::::::::
	var pa_RowData_dir_det = [];
	var pc_RowData_dir_det = '';
	for (var i = 0; i < fa_em_dir_det.length; i++) {
		pa_RowData_dir_det = [
								fa_em_dir_det[i].ccod_dir,
								fa_em_dir_det[i].ccod_dir_det,
								fa_em_dir_det[i].cdsc_dir_det
								];
		pc_RowData_dir_det = pc_RowData_dir_det + fnc_Get_File_Values(pa_RowData_dir_det);
	}
	// :::::::::::::: em_dir_det - fin ::::::::::::::

	var pa_data = [pc_RowData_cab, pc_RowData_doc, pc_RowData_mdc, pc_RowData_dir, pc_RowData_dir_det];
	return [pa_data];
};

function fnc_child_form_objs_verificar_requeridos() {
	return fnc_form_objs_verificar_requeridos([fc_frm_cb]);
};

function fnc_child_registrar_select(ir_dataResult) {
	ia_columns = ['ccod_prs'];
	ia_values = [$(Obj_Col(fc_frm_cb, 'ccod_prs')).val()];
};

function fnc_child_eliminar()
{
	return ['Eliminar', [fnc_Get_File_Values(['d', gc_ccod_emp, fr_row_data_cb.ccod_prs]), '', '', '', ''], [], []];
};

function fnc_child_eliminar_post()
{
	fnc_child_cargar_valores_post_proceso();
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES DEL PROCESO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fc_cprs_tip = ''; // Definir si sera variable local solamente
function fnc_set_prs_tip(ic_ccod_prs_tip) {

	var pc_url = '/home/lq_usp_em_ct_prs_tip_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs_tip=' + ic_ccod_prs_tip + '&ic_cest=' + '&ic_load_BD=';
	fc_cprs_tip = fnc_ajax_extraer_dato(pc_url, 'cprs_tip');

	if (jc_est_form === 'n' || jc_est_form === 'e') {
		fnc_row_doc_nuevo();

		$(Obj_Col(fc_frm_cb, 'cdsc_prs')).val('');
		$(Obj_Col(fc_frm_cb, 'cnom_comercial')).val('');
		$(Obj_Col(fc_frm_cb, 'cape_pat')).val('').trigger('change');
		$(Obj_Col(fc_frm_cb, 'cape_mat')).val('').trigger('change');
		$(Obj_Col(fc_frm_cb, 'cnom')).val('').trigger('change');
		$(Obj_Col(fc_frm_cb, 'cape_cas')).val('');
		$(Obj_Col(fc_frm_cb, 'dfch_nac')).val('');
		$(Obj_Col(fc_frm_cb, 'tsx')).val('').trigger('change');
	}

	if (fc_cprs_tip === 'F') {
		$('.prs_tip_j').addClass('display_none');
		$('.prs_tip_f').removeClass('display_none');
		
		fnc_SET_Obj_Attributes(fc_frm_cb, 'cdsc_prs', ['hb_n', 'hb_e'], ['n', 'n'], false);
		fnc_SET_Obj_Attributes(fc_frm_cb, 'cape_pat', ['hb_n', 'hb_e'], ['s', 's'], true);
		fnc_SET_Obj_Attributes(fc_frm_cb, 'cape_mat', ['hb_n', 'hb_e'], ['s', 's'], true);
		fnc_SET_Obj_Attributes(fc_frm_cb, 'cape_cas', ['hb_n', 'hb_e'], ['s', 's'], false);
		fnc_SET_Obj_Attributes(fc_frm_cb, 'cnom', ['hb_n', 'hb_e'], ['s', 's'], true);
	}
	else if (fc_cprs_tip === 'J') {
		$('.prs_tip_j').removeClass('display_none');
		$('.prs_tip_f').addClass('display_none');
		
		fnc_SET_Obj_Attributes(fc_frm_cb, 'cdsc_prs', ['hb_n', 'hb_e'], ['s', 's'], true);
		fnc_SET_Obj_Attributes(fc_frm_cb, 'cape_pat', ['hb_n', 'hb_e'], ['n', 'n'], false);
		fnc_SET_Obj_Attributes(fc_frm_cb, 'cape_mat', ['hb_n', 'hb_e'], ['n', 'n'], false);
		fnc_SET_Obj_Attributes(fc_frm_cb, 'cape_cas', ['hb_n', 'hb_e'], ['n', 'n'], false);
		fnc_SET_Obj_Attributes(fc_frm_cb, 'cnom', ['hb_n', 'hb_e'], ['n', 'n'], false);
	}

};

function fnc_generar_descripcion() {
	var pc_cape_pat = $.trim($(Obj_Col(fc_frm_cb, 'cape_pat')).val());
	var pc_cape_mat = $.trim($(Obj_Col(fc_frm_cb, 'cape_mat')).val());
	var pc_cape_cas = $.trim($(Obj_Col(fc_frm_cb, 'cape_cas')).val());
	var pc_cnom = $.trim($(Obj_Col(fc_frm_cb, 'cnom')).val());
	var pc_cdsc_prs = '';

	if (pc_cape_pat.length > 0 || pc_cape_mat.length > 0 || pc_cape_cas.length > 0 || pc_cnom.length > 0) {
		pc_cdsc_prs = pc_cape_pat + '/' + pc_cape_mat + ', ' + pc_cnom;	
	}
	
	$(Obj_Col(fc_frm_cb, 'cdsc_prs')).val(pc_cdsc_prs);
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	ROWS: DOCUMENTOS																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fc_div_head_row_doc = '#title_row_doc';
var fc_div_row_doc = 'row_doc_';
var fn_id_row_doc = 0;

function fnc_row_doc_nuevo() {
	fn_id_row_doc = 0;
	$("div[data-row*='" + fc_div_row_doc + "']").remove();
	fnc_row_remove(fc_div_row_doc, fc_div_head_row_doc);
};

function fnc_add_row_doc() {
	$(fc_div_head_row_doc).removeClass('display_none');
	
	fnc_add_div_row_doc();

	//agregar a validar formulario
	f_obj_validar_vacio(fc_frm_cb, 'prs_doc_' + fn_id_row_doc, 'select', '');
	f_obj_validar_vacio(fc_frm_cb, 'cnum_doc_' + fn_id_row_doc, 'input', '');
};

function fnc_add_div_row_doc () {
	fn_id_row_doc = fn_id_row_doc + 1;
	fo_div_row = $('<div data-row="' + fc_div_row_doc + String(fn_id_row_doc) + '" class="row ft_2_data-row" />');
	
	fo_div_row_object_1 = $('<div class="col s3 display_none"><input type="text" class="lks" data-col="ccod_prs_doc_' + fn_id_row_doc + '" data-clear="n" data-hb_v="n" data-hb_n="s" data-hb_e="s" required /></div>');

	if (jc_est_form === 'n' || jc_est_form === 'e') {pc_string = "<div class='col s7'>";}
	else if (jc_est_form === 'v') {pc_string = "<div class='col s8' data-col_before='s7' data-col_after='s8'>";}
	fo_div_row_object_2 = $(pc_string + '<select class="select2 s2" data-col="prs_doc_' + fn_id_row_doc + '" data-dsc="Tipo de Documento" data-allow-clear="false" data-hb_v="n" data-hb_n="s" data-hb_e="s" data-i_ccod required></select></div>');
	
	fo_div_row_object_3 = $('<div class="col s4"><input type="text" class="lks" data-col="cnum_doc_' + fn_id_row_doc + '" data-dsc="Número de Documento" data-hb_v="n" data-hb_n="s" data-hb_e="s" required /></div>');
	
	fnc_div_row_fo_button_remove('' ,'_lnk_row_remove_doc_' + String(fn_id_row_doc), fc_div_row_doc, fc_div_head_row_doc, '');

	fo_div_row.append(fo_div_row_object_1);
	fo_div_row.append(fo_div_row_object_2);
	fo_div_row.append(fo_div_row_object_3);
	fo_div_row.append(fo_div_row_button_remove);
	$("div[data-rows='doc']").append(fo_div_row);
	
	
	// Caracteristicas del input
	fnc_inputs_cargar_caracteristicas(fc_frm_cb, 'cnum_doc_' + fn_id_row_doc);
	
	// Caracteristicas del select
	fnc_selects_cargar_caracteristicas(fc_frm_cb, 'prs_doc_' + fn_id_row_doc);
	f_select_input(fc_frm_cb, 'hb', $(Obj_Col(fc_frm_cb, 'prs_doc_' + fn_id_row_doc)), 'n');
	f_load_select_ajax(
						fc_frm_cb, 'prs_doc_' + fn_id_row_doc, 'ccod_prs_doc', 'cdsc_prs_doc',
						'/home/lq_usp_em_ct_prs_doc_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs_doc=' + '&ic_cprs_tip=' + fc_cprs_tip + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD='
						, false, ''
						);
};

function fnc_add_rows_doc () {
	var pa_results = fnc_Array_Filtrar_por_columnas(pa_results_doc, ['ccod_prs'], [fr_row_data_cb.ccod_prs]);
	
	fn_id_row_doc = 0;
	$("div[data-row*='" + fc_div_row_doc + "']").remove();

	for (var i = 0; i < pa_results.length; i++) {
		fnc_add_div_row_doc();
		//$(Obj_Col(fc_frm_cb, 'ccod_prs_doc_' + String(fn_id_row_doc))).val(pc_ccod_imp);
		$(Obj_Col(fc_frm_cb, 'prs_doc_' + String(fn_id_row_doc))).val(pa_results[i].ccod_prs_doc).trigger('change');
		$(Obj_Col(fc_frm_cb, 'cnum_doc_' + String(fn_id_row_doc))).val(pa_results[i].cnum_doc);
	}
	fnc_row_remove(fc_div_row_doc, fc_div_head_row_doc);
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		ROWS: MDC																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fc_div_head_row_mdc = '#title_row_mdc';
var fc_div_row_mdc = 'row_mdc_';
var fn_id_row_mdc = 0;

function fnc_row_mdc_nuevo() {
	fn_id_row_mdc = 0;
	$("div[data-row*='" + fc_div_row_mdc + "']").remove();
	fnc_row_remove(fc_div_row_mdc, fc_div_head_row_mdc);
};

function fnc_add_row_mdc() {
	
	// var pc_ccod_um_eq = $(Obj_Col(fc_frm_cb, 'ccod_um')).val();

	$(fc_div_head_row_mdc).removeClass('display_none');
	fnc_add_div_row_mdc();

	f_obj_validar_vacio(fc_frm_cb, 'mdc_' + fn_id_row_mdc, 'select', '');

	// $(Obj_Col(fc_frm_cb, 'cdet_' + fn_id_row_mdc)).val(pc_ccod_um_eq);
	f_obj_validar_vacio(fc_frm_cb, 'cdsc_mdc_' + fn_id_row_mdc, 'input', '');
};

function fnc_add_div_row_mdc () {
	fn_id_row_mdc = fn_id_row_mdc + 1;
	fo_div_row = $('<div data-row="' + fc_div_row_mdc + String(fn_id_row_mdc) + '" class="row ft_2_data-row" />');
	
	fo_div_row_object_1 = $('<div class="col s3 display_none"><input type="text" class="lks" data-col="ccod_mdc_' + fn_id_row_mdc + '" readonly /></div>');
	fo_div_row_object_2 = $('<div class="col s4"><select class="select2 s2" data-col="mdc_' + fn_id_row_mdc + '" data-dsc="Tipo de Medio" data-allow-clear="false" data-hb_v="n" data-hb_n="s" data-hb_e="s" data-i_ccod data-zi="mdl_form_main_em_prs" required></select></div>');

	if (jc_est_form === 'n' || jc_est_form === 'e') {pc_string = "<div class='col s7'>";}
	else if (jc_est_form === 'v') {pc_string = "<div class='col s8' data-col_before='s7' data-col_after='s8'>";}
	
	// fo_div_row_object_3 = $(pc_string + '<input type="text" class="lks" data-col="cdsc_' + fn_id_row_mdc + '" data-dsc="Cantidad equivalente" data-clear="s" data-hb_v="n" data-hb_n="s" data-hb_e="s" required /></div>');
	fo_div_row_object_3 = $(pc_string + '<input type="text" class="lks" data-col="cdsc_mdc_' + fn_id_row_mdc + '" data-dsc="Descripción del Medio" data-clear="s" data-hb_v="n" data-hb_n="s" data-hb_e="s" required /></div>');
	
	//fo_div_row_object_4 = $('<div class="col s4"><input type="text" class="lks" data-col="cdet_' + fn_id_row_mdc + '" data-clear="s" data-hb_v="n" data-hb_n="s" data-hb_e="s" /></div>');
	
	fnc_div_row_fo_button_remove('' ,'_lnk_row_remove_mdc_' + String(fn_id_row_mdc), fc_div_row_mdc, fc_div_head_row_mdc, '');

	fo_div_row.append(fo_div_row_object_1);
	fo_div_row.append(fo_div_row_object_2);
	fo_div_row.append(fo_div_row_object_3);
	// fo_div_row.append(fo_div_row_object_4);
	fo_div_row.append(fo_div_row_button_remove);
	$("div[data-rows='mdc']").append(fo_div_row);
	
	// Caracteristicas del input
	fnc_inputs_cargar_caracteristicas(fc_frm_cb, 'cdsc_mdc_' + fn_id_row_mdc);
	// fnc_inputs_cargar_caracteristicas(fc_frm_cb, 'cdet_' + fn_id_row_mdc);
	
	// Caracteristicas del select
	fnc_selects_cargar_caracteristicas(fc_frm_cb, 'mdc_' + fn_id_row_mdc);
	f_select_input(fc_frm_cb, 'hb', $(Obj_Col(fc_frm_cb, 'mdc_' + fn_id_row_mdc)), 'n');
	f_load_select_ajax(fc_frm_cb, 'mdc_' + fn_id_row_mdc, 'ccod_mdc', 'cdsc_mdc', '/home/lq_usp_em_ct_mdc_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_mdc=' + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=', false, '');

};

function fnc_add_rows_mdc() {
	var pa_results = fnc_Array_Filtrar_por_columnas(pa_results_mdc, ['ccodigo'], [fc_em_dir__em_prs__ccodigo]);

	fn_id_row_mdc = 0;
	$("div[data-row*='" + fc_div_row_mdc + "']").remove();
	
	for (var i = 0; i < pa_results.length; i++) {
		fnc_add_div_row_mdc();
		$(Obj_Col(fc_frm_cb, 'ccod_um_' + fn_id_row_mdc)).val(pa_results[i].ccod_um);
		$(Obj_Col(fc_frm_cb, 'cdsc_mdc_' + fn_id_row_mdc)).val(pa_results[i].cdsc);
		$(Obj_Col(fc_frm_cb, 'mdc_' + String(fn_id_row_mdc))).val(pa_results[i].ccod_mdc).trigger('change');
	}

	fnc_row_remove(fc_div_row_mdc, fc_div_head_row_mdc);
};
