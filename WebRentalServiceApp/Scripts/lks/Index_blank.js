// ======================================================================================================================================
// ===================================================== Variables de Formulario ========================================================
// ======================================================================================================================================
// variable a prueba
var fa_frm_tab = ['Ficha', 'Caracteristicas', 'Imágenes', '', '', '', '', '', '', ''];

var fc_frm_cb = 'form_main';
var fc_frm_cb_al_it = ''
var fa_frm_tab_al_it = ['Ficha', 'Caracteristicas', 'Imágenes', '', '', '', '', '', '', ''];

// Variables Catalogo del Item
var pn_row_um_id = 0;
var pn_row_imp_id = 0;

// ======================================================================================================================================
// ====================================================== Funciones Complementos ========================================================
// ======================================================================================================================================

function fnc_child_set_html() {
	
};

function fnc_child_ready() {
	

};
function fnc_objects_load_functions_post_child() {
	$('#tab_main').tabs("select", "tab_lista");
};
// ======================================================================================================================================
// ========================================================== Cabecera Main =============================================================
// ======================================================================================================================================
$(Obj_Col(fc_frm_cb, 'lin', 'select')).change(function() {
	$(Obj_Col(fc_frm_cb, 'slin')).empty().trigger('change');
	var lc_ccod_opfa =  $(this).val();
	if (lc_ccod_opfa !== '') {
		var pc_url = '/home/lq_usp_al_it_slin_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_lin=' + lc_ccod_opfa + '&ic_cest=' + cc_cest_A_1 + '&ic_load_BD=';
		f_load_select_ajax(fc_frm_cb, 'slin', 'ccod_slin', 'cdsc_slin', pc_url, false, '');
	}
	else {
	}
});

// ======================================================================================================================================
// ========================================================= Links - Inicio ====================================================
// ======================================================================================================================================

/*
function fnc_open_modal_prs() {
	$('#mdl_grid_em_prs_ct').modal('open');
	$(Obj_Col('', 'i_filter_grid_em_prs_ct')).focus();
};

function f_buscar_distrito(io_obj) {
	$('#mdl_grid_distritos').modal('open');
	$(Obj_Col('', 'i_filter_grid_distritos')).focus();
};

function fnc_open_modal_email() {

	var pb_access = ($('#i_ccod_prs').val() === '' ? false : true);
	if (pb_access === false) {
		f_msj('¡Seleccione un cliente!','','e','bottomLeft','');
		return;
	}

	$('#mdl_email').modal('open');
};
*/

// ======================================================================================================================================
// =============================================================== Transacciones ========================================================
// ======================================================================================================================================
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
	
};

/*
fnc_child_cargar_valores_iniciales: Funcion que se maneja solo en el formulario hijo, carga valores una vez, valores constantes en el formulario hijo.
*/
function fnc_child_cargar_valores_iniciales() {


};

function fnc_child_cargar_valores_post_proceso() {
	
};

function fnc_child_nuevo() {
	$(Obj_Col(fc_frm_cb, 'cest')).prop('checked', true);
	$(Obj_Col(fc_frm_cb, 'cest')).attr('checked', true).trigger('change');
	
	pn_row_um_id = 0;
	$("div[data-row*='" + fc_div_row_um + "']").remove();
	fnc_row_remove(fc_div_row_um, fc_div_head_row_um);
	
	pn_row_imp_id = 0;
	$("div[data-row*='" + fc_div_row_imp + "']").remove();
	fnc_row_remove(fc_div_row_imp, fc_div_head_row_imp);
};

function fnc_child_form_objs_verificar_requeridos() {
	return fnc_form_objs_verificar_requeridos(fc_frm_cb);
};

function fnc_child_editar() {
	$(Obj_Col(fc_frm_cb, 'slin')).val(fr_row_data_cb.ccod_slin).trigger('change');
};

function fnc_child_registrar() {
	
	var pc_ccod_it = $(Obj_Col(fc_frm_cb, 'ccod_it')).val();
	if (jc_est_form === 'e') {pc_ccod_it = fr_row_data_cb.ccod_it;}
	
	var pa_RowData_cab = [
							jc_est_form,
							gc_ccod_emp,
							pc_ccod_it,
							($(Obj_Col(fc_frm_cb, 'cest')).is(':checked') ? 'A' : 'I'),
							'B',
							$(Obj_Col(fc_frm_cb, 'it_tip')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'lin')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'slin')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'cident_1')).val(),
							$(Obj_Col(fc_frm_cb, 'cident_2')).val(),
							$(Obj_Col(fc_frm_cb, 'cident_3')).val(),
							$(Obj_Col(fc_frm_cb, 'cdsc_it')).val(),
							$(Obj_Col(fc_frm_cb, 'cdsc_it_lga')).val(),
							$(Obj_Col(fc_frm_cb, 'tobs')).val(),
							'',
							'',
							'',
							$(Obj_Col(fc_frm_cb, 'ccod_sunat')).val(),
							$(Obj_Col(fc_frm_cb, 'mc')).find(":selected").val(),
							$(Obj_Col(fc_frm_cb, 'cmodelo')).val(),
							$(Obj_Col(fc_frm_cb, 'ccolor')).val(),
							$(Obj_Col(fc_frm_cb, 'cpeso')).val(),
							$(Obj_Col(fc_frm_cb, 'cvolumen')).val(),
							$(Obj_Col(fc_frm_cb, 'cgarantia')).val(),
							false,
							false,
							$(Obj_Col(fc_frm_cb, 'cstock_min')).val(),
							$(Obj_Col(fc_frm_cb, 'cstock_max')).val()
						];
	var pc_RowData_cab = fnc_Get_File_Values(pa_RowData_cab);

	var pc_values = ['1', $(Obj_Col(fc_frm_cb, 'ccod_um')).val(), '', ''];
	var pc_RowData_um = fnc_Get_File_Values(pc_values);
	pc_RowData_um += fnc_set_RowData(fc_frm_cb, ['um_', 'ncant_eq_', 'ccod_um_eq_'], true, 2);
	
	var pc_RowData_imp = fnc_set_RowData(fc_frm_cb, ['imp_'], true);

	var pa_columns_select = ['ccod_it'];
	var pa_values_select = [$(Obj_Col(fc_frm_cb, 'ccod_it')).val()];

	var pa_data = [pc_RowData_cab, pc_RowData_um, pc_RowData_imp];
	return [mc_men_form, pa_data, pa_columns_select, pa_values_select];
};

function fnc_child_eliminar() {
	return [mc_men_form, 'Eliminar', [fnc_Get_File_Values([gc_ccod_emp, fr_row_data_cb.ccod_it])], '', 'fnc_child_eliminar_post', []];
};

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
	$("#tab_main").tabs("select", "tab_1");
};







function fnc_abrir_app_login() {
	open_form('/Home/frm_login', gc_group_window);
}

