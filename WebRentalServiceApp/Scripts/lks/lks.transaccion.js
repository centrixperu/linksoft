// Variables de Opciones del Menu Principal
var pc_opts_a = " \
	<li data-lnk='_lnk_opt_2'> \
		<a class='waves-effect waves-light'> \
			<i class='ico_new'></i> \
			<span class='text_underline'>N</span><span>uevo</span> \
			<span class='label_shortcut2'>(Alt+N)</span> \
			<span class='span_menu'>Nuevo registro</span> \
		</a> \
	</li> \
	<li data-lnk='_lnk_opt_3'> \
		<a class='waves-effect waves-light'> \
			<i class='ico_edit'></i> \
			<!-- <i class='far fa-highlighter fa-2x fa-more'></i> --> \
			<span class='text_underline'>E</span><span style='align: right;'>ditar</span> \
			<span class='label_shortcut2'>(Alt+E)</span> \
			<span class='span_menu'>Actualiza información del registro</span> \
		</a> \
	</li> \
	<li data-lnk='_lnk_opt_4'> \
		<a class='waves-effect waves-light'> \
			<i class='ico_delete'></i>Eliminar \
			<span class='span_menu'>Elimine permanentemente el registro</span> \
		</a> \
	</li> \
	<li data-lnk='lst_usu_opts_dv_1' class='divider' tabindex='-1'></li> \
	<li data-lnk='_lnk_opt_5'> \
		<a class='waves-effect waves-light'> \
			<i class='ico_preliminar'></i>Vista Preliminar \
			<span class='span_menu'>Visualice el formato de impresion</span> \
		</a> \
	</li> \
	<li data-lnk='_lnk_opt_6'> \
		<a class='waves-effect waves-light'> \
			<i class='ico_print'></i> \
			<span class='text_underline'>I</span><span>mprimir</span> \
			<span class='label_shortcut2'>(Alt+I)</span> \
			<span class='span_menu'>Realize la impresion directamente</span> \
		</a> \
	</li> \
	<li data-lnk='lst_usu_opts_dv_2' class='divider' tabindex='-1'></li> \
	<li data-lnk='_lnk_opt_7'> \
		<a class='waves-effect waves-light'> \
			<i class='ico_send'></i>Enviar por correo \
			<span class='span_menu'>Adjuntar archivos, pdf, xml, etc.</span> \
		</a> \
	</li> \
	<li data-lnk='lst_usu_opts_dv_3' class='divider' tabindex='-1'></li> \
	<li data-lnk='_lnk_opt_8'> \
		<a class='waves-effect waves-light'> \
			<i class='ico_anular'></i>Anular \
			<span class='span_menu'>Anulación del documento</span> \
		</a> \
	</li> \
";

var pc_opts_b = " \
	<li data-lnk='_lnk_opt_r'> \
		<a class='waves-effect waves-light'> \
			<i class='ico_save'></i> \
			<span class='text_underline'>R</span><span>egistrar documento</span> \
			<span class='label_shortcut2'>(Alt+G)</span> \
			<span class='span_menu'>Registre los datos ingresados</span> \
		</a> \
	</li> \
	<li data-lnk='_lnk_opt_50'> \
		<a class='waves-effect waves-light'> \
			<i class='ico_save'></i>Registrar borrador \
			<span class='span_menu'>Registre borrador de datos ingresados</span> \
		</a> \
	</li> \
	<li class='divider' tabindex='-1'></li> \
	<li data-lnk='_lnk_opt_c'> \
		<a class='waves-effect waves-light'> \
			<i class='ico_undo'></i> \
			<span class='text_underline'>C</span><span>ancelar</span> \
			<span class='span_menu'>Deshacer todos los cambios realizados</span> \
		</a> \
	</li> \
";

// Variables Exportadas
var jc_est_form = 'v';

// Funcion selects: para habilitar y selecconar item
function fnc_hb_sl_select(ic_form, pi_object_id, pi_sel_eq1, ic_value_select = '') {
	//linea a prueba - agregado 26mayo20
	//$(Obj_Col(ic_form, 'i_s_' + pi_object_id, 'input')).val('');
	// variables
	var ln_option_count = $('#' + ic_form + " select[data-col='" + pi_object_id + "'] option").length - 1;
	var lc_estado;
	// Setear estado de habilitacion
	if (pi_sel_eq1 === true) {
		if (ln_option_count <= 1) {
			lc_estado = 'n';
		}
		else {
			lc_estado = 's';
		}
	}
	else if (pi_sel_eq1 === false) {
		if (ln_option_count === 0) {
			lc_estado = 'n';
		}
		else {
			lc_estado = 's';
		}
	}
	// Habilitar o deshabilitar
	$(Obj_Col(ic_form, pi_object_id, 'select')).each(function() {f_select_input(ic_form, 'hb', this, lc_estado);});
	// Seleccionar
	if ($.trim(ic_value_select) === '') {
		if (pi_sel_eq1 === true)
		{
			fnc_SET_val__to__select(ic_form, pi_object_id, '', '1');
			//$(Obj_Col(ic_form, pi_object_id, 'select')).val($('#' + ic_form + " select[data-col='" + pi_object_id + "'] option:eq(1)").val()).trigger('change');
			
			$(Obj_Col(ic_form, 'i_s_' + pi_object_id, 'input')).val($(Obj_Col(ic_form, pi_object_id, 'select')).find(":selected").text());
		}
		//ELSE A PRUEBA
		else
		{
			//alert('entro');
			$(Obj_Col(ic_form, 'i_s_' + pi_object_id, 'input')).val('');
		}
		
		//ELSE A PRUEBA
		/*
		else {
			f_obj_validar_vacio(ic_form, pi_object_id, 'select', '');
		}
		*/
	}
	else
	{
		fnc_SET_val__to__select(ic_form, pi_object_id, fnc_trim(ic_value_select), '');
		//$(Obj_Col(ic_form, pi_object_id, 'select')).val($.trim(ic_value_select)).trigger('change');
		
		$(Obj_Col(ic_form, 'i_s_' + pi_object_id, 'input')).val($(Obj_Col(ic_form, pi_object_id, 'select')).find(":selected").text());
	}
};

//function fnc_frm_objs_habilitar(pi_form, ic_est_form = jc_est_form, ib_rows = false) {
function fnc_frm_objs_habilitar (pi_form, ic_est_form = jc_est_form)
{
	if (jc_est_form === 'e')
	{
		if (fr_row_data_cb.ccod_est === 'B')
		{
			ic_est_form = 'n';
		}
	}
	
	var pc_flujo = 1;
	var pc_frm = pi_form;
	var pc_selector__data_hb = '#' + pi_form + ' [data-hb_' + ic_est_form + ']';
	var pc_selector__data_vs = '#' + pi_form + ' [data-vs_' + ic_est_form + ']';

	if (pi_form.indexOf('O:') > -1)
	{
		pc_flujo = 2;
		pc_frm = fnc_trim(pi_form.substring(pi_form.indexOf('O:') + 2, pi_form.indexOf(',')));
		var pc_col = fnc_trim(pi_form.substring(pi_form.indexOf(',') + 1, pi_form.length));
		
		pc_selector__data_hb = Obj_Col(pc_frm, pc_col) + '[data-hb_' + ic_est_form + ']';
		pc_selector__data_vs = Obj_Col(pc_frm, pc_col) + '[data-vs_' + ic_est_form + ']';
	}

	//if (ib_rows === true) {pi_form += ' [data-rows]';}

	// Habilita - Deshabilita Objetos del formulario segun el estado del formulario
	$(pc_selector__data_hb).each(function() {
		/*
		var ac_object = fnc_GET_Obj_Attributes(this);
		var pc_frm_obj = ac_object.form;
		*/
		var obj_type_ = $(this)[0].tagName.toLowerCase();
		var data_ = $(this).data('hb_' + ic_est_form);
		var obj_id = $(this).attr('id');

		var data_col = $(this).data('col');
		if (data_col === undefined) {data_col = '';}

		if (obj_type_ === 'a') {
			if (data_ === 's') {
				$(this).removeClass("disabled");
			}
			else if (data_ === 'n') {
				$(this).addClass("disabled");
			}
			f_label_shortcut(obj_type_, this, data_);
		}
		else if (obj_type_ === 'input') {
			if (data_ === 's') {
				if ($(this).is(":text")) {
					$(this).attr('readonly', false);

					if (data_col.substr(0,1) === 'd') {
						$(this).addClass("datepicker");
					}
				}
				else if ($(this).is(":checkbox")) {
					$(this).attr('disabled', false);
				}
			}
			else if (data_ === 'n') {
				if ($(this).is(":text")) {
					$(this).attr('readonly', true);

					if (data_col.substr(0,1) === 'd') {
						$(this).removeClass("datepicker");
						try {
							$(this).datepicker("destroy");
						}
						catch (e) {}
					}
				}
				else if ($(this).is(":checkbox")) {
					$(this).attr('disabled', true);
				}
			}
		}
		else if (obj_type_ === 'textarea') {
			if (data_ === 's') {
				$(this).attr('readonly', false);
			}
			else if (data_ === 'n') {
				$(this).attr('readonly', true);
			}
		}
		else if (obj_type_ === 'div') {
			
			if ($(this).hasClass('col_label') === true) {
				
				if (data_ === 's') {
					$(this).addClass("link");
				}
				else if (data_ === 'n') {
					$(this).removeClass("link");
				}
				//f_label_shortcut(obj_type_, this, data_); // Terminar de migrar al click del DIV

			}
			else {
				if (data_ === 's') {
					$(this).removeClass("disabled");
				}
				else if (data_ === 'n') {
					$(this).addClass("disabled");
				}
			}
			
		}
		else if (obj_type_ === 'section') {
			if (data_ === 's') {
				$(this).removeClass("disabled");
			}
			else if (data_ === 'n') {
				$(this).addClass("disabled");
			}
		}
		else if (obj_type_ === 'label') {
			if (data_ === 's') {
				$(this).addClass("link");
				if ($(this).parent().hasClass('col_label_head') === true) {$(this).parent().addClass('c_link');}
			}
			else if (data_ === 'n') {
				$(this).removeClass("link");
				if ($(this).parent().hasClass('col_label_head') === true) {$(this).parent().removeClass('c_link');}
			}
			f_label_shortcut(obj_type_, this, data_);
		}
		else if (obj_type_ === 'select') {
			f_select_input(pc_frm, 'hb', this, data_);
		}
		else if (obj_type_ === 'button') {
			$(this).attr('disabled', data_ === 's' ? false : true);
		}
	});

	// Visualiza - No visualiza Objetos del formulario segun el estado del formulario
	$(pc_selector__data_vs).each(function() {
		var obj_type_ = $(this)[0].tagName.toLowerCase();
		var data_ = $(this).data('vs_' + ic_est_form);

		var data_col = $(this).data('col');
		if (data_col === undefined) {data_col = '';}
		
		var data_lnk = $(this).data('lnk');
		if (data_lnk === undefined) {data_lnk = '';}

		var pc_display_value = 'block';
		
		if (obj_type_ === 'a') {
			f_label_shortcut(obj_type_, this, data_);
		}
		else if (obj_type_ === 'input' || obj_type_ === 'textarea' || obj_type_ === 'button') {			
			pc_display_value = 'initial';
		}

		if (obj_type_ === 'select') {
			f_select_input(pc_frm, 'vs', this, data_);
		}
		else{
			if (data_col !== '') {
				if ($('#c_' + data_col).exists()) {
					$('#c_' + data_col).css('display', data_ === 's' ? pc_display_value : 'none');
				}
				else {
					$("*[data-col='" + data_col + "']").css('display', data_ === 's' ? pc_display_value : 'none');
				}
			}
			else if (data_lnk !== '') {
				if ($('#c_' + data_lnk).exists()) {
					$('#c_' + data_lnk).css('display', data_ === 's' ? pc_display_value : 'none');
				}
				else {
					$("*[data-lnk='" + data_lnk + "']").css('display', data_ === 's' ? pc_display_value : 'none');
				}
			}
		}
	});

	if (pc_flujo === 1)
	{
		/*
		var pn_datepicker_factor_1 = 2;
		var pn_datepicker_factor_2 = 1;
		var pn_datepicker_Rango_2 = (new Date).getFullYear() + pn_datepicker_factor_2;
		var pn_datepicker_Rango_1 = pn_datepicker_Rango_2 - pn_datepicker_factor_1;
		var datepicker_Rango_1 = [pn_datepicker_Rango_1, pn_datepicker_Rango_2];
		*/

		var pn_datepicker_factor_1 = 90;
		var pn_datepicker_factor_2 = 0;
		var pn_datepicker_Rango_2 = (new Date).getFullYear() + pn_datepicker_factor_2;
		var pn_datepicker_Rango_1 = pn_datepicker_Rango_2 - pn_datepicker_factor_1;
		var datepicker_Rango_1 = [pn_datepicker_Rango_1, pn_datepicker_Rango_2];
		
		/*
		function zero(n) {
		 return (n>9 ? '' : '0') + n;
		}
		var date = new Date();

		var time = date.getFullYear() +"-"+zero(date.getMonth()+1) +"-"+zero(date.getDate()) +" "+ zero(date.getHours()) + ":" + zero(date.getMinutes()) + ":" + zero(date.getSeconds());

		console.log(time);
		*/
		
		$('.datepicker').datepicker({
			format: 'dd/mm/yyyy',
			firstDay: 1,

			yearRange: datepicker_Rango_1,
			//showDaysInNextAndPreviousMonths: true,
			//showClearBtn: true,
			
			i18n: datepicker_i18n
		});
		

		// COMENTARIO TEMPORAL, TERMINAR DE CORREGIR EL CODIGO DE ESTE IF
		// Remover validaciones de inputs y select requeridos para el estado 'v: Visualizacion'
		if (ic_est_form === 'v')
		{
			
			$('.span_error').each(function() {
				$(this).remove();
			});
			
			$('#' + pi_form + ' select:required, ' + '#' + pi_form + ' input:required').each(function() {
				
				//var obj_id_ = $(this).attr('id');
				//f_obj_validar_vacio(obj_id_, pi_msj);
				
				$(this).removeClass("invalid");
				$(this).removeClass("valid");

				var object = $(this).attr('id');
				
				// var object_type = object.substr(0,1);
				var object_type = $(this)[0].tagName.toLowerCase();
				
				object = $("#" + object);
				if (object_type === 'select') {
					f_select_chosen_valid(object, '');
				}
				
			});

			var data_col_opts;
			$("#" + pi_form + " table").each(function() {
				data_col_opts = $(this).data('col_opts');
				if (data_col_opts !== undefined)
				{
					fnShowHide($(this).attr('id'), data_col_opts, false);
				}
			});
			
		}


		
		/*
		if (jc_est_form === 'b') {
			ic_est_form = 'e';
			jc_est_form = 'e';
		}
		*/

		/* VALIDAR MEJOR ESTA PARTE CON LA DE ABAJO - TALVES ESTE BLOQUE NO DEBERIA IR */
		if (jc_est_form === 'e') {
			if (fr_row_data_cb.ccod_est === 'B') {
				ic_est_form = 'e';
			}
		}

		// TODO ESTE PROCESO SE TIENE QUE MEJORAR DE ACUERDO A QUE FORMULARIO SE ESTE DANDO NUEVO
		// if (ic_est_form === 'n' && fb_fnc_editar_borrador === false)
		if (ic_est_form === 'n' && fr_row_data_cb === undefined)
		{
			if (pi_form === 'form_main') {$('.input-csim').attr('data-before', '');}
			f_frm_objs_clear(pi_form);
		}
		else if (ic_est_form === 'n' && fr_row_data_dt_1 === undefined)
		{
			//if (pi_form === 'form_main') {$('.input-csim').attr('data-before', '');}
			f_frm_objs_clear(pi_form);
		}
	}
	
};

// Limpiar Objetos del formulario
/*
data-vw: Data que se incluye en los objetos que solo son de muestra de informacion y no interactuan en el formulario.
*/
function f_frm_objs_clear (pi_form) {

	// $("#" + pi_form + " select[id*='s_'][data-hb_n], " + "#" + pi_form + " input[id*='i_'][data-hb_n]").each(function() {
	// $("#" + pi_form + " select[id*='s_'][data-hb_n], " + "#" + pi_form + " input[data-col][data-hb_n]").each(function() {
	$(
	"#" + pi_form + " textarea[data-col][data-hb_n], " +
	"#" + pi_form + " select[data-col][data-hb_n], " +
	"#" + pi_form + " input[data-col][data-hb_n], " +
	"#" + pi_form + " input[data-col][data-vw]"
	).each(function() {
		var obj_type_ = $(this)[0].tagName.toLowerCase();
		if (obj_type_ === 'input' || obj_type_ === 'textarea') {
			$(this).val('');
		}
		else if (obj_type_ === 'select') {
			$(this).val(null).trigger("change");
			/*
			var data_ = $(this).data('allow-clear');
			if (data_ !== false) {
				$(this).val(null).trigger("change");
			}
			*/
		}
	});

	var data_col_opts;
	$("#" + pi_form + " table").each(function() {

		// Boton(es) opciones de la grilla
		// if (jc_est_form === 'n' || jc_est_form === 'e') { // VER COMPORTAMIENTO CUANDO SE EDITA EL DOCUMENTO
		if (jc_est_form === 'n') {
			data_col_opts = $(this).data('col_opts');
			if (data_col_opts !== undefined)
			{
				fnShowHide($(this).attr('id'), data_col_opts, true);
			}			
		}

		$(this).dataTable().fnClearTable();
	});

};

// Completar: Traer Accesos completos del usuario en el main, y en esta seccion solo traer informacion de las opciones del formulario
function fnc_master_formulario_opciones_habilitar(pc_tipo = '') {
	pa_columns = ['ccod_opt_men'];
	pc_url = '/home/lq_usp_ad_usu_men_opt_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_usu=' + gc_ccod_usu + '&in_ccod_men=' + fc_ccod_men + '&ic_load_BD=load_BD';
	var pa_results = f_eject_ajax(pc_url, pa_columns);

	$('#lst_usu_opts.dropdown-content').css({ display: 'none' });
	$('#lst_usu_opts > li').remove();
	$('#lst_usu_opts').prepend(pc_tipo === 'a' ? pc_opts_a : pc_opts_b);
	
	for (var a = 0; a < pa_results.length; a++) {
		$('li[data-lnk="_lnk_opt_' + pa_results[a].ccod_opt_men + '"]').remove();
	}

	if (pc_tipo === 'a')
	{
		if (
		   !$('li[data-lnk="_lnk_opt_2"]').exists() 
		&& !$('li[data-lnk="_lnk_opt_3"]').exists() 
		&& !$('li[data-lnk="_lnk_opt_4"]').exists() 
		&& !$('li[data-lnk="_lnk_opt_5"]').exists() 
		&& !$('li[data-lnk="_lnk_opt_6"]').exists() 
		&& !$('li[data-lnk="_lnk_opt_7"]').exists()
		&& !$('li[data-lnk="_lnk_opt_8"]').exists()
		&& !$('li[data-lnk="_lnk_opt_9"]').exists()
		&& !$('li[data-lnk="_lnk_opt_10"]').exists()
		&& !$('li[data-lnk="_lnk_opt_11"]').exists()
		)
		{
			$('#lst_usu_opts').remove();
			$('#a_usu_opts').remove();
		}
		
		fnc_lst_usu_opts_dvs();
	}

	$('li[data-lnk^="_lnk_opt_"]').each(function() {
		var ac_object = fnc_GET_Obj_Attributes(this);
		fnc_set_data_lnk(ac_object.lnk);
	});
	
	
	
};

function fnc_lst_usu_opts_dvs() {
	if (
		   !$('li[data-lnk="_lnk_opt_5"]').exists()
		&& !$('li[data-lnk="_lnk_opt_6"]').exists()
		) {
		$('li[data-lnk="lst_usu_opts_dv_1"]').remove();
	}
	else if (
			   !$('li[data-lnk="_lnk_opt_2"]').exists()
			&& !$('li[data-lnk="_lnk_opt_3"]').exists()
			&& !$('li[data-lnk="_lnk_opt_4"]').exists()
			) {
		$('li[data-lnk="lst_usu_opts_dv_1"]').remove();
	}
	

	if (!$('li[data-lnk="_lnk_opt_7"]').exists()) {
		$('li[data-lnk="lst_usu_opts_dv_2"]').remove();
	}	
	else if (
			   !$('li[data-lnk="_lnk_opt_2"]').exists()
			&& !$('li[data-lnk="_lnk_opt_3"]').exists()
			&& !$('li[data-lnk="_lnk_opt_4"]').exists()
			&& !$('li[data-lnk="_lnk_opt_5"]').exists()
			&& !$('li[data-lnk="_lnk_opt_6"]').exists()
			) {
		$('li[data-lnk="lst_usu_opts_dv_2"]').remove();
	}	
	
	if (!$('li[data-lnk="_lnk_opt_8"]').exists()) {
		$('li[data-lnk="lst_usu_opts_dv_3"]').remove();
	}
	else if (
			   !$('li[data-lnk="_lnk_opt_2"]').exists()
			&& !$('li[data-lnk="_lnk_opt_3"]').exists()
			&& !$('li[data-lnk="_lnk_opt_4"]').exists()
			&& !$('li[data-lnk="_lnk_opt_5"]').exists()
			&& !$('li[data-lnk="_lnk_opt_6"]').exists()
			&& !$('li[data-lnk="_lnk_opt_7"]').exists()
			) {
		$('li[data-lnk="lst_usu_opts_dv_3"]').remove();
	}
};

// Habilitar - Deshabilitar opciones segun el estado del formulario
function fnc_hb_usu_opts() {

	if (jc_est_form == 'n' || jc_est_form == 'e')
	{
		$("#lst_usu_opts").removeClass('a').addClass('b');

		if (jc_est_form == 'n') {
			$('.nav_title_sub').html('(Nuevo Registro)');
		}
		if (jc_est_form == 'e') {
			$('.nav_title_sub').html('(Editando)');
		}
		
		fnc_master_formulario_opciones_habilitar('b');
		/*
		if (fc_cstyle_frm === 'form_ts_style_1') {
			fnc_master_formulario_opciones_habilitar('b');
		}
		*/

		/*
		// Opciones de usuario en el menu del formulario
	    $('li[data-lnk="_lnk_opt_2"]').addClass('display_none');
	    $('li[data-lnk="_lnk_opt_3"]').addClass('display_none');
		$('li[data-lnk="_lnk_opt_r"]').removeClass('display_none');
		$('li[data-lnk="_lnk_opt_b"]').removeClass('display_none');
		$('li[data-lnk="_lnk_opt_4"]').addClass('display_none');
		$('li[data-lnk="lst_usu_opts_dv_1"]').addClass('display_none');
		$('li[data-lnk="_lnk_opt_5"]').addClass('display_none');
		$('li[data-lnk="_lnk_opt_6"]').addClass('display_none');
		$('li[data-lnk="lst_usu_opts_dv_2"]').removeClass('display_none')
		$('li[data-lnk="_lnk_opt_8"]').addClass('display_none');
		$('li[data-lnk="_lnk_opt_m"]').addClass('display_none');
		$('li[data-lnk="_lnk_opt_c"]').removeClass('display_none');
		*/
		
		// Opciones de navegacion de registros de la grilla 'Lista'
		$('#btn_p_row').addClass('display_none');
		$('#btn_a_row').addClass('display_none');
		$('#btn_s_row').addClass('display_none');
		$('#btn_u_row').addClass('display_none');		
		$(Obj_Col('', '_lnk_open_modal_estados')).addClass('display_none');
		
		$('[data-col_before]').each(function() {
			var data_col_before = $(this).data('col_before');
			var data_col_after = $(this).data('col_after');
			$(this).removeClass(data_col_after).addClass(data_col_before);
		});
		
		// $('.tabs>li:nth-last-child(3)').addClass('margin_right_0px');
		
		// Tab Principal
		if (fc_cstyle_frm === 'form_ts_style_1')
		{
			$("a[href='#tab_lista']").parent().addClass('display_none');
			//$("a[href='#tab_lista']").parent().css('visibility','hidden');
			$("#tab_main").tabs("select", "tab_1");			
		}
		
	}
	else if(jc_est_form == 'v')
	{
		$("#lst_usu_opts").removeClass('b').addClass('a');
		
		$('.nav_title_sub').html('');
		
		fnc_master_formulario_opciones_habilitar('a');
		
		/*
		// Opciones de usuario en el menu del formulario
	    $('li[data-lnk="_lnk_opt_2"]').removeClass('display_none');
	    $('li[data-lnk="_lnk_opt_3"]').removeClass('display_none');
	    $('li[data-lnk="_lnk_opt_r"]').addClass('display_none');
	    $('li[data-lnk="_lnk_opt_b"]').addClass('display_none');
	    $('li[data-lnk="_lnk_opt_4"]').removeClass('display_none');
		$('li[data-lnk="_lnk_opt_5"]').removeClass('display_none');
		$('li[data-lnk="_lnk_opt_6"]').removeClass('display_none');
		$('li[data-lnk="_lnk_opt_8"]').removeClass('display_none');
		$('li[data-lnk="_lnk_opt_m"]').removeClass('display_none');
		$('li[data-lnk="_lnk_opt_c"]').addClass('display_none');
		*/
		
		// Opciones de navegacion de registros de la grilla 'Lista'		
		$('#btn_p_row').removeClass('display_none');
		$('#btn_a_row').removeClass('display_none');
		$('#btn_s_row').removeClass('display_none');
		$('#btn_u_row').removeClass('display_none');
		$(Obj_Col('', '_lnk_open_modal_estados')).removeClass('display_none');
		
		$('[data-col_before]').each(function() {
			var data_col_before = $(this).data('col_before');
			var data_col_after = $(this).data('col_after');
			$(this).removeClass(data_col_before).addClass(data_col_after);
		});
		
		
		//fnc_lst_usu_opts_dvs();
		
		// Tab Principal
		if (fc_cstyle_frm === 'form_ts_style_1') {
			$("a[href='#tab_lista']").parent().removeClass('display_none');
			//$("a[href='#tab_lista']").parent().css('visibility','visible');
			
			// <!-- $(".tabs").tabs("select", "tab_lista"); -->
		
			// $("ul.tabs")$("ul.tabs").tabs();
			
			// $('.tabs>li:nth-last-child(3)').removeClass('margin_right_0px');
			
			$('#tab_main li a.active').each(function() {
				var pc_href =  $(this).attr('href');
				pc_href = pc_href.substring(1, pc_href.length);
				$('#tab_main').tabs("select", pc_href);
			});
		}

		


	}
};

function fnc_opt_2() {
	fnc_nuevo();
};
function fnc_opt_3() {
	fnc_editar();
};
function fnc_opt_4() {
	fnc_eliminar();
};
function fnc_opt_5() {
	fnc_vpreliminar();
};
function fnc_opt_6() {
	fnc_imprimir();
};
function fnc_opt_7() {
	fnc_enviar_correo();
};
function fnc_opt_8() {
	fnc_anular();
};
function fnc_opt_r() {
	fnc_registrar();
};
function fnc_opt_50() {
	fb_fnc_registrar_borrador = true;
	fnc_registrar();
	fb_fnc_registrar_borrador = false;
};
function fnc_opt_c() {
	fnc_cancelar();
};

// Etiqueta de atajo
function f_label_shortcut(obj_type_p, obj_p, visible_p) {

	/*
	var label_rel_ = $(obj_p.nextElementSibling).hasClass('label_shortcut');
	if (label_rel_ === true) {$(obj_p.nextElementSibling).css('display', display_p);}
	*/
	
	var class_shortcut = '';
	if (obj_type_p === 'a') {
		class_shortcut = 'a_shortcut';
	}
	else if (obj_type_p === 'label') {
		class_shortcut = 'label_shortcut';
	}
	
	if (!!$(obj_p).data('shortcut')) {
		if (visible_p === 's') {
			var label_rel_ = $(obj_p.nextElementSibling).hasClass(class_shortcut);
			if (label_rel_ === false) {$(obj_p).after('<label class="' + class_shortcut + '">' + $(obj_p).data('shortcut') + '</label>');}
		}
		else if (visible_p === 'n') {
			var label_rel_ = $(obj_p.nextElementSibling).hasClass(class_shortcut);
			if (label_rel_ === true) {$(obj_p.nextElementSibling).remove();}
		}
	}
};

// Select - input muestra de select
/*
Caso vs:
Se agrega ID que inicie con el prefijo (c_) al contenedor del objeto y se visualiza o no visualiza el contenedor de acuerdo a la propiedad
Si no tiene contene contenedor se visualiza o no visualiza el objeto de acuerdo a la propiedad
*/
function f_select_input (ic_form, type_p, obj_p, data_p)
{
	var data_col = $(obj_p).data('col');
	if (data_col === undefined) {data_col = '';}
	
	if (type_p === 'vs')
	{
		if ($('#' + ic_form + ' #c_' + data_col).exists())
		{
			$('#' + ic_form + ' #c_' + data_col).css('display', data_p === 's' ? 'block' : 'none');
		}
		else
		{
			//var data_hb = $("select[data-col='" + data_col + "']").data('hb_' + jc_est_form);
			var data_hb = $(Obj_Col(ic_form, data_col, 'select')).data('hb_' + jc_est_form);
			
			if (data_p === 'n')
			{
				if (data_hb === 'n')
				{
					var obj_previous_id_ = $(obj_p.previousSibling).data('col');
					var obj_previous_type_ = String(obj_p.previousSibling.tagName).toLowerCase();
					if (obj_previous_type_ === 'input' && 'i_s_' + data_col === obj_previous_id_)
					{
						$(obj_p.previousElementSibling).css('display', 'none');
					}
				}
				else
				{
					$('#' + $(obj_p.nextElementSibling).attr('id')).css('display', 'none');
				}
			}
		}
	}
	else if (type_p === 'hb')
	{
		$(obj_p.nextElementSibling).css('display', data_p === 's' ? 'block' : 'none');

		var obj_previous_id_ = $(obj_p.previousSibling).data('col');
		if (obj_previous_id_ === undefined)
		{
			obj_previous_id_ = '';
		}

		var obj_previous_type_ = '';
		try {
			obj_previous_type_ = String(obj_p.previousSibling.tagName).toLowerCase();
		}
		catch(err) {
		  //alert('error: ' + err);
		}

		if (data_p === 's')
		{
			if (obj_previous_type_ === 'input' && 'i_s_' + data_col === obj_previous_id_)
			{
				$(obj_p.previousElementSibling).css('display', 'none');
			}
		}
		else if (data_p === 'n')
		{
			if ($(Obj_Col(ic_form, 'i_s_' + data_col, 'input')).exists())
			{
				$(Obj_Col(ic_form, 'i_s_' + data_col, 'input')).css('display', 'initial');
			}
			else
			{
				var pc_class = 'lks';
				if ($(Obj_Col(ic_form, data_col, 'select')).hasClass('mtz') === true)
				{
					pc_class = '';
				}
				
				// $(Obj_Col(ic_form, data_col, 'select')).before('<input data-col="i_s_' + data_col + '" type="text" placeholder="" value="" readonly="readonly" />');
				$(Obj_Col(ic_form, data_col, 'select')).before('<input data-col="i_s_' + data_col + '" type="text" placeholder="" value="" class="' + pc_class + '" data-hb_v="n" data-hb_n="n" data-hb_e="n" readonly="readonly" />');
			}
		}
	}
};

function fnc_frm_objs_editar_setear_valor (pi_form, ic_est_form = jc_est_form)
{
	// alert(fr_row_data_cb.ccod_est);
	
	if (fr_row_data_cb.ccod_est === 'B') {
		ic_est_form = 'n';
	}
	
	$('#' + pi_form + ' select[data-hb_' + ic_est_form + '="s"]').each(function() {
		var obj_type_ = $(this)[0].tagName.toLowerCase();
		
		var data_col = $(this).data('col');
		if (data_col === undefined) {data_col = '';}

		var data_col_tip = data_col.substring(0, 5);
		var pc_value = '';
		
		if (obj_type_ === 'select') {

			if (data_col_tip === '_drt_') {
				pc_value = $(Obj_Col(pi_form, 'i_s_' + data_col)).val();
			}
			else if (data_col_tip === '_dsl_') {
				pc_value = fr_row_data_cb[data_col.substring(5, data_col.length)];
			}
			else {
				pc_value = $(Obj_Col(pi_form, 'ccod_' + data_col)).val();
			}
			// console.log(pc_value);
			$(Obj_Col(pi_form, data_col)).val(pc_value).trigger('change');
		}
	});
};

// -------------------------------------------- ORDENAR DE ACA PARA ABAJO
var fb_insertando = false;
function fnc_nuevo() {
	fb_insertando = true;
	
	fnc_setear_valores_generales_de_formulario();
	
	jc_grid_row_opts = jc_grid_row_opts_n;
	
	jc_est_form = 'n';
	fnc_hb_usu_opts();
	fnc_frm_objs_habilitar('form_main');

	fnc_child_nuevo();
	fnc_child_valores_predeterminados();

	fnc_frm_objs_validar(['form_main']);
};

// var fb_fnc_editar_borrador = false;
function fnc_editar() {
	if (fr_row_data_cb === undefined) {
		swal(gc_msj_titulo_error, gc_msj_contenido_row_editar_SinData, gc_msj_tipo_error);
		return;
	}
	// if (fr_row_data_cb.ccod_est === 'A') {
	if (fr_row_data_cb.ccod_est === 'X') {
		swal(gc_msj_titulo_error, gc_msj_contenido_row_editar_Anulado, gc_msj_tipo_error);
		return;
	}

	// if (fr_row_data_cb.ccod_est === 'B') {fb_fnc_editar_borrador = true;}
	
	fb_insertando = true;
	
	jc_est_form = 'e';
	fnc_hb_usu_opts();
	
	// Proceso editar normal - no incluye borrador
	
	//if (fr_row_data_cb.ccod_est !== 'B') {
	mb_bloquear_process = true; // validar si va o no
	fnc_frm_objs_editar_setear_valor('form_main');
	mb_bloquear_process = false; // validar si va o no		
	//}
	
	fnc_child_editar();
	
	//if (fr_row_data_cb.ccod_est === 'B') {jc_est_form = 'b';}
	fnc_frm_objs_habilitar('form_main');
	
	
	// Exclusivo para la edicion de borrador
	// if (fb_fnc_editar_borrador === true) {fnc_frm_objs_validar(['form_main']);}
	if (fr_row_data_cb.ccod_est === 'B')
	{
		fnc_frm_objs_validar(['form_main']);
	}
};

/*
fnc_child_cargar_valores_post_proceso: Funcion que se dispara posterior al load, registro, editar, eliminar del formulario
*/
var fb_fnc_registrar = false;
var fb_fnc_registrar_borrador = false;
function fnc_registrar()
{
	
	// fb_fnc_editar_borrador = false;

	if (!(jc_est_form === 'n') && !(jc_est_form === 'e')) {return;}

	fb_fnc_registrar = true;
	
	var pb_verificar_requeridos = true;
	//if (fb_fnc_registrar_borrador === false) {pb_verificar_requeridos = fnc_child_form_objs_verificar_requeridos();}
	pb_verificar_requeridos = fnc_child_form_objs_verificar_requeridos();

	if (pb_verificar_requeridos)
	{
		var pa_results_child = fnc_child_registrar();
		var pa_data = pa_results_child[0];
		
		for (var i = pa_data.length; i < 10; i++) {pa_data.push('-');}

		var pp_url = '/home/slq_usp_exec_sp?ic_sp=' + fc_corigen;
		var pa_columns = ['on_codResult', 'oc_msjResult', 'or_dataResult'];
		var pa_results = f_eject_ajax(pp_url, pa_columns, pa_data);
		var pn_codResult = 0;
		var pc_msjResult = '';
		var pr_dataResult = '';
		
		if (pa_results.length > 0)
		{
			pn_codResult = pa_results[0].on_codResult;
			pc_msjResult = pa_results[0].oc_msjResult;
			pr_dataResult = pa_results[0].or_dataResult;

			if (pn_codResult === 0)
			{
				swal(gc_msj_titulo_registro_correcto, pc_msjResult, gc_msj_tipo_correcto);
				fnc_child_registrar_select(pr_dataResult);
				fnc_child_cargar_valores_post_proceso();
				fnc_cancelar();
			}
			else if (pn_codResult < 0)
			{
				swal(gc_msj_titulo_error, pc_msjResult, gc_msj_tipo_error);
			}
		}
	}
	fb_fnc_registrar = false;
	
};

function fnc_eliminar() {
	if (fr_row_data_cb === undefined) {
		swal(gc_msj_titulo_error, gc_msj_contenido_row_eliminar_SinData, gc_msj_tipo_error);
		return;
	}

	var pa_results_child = fnc_child_eliminar();
	if (pa_results_child.length > 0) {
		var pc_url = '/home/slq_usp_exec_sp?ic_sp=' + fc_corigen;
		fnc_confirmacion(pa_results_child[0], pc_url, pa_results_child[1], pa_results_child[2], pa_results_child[3]);
	}
};

var fb_pre_anular_valido = false;
function fnc_anular()
{
	/*
	fnc_fact_tour_parte_1('load');
	return;
	*/

	if (fr_row_data_cb === undefined) {
		swal(gc_msj_titulo_error, gc_msj_contenido_row_anular_SinData, gc_msj_tipo_error);
		return;
	}

	if (fr_row_data_cb.ccod_est === 'B') {
		swal(gc_msj_titulo_error, gc_msj_contenido_row_anular_Borrador, gc_msj_tipo_error);
		return;
	}
	
	if (fr_row_data_cb.ccod_est === 'X') {
		
		//fnc_open_anulacion_temp(); // Temporal
		
		swal(gc_msj_titulo_error, gc_msj_contenido_row_anular_Anulado, gc_msj_tipo_error);
		return;
	}
	
	if (mb_EntGEN_FE === true) {
		if ($.isFunction(window['fnc_child_pre_anular']))
		{
			if (fb_pre_anular_valido === false) {
				eval('fnc_child_pre_anular()');
				return;
			}
		}
		fb_pre_anular_valido = false;
	}

	var pa_results_child = fnc_child_anular();
	if (pa_results_child.length > 0) {
		var pc_url = '/home/slq_usp_exec_sp?ic_sp=' + fc_corigen;
		fnc_confirmacion(pa_results_child[0], pc_url, pa_results_child[1], pa_results_child[2], pa_results_child[3]);
	}
};

/*
ic_function_post: Se recibe la funcion a ejecutar porque dentro del mismo formulario child pueden existir varios procesos que eliminan
*/
//var fa_anular_dataResult = [];
var fa_results = [];
function fnc_confirmacion (ic_tipo, ic_url, ia_data, ia_function_cancel = [], ia_function_post = []) {

	// Variables de retorno de BD
	var pn_codResult = 0;
	var pc_msjResult = '';
	var pr_dataResult = '';

	// Variables de mensaje de confirmacion
	var pc_swal_title = '¿Desea realizar la acción?';
	var pc_swal_text = '¡No podrá deshacer este cambio!';
	var pc_swal_confirmButtonText = 'Si, continuar!';
	var pc_swal_title_post = '¡Realizado!';
	var pc_swal_type = 'warning';
	var pc_swal_imageUrl = '';

	var	pc_fnc_post = '';
	var	pc_fnc_cancel = '';
		
	if (ic_tipo === 'Eliminar') {
		pc_swal_title = fc_eliminar_swal_title;
		pc_swal_text = fc_eliminar_swal_text;
		pc_swal_confirmButtonText = fc_eliminar_swal_confirmButtonText;
		pc_swal_title_post = fc_eliminar_swal_title_post;
		pc_swal_type = fc_eliminar_swal_type; //verificar por que no llega el valor
		pc_swal_imageUrl = fc_eliminar_swal_imageUrl;
		
		pc_fnc_post = 'fnc_child_eliminar_post';
		pc_fnc_cancel = 'fnc_child_eliminar_cancel';
	}
	else if (ic_tipo === 'Anular') {
		pc_swal_title = fc_anular_swal_title;
		pc_swal_text = fc_anular_swal_text;
		pc_swal_confirmButtonText = fc_anular_swal_confirmButtonText;
		pc_swal_title_post = fc_anular_swal_title_post;
		pc_swal_type = fc_anular_swal_type;
		pc_swal_imageUrl = fc_anular_swal_imageUrl;
		
		pc_fnc_post = 'fnc_child_anular_post';
		pc_fnc_cancel = 'fnc_child_anular_cancel';
	}

	swal({
		title: pc_swal_title,
		text: pc_swal_text,
		type: pc_swal_type,
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: pc_swal_confirmButtonText,
		cancelButtonText: "¡No, cancelar!",
		closeOnConfirm: false,
		closeOnCancel: true,
		imageUrl: pc_swal_imageUrl
	},
	function(isConfirm){
		if (isConfirm) {
			/*
			var pn_codResult = 0;
			var pc_msjResult = '';
			var pr_dataResult = '';
			*/
			
			for (var i = ia_data.length; i < 10; i++) {ia_data.push('-');}

			var pa_columns = ['on_codResult', 'oc_msjResult', 'or_dataResult'];
			//var pa_results = f_eject_ajax(ic_url, pa_columns, ia_data);
			fa_results = f_eject_ajax(ic_url, pa_columns, ia_data);
			for (var i = 0; i < fa_results.length; i++) {
				pn_codResult = fa_results[i].on_codResult;
				pc_msjResult = fa_results[i].oc_msjResult;
				pr_dataResult = fa_results[i].or_dataResult;

				if (pn_codResult === 0)
				{
					if (ic_tipo === 'Eliminar' || ic_tipo === 'Anular') {
						fnc_setear_valores_generales_de_formulario();
					}

					fnc_ExecFunction(pc_fnc_post, ia_function_post);
					fa_results = [];
					swal(pc_swal_title_post, pc_msjResult, gc_msj_tipo_correcto);
				}
				else if (pn_codResult < 0)
				{
					swal(gc_msj_titulo_error, pc_msjResult, gc_msj_tipo_error);
				}
			}
		}
		else {
			fnc_ExecFunction(pc_fnc_cancel, ia_function_cancel);
		}
	});
};
function fnc_setear_valores_generales_de_formulario() {
	fr_row_data_cb = undefined;
	fr_row_data_dt_1 = undefined;
};
function fnc_vpreliminar() {
	if (!(jc_est_form === 'v')) {return;}

	if (fr_row_data_cb === undefined) {
		swal(gc_msj_titulo_error, gc_msj_contenido_row_preVisualizar_SinData, gc_msj_tipo_error);
		return;
	}

	alert('vista preliminar');
};

function fnc_imprimir()
{
	if (!(jc_est_form === 'v'))
	{
		return;
	}

	if (fr_row_data_cb === undefined) {
		swal(gc_msj_titulo_error, gc_msj_contenido_row_imprimir_SinData, gc_msj_tipo_error);
		return;
	}

	alert('imprimiendo');
};

function fnc_enviar_correo()
{
	alert('Enviar por correo');
};

function fnc_cancelar() {
	fb_insertando = false;
	
	// fb_fnc_editar_borrador = false;
	
	jc_est_form = 'v';
	fnc_hb_usu_opts();
	fnc_frm_objs_habilitar('form_main');

	if (fb_fnc_registrar === false) {
		fnc_grid_row_selected_click('grid_lista');
	}
};
function fnc_grid_count(ic_grid) {
	var pt_table = $('#' + ic_grid).DataTable();
	return pt_table.data().count();
};
function fnc_grid_row_selected_click(ic_grid) {
	var pt_table = $('#' + ic_grid).DataTable();
	if (!pt_table.data().count()) {
		f_frm_objs_clear('form_main');
	}
	else {
		var rowSelected = pt_table.row().$('tr.selected');
		var rowIndex = parseInt($('#' + ic_grid + ' tr').index(rowSelected)) - var_;
		$('#' + ic_grid + ' tbody tr:eq(' + rowIndex + ') td:not(td:first-child)')[0].click();
	}
};

var ia_columns = [];
var ia_values = [];

// function fnc_grid_seleccionar_x_valores(ic_grid, ia_columns, ia_values) {
function fnc_grid_seleccionar_x_valores(ic_grid) {
	/*
	$(".tabs").tabs("select", "tab_lista");
	*/
	// alert('stop');

	/*
	var ia_columns = ['ccod_doc', 'ccod_ser', 'cdoc_nro'];
	var ia_values = ['FVE', 'FA01', '000000010'];
	var ic_grid = 'grid_lista';
	*/

	var table = $('#' + ic_grid).DataTable();
	var pn_nro_rows_x_pagina = table.page.info().length;	
	var pn_nro_pagina = 0;
	var pn_nro_row_seleccionado = -1;
	var pb_check = false;
	var pn_cont_parametros = ia_columns.length;
	var pn_cont_check = 0;
	//var pn_cont_busqueda = 0;
	$('#' + ic_grid).DataTable().rows().iterator('row', function(context, index){
		if (pb_check === false) {
			pn_nro_row_seleccionado += 1;
			var node = $(this.row(index).node());
			var row_data = table.row(node).data();
			pn_cont_check = 0;
			for (var i = 0; i < ia_columns.length; i++) {
				// if (row_data[ia_columns[i]] === ia_values[i]) {
				if (String(row_data[ia_columns[i]]) === String(ia_values[i])) {
					pn_cont_check += 1;
				}
			}
			if (pn_cont_parametros === pn_cont_check) {
				pb_check = true;
				$('#' + ic_grid).find('tr.selected').removeClass('selected');
				node.addClass('selected');
			}
		}
	});
	if (pb_check === true) {
		pn_nro_pagina = Math.trunc(pn_nro_row_seleccionado / pn_nro_rows_x_pagina);
		$('#' + ic_grid).dataTable().fnPageChange(pn_nro_pagina);
		fnc_grid_row_selected_click(ic_grid);
		ia_columns = [];
		ia_values = [];
	}
};

// Carga total de 'Modulos' y 'Menus' disponibles
function fnc_lS_lq_usp_ad_mod_men_list ()
{
	var pc_url = '/home/lq_usp_ad_mod_men_list?ic_ccod_emp=' + '' + '&ic_ccod_usu=' + fnc_GET_val__of__localStorage(lS_ccod_usu) + '&ic_ccod_mod=' + '' + '&in_nnivel=' + '0' + '&ic_ccod_men_rel=' + '0' + '&ic_load_BD=load_BD';
	fnc_SET_val__to__localStorage(
								lS_lq_usp_ad_mod_men_list, 
								f_eject_ajax(pc_url, ['All'], []), 
								'Array');
};

var ma_results_links = [];
function fnc_master_modulo_enlaces_habilitar()
{
	var pa_lq_usp_ad_mod_men_list = fnc_GET_val__of__localStorage(lS_lq_usp_ad_mod_men_list, 'Array');

	// Carga de Nivel 1
	var pa_columns = ['ccod_emp', 'ccod_mod', 'nnivel', 'ccod_men_rel'];
	var pa_values = [fnc_GET_val__of__localStorage(lS_ccod_emp), fnc_GET_val__of__localStorage(lS_ccod_mod), '1', '0'];
	var pa_results_nivel_1 = fnc_Array_Filtrar_por_columnas(pa_lq_usp_ad_mod_men_list, pa_columns, pa_values);	
	pa_results_nivel_1 = fnc_Array_sortByKeyAsc(pa_results_nivel_1, 'norden');
	var pa_results_nivel_2 = [];
	var pa_results_nivel_3 = [];

	/*
	var pa_columns = ['ccod_men', 'cdsc_men'];
	var pc_url = '/home/lq_usp_ad_mod_men_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_usu=' + gc_ccod_usu + '&ic_ccod_mod=' + gc_ccod_mod + '&in_nnivel=' + '1' + '&ic_ccod_men_rel=' + '0' + '&ic_load_BD=';
	var pa_results_nivel_1 = f_eject_ajax(pc_url, pa_columns);
	var pa_results_nivel_2 = [];
	var pa_results_nivel_3 = [];
	*/
	
	var ccod_men_1 = '';
	var numerador_1 = '';
	var ccod_men_2 = '';
	var numerador_2 = '';
	var ccod_men_3 = '';
	var numerador_3 = '';
	var pc_ident = '';
	
	var pc_effect_click = ' waves-effect waves-light';
	
	$('#ul_container').remove();
	var lc_html_table = "<ul id='ul_container' class='cd-accordion-menu animated'>";
	for (var i = 0; i < pa_results_nivel_1.length; i++) {
		ccod_men_1 = (pa_results_nivel_1[i].ccod_men).toString();
		numerador_1 = (i + 1).toString();
		pc_ident = 'group-' + numerador_1;
		
		lc_html_table += "<li id='m_" + ccod_men_1 + "' class='has-children'>";
		lc_html_table += "	<input type='checkbox' name='" + pc_ident + "' id='" + pc_ident + "'>";
		lc_html_table += "	<label for='" + pc_ident + "' class='menu_group" + pc_effect_click + "'>" + pa_results_nivel_1[i].cdsc_men + "</label>";

		/*
		// Variables Ajax - Nivel 2 - Inicio
		pc_url = '/home/lq_usp_ad_mod_men_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_usu=' + gc_ccod_usu + '&ic_ccod_mod=' + gc_ccod_mod + '&in_nnivel=' + '2' + '&ic_ccod_men_rel=' + ccod_men_1 + '&ic_load_BD=';
		pa_results_nivel_2 = f_eject_ajax(pc_url, pa_columns);
		*/
		// ===========================================================
		pa_columns = ['ccod_emp', 'ccod_mod', 'nnivel', 'ccod_men_rel'];
		pa_values = [fnc_GET_val__of__localStorage(lS_ccod_emp), fnc_GET_val__of__localStorage(lS_ccod_mod), '2', ccod_men_1];
		pa_results_nivel_2 = fnc_Array_Filtrar_por_columnas(pa_lq_usp_ad_mod_men_list, pa_columns, pa_values);	
		pa_results_nivel_2 = fnc_Array_sortByKeyAsc(pa_results_nivel_2, 'norden');
		// ===========================================================

		var lc_html_table_2 = "<ul id='ul_" + ccod_men_1 + "'>";
		for (var b = 0; b < pa_results_nivel_2.length; b++) {
			ccod_men_2 = (pa_results_nivel_2[b].ccod_men).toString();
			numerador_2 = (b + 1).toString();
			pc_ident = 'sub-group-' + numerador_1 + '-level-' + numerador_2;

			lc_html_table_2 += "<li id='m_" + ccod_men_2 + "' class='has-children'>";
			lc_html_table_2 += "	<input type='checkbox' name='" + pc_ident + "' id='" + pc_ident + "'>";
			lc_html_table_2 += "	<label for='" + pc_ident + "' class='menu_group" + pc_effect_click + "'>" + pa_results_nivel_2[b].cdsc_men + "</label>";

			/*
			// Variables Ajax - Nivel 3 - Inicio
			pc_url = '/home/lq_usp_ad_mod_men_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_usu=' + gc_ccod_usu + '&ic_ccod_mod=' + gc_ccod_mod + '&in_nnivel=' + '3' + '&ic_ccod_men_rel=' + ccod_men_2 + '&ic_load_BD=';
			pa_results_nivel_3 = f_eject_ajax(pc_url, pa_columns);
			*/
			// ===========================================================
			pa_columns = ['ccod_emp', 'ccod_mod', 'nnivel', 'ccod_men_rel'];
			pa_values = [fnc_GET_val__of__localStorage(lS_ccod_emp), fnc_GET_val__of__localStorage(lS_ccod_mod), '3', ccod_men_2];
			pa_results_nivel_3 = fnc_Array_Filtrar_por_columnas(pa_lq_usp_ad_mod_men_list, pa_columns, pa_values);	
			pa_results_nivel_3 = fnc_Array_sortByKeyAsc(pa_results_nivel_3, 'norden');
			// ===========================================================
			
			var lc_html_table_3 = "<ul id='ul_" + ccod_men_2 + "'>";
			for (var c = 0; c < pa_results_nivel_3.length; c++) {
				ccod_men_3 = (pa_results_nivel_3[c].ccod_men).toString();
				numerador_3 = (c + 1).toString();
				pc_ident = 'sub-sub-group-' + numerador_1 + '-level-' + numerador_3;

				lc_html_table_3 += "<li id='m_" + ccod_men_3 + "' class='has-children'>";
				lc_html_table_3 += "	<input type='checkbox' name='" + pc_ident + "' id='" + pc_ident + "'>";
				lc_html_table_3 += "	<label for='" + pc_ident + "' class='menu_group" + pc_effect_click + "'>" + pa_results_nivel_3[c].cdsc_men + "</label>";
				lc_html_table_3 += "	<ul id='ul_" + ccod_men_3 + "'>";
				lc_html_table_3 += "	</ul>";
				lc_html_table_3 += "</li>";
			}
			lc_html_table_3 += "</ul>";
			lc_html_table_2 += lc_html_table_3;
			// Variables Ajax - Nivel 3 - Fin
			
			lc_html_table_2 += "</li>";
		}
		lc_html_table_2 += "</ul>";
		lc_html_table += lc_html_table_2;
		// Variables Ajax - Nivel 2 - Fin			
		
		lc_html_table += "</li>";
	}
	lc_html_table += "</ul>";
	$('.contenedor_cd-accordion-menu').append(lc_html_table);
	// Variables Ajax - Nivel 1 - Fin

	/*
	// Variables Ajax - Links - Inicio
	pa_columns = ['All'];
	pc_url = '/home/lq_usp_ad_mod_men_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_usu=' + gc_ccod_usu + '&ic_ccod_mod=' + gc_ccod_mod + '&in_nnivel=' + '9' + '&ic_ccod_men_rel=' + '-1' + '&ic_load_BD=load_BD';
	ma_results_links = f_eject_ajax(pc_url, pa_columns, []);
	*/
	// ===========================================================
	pa_columns = ['ccod_emp', 'ccod_mod', 'nnivel'];
	pa_values = [fnc_GET_val__of__localStorage(lS_ccod_emp), fnc_GET_val__of__localStorage(lS_ccod_mod), '9'];
	ma_results_links = fnc_Array_Filtrar_por_columnas(pa_lq_usp_ad_mod_men_list, pa_columns, pa_values);	
	ma_results_links = fnc_Array_sortByKeyAsc(ma_results_links, 'norden');
	// ===========================================================

	var ccod_men_link = '';
	var ccod_men_rel_link = '';
	//var pc_link = '';
	var pc_icon = '';
	var lc_html_table_link = '';
	
	for (var c = 0; c < ma_results_links.length; c++) {
		ccod_men_link = (ma_results_links[c].ccod_men).toString();
		ccod_men_rel_link = (ma_results_links[c].ccod_men_rel).toString();
		//pc_link = (ma_results_links[c].clink).toString();
		pc_icon = (ma_results_links[c].cicon).toString();

		if (pc_icon !== '') {
			pc_icon = pc_icon + ' ';
		}
		
		//lc_html_table_link = "<li id='m_" + ccod_men_link + "'><a href='" + pc_link + "' class='" + pc_icon + pc_effect_click + "'>" + ma_results_links[c].cdsc_men + "</a></li>";
		lc_html_table_link = "<li id='m_" + ccod_men_link + "'><a data-col='" + ccod_men_link + "' class='" + pc_icon + pc_effect_click + "' onclick='fnc_open_frm__pre(this);' >" + ma_results_links[c].cdsc_men + "</a></li>";

		if (parseInt(ccod_men_rel_link) === 0) {
			$('#ul_container').prepend(lc_html_table_link);
		}
		else {
			if ($('#ul_' + ccod_men_rel_link).exists()) {$('#ul_' + ccod_men_rel_link).prepend(lc_html_table_link);}
		}
	}
};

function fnc_open_frm__pre (io_object) {
	if (fb_insertando === true && fc_ctip_frm === 'frm_ts')
	{
		fnc_mensaje_confirmacion ('fnc_open_frm', '¿Desea descartar los datos?, ¿desea continuar?', '', 'ico_descartar', [io_object]);
	}
	else
	{
		fnc_open_frm ([io_object]);
	}
};

function fnc_open_frm (io_object)
{
	var ac_object = fnc_GET_Obj_Attributes(io_object[0]);
	var pa_results = fnc_Array_Filtrar_por_columnas(ma_results_links, ['ccod_men'], [ac_object.col]);
	if (pa_results.length > 0) {
			if (parseInt(pa_results[0].ccod_men) !== parseInt(fc_ccod_men))
			{
				/*
				fnc_SET_val__to__localStorage(lS_ccod_men, pa_results[0].ccod_men);
				fnc_SET_val__to__localStorage(lS_ccod_men_rel, pa_results[0].ccod_men_rel);
				fnc_SET_val__to__localStorage(lS_cdsc_men, pa_results[0].cdsc_men);
				fnc_SET_val__to__localStorage(lS_corigen, pa_results[0].corigen);
				fnc_SET_val__to__localStorage(lS_cfrm, 'frm_' + pa_results[0].corigen);
				fnc_SET_val__to__localStorage(lS_ctip_frm, pa_results[0].ctip_frm);
				fnc_SET_val__to__localStorage(lS_cstyle_frm, pa_results[0].cstyle_frm);
				*/
				
				//window.open(pa_results[0].clink, '_self');
				open_form(pa_results[0].clink, gc_group_window);
			}
	}
};

// FER_MODI
function fnc_frm_tab_remove (ic_frm, ia_frm_tab)
{
	var pc_frm_tab = '';
	if (ic_frm !== 'form_main') {
		pc_frm_tab = '_' + ic_frm;
		$("a[href='#tab_lista" + pc_frm_tab + "']").parent().remove();
	}

	for (var i = ia_frm_tab.length; i < 10; i++) {ia_frm_tab.push('');}

	for (var i = ia_frm_tab.length - 1; i >= 0; i--) {
		if(ia_frm_tab[i] !== '') {
			$("a[href='#tab_" + (i+1) + pc_frm_tab + "']").html(ia_frm_tab[i]);
		}
		else {
			$("a[href='#tab_" + (i+1) + pc_frm_tab + "']").parent().remove();
		}
	}

	if (fc__frm_layout__tipo === 'Main_tbc')
	{
		$("a[href='#tab_lista']").parent().remove();
	}
};


//=========================================== VALORES GENERALES DE LISTA

/*
Funcion para los estados de todos los catalogos
fnc_catalogo_cest_span: Los Catalogos solo manejan 2 estados: Activo o Inactivo
*/

/*
function fnc_catalogo_cest_span (ic_columnName, ic_cellData) {
	var pc_cellData = '';
	if (parseInt(ic_cellData) === 1) {pc_cellData = fc_span_activo;}
	else if (parseInt(ic_cellData) === 0) {pc_cellData = fc_span_inactivo;}
	return pc_cellData;
};
*/

function fnc_catalogo_cest_span (ic_columnName, ic_cellData) {
	var pc_cellData = '';
	if (ic_cellData === 'A') {pc_cellData = fc_span_activo;}
	else if (ic_cellData === 'I') {pc_cellData = fc_span_inactivo;}
	return pc_cellData;
};






/* :::::::::::::::::::::::::	Variables de Proyecto - Globales	::::::::::::::::::::::::: */
var pl_sep_col = '|';
var pl_sep_fil = '*';

//var gc_prefijo__em_dir__em_prs__ccodigo = 'EM_PRS-';






var fc_span_activo = '<span class="label label-success">Activo</span>';
var fc_span_inactivo = '<span class="label label-danger">Inactivo</span>';


// 3 Globales
var EntFact_cant_dig = 2;
var cc_EntInv_saldo_cant_dig = 2;
var cc_EntCon_tpc_cant_dig = 2;

/* :::::::::::::::::::::::::	Variables de Modulo (Cargan cuando se carga el modulo) ::::::::::::::::::::::::: */
var mb_EntFAC_precio_incluye_impuestos = true;
var mb_EntFAC_modificar_precio_venta = true; //false
var mb_EntFAC_permitir_precio_venta_cero = false;

var mb_EntGEN_FE = true; // Entorno que activa la facturacion electronica


// Varible que bloquea procesos
var mb_bloquear_process = false;

var fb_SweetAlert_press_esc = false;


/*************	Variables Globales - Valores Cargados en el Login *************/
var gc_ccod_usu = 'ADM';
var gc_cdsc_usu = 'AGUIRRE/MORALES, Juan Antonio';
var gc_cargo_usu = 'Vendedor';

var ga_lq_usp_ad_mod_men_list = []; // SE CARGA EN EL MAIN PARA TODOS LOS MODULOS

/*************	Variables Globales - Valores Cargados en el Main *************/
var gc_ccod_emp = 'LKS';
var gc_ccod_mod = 'VEN'; //'VEN' 'GEA';
var gc_cdsc_mod = 'Ventas';
var gc_ccod_eje = 'EJ2019';
var gc_ccod_per = 'PE1901';
var gc_ccod_uop = 'UOP002';
var gd_dfch_main = '13/04/2019';
var gc_ccod_mon_nac = 'SOL';
var gc_cant_monedas = 1;
/*************	Variables Entorno *************/
var EntFact_modificar_tpc = true; // Variable que permite cambiar el tipo de cambio

// Variables de Formulario, pero se declaran aca por que se reutilizan siempre
var fr_row_data_cb;
var fr_row_data_dt_1;

var fc_ct_cest_Activo = 'A';
var fc_ct_cest_Inactivo = 'I';

// Contiene el valor del tab seleccionado
var fc_tab_id = '';

var gn_inputs_number_maxLength = 10;


// Producto
var gc_copyright = '&copy; 2019 ¡Eureka! - Modulo de Facturación';
var gc_version = '1.0.0';

var gc_app = 'S7';
var gc_app_web = 'www.S7.com';
var gc_mod = 'Facturación';

/*
in_ncam
on_ncam

gn_ncam - Todo el proyecto
mn_ncam - Todo el modulo
fn_ncam - Todo el formulario, page, *.js, etc
pn_ncam - Todo el proceso (function, sub, etc)

n number
c caracter
d date
b boolean
a array
*/

// ========================================================================

// Correcto
var gc_msj_tipo_correcto = 'success';
var gc_msj_titulo_registro_correcto = 'Registrado';

// Erro
var gc_msj_tipo_error = 'error';
var gc_msj_titulo_error = 'Cancelado';

// Sin Data
var gc_msj_contenido_row_preVisualizar_SinData = '¡No existe registro a previsualizar!';
var gc_msj_contenido_row_imprimir_SinData = '¡No existe registro a imprimir!';
var gc_msj_contenido_row_anular_SinData = '¡No existe registro a anular!';
var gc_msj_contenido_row_eliminar_SinData = '¡No existe registro a eliminar!';
var gc_msj_contenido_row_editar_SinData = '¡No existe registro a editar!';

// Borrador
var gc_msj_contenido_row_anular_Borrador = '¡Un borrador no se puede anular!';

// Anulado
var gc_msj_contenido_row_editar_Anulado = '¡No se puede editar un registro anulado!';
var gc_msj_contenido_row_anular_Anulado = '¡El registro ya ha sido anulado!';

// Exportar
var gc_msj_contenido_grid_export_SinData = '¡No existe registros a exportar!';


// Variables de mensaje de confirmacion - Eliminar
var fc_eliminar_swal_title = '¿Desea eliminar el registro?';
var fc_eliminar_swal_text = '¡No podrá recuperar este registro!';
var fc_eliminar_swal_confirmButtonText = '¡Si, elimínalo!';
var fc_eliminar_swal_title_post = '¡Eliminado!';
var fc_eliminar_swal_type = gc_msj_tipo_error;
var fc_eliminar_swal_imageUrl = '';

// Variables de mensaje de confirmacion - Anular
var fc_anular_swal_title = '¿Desea anular el registro?';
var fc_anular_swal_text = '¡No podrá deshacer este cambio!';
var fc_anular_swal_confirmButtonText = '¡Si, anulalo!';
var fc_anular_swal_title_post = '¡Anulado!';
var fc_anular_swal_type = gc_msj_tipo_error;
var fc_anular_swal_imageUrl = '';

// ========================================================================

function fnc_get_date_time() {
	var currentdate = new Date();
	var currentdate_Year = currentdate.getFullYear().toString();
	currentdate_Year = currentdate_Year.substring(2, currentdate_Year.length);
    var pc_datetime = fnc_formatear_enumerador(currentdate.getDate()) + "/" + fnc_formatear_enumerador((currentdate.getMonth() + 1))  + "/" + currentdate_Year + "-"
					+ fnc_formatear_enumerador(currentdate.getHours()) + "_" + fnc_formatear_enumerador(currentdate.getMinutes()) + "_" + fnc_formatear_enumerador(currentdate.getSeconds());
	return pc_datetime;
};
function fnc_table_config_export (ia_values) {

	var pc_GET_grid_id = ia_values[0];
	var pc_GET_grid_title = ia_values[1];
	var pc_GET_fil = ia_values[2];
	var pc_GET_col = ia_values[3];

	$("#" + pc_GET_grid_id + '_btns_export').remove();

	$('#' + pc_GET_grid_id).each(function() {
		var pc_id = $(this).attr('id');
		var po_grid = $(this).DataTable();

		$("#" + pc_id).after("<div id='" + pc_id + "_btns_export' class='display_none'></div>");
		var buttons = new $.fn.dataTable.Buttons(po_grid, {
			buttons: [
						{
							extend: 'excelHtml5',

							title: gc_mod + ' ' + gc_app,
							messageTop: pc_GET_grid_title,
							filename: function () { return pc_GET_grid_title + '_' + fnc_get_date_time(); },
							exportOptions: {
									modifier: {
										selected: pc_GET_fil
									},
									columns: pc_GET_col
							},

							autoFilter: true,
							sheetName: 'Lista'
						},
			            {
							extend: 'pdfHtml5',

							title: gc_mod + ' ' + gc_app,
							messageTop: pc_GET_grid_title,
							filename: function () { return pc_GET_grid_title + '_' + fnc_get_date_time(); },
							exportOptions: {
									modifier: {
										selected: pc_GET_fil
									},
									columns: pc_GET_col
							},
							
							// orientation: 'landscape',
							customize: function (doc) {
								doc.pageMargins = [10,10,10,10];
								doc.defaultStyle.fontSize = 7;
								doc.styles.tableHeader.fontSize = 7;
								doc.styles.title.fontSize = 9;
								// Remove spaces around page title
								doc.content[0].text = doc.content[0].text.trim();
								// Create a footer
								doc['footer']=(function(page, pages) {
									return {
										columns: [
											gc_app_web,
											{
												alignment: 'right',
												text: ['Página ', { text: page.toString() },  ' de ', { text: pages.toString() }]
											}
										],
										margin: [10, 0]
									}
								});
								// Styling the table: create style object
								var objLayout = {};
								// Horizontal line thickness
								objLayout['hLineWidth'] = function(i) { return .5; };
								// Vertikal line thickness
								objLayout['vLineWidth'] = function(i) { return .5; };
								// Horizontal line color
								objLayout['hLineColor'] = function(i) { return '#aaa'; };
								// Vertical line color
								objLayout['vLineColor'] = function(i) { return '#aaa'; };
								// Left padding of the cell
								objLayout['paddingLeft'] = function(i) { return 4; };
								// Right padding of the cell
								objLayout['paddingRight'] = function(i) { return 4; };
								// Inject the object in the document
								doc.content[1].layout = objLayout;
							}
						},
						{
							extend: 'print',
							
							title: gc_mod + ' ' + gc_app,
							messageTop: pc_GET_grid_title,
							//filename: function () { return pc_GET_grid_title + '_' + fnc_get_date_time(); },
							exportOptions: {
									modifier: {
										selected: pc_GET_fil
									},
									columns: pc_GET_col
							}

						}
			]
		}).container().appendTo($('#' + pc_id +'_btns_export'));
	});
};


var fc__frm_layout__tipo = '';






/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	LOCAL STORAGE																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

/*************	Valores Cargados en el Login *************/
var lS_ccod_usu = 'cod_usu';
var lS_cdsc_usu = 'dsc_usu';
var lS_cemail = 'email';

/*************	Valores Cargados en el Main *************/
var lS_ccod_emp = 'cod_emp';
var lS_ccod_mod = 'cod_mod';
var lS_cdsc_mod = 'dsc_mod';
var lS_cbackground_mod = 'cbackground_mod';
var lS_ccod_eje = 'cod_eje';
var lS_ccod_per = 'cod_per';
var lS_ccod_uop = 'cod_uop';
var lS_dfch_main = 'fch_main';
var lS_ccod_mon_nac = 'cod_mon_nac';
var lS_lq_usp_ad_mod_men_list = 'lq_usp_ad_mod_men_list';


/*************	Valores Cargados al dar click en el enlace del menu de cada modulo *************/
/*
var lS_ccod_men = 'cod_men';
var lS_ccod_men_rel = 'ccod_men_rel';
var lS_cdsc_men = 'dsc_men';
var lS_corigen = 'origen';
var lS_cfrm = 'frm';
var lS_ctip_frm = 'tip_frm';
var lS_cstyle_frm = 'style_frm';
*/


/*************	Valores cargados en cada formulario relacionado al enlace del menu de cada modulo al que se le dio click *************/
var fc_ccod_men = '';
var fc_ccod_men_rel = '';
var fc_cdsc_men = '';
var fc_corigen = '';
var fc_cfrm = '';
var fc_ctip_frm = '';
var fc_cstyle_frm = '';






