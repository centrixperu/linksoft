/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																VARIABLES DE FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fa_frm_tab = ['Ficha'];
var fc_frm_cb = 'form_main';

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_abrir_app() {
	window.open('/Home/frm_main', '_self');
}

function fnc_child_set_html() {

};

function fnc_child_ready() {

	// Temporal, variables que se carga en el click del menu link
	mc_ccod_men = '15';
	mc_cdsc_men = 'Períodos por Nivel Académico';
	mc_men_form = 'frm_ga_per_ct';
	mc_tipo_form = 'frm_ct';
	pc_style_form = 'form_ts_style_1'

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
	f_load_select_ajax(fc_frm_cb, 'aac', 'ccod_aac', 'cdsc_aac', '/home/lq_usp_ga_aac_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + '1' + '&ic_load_BD=', false, '');
};

function fnc_child_cargar_valores_post_proceso() {
	fnc_table_reload(
					'grid_lista',
					'/home/lq_usp_ga_per_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + '-1' + '&ic_load_BD=load_BD',
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
	var pc_ccod_per = $(Obj_Col(fc_frm_cb, 'ccod_per')).val();
	if (jc_est_form === 'e') {
		pc_ccod_nac = fr_row_data_cb.ccod_nac;
		pc_ccod_per = fr_row_data_cb.ccod_per;
	}
	
	var pc_accion = jc_est_form;

	var pa_RowData_cab = [
							pc_accion,
							gc_ccod_emp,
							pc_ccod_nac,
							pc_ccod_per,
							($(Obj_Col(fc_frm_cb, 'cest')).is(':checked') ? '1' : '0'),
							$(Obj_Col(fc_frm_cb, 'cdsc_per')).val(),
							$(Obj_Col(fc_frm_cb, 'dfini')).val(),
							$(Obj_Col(fc_frm_cb, 'dffin')).val()
						];
	var pc_RowData_cab = fnc_Get_File_Values(pa_RowData_cab);

	var pa_data = [pc_RowData_cab];
	return ['ga_per_ct_insert', pa_data];
	//return [mc_men_form, pa_data];
};

function fnc_child_form_objs_verificar_requeridos() {
	return fnc_form_objs_verificar_requeridos(fc_frm_cb);
};

function fnc_child_registrar_select(ir_dataResult) {
	ia_columns = ['ccod_nac', 'ccod_per'];
	ia_values = [$(Obj_Col(fc_frm_cb, 'ccod_nac')).val(), $(Obj_Col(fc_frm_cb, 'ccod_per')).val()];
};

function fnc_child_eliminar() {
	//return [mc_men_form, 'Eliminar', [fnc_Get_File_Values([gc_ccod_emp, fr_row_data_cb.ccod_prs])], '', 'fnc_child_eliminar_post', []];
	return ['ga_per_ct_insert', 'Eliminar', [fnc_Get_File_Values(['d', gc_ccod_emp, fr_row_data_cb.ccod_nac, fr_row_data_cb.ccod_per])], '', 'fnc_child_eliminar_post', []];
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


