var caracteres_excluidos = [9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 44, 45, 91, 93, 144, 145];

function fnc_selects_cargar_caracteristicas (ic_form = '', ic_object = '')
{
	var pc_object = '.select2';
	
	if (ic_form !== '') {
		pc_object = '#' + ic_form + ' select';
	}
	if (ic_object !== '') {
		pc_object = '#' + ic_form +  ' select[data-col="' + ic_object + '"]';
	}

	$(pc_object).select2({
	    language: "es",
		placeholder: 'Seleccionar',
		allowClear: true
	});
	
	// Selects que asignan su Value a Input relacionado
	$(pc_object + '[data-i_ccod]').change(f_set_i_ccod_desde_select);

	// A los selects requeridos los valida
	$(pc_object + ':required').change(function() {
		var pc_form = $(this).closest("form").attr('id');
		
		var data_col = $(this).data('col');
		if (data_col === undefined) {data_col = '';}
		
		var obj_type_ = $(this)[0].tagName.toLowerCase();
		
		f_obj_validar_vacio(pc_form, data_col, obj_type_, '');
	});
	
	// Completar: Agregar o ver si va formulario en este bucle
	$(pc_object).change(function() {
		var data_col = $(this).data('col');
		if (data_col === undefined) {data_col = '';}
		
		if ($(Obj_Col('', 'i_s_' + data_col)).exists()) {
			// Completar: Capturar el form contenedor y agregar en el select abajo
			$(Obj_Col('', 'i_s_' + data_col)).val($(this).find(":selected").text());
		}
	});

};

function fnc_inputs_cargar_caracteristicas (ic_form = '', ic_object = '')
{
	var pc_object = 'input, textarea';
	if (ic_form !== '' && ic_object === '')
	{
		pc_object = '#' + ic_form + ' input, ';
		pc_object += '#' + ic_form + ' textarea';
	}
	else if (ic_form !== '' && ic_object !== '')
	{
		pc_object = Obj_Col(ic_form, ic_object);
	}

	$(pc_object).each(function() {
		
		if (fnc_VAL_ft_number(this))
		{
			$(this)[0].maxLength = gn_inputs_number_maxLength;
		}
		
		// ClearButton
		if ($(this).is(":text") && !$(this).prop('readonly') && $(this).data('clear') !== 'n' && !$(this).hasClass('input-mtz'))
		{
			var ac_object = fnc_GET_Obj_Attributes(this);
			$(Obj_Col(ac_object.form, ac_object.col) + '[data-hb_v][data-hb_n][data-hb_e]').jQueryClearButton();

			// i_filter
			if (fnc_VAL_cad_indexOf(ac_object.col, 'i_filter_grid'))
			{
				$(Obj_Col(ac_object.form, ac_object.col)).jQueryClearButton();
			}
		}

	});

	$(pc_object).focus(function() {
		var ac_object = fnc_GET_Obj_Attributes(this);
		if ($(this).is(":text"))
		{
			if (ac_object.old_value)
			{
				$(this).attr('data-old_value', $(this).val());	
			}
			
			if (!$(this).hasClass('.lks.link'))
			{
				$(this).select();
				//console.log('seleccion focus');
			}
		}

	});

	$(pc_object).keyup(function(e) {
		
		if (mb_bloquear_process === true)
		{
			return;
		}
		//if ($(this).prop('readonly') === true) {return;}

		if (e.which === 13)
		{
			return;
		}

		if ($(this).prop('required'))
		{
			//if (!$(this).hasClass('NotRequired'))
			//{
				var ac_object = fnc_GET_Obj_Attributes(this);
				f_obj_validar_vacio(ac_object.form, ac_object.col, ac_object.type, '');
			//}
		}
		
	});

	$(pc_object).on('input change', function (e) {
		if ($(this).hasClass('ft_upper') === true) {
			fnc_input_Ft_Case(this, 'ft_upper');
		}
		else if ($(this).hasClass('ft_lower') === true) {
			fnc_input_Ft_Case(this, 'ft_lower');
		}
		else if ($(this).hasClass('ft_letter') === true) {
			fnc_input_Ft_Case(this, 'ft_letter');
		}
		else if ($(this).hasClass('ft_title') === true) {
			fnc_input_Ft_Case(this, 'ft_title');
		}
	});

	$(pc_object).change(function() {
		
		if (fnc_VAL_ft_number(this))
		{
			var pn_value = parseFloat($(this).val());
			var pc_value_ft = '';

			if ($(this).hasClass('f_imp') === true)
			{
				pc_value_ft = fnc_formatear_importe(pn_value);
			}
			else if ($(this).hasClass('f_sin') === true)
			{
				pc_value_ft = fnc_formatear_saldo_inventario(pn_value);
			}
			else if ($(this).hasClass('f_tpc') === true)
			{
				pc_value_ft = fnc_formatear_tpc(pn_value);
			}
			
			if ($(this).hasClass('ft_cero_vacio'))
			{
				if (pn_value === 0 || isNaN(pn_value)) {pc_value_ft = '';}
			}
			else if ($(this).hasClass('ft_vacio'))
			{
				if (isNaN(pn_value))
				{
					pc_value_ft = '';
				}
			}

			$(this).val(pc_value_ft);
		}
		
		if ($(this).prop('required'))
		{
			//if (!$(this).hasClass('NotRequired'))
			//{
				var ac_object = fnc_GET_Obj_Attributes(this);
				f_obj_validar_vacio(ac_object.form, ac_object.col, ac_object.type, '');
			//}
		}

	});

	$(pc_object).keypress(function() {
		if (fnc_VAL_ft_number(this))
		{
			return filterFloat(event, this);
		}
	});

};

function fnc_VAL_cad_indexOf (ic_cad, ic_cad_find)
{
	if (fnc_trim(ic_cad).indexOf(fnc_trim(ic_cad_find)) > -1)
	{
		return true;
	}
	else
	{
		return false;
	}
};	

function fnc_VAL_ft_number (io_obj)
{
	if ($(io_obj).hasClass('f_imp') || $(io_obj).hasClass('f_sin') || $(io_obj).hasClass('f_tpc') || $(io_obj).hasClass('f_num'))
	{
		return true;
	}
	return false;
};


function fnc_sub_container__children() {
	var pn_cont;
	$('.sub_container').each(function() {
		pn_cont = 1;
		$(this).children('.col').each(function() {
			var parentWidth = $(document).width();
			var demoWidth = ($(this).width()/parentWidth * 100).toFixed();
		
			if (pn_cont > 1 && demoWidth > 50) {
				$(this).addClass('m-top-15');
			}
			else {
				$(this).removeClass('m-top-15');
			}

			pn_cont = pn_cont + 1;
		});
	});
};

function f_set_i_ccod_desde_select() {
	
	var select_v = $(this).data('col');
	$("input[data-col='ccod_" + select_v + "']").val($(this).val());
	
	/*	
	var select_v = $(this).attr("id");
	var input_v = 'i_ccod' + select_v.substr(1,select_v.length -1);
	$('#' + input_v).val($(this).val());
	*/
};

function f_load_select_ajax(
							ic_form,
							pi_select_id,
							pi_column_ccod,
							pi_column_cdsc,
							pi_url,
							pi_sel_eq1 = false,
							ic_value_select = ''
							)
{
	$.ajax({
        url: pi_url,
        method: "PUT",
        type: "GET",
        //type: "POST",
        async: false,
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
			
			// $("select[data-col='" + pi_select_id + "']").empty();
			$("select[data-col='" + pi_select_id + "']").empty().trigger('change');

			// Seleccionamos por defecto el primer item
            $("select[data-col='" + pi_select_id + "']").append($("<option/>").attr("value", "").text(""));
			
			// Agregamos items al select
            $.each(data, function (i, option) {
                $("select[data-col='" + pi_select_id + "']").append($("<option/>").attr("value", option[pi_column_ccod]).text(option[pi_column_cdsc]));
            });
            //$("select[data-col='" + pi_select_id + "']").prepend("<option value='0' selected='selected'>-- Seleccionar producto --</option>");
        },
		'error': function (jqXHR, textStatus, customErrorMessage) {
			alert(customErrorMessage);
		}
    });
	fnc_hb_sl_select(ic_form, pi_select_id, pi_sel_eq1, ic_value_select);
};

function f_load_select_array(ic_form, pi_select_id, pi_column_ccod, pi_column_cdsc, ia_data, pi_sel_eq1 = false, ic_value_select = '') {
	
	
	/*
	var pn_cont_parametros = ia_columns.length;
	var pn_cont_check = 0;
	var pa_result = [];
	*/
	
	$("select[data-col='" + pi_select_id + "']").empty();

	// Seleccionamos por defecto el primer item
	$("select[data-col='" + pi_select_id + "']").append($("<option/>").attr("value", "").text(""));
	
	
	
	//for (var a = 0; a < ia_data.length; a++) {
		
		

		
		// Agregamos items al select
		$.each(ia_data, function (i, option) {
			$("select[data-col='" + pi_select_id + "']").append($("<option/>").attr("value", option[pi_column_ccod]).text(option[pi_column_cdsc]));
		});
		//$("select[data-col='" + pi_select_id + "']").prepend("<option value='0' selected='selected'>-- Seleccionar producto --</option>");
			
		
		
		
	/*
		pn_cont_check = 0;
		for (var b = 0; b < ia_columns.length; b++) {
			if ($.trim(ia_data[a][ia_columns[b]]) === $.trim(ia_values[b])) {
				pn_cont_check += 1;
			}
		}
		if (pn_cont_parametros === pn_cont_check) {
			pa_result.push(ia_data[a]);
		}
	}
	*/


	
	
	
	fnc_hb_sl_select(ic_form, pi_select_id, pi_sel_eq1, ic_value_select);
};

function f_eject_ajax(pi_url, pi_a_columns = [], ia_data = []) {
	if (pi_a_columns.length > 0) {
		var obj = {};
		var la_values = [];
	}
	//try {
		$.ajax({
			url: pi_url,
			data: JSON.stringify(ia_data),
			method: "PUT",
			type: "GET",
			//type: "POST",
			async: false,
			contentType: "application/json",
			//dataType: "json",
			
			/*
		    beforeSend: function() {
				//$('#loader').removeClass('hidden')
			},
			*/
			
			success: function (data) {
				if (pi_a_columns.length > 0) {
					if (pi_a_columns[0] === 'All') {
						la_values = data;
					}
					else {
						//try {
							$.each(data, function (i, option) {
								obj = {};
								for (var i = 0; i < pi_a_columns.length; i++) {
									Object.assign(obj, {[pi_a_columns[i]]: option[pi_a_columns[i]]});
								}
								la_values.push(obj);
							});
						/*}
						catch(err) {
							f_msj('Error programador: ¡No existe retorno de datos!','','e','bottomRight','');
						}*/
					}
				}
			},
			
			/*
			complete: function() {
				//$('#loader').addClass('hidden');
				if (prueba_re === true)
				{
					swal(gc_msj_titulo_registro_correcto, 'se registrooo', gc_msj_tipo_correcto);	
				}
			},
			*/
			
			error: function (jqXHR, textStatus, customErrorMessage) {
				//alert(jqXHR.responseText);
				alert('fernando: ' + customErrorMessage);
			}/*,
			'dataSrc': ''*/
		});
	/*}
	catch(err) {
		f_msj(err,'','e','bottomRight','');
	}*/

	if (pi_a_columns.length > 0) {return la_values;}
};

// function f_eject_ajax_77(pi_url, pi_a_columns = [], ia_data = []) {
function f_eject_ajax_77(pi_url) {
	/*
	if (pi_a_columns.length > 0) {
		var obj = {};
		var la_values = [];
	}
	*/
	
	var la_values = [];
	
    $.ajax({
        url: pi_url,
		// data: JSON.stringify(ia_data),
        method: "PUT",
        type: "GET",
        //type: "POST",
        async: false,
        contentType: "application/json",
        //dataType: "json",
		success: function (data) {
			
			
			la_values = data;
			
		},
		error: function (jqXHR, textStatus, customErrorMessage) {
			//alert(jqXHR.responseText);
			alert('fernando: ' + customErrorMessage);
		}/*,
		'dataSrc': ''*/
    });
	// if (pi_a_columns.length > 0) {return la_values;}
	return la_values;
};

// Talves se deben unir ambas funciones
function fnc_ajax_extraer_dato(ic_url, ic_column_extraer) {
	var pc_value = '';	
	var la_columns = [ic_column_extraer];
	pc_value = f_a_data(f_eject_ajax(ic_url, la_columns), la_columns);
	return pc_value;
};
function f_a_data(pi_a_data, pi_a_columns) {
	if (pi_a_data.length > 0) {
		return pi_a_data[0][pi_a_columns[0]];
	}
	return '';
};

// Eliminar el ultimo parametro -> ic_data_type
function Obj_Col (ic_frm, ic_col, ic_obj_type = '', ic_data_type = '')
{
	var pc_data_type = 'col';
	var pc_data_val_type = ic_col.substring(0, 5);
	if (pc_data_val_type === '_lnk_')
	{
		pc_data_type = pc_data_val_type.substring(1, 4);
	}
	return (ic_frm === '' ? '' : '#' + ic_frm) + ' ' + ic_obj_type + '[data-' + (pc_data_type === '' ? 'col' : pc_data_type) + '="' + ic_col + '"]';
	
	//return (ic_frm === '' ? '' : '#' + ic_frm) + ' ' + ic_obj_type + '[data-' + (ic_data_type === '' ? 'col' : ic_data_type) + '="' + ic_col + '"]';
};

function Obj_lnk(ic_form, ic_lnk, ic_obj_type = '') {
	return (ic_form === '' ? '' : '#' + ic_form) + ' ' + ic_obj_type + '[data-lnk="' + ic_lnk + '"]';
};

























// ================== MOVER A ARCHIVO DE FORMATO
function fnc_input_Ft_Case(io_this, pc_ft) {
	var input = $(io_this);
	var start = $(io_this).selectionStart;
	var pc_result = '';
	if (pc_ft === 'ft_upper') {
		pc_result = toUpperCase($(io_this).val());
	}
	else if (pc_ft === 'ft_lower') {
		pc_result = toLowerCase($(io_this).val());
	}
	else if (pc_ft === 'ft_letter') {
		pc_result = toLetterCase($(io_this).val());
	}
	else if (pc_ft === 'ft_title') {
		pc_result = toTitleCase($(io_this).val());
	}
	$(io_this).val(pc_result);
	$(io_this).selectionStart = $(io_this).selectionEnd = start;
};
/*
$(Obj_Col(fc_frm_dt_dir, 'cdsc_via')).on('input', function(evt) {
	var input = $(this);
	var start = input[0].selectionStart;
	$(this).val(toTitleCase($(this).val()));
	input[0].selectionStart = input[0].selectionEnd = start;
});
*/
function toUpperCase(ic_texto)
{
	return ic_texto.toUpperCase();
};

function toLowerCase(ic_texto)
{
	return ic_texto.toLowerCase();
};

function toLetterCase(ic_texto)
{
	  return ic_texto.charAt(0).toUpperCase() + ic_texto.slice(1).toLowerCase();
};

function toTitleCase(ic_texto)
{
	// Metodo 1
	//return ic_texto.replace(
	//	/(\w)(\w*)/g,
	//	(_, firstChar, rest) => firstChar.toUpperCase() + rest.toLowerCase()
	//);
	
	// Metodo 2
	//return ic_texto.replace(/\w\S*/g, function(txt) {
	//	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	//});
	
	// Metodo 3
	return ic_texto.toLowerCase().replace(/\b[a-z]/g, function(txtVal) {
		return txtVal.toUpperCase();
	});
};


// ====================================================================================

function filterFloat (evt, input) {
    // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
    var key = window.Event ? evt.which : evt.keyCode;    
    var chark = String.fromCharCode(key);
    var tempValue = input.value+chark;
    if(key >= 48 && key <= 57){
        if(filter(tempValue, input)=== false){
            return false;
        }else{       
            return true;
        }
    }else{
          if(key == 8 || key == 13 || key == 0) {     
              return true;              
          }else if(key == 46){
                if(filter(tempValue, input)=== false){
                    return false;
                }else{       
                    return true;
                }
          }else{
              return false;
          }
    }
};

function filter(__val__, input){
    var pc_RegExp = '';
	if ($(input).hasClass('f_imp') === true) {
		pc_RegExp = '^([0-9]+\.?[0-9]{0,' + String(EntFact_cant_dig) + '})$';
	}
	else if ($(input).hasClass('f_sin') === true) {
		pc_RegExp = '^([0-9]+\.?[0-9]{0,' + String(cc_EntInv_saldo_cant_dig) + '})$';
	}
	else if ($(input).hasClass('f_tpc') === true) {
		pc_RegExp = '^([0-9]+\.?[0-9]{0,' + String(cc_EntCon_tpc_cant_dig) + '})$';
	}
	else if ($(input).hasClass('f_num') === true) {
		pc_RegExp = '^[0-9]+$';
	}
	//var preg = new RegExp('^([0-9]+\.?[0-9]{0,' + String(pc_nro_dig) + '})$');
	var preg = new RegExp(pc_RegExp);
    if(preg.test(__val__) === true){
        return true;
    }else{
       return false;
    }
};














/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		ROWS																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_set_RowData (ic_form, ia_objects, ib_enumerar = false, in_inicio_enumerar = 0) {

	var pc_RowData = '';
	var pn_RowData_total_cols = 0;
	var pn_RowData_cont_cols = 1;
	var pn_RowData_cont_filas = 1;
	
	if (in_inicio_enumerar > 0) {pn_RowData_cont_filas = in_inicio_enumerar;}

	var pc_selector = '';
	for (var i = 0; i < ia_objects.length; i++) {
		pc_selector += (ic_form === '' ? '' : '#' + ic_form) + " [data-col^='" + ia_objects[i] + "'], ";
		pn_RowData_total_cols += 1;
	}
	pc_selector = pc_selector.substring(0, pc_selector.length - 2);
	
	$(pc_selector).each(function () {

		if (pn_RowData_cont_cols === 1) {
			if (ib_enumerar === true) {
				pc_RowData += String(pn_RowData_cont_filas) + pl_sep_col;
			}
		}

		if (pn_RowData_cont_cols < pn_RowData_total_cols) {
			pc_RowData += $(this).val() + pl_sep_col;
		}
		else {
			pc_RowData += $(this).val() + pl_sep_fil;
			pn_RowData_cont_cols = 0;
			pn_RowData_cont_filas += 1;
		}
		pn_RowData_cont_cols += 1;
	});
	
	return pc_RowData;
};

var pc_string = '';
var fo_div_row;
var fo_div_row_button_remove;

var fo_div_row_object_1;
var fo_div_row_object_2;
var fo_div_row_object_3;
var fo_div_row_object_4;
var fo_div_row_object_5;
var fo_div_row_object_6;
var fo_div_row_object_7;
var fo_div_row_object_8;
var fo_div_row_object_9;
var fo_div_row_object_10;

function fnc_div_row_fo_button_remove (ic_col_row_delete, ic_link_row_delete, ic_div_row_um, ic_div_head_row_um, ic_div_1_style = '') {
	var pc_div_1_style = '<div class="col s1" style="padding-left: 5px; padding-right: 0px; float: right;">';
	if (ic_div_1_style === '1') {
		//pc_div_1_style = '<div class="col s1" style="padding-left: 5px; padding-right: 17px; float: right;">';
		pc_div_1_style = '<div class="col s1">';
	}

	fo_div_row_button_remove = $(pc_div_1_style + '<a class="link waves-effect waves-light add_sup" data-col="' + ic_col_row_delete + '" data-lnk="' + ic_link_row_delete + '" data-vs_v="n" data-vs_n="s" data-vs_e="s"></a></div>');
	fo_div_row_button_remove.click(function() {
		$(this).parent().remove();
		fnc_row_remove(ic_div_row_um, ic_div_head_row_um);
		fnc_ExecFunction('fnc_button_remove_post_' + ic_div_row_um.substring(0, ic_div_row_um.length - 1));
	});
};

function fnc_row_remove (ic_div_row, ic_div_row_head) {
	if ($("div[data-row*='" + ic_div_row + "']").length === 0) {
		$(ic_div_row_head).addClass('display_none');
	}
	else {
		$(ic_div_row_head).removeClass('display_none');
	}
};