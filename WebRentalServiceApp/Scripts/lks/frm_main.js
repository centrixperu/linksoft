/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																VARIABLES DE FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

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


	// FORMA CORRECTA, ASI DEBEN ESTAR TODOS
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
		fnc_cargar_modulos();
	});
};

/*
fnc_child_cargar_valores_iniciales: Funcion que se maneja solo en el formulario hijo, carga valores una vez, valores constantes en el formulario hijo.
*/
function fnc_child_cargar_valores_iniciales() {
	f_load_select_ajax(
						fc_frm_cb, 'emp', 'ccod_emp', 'cdsc_prs',
						'/home/lq_usp_ad_ct_usu_dt_emp_list?ic_ccod_usu=' + fnc_GET_val__of__localStorage(lS_ccod_usu) + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=',
						false, 
						''
						);
};

function fnc_child_cargar_valores_post_proceso() {
};

function fnc_objects_load_functions_post_child() {
	
	fnc_lS_lq_usp_ad_mod_men_list();
	
	fnc_child_nuevo();
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	TRANSACCIONES																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_child_nuevo() {
	fnc_frm_objs_habilitar(fc_frm_cb, 'n');

	$(Obj_Col(fc_frm_cb, 'ccod_usu')).val(fnc_GET_val__of__localStorage(lS_ccod_usu));
	$(Obj_Col(fc_frm_cb, 'cdsc_usu')).val(fnc_GET_val__of__localStorage(lS_cdsc_usu));
	fnc_SET_val__to__select(fc_frm_cb, 'emp', '', '2');
	$(Obj_Col(fc_frm_cb, 'dfch')).val(gd_dfch_main);
	
	fnc_frm_objs_validar([fc_frm_cb]);
};

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

function fnc_cargar_modulos()
{
	var pc_ccod_emp = fnc_GET_val__of__select(fc_frm_cb, 'emp');

	if (pc_ccod_emp !== '')
	{
		var pa_result = fnc_Array_Filtrar_por_columnas(fnc_GET_val__of__localStorage(lS_lq_usp_ad_mod_men_list, 'Array'), ['ccod_emp', 'nnivel'], [pc_ccod_emp, '10']);
		pa_result = fnc_Array_sortByKeyAsc(pa_result, 'norden');

		$('.nav-mosaico-content-item').remove();
		$.each(pa_result, function (i, option) {
			let pc_item = `
			<div class="nav-mosaico-content-item waves-effect waves-light-07" role="button" data-col="` + option.ccod_mod + `" data-lnk="_lnk_open_modulo">
				<div class="nav-mosaico-content-item-image ` + option.cicon + `"></div>
				<div class="nav-mosaico-content-item-label"><span>` + option.clink + `</span></div>
			</div>
			`;
			
			$('.nav-mosaico-content').append(pc_item);
			fnc_set_data_lnk('_lnk_open_modulo', "[data-col='" + option.ccod_mod + "']"); // cambio ultimo 14/02/2021
		});
		
		fnc_tables_ejecutar_alternos('tab_contenedor');
	}
};

function fnc_open_modulo(io_object)
{
	var pc_ccod_emp = fnc_GET_val__of__select(fc_frm_cb, 'emp');
	var pc_ccod_uop = fnc_GET_val__of__select(fc_frm_cb, 'uop');
	var pc_dfch = fnc_GET_val__of__input(fc_frm_cb, 'dfch');
	var bacceso = 1;
	
	if (pc_ccod_emp === '')
	{
		bacceso = 0;
		fnc_mensaje('¡Ingrese fecha para acceso al módulo!');
	}
	else if (pc_ccod_uop === '')
	{
		bacceso = 0;
		fnc_mensaje('¡Ingrese fecha para acceso al módulo!');
	}
	else if (pc_dfch === '')
	{
		bacceso = 0;
		fnc_set_focus(fc_frm_cb, 'dfch');
		fnc_mensaje('¡Ingrese fecha para acceso al módulo!');
	}
	
	if (bacceso === 1)
	{
		var ac_object = fnc_GET_Obj_Attributes(io_object);
		var pa_result = fnc_Array_Filtrar_por_columnas(fnc_GET_val__of__localStorage(lS_lq_usp_ad_mod_men_list, 'Array'), ['ccod_emp', 'ccod_mod', 'nnivel'], [pc_ccod_emp, ac_object.col, '10']);

		/*
		gc_ccod_emp = pc_ccod_emp;
		gc_ccod_mod = ac_object[0].col;
		gc_cdsc_mod = f_a_data(pa_result, ['cdsc_men']);
		gc_ccod_eje = 'EJ2019';
		gc_ccod_per = 'PE1901';
		gc_ccod_uop = pc_ccod_uop;
		gd_dfch_main = pc_dfch;
		gc_ccod_mon_nac = 'SOL';
		*/
		
		fnc_SET_val__to__localStorage(lS_ccod_emp, pc_ccod_emp);
		fnc_SET_val__to__localStorage(lS_ccod_mod, ac_object.col);
		fnc_SET_val__to__localStorage(lS_cdsc_mod, f_a_data(pa_result, ['cdsc_men']));
		fnc_SET_val__to__localStorage(lS_ccod_eje, 'EJ2019');
		fnc_SET_val__to__localStorage(lS_ccod_per, 'PE1901');
		fnc_SET_val__to__localStorage(lS_ccod_uop, pc_ccod_uop);
		fnc_SET_val__to__localStorage(lS_dfch_main, pc_dfch);
		fnc_SET_val__to__localStorage(lS_ccod_mon_nac, 'SOL');
		fnc_SET_val__to__localStorage(lS_cbackground_mod, f_a_data(pa_result, ['cdsc_frm']));

		open_form('/Home/frm_main_modulo', gc_group_window);
	}
	
	//popupCenter({url: '/Home/frm_main_modulo', title: gc_group_window, w: 800, h: 400});
	//popupwindow('/Home/frm_main_modulo', gc_group_window, 1000, 600);
	//popupWindow2('/Home/frm_main_modulo', gc_group_window, window, 1000, 600);
	//popupwindow3('/Home/frm_main_modulo', gc_group_window, 1000, 600);
	
	//OpenPopupCenter('/Home/frm_main_modulo', gc_group_window, 1000, 600);
	
	//PopupCenterFer('/Home/frm_main_modulo', gc_group_window, 1000, 600);
	
	//openPopupCenter('https://www.google.com', 'Title', 1000, 600);
	
	//popupCenter_22('https://www.google.com', 'Title', 1000, 600);
	
	//createPopupWindow77('https://www.google.com');
	
	//openfunc();
	
	//popupCenterScreen('https://www.google.com', 'Title', 1000, 600, true);
	
	//myPopup21('/Home/frm_main_modulo', gc_group_window, 1000, 600);
};