var datepicker_i18n =
{
	months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
	weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
	weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
	weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],

	cancel: 'Cancelar',
	clear: 'Limpiar',
	done: 'Aceptar'
};

function fnc_GET_datepicker_Rango () {
	
};

function fnc_GET_date_values() {
	
};


// Verifica si el objeto 'existe' o 'no existe'
$.fn.exists = function(){return $(this).length>0;}

/*
Funcion para buscar objetos invalidos
pc_div_container: Clase agregada al div raiz que contiene al objeto invalido (DIV TAB que contiene el objeto)
table.required: Clase que se agrega a los DataTables que seran validados como requeridos (Table)

data-dsc='Descripcion': prioriza este valor para la descripcion que se mostrara en el mensaje. (select, input)
data-col_dsc='Objeto': Si el valor anterior es 'no definido', la descripcion del valor 'html' se mostrara en el mensaje. (Label)
Si ambos casos anteriores tendrian valor 'no definido', se mostrara el [data-col] del objeto.
*/

function fnc_form_objs_verificar_requeridos (ia_obj)
{
	var pb_value = true;
	var pc_message = '';

	var ac_object;
	var pc_form;
	var pc_tab_container;
	var pc_type;
	var pc_col;
	var pc_col_dsc;

	// Selector
	var pc_selector = '';
	$.each(ia_obj, function (i, option) {
		if (option.indexOf(',') > -1)
		{
			var pa_result = fnc_GET_ArrayValues_to_RowString(option, ',');
			pc_selector += Obj_Col(pa_result[0], pa_result[1]) + ':required.invalid, ';
		}
		else
		{
			pc_selector = 
						'#' + option + ' select:required.invalid, ' + 
						'#' + option + ' input:required.invalid, ' + 
						'#' + option + ' table.required, ' + 
						'#' + option + ' textarea:required.invalid  ';
		}
	});
	pc_selector = pc_selector.substring(0, pc_selector.length - 2);

	// Ejecucion
	$(pc_selector).each(function() {
		if (pb_value === true)
		{
			ac_object = fnc_GET_Obj_Attributes(this);
			pc_form = ac_object.form;
			pc_tab_container = ac_object.tab_container;
			pc_type = ac_object.type;
			pc_col = ac_object.col;
			pc_col_dsc = ac_object.col_dsc;

			if (pc_type === 'input' || pc_type === 'select' || pc_type === 'textarea')
			{
				pb_value = false;
				pc_message = 'Ingrese valor: ' + (pc_col_dsc === undefined ? pc_col : pc_col_dsc);

				fnc_set_focus(pc_form, pc_col);
			}
			else if (pc_type === 'table')
			{
				var obj_id_ = $(this).attr('id');
				var pn_count_items = $('#' + obj_id_).DataTable().data().count();
				if (pn_count_items === 0) {
					pb_value = false;
					pc_message = (pc_col_dsc === '' ? '¡Inserte item(s) a la grilla!' : '¡Inserte ' + pc_col_dsc + '!');
				}
			}

			if (pb_value === false) {
				swal(gc_msj_titulo_error, pc_message, gc_msj_tipo_error);
				$(".tabs").tabs("select", pc_tab_container);
			}
		}
	});
	return pb_value;
};

// ===================================================================================
//sami9
// Valida valor 'vacio' o 'no vacio' de los objetos del formulario
function fnc_frm_objs_validar (ia_obj)
{
	// Selector
	var pc_selector = '';
	$.each(ia_obj, function (i, option) {
		if (option.indexOf(',') > -1)
		{
			var pa_result = fnc_GET_ArrayValues_to_RowString(option, ',');
			//pc_selector += Obj_Col(pa_result[0], pa_result[1]) + ':required, ';
			pc_selector += Obj_Col(pa_result[0], pa_result[1]) + ', ';
		}
		else
		{
			pc_selector = 
						'#' + option + ' select:required, ' +
						'#' + option + ' input:required, ' +
						'#' + option + ' textarea:required  ';
		}
	});
	pc_selector = pc_selector.substring(0, pc_selector.length - 2);

	
	
	$(pc_selector).each(function() {
		var ac_object = fnc_GET_Obj_Attributes(this);
		//f_obj_validar_vacio(ic_form, ac_object.col, ac_object.type, ic_msj);
		f_obj_validar_vacio(ac_object.form, ac_object.col, ac_object.type, '');
	});
};
/*
function fnc_frm_objs_validar (ic_form, ic_msj)
{
	$(
		'#' + ic_form + ' select:required, ' +
		'#' + ic_form + ' input:required, ' +
		'#' + ic_form + ' textarea:required'
	).each(function() {
		var ac_object = fnc_GET_Obj_Attributes(this);
		f_obj_validar_vacio(ic_form, ac_object.col, ac_object.type, ic_msj);
	});
};
*/
// ===================================================================================

// Valida valor 'vacio' o 'no vacio' del objeto
function f_obj_validar_vacio (ic_form = '', ic_obj_col, ic_obj_type, ic_msj)
{
	var pc_value = Obj_Col(ic_form, ic_obj_col, ic_obj_type);

	var pc_value_get = $(pc_value).val();
	if (pc_value_get === undefined || pc_value_get === null) {pc_value_get = '';}

	if (pc_value_get !== ''){
		marcar_valido(pc_value, ic_obj_type);
		return false;
	}
	else
	{
		//alert(ic_msj);
		marcar_invalido(pc_value, ic_obj_type, ic_msj);
		return true;
	}
};
		
function marcar_valido(ic_obj, ic_obj_type) {

	if (ic_obj_type === 'input' || ic_obj_type === 'textarea') {
		ic_obj = $(ic_obj);
		ic_obj.removeClass("invalid").addClass("valid");
	}
	else if (ic_obj_type === 'select') {
		ic_obj = $(ic_obj);
		ic_obj.removeClass("invalid").addClass("valid");
	}
		
	if (ic_obj_type === 'select') {
		var pi_obj_nextElement_id = '';
		
		$(ic_obj).each(function() {
			pi_obj_nextElement_id = $(this.nextElementSibling).attr('id');
			pi_obj_nextElement_id = pi_obj_nextElement_id.substring(8, pi_obj_nextElement_id.length - 5);
		});

		f_select_chosen_valid(pi_obj_nextElement_id, 'valid');
		ic_obj = $('#select2-' + pi_obj_nextElement_id + '-main');
	}
	
	// Mensaje
	if (ic_obj_type === 'input' || ic_obj_type === 'textarea' || ic_obj_type === 'select')
	{
		$(ic_obj).each(function() {
			if ($(this.nextElementSibling).hasClass('span_error') === true) {
				$(this.nextElementSibling).remove();
			}
		});
	}
};

function marcar_invalido (ic_obj, ic_obj_type, ic_msj)
{
	var ac_object = fnc_GET_Obj_Attributes($(ic_obj));
	if (fnc_trim(ic_msj) === '')
	{	
		ic_msj = ac_object.msg_required;
	}

	var pi_obj_aux = ic_obj;

	if (ic_obj_type === 'input' || ic_obj_type === 'textarea')
	{
		ic_obj = $(ic_obj + ":not([data-vw])");
	}
	else if (ic_obj_type === 'select')
	{
		ic_obj = $(ic_obj);
	}

	ic_obj.removeClass("valid").addClass("invalid");

	if (ic_obj_type === 'select')
	{
		var pi_obj_nextElement_id = '';

		$(pi_obj_aux).each(function() {
			pi_obj_nextElement_id = $(this.nextElementSibling).attr('id');
			pi_obj_nextElement_id = pi_obj_nextElement_id.substring(8, pi_obj_nextElement_id.length - 5);
		});
		
		f_select_chosen_valid(pi_obj_nextElement_id, 'invalid');
		ic_obj = $('#select2-' + pi_obj_nextElement_id + '-main');
	}
	
	// Mensaje
	if (ic_msj !== '')
	{
		if (ic_obj_type === 'input' || ic_obj_type === 'textarea' || ic_obj_type === 'select')
		{
			$(ic_obj).each(function() {
				if ($(this.nextElementSibling).hasClass('span_error') === false)
				{
					$(this).after('<span class="span_error">' + ic_msj + '</span>');
				}
			});
		}
	}
};

// -------------------------- ORDERNAR DE ACA PARA ABAJO

/*
Funcion que se encarga de cargar todas las caracteristicas de los objectos en el formulario
*/
function fnc_master_objetos_cargar_caracteristicas() {

	fnc_html_modal_table_config_export();
	
	// Cargar select's 'Materialize', excepto select's personalizados
	$('select:not(.select2):not([aria-controls])').formSelect();
	
	// $('.tap-target').tapTarget();	

	$('.sidenav').sidenav();

	// $("ul.tabs").tabs({
	$('.tabs').tabs({
		onShow: function(tab) {

			fc_tab_id = this.$content[0].id;
			fnc_tables_ejecutar_alternos(fc_tab_id);
			
			fnc_sub_container__children();
			
			//$("#tab_em_dir").tabs();
			if (fb_fnc_registrar === false) {fnc_dataTable_recalc();}
		}
	});
	
	var cloase = false;
	$('.modal').modal({
		dismissible: false,		
		opacity: 0.9,
		
		onOpenStart: function () {

		},
		onOpenEnd: function () {
			
			// ::::::::::::::::::::: Creacion 'Button Close Out- In' - Inicio :::::::::::::::::::::
			var	pc_modal_id = $(this).attr('id');
			var	pc_button_close_out_id =  pc_modal_id + '-close_out';
			var	pc_button_close_in_id =  pc_modal_id + '-close_in';
			var	pc_button_close_data_tipo = $('#' + pc_modal_id).data('button_close');
			var pc_button_close_contenedor = '';

			// Validacion
			if ($('#' + pc_modal_id).hasClass('left-sheet') === true || ($('#' + pc_modal_id).hasClass('right-sheet') === true)) {
				pc_button_close_data_tipo = 'in';
			}
			
			if (pc_button_close_data_tipo === 'out') {

				// Propiedades del modal
				var pc_modal_width_class = '';
				var pc_modal_height_class = '';
				if ($('#' + pc_modal_id).hasClass('width_25') === true) {pc_modal_width_class = 'width_25';}
				if ($('#' + pc_modal_id).hasClass('width_50') === true) {pc_modal_width_class = 'width_50';}
				if ($('#' + pc_modal_id).hasClass('width_55') === true) {pc_modal_width_class = 'width_55';}
				if ($('#' + pc_modal_id).hasClass('width_65') === true) {pc_modal_width_class = 'width_65';}
				if ($('#' + pc_modal_id).hasClass('width_80') === true) {pc_modal_width_class = 'width_80';}
				if ($('#' + pc_modal_id).hasClass('width_90') === true) {pc_modal_width_class = 'width_90';}
				
				if ($('#' + pc_modal_id).hasClass('height_75') === true) {pc_modal_height_class = 'height_75';}
				if ($('#' + pc_modal_id).hasClass('height_90') === true) {pc_modal_height_class = 'height_90';}

				// Ocultar 'Button Close Out' visible
				$('.mdl_mtz-close').each(function() {$('#' + $(this).attr('id')).css({ display: 'none' });});
				
				// Creacion de Button Close
				if ($('#' + pc_modal_id + '_modal-overlay').exists()) {
					$('#' + pc_button_close_out_id).css({ display: 'block' });
				}
				else {
					$('#' + pc_modal_id + ' + .modal-overlay').attr('id', pc_modal_id + '_modal-overlay');
					pc_button_close_contenedor = document.getElementById(pc_modal_id + '_modal-overlay');
					$(pc_button_close_contenedor).after("<div id='" + pc_button_close_out_id + "' class='mdl_mtz-close img_close_02 z-depth-5 animated rubberBand " + pc_modal_width_class + " " + pc_modal_height_class + " out'></div>"); // rubberBand - jello
				}

				// Button Close
				fnc_modal_button_close_position();

				$('#' + pc_button_close_out_id).click(function() {
					$('#' + pc_button_close_out_id).css({ display: 'none' });
					$('#' + pc_modal_id).modal('close');
				});

				// Modal
				$('#' + pc_modal_id + ', #' + pc_modal_id + '_modal-overlay').mouseenter(function() {
					if ($('#' + pc_button_close_out_id).css('display') === 'block') {return;}
					$('.mdl_mtz-close').each(function() {$('#' + $(this).attr('id')).css({ display: 'none' });});
					if (cloase === false) {
						//if ($('#' + pc_modal_id + '_modal-overlay').is(':visible') === true) {
							
							/*
							if (pc_button_close_out_id === 'mdl_grid_it_seleccion-close_out') {
								alert($('#' + pc_modal_id + '_modal-overlay').is(':visible'));
								alert(pc_button_close_out_id);
							}
							*/
							
							$('#' + pc_button_close_out_id).css({ display: 'block' });
						//}
					}
				});
				
				// Button Close_in
				if ($('#' + pc_button_close_in_id).exists()) {
					$('#' + pc_button_close_in_id).css({ display: 'block' });
				}
				else {
					pc_button_close_contenedor = document.getElementById(pc_modal_id);
					$(pc_button_close_contenedor).append("<a id='" + pc_button_close_in_id + "' class='btn_option btn_close waves-effect waves-light animated rubberBand in'></a>");
					$('#' + pc_button_close_in_id).click(function() {$('#' + pc_modal_id).modal('close');});
				}
			}
			else if (pc_button_close_data_tipo === 'in') {
				if ($('#' + pc_button_close_in_id).exists()) {
					$('#' + pc_button_close_in_id).css({ display: 'block' });
				}
				else {
					pc_button_close_contenedor = document.getElementById(pc_modal_id);
					$(pc_button_close_contenedor).append("<a id='" + pc_button_close_in_id + "' class='btn_option btn_close waves-effect waves-light animated rubberBand'></a>");
					$('#' + pc_button_close_in_id).click(function() {$('#' + pc_modal_id).modal('close');});
				}
			}
			// ::::::::::::::::::::: Creacion 'Button Close Out- In' - Fin :::::::::::::::::::::

			// Funcion que se dispara despues de terminar la carga del modal
			fnc_ExecFunction('fnc_' + pc_modal_id + '_post_finish_load_modal');

			fnc_tables_ejecutar_alternos(pc_modal_id);
			fnc_sub_container__children();
		},
		onCloseStart: function () {
			
			// Button Close: Ocultar el Button Close, cuando se cierra el modal
			cloase = true;
			var pc_modal_id = $(this).attr('id');
			var	pc_button_close_out_id =  pc_modal_id + '-close_out';
			$('#' + pc_button_close_out_id).css({ display: 'none' });

			// Funcion que se dispara despues de terminar de cerrar el modal
			fnc_ExecFunction('fnc_' + pc_modal_id + '_post_finish_close_modal');
			
			if (fc_cstyle_frm === 'form_ct_style_2')
			{
				fnc_cancelar();
			}

		},
		onCloseEnd: function () {
			cloase = false;
			fnc_dataTable_recalc();
		}
	});

	$('.dropdown-trigger').dropdown({
		inDuration: 0
	});

	$('.tooltipped').tooltip({
		enterDelay: 700
	});	
	
	$('.datepicker').datepicker({
		format: 'dd/mm/yyyy',
		firstDay: 1,
		i18n: datepicker_i18n
	});	
	
	iziToast.settings({
		icon: '',
		timeout: 4000,
		position: 'topRight',
		transitionIn: 'bounceInLeft',
		transitionOut: 'fadeOutUp',
		pauseOnHover: false,
		closeOnClick: true,
		closeOnEscape: true,
		close: false,
		progressBar: false,
		// balloon: true,
		displayMode: 'replace' // once - replace
		// id: 'question',
		// overlay: true,
	});

	$('input[type=checkbox]').on('click', function(e) {
		if ($(this).is(':checked')) {
			$(this).attr('checked', true);
		}
		else {
			$(this).attr('checked', false);
		}
	});
	$('input[type=checkbox].show_cest').on('change', function(e) {
		if ($(this).is(':checked')) {
			$(this).parent().find('span:not(.lever)').html('Activo');
		}
		else {
			$(this).parent().find('span:not(.lever)').html('Inactivo');
		}
	});

	fnc_set_data_lnk();

	// Accesos rapidos de formulario transaccion
	var pa_shortcut_nuevo = ['alt+n', '_lnk_opt_2'];
	var pa_shortcut_guardar = ['alt+g', '_lnk_opt_r'];
	var pa_shortcut_imprimir = ['alt+i', '_lnk_opt_6'];

	shortcut.add(pa_shortcut_nuevo[0], function () {
		$("[data-lnk='" + pa_shortcut_nuevo[1] + "']")[0].click();
	}, {
		"type": "keydown",
		"propagate": true,
		"target": document
	});

	shortcut.add(pa_shortcut_guardar[0], function () {
		$("[data-lnk='" + pa_shortcut_guardar[1] + "']")[0].click();
	}, {
		"type": "keydown",
		"propagate": true,
		"target": document
	});

	shortcut.add(pa_shortcut_imprimir[0], function () {
		$("[data-lnk='" + pa_shortcut_imprimir[1] + "']")[0].click();
	}, {
		"type": "keydown",
		"propagate": true,
		"target": document
	});

	$(window).resize(function()
	{
		fnc_modal_button_close_position();
		
		if ($('body').hasClass('frm_2_parts') === false)
		{
			fnc_sub_container__children();
		}
	});

	$(document).on('keyup', function(e) {
		if (e.which === 27) {
			
			//alert($('.sweet-overlay').is(":visible"));
			
			fnc_modal_close();
		}
	});
	

};

function fnc_set_data_lnk(io_object = '', ic_selector_adicional = '')
{
	// Faltante - AGREGAR Formulario - PONER CADA OBJETO PARA QUE SE PUEDA INICIAR NUEVAMENTE
	/*
	Valida que los enlaces esten activos para poder ejecutar la funcion asignada.
	
	label[data-lnk]: Valor que contiene la funcion a ejecutar al click en el label (label)
	link: Clase que significa que el label esta activo como link (label)
	*/
	
	var pc_selector = '*[data-lnk]';
	
	if (io_object !== '') {
		if (io_object.substr(0, 5) == '_lnk_') {
			pc_selector = "[data-lnk='" + io_object + "']";
		}
		else {
			pc_selector = "[data-col='" + io_object + "']";
		}
	}

	if (ic_selector_adicional !== '') {
		pc_selector += ic_selector_adicional;
	}

	$(pc_selector).on('click', function () {
		var obj_type_ = $(this)[0].tagName.toLowerCase();
		var data_ = $(this).data('lnk');
		
		if (obj_type_ === 'label') {
			if ($(this).hasClass('link') === false) {return;}
			//if ($(this).is(':visible') === false) {return;}
		}
		else if (obj_type_ === 'div') {
			if ($(this).hasClass('col_label') === true) {
				if ($(this).hasClass('link') === false) {return;}
			}
		}

		data_ = data_.substring(5, data_.length);
		eval('fnc_' + data_ + '(this)');
	});
};

/*
function fnc_set_data_lnk(io_object = '') {
	var pc_selector = '*[data-lnk]';
	
	if (io_object !== '') {
		if (io_object.substr(0, 5) == '_lnk_') {
			pc_selector = "[data-lnk='" + io_object + "']";
		}
		else {
			pc_selector = "[data-col='" + io_object + "']";
		}
	}

	$(pc_selector).on('click', function () {
		var obj_type_ = $(this)[0].tagName.toLowerCase();
		var data_ = $(this).data('lnk');
		
		if (obj_type_ === 'label') {
			if ($(this).hasClass('link') === false) {return;}
			//if ($(this).is(':visible') === false) {return;}
		}
		else if (obj_type_ === 'div') {
			if ($(this).hasClass('col_label') === true) {
				if ($(this).hasClass('link') === false) {return;}
			}
		}

		data_ = data_.substring(5, data_.length);
		eval('fnc_' + data_ + '(this)');
	});
};
*/

function fnc_get_modal_activo() {
	var pc_modal_id = '';
	var pn_modal_index = 0;
	var pn_modal_index_max = 0;

	$('.modal:visible').each(function() {
		pn_modal_index = parseInt($(this).css('z-index'));
		if (pn_modal_index_max < pn_modal_index) {
			pc_modal_id = $(this).attr('id');
			pn_modal_index_max = pn_modal_index;
		}
	});

	return [pc_modal_id, pn_modal_index_max];
};

function fnc_modal_close() {

	// Validacion
	if (fb_SweetAlert_press_esc === true) {
		fb_SweetAlert_press_esc = false;
		return;
	}

	var pc_modal_id = fnc_get_modal_activo()[0];
	if (pc_modal_id === '') {return;}

	if ($('#' + pc_modal_id).hasClass('modal_ft_search') === false) {
		$('#' + pc_modal_id).modal('close');
	}
	else if ($('#' + pc_modal_id).hasClass('modal_ft_search') === true) {
		var pc_input_filtro = 'i_filter_' + pc_modal_id.substring(4, pc_modal_id.length);
		if ($(Obj_Col('', pc_input_filtro)).is(":focus")) {
			$('#' + pc_modal_id).modal('close');
		}
		else {
			fnc_set_focus('', pc_input_filtro);
		}
	}
};

function fnc_modal_button_close_position () {
	var pa_modal_activo = fnc_get_modal_activo();
	if (pa_modal_activo[0] === '') {return;}

	var	pc_modal_id = pa_modal_activo[0];
	var	pc_button_close_out_id =  pc_modal_id + '-close_out';
	//var	pc_button_close_in_id =  pc_modal_id + '-close_in';
	var	pc_button_close_data_tipo = $('#' + pc_modal_id).data('button_close');

	// Variables Modal
	var po_modal = $('#' + pc_modal_id);
	var pn_modal_width = po_modal.width();
	var po_modal_position = po_modal.position();
	var	pn_modal_position_top = po_modal_position.top;
	var pn_modal_position_left = po_modal_position.left;
	var pn_modal_margin_right = parseInt(po_modal.css('margin-right').replace('px', ''));
	var pn_modal_index = parseInt(pa_modal_activo[1]);

	// Button Close
	var pn_button_close_left = ((pn_modal_position_left + pn_modal_margin_right + pn_modal_width + 10) * 100) / $(window).width();
	$('#' + pc_button_close_out_id).css({
		'top': pn_modal_position_top,
		'z-index': pn_modal_index,
		'left': pn_button_close_left + '%'
	});
};

function fnc_validar_lnk (ic_data_link) {
	return $('[data-lnk="' + ic_data_link + '"]').hasClass('link');
};


// ========================================================================================================================================================
// ========================================================================================================================================================
// ========================================================================================================================================================
// ========================================================================================================================================================

var gc_group_window = 'Sistema'
var gc_group_popup_window = 'Popup'

function open_form (ic_frm, ic_group_window = '', myWidth = 1200, myHeight = 640)
{
	if (ic_group_window === '') {
		ic_group_window = gc_group_window;
	}
	
	var left = (screen.width - myWidth) / 2;
	var top = (screen.height - myHeight) / 4;
	var myWindow = window.open(ic_frm, ic_group_window, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + myWidth + ', height=' + myHeight + ', top=' + top + ', left=' + left);
	
	
	// =========================================================
	// =========================================================
	// =========================================================

	
	/*
	if (ic_group_window === '') {
		ic_group_window = gc_group_window;
	}
	var objeto_window_referencia;
	//var configuracion_ventana = "toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=1000,height=600";
	// configuracion_ventana = "";
	//objeto_window_referencia = window.open(ic_frm, ic_group_window, configuracion_ventana);
	window.open(ic_frm, ic_group_window, configuracion_ventana);
	*/
};


// EXCELENTE
function myPopup21(myURL, title, myWidth, myHeight) {
	var left = (screen.width - myWidth) / 2;
	var top = (screen.height - myHeight) / 4;
	var myWindow = window.open(myURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + myWidth + ', height=' + myHeight + ', top=' + top + ', left=' + left);
}


// excelente
const popupCenterScreen = (url, title, w, h, focus) => {
	const top = (screen.height - h) / 4, left = (screen.width - w) / 2;
	const popup = window.open(url, title, `scrollbars=yes,width=${w},height=${h},top=${top},left=${left}`);
	if (focus === true && window.focus) popup.focus();
	return popup;
}

//excelente
function openfunc() {
	windowWidth = 1000;
	windowHeight = 600;
	var left = (screen.width - windowWidth) / 2;
	var top = (screen.height - windowHeight) / 4;
	var myWindow = window.open("https://www.google.com",'_blank','width=' + windowWidth + ', height=' + windowHeight + ', top=' + top + ', left=' + left);
};

// excelente
function createPopupWindow77(url) {
	/*
    var height = screen.height;
    var width = screen.width;
	*/
    var height = 600;
    var width = 1000;
	
    var left, top, win;

    if (window.screenX < 0) {
        left = (window.screenX - width) / 2;
    } else {
        left = (screen.width - width) / 2;
    }

    if (window.screenY < 0) {
        top = (window.screenY + height) / 4;
    } else {
        top = (screen.height - height) / 4;
    }

    win=window.open( url,"myTarget", "width="+width+", height="+height+",left="+left+",top="+top+"menubar=no, status=no, location=no, resizable=yes, scrollbars=yes");
    if (win.focus) {
        win.focus();
    }
}

//excelente
function popupCenter_22(url, title, w, h) {
  const hasSpace = window.matchMedia(`(min-width: ${w + 20}px) and (min-height: ${h + 20}px)`).matches;
  const isDef = v => typeof v !== 'undefined';
  const screenX = isDef(window.screenX) ? window.screenX : window.screenLeft;
  const screenY = isDef(window.screenY) ? window.screenY : window.screenTop;
  const outerWidth = isDef(window.outerWidth) ? window.outerWidth : document.documentElement.clientWidth;
  const outerHeight = isDef(window.outerHeight) ? window.outerHeight : document.documentElement.clientHeight - 22;
  const targetWidth = hasSpace ? w : null;
  const targetHeight = hasSpace ? h : null;
  const V = screenX < 0 ? window.screen.width + screenX : screenX;
  const left = parseInt(V + (outerWidth - targetWidth) / 2, 10);
  const right = parseInt(screenY + (outerHeight - targetHeight) / 2.5, 10);
  const features = [];

  if (targetWidth !== null) {
    features.push(`width=${targetWidth}`);
  }

  if (targetHeight !== null) {
    features.push(`height=${targetHeight}`);
  }

  features.push(`left=${left}`);
  features.push(`top=${right}`);
  features.push('scrollbars=1');

  const newWindow = window.open(url, title, features.join(','));

  if (window.focus) {
    newWindow.focus();
  }

  return newWindow;
}

// se posiciona en el centro pero de acuerdo a la posicion del formulario padre
const openPopupCenter = (url, title, w, h) => {
  const getSpecs = (w, h, top, left) => {
    return `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`;
  };

  const getFirstNumber = (potentialNumbers) => {
    for(let i = 0; i < potentialNumbers.length; i++) {
      const value = potentialNumbers[i];

      if (typeof value === 'number') {
        return value;
      }
    }
  };

  // Fixes dual-screen position
  // Most browsers use window.screenLeft
  // Firefox uses screen.left
  const dualScreenLeft = getFirstNumber([window.screenLeft, screen.left]);
  const dualScreenTop = getFirstNumber([window.screenTop, screen.top]);
  const width = getFirstNumber([window.innerWidth, document.documentElement.clientWidth, screen.width]);
  const height = getFirstNumber([window.innerHeight, document.documentElement.clientHeight, screen.height]);
  const left = ((width / 2) - (w / 2)) + dualScreenLeft;
  const top = ((height / 2) - (h / 2)) + dualScreenTop;
  const newWindow = window.open(url, title, getSpecs(w, h, top, left));

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }

  return newWindow;
}

function PopupCenterFer(url, title, w, h) {
  var userAgent = navigator.userAgent,
      mobile = function() {
        return /\b(iPhone|iP[ao]d)/.test(userAgent) ||
          /\b(iP[ao]d)/.test(userAgent) ||
          /Android/i.test(userAgent) ||
          /Mobile/i.test(userAgent);
      },
      screenX = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
      screenY = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
      outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.documentElement.clientWidth,
      outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : document.documentElement.clientHeight - 22,
      targetWidth = mobile() ? null : w,
      targetHeight = mobile() ? null : h,
      V = screenX < 0 ? window.screen.width + screenX : screenX,
      left = parseInt(V + (outerWidth - targetWidth) / 2, 10),
      right = parseInt(screenY + (outerHeight - targetHeight) / 2.5, 10),
      features = [];
  if (targetWidth !== null) {
    features.push('width=' + targetWidth);
  }
  if (targetHeight !== null) {
    features.push('height=' + targetHeight);
  }
  features.push('left=' + left);
  features.push('top=' + right);
  features.push('scrollbars=1');

  var newWindow = window.open(url, title, features.join(','));

  if (window.focus) {
    newWindow.focus();
  }

  return newWindow;
}

// =============================
function OpenPopupCenter(pageURL, title, w, h) {
	var left = (screen.width - w) / 2;
	var top = (screen.height - h) / 4;  // for 25% - devide by 4  |  for 33% - devide by 3
	var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
} 
// ==================================

function popupwindow3(url, title, w, h) {
    var y = window.outerHeight / 2 + window.screenY - ( h / 2)
    var x = window.outerWidth / 2 + window.screenX - ( w / 2)
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + y + ', left=' + x);
} 

function popupWindow2(url, windowName, win, w, h) {
    const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
    const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
    return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}

function popupwindow(url, title, w, h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2)-70;
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 

const popupCenter = ({url, title, w, h}) => {
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft
    const top = (height - h) / 2 / systemZoom + dualScreenTop
    const newWindow = window.open(url, title, 
      `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `
    )

    if (window.focus) newWindow.focus();
};

// ========================================================================================================================================================
// ========================================================================================================================================================
// ========================================================================================================================================================
// ========================================================================================================================================================

function f_select_chosen_valid(object_p, estado_p) {
	if (estado_p !== '') {
		// $('#select2-' + $(object_p).attr('id') + '-container').parent().removeClass(estado_p === 'valid' ? 'invalid' : 'valid').addClass(estado_p);
		$('#select2-' + object_p + '-container').parent().removeClass(estado_p === 'valid' ? 'invalid' : 'valid').addClass(estado_p);
	}
};

function validar_fecha_input(fecha) {
	var fecha_vb = $("#" + fecha).val();	
	fecha_vb = fecha_vb.substr(3,2) + '/' + fecha_vb.substr(0,2) + '/' + fecha_vb.substr(6,4);
	return fecha_vb;
	/*
	var d = new Date();	
	var month = d.getMonth()+1;
	var day = d.getDate();
	var output = (month<10 | '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + d.getFullYear();
	*/
};

function formatear_fecha_a_10_digitos(fecha) {
	var fecha_vl = new Date(fecha);
	var mes_vl = fecha_vl.getMonth() + 1;
	var dia_vl = fecha_vl.getDate();
	return (dia_vl<10 ? '0' : '') + dia_vl + '/' + (mes_vl<10 ? '0' : '') + mes_vl + '/' + fecha_vl.getFullYear();	
};

// ----------------------------------------------------------------------------------


/*
function fnc_is_visible(ic_form, ic_data_col) {


};
*/



function focus_al_object_proximo_vacio() {
	$('input, select').each(
		function(index){  
			var input = $(this);
			
			if (input.val() === "")
			{		
			
			input.select(); 
			input.focus();
				
				return false
			}
			// alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
		}
	);
};

function focus_al_object_proximo(a,e) {
	var self = $(a),
	// var self = $(this),
     // form = self.parents('form:eq(0)'),
     form = self.parents('body:eq(0)'), 
     submit = (self.attr('type') == 'submit' || self.attr('type') == 'button'), 
     focusable, 
     next; 

    if (e.keyCode == 13 && !submit) { 
     focusable = form.find('input,a,select,button,textarea').filter(':visible:not([readonly]):not([disabled])'); 
     next = focusable.eq(focusable.index(this)+1); 

     if (next.length) { 
		next.select(); 
		next.focus();
     } else { 
      form.submit(); 
     } 

     return false; 
    } 
};

//====================================================================================================
// Redondeos de Numeros
function fnc_redondear_importe(in_numero) {
	return fnc_redondear_numero(fnc_obtener_numero(in_numero), EntFact_cant_dig)
};
function fnc_redondear_saldo_inventario(in_numero) {
	return fnc_redondear_numero(fnc_obtener_numero(in_numero), cc_EntInv_saldo_cant_dig)
};
function fn_redondear_tpc(in_numero) {
	return fnc_redondear_numero(fnc_obtener_numero(in_numero), cc_EntCon_tpc_cant_dig)
};
function fnc_redondear_numero(in_numero, decimales) {
    var signo = (in_numero >= 0 ? 1 : -1);
    in_numero = in_numero * signo;
    if (decimales === 0) //con 0 decimales
        return signo * Math.round(in_numero);
    // round(x * 10 ^ decimales)
    in_numero = in_numero.toString().split('e');
    in_numero = Math.round(+(in_numero[0] + 'e' + (in_numero[1] ? (+in_numero[1] + decimales) : decimales)));
    // x * 10 ^ (-decimales)
    in_numero = in_numero.toString().split('e');
    return signo * (in_numero[0] + 'e' + (in_numero[1] ? (+in_numero[1] - decimales) : -decimales));
};
//====================================================================================================
// Formatos de Numeros 'numeral.js'
function fnc_formatear_importe(in_numero) {
	return fnc_formatear_numero(fnc_obtener_numero(in_numero), EntFact_cant_dig)
};
function fnc_formatear_saldo_inventario(in_numero) {
	return fnc_formatear_numero(fnc_obtener_numero(in_numero), cc_EntInv_saldo_cant_dig)
};
function fnc_formatear_tpc(in_numero) {
	return fnc_formatear_numero(fnc_obtener_numero(in_numero), cc_EntCon_tpc_cant_dig)
};
function fnc_formatear_numero(in_numero, in_decimales) {
	var lc_decimales_cadena = '';
	if (in_decimales === 2) {lc_decimales_cadena = '00';}
	if (in_decimales === 3) {lc_decimales_cadena = '000';}
	if (in_decimales === 4) {lc_decimales_cadena = '0000';}
	
	return numeral(in_numero).format('0,0.' + lc_decimales_cadena);
};
function fnc_formatear_enumerador(in_numero) {
	return numeral(in_numero).format('00');
};
function fnc_obtener_numero(ic_numero) {
	return numeral(ic_numero).value();
};

// ---------------------------------------------------------------------

// formatea un numero según una mascara dada ej: "-$###,###,##0.00"
//
// elm   = elemento html <input> donde colocar el resultado
// n     = numero a formatear
// mask  = mascara ej: "-$###,###,##0.00"
// force = formatea el numero aun si n es igual a 0
//
// La función devuelve el numero formateado

// function MASK(form, n, mask, format) {
function MASK(n, mask, format) {
  if (format == "undefined") format = false;
  if (format || NUM(n)) {
    dec = 0, point = 0;
    x = mask.indexOf(".")+1;
    if (x) { dec = mask.length - x; }

    if (dec) {
      n = NUM(n, dec)+"";
      x = n.indexOf(".")+1;
      if (x) { point = n.length - x; } else { n += "."; }
    } else {
      n = NUM(n, 0)+"";
    } 
    for (var x = point; x < dec ; x++) {
      n += "0";
    }
    x = n.length, y = mask.length, XMASK = "";
    while ( x || y ) {
      if ( x ) {
        while ( y && "#0.".indexOf(mask.charAt(y-1)) == -1 ) {
          if ( n.charAt(x-1) != "-")
            XMASK = mask.charAt(y-1) + XMASK;
          y--;
        }
        XMASK = n.charAt(x-1) + XMASK, x--;
      } else if ( y && "$0".indexOf(mask.charAt(y-1))+1 ) {
        XMASK = mask.charAt(y-1) + XMASK;
      }
      if ( y ) { y-- }
    }
  } else {
     XMASK="";
  }
  /*
  if (form) {
    form.value = XMASK;
	form.val(XMASK);
    if (NUM(n)<0) {
      form.style.color="#FF0000";
    } else {
      form.style.color="#000000";
    }
  }
  */
  return XMASK;
};

// Convierte una cadena alfanumérica a numérica (incluyendo formulas aritméticas)
//
// s   = cadena a ser convertida a numérica
// dec = numero de decimales a redondear
//
// La función devuelve el numero redondeado

function NUM(s, dec) {
  for (var s = s+"", num = "", x = 0 ; x < s.length ; x++) {
    c = s.charAt(x);
    if (".-+/*".indexOf(c)+1 || c != " " && !isNaN(c)) { num+=c; }
  }
  if (isNaN(num)) { num = eval(num); }
  if (num == "")  { num=0; } else { num = parseFloat(num); }
  if (dec != undefined) {
    r=.5; if (num<0) r=-r;
    e=Math.pow(10, (dec>0) ? dec : 0 );
    return parseInt(num*e+r) / e;
  } else {
    return num;
  }
};


/*
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:																																					:
:																	VALIDACIONES																	:
:																																					:
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_mensaje_validacion (ic_msj) {
	//f_msj(ic_msj,'','e','bottomRight','');
	swal(gc_msj_titulo_error, ic_msj, gc_msj_tipo_error);
};

/*
False: NaN
True: Mayor o igual cero
*/
function fnc_validar_numero_mayor_a_NaN (ic_frm, ic_col, ic_msj) {
	var pn_value = parseFloat($(Obj_Col(ic_frm, ic_col)).val());
	//if (isNaN(pn_value)) {pn_value = 0;}
	//if (pn_value === 0) {
	if (isNaN(pn_value)) {
		fnc_set_focus(ic_frm, ic_col);
		if (ic_msj.length > 0) {fnc_mensaje_validacion(ic_msj);}
		return false;
	}
	return true;
};

/*
False: NaN o Cero
True: Mayor a cero
*/
function fnc_validar_numero_mayor_a_cero (ic_frm, ic_col, ic_msj) {
	var pn_value = parseFloat($(Obj_Col(ic_frm, ic_col)).val());
	if (isNaN(pn_value)) {pn_value = 0;}
	if (pn_value === 0) {
		fnc_set_focus(ic_frm, ic_col);
		if (ic_msj.length > 0) {fnc_mensaje_validacion(ic_msj);}
		return false;
	}
	return true;
};

function fnc_validar_cadena_no_vacia (ic_frm, ic_col, ic_msj) {
	var pc_value = $.trim(String($(Obj_Col(ic_frm, ic_col)).val()));
	if (pc_value === '') {
		fnc_set_focus(ic_frm, ic_col);
		if (ic_msj.length > 0) {fnc_mensaje_validacion(ic_msj);}
		return false;
	}
	return true;
};


/*
//function fnc_GET_span_proc_est (ic_ccod_est, ic_cdsc_est) {
function fnc_GET_span_proc_est (ic_columnName, ic_cellData) {
	
	var ic_cellData = String(ic_cellData);
	var pc_ccod_est = '';
	var	pc_cdsc_est = '';
	if (ic_cellData.indexOf(':') > -1) {
		pc_ccod_est = ic_cellData.substring(0, ic_cellData.indexOf(':'));
		pc_cdsc_est = ic_cellData.substring(ic_cellData.indexOf(':') + 1, ic_cellData.length);
	}

	var pc_ClassSpan = '';
	if (pc_ccod_est === 'I') {pc_ClassSpan = 'warning';}
	else if (pc_ccod_est === 'P') {pc_ClassSpan = 'warning';}
	else if (pc_ccod_est === 'B') {pc_ClassSpan = 'warning';}
	else if (pc_ccod_est === 'C') {pc_ClassSpan = 'success';}
	else if (pc_ccod_est === 'X') {pc_ClassSpan = 'danger';}
		
	return "<span class='label label-" + pc_ClassSpan + "'>" + pc_cdsc_est + "</span>";
};
*/

//function fnc_GET_span_proc_est (ic_ccod_est, ic_cdsc_est) {
function fnc_GET_span_proc_est (ic_columnName, ic_cellData) {
	var ic_cellData = String(ic_cellData);
	var pc_ccod_est = '';
	var	pc_cdsc_est = '';
	if (ic_cellData.indexOf(':') > -1) {
		pc_ccod_est = ic_cellData.substring(0, ic_cellData.indexOf(':'));
		pc_cdsc_est = ic_cellData.substring(ic_cellData.indexOf(':') + 1, ic_cellData.length);
	}

	var pc_ClassSpan = '';
	if (pc_ccod_est === 'I') {pc_ClassSpan = 'warning';}
	else if (pc_ccod_est === 'P') {pc_ClassSpan = 'warning';}
	else if (pc_ccod_est === 'B') {pc_ClassSpan = 'warning';}
	else if (pc_ccod_est === 'C') {pc_ClassSpan = 'success';}
	else if (pc_ccod_est === 'X') {pc_ClassSpan = 'danger';}
		
	return "<span class='span_label label-" + pc_ClassSpan + "'>" + pc_cdsc_est + "</span>";
};

function fnc_ClickButton (pc_obj) {
	if ($(pc_obj).exists()) {
		if ($(pc_obj).prop('disabled') === false) {
			$(pc_obj)[0].click();
		}
		return true;
	}
	else {
		return false;
	}
};




























function fnc_contenedor_carga__show (ic_contenedor_id)
{
	var contenedor = document.getElementById(ic_contenedor_id);
	contenedor.style.visibility = 'visible';
	contenedor.style.opacity = 1;

	/*
	var contenedor = document.getElementById('contenedor_carga_falso');
	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = 0;
	*/

	$('body').addClass('overflow_hidden');
};

function fnc_contenedor_carga__hidden (ic_contenedor_id)
{
	var contenedor = document.getElementById(ic_contenedor_id);
	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = 0;

	/*
	var contenedor = document.getElementById('contenedor_carga_falso');
	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = 0;
	*/

	$('body').removeClass('overflow_hidden');
};





/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		CHECKBOX																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_checkbox_set_value (ic_frm, ic_col, ib_value) {
	$(Obj_Col(ic_frm, ic_col)).prop('checked', ib_value).trigger('change');
	$(Obj_Col(ic_frm, ic_col)).attr('checked', ib_value).trigger('change');
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																			TAB																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_tabs_select_tab (ic_object, tab_select) {
	$('#' + ic_object).tabs('select', tab_select);
};


/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	COMPORTAMIENTO																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_VAL_Obj_exists (ic_frm, ic_col)
{
	return $(Obj_Col(ic_frm, ic_col)).exists();
};

//sami9
function fnc_SET_Obj_Attributes (ic_frm, ic_col, ia_data, ia_new_val, ib_requerido, ib_inicializar = false)
{
	var obj_type_ = document.querySelector(Obj_Col(ic_frm, ic_col)).tagName.toLowerCase();
	
	// Data
	for (var a = 0; a < ia_data.length; a++)
	{
		$(Obj_Col(ic_frm, ic_col)).removeData(ia_data[a]);
		$(Obj_Col(ic_frm, ic_col)).attr('data-' + ia_data[a], ia_new_val[a]);
	}

	// Requerido
	if (
		obj_type_ === 'input' ||
		obj_type_ === 'select'
		)
	{
		$(Obj_Col(ic_frm, ic_col)).prop('required', ib_requerido);
	}

	// Inicializacion
	if (ib_inicializar === true)
	{	
		// Asignacion de caracteristicas
		if (obj_type_ === 'input')
		{
			//fnc_inputs_cargar_caracteristicas(ic_frm, ic_col);
		}
		else if (obj_type_ === 'select')
		{
			//if (!fnc_VAL_Obj_exists(ic_frm, ic_col))
			//{
				//fnc_selects_cargar_caracteristicas(ic_frm, ic_col);
			//}
		}
	}
	
	// Habilitar
	fnc_frm_objs_habilitar('O:' + ic_frm + ',' + ic_col);
	
	// Requerido
	if (
		obj_type_ === 'input' ||
		obj_type_ === 'select'
		)
	{
		if (ib_requerido === true)
		{
			//$(Obj_Col(ic_frm, ic_col)).removeClass('NotRequired'); //Temporal
			f_obj_validar_vacio(ic_frm, ic_col, obj_type_, '');
		}
		else if (ib_requerido === false)
		{
			//$(Obj_Col(ic_frm, ic_col)).addClass('NotRequired'); //Temporal
			marcar_valido(Obj_Col(ic_frm, ic_col, obj_type_), obj_type_);
		}
	}
};

function fnc_GET_Obj_Attributes (io_input)
{
	var pc_id = $(io_input).attr('id');
	var pc_frm = $(io_input).closest("form").attr('id');
	var pc_tab_container = $($(io_input).closest('div.div_container')).attr('id');
	var pc_type = $(io_input)[0].tagName.toLowerCase();

	var pc_modal_container = $(io_input).closest('.modal').attr('id');

	var data_col = $(io_input).data('col');
	if (data_col === undefined) {data_col = '';}
	
	var pc_col_dsc = ($(io_input).data('dsc') === undefined ? $('#' + pc_frm + ' [data-col_dsc="' + data_col + '"]').html() : $(io_input).data('dsc'));
	
	var data_col_2 = $(io_input).data('col_2');
	if (data_col_2 === undefined) {data_col_2 = '';}

	var data_lnk = $(io_input).data('lnk');
	if (data_lnk === undefined) {data_lnk = '';}
	
	var data_msg_required = $(io_input).data('msg_required');
	if (data_msg_required === undefined) {data_msg_required = '';}

	var data_old_value = $(io_input).data('old_value');
	if (data_old_value === undefined)
	{
		data_old_value = false;
	}
	else
	{
		data_old_value = true;
	}

	var pa_result = [];
	pa_result.push(
						{
							'id': fnc_trim(pc_id),
							'form': fnc_trim(pc_frm),
							'tab_container': fnc_trim(pc_tab_container),
							'modal_container': fnc_trim(pc_modal_container),
							'type': fnc_trim(pc_type),
							'col': fnc_trim(data_col),
							'col_dsc': fnc_trim(pc_col_dsc),
							'col_2': fnc_trim(data_col_2),
							'lnk': fnc_trim(data_lnk),
							'msg_required': fnc_trim(data_msg_required),
							'old_value': data_old_value
						}
					);

	return pa_result[0];
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES DEL PROCESO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_SET_variables_de_menu (ic_ccod_men)
{
	fc_ccod_men = ic_ccod_men;
	
	//var pa_lq_usp_ad_mod_men_list = fnc_GET_val__of__localStorage(lS_lq_usp_ad_mod_men_list, 'Array');
	var pa_columns = ['ccod_emp', 'ccod_mod', 'nnivel', 'ccod_men'];
	var pa_values = [fnc_GET_val__of__localStorage(lS_ccod_emp), fnc_GET_val__of__localStorage(lS_ccod_mod), '9', ic_ccod_men];
	var pa_results = fnc_Array_Filtrar_por_columnas(fnc_GET_val__of__localStorage(lS_lq_usp_ad_mod_men_list, 'Array'), pa_columns, pa_values);
	if (pa_results.length > 0)
	{
		fc_ccod_men_rel = pa_results[0].ccod_men_rel;
		fc_cdsc_men = pa_results[0].cdsc_men;
		fc_corigen = pa_results[0].corigen;
		fc_cfrm = 'frm_' + pa_results[0].corigen;
		fc_ctip_frm = pa_results[0].ctip_frm;
		fc_cstyle_frm = pa_results[0].cstyle_frm;
	}
};

function fnc_GET_Date_to_String (ic_date)
{
	pc_day = ic_date.substring(0, 2);
	pc_month = ic_date.substring(3, 5);
	pc_year = ic_date.substring(6, 10);

	return new Date(pc_month + '/' + pc_day + '/' + pc_year);
};

function fnc_REMOVE_obj (ic_obj)
{
	document.getElementById(ic_obj).remove();
};

function fnc_MOVE_obj (ic_obj, ic_contenedor_obj)
{
	var po_nuevo_contenedor = document.getElementById(ic_contenedor_obj);
	var po_object_a_mover = document.getElementById(ic_obj);
	po_nuevo_contenedor.appendChild(po_object_a_mover);	
};



function fnc_SET_val__to__localStorage (ic_key, ic_value, ic_type = '')
{
	if (fnc_trim(ic_type) === '')
	{
		localStorage.setItem(ic_key, ic_value);
	}
	else if (fnc_trim(ic_type) === 'Array')
	{
		localStorage.setItem(ic_key, JSON.stringify(ic_value));
	}
};

function fnc_GET_val__of__localStorage (ic_key, ic_type = '')
{
	if (fnc_trim(ic_type) === '')
	{
		return localStorage.getItem(ic_key);
	}
	else if (fnc_trim(ic_type) === 'Array')
	{
		return JSON.parse(localStorage.getItem(ic_key));
	}
}

function fnc_REM_val__of__localStorage (ic_key)
{
	localStorage.removeItem(ic_key);
}






// Funcion no USADA AUN
function fnc_validar_vacio (i_value)
{
	if (i_value === '' || i_value === null || i_value === undefined)
	{
		return true;
	}
	return false;
};




function fnc_set_focus(ic_form, ic_data_col) {
	if ($(Obj_Col(ic_form, ic_data_col)).prop('readonly') === true) {return;}
	$(Obj_Col(ic_form, ic_data_col)).focus();
};

function set_focus(object) {
	object = $("#" + object);
	object.select();
	object.focus();
};

function fnc_definir_tipo_origen() {
	var pc_tipo = 'bd';
	
	if (jc_est_form === 'n' && fr_row_data_cb === undefined) {
		pc_tipo = 'form';
	}
	else if (jc_est_form === 'e' && fr_row_data_cb.ccod_est === 'B' && fc_ctip_frm === 'frm_ts') {
		pc_tipo = 'form';
	}
	else if (jc_est_form === 'e' && fc_ctip_frm === 'frm_ct') {
		pc_tipo = 'form';
	}
	
	return pc_tipo;
};

function fnc_ExecFunction (ic_function, ia_function_parametros = [])
{
	if ($.isFunction(window[ic_function]))
	{
		if (ia_function_parametros.length > 0)
		{
			window[ic_function].apply(this, [ia_function_parametros]);
		}
		else
		{
			window[ic_function].apply(this);
		}
	}
};

function fnc_trim (ic_cadena)
{
	return $.trim(ic_cadena);
};

function fnc_mensaje (ic_mensaje, ic_titulo = gc_msj_titulo_error, ic_icon = gc_msj_tipo_error)
{
	//f_msj('¡Ingrese valor(es) de cambio de moneda!','','e','bottomRight','');
	swal(ic_titulo, ic_mensaje, ic_icon);
};

function f_msj(mensaje_p, titulo_, tipo_p, posicion_p, timeout_p, ic_transitionIn = 'fadeInLeft'){
	var backgroundColor_;
	var messageColor_ = 'rgba(0,0,0,0.7)';
	if (tipo_p == 'i'){
		backgroundColor_ = 'rgba(157,222,255,0.9)'
	}
	if (tipo_p == 'e'){
		backgroundColor_ = 'rgba(255,175,180,0.9)'
	}
	if (tipo_p == 's'){
		backgroundColor_ = 'rgba(166,239,184,0.9)'
	}
	if (tipo_p == 'w'){
		backgroundColor_ = 'rgba(255,207,165,0.9)'
	}
	if (timeout_p == null || timeout_p == '')
	{
		timeout_p = 4000;
	}
	iziToast.show({
		position: posicion_p,
		messageColor: messageColor_,
		backgroundColor: backgroundColor_,
		timeout: timeout_p,
		title: titulo_,
		message: mensaje_p,
		transitionIn: ic_transitionIn,
	});
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		ARRAY																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

/* Validar si esta funcion permanecera o la que sigue la reemplaza del todo */
function fnc_Get_File_Values(ia_values) {
	var pc_result = '';
	for (var a = 0; a < ia_values.length; a++) {
		if (a < ia_values.length - 1) {
			pc_result += ia_values[a] + pl_sep_col;
		}
		else {
			pc_result += ia_values[a] + pl_sep_fil;
		}
	}
	return pc_result;
};

function fnc_set_RowData_desde_Array(ia_origen, ia_columns)
{
	var columnName = '';
	var pc_result = '';
	
	if (ia_columns.length > 0) {
		$.each(ia_origen, function (i, option) {
			for (var b = 0; b < ia_columns.length; b++) {
				columnName = ia_columns[b];

				if (b < ia_columns.length - 1) {
					pc_result += option[columnName] + pl_sep_col;
				}
				else {
					pc_result += option[columnName] + pl_sep_fil;
				}
			}
		});
	}

	return pc_result;
};

function fnc_GET_ArrayValues_to_RowString (ic_row, ic_sep_col = pl_sep_col) {
	var pa_result = [];
	var pc_value = '';

	while (ic_row !== '') {
		if (ic_row.indexOf(ic_sep_col) > 0)
		{
			pc_value = fnc_trim(ic_row.substring(0, ic_row.indexOf(ic_sep_col)));
			ic_row = fnc_trim(ic_row.substring(ic_row.indexOf(ic_sep_col) + 1, ic_row.length));
		}
		else {
			pc_value = ic_row;
			ic_row = '';
		}
		
		pa_result.push(pc_value);
	}

	return pa_result;
};

function fnc_Array_sortByKeyAsc (array, key)
{
	return array.sort (function (a, b) {
		var x = a [key];
		var y = b [key];
		// return ((x <y)? -1: ((( x> y)? 1: 0)));
		return ((x <y)? -1: (( x> y)? 1: 0));
	});
};

function fnc_Array_sortByKeyDesc (array, key)
{
	return array.sort (function (a, b) {
		var x = a [key];
		var y = b [key];
		return ((x> y)? -1: ((x <y)? 1: 0));
	});
};

function fnc_Array_EliminarDuplicados(ia_Arrayoriginal, ic_col) {
	var pa_newArray = [];
	var lookupObject  = {};

	for(var i in ia_Arrayoriginal) {
		lookupObject[ia_Arrayoriginal[i][ic_col]] = ia_Arrayoriginal[i];
	}
	for(i in lookupObject) {
		pa_newArray.push(lookupObject[i]);
	}
	return pa_newArray;
};

function fnc_Array_Filtrar_por_columnas (ia_Array_Origen, ia_columns, ia_values, ia_operator = [])
{
	var pn_cont_parametros = ia_columns.length;
	var pn_cont_check = 0;
	var pa_result = [];
	for (var a = 0; a < ia_Array_Origen.length; a++) {
		pn_cont_check = 0;
		for (var b = 0; b < ia_columns.length; b++) {
			if (ia_operator.length > 0) {
				if ($.trim(ia_operator[b]) === '=') {
					if ($.trim(String(ia_Array_Origen[a][ia_columns[b]])) === $.trim(String(ia_values[b]))) {
						pn_cont_check += 1;
					}
				}
				else if ($.trim(ia_operator[b]) === '<>') {
					if ($.trim(String(ia_Array_Origen[a][ia_columns[b]])) !== $.trim(String(ia_values[b]))) {
						pn_cont_check += 1;
					}
				}				
			}
			else {
				if ($.trim(String(ia_Array_Origen[a][ia_columns[b]])) === $.trim(String(ia_values[b]))) {
					pn_cont_check += 1;
				}				
			}
		}
		if (pn_cont_parametros === pn_cont_check) {
			pa_result.push(ia_Array_Origen[a]);
		}
	}
	return pa_result;
};

function fnc_Array_Eliminar_por_columnas (ia_Array_Origen, ia_columns, ia_values)
{
	var pn_cont_parametros = ia_columns.length;
	var pn_cont_check = 0;
	var pa_result = ia_Array_Origen.slice();
	for(var a = pa_result.length - 1; a >= 0; a--) {

		pn_cont_check = 0;
		for (var b = 0; b < ia_columns.length; b++) {
			if ($.trim(pa_result[a][ia_columns[b]]) === $.trim(ia_values[b])) {
				pn_cont_check += 1;
			}
		}
		if (pn_cont_parametros === pn_cont_check) {
			pa_result.splice(a, 1);
		}
	}
	return pa_result;
};

function fnc_Array_Object_add_column (ia_origen, ia_columns, ia_values)
{
	ia_origen.forEach(function(e) {
		if (typeof e === 'object') {
			for (var i = 0; i < ia_columns.length; i++) {
				e[ia_columns[i]] = ia_values[i];
			}
		}
	});
};

/*
DETALLAR TODOS LOS CASOS EN QUE SIRVE ESTA FUNCION

Input:
1. ia_origen = [
				{
				campo1: 'Descripcion 1'
				campo2: 'Descripcion 2'
				campo3: 'Descripcion 3'
				campo4: 'Descripcion 4'
				campo5: 'Descripcion 5'
				}
			]
2. ia_columns = ['campo1', 'campo2', 'campo3'];

Output:
pa_results = [
				{
				campo1: 'Descripcion 1'
				campo2: 'Descripcion 2'
				campo3: 'Descripcion 3'
				}
			 ]
*/
function fnc_Array_to_Array_for_Columns (ia_origen, ia_columns, ic_grid_option = '')
{
	if (ia_columns.length > 0) {
		var obj = {};
		var pa_results = [];
		var columnName = '';
		var columnName_p1 = '';
		var columnName_p2 = '';
	}

	if (ia_columns.length > 0) {
		// revisar facilmente si este all funciona me parece raro, creo deberia ir: ia_origen en ves de data
		if (ia_columns[0] === 'All') {
			pa_results = data;
		}
		else {
			$.each(ia_origen, function (i, option) {
				obj = {};
				for (var b = 0; b < ia_columns.length; b++) {
					
					columnName = ia_columns[b];
					if (columnName.indexOf(',') > 0)
					{
						columnName_p1 = $.trim(columnName.substring(0, columnName.indexOf(',')));
						columnName_p2 = $.trim(columnName.substring(columnName.indexOf(',') + 1, columnName.length));
						Object.assign(obj, {[columnName_p2]: option[columnName_p1]});
					}
					else if (columnName.indexOf('=') > 0)
					{
						columnName_p1 = $.trim(columnName.substring(0, columnName.indexOf('=')));
						columnName_p2 = $.trim(columnName.substring(columnName.indexOf('=') + 1, columnName.length));
						Object.assign(obj, {[columnName_p1]: columnName_p2});
					}
					else {
						Object.assign(obj, {[columnName]: option[columnName]});
					}

					//Object.assign(obj, {[ia_columns[b]]: option[ia_columns[b]]});
				}
				
				if (ic_grid_option !== '') {
					// Object.assign(obj, {'': jc_grid_row_opts_v});
					Object.assign(obj, {'': ic_grid_option});
				}
				
				pa_results.push(obj);
			});				
		}
	}

	if (ia_columns.length > 0) {return pa_results;}
};

function fnc_Array_Update_por_columnas (ia_Array_Origen, ia_columns_filter, ia_values_filter, ia_columns_update, ia_values_update)
{
	var pn_cont_parametros = ia_columns_filter.length;
	var pn_cont_check = 0;

	for (var a = 0; a < ia_Array_Origen.length; a++) {
		pn_cont_check = 0;
		for (var b = 0; b < ia_columns_filter.length; b++) {
			if ($.trim(ia_Array_Origen[a][ia_columns_filter[b]]) === $.trim(ia_values_filter[b])) {
				pn_cont_check += 1;
			}
		}
		if (pn_cont_parametros === pn_cont_check) {
			for (var c = 0; c < ia_columns_update.length; c++) {
				ia_Array_Origen[a][ia_columns_update[c]] = ia_values_update[c];
			}
		}
	}
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		SELECT																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_SET_val__to__select (ic_form, ic_col, ic_sel_value, in_sel_eq)
{
	var pc_object = Obj_Col(ic_form, ic_col, 'select');
	var pn_select_count = $(pc_object + ' option').length - 1;

	if (fnc_trim(ic_sel_value) !== '')
	{
		$(pc_object).val(fnc_trim(ic_sel_value)).trigger('change');
	}
	else if (fnc_trim(in_sel_eq) !== '')
	{
		$(pc_object).val($(pc_object + ' option:eq(' + in_sel_eq + ')').val()).trigger('change');
	}
};

function fnc_GET_val__of__select (ic_frm, ic_col)
{
	return fnc_trim($(Obj_Col(ic_frm, ic_col, 'select')).find(":selected").val());
};

function fnc_GET_text__of__select (ic_frm, ic_col)
{
	return fnc_trim($(Obj_Col(ic_frm, ic_col, 'select')).find(":selected").text());
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		INPUT																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_GET_val__of__input (ic_frm, ic_col)
{
	return fnc_trim($(Obj_Col(ic_frm, ic_col)).val());
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																MENSAJE DE CONFIRMACION																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_mensaje_confirmacion (ic_funcion, ic_mensaje, ic_titulo = '', ic_icon = '', ia_parametros = [])
{
	if (fnc_trim(ic_titulo) === '') {ic_titulo = 'Confirmación';}
	// if (fnc_trim(ic_icon) === '') {ic_icon = 'logout';}

	pc_html_modal_confirmacion = fnc_mensaje_confirmacion_HTML_1(ic_funcion, ic_mensaje, ic_titulo, ic_icon);

	$('body').prepend(pc_html_modal_confirmacion);
	
	$("[data-lnk='_lnk_" + ic_funcion + "__aceptar']").click(function() {
		fnc_ExecFunction(ic_funcion, ia_parametros);
		fnc_mensaje_confirmacion__modal(ic_funcion, 'none');
	});
	
	$("[data-lnk='_lnk_" + ic_funcion + "__cancel']").click(function() {
		fnc_mensaje_confirmacion__modal(ic_funcion, 'none');
	});
	
	fnc_mensaje_confirmacion__modal(ic_funcion, 'flex');
};

function fnc_mensaje_confirmacion__modal (ic_funcion, ic_display)
{
	var modal = document.querySelector('.modal-message.' + ic_funcion);
	modal.style.display = ic_display;

	if (ic_display === 'flex')
	{
		$('body').addClass('overflow_hidden');
	}
	else if (ic_display === 'none')
	{
		$('body').removeClass('overflow_hidden');
		$('.modal-message.' + ic_funcion).remove();
	}
};

function fnc_mensaje_confirmacion_HTML_1 (ic_funcion, ic_mensaje, ic_titulo = '', ic_icon = '')
{
	let pc_html = `
	<div class='modal-message bg-004 touch_action_none animated fadeIn faster_2 ` + ic_funcion + `'>
		<div class='row modal-message-content'>
			<div class='col s1 m1 l1 image ` + ic_icon + `'></div>
			<div class='col s9 m10 l10 p-left-20 message'>
				<span>` + ic_titulo + `</span>
				<p>` + ic_mensaje + `</p>
			</div>
			<div class='col s12 footer'>
				<button class='button-1 st-2 button-color-red-1 waves-effect waves-light m-right-10' data-lnk='_lnk_` + ic_funcion + `__aceptar'>Aceptar</button>
				<button class='button-1 st-2 button-color-grey-1 waves-effect waves-light' data-lnk='_lnk_` + ic_funcion + `__cancel'>Cancelar</button>
			</div>
		</div>
	</div>
	`;
	return pc_html;
};