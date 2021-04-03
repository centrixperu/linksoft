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

function fnc_child_set_html() {
};

function fnc_child_ready() {
	
	fnc_frm_objs_habilitar(fc_frm_cb, 'n');
	
	$(Obj_Col(fc_frm_cb, 'ccod_usu')).val(gc_ccod_usu);
	$(Obj_Col(fc_frm_cb, 'cdsc_usu')).val(gc_cdsc_usu);

	// Temporal, variables que se carga en el click del menu link
	mc_ccod_men = '2311';
	mc_cdsc_men = 'S7 Basico';
	mc_men_form = 'frm_al_ct_it';
	mc_men_ts = 'al_ct_it';
	mc_tipo_form = 'frm_ct';
	mc_style_form = 'form_ts_style_1';
	
	//se cambio de posicion estas dos funciones, verificar si funciona en los catalogos y transacciones
	fnc_child_objects_load_functions();
	fnc_child_cargar_valores_iniciales();
	
};

/*
fnc_child_objects_load_functions: Funcion que se maneja solo en el formulario hijo, carga funciones de objetos una sola vez.
*/
function fnc_child_objects_load_functions() {
	$(Obj_Col(fc_frm_cb, 'emp', 'select')).change(function() {
		var pc_ccod_emp =  $(this).val();
		f_load_select_ajax(
							fc_frm_cb, 'uop', 'ccod_uop', 'cdsc_uop',
							'/home/lq_usp_em_ct_emp_dt_uop_list?ic_ccod_emp=' + pc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=',
							true, 
							''
							);
	});
};

/*
fnc_child_cargar_valores_iniciales: Funcion que se maneja solo en el formulario hijo, carga valores una vez, valores constantes en el formulario hijo.
*/
function fnc_child_cargar_valores_iniciales() {

	f_load_select_ajax(
						fc_frm_cb, 'emp', 'ccod_emp', 'cdsc_prs',
						'/home/lq_usp_ad_ct_usu_dt_emp_list?ic_ccod_usu=' + gc_ccod_usu + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=',
						true, 
						''
						);

	$(Obj_Col(fc_frm_cb, 'dfch')).val(gd_dfch_main);
};

function fnc_child_cargar_valores_post_proceso() {


};

function fnc_objects_load_functions_post_child() {
	
	//fnc_frm_objs_habilitar(fc_frm_cb, 'n');
	// fnc_inputs_cargar_caracteristicas(fc_frm_dt_dir, '');
	
	// f_valores_predeterminados_form__em_dir();
	fnc_frm_objs_validar(fc_frm_cb, '');
	
	fnc_tabs_select_tab('tab_main', 'tab_lista');
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	TRANSACCIONES																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	  GRID_LISTA																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

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




function fnc_login_aceptar() {
	open_form('/Home/frm_main', gc_group_window);
}
