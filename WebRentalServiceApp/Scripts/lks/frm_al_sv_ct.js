/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																VARIABLES DE FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fa_frm_tab = ['Ficha', 'Imágenes'];
var fc_frm_cb = 'form_main';

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
	mc_ccod_men = '70';
	mc_cdsc_men = 'Servicio';
	mc_men_form = 'frm_al_sv_ct';
	mc_tipo_form = 'frm_ct';
	pc_style_form = 'form_ts_style_1';
	
	fnc_child_cargar_valores_iniciales();
	fnc_child_objects_load_functions();
};

/*
fnc_child_objects_load_functions: Funcion que se maneja solo en el formulario hijo, carga funciones de objetos una sola vez.
*/

function fnc_child_objects_load_functions() {

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
						fc_frm_cb, 'lin', 'ccod_lin', 'cdsc_lin',
						'/home/lq_usp_al_it_lin_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + cc_cest_A_1 + '&ic_ctipo_lin=B' + '&ic_load_BD=',
						false, ''
						);
	
	f_load_select_ajax(
						fc_frm_cb, 'it_tip', 'ccod_it_tip', 'cdsc_it_tip',
						'/home/lq_usp_al_it_tip_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + cc_cest_A_1 + '&ic_load_BD=',
						false, ''
						);
	
	f_load_select_ajax(
						fc_frm_cb, 'um', 'ccod_um', 'cdsc_um',
						'/home/lq_usp_al_um_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ctipo_um=B' + '&ic_cest=' + cc_cest_A_1 + '&ic_load_BD=',
						false, ''
						);

	f_load_select_ajax(
						fc_frm_cb, 'mc', 'ccod_mc', 'cdsc_mc',
						'/home/lq_usp_al_it_mc_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + cc_cest_A_1 + '&ic_load_BD=',
						false, ''
						);
		

	// Temporal prueba
	let preloaded = [];
	/*
	let preloaded = [
		{id: 1, src: 'https://picsum.photos/500/500?random=1'},
		{id: 2, src: 'https://picsum.photos/500/500?random=2'},
		{id: 3, src: 'https://picsum.photos/500/500?random=3'},
		{id: 4, src: 'https://picsum.photos/500/500?random=4'},
		{id: 5, src: 'https://picsum.photos/500/500?random=5'},
		{id: 6, src: 'https://picsum.photos/500/500?random=6'},
	];
	*/

	$('.input-images-2').imageUploader({
		preloaded: preloaded,
		imagesInputName: 'photos',
		preloadedInputName: 'old',
		maxSize: 2 * 1024 * 1024,
		maxFiles: 20
	});

};

function fnc_child_cargar_valores_post_proceso() {
	
	f_eject_ajax(
				'/home/lq_usp_al_it_um_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_it=' + '&ic_ccod_um=' + '&in_row=0' + '&ic_load_BD=load_BD'
				);

	f_eject_ajax(
				'/home/lq_usp_al_it_imp_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_it=' + '&ic_cest=' + '&ic_load_BD=load_BD'
				);

	fnc_table_reload(
					'grid_lista',
					'/home/lq_usp_al_it_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ctipo_it=' + 'B' + '&ic_cest=' + '&ic_load_BD=load_BD',
					'grid_lista'
					);

};

function fnc_objects_load_functions_post_child() {
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
::																	TRANSACCIONES																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_child_nuevo() {
	fnc_checkbox_set_value(fc_frm_cb, 'cest', true);
	
	fnc_row_um_nuevo();
	fnc_row_imp_nuevo();
};

function fnc_child_valores_predeterminados() {
};

function fnc_child_editar() {
	$(Obj_Col(fc_frm_cb, 'slin')).val(fr_row_data_cb.ccod_slin).trigger('change');
};

function fnc_child_registrar() {
	
	var pc_ccod_it = $(Obj_Col(fc_frm_cb, 'ccod_it')).val();
	if (jc_est_form === 'e') {
		pc_ccod_it = fr_row_data_cb.ccod_it;
	}
	
	var pc_accion = jc_est_form;

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

	// Rows UM
	var pc_values = ['1', $(Obj_Col(fc_frm_cb, 'ccod_um')).val(), '', ''];
	var pc_RowData_um = fnc_Get_File_Values(pc_values);
	pc_RowData_um += fnc_set_RowData(fc_frm_cb, ['um_', 'ncant_eq_', 'ccod_um_eq_'], true, 2);
	
	// Rows Imp
	var pc_RowData_imp = fnc_set_RowData(fc_frm_cb, ['imp_'], true);

	// Envio de informacion
	var pa_data = [pc_RowData_cab, pc_RowData_um, pc_RowData_imp];
	return ['al_it_ct_insert', pa_data];
	//return [mc_men_form, pa_data];
};

function fnc_child_form_objs_verificar_requeridos() {
	return fnc_form_objs_verificar_requeridos(fc_frm_cb);
};

function fnc_child_registrar_select(ir_dataResult) {
	ia_columns = ['ccod_it'];
	ia_values = [$(Obj_Col(fc_frm_cb, 'ccod_it')).val()];
};

function fnc_child_eliminar() {
	//return [mc_men_form, 'Eliminar', [fnc_Get_File_Values([gc_ccod_emp, fr_row_data_cb.ccod_prs])], '', 'fnc_child_eliminar_post', []];
	return ['al_it_ct_insert', 'Eliminar', [fnc_Get_File_Values(['d', gc_ccod_emp, fr_row_data_cb.ccod_it]), '', ''], '', 'fnc_child_eliminar_post', []];
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

	if ($(Obj_Col(fc_frm_cb, 'cstock_min')).val() !== '') {$(Obj_Col(fc_frm_cb, 'cstock_min')).val(fnc_formatear_saldo_inventario($(Obj_Col(fc_frm_cb, 'cstock_min')).val()));}
	if ($(Obj_Col(fc_frm_cb, 'cstock_max')).val() !== '') {$(Obj_Col(fc_frm_cb, 'cstock_max')).val(fnc_formatear_saldo_inventario($(Obj_Col(fc_frm_cb, 'cstock_max')).val()));}

	// Rows
	mb_bloquear_process = true;
	fnc_add_rows_um();
	fnc_add_rows_imp();
	mb_bloquear_process = false;
	fnc_frm_objs_habilitar(fc_frm_cb + ' [data-rows]', 'v');
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
::																	ROWS: Impuestos																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fc_div_head_row_imp = '#title_row_imp';
var fc_div_row_imp = 'row_imp_';
var fn_id_row_imp = 0;

function fnc_add_div_row_imp () {
	fn_id_row_imp = fn_id_row_imp + 1;
	fo_div_row = $('<div data-row="' + fc_div_row_imp + String(fn_id_row_imp) + '" class="row ft_2_data-row" />');
	
	fo_div_row_object_1 = $('<div class="col s3 display_none"><input type="text" class="lks" data-col="ccod_imp_' + fn_id_row_imp + '" data-clear="n" data-hb_v="n" data-hb_n="s" data-hb_e="s" required /></div>');

	if (jc_est_form === 'n' || jc_est_form === 'e') {pc_string = "<div class='col s8'>";}
	else if (jc_est_form === 'v') {pc_string = "<div class='col s9' data-col_before='s8' data-col_after='s9'>";}
	fo_div_row_object_2 = $(pc_string + '<select class="select2 s2" data-col="imp_' + fn_id_row_imp + '" data-dsc="Impuesto" data-allow-clear="false" data-hb_v="n" data-hb_n="s" data-hb_e="s" data-zi="mdl_dir" data-i_ccod required></select></div>');
	
	fo_div_row_object_3 = $('<div class="col s3"><input type="text" class="lks text_align_right" data-col="ntasa_imp_' + fn_id_row_imp + '" readonly /></div>');
	
	fnc_div_row_fo_button_remove('_lnk_row_remove_imp_' + String(fn_id_row_imp), fc_div_row_imp, fc_div_head_row_imp);
	
	fo_div_row.append(fo_div_row_object_1);
	fo_div_row.append(fo_div_row_object_2);
	fo_div_row.append(fo_div_row_object_3);
	fo_div_row.append(fo_div_row_button_remove);
	$("div[data-rows='imp']").append(fo_div_row);
	
	// Caracteristicas del input
	fnc_inputs_cargar_caracteristicas(fc_frm_cb, 'ntasa_imp_' + fn_id_row_imp);
	
	// Caracteristicas del select
	fnc_selects_cargar_caracteristicas(fc_frm_cb, 'imp_' + fn_id_row_imp);
	f_select_input(fc_frm_cb, 'hb', $(Obj_Col(fc_frm_cb, 'imp_' + fn_id_row_imp)), 'n');
	f_load_select_ajax(fc_frm_cb, 'imp_' + fn_id_row_imp, 'ccod_imp', 'cdsc_imp', '/home/lq_usp_em_imp_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_imp=' + '&ic_cest=' + cc_cest_A_1 + '&ic_load_BD=', false, '');

	// Funciones por objeto
	$(Obj_Col(fc_frm_cb, 'imp_' + fn_id_row_imp)).change(function() {
		fnc_select_imp_change(this);
	});

};

function fnc_add_row_imp() {
	$(fc_div_head_row_imp).removeClass('display_none');
	
	fnc_add_div_row_imp();

	f_obj_validar_vacio(fc_frm_cb, 'imp_' + fn_id_row_imp, 'select', '');
};

function fnc_add_rows_imp() {
	var pc_ccod_imp = '';
	var pc_cdsc_imp = '';
	var pc_ntasa_imp = 0;
	// Variables Ajax
	var pa_columns = ['ccod_imp', 'cdsc_imp', 'ntasa_imp'];
	var pc_url = '/home/lq_usp_al_it_imp_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_it=' + fr_row_data_cb.ccod_it + '&ic_cest=' + '&ic_load_BD=';
	var pa_results = f_eject_ajax(pc_url, pa_columns, []);

	fn_id_row_imp = 0;
	$("div[data-row*='" + fc_div_row_imp + "']").remove();
	
	for (var i = 0; i < pa_results.length; i++) {
		pc_ccod_imp = pa_results[i].ccod_imp;

		fnc_add_div_row_imp();
	
		//$(Obj_Col(fc_frm_cb, 'ccod_imp_' + fn_id_row_imp)).val(pc_ccod_imp);
		
		$(Obj_Col(fc_frm_cb, 'imp_' + String(fn_id_row_imp))).val(pc_ccod_imp).trigger('change');
		
		// $(Obj_Col(fc_frm_cb, 'ntasa_imp_' + fn_id_row_imp)).val(pc_ntasa_imp);
	}

	fnc_row_remove(fc_div_row_imp, fc_div_head_row_imp);
};

function fnc_row_imp_nuevo() {
	fn_id_row_imp = 0;
	$("div[data-row*='" + fc_div_row_imp + "']").remove();
	fnc_row_remove(fc_div_row_imp, fc_div_head_row_imp);
};

function fnc_select_imp_change(io_this) {
	// Data objeto
	var data_col = $(io_this).data('col');
	if (data_col === undefined) {data_col = '';}
	data_col = data_col.substring(4, data_col.length);
	
	// Obtener Porcentaje impuesto
	var pc_url = '/home/lq_usp_em_imp_ct_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_imp=' + $(io_this).find(":selected").val() + '&ic_cest=' + '&ic_load_BD=';
	var pc_ntasa_imp = fnc_ajax_extraer_dato(pc_url, 'ntasa_imp');
	pc_ntasa_imp = fnc_formatear_importe(pc_ntasa_imp) + ' %';
	$(Obj_Col(fc_frm_cb, 'ntasa_imp_' + data_col)).val(pc_ntasa_imp);
};

