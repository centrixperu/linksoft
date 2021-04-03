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

};

function fnc_child_cargar_valores_post_proceso() {


};

function fnc_objects_load_functions_post_child() {
	
	//fnc_frm_objs_habilitar(fc_frm_cb, 'n');
	//fnc_inputs_cargar_caracteristicas(fc_frm_cb, '');
	
	// f_valores_predeterminados_form__em_dir();
	//fnc_frm_objs_validar([fc_frm_cb]);
	
	fnc_set_focus(fc_frm_cb, 'cemail');
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

function fnc_iniciar_sesion()
{
	var pc_cemail = $(Obj_Col(fc_frm_cb, 'cemail')).val();
	var pc_cpassword = $(Obj_Col(fc_frm_cb, 'cpassword')).val();
	
	fnc_SET_val__to__localStorage(lS_ccod_usu, 'ADM');
	fnc_SET_val__to__localStorage(lS_cemail, 'alberto.montes@linksoft.pe');
	fnc_SET_val__to__localStorage(lS_cdsc_usu, 'MONTES/VILLAVICENCIO, Huber Alberto');
		
	open_form('/Home/frm_main', gc_group_window);

	/*
	var ic_obj = Obj_Col(fc_frm_cb, 'cemail');
	var ic_obj_type = 'input';
	var ic_msj = 'Cuenta de correo no existente!';
	marcar_invalido(ic_obj, ic_obj_type, ic_msj);
	fnc_set_focus(fc_frm_cb, 'cemail');
	*/
	
	
	/*
	if (fnc_child_form_objs_verificar_requeridos()) {
		alert('proceder a ingresar');
		//open_form('/Home/frm_main', gc_group_window);
	}
	*/
};

/*
function fnc_child_form_objs_verificar_requeridos() {
	return fnc_form_objs_verificar_requeridos([fc_frm_cb]);
};
*/