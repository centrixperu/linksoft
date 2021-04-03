var jc_grid_row_opts_view = "<a class='waves-effect waves-light img_view_item modal-trigger' style='margin-left: 2px; margin-right: 0;'></a>";
var jc_grid_row_opts_edit = "<a class='waves-effect waves-light img_edit_item modal-trigger' style='margin-left: 2px; margin-right: 5px;'></a>";
var jc_grid_row_opts_remove = "<a class='waves-effect waves-light add1'></a>";

var jc_grid_row_opts_v = jc_grid_row_opts_view;
// var jc_grid_row_opts_n = jc_grid_row_opts_edit + jc_grid_row_opts_remove;
var jc_grid_row_opts_n = jc_grid_row_opts_remove;

var jc_grid_row_opts = jc_grid_row_opts_v;
//var jc_grid_row_opts = jc_grid_row_opts_n;

var ja_grid_cols = [];
var ja_grid_cols_dsc = [];
var ja_grid_cols_vs = [];
var ja_grid_bft = [];
var ja_grid_cols_ali_l = [];
var ja_grid_cols_ali_c = [];
var ja_grid_cols_ali_r = [];
var ja_grid_bgroup = [];
var ja_grid_corderby = [];

var ja_grid_cfunction = [];
var ja_grid_cfunction_cols = [];

var lc_html_table = '';
var lc_html_table_columns = '';

var lc_html_table_select_ft = '';
var lc_bft_cols = '';
var lc_bft_pred = '';
var lc_cft_group_cdsc = '';

var ljc_grid_row_opts = [];

// Variables que funciona en la navegacion de filas, estudiar bien el caso
var var_ = 2;

var ma_usp_Get_si_usu_ctl_conf = [];
function fnc_lq_usp_Get_si_usu_ctl_conf() {
	//var pa_columns = ['All'];
	var pa_columns = ['cform', 'cctrl', 'nord', 'ccmp', 'cdsc', 'bvs', 'bft', 'cft_group_cdsc', 'bft_pred', 'cali', 'bgroup', 'corderby', 'cfunction', 'ctitle'];
	var pc_url = '/Home/slq_usp_Get_si_usu_ctl_conf?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_usu=' + gc_ccod_usu;
	ma_usp_Get_si_usu_ctl_conf = f_eject_ajax(pc_url, pa_columns, []);
};

function fnc_si_usu_ctl_conf (pi_cctrl, pi_grid_option, pi_grid_attributes, ic_data_zi = '', ib_table_fixed = false, ib_required = false)
{
	ja_grid_cols = [];
	ja_grid_cols_dsc = [];
	ja_grid_cols_vs = [];
	ja_grid_bft = [];
	ja_grid_cols_ali_l = [];
	ja_grid_cols_ali_c = [];
	ja_grid_cols_ali_r = [];
	ja_grid_bgroup = [];
	ja_grid_corderby = [];

	ja_grid_cfunction = [];
	ja_grid_cfunction_cols = [];
	
	ljc_grid_row_opts = [];
	
	var pc_ctitle = '';

	var ln_nord = 0;
	var ln_nord_interno = 0;	
	var pn_contador_bvs_false = 0;

	// Base de Datos: Valores de configuracion de la tabla
	var pa_results = fnc_Array_Filtrar_por_columnas(ma_usp_Get_si_usu_ctl_conf, ['cform', 'cctrl'], [(fb_grid_source_generic === true ? 'generic' : mc_men_form), pi_cctrl]);
	pa_results = fnc_Array_sortByKeyAsc(pa_results, 'nord');
	/*
	var pc_url = '/Home/lq_usp_Get_si_usu_ctl_conf?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_usu=' + gc_ccod_usu + '&ic_cform=' + (fb_grid_source_generic === true ? 'generic' : mc_men_form) + '&pi_cctrl=' + pi_cctrl + '&pi_cft_group_cdsc=' + '&ic_load_BD=';
	var pa_columns = ['nord', 'ccmp', 'cdsc', 'bvs', 'cali', 'bgroup', 'corderby', 'cfunction', 'ctitle'];
	var pa_results = f_eject_ajax(pc_url, pa_columns, []);
	*/
	for (var i = 0; i < pa_results.length; i++) {
		ln_nord = pa_results[i].nord - 1;
		// All Columns
		ja_grid_cols.push({ 'data': pa_results[i].ccmp });
		ja_grid_cols_dsc.push(pa_results[i].cdsc);
		// Visible Columns
		if (pa_results[i].bvs === 'False') {ja_grid_cols_vs.push(ln_nord); pn_contador_bvs_false += 1;}
		// Alinear
		if (pa_results[i].cali === 'L') {ja_grid_cols_ali_l.push(ln_nord);}
		else if (pa_results[i].cali === 'C') {ja_grid_cols_ali_c.push(ln_nord);}
		else if (pa_results[i].cali === 'R') {ja_grid_cols_ali_r.push(ln_nord);}				
		// Group's Columns
		if (pa_results[i].bgroup === 'True') {
			//ja_grid_bgroup.push(ln_nord);
			ja_grid_bgroup.push(pa_results[i].ccmp);
		}
		// OrderBy's Columns
		if (pa_results[i].corderby !== '') {ja_grid_corderby.push([ ln_nord, pa_results[i].corderby ]);}
		// Function Columns
		if (pa_results[i].cfunction !== '') {
			ln_nord_interno = ln_nord - pn_contador_bvs_false;
			ja_grid_cfunction.push({ 'nord': ln_nord_interno, 'ccmp': pa_results[i].ccmp, 'cfunction': pa_results[i].cfunction , 'nord_real': ln_nord });
			ja_grid_cfunction_cols.push(ln_nord);
		}
		// Title
		if (i === 0) {pc_ctitle = pa_results[i].ctitle;}
	}
	if (pa_results.length > 0) {
		
		var pc_col_grid_opts = '';

		if (pi_grid_option === true)
		{
			ja_grid_cols.push({ 'data': '' });
			ja_grid_cols_dsc.push('');
			
			
			// ============================================
			var ln_cont = ja_grid_cols.length - 1;
			ljc_grid_row_opts.push(ln_cont);
			
			ja_grid_cols_vs.push(ln_cont); //linea agregada
			pc_col_grid_opts = ' data-col_opts = "' + String(ln_cont) + '"'; //linea agregada
			// ============================================

		}	
	}
	// Filtros
	var pa_results = fnc_Array_Filtrar_por_columnas(ma_usp_Get_si_usu_ctl_conf, ['cform', 'cctrl'], [(fb_grid_source_generic === true ? 'generic' : mc_men_form), pi_cctrl]);
	pa_results = fnc_Array_sortByKeyAsc(pa_results, 'cft_group_cdsc');
	/*
	pc_url = '/Home/lq_usp_Get_si_usu_ctl_conf?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_usu=' + gc_ccod_usu + '&ic_cform=' + (fb_grid_source_generic === true ? 'generic' : mc_men_form) + '&pi_cctrl=' + pi_cctrl + '&pi_cft_group_cdsc=SI' + '&ic_load_BD=';
	pa_columns = ['nord','bft','cdsc','bft_pred','cft_group_cdsc'];
	pa_results = f_eject_ajax(pc_url, pa_columns, []);
	*/
	for (var i = 0; i < pa_results.length; i++) {
		ln_nord = pa_results[i].nord - 1;
		if (pa_results[i].bft === 'True') {
			ja_grid_bft.push({ 'nord': ln_nord, 'cdsc': pa_results[i].cdsc, 'bft_pred': pa_results[i].bft_pred, 'cft_group_cdsc': pa_results[i].cft_group_cdsc });
		}
	}

	// Html: Creacion de la tabla
	var ln_cont = 0;
	// ....:::: Columnas :::::....
	ln_cont = ja_grid_cols_dsc.length;
	lc_html_table_columns = '';
	for (var i = 0; i < ln_cont; i++) {lc_html_table_columns += '<th>' + ja_grid_cols_dsc[i] + '</th>';}
	// ....:::: Tabla :::::....
	lc_html_table  = '<table id="' + pi_cctrl + '" class="display nowrap' + (ib_table_fixed === false ? '' : ' t_fixed') + (ib_required === false ? '' : ' required') + (fb_grid_source_generic === true ? ' generic' : '') + '" cellspacing="0" width="100%" ' + pi_grid_attributes + pc_col_grid_opts + ' data-title="' + pc_ctitle + '">';
	lc_html_table += '<thead><tr>' + lc_html_table_columns + '</thead></tr><tfoot><tr>' + lc_html_table_columns + '</tfoot></tr>';
	lc_html_table += '</table>';
	// ....:::: Filtros :::::....
	ln_cont = ja_grid_bft.length;
	lc_bft_cols = "<option value='-1' selected>Todas las columnas</option>";
	lc_bft_pred = '';
	lc_cft_group_cdsc = '';
	for (var i = 0; i < ln_cont; i++) {
		// Agrupador de Filtro
		if (lc_cft_group_cdsc === '' && ja_grid_bft[i].cft_group_cdsc != '') {
			lc_cft_group_cdsc = ja_grid_bft[i].cft_group_cdsc;
			lc_bft_cols += "<optgroup label='" + lc_cft_group_cdsc + "'>";
		}
		else if (ja_grid_bft[i].cft_group_cdsc != '') {
			if (lc_cft_group_cdsc !== ja_grid_bft[i].cft_group_cdsc) {
				lc_cft_group_cdsc = ja_grid_bft[i].cft_group_cdsc;
				lc_bft_cols += "</optgroup>";
				lc_bft_cols += "<optgroup label='" + lc_cft_group_cdsc + "'>";
			}
		}
		// Filtro
		if (ja_grid_bft[i].bft_pred === 'True') {
			lc_bft_pred = ' selected = "selected" ';
		}
		lc_bft_cols += '<option value="c_' + ja_grid_bft[i].nord + '"' + lc_bft_pred + '>' + ja_grid_bft[i].cdsc + '</option>';
		lc_bft_pred = '';

		if (i === ln_cont - 1 && lc_cft_group_cdsc != '') {
			lc_bft_cols += "</optgroup>";
		}
	}
	// Html: Filtro
	//lc_html_table_select_ft  = "<select data-col='s_" + pi_cctrl + "_filtros' class='select2' data-zi='" + (ic_data_zi === '' ? 'mdl_' + pi_cctrl : ic_data_zi) + "' data-allow-clear='false'>";
	lc_html_table_select_ft  = "<select data-col='s_" + pi_cctrl + "_filtros' class='select2 s2' data-zi='" + (ic_data_zi === '' ? 'mdl_' + pi_cctrl : ic_data_zi) + "' data-allow-clear='false'>";
	lc_html_table_select_ft += lc_bft_cols;
	lc_html_table_select_ft += "</select>";
};
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
var fb_grid_source_generic = false;
function fnc_create_mdl_search
(
pi_grid_id,
pi_grid_var_button_close,
pi_url,
pi_grid_attributes,
ic_data_zi = '',
ib_table_fixed = false,
ib_required = false,
ib_generic = false,
ic_modal_class = '',
ic_modal_title = ''
)
{
	if (ib_generic === true) {fb_grid_source_generic = true;}
	f_create_html_mdl_search(pi_grid_id, pi_grid_var_button_close, false, pi_grid_attributes, ic_data_zi, ib_table_fixed, ib_required, ic_modal_class, ic_modal_title);
	fb_grid_source_generic = false;

	fnc_create_table_data(pi_grid_id, pi_url, false, ib_table_fixed);
};

function f_create_html_mdl_search
(
pi_grid_id, 
pi_grid_var_button_close, 
pi_grid_option, 
pi_grid_attributes, 
ic_data_zi = '', 
ib_table_fixed = false, 
ib_required = false, 
ic_modal_class = '', 
ic_modal_title = ''
)
{

	fnc_si_usu_ctl_conf(pi_grid_id, pi_grid_option, pi_grid_attributes, ic_data_zi, ib_table_fixed, ib_required);

	var pb_btn_add = true;
	if (ic_modal_class.indexOf('not_btn_add') > -1) {
		pb_btn_add = false;
		ic_modal_class = ic_modal_class.replace(' not_btn_add', '');
	}

	var cad_ = '';
	// Modal begin
	cad_ += "<div id='mdl_" + pi_grid_id + "' class='modal modal-fixed-footer modal-find-standard row-fixed-1 modal-footer-pagination modal-search " + ic_modal_class + "' data-button_close='" + pi_grid_var_button_close + "'>";

	// Header
	cad_ += "	<header class='modal_header'>";
	cad_ += "		<div class='modal_header_inner'>";
	cad_ += "			<h3 class='m-all-0'>" + ic_modal_title + "</h3>";
	cad_ += "		</div>";
	cad_ += "	</header>";

	// Content begin
	cad_ += "	<div class='modal-content st_lks fixed_ft_1__1_row'>";
	
	cad_ += "		<div class='fixed_ft_1'>";
	cad_ += "			<section class='ft_vw no-head'>";
	cad_ += "				<div class='row'>";
	cad_ += "					<div class='col s3' data-col='c_s_grid_lista_filtros'>";
	cad_ += "						<div class='col_label'>Filtrar por</div>";
	cad_ += lc_html_table_select_ft;
	cad_ += "					</div>";
	cad_ += "					<div class='col s4'>";
	cad_ += "						<div class='col_label'>Valor</div>";
	cad_ += "						<input class='lks' placeholder='Digite valor a buscar' value='' type='text' data-col='i_filter_" + pi_grid_id + "' />";
	cad_ += "					</div>";
	cad_ += "					<div class='col s5' data-col='" + pi_grid_id + "_length_c'>";
	cad_ += "						<div class='col_label'> </div>";
	cad_ += "					</div>";
	cad_ += "				</div>";
	cad_ += "			</section>";
	cad_ += "		</div>";
	cad_ += "		<section class='ft_table'>";
	cad_ += "			<div class='row'>";
	cad_ += "				<div class='c_col col s12' data-col='c_" + pi_grid_id + "'>";
	cad_ += lc_html_table;
	cad_ += "				</div>";
	cad_ += "			</div>";
	cad_ += "		</section>";

	// Content end
	cad_ += "	</div>";

	// Footer
	cad_ += "	<div class='modal-footer'>";
	cad_ += "		<div class='separator'></div>";

	if (pb_btn_add === true) {
	cad_ += "		<button class='button-1 waves-effect' disabled data-lnk='_lnk_add_" + pi_grid_id + "'>Seleccionar</button>";
	}

	// cad_ += "		<button class='button-1 waves-effect modal-close'>Cancelar</button>";
	cad_ += "		<button class='button-1 waves-effect' onclick='fnc_click_close();'>Cancelar</button>";
	cad_ += "	</div>";

	// Modal end
	cad_ += "</div>";
	$('.form_trasaccion>.container').prepend(cad_);
};

function f_create_html_table
(
pi_grid_id,
pi_url,
pi_grid_option,
pi_grid_attributes,
ic_data_zi = '',
ib_table_fixed = false,
ib_required = false,
ib_generic = false
)
{
	
	if (ib_generic === true) {fb_grid_source_generic = true;}
	fnc_si_usu_ctl_conf(pi_grid_id, pi_grid_option, pi_grid_attributes, ic_data_zi, ib_table_fixed, ib_required);
	fb_grid_source_generic = false;

	if ($(Obj_Col('', 'c_' + pi_grid_id)).exists()) {
		$(Obj_Col('', 'c_' + pi_grid_id)).prepend(lc_html_table);
	}	
	if ($(Obj_Col('', 'c_s_' + pi_grid_id + '_filtros')).exists()) {
		$(Obj_Col('', 'c_s_' + pi_grid_id + '_filtros')).append(lc_html_table_select_ft);
	}

	fnc_create_table_data(pi_grid_id, pi_url, pi_grid_option, ib_table_fixed);
};

function fnc_lnk (ic_columnName, ic_cellData) {
	var pc_get_value = '';
	
	pc_get_value = "<span class='link' data-column='" + ic_columnName + "'>" + ic_cellData + "</span>";

	return pc_get_value;
};

function fnc_box_ft_tpc (ic_columnName, ic_cellData) {
	var pc_get_value = fnc_formatear_tpc(ic_cellData);

	if (EntFact_modificar_tpc === true) {
		if (fnc_definir_tipo_origen() === 'form') {
			pc_get_value = "<input type='text' class='lks' data-grid_col='" + ic_columnName + "' value='" + fnc_formatear_tpc(ic_cellData) + "' class='text_align_right f_tpc' maxlength='" + gn_inputs_number_maxLength + "'>";
		}
	}

	return pc_get_value;
};

function fnc_get_value_cell_function (ic_columnName, ic_cellData, ic_fnc) {
	
	var pc_get_value = '';
	var pn_ContFncs = 1;

	if (ic_fnc !== undefined ) {
		var pc_fnc = '';
		while (ic_fnc !== '') {
			if (ic_fnc.indexOf(',') > 0)
			{
				pc_fnc = $.trim(ic_fnc.substring(0, ic_fnc.indexOf(',')));
				ic_fnc = $.trim(ic_fnc.substring(ic_fnc.indexOf(',') + 1, ic_fnc.length));
			}
			else {
				pc_fnc = ic_fnc;
				ic_fnc = '';
			}

			// Funciones
			if (pc_fnc === 'fnc_ft_enu') {pc_get_value = fnc_formatear_enumerador(ic_cellData);}
			else if (pc_fnc === 'fnc_ft_imp') {pc_get_value = fnc_formatear_importe(ic_cellData);}
			else if (pc_fnc === 'fnc_ft_sin') {pc_get_value = fnc_formatear_saldo_inventario(ic_cellData);}
			else if (pc_fnc === 'fnc_ft_tpc') {pc_get_value = fnc_formatear_tpc(ic_cellData);}
			else {
					if (pn_ContFncs > 1) {
						ic_cellData = pc_get_value;
					}
					pc_get_value = eval(pc_fnc + ' ("' + ic_columnName + '", "' + ic_cellData + '")');
			}
			pn_ContFncs += 1;
		}
	}
	else {
		pc_get_value = ic_cellData;
	}

	return pc_get_value;
	
	
	/*
	var pc_get_value = '';

	if (ic_fnc !== undefined ) {
		if (ic_fnc === 'fnc_ft_enu') {pc_get_value = fnc_formatear_enumerador(ic_cellData);}
		else if (ic_fnc === 'fnc_ft_imp') {pc_get_value = fnc_formatear_importe(ic_cellData);}
		else if (ic_fnc === 'fnc_ft_sin') {pc_get_value = fnc_formatear_saldo_inventario(ic_cellData);}
		else if (ic_fnc === 'fnc_ft_tpc') {pc_get_value = fnc_formatear_tpc(ic_cellData);}
		else {
				pc_get_value = eval(ic_fnc + ' ("' + ic_columnName + '", "' + ic_cellData + '")');
		}
	}
	else {
		pc_get_value = ic_cellData;
	}

	return pc_get_value;
	*/
};

function fnc_create_table_data(pi_grid_id, pi_url, pi_grid_option, ib_table_fixed = false) {

	// Url
	var haber = null;
	if (pi_url !== '') {haber = pi_url;}
	
	// Responsive
	var po_responsive =  {
							details: {
								renderer: function ( api, rowIdx, columns ) {
									var table = $('#' + pi_grid_id).DataTable();
									var pc_get_value = '';
									var cellData = '';
									var data_fnc = '';
									var columnName = '';
									
									var data = $.map( columns, function ( col, i ) {
										columnName = table.settings().init().columns[col.columnIndex].data;
										data_fnc = $(api.cell(rowIdx, i).node()).data('fnc');
										
										// Obtener valor
										cellData = fnc_GET_row_value(col.data);

										// Valor a mostrar
										pc_get_value = fnc_get_value_cell_function(columnName, cellData, data_fnc);
										
										// Para las columnas que no esten en modo responsive
										if (col.hidden === false) {
											$(api.cell(rowIdx, i).node()).html(pc_get_value);
										}
										
										return col.hidden ?
											'<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">'+
												'<td>' + col.title + ':'+'</td> ' +
												'<td>' + pc_get_value + '</td>' +
											'</tr>' :
											'';
									}).join('');
									return data ?
										$('<table/>').append( data ) :
										false;
								}

							}
						};
	if (ib_table_fixed) {po_responsive = false;}
	
	/*
	// Opciones
	var ljc_grid_row_opts = [];
	if (pi_grid_option === true) {
		var ln_cont = ja_grid_cols.length - 1;
		ljc_grid_row_opts.push(ln_cont);
		
		//ljc_grid_row_opts.push(2); //TEMPORAL
		
		ja_grid_cols_vs.push(ln_cont); //linea agregada
	}
	*/

	var lc_grid_cfunction = ja_grid_cfunction.slice();
	
    var t_grid = $('#' + pi_grid_id).DataTable({
		language: language_spanish,
		'paging': true,
		
		'lengthMenu': [[5, 10, 20, 50, -1], [5, 10, 20, 50, ' ∞']],
		//'lengthMenu': false,
		
		'pagingType': 'simple_numbers',
		'select': {
			'style': 'single',
			'selector': 'td:not(.control)'
		},
		keys: {
			keys: [13,38,40]
			//keys: [13,38,40,46]
		},
		
		'responsive': po_responsive,
		'rowGroup': { dataSrc: ja_grid_bgroup },
		'order': ja_grid_corderby,
		
		'ajax': {
			'url': haber,
			'error': function (jqXHR, textStatus, customErrorMessage) {
				//alert(pi_grid_id);
				//alert(haber);
				// toastr.error(jqXHR.responseText);
				//alert('Error AJAX (' + pi_grid_id + '), ' + jqXHR.responseText);
			},
			'dataSrc': ''
		},
		
		'columns': ja_grid_cols,
		'columnDefs': [
			{'targets': ja_grid_cols_vs, 'visible': false },
			{'targets': ja_grid_cols_ali_l, 'className': 'dt-left'},
			{'targets': ja_grid_cols_ali_c, 'className': 'dt-center'},
			{'targets': ja_grid_cols_ali_r, 'className': 'dt-right'},
			{
				'targets': ljc_grid_row_opts,
				'className': 'dt-right grid_col_opts all',
				'data': null,
				'orderable': false,
				'defaultContent': jc_grid_row_opts
			},
			
			{
				'targets': ja_grid_cfunction_cols,
				'createdCell': function (td, cellData, rowData, row, col) {
					var pc_columnName = t_grid.settings().init().columns[col].data;
					
					var pa_columns = ['nord_real'];
					var pa_values = [col];
					var pa_result = fnc_Array_Filtrar_por_columnas(lc_grid_cfunction, pa_columns, pa_values);

					$(td).attr('data-fnc', pa_result[0].cfunction);
					$(td).html(fnc_get_value_cell_function (pc_columnName, cellData, pa_result[0].cfunction));
				}
			}
			

			/*
			,{
				'targets': [6],
				'createdCell': function (td, cellData, rowData, row, col) {
					if (EntFact_modificar_tpc === true) {
						//$(td).html("<div class='st-g'><input type='text' value='" + fnc_formatear_tpc(rowData.ntc_c) + "' style='text-align: right;'></div>");
						$(td).html("<input type='text' name='" + rowData.ccod_mon + "' value='" + fnc_formatear_tpc(rowData.ntc_c) + "' class='text_align_right f_tpc'>");
					}
				}
			}
			*/

		]
		
		
		/*,
		'fnRowCallback': function(nRow, aData, iDisplayIndex) {
			// Function
			var ln_cont = 0;
			ln_cont = lc_grid_cfunction.length;
			for (var i = 0; i < ln_cont; i++) {
				eval(lc_grid_cfunction[i].cfunction + '(nRow,' + lc_grid_cfunction[i].nord + ',"' + aData[lc_grid_cfunction[i].ccmp] + '")');
			}
		},
		*/
		/*
		'fnInitComplete': function(oSettings, json) {
			if (ic_grid_select !== '') {
				if (t_grid.rows().any()) {
					f_row_select_(ic_grid_select, 1);
				}
			}
		}
		*/
	});
	
	if (pi_grid_option === false) {
		//f_grid_complementos(pi_grid_id);
		
		// ====================================================================================================================
		
		
		var table = $('#' + pi_grid_id).DataTable();

		// Buscador
		$(Obj_Col('', 'i_filter_' + pi_grid_id)).on('keyup change', function (event) {
			// Filtro
			if ($(Obj_Col('', 's_' + pi_grid_id + '_filtros')).find(":selected").val() != -1) {
				var valor_ = $(Obj_Col('', 's_' + pi_grid_id + '_filtros')).find(":selected").val();
				var columna_ = valor_.substr(2, valor_.length - 1);

				table
				.column(columna_)
				.search(this.value)
				.draw();
			}
			else {
				table
				.search(this.value)
				.draw();
			}

			if (pi_grid_id === 'grid_lista') {
				f_frm_objs_clear(fc_frm_cb);
				fnc_setear_valores_generales_de_formulario();
			}

			fnc_dataTable_recalc();

			// Enter
			if (event.which == 13) {
				if (fnc_Get_DataTable_RowCount(pi_grid_id, 'Filtered') > 0) {
					f_row_select_(pi_grid_id, 1);
					
					// ==============================================================
					// Funcion equivalente al evento click 'data-row_click'
					if ($.isFunction(window['fnc_' + pi_grid_id + '_row_click']))
					{
						var t1 = $('#' + pi_grid_id).DataTable();
						//var row_data = t1.row($('#' + pi_grid_id + '[data-row_click] tbody tr.selected')).data();
						var row_data = t1.row($('#' + pi_grid_id + ' tbody tr.selected')).data();
						eval('fnc_' + pi_grid_id + '_row_click (row_data)');
					}
					// ==============================================================
					
					//event.preventDefault();
					return;
				}
			}
			// Deseleccionar
			$('#' + pi_grid_id).find('tr.selected').removeClass('selected');
			// Deshabilitar
			$("button[data-lnk='_lnk_add_" + pi_grid_id + "']").prop('disabled', true);
		});
		
		$('#' + pi_grid_id + ' tbody').on('click', 'span.link', function () {

			var t1 = $('#' + pi_grid_id).DataTable();
			var row_data = t1.row($(this).parents('tr')).data();
			var column_name = $(this).data('column');
			
			// ===============================================================================
			var rowSelected = this.closest('tr');
			var rowIndex = $('#' + pi_grid_id + ' tr').index(rowSelected);
			rowIndex = parseInt(rowIndex) - var_;

			$('#' + pi_grid_id).find('tr.selected').removeClass('selected');
			$('#' + pi_grid_id + ' tbody tr:eq(' + rowIndex + ')').addClass('selected');
			$('#' + pi_grid_id + ' tbody tr:eq(' + rowIndex + ') td:not(td:first-child)')[0].click();

			/*
			var rowSelected = t1.row().$('tr.selected');
			$('#' + pi_grid_id).DataTable().row( $(rowSelected).closest('tr') ).select();
			*/
			// ===============================================================================

			eval('fnc_' + pi_grid_id + '_' + column_name + '_column_link (row_data)');
		});
		
		
		
		// ====================================================================================================================
	}
	else if (pi_grid_option === true) {
		$(Obj_Col('', 'i_filter_' + pi_grid_id)).on('keyup change', function () {
			t_grid
				.search(this.value)
				.draw(false);
		});
	
		$('#' + pi_grid_id + ' tbody').on('click', 'a.add1', function () {
			t1 = $('#' + pi_grid_id).DataTable();
			var row_data = t1.row($(this).parents('tr')).data();
			
			if (eval('fnc_' + pi_grid_id + '_row_delete(row_data, t_grid, this)') === true)
			{
				// Eliminar row del datatable
				t_grid
					.row($(this).parents('tr'))
					.remove()
					.draw(false);
					
				fnc_dataTable_recalc();
			}
		});
		
		$('#' + pi_grid_id + ' tbody').on( 'click', 'a.img_edit_item', function () {
			t1 = $('#' + pi_grid_id).DataTable();
			var row_data = t1.row($(this).parents('tr')).data();
			
			eval('fnc_' + pi_grid_id + '_row_edit(row_data)');
		});
	
		$('#' + pi_grid_id + ' tbody').on('click', 'span.link', function () {

			var t1 = $('#' + pi_grid_id).DataTable();
			var row_data = t1.row($(this).parents('tr')).data();
			var column_name = $(this).data('column');
			
			// ===============================================================================
			var rowSelected = this.closest('tr');
			var rowIndex = $('#' + pi_grid_id + ' tr').index(rowSelected);
			rowIndex = parseInt(rowIndex) - var_;

			$('#' + pi_grid_id).find('tr.selected').removeClass('selected');
			$('#' + pi_grid_id + ' tbody tr:eq(' + rowIndex + ')').addClass('selected');
			$('#' + pi_grid_id + ' tbody tr:eq(' + rowIndex + ') td:not(td:first-child)')[0].click();

			/*
			var rowSelected = t1.row().$('tr.selected');
			$('#' + pi_grid_id).DataTable().row( $(rowSelected).closest('tr') ).select();
			*/
			// ===============================================================================

			eval('fnc_' + pi_grid_id + '_' + column_name + '_column_link (row_data)');
		});
		
		
		
		
		$('#' + pi_grid_id + ' tbody').on( 'click', 'a.img_view_item ', function () {
			t1 = $('#' + pi_grid_id).DataTable();
			var row_data = t1.row($(this).parents('tr')).data();
			
			//fer77
			
			
			//var rowSelected = this.closest('tr');
			//var rowIndex = $('#' + pi_grid_id + ' tr').index(rowSelected);
			var rowIndex = parseInt($('#' + pi_grid_id + ' tr').index(this.closest('tr'))) - var_;
			//rowIndex = parseInt(rowIndex) - var_;
			//alert(rowIndex);
			// -----------------------------------------------------------------------------------------
			//function f_row_select_(grid_p, fila_p) {
				
				$('#' + pi_grid_id).find('tr.selected').removeClass('selected');
				$('#' + pi_grid_id + ' tbody tr:eq(' + rowIndex + ')').addClass('selected');
				$('#' + pi_grid_id + ' tbody tr:eq(' + rowIndex + ') td:not(td:first-child)')[0].click();

				/*
				var rowSelected = t1.row().$('tr.selected');
				$('#' + pi_grid_id).DataTable().row( $(rowSelected).closest('tr') ).select();
				*/
				
			//}
			// -----------------------------------------------------------------------------------------
						
			eval('fnc_' + pi_grid_id + '_row_view(row_data)');
									
			//fnc_setear_campos_child(fc_frm_dt_1, 'grid_it');
			
		});
		
		// Key presionado en la tabla
		/*
		$('#' + pi_grid_id).on('key.dt', function(e, datatable, key, cell, originalEvent) {
			if (key === 46) {
				alert('Presiono boton suprimir');
			}
		});
		*/
	}

	$('#' + pi_grid_id + '[data-row_data] tbody').on('click', 'td', function () {
		/*
		var t1 = $('#' + pi_grid_id).DataTable();
		var row_data = t1.row($(this).parents('tr')).data();
		eval('fnc_' + pi_grid_id + '_row_click(row_data)');
		*/
		
		fnc_setear_campos_child('form_main', pi_grid_id);
	});

	$('#' + pi_grid_id + '[data-row_click] tbody').on('click', 'td', function () {
		var t1 = $('#' + pi_grid_id).DataTable();
		var row_data = t1.row($(this).parents('tr')).data();
		eval('fnc_' + pi_grid_id + '_row_click (row_data)');
	});
	
	$('#' + pi_grid_id + '[data-row_dblclick] tbody').on('dblclick', 'td', function () {
		var t1 = $('#' + pi_grid_id).DataTable();
		var row_data = t1.row($(this).parents('tr')).data();
		eval('fnc_' + pi_grid_id + '_row_dblclick (row_data)');
	});
	/*
	$('#' + pi_grid_id + '[data-cell_click] tbody').on('click', 'td', function () {
		var t1 = $('#' + pi_grid_id).DataTable();
		var row_data = t1.cell($(this)).data();
		eval('fnc_' + pi_grid_id + '_cell_click (row_data)');
	});
	
	$('#' + pi_grid_id + '[data-cell_dblclick] tbody').on('dblclick', 'td', function () {
		var t1 = $('#' + pi_grid_id).DataTable();
		var row_data = t1.cell($(this)).data();
		eval('fnc_' + pi_grid_id + '_cell_dblclick (row_data)');
	});
	*/
};



function fnc_setear_campos_child(ic_form, ic_grid_table) {

	// var pi_grid_id = 'grid_lista';
	var pi_grid_id = ic_grid_table;
	t1 = $('#' + pi_grid_id).DataTable();
	//var row_data = t1.row($('#' + pi_grid_id + '[data-row_data] tbody tr.selected')).data();
	var row_data = t1.row($('#' + pi_grid_id + ' tbody tr.selected')).data();

	$('#' + ic_form + ' [data-col]').each(function() {
		var obj_type_ = $(this)[0].tagName.toLowerCase();
		var data_col = $(this).data('col');

		var data_col_tip = data_col.substring(0, 5);
		var pc_value = '';

		if (obj_type_ === 'input') {
			pc_value = row_data[data_col];
			
			if ($(this).is(":text")) {
				
				/*
				if (data_col_tip === '_imp_') {pc_value = fnc_formatear_importe(row_data[data_col.substring(5, data_col.length)]);}
				else if (data_col_tip === '_sin_') {pc_value = fnc_formatear_saldo_inventario(row_data[data_col.substring(5, data_col.length)]);}
				else if (data_col_tip === '_tpc_') {pc_value = fnc_formatear_tpc(row_data[data_col.substring(5, data_col.length)]);}
				else {pc_value = row_data[data_col];}
			
				$(Obj_Col(ic_form, data_col, 'input')).val(pc_value);
				*/

				if ($(this).hasClass('f_imp') === true || $(this).hasClass('f_sin') === true || $(this).hasClass('f_tpc') === true) {
					$(Obj_Col(ic_form, data_col, 'input')).val(pc_value).trigger('change');
				}
				else {
					$(Obj_Col(ic_form, data_col, 'input')).val(pc_value);
				}
				
			}
			else if ($(this).is(":checkbox")) {
				if (pc_value === 'A') {
					$(Obj_Col(ic_form, data_col, 'input')).prop('checked', true);
					$(Obj_Col(ic_form, data_col, 'input')).attr('checked', true).trigger('change');
				}
				else {
					$(Obj_Col(ic_form, data_col, 'input')).prop('checked', false);
					$(Obj_Col(ic_form, data_col, 'input')).attr('checked', false).trigger('change');
				}
			}
		}
		else if (obj_type_ === 'textarea') {
			$(Obj_Col(ic_form, data_col, 'textarea')).val(row_data[data_col]);
		}
		else if (obj_type_ === 'select') {

			if (data_col_tip === '_drt_') {
				pc_value = row_data[data_col.substring(5, data_col.length)];
			}
			else {
				pc_value = row_data['cdsc_' + data_col];
			}

			$(Obj_Col(ic_form, 'i_s_' + data_col, 'input')).val(pc_value);
		}
		else if (obj_type_ === 'div') {
			$(Obj_Col(ic_form, data_col, 'div')).html(row_data[data_col]);
		}
		else if (obj_type_ === 'label') {
			$(Obj_Col(ic_form, data_col, 'label')).html(row_data[data_col]); // Aca creo hay error
		}
	
	});
	
	//$('#' + ic_form + " .input-csim").attr('data-before', row_data.csim_mon);
	$(".input-csim").attr('data-before', row_data.csim_mon);

	eval('fnc_' + pi_grid_id + '_setear_campos_child_post(row_data)');
};


// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// fer33
// Exportar valores de la grilla a documento excel
var pc_table_select_export = '';
function fnc_table_export_excel() {

	if (fnc_Get_DataTable_RowCount(pc_table_select_export, 'Filtered') === 0) {
		swal(gc_msj_titulo_error, gc_msj_contenido_grid_export_SinData, gc_msj_tipo_error);
		return;
	}

	var pc_table_title = $("#" + pc_table_select_export).data('title');

	var pc_s_fil = $(Obj_Col('frm_grid_export', 's_grid_fil_export')).find(":selected").val();
	var pc_s_col = $(Obj_Col('frm_grid_export', 's_grid_col_export')).find(":selected").val();
	var pc_s_format = $(Obj_Col('frm_grid_export', 's_grid_format_export')).find(":selected").val();

	var pc_fil = '';
	var pc_col = [];
	
	var ln_nord = 0;
	
	if (pc_s_fil === 'fil_s') {pc_fil = true;}
	else if (pc_s_fil === 'fil_a') {pc_fil = '';}
	
	if (pc_s_col === 'col_v') {
		var pa_results = fnc_Array_Filtrar_por_columnas(ma_usp_Get_si_usu_ctl_conf, ['cform', 'cctrl'], [($('#' + pc_table_select_export).hasClass('generic') === true ? 'generic' : mc_men_form), pc_table_select_export]);
		pa_results = fnc_Array_sortByKeyAsc(pa_results, 'nord');
		/*
		var pc_url = '/Home/lq_usp_Get_si_usu_ctl_conf?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_usu=' + gc_ccod_usu + '&ic_cform=' + ($('#' + pc_table_select_export).hasClass('generic') === true ? 'generic' : mc_men_form) + '&pi_cctrl=' + pc_table_select_export + '&pi_cft_group_cdsc=' + '&ic_load_BD=';
		var pa_columns = ['nord', 'ccmp', 'cdsc', 'bvs', 'cali', 'bgroup', 'corderby', 'cfunction'];
		var pa_results = f_eject_ajax(pc_url, pa_columns, []);
		*/
		for (var i = 0; i < pa_results.length; i++) {
			ln_nord = pa_results[i].nord - 1;
			if (pa_results[i].bvs === 'True') {pc_col.push(ln_nord);}
		}
	}
	else if (pc_s_col === 'col_a') {
		pc_col = [''];
	}
	
	var pa_values = [pc_table_select_export, pc_table_title, pc_fil, pc_col];
	fnc_table_config_export(pa_values);

	if (pc_s_format === 'xls') {
		$('.buttons-excel[aria-controls="' + pc_table_select_export + '"]')[0].click();
	}
	else if (pc_s_format === 'pdf') {
		$('.buttons-pdf[aria-controls="' + pc_table_select_export + '"]')[0].click();	
	}
	else if (pc_s_format === 'print') {
		$('.buttons-print[aria-controls="' + pc_table_select_export + '"]')[0].click();	
	}
};

// Idioma para todas las tablas
var language_spanish = {
	decimal: "",
	emptyTable: "No hay registros",
	// "emptyTable": "No hay datos disponibles en la tabla",

	/*"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",*/
	"sInfo":           "_START_ al _END_ de un total de _TOTAL_ registros",

	/*"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",*/
	"sInfoEmpty":      "",

	"sInfoFiltered":   "(Filtrado de un total de _MAX_ registros)",

	infoPostFix: "",
	thousands: ",",

	/*lengthMenu: "Mostrar _MENU_ registros por página",*/
	/*lengthMenu: "Registros por página  _MENU_ ",*/
	/*lengthMenu: "_MENU_ Registros por página",*/
	lengthMenu: "_MENU_",

	loadingRecords: "Cargando...",
	processing: "Procesando...",

	search: "Filtrar:",
	/*search: "",*/

	zeroRecords: "No se encontraron resultados",
	paginate: {
		first: "Primera",
		last: "Última",
		/*
		next: "Siguiente",
		previous: "Anterior"
		*/
		next: "",
		previous: ""
	},
	aria: {
		"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
		"sSortDescending": ": Activar para ordenar la columna de manera descendente"
	}
};

function fnc_html_modal_table_config_export() {
	var pc_html_modal_table_config_export = " \
	<div id='mdl_exportar' class='modal modal-fixed-footer modal-find-standard modal-footer-simple width_25 height_60' data-button_close='out'> \
		<header class='modal_header'> \
			<div class='modal_header_inner'> \
				<h3 class='m-all-0'>Exportar datos</h3> \
			</div> \
		</header> \
		<form id='frm_grid_export'> \
			<div class='modal-content p-hor-10 p-top-25 p-bottom-5'> \
				<section class='section_form'> \
					<div class='row'> \
						<div class='col s12'> \
							<label>Filas</label> \
						</div> \
						<div class='lks input-field col s12'> \
							<select data-col='s_grid_fil_export'> \
								<option value='fil_a' selected>Todos las filas</option> \
								<option value='fil_s'>Filas seleccionadas</option> \
							</select> \
							<!-- <label>Materialize Select</label> --> \
						</div> \
					</div> \
					<div class='row'> \
						<div class='col s12'> \
							<label>Columnas</label> \
						</div> \
						<div class='lks input-field col s12'> \
							<select data-col='s_grid_col_export'> \
								<option value='col_a'>Todos las columnas</option> \
								<option value='col_v' selected>Columnas visibles</option> \
							</select> \
							<!-- <label>Materialize Select</label> --> \
						</div> \
					</div> \
					<div class='row'> \
						<div class='col s12'> \
							<label>Formato</label> \
						</div> \
						<div class='lks input-field col s12'> \
							<select data-col='s_grid_format_export'> \
								<option value='xls' selected>Excel</option> \
								<option value='pdf'>PDF</option> \
								<option value='print'>Imprimir</option> \
							</select> \
							<!-- <label>Materialize Select</label> --> \
						</div> \
					</div> \
				</section> \
			</div> \
		</form> \
		<div class='modal-footer'> \
			<button class='button-1 waves-effect' data-lnk='_lnk_table_export_excel'>Exportar</button> \
			<button class='button-1 waves-effect modal-close'>Cancelar</button> \
		</div> \
	</div> \
	";
	$('.form_trasaccion').append(pc_html_modal_table_config_export);
};



// ------------------ ORDENER ACA PARA ABAJO ***************************************************




/* --------------------------------- Nuevo Botones de Navegacion: Inicio --------------------------------- */
function f_row_select_(grid_p, fila_p) {
	$('#' + grid_p).find('tr.selected').removeClass('selected');
	$('#' + grid_p + ' tbody tr:eq(' + fila_p + ')').addClass('selected');
	$('#' + grid_p + ' tbody tr:eq(' + fila_p + ') td:not(td:first-child)')[0].click();

	t1 = $('#' + grid_p).DataTable();
	var rowSelected = t1.row().$('tr.selected');
	$('#' + grid_p).DataTable().row( $(rowSelected).closest('tr') ).select();
};
/* --------------------------------- Nuevo Botones de Navegacion: Fin --------------------------------- */

function fnc_tables_cargar_caracteristicas() {

	$('table').on('keypress', 'input.f_imp, input.f_sin, input.f_tpc, input.f_num', function () {
		return filterFloat(event, this);
	});

    $('table tbody').on('click', 'td.dtr-control', function () {
		fnc_dataTable_recalc($(this).closest('table').attr('id'));
    });

	$(".dataTables_info").click(function () {
		var pc_id = $(this).attr('id');
		pc_table_select_export = pc_id.substring(0, pc_id.length - 5);
		$('#mdl_exportar').modal('open');
	});

	// Table Input, Select, etc.
	$('table').on('change', 'input', function () {
		fc_table_id = $(this).closest('table.dataTable').attr('id');
		fo_table = $('#' + fc_table_id).DataTable();
		fr_row_data = fo_table.row($(this).parents('tr')).data();
		fo_columns = fo_table.settings().init().columns;
		fn_rowIndex = fo_table.cell($(this).parents('td')).index().row;
		fn_colIndex = fo_table.cell($(this).parents('td')).index().column;
		fc_colName = fo_columns[fn_colIndex].data;
		
		fc_cellData_fnc = $(this).parents('td').data('fnc');
		fc_cellData_value = fnc_get_value_cell_function(fc_colName, $(this).val(), fc_cellData_fnc);
	});

	$('table').on('focus', 'input', function () {
		$(this).select();
	});	
	
	/* --------------------------------- Botones de Navegacion: Inicio --------------------------------- */
	//var var_ = 2;
	function f_dtrg_group_cont(){
		var v_dtrg_group_cont = 0;	
		$('#grid_lista > tbody  > tr.dtrg-group').each(function() {v_dtrg_group_cont++;});
		return v_dtrg_group_cont;
	}
	function select_(){
		t1 = $('#grid_lista').DataTable();
		var rowSelected = t1.row().$('tr.selected');
		$('#grid_lista').DataTable().row( $(rowSelected).closest('tr') ).select();
	}
	  
	function p_registro(){
		// <!-- $('#grid_lista').DataTable().rows('.parent').nodes().to$().find('td:first-child').trigger('click'); -->

		var fila = 1;
		
		$('#grid_lista').find('tr.selected').removeClass('selected');
		$("#grid_lista tbody tr:eq(" + fila + ")").addClass("selected");
		$("#grid_lista tbody tr:eq(" + fila + ") td:not(td:first-child)")[0].click();

		select_();
	}
		
	function u_registro(fila){
		// <!-- $('#grid_lista').DataTable().rows('.parent').nodes().to$().find('td:first-child').trigger('click'); -->

		$('#grid_lista').find('tr.selected').removeClass('selected');
		$("#grid_lista tbody tr:eq(" + fila + ")").addClass("selected");
		$("#grid_lista tbody tr:eq(" + fila + ") td:not(td:first-child)")[0].click();

		select_();
	};
	  
	$("#btn_p_row").click(function () {
		t1 = $("#grid_lista").DataTable();
		if (t1.page.info().recordsDisplay == 0)
		{
			return;
		}
		
		$('#grid_lista').DataTable().rows('.parent').nodes().to$().find('td:first-child').trigger('click');
		
		var rowSelected = t1.row().$('tr.selected');
		var rowIndex = $('#grid_lista tr').index($(rowSelected).closest('tr'));

		if (t1.page.info().page == 0 && (rowIndex - var_) == 1)
		{
			// f_msj('No existen mas registros!','','e','bottomRight','');
			f_msj('El primer registro esta seleccionado!!!','','e','bottomRight','');
			return;
		}
		// <!-- ------------------------------------------------- -->
			
		$('#grid_lista').dataTable().fnPageChange(0);
		p_registro();
		
		fnc_dataTable_recalc();
	});
		
	$("#btn_u_row").click(function () {
		t1 = $("#grid_lista").DataTable();
		if (t1.page.info().recordsDisplay == 0)
		{
			return;
		}
		
		$('#grid_lista').DataTable().rows('.parent').nodes().to$().find('td:first-child').trigger('click');

		var rowSelected = t1.row().$('tr.selected');
		var rowIndex = $('#grid_lista tr').index($(rowSelected).closest('tr'));

		// <!-- ------------------------------------------------- -->
		var limite_x_page_;
		var length_ = t1.page.info().length;
		if (length_ == -1 || t1.page.info().pages == 1)
		{
			length_ = t1.page.info().end;
			limite_x_page_ = length_ + f_dtrg_group_cont() - 1;
		}
		if (t1.page.info().pages > 1)
		{
			limite_x_page_ = t1.page.info().recordsDisplay % length_;
		}
		// <!-- ----------------------------------------------------------- -->
		if (t1.page.info().page == t1.page.info().pages - 1 && (rowIndex - var_) == limite_x_page_)
		{
			// f_msj('No existen mas registros!','','e','bottomRight','');
			f_msj('El ultimo registro esta seleccionado!!!','','e','bottomRight','');
			return;
		}
		// <!-- ----------------------------------------------------------- -->
		
		//FALTA AGREGAR CONDICIONAL AND QUE SEA PAGINA IGUAL AL TOTAL DE PAGINAS
		if (t1.page.info().pages > 1)
		{
			$('#grid_lista').dataTable().fnPageChange($('#grid_lista').DataTable().page.info().pages - 1);
		}
		
		rowIndex = limite_x_page_;
		u_registro(rowIndex);
		
		fnc_dataTable_recalc();
	});

	$("#btn_a_row").click(function () {
		t1 = $("#grid_lista").DataTable();
		if (t1.page.info().recordsDisplay == 0)
		return;

		$('#grid_lista').DataTable().rows('.parent').nodes().to$().find('td:first-child').trigger('click');
		
		var rowSelected = t1.row().$('tr.selected');
		var rowIndex = $('#grid_lista tr').index($(rowSelected).closest('tr'));
		rowIndex = parseInt(rowIndex) - var_;
		
		if (rowIndex < 0)
		{
			var limite_x_page_;
			var length_ = t1.page.info().length;
			if (length_ == -1 || t1.page.info().pages == 1)
			{
				length_ = t1.page.info().end;
				limite_x_page_ = length_ + f_dtrg_group_cont() - 1;
			}
			if (t1.page.info().pages > 1)
			{
				if ((t1.page.info().page + 1) == t1.page.info().pages)
				{
					limite_x_page_ = t1.page.info().recordsDisplay % length_;
				}
				else
				{
					limite_x_page_ = length_ + f_dtrg_group_cont() - 1;
				}
			}
		
			rowIndex = limite_x_page_;
			u_registro(rowIndex);
			return;
		// <!-- --------------------------------------------------------------------- -->
		
		}
		//FER77
		if (t1.page.info().page == 0)
		{
			if (rowIndex == 1)
			{
				// f_msj('No existen mas registros!','','e','bottomRight','');
				f_msj('El primer registro esta seleccionado!!!','','e','bottomRight','');
				
				return;
			}
		}
			
		if (rowIndex == 1)
		{
			// <!-- t1.fnPageChange(t1.page.info().page+1); -->
			$('#grid_lista').dataTable().fnPageChange(t1.page.info().page-1);
							
			rowIndex = t1.page.info().length + f_dtrg_group_cont() - 1;
			u_registro(rowIndex);
		}
		else
		{
			var row_class = t1.row(rowIndex).$(rowSelected).prev('tr').attr('class');
			rowSelected.removeClass('selected');
			var f_tipo_row = row_class.indexOf("dtrg-group");
			
			if (f_tipo_row == -1) {
				rowIndex = parseInt(rowIndex) - 1;
				t1.row(rowIndex).$(rowSelected).prev('tr').addClass("selected");
			}
			else {
				rowIndex = parseInt(rowIndex) - var_;
				$("#grid_lista tbody tr:eq(" + rowIndex + ")").addClass("selected");
			}
			
			$("#grid_lista tbody tr:eq(" + rowIndex + ") td:not(td:first-child)")[0].click();
			select_();
		}
		
		fnc_dataTable_recalc();
	});

	$("#btn_s_row").click(function () {

		t1 = $("#grid_lista").DataTable();
		if (t1.page.info().recordsDisplay == 0)
		{
			return;
		}

		$('#grid_lista').DataTable().rows('.parent').nodes().to$().find('td:first-child').trigger('click');
		
		var dtrg_group_cont = f_dtrg_group_cont();
			
		var rowSelected = t1.row().$('tr.selected');
		var rowIndex = $('#grid_lista tr').index($(rowSelected).closest('tr'));
		rowIndex = parseInt(rowIndex) - var_;
		
		if (rowIndex < 0)
		{
			p_registro();
			return;
		}
		
		// <!-- ----------------------------------------------------------- -->
		var length_ = t1.page.info().length;
		if (length_ == -1) {length_ = t1.page.info().end;}
		// <!-- ----------------------------------------------------------- -->
				
		if ((t1.page.info().page + 1) == t1.page.info().pages)
		{
			var limite_x_page_ = (t1.page.info().recordsDisplay % length_) + f_dtrg_group_cont() - 1;
			if (t1.page.info().length == -1) {
				limite_x_page_ = length_ + f_dtrg_group_cont() - 1;
			}
			if (rowIndex == limite_x_page_)
			{
				// f_msj('No existen mas registros!','','e','bottomRight','');
				f_msj('El ultimo registro esta seleccionado!!!','','e','bottomRight','');
				return;
			}
		}
		
		if (rowIndex - dtrg_group_cont == length_ - 1)
		{
			$('#grid_lista').dataTable().fnPageChange(t1.page.info().page + 1);
			p_registro();
		}
		else
		{
			var row_class = t1.row(rowIndex).$(rowSelected).next('tr').attr('class');
			rowSelected.removeClass('selected');
			var f_tipo_row = row_class.indexOf("dtrg-group");

			if (f_tipo_row == -1) {
				rowIndex = parseInt(rowIndex) + 1;
				t1.row(rowIndex).$(rowSelected).next('tr').addClass("selected");
			}
			else {
				rowIndex = parseInt(rowIndex) + var_;
				$("#grid_lista tbody tr:eq(" + rowIndex + ")").addClass("selected");
			}
			
			$("#grid_lista tbody tr:eq(" + rowIndex + ") td:not(td:first-child)")[0].click();
			select_();
		}
		
		fnc_dataTable_recalc();
	});
	/* --------------------------------- Botones de Navegacion: Fin --------------------------------- */

	//fer77
	// $(Obj_Col('', 'grid_lista_length_select', 'select')).change(function() {
	$('.grid_length_change').change(function() {
		
		var ac_object = fnc_get_object_caracteristicas(this);
		
		//f_obj_validar_vacio(ac_object[0].form, ac_object[0].col, ac_object[0].type, '');
		
		// alert(ac_object[0].form);
		pc_select_col = ac_object[0].col;
		pc_select_col = pc_select_col.substring(4, pc_select_col.length);
		$("select[name='" + pc_select_col + "']") .val($(this).find(':selected').text()).trigger('change');
	});

	
	/*
	$('.dataTables_length').each(function() {
		var obj_id_ = $(this).attr('id');
		if ($(Obj_Col('', obj_id_ + '_c')).exists()) {
			var po_contenedor = document.querySelector('[data-col="' + obj_id_ + '_c' + '"]');
			po_contenedor.appendChild(this);
		}
	});
	*/

	$('table').each(function() {
		var obj_id_ = $(this).attr('id');
		var f_grid = $(this).DataTable();
	
		// Manejar el evento cuando la celda se enfoca a traves de el teclado
		$('#' + obj_id_).on('key-focus.dt', function(e, datatable, cell) {
			f_grid.row(cell.index().row).select();
		});
		// Manejar clic en celda de tabla
		$('#' + obj_id_).on('click', 'tbody td:not([colspan]):not(.child)', function(e) {
			if ($('#' + obj_id_).DataTable().page.info().recordsDisplay === 0)
			return;

			e.stopPropagation();
			
			var rowIdx = f_grid.cell(this).index().row;
			f_grid.row(rowIdx).select();
		});
		
		// Key presionado en la tabla (Modal)
		//$('#' + pi_grid_id + '[data-row_data] tbody').on('click', 'td', function () {
		//$('#' + obj_id_ + '[data-row_data]').on('key.dt', function(e, datatable, key, cell, originalEvent) {
		//$('#' + obj_id_ + '[data-row_data] tbody').on('key.dt', function(e, datatable, key, cell, originalEvent) {
		$('#' + obj_id_).on('key.dt', function(e, datatable, key, cell, originalEvent) {
			if (key === 13) {
				/*
				var funcion_ = 'fnc_add_' + obj_id_;
				eval(funcion_ + '()');
				*/
				if ($("button[data-lnk='_lnk_add_" + obj_id_ + "']").prop('disabled') === false) {
					$("button[data-lnk='_lnk_add_" + obj_id_ + "']")[0].click();
				}
				// Agregar para el grid_lista y verificar el enter para los que no son grid lista
			}
		});
		
		// Habilitar - Deshabilitar boton add (Modal)
		f_grid.on('select deselect', function () {
			var selectedRows = f_grid.rows( { selected: true } ).count();
			//$('#btn_add_' + obj_id_).prop('disabled', selectedRows === 0);
			$("button[data-lnk='_lnk_add_" + obj_id_ + "']").prop('disabled', selectedRows === 0);
		});

		
	});


};



// -------------------------------------------- VALORES DE ITEM


function f_grid_complementos(grid_id) {

    var table = $('#' + grid_id).DataTable();

    // Buscador
    $(Obj_Col('', 'i_filter_' + grid_id)).on('keyup change', function (event) {
        // Filtro
        if ($(Obj_Col('', 's_' + grid_id + '_filtros')).find(":selected").val() != -1) {
            var valor_ = $(Obj_Col('', 's_' + grid_id + '_filtros')).find(":selected").val();
            var columna_ = valor_.substr(2, valor_.length - 1);

            table
			.column(columna_)
			.search(this.value)
			.draw();
        }
        else {
            table
			.search(this.value)
			.draw();
        }

		if (grid_id === 'grid_lista') {
			f_frm_objs_clear(fc_frm_cb);
			fnc_setear_valores_generales_de_formulario();
		}

		fnc_dataTable_recalc();

        // Enter
        if (event.which == 13) {
			if (fnc_Get_DataTable_RowCount(grid_id, 'Filtered') > 0) {
				f_row_select_(grid_id, 1);
				return;	
			}
        }
        // Deseleccionar
        $('#' + grid_id).find('tr.selected').removeClass('selected');
        // Deshabilitar
		$("button[data-lnk='_lnk_add_" + grid_id + "']").prop('disabled', true);
    });
};

function fnc_table_reload(ic_grid_id, ic_url, ic_grid_select = '') {
	var pt_table = $('#' + ic_grid_id).DataTable();
	pt_table.ajax.url(ic_url).load(function (json) {
														if (ic_grid_select !== '') {
															var pt_table_select = $('#' + ic_grid_select).DataTable();
															if (!pt_table_select.data().count()) {
																f_frm_objs_clear('form_main');
															}
															else {
																if (pt_table.rows().any()) {
																	if (ia_columns.length === 0 && ia_values.length === 0) {
																		try {
																			f_row_select_(ic_grid_select, 1);
																			/*
																			var pt_table1 = $('#' + ic_grid_id).DataTable();
																			pt_table1.ajax.reload(function (json) {
																				if (pt_table1.rows().any()) {
																					f_row_select_(ic_grid_select, 1);	
																				}
																			});
																			*/
																		}
																		catch(err) {
																			f_msj('¡Error al seleccionar primer registro!','','e','bottomRight','');
																		}
																	}
																	else {
																		fnc_grid_seleccionar_x_valores(ic_grid_select);
																		/*
																		var pt_table1 = $('#' + ic_grid_id).DataTable();
																		pt_table1.ajax.reload(function (json) {
																			if (pt_table1.rows().any()) {
																				fnc_grid_seleccionar_x_valores(ic_grid_select);
																			}
																		});
																		*/
																	}
																}
															}
														}
													});
};
/*
function fnc_abc() {
	var table = $('#grid_lista').DataTable();
    table.ajax.reload();
};
*/

function fnc_DataTable_fnAddData_to_array(ic_grid, ia_source) {
	$('#' + ic_grid).dataTable().fnClearTable();
	if (ia_source.length > 0) {$('#' + ic_grid).dataTable().fnAddData(ia_source);}
};

//=========================================== VALORES GENERALES DE LISTA

function fnc_Get_DataTable_RowData_Selected(ic_grid) {
	var table = $('#' + ic_grid).DataTable();
	var rows = table.rows('.selected').indexes();
	var data = table.row(rows).data();
	return data;
};

function fnc_Get_DataTable_RowCount(ic_grid, ic_tip) {
	var table = $('#' + ic_grid).DataTable();
	var pn_count = 0;
	if (ic_tip === 'All') {
		pn_count = table.rows().count();	
	}
	else if (ic_tip === 'Filtered') {
		pn_count = table.rows( {search:'applied'} ).count();
	}
	else if (ic_tip === 'Selected') {
		pn_count = table.rows( { selected: true } ).count();
	}
	return pn_count;
};


// ===============================================================================================================

function fnc_grid_valores_expand_asignar(ic_grid) {
	
	
	
		/*
		// No se usa en este proceso
		var pa_results_expand = [];
						
		var oTable = $('#' + 'grid_mon_tpc').DataTable();
		oTable.$('td.dtr-control').each(function() {
			
			var tr = $(this).closest('tr');
			var row = oTable.row(tr);
			
			console.log(tr);
			
			if ( row.child.isShown() ) {
				<!-- alert('abierto'); -->
				<!-- $( 'td:first-child', oTable.row( row ).node() ).trigger('click'); -->
				
				pa_results_expand.push(row.child.isShown());
			}
			else {
				<!-- alert('cerrado'); -->
				<!-- $( 'td:first-child', oTable.row( row ).node() ).trigger('click'); -->
				pa_results_expand.push(row.child.isShown());
				
			}
			
		});
		
		//console.log(pa_results_expand);
		
		return
		*/
	
	
	
	
	
	
	
	
	
	var table = $('#' + ic_grid).DataTable();

	
	
	$('#' + ic_grid).DataTable().rows().iterator('row', function(context, index) {
		
		var node = $(this.row(index).node());
		//var row_data = table.row(node).data();
		var row = table.row(node);

	
		if (pa_results_expand[index] === true) {
			$('td:first-child', table.row(row).node()).trigger('click');
		}
	
		

		/*
		if ( row.child.isShown() ) {
			<!-- alert('abierto'); -->
			//$('td:first-child', table.row(row).node()).trigger('click');
			
			pa_results_expand.push(row.child.isShown());
		}
		else {
			<!-- alert('cerrado'); -->
			//$('td:first-child', table.row(row).node()).trigger('click');

			pa_results_expand.push(row.child.isShown());
		}
		*/

	});


};

var pa_results_expand = [];
function fnc_grid_valores_expand(ic_grid) {
	var table = $('#' + ic_grid).DataTable();
	var pn_nro_rows_x_pagina = table.page.info().length;	
	var pn_nro_pagina = 0;
	var pn_nro_row_seleccionado = -1;
	var pb_check = false;
	var pn_cont_parametros = ia_columns.length;
	var pn_cont_check = 0;
	

	
	pa_results_expand = [];
	$('#' + ic_grid).DataTable().rows().iterator('row', function(context, index) {
	
	
	
		var node = $(this.row(index).node());
		//var row_data = table.row(node).data();
		var row = table.row(node);

		if ( row.child.isShown() ) {
			// alert('abierto');
			//$('td:first-child', table.row(row).node()).trigger('click');
			
			pa_results_expand.push(row.child.isShown());
		}
		else {
			// alert('cerrado');
			//$('td:first-child', table.row(row).node()).trigger('click');

			pa_results_expand.push(row.child.isShown());
		}
			
			
	
	
		/*
		if (pb_check === false) {
			pn_nro_row_seleccionado += 1;
			var node = $(this.row(index).node());
			var row_data = table.row(node).data();
			pn_cont_check = 0;
			for (var i = 0; i < ia_columns.length; i++) {
				if (row_data[ia_columns[i]] === ia_values[i]) {
					pn_cont_check += 1;
				}
			}
			if (pn_cont_parametros === pn_cont_check) {
				pb_check = true;
				$('#' + ic_grid).find('tr.selected').removeClass('selected');
				node.addClass('selected');
			}
		}
		*/
	});
	
	//console.log(pa_results_expand);
	
	/*
	if (pb_check === true) {
		pn_nro_pagina = Math.trunc(pn_nro_row_seleccionado / pn_nro_rows_x_pagina);
		$('#' + ic_grid).dataTable().fnPageChange(pn_nro_pagina);
		fnc_grid_row_selected_click(ic_grid);
		ia_columns = [];
		ia_values = [];
	}
	*/
};

// ===============================================================================================================

var fc_table_id;
var fo_table;
var fr_row_data;
var fo_columns;
var fn_rowIndex;
var fn_colIndex;
var fc_colName;
var fc_cellData_fnc;
var fc_cellData_value;

function fnc_grid_update_draw (ic_grid, in_rowIndex, ia_columns, ia_values) {
	var table = $('#' + ic_grid).DataTable();
    var row = table.row(in_rowIndex).node();
	table.row(row).data(fnc_get_obj_assign(ia_columns, ia_values)).draw();
};

function fnc_GET_row_value (io_value) {
	var cellData = String(io_value);
	var cellData_p1 = "value='";
	var cellData_p2 = "'";
	if (cellData.indexOf('input') > -1) {
		cellData = cellData.substring(cellData.indexOf(cellData_p1) + cellData_p1.length, cellData.length);
		cellData = cellData.substring(0, cellData.indexOf(cellData_p2));
	}
	return cellData;
};

// Estad dos funciones mover al grupo de array
function fnc_get_obj_assign (ia_columns, ia_values) {
	var obj = {};
	//var pa_results = [];
	
	//obj = {};
	for (var b = 0; b < ia_columns.length; b++) {
		Object.assign(obj, {[$.trim(ia_columns[b])]: $.trim(ia_values[b])});
	}

	//ia_insert.push(obj);
	//console.log(ia_insert);
	//console.log(obj);
	
	return obj;
};
function fnc_add_Array_to_Array(ia_insert, ia_columns, ia_values) {
};





function fnShowHide(ic_grid, iCol, ib_value) {
    var oTable = $('#' + ic_grid).dataTable();
    oTable.fnSetColumnVis(iCol, ib_value);
};

/*
function fnShowHide(ic_grid, iCol) {
    var oTable = $('#' + ic_grid).dataTable();

    var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
    oTable.fnSetColumnVis( iCol, bVis ? false : true );
};
*/





















