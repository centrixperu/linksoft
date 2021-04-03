/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																VARIABLES DE FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fa_frm_tab = ['Ficha'];
var fc_frm_cb = 'form_main';

var fc_frm_dt_1 = 'frm_grid_it';

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_child_set_html() {

};

function fnc_child_ready() {

	// Temporal, variables que se carga en el click del menu link
	mc_ccod_men = '15';
	mc_cdsc_men = 'Alumno';
	mc_men_form = 'frm_ga_gac_ct';
	mc_tipo_form = 'frm_ct';
	pc_style_form = 'form_ts_style_1';

	fnc_child_objects_load_functions();
	fnc_child_cargar_valores_iniciales();

};

/*
fnc_child_objects_load_functions: Funcion que se maneja solo en el formulario hijo, carga valores de objetos una vez.
*/
function fnc_child_objects_load_functions() {
	$(Obj_Col(fc_frm_cb, 'aac', 'select')).change(function() {
		if (mb_bloquear_process === true) {return;}
		
		fnc_select_nac_load($(this).val(), '');
	});
};

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

	fnc_create_mdl_search(
						'grid_em_prs_ct',
						'out',
						//'/home/lq_usp_em_prs_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs=' + '&ic_cest=' + cc_cest_A_1 + '&ic_cmp_OrderBy=cdsc_prs_tip' + '&ic_load_BD=',
						'/home/lq_usp_em_prs_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_prs=' + '&ic_cest=' + '1' + '&ic_cmp_OrderBy=cdsc_prs_tip' + '&ic_load_BD=',
						'data-row_dblclick',
						'', false, false, true, 
						'height_90 width_80 finish_load_modal finish_close_modal',
						'Seleccionar persona'
						);

	f_load_select_ajax(fc_frm_cb, 'aac', 'ccod_aac', 'cdsc_aac', '/home/lq_usp_ga_aac_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + '1' + '&ic_load_BD=', false, '');
};

function fnc_child_cargar_valores_post_proceso() {
	fnc_table_reload(
					'grid_lista',
					'/home/lq_usp_ga_gac_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + '-1' + '&ic_load_BD=load_BD',
					'grid_lista'
					);
};

function fnc_objects_load_functions_post_child() {
	$('#tab_main').tabs('select', 'tab_lista');
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	TRANSACCIONES																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_child_nuevo() {
	$(Obj_Col(fc_frm_cb, 'cest')).prop('checked', true);
	$(Obj_Col(fc_frm_cb, 'cest')).attr('checked', true).trigger('change');
};

function fnc_child_valores_predeterminados() {
};

function fnc_child_editar() {
	fnc_select_nac_load(fr_row_data_cb.ccod_aac, fr_row_data_cb.ccod_nac);
};

function fnc_child_registrar() {
	
	var pc_ccod_nac = $(Obj_Col(fc_frm_cb, 'ccod_nac')).val();
	var pc_ccod_gac = $(Obj_Col(fc_frm_cb, 'ccod_gac')).val();
	if (jc_est_form === 'e') {
		pc_ccod_nac = fr_row_data_cb.ccod_nac;
		pc_ccod_gac = fr_row_data_cb.ccod_gac;
	}
	
	var pc_accion = jc_est_form;

	var pa_RowData_cab = [
							pc_accion,
							gc_ccod_emp,
							pc_ccod_nac,
							pc_ccod_gac,
							($(Obj_Col(fc_frm_cb, 'cest')).is(':checked') ? '1' : '0'),
							$(Obj_Col(fc_frm_cb, 'cdsc_gac')).val()
						];
	var pc_RowData_cab = fnc_Get_File_Values(pa_RowData_cab);

	var pa_data = [pc_RowData_cab];
	return ['ga_gac_ct', pa_data];
	//return [mc_men_form, pa_data];
};

function fnc_child_form_objs_verificar_requeridos() {
	return fnc_form_objs_verificar_requeridos(fc_frm_cb);
};

function fnc_child_registrar_select(ir_dataResult) {
	ia_columns = ['ccod_nac', 'ccod_gac'];
	ia_values = [$(Obj_Col(fc_frm_cb, 'ccod_nac')).val(), $(Obj_Col(fc_frm_cb, 'ccod_gac')).val()];
};

function fnc_child_eliminar() {
	//return [mc_men_form, 'Eliminar', [fnc_Get_File_Values([gc_ccod_emp, fr_row_data_cb.ccod_prs])], '', 'fnc_child_eliminar_post', []];
	return ['ga_gac_ct', 'Eliminar', [fnc_Get_File_Values(['d', gc_ccod_emp, fr_row_data_cb.ccod_nac, fr_row_data_cb.ccod_gac])], '', 'fnc_child_eliminar_post', []];
};

function fnc_child_eliminar_post() {
	fnc_child_cargar_valores_post_proceso();
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	  GRID_LISTA																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_grid_lista_setear_campos_child_post (row_data) {
	fr_row_data_cb = row_data;
};

function fnc_add_grid_lista() {
	$('#tab_main').tabs('select', 'tab_1');
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES DEL PROCESO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_select_nac_load(ic_ccod_aac, ic_ccod_aac_select = '') {
	//$(Obj_Col(fc_frm_cb, 'nac')).empty().trigger('change');
	var pc_ccod_aac =  $.trim(ic_ccod_aac);
	if (pc_ccod_aac !== '') {
		var pc_url = '/home/lq_usp_ga_nac_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_aac=' + pc_ccod_aac + '&ic_cest=' + '1' + '&ic_load_BD=';
		f_load_select_ajax(fc_frm_cb, 'nac', 'ccod_nac', 'cdsc_nac', pc_url, false, ic_ccod_aac_select);
	}
	else {
		$(Obj_Col(fc_frm_cb, 'nac')).empty().trigger('change');
	}
};














var pc_modal_prs = '';
function fnc_open_modal_prs_rel() {
	pc_modal_prs = 'rel';
	$('#mdl_grid_em_prs_ct').modal('open');
	fnc_set_focus('', 'i_filter_grid_em_prs_ct');
};

function fnc_open_modal_prs() {
	pc_modal_prs = 'alu';
	$('#mdl_grid_em_prs_ct').modal('open');
	fnc_set_focus('', 'i_filter_grid_em_prs_ct');
};
function fnc_mdl_grid_em_prs_ct_post_finish_load_modal() {
	$('[data-lnk="_lnk_open_modal_prs1"]').removeClass('display_none');
};
function fnc_mdl_grid_em_prs_ct_post_finish_close_modal() {
	$('[data-lnk="_lnk_open_modal_prs1"]').addClass('display_none');
};
function fnc_grid_em_prs_ct_row_dblclick (ir_row_data) {
	fnc_add_grid_em_prs_ct();
};
function fnc_add_grid_em_prs_ct() {
	var data = fnc_Get_DataTable_RowData_Selected('grid_em_prs_ct');

	//mb_bloquear_process = true;
	if (pc_modal_prs === 'alu') {
		$(Obj_Col(fc_frm_cb, 'ccod_prs_alu')).val(data.ccod_prs).trigger('change');
		$(Obj_Col(fc_frm_cb, 'cdsc_prs_alu')).val(data.cdsc_prs).trigger('change');		
	}
	else if (pc_modal_prs === 'rel') {
		$(Obj_Col(fc_frm_dt_1, 'ccod_prs_rel')).val(data.ccod_prs).trigger('change');
		$(Obj_Col(fc_frm_dt_1, 'cdsc_prs_rel')).val(data.cdsc_prs).trigger('change');
	}
	//mb_bloquear_process = false;

	//fnc_s_em_dir__load('');
	
	$('#mdl_grid_em_prs_ct').modal('close');
};













function fnc_nueva_dir() {

	
	fnc_frm_objs_habilitar(fc_frm_dt_1, 'n');
	// fnc_inputs_cargar_caracteristicas(fc_frm_dt_1, '');
	
	// f_valores_predeterminados_form__em_dir();
	fnc_frm_objs_validar(fc_frm_dt_1, '');
	

	/*
	////jc_grid_row_opts = jc_grid_row_opts_n;
	//
	//jsb_mdl_dir__load_select = true;
	//
	//// f_nuevo_form__em_dir();
	//
	//fnc_frm_objs_habilitar('form_direccion', 'n');
	//fnc_inputs_cargar_caracteristicas('form_direccion', '');
	//
	//f_valores_predeterminados_form__em_dir();
	//fnc_frm_objs_validar('form_direccion', '');
	//
	//jsb_mdl_dir__load_select = false;
	
	
	
	
	
	// function f_valores_predeterminados_form__em_dir() {
		
	$(Obj_Col(fc_frm_dt_dir, 'ccod_prs')).val($(Obj_Col(fc_frm_cb, 'ccod_prs')).val());
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_prs')).val($(Obj_Col(fc_frm_cb, 'cdsc_prs')).val());

	$(Obj_Col(fc_frm_dt_dir, 'cest')).prop('checked', true).trigger('change');
	$(Obj_Col(fc_frm_dt_dir, 'cest')).attr('checked', true).trigger('change');
	
	$(Obj_Col(fc_frm_dt_dir, 'bpdt')).prop('checked', true);
	$(Obj_Col(fc_frm_dt_dir, 'bpdt')).attr('checked', true);

	jsc_mdl_dir__ccod_ubdst = '';
	
	pn_row_dir_det_id = 0;
	$("div[data-row*='" + fc_div_row_dir_det + "']").remove();
	//fnc_row_remove(fc_div_row_dir_det, fc_div_head_row_dir_det);
	
	fc_row_dir_input_id = '';
	fc_row_dir_input_id_value = '';
	
	*/
	
	
	
	
	
	
	
	
	
	
	$(Obj_Col(fc_frm_dt_1, 'ccod_prs_alu')).val($(Obj_Col(fc_frm_cb, 'ccod_prs_alu')).val());
	$(Obj_Col(fc_frm_dt_1, 'cdsc_prs_alu')).val($(Obj_Col(fc_frm_cb, 'cdsc_prs_alu')).val());

	
	$('#mdl_grid_it').modal('open');
	
};

function fnc_mdl_grid_it_post_finish_load_modal() {
	//fnc_set_focus(fc_frm_dt_1, 'ncant');
};

