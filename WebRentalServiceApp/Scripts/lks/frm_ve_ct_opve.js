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

function fnc_child_set_menu()
{
	fnc_SET_variables_de_menu('2501');
};

function fnc_child_set_html() {
};

function fnc_child_ready() {
	fnc_child_cargar_valores_iniciales();
	fnc_child_objects_load_functions();
};

/*
fnc_child_objects_load_functions: Funcion que se maneja solo en el formulario hijo, carga funciones de objetos una sola vez.
*/
function fnc_child_objects_load_functions() {
};

/*
fnc_child_cargar_valores_iniciales: Funcion que se maneja solo en el formulario hijo, carga valores una vez, valores constantes en el formulario hijo.
*/
function fnc_child_cargar_valores_iniciales() {

	f_create_html_table(
						'grid_lista',
						'',
						false, 'data-row_data', '', false, false, false
						);

	f_load_select_ajax(
						fc_frm_cb, 'doc', 'ccod_doc', 'cdsc_doc',
						'/home/lq_usp_fi_ct_doc_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_ccod_doc=' + '&ic_load_BD=',
						false, ''
						);

	f_load_select_ajax(
						fc_frm_cb, 'mon', 'ccod_mon', 'cdsc_mon',
						'/home/lq_usp_em_ct_mon_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_ccod_mon=' + '&ic_load_BD=',
						false, ''
						);

	f_load_select_ajax(
						fc_frm_cb, 'opal_sal', 'ccod_opal', 'cdsc_opal',
						'/home/lq_usp_al_ct_opal_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_ccod_opal=' + '&ic_load_BD=',
						false, ''
						);

	f_load_select_ajax(
						fc_frm_cb, 'opal_anu', 'ccod_opal', 'cdsc_opal',
						'/home/lq_usp_al_ct_opal_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_ccod_opal=' + '&ic_load_BD=',
						false, ''
						);

	f_load_select_ajax(
						fc_frm_cb, 'opve_nc', 'ccod_opve', 'cdsc_opve',
						'/home/lq_usp_ve_ct_opve_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_ccod_opve=' + '&ic_load_BD=',
						false, ''
						);
};

function fnc_child_cargar_valores_post_proceso() {
	fnc_table_reload(
					'grid_lista',
					'/home/lq_usp_ve_ct_opve_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest='+ '&ic_ccod_opve=' + '&ic_load_BD=load_BD',
					'grid_lista'
					);
};

function fnc_objects_load_functions_post_child() {
	fnc_tabs_select_tab('tab_main', 'tab_lista');
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	TRANSACCIONES																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_child_nuevo() {
	fnc_checkbox_set_value(fc_frm_cb, 'cest', true);
};

function fnc_child_valores_predeterminados() {
};

function fnc_child_editar() {
};

function fnc_child_registrar() {
	
	var pc_ccod_opve = $(Obj_Col(fc_frm_cb, 'ccod_opve')).val();
	if (jc_est_form === 'e') {
		pc_ccod_opve = fr_row_data_cb.ccod_opve;
	}
	
	//var pc_accion = jc_est_form;

	var pa_RowData_cab = [
							jc_est_form,
							gc_ccod_emp,
							pc_ccod_opve,
							($(Obj_Col(fc_frm_cb, 'cest')).is(':checked') ? 'A' : 'I'),
							$(Obj_Col(fc_frm_cb, 'cdsc_opve')).val(),
							$(Obj_Col(fc_frm_cb, 'doc')).find(":selected").val(),
							($(Obj_Col(fc_frm_cb, 'bafecto_igv')).is(':checked') ? '1' : '0'),
							$(Obj_Col(fc_frm_cb, 'mon')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'opal_sal')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'opal_anu')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'opve_nc')).find(":selected").val()
						];
	var pc_RowData_cab = fnc_Get_File_Values(pa_RowData_cab);

	// Envio de informacion
	var pa_data = [pc_RowData_cab];
	return [pa_data];
};

function fnc_child_form_objs_verificar_requeridos() {
	return fnc_form_objs_verificar_requeridos([fc_frm_cb]);
};

function fnc_child_registrar_select(ir_dataResult) {
	ia_columns = ['ccod_opve'];
	ia_values = [$(Obj_Col(fc_frm_cb, 'ccod_opve')).val()];
};

function fnc_child_eliminar() {
	return ['Eliminar', [fnc_Get_File_Values(['d', gc_ccod_emp, fr_row_data_cb.ccod_opve])], [], []];
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

function fnc_grid_lista_setear_campos_child_post(row_data) {
	fr_row_data_cb = row_data;
};

function fnc_add_grid_lista() {
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
::																FUNCIONES DEL PROCESO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


