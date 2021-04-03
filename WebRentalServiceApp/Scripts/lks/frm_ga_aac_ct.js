// ======================================================================================================================================
// ===================================================== Variables de Formulario ========================================================
// ======================================================================================================================================
// variable a prueba
var fa_frm_tab = ['', '', '', '', '', '', '', '', '', ''];

var fc_frm_cb = 'form_main';

// ======================================================================================================================================
// ====================================================== Funciones Complementos ========================================================
// ======================================================================================================================================

function fnc_child_set_html() {
	//fnc_html_em_prs(ic_container);
	//fnc_html_em_dir('body .container');
};

function fnc_child_ready() {

	// Temporal, variables que se carga en el click del menu link
	mc_ccod_men = '15';
	mc_cdsc_men = 'Año Académico';
	mc_men_form = 'form_ga_aac_ct';
	mc_tipo_form = 'form_transaccion';
	pc_style_form = 'form_ct_style_2';

	fnc_child_cargar_valores_iniciales();
	fnc_child_objects_load_functions();
};

function fnc_objects_load_functions_post_child() {
	$('#tab_main').tabs("select", "tab_lista");
};

// ======================================================================================================================================
// ========================================================== Cabecera Main =============================================================
// ======================================================================================================================================




// ======================================================================================================================================
// ========================================================= Links - Inicio ====================================================
// ======================================================================================================================================



// ======================================================================================================================================
// =============================================================== Transacciones ========================================================
// ======================================================================================================================================

/*
fnc_child_objects_load_functions: Funcion que se maneja solo en el formulario hijo, carga valores de objetos una vez.
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
						false,
						'data-row_data',
						'', false, false, false
						);
};

function fnc_child_cargar_valores_post_proceso() {
	fnc_table_reload(
					'grid_lista',
					'/home/lq_usp_ga_aac_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=-1' + '&ic_load_BD=load_BD',
					'grid_lista'
					);
};

function fnc_child_nuevo() {
	$(Obj_Col(fc_frm_cb, 'cest')).prop('checked', true);
	$(Obj_Col(fc_frm_cb, 'cest')).attr('checked', true).trigger('change');

	$('#mdl_form').modal('open');
	fnc_set_focus(fc_frm_cb, 'ccod_aac');
};

function fnc_child_valores_predeterminados() {
};

function fnc_child_form_objs_verificar_requeridos() {
	return fnc_form_objs_verificar_requeridos(fc_frm_cb);
};

function fnc_child_editar() {
	$('#mdl_form').modal('open');
	fnc_set_focus(fc_frm_cb, 'cdsc_aac');
	
	// $(Obj_Col(fc_frm_cb, 'slin')).val(fr_row_data_cb.ccod_slin).trigger('change');

};

function fnc_mdl_dir_aceptar() {
	fnc_registrar();
	if (pb_registrar_form_ct_style_2 === true) {
		pb_registrar_form_ct_style_2 = false;
		$('#mdl_form').modal('close');
	}
};

var pb_registrar_form_ct_style_2 = false;
function fnc_child_registrar_select(ir_dataResult) {
	ia_columns = ['ccod_aac'];
	ia_values = [$(Obj_Col(fc_frm_cb, 'ccod_aac')).val()];
	pb_registrar_form_ct_style_2 = true;
};

function fnc_child_registrar() {
	
	var pc_ccod_aac = $(Obj_Col(fc_frm_cb, 'ccod_aac')).val();
	if (jc_est_form === 'e') {pc_ccod_aac = fr_row_data_cb.ccod_aac;}
	
	var pc_accion = jc_est_form;

	var pa_RowData_cab = [
							pc_accion,
							gc_ccod_emp,
							pc_ccod_aac,
							($(Obj_Col(fc_frm_cb, 'cest')).is(':checked') ? '1' : '0'),
							$(Obj_Col(fc_frm_cb, 'naac')).val(),
							$(Obj_Col(fc_frm_cb, 'naac_cl')).val(),
							$(Obj_Col(fc_frm_cb, 'cdsc_aac')).val(),
							$(Obj_Col(fc_frm_cb, 'dfini')).val(),
							$(Obj_Col(fc_frm_cb, 'dffin')).val()
						];
	var pc_RowData_cab = fnc_Get_File_Values(pa_RowData_cab);

	var pa_data = [pc_RowData_cab];
	return ['ga_aac_ct_insert', pa_data];
	//return [mc_men_form, pa_data];
	
};

function fnc_child_eliminar() {
	//return [mc_men_form, 'Eliminar', [fnc_Get_File_Values([gc_ccod_emp, fr_row_data_cb.ccod_prs])], '', 'fnc_child_eliminar_post', []];
	return ['ga_aac_ct_insert', 'Eliminar', [fnc_Get_File_Values(['d', gc_ccod_emp, fr_row_data_cb.ccod_aac])], '', 'fnc_child_eliminar_post', []];
};
/*
function fnc_child_eliminar() {
	var pc_RowData = '';
	pc_RowData += gc_ccod_emp + pl_sep_col;
	pc_RowData += fr_row_data_cb.ccod_prs + pl_sep_fil;

	var pc_url = '/home/slq_usp_data_delete?ic_tabla=em_prs_ct';

	fnc_confirmacion(pc_url, [pc_RowData], 'Eliminar', '', 'fnc_child_eliminar_post', []);
};
*/

function fnc_child_eliminar_post() {
	fnc_child_cargar_valores_post_proceso();
};

// ======================================================================================================================================
// =========================================================== Grid Lista - Inicio ======================================================
// ======================================================================================================================================

function fnc_grid_lista_setear_campos_child_post(row_data) {
	fr_row_data_cb = row_data;
};

function fnc_add_grid_lista() {
	//$("#tab_main").tabs("select", "tab_1");
};


// ======================================================================================================================================
// ================================================================= Funciones ==========================================================
// ======================================================================================================================================
