/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		HTML																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fc_form_em_dir = "";
var fc_form_em_dir_TEMPORAL = " \
<div id='mdl_dir' class='modal modal-fixed-footer modal-find-standard row-fixed-2 modal-footer-simple width_55 height_90' data-button_close='out'> \
    <header class='modal_header'> \
		<div class='modal_header_inner'> \
			<h3 class='m-all-0'>Dirección</h3> \
		</div> \
    </header> \
	<!-- <span class='label label-warning' style='line-height: 20px; font-size: 13px; position: absolute; right: 15px; top: 202px;'>Actualizando</span> --> \
    <form id='form_direccion' onsubmit='return false;'> \
 		<div class='modal-content m-p-all-0' style='height: calc(100% - 271px) !important; margin-top: 152px !important;'> \
             <section class='section_form st-1 _fixed'> \
                <div class='row col-ft'> \
                    <div class='col s12'> \
                        <label>Persona</label> \
                    </div> \
                    <div class='col s3'> \
						<input placeholder='' value='' type='text' data-col='ccod_prs' data-vw readonly /> \
                    </div> \
                    <div class='col s9'> \
						<input placeholder='' value='' type='text' data-col='cdsc_prs' data-vw readonly /> \
                    </div> \
                </div> \
                <div class='row col-ft'> \
                    <div class='col s12'> \
                        <label>Dirección</label> \
						<input type='text' placeholder='' value='' data-col='cdsc_dir' data-hb_v='n' data-hb_n='n' data-hb_e='n' /> \
                    </div> \
                </div> \
            </section> \
            <section class='section_form st-1' style='margin-bottom: 0;'> \
				<div class='row ft_2 st-1 ft_sc' style='height: 48px;'> \
					<div class='col s12' style='height: 20px; padding-top: 5px;'> \
						<label class='col_label_head'>Detalles de la dirección</label> \
						<div class='separator'></div> \
					</div> \
					<div class='lks switch' style='margin-top: 5px;'> \
						<label> \
							<span>Estado</span> \
							<input type='checkbox' class='show_cest' data-col='cest' data-hb_v='n' data-hb_n='s' data-hb_e='s' /> \
							<span class='lever'></span> \
						</label> \
					</div> \
				</div> \
                <div class='row row-ft2'> \
					<div class='col s12'> \
						<div id='c_c_mdl_dir_bpdt' style='margin-top: 0px; margin-bottom: 7px;'> \
							<label> \
								<input type='checkbox' class='filled-in checkbox-left' data-col='bpdt' data-vs_v='n' data-vs_n='s' data-vs_e='s' data-hb_v='n' data-hb_n='s' data-hb_e='s' /> \
								<span>Predeterminado</span> \
							</label> \
						</div> \
                    </div> \
                </div> \
                <div class='row row-ft2'> \
                    <div class='col s4'> \
                        <label>Tipo de Vía</label> \
                        <select class='select2' data-col='dir_tpv' data-hb_v='n' data-hb_n='s' data-hb_e='s' data-zi='mdl_dir' required></select> \
                    </div> \
                    <div class='col s6'> \
                        <label>Descripción de Vía</label> \
                        <input type='text' class='ft_title' placeholder='' value='' data-col='cdsc_via' data-hb_v='n' data-hb_n='s' data-hb_e='s' required /> \
                    </div> \
                    <div class='col s2'> \
                        <label>Número</label> \
                        <input type='text' placeholder='' value='' data-col='cnum' data-clear='n' data-hb_v='n' data-hb_n='s' data-hb_e='s' required /> \
                    </div> \
                </div> \
                <div class='row row-ft2'> \
                    <div class='col s4'> \
						<label>Tipo de Zona</label> \
                        <select class='select2' data-col='dir_tpz' data-hb_v='n' data-hb_n='s' data-hb_e='s' data-zi='mdl_dir'></select> \
                    </div> \
                    <div class='col s8'> \
						<label>Descripción de Zona</label> \
                        <input type='text' class='ft_title' placeholder='' value='' data-col='cdsc_zon' data-hb_v='n' data-hb_n='s' data-hb_e='s' /> \
                    </div> \
                </div> \
                <div class='row row-ft2'> \
					<div class='col s4'> \
                        <label>Departamento</label> \
                        <input type='text' placeholder='' value='' data-col='cdsc_dir_dpt' data-hb_v='n' data-hb_n='n' data-hb_e='n' /> \
                    </div> \
                    <div class='col s4'> \
                        <label>Provincia</label> \
                        <input type='text' placeholder='' value='' data-col='cdsc_dir_prv' data-hb_v='n' data-hb_n='n' data-hb_e='n' /> \
                    </div> \
					<div class='col s4'> \
						<label data-lnk='_lnk_search_dst' data-hb_v='n' data-hb_n='s' data-hb_e='s'>Distrito</label> \
                        <input type='text' placeholder='' value='' data-col='cdsc_dir_dst' data-hb_v='n' data-hb_n='n' data-hb_e='n' /> \
                    </div> \
                </div> \
                <div class='row row-ft2'> \
                    <div class='col s12'> \
                        <label>Referencia</label> \
						<input type='text' class='ft_letter' placeholder='' value='' data-col='cref' data-hb_v='n' data-hb_n='s' data-hb_e='s' /> \
                    </div> \
                </div> \
                <div class='row row-ft2'> \
                    <div class='col s12'> \
                        <label>Observaciones</label> \
						<input type='text' class='ft_letter' placeholder='' value='' data-col='cobs' data-hb_v='n' data-hb_n='s' data-hb_e='s' /> \
                    </div> \
                </div> \
				<!-- \
				<div class='row ft_2_textarea st-1'> \
					<div class='col s12 ft_sc'> \
						<div class='col s12'> \
							<label>Observaciones</label> \
							<textarea placeholder='' class='lks materialize-textarea' data-col='tobs' data-hb_v='n' data-hb_n='s' data-hb_e='s'></textarea> \
						</div> \
					</div> \
				</div> \
				--> \
				<div class='row_dynamic_title'> \
					<div class='row row-ft2'> \
						<div class='col s12'> \
							<label class='label_header' data-lnk='_lnk_add_row_dir_det' data-hb_v='n' data-hb_n='s' data-hb_e='s'>Otros detalles de la dirección</label> \
							<div class='separator'></div> \
						</div> \
					</div> \
					<!-- \
					<div class='row ft_2 st-1 ft_sc'> \
						<div class='col s12'> \
							<label class='col_label_head' data-lnk='_lnk_add_row_dir_det' data-hb_v='n' data-hb_n='s' data-hb_e='s'>Otros detalles de la dirección</label> \
							<div class='sp'></div> \
						</div> \
					</div> \
					--> \
				</div> \
				<!-- \
				<div class='row ft_2 st-1 data-row_head display_none'> \
					<div class='col s12 ft_sc'> \
						<div class='col s6'> \
							<label data-col_dsc='it_tip'>Detalle</label> \
						</div> \
						<div class='col s6' data-col_before='s5' data-col_after='s6'> \
							<label data-col_dsc='it_tip'>Descripción</label> \
						</div> \
					</div> \
				</div> \
				--> \
				<div class='ft_sc' data-rows='dir_det'></div> \
            </section> \
			<!-- \
			<section class='section_form st-1' style='margin-bottom: 0; margin-top: 15px;'> \
				<div class='row ft_2 st-1 ft_sc'> \
					<div class='col s12'> \
						<label class='col_label_head' data-lnk='_lnk_add_row_dir_det' data-hb_v='n' data-hb_n='s' data-hb_e='s'>Otros detalles de la dirección</label> \
						<div class='sp'></div> \
					</div> \
				</div> \
				<div class='row ft_2 st-1 data-row_head display_none'> \
					<div class='col s12 ft_sc'> \
						<div class='col s6'> \
							<label data-col_dsc='it_tip'>Detalle</label> \
						</div> \
						<div class='col s6' data-col_before='s5' data-col_after='s6'> \
							<label data-col_dsc='it_tip'>Descripción</label> \
						</div> \
					</div> \
				</div> \
				<div data-rows='dir_det'></div> \
			</section> \
			--> \
        </div> \
		<div class='modal-footer'> \
			<button id='btn_mdl_dir_aceptar' type='button' class='button-1 waves-effect' onclick='fnc_mdl_dir_aceptar()' data-vs_v='n' data-vs_n='s' data-vs_e='s'>Aceptar</button> \
			<button type='button' class='button-1 waves-effect modal-close'>Cancelar</button> \
		</div> \
	</form> \
</div> \
";

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																VARIABLES DE FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fc_frm_dt_dir = 'form_direccion';
var gc_prefijo__em_dir__em_prs__ccodigo = 'EM_PRS-'; // Obtener este valor de BD, mediante select

var fc_em_dir__em_prs__ccodigo = '';
var fn_ccod_dir = 0;

var fa_em_dir = [];
var fa_em_dir_tmp = [];
var fa_em_dir_det = [];
var fa_em_dir_det_tmp = [];


// Variables
var jsb_mdl_dir__load_select = false;

var cc_cdsc_dir = '';

var cc_via = '';
var jsc_mdl_dir__cabr_dirtpv = '';
var cc_cdsc_via = '';
var cc_cnum = '';

var cc_zona = '';
var jsc_mdl_dir__cabr_dirtpz = '';
var cc_cdsc_zon = '';

var cc_ubdst = '';
var jsc_mdl_dir__ccod_ubdst = 0;
var cc_cdsc_ubdst = '';
var cc_cdsc_ubprv = '';
var cc_cdsc_ubdpt = '';

var cc_dir_cref_vw = '';
var cc_dir_cref = '';






var pa_results_dir = [];
var fa_results_dir_det = [];

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES DEL PROCESO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_html_em_dir(ic_container) {

	$(ic_container).append(fc_form_em_dir);

	fnc_create_mdl_search(
							'grid_dir_dst',
							'out',
							'/home/lq_usp_em_ct_dir_dst_list/?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=A',
							'', '', false, false, true, 'height_90 width_80', 'Seleccionar distrito'
							);

	$(
		Obj_Col(fc_frm_dt_dir, 'cdsc_via', 'input') + ', ' +
		Obj_Col(fc_frm_dt_dir, 'cnum', 'input') + ', ' +
		Obj_Col(fc_frm_dt_dir, 'cdsc_zon', 'input') + ', ' +
		Obj_Col(fc_frm_dt_dir, 'cref', 'input')
	).on('keyup', function() {
		f_mdl_dir_generar_direccion();
	});

	$(
		Obj_Col(fc_frm_dt_dir, 'dir_tpv') + ', ' +
		Obj_Col(fc_frm_dt_dir, 'dir_tpz')
	).change(function () {
		if (jsb_mdl_dir__load_select === true){return;}
		f_mdl_dir_generar_direccion();
    });

};

function f_mdl_dir_generar_direccion()
{
	// Tipo de via
	var lc_ccod_select =  $(Obj_Col(fc_frm_dt_dir, 'dir_tpv')).val();
	if (lc_ccod_select !== '') {
		var pc_url = '/home/lq_usp_em_ct_dir_tpv_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + '&ic_ccod_dir_tpv=' + lc_ccod_select + '&ic_load_BD=';
		jsc_mdl_dir__cabr_dirtpv = fnc_ajax_extraer_dato(pc_url, 'cabr_dir_tpv');
	}
	else {
		jsc_mdl_dir__cabr_dirtpv = '';
	}
	
	// Tipo de zona
	var lc_ccod_select =  $(Obj_Col(fc_frm_dt_dir, 'dir_tpz')).val();
	if (lc_ccod_select !== '') {
		var pc_url = '/home/lq_usp_em_ct_dir_tpz_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + '&ic_ccod_dir_tpz=' + lc_ccod_select + '&ic_load_BD=';
		jsc_mdl_dir__cabr_dirtpz = fnc_ajax_extraer_dato(pc_url, 'cabr_dir_tpz');
	}
	else {
		jsc_mdl_dir__cabr_dirtpz = '';
	}
	
	// ::::::::::::::: Seteo de valores :::::::::::::::
	cc_cdsc_via = $(Obj_Col(fc_frm_dt_dir, 'cdsc_via')).val();
	cc_cnum = $(Obj_Col(fc_frm_dt_dir, 'cnum')).val();
	cc_cdsc_zon = $(Obj_Col(fc_frm_dt_dir, 'cdsc_zon')).val();
	cc_dir_cref = $(Obj_Col(fc_frm_dt_dir, 'cref')).val();
	
	cc_cdsc_ubdpt = $(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_dpt')).val();
	cc_cdsc_ubprv = $(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_prv')).val();
	cc_cdsc_ubdst = $(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_dst')).val();

	// :::::::::::::::::: Direccion :::::::::::::::::::
	// Via
	//cc_via = '';
	cc_via = jsc_mdl_dir__cabr_dirtpv + ' ' + cc_cdsc_via + ' ' + cc_cnum;
	
	// Zona
	cc_zona = '';
	if (jsc_mdl_dir__cabr_dirtpz !== '' || cc_cdsc_zon !== '') {
		cc_zona = ' - ' + jsc_mdl_dir__cabr_dirtpz + ' ' + cc_cdsc_zon;
	}
	
	// Distrito
	cc_ubdst = '';
	if (cc_cdsc_ubdst !== '') {cc_ubdst = ', ' + cc_cdsc_ubdst + ' - ' + cc_cdsc_ubprv + ' - ' + cc_cdsc_ubdpt;}
	
	// Referencia
	cc_dir_cref_vw = '';
	if (cc_dir_cref !== '')	{cc_dir_cref_vw = ' (Ref.: ' + cc_dir_cref + ')';}
	
	// Detalles
	var pc_view_em_dir_det = fnc_em_dir_det('View');
	if (pc_view_em_dir_det !== '') {pc_view_em_dir_det = ' ' + pc_view_em_dir_det;}
	
	// Direccion
	cc_cdsc_dir = cc_via + cc_zona + pc_view_em_dir_det + cc_dir_cref_vw + cc_ubdst;
	
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir')).val(cc_cdsc_dir);
};

function fnc_em_dir_det(in_opcion)
{
	if (in_opcion === 'RowData')
	{
		var pc_RowData_em_dir_det = '';
		// $( "[id^='s_ccod_dir_det_'], [id^='i_cdsc_dir_det_']" ).each(function () {
		$( "select[data-col^='dir_det_'], input[data-col^='cdsc_dir_det_']" ).each(function () {
			
			var obj_type_ = $(this)[0].tagName.toLowerCase();
		
			if (obj_type_ === 'select') {
				pc_RowData_em_dir_det += $(this).val() + pl_sep_col;
			}
			else if (obj_type_ === 'input') {
				pc_RowData_em_dir_det += $(this).val() + pl_sep_fil;
			}
		});
		return pc_RowData_em_dir_det;
	}
	else if (in_opcion === 'View')
	{
		var pc_cdsc_dir__em_dir_det = '';
		// $( "[id^='s_ccod_dir_det_'], [id^='i_cdsc_dir_det_']" ).each(function () {
		$( "select[data-col^='dir_det_'], input[data-col^='cdsc_dir_det_']" ).each(function () {
		
			//var obj_ = $(this).attr('id');
			var obj_type_ = $(this)[0].tagName.toLowerCase();

			if (obj_type_ === 'select') {
				if ($.trim($(this).val()) !== '')
				{
					var pc_url = '/home/lq_usp_em_ct_dir_det_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_ccod_dir_det=' + $(this).val() + '&ic_load_BD=';
					var pc_cabr_dir_det = fnc_ajax_extraer_dato(pc_url, 'cabr_dir_det');

					pc_cdsc_dir__em_dir_det += $.trim(pc_cabr_dir_det) + ', ';
				}
			}
			else if (obj_type_ === 'input') {
				if ($.trim($(this).val()) !== '') 
				{
					pc_cdsc_dir__em_dir_det = pc_cdsc_dir__em_dir_det.substring(0, pc_cdsc_dir__em_dir_det.length - 2);
					pc_cdsc_dir__em_dir_det += ' ' + $.trim($(this).val()) + ', ';
				}
			}
		});
		
		pc_cdsc_dir__em_dir_det = pc_cdsc_dir__em_dir_det.substring(0, pc_cdsc_dir__em_dir_det.length - 2);
		if (pc_cdsc_dir__em_dir_det.length > 0){pc_cdsc_dir__em_dir_det = '[' + $.trim(pc_cdsc_dir__em_dir_det) + ']';}

		return pc_cdsc_dir__em_dir_det;
	}

};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::															   TRANSACCIONES - DIRECCION															::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_nueva_dir() {

	fnc_frm_objs_habilitar(fc_frm_dt_dir, 'n');
	// fnc_inputs_cargar_caracteristicas(fc_frm_dt_dir, '');
	
	// f_valores_predeterminados_form__em_dir();
	fnc_frm_objs_validar([fc_frm_dt_dir]);
	
	
	/*
	//jc_grid_row_opts = jc_grid_row_opts_n;

	jsb_mdl_dir__load_select = true;
	
	// f_nuevo_form__em_dir();
	
	fnc_frm_objs_habilitar('form_direccion', 'n');
	fnc_inputs_cargar_caracteristicas('form_direccion', '');
	
	f_valores_predeterminados_form__em_dir();
	fnc_frm_objs_validar(['form_direccion']);

	jsb_mdl_dir__load_select = false;
	*/
	
	
	
	
	// function f_valores_predeterminados_form__em_dir() {
		
	$(Obj_Col(fc_frm_dt_dir, 'ccod_prs')).val($(Obj_Col(fc_frm_cb, 'ccod_prs')).val());
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_prs')).val($(Obj_Col(fc_frm_cb, 'cdsc_prs')).val());

	fnc_checkbox_set_value(fc_frm_dt_dir, 'cest', true);
	
	fnc_checkbox_set_value(fc_frm_dt_dir, 'bpdt', true);	
	//$(Obj_Col(fc_frm_dt_dir, 'bpdt')).prop('checked', true);
	//$(Obj_Col(fc_frm_dt_dir, 'bpdt')).attr('checked', true);

	jsc_mdl_dir__ccod_ubdst = '';
	
	fnc_row_dir_det_nuevo();
	
	fc_row_dir_input_id = '';
	fc_row_dir_input_id_value = '';
	
	
	
	
	$('#mdl_dir').modal('open');
	
};


var fc_row_dir_input_id = '';

var fc_row_dir_input_id_value = '';

var fc_row_dir_input_ccod = 'ccod_dir_';
var fc_row_dir_input_cdsc = 'cdsc_dir_';

//var fc_row_dir_button_remove = '_lnk_row_dir_remove_';
//var fc_row_dir_button_remove = '_row_dir_remove_';
var fc_row_dir_button_remove = '_row_remove_dir_';

function fnc_edit_row_dir(ic_object) {

	$(Obj_Col(fc_frm_dt_dir, 'ccod_prs')).val($(Obj_Col(fc_frm_cb, 'ccod_prs')).val());
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_prs')).val($(Obj_Col(fc_frm_cb, 'cdsc_prs')).val());
	
	// ========================================================================
	// ver como solucionas esto
	/*
	if (fb_em_dir__edit === true) {
		// fb_em_dir__edit = false;
		fnc_frm_objs_habilitar(fc_frm_dt_dir, 'e');
		// fnc_frm_objs_validar([fc_frm_dt_dir]);
	}
	else if (fb_em_dir__edit === false) {
		fnc_frm_objs_habilitar(fc_frm_dt_dir, 'v');
	}
	*/
	
	if (jc_est_form === 'n' || jc_est_form === 'e') {
		fnc_frm_objs_habilitar(fc_frm_dt_dir, 'e');
	}
	else if (jc_est_form === 'v') {
		fnc_frm_objs_habilitar(fc_frm_dt_dir, 'v');
	}
	
	// ==================================================================================
	
	
		
	var data_col = $(ic_object).data('col');
	if (data_col === undefined) {data_col = '';}
	fc_row_dir_input_id = data_col.substring(data_col.indexOf(fc_row_dir_input_cdsc) + fc_row_dir_input_cdsc.length, data_col.length);
	fc_row_dir_input_id_value = $(Obj_Col(fc_frm_cb, fc_row_dir_input_ccod + fc_row_dir_input_id)).val();
	
	// Agrega filas de impuestos del it por tipo de monedas del item a actualizar
	var pa_columns = ['ccod_dir'];
	var pa_values = [fc_row_dir_input_id_value];
	fa_em_dir_tmp = fnc_Array_Filtrar_por_columnas(fa_em_dir, pa_columns, pa_values);
	fa_em_dir_det_tmp = fnc_Array_Filtrar_por_columnas(fa_em_dir_det, pa_columns, pa_values);
	// nota: validar si estos tmp pueden ser locales
// ===================================================================================
// ===================================================================================

						

	pi_row_data = fa_em_dir_tmp[0];

	// :::::::::::::::	em_dir - Inicio	:::::::::::::::
	jsb_mdl_dir__load_select = true;
	var pn_ccod_dir = pi_row_data.ccod_dir;
	$(Obj_Col(fc_frm_dt_dir, 'ccod_dir')).val(fnc_formatear_enumerador(pi_row_data.ccod_dir));
	
	var pc_em_dir__cest = pi_row_data.cest;
	var pb_em_dir__cest;
	//if (parseInt(pc_em_dir__cest) === 1) {pb_em_dir__cest = true;}
	if (pc_em_dir__cest === fc_ct_cest_Activo) {pb_em_dir__cest = true;}
	else {pb_em_dir__cest = false;}
	fnc_checkbox_set_value(fc_frm_dt_dir, 'cest', pb_em_dir__cest);
	//$(Obj_Col(fc_frm_dt_dir, 'cest')).prop('checked', pb_em_dir__cest).trigger('change');
	//$(Obj_Col(fc_frm_dt_dir, 'cest')).attr('checked',pb_em_dir__cest).trigger('change');
	
	var pb_em_dir_bpdt = pi_row_data.bpdt;
	if (pb_em_dir_bpdt === 'True') {
		fnc_checkbox_set_value(fc_frm_dt_dir, 'bpdt', true);
		//$(Obj_Col(fc_frm_dt_dir, 'bpdt')).prop('checked', true);
		//$(Obj_Col(fc_frm_dt_dir, 'bpdt')).attr('checked',true);
	}
	else {
		fnc_checkbox_set_value(fc_frm_dt_dir, 'bpdt', false);
		//$(Obj_Col(fc_frm_dt_dir, 'bpdt')).prop('checked', false);
		//$(Obj_Col(fc_frm_dt_dir, 'bpdt')).attr('checked',false);
	}

	$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir')).val(pi_row_data.cdsc_dir);
	$(Obj_Col(fc_frm_dt_dir, 'cnum')).val(pi_row_data.cnum);
	$(Obj_Col(fc_frm_dt_dir, 'dir_tpv')).val(pi_row_data.ccod_dir_tpv).trigger('change');
	$(Obj_Col(fc_frm_dt_dir, 'i_s_dir_tpv')).val($(Obj_Col(fc_frm_dt_dir, 'dir_tpv')).find(":selected").text());
	// alert($(Obj_Col(fc_frm_dt_dir, 'dir_tpv')).find(":selected").text());
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_via')).val(pi_row_data.cdsc_via);
	$(Obj_Col(fc_frm_dt_dir, 'dir_tpz')).val(pi_row_data.ccod_dir_tpz).trigger('change');
	$(Obj_Col(fc_frm_dt_dir, 'i_s_dir_tpz')).val($(Obj_Col(fc_frm_dt_dir, 'dir_tpz')).find(":selected").text());
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_zon')).val(pi_row_data.cdsc_zon);
	jsc_mdl_dir__ccod_ubdst = pi_row_data.ccod_dir_dst;
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_dpt')).val(pi_row_data.cdsc_dir_dpt);
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_prv')).val(pi_row_data.cdsc_dir_prv);
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_dst')).val(pi_row_data.cdsc_dir_dst);
	$(Obj_Col(fc_frm_dt_dir, 'cref')).val(pi_row_data.cref);
	$(Obj_Col(fc_frm_dt_dir, 'cobs')).val(pi_row_data.cobs);
	jsb_mdl_dir__load_select = false;







	// :::::::::::::::	em_dir_det - Inicio	:::::::::::::::
	// var pa_columns = ['ccod_dir'];
	// var pa_values = [fc_row_dir_input_id_value];
	// fa_em_dir_det_tmp = fnc_Array_Filtrar_por_columnas(fa_em_dir_det, pa_columns, pa_values);
	
	fn_id_row_dir_det = 0;
	$("div[data-row*='" + fc_div_row_dir_det + "']").remove();
	
	for (var i = 0; i < fa_em_dir_det_tmp.length; i++) {
		fnc_add_div_row_dir_Det();
		$(Obj_Col(fc_frm_dt_dir, 'dir_det_' + String(fn_id_row_dir_det))).val(fa_em_dir_det_tmp[i].ccod_dir_det).trigger('change');
		$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_det_' + fn_id_row_dir_det)).val(fa_em_dir_det_tmp[i].cdsc_dir_det);
	}
	fnc_row_remove(fc_div_row_dir_det, fc_div_head_row_dir_det);
	// :::::::::::::::	em_dir_det - Fin	:::::::::::::::



// ===================================================================================
// ===================================================================================
// ===================================================================================

	
	
	
	if (jc_est_form === 'n' || jc_est_form === 'e') {
		fnc_frm_objs_habilitar(fc_frm_dt_dir, 'e');
		fnc_frm_objs_validar([fc_frm_dt_dir]);
	}
	else if (jc_est_form === 'v') {
		fnc_frm_objs_habilitar(fc_frm_dt_dir, 'v');
	}
	
	/*
	if (fb_em_dir__edit === true) {
		fb_em_dir__edit = false;
		fnc_frm_objs_habilitar(fc_frm_dt_dir, 'e');
		fnc_frm_objs_validar([fc_frm_dt_dir]);
	}
	else if (fb_em_dir__edit === false) {
		fnc_frm_objs_habilitar(fc_frm_dt_dir, 'v');
	}
	*/
	
	$('#mdl_dir').modal('open');
};


function fnc_mdl_dir_aceptar() {

	//validar si se usa esta funcion
	//var pc_RowData_em_dir_det = fnc_em_dir_det('RowData');
	
	
	// ::::::::::::: em_dir - Inicio :::::::::::::
	// var pn_ccod_dir = 0;
	var pc_cest = fc_ct_cest_Activo;
	var pb_bpdt = 1;
	
	var pn_ccod_dir_tpv = 0;
	var pn_ccod_dir_tpz = 0;
	var pn_ccod_dir_dst = 0;
	
	// if ($('#i_mdl_dir_ccod_dir').val() !== ''){pn_ccod_dir = parseInt($('#i_mdl_dir_ccod_dir').val());}
	if ($(Obj_Col(fc_frm_dt_dir, 'cest')).not(':checked').val() != null ) {pc_cest = fc_ct_cest_Inactivo;}
	if ($(Obj_Col(fc_frm_dt_dir, 'bpdt')).not(':checked').val() != null ) {pb_bpdt = 0;}
	
	if ($(Obj_Col(fc_frm_dt_dir, 'dir_tpv')).val() !== '') {pn_ccod_dir_tpv = $(Obj_Col(fc_frm_dt_dir, 'dir_tpv')).val();}
	if ($(Obj_Col(fc_frm_dt_dir, 'dir_tpz')).val() !== '') {pn_ccod_dir_tpz = $(Obj_Col(fc_frm_dt_dir, 'dir_tpz')).val();}
	if ((jsc_mdl_dir__ccod_ubdst).toString() === '') {jsc_mdl_dir__ccod_ubdst = 0;}




	/*
	VALIDAR SI SE USARA ESTE PROCESO
	var pp_url = '/home/slq_usp_fa_fa_deleteA';
		pp_url += '&ic_RowData_em_dir_det=' + pc_RowData_em_dir_det;
	*/	

	var pn_row_dir_id = 0;

	if (fc_row_dir_input_id !== '') {
		// fn_id_row_dir = fc_row_dir_input_id;
		pn_row_dir_id = fc_row_dir_input_id;
	}
	else if (fc_row_dir_input_id === '') {		
		fnc_add_div_row_dir();
		pn_row_dir_id = fn_id_row_dir;
		fc_row_dir_input_id_value = fn_id_row_dir;
	}


	/*
	// $(Obj_Col(fc_frm_cb_em_prs, 'ccod_dir_' + pn_row_dir_id)).val(pn_ccod_dir);
	$(Obj_Col(fc_frm_cb_em_prs, 'ccod_dir_' + pn_row_dir_id)).val(fc_row_dir_input_id_value);	
	$(Obj_Col(fc_frm_cb_em_prs, 'cdsc_dir_' + pn_row_dir_id)).val($(Obj_Col(fc_frm_dt_dir, 'cdsc_dir')).val());
	*/
	
	// $(Obj_Col(fc_frm_cb, 'ccod_dir_' + pn_row_dir_id)).val(pn_ccod_dir);
	$(Obj_Col(fc_frm_cb, 'ccod_dir_' + pn_row_dir_id)).val(fc_row_dir_input_id_value);	
	$(Obj_Col(fc_frm_cb, 'cdsc_dir_' + pn_row_dir_id)).val($(Obj_Col(fc_frm_dt_dir, 'cdsc_dir')).val());

	fnc_row_dir_array_remove(fc_row_dir_input_id_value);

	fa_em_dir.push({
						'ccodigo': 			fc_em_dir__em_prs__ccodigo,
						'ccod_dir': 		parseInt(fc_row_dir_input_id_value),
						'cest': 			pc_cest,
						'bpdt': 			pb_bpdt,
						'cdsc_dir': 		$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir')).val(),
						'ccod_dir_tpv': 	pn_ccod_dir_tpv,
						'cdsc_via': 		$(Obj_Col(fc_frm_dt_dir, 'cdsc_via')).val(),
						'cnum': 			$(Obj_Col(fc_frm_dt_dir, 'cnum')).val(),
						'ccod_dir_tpz': 	pn_ccod_dir_tpz,
						'cdsc_zon': 		$(Obj_Col(fc_frm_dt_dir, 'cdsc_zon')).val(),
						'ccod_dir_dst': 	jsc_mdl_dir__ccod_ubdst,
						'cref': 			$(Obj_Col(fc_frm_dt_dir, 'cref')).val(),
						'cobs': 			$(Obj_Col(fc_frm_dt_dir, 'cobs')).val(),
						'cdsc_dir_tpv': 	$(Obj_Col(fc_frm_dt_dir, 'dir_tpv')).find(":selected").text(),
						'cabr_dir_tpv': 	jsc_mdl_dir__cabr_dirtpv,
						'cdsc_dir_tpz': 	$(Obj_Col(fc_frm_dt_dir, 'dir_tpz')).find(":selected").text(),
						'cabr_dir_tpz': 	jsc_mdl_dir__cabr_dirtpz,
						'cdsc_dir_dst': 	$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_dst')).val(),
						'cdsc_dir_prv':		$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_prv')).val(),
						'cdsc_dir_dpt':		$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_dpt')).val(),
						'group_form_fact':	'Direcciones'
					});

	// ==================================================================================
	var pn_ccod_dir_det = 0;
	var pc_cdsc_dir_det = '';

	var pn_RowData_total_cols = 2;
	var pn_RowData_cont_cols = 0;

	// var pc_RowData_em_dir_det = '';
	
	$( "select[data-col^='dir_det_'], input[data-col^='cdsc_dir_det_']" ).each(function () {
		pn_RowData_cont_cols += 1;
		
		var obj_type_ = $(this)[0].tagName.toLowerCase();
	
		if (obj_type_ === 'select') {
			// pc_RowData_em_dir_det += $(this).val() + pl_sep_col;
			pn_ccod_dir_det = $(this).val();
		}
		else if (obj_type_ === 'input') {
			// pc_RowData_em_dir_det += $(this).val() + pl_sep_fil;
			pc_cdsc_dir_det = $(this).val();
		}
		
		if (pn_RowData_cont_cols === pn_RowData_total_cols) {
			fa_em_dir_det.push({
									'ccod_emp': 	gc_ccod_emp,
									'ccodigo':		fc_em_dir__em_prs__ccodigo,
									'ccod_dir': 	parseInt(fc_row_dir_input_id_value),
									'ccod_dir_det': pn_ccod_dir_det,
									'cdsc_dir_det': pc_cdsc_dir_det
								});
						
			pn_RowData_cont_cols = 0;
		}

	});
	// ==================================================================================

	// fc_row_dir_input_id = '';
	$('#mdl_dir').modal('close');
};

// Eliminar - Inicio
function fnc_row_dir_remove (ic_object) {
	var data_col = $(ic_object).data('col');
	if (data_col === undefined) {data_col = '';}
	fc_row_dir_input_id = data_col.substring(data_col.indexOf(fc_row_dir_button_remove) + fc_row_dir_button_remove.length, data_col.length);
	fc_row_dir_input_id_value = $(Obj_Col(fc_frm_cb, fc_row_dir_input_ccod + fc_row_dir_input_id)).val();

	fnc_row_dir_array_remove(fc_row_dir_input_id_value);
};

function fnc_row_dir_array_remove(ic_row_dir_input_id_value) {
	var pa_columns = ['ccod_dir'];
	var pa_values = [ic_row_dir_input_id_value];
	fa_em_dir = fnc_Array_Eliminar_por_columnas(fa_em_dir, pa_columns, pa_values);
	fa_em_dir_det = fnc_Array_Eliminar_por_columnas(fa_em_dir_det, pa_columns, pa_values);
};
// Eliminar - Fin

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	ROWS: DIRECCION																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fc_div_head_row_dir = ''; // '#title_row_dir'
var fc_div_row_dir = 'row_dir_';
var fn_id_row_dir = 0;

function fnc_row_dir_nuevo() {
	fn_id_row_dir = 0;
	$("div[data-row*='" + fc_div_row_dir + "']").remove();
	fnc_row_remove(fc_div_row_dir, fc_div_head_row_dir);
};

function fnc_add_row_dir() {
	$(fc_div_head_row_dir).removeClass('display_none');
	
	fnc_add_div_row_dir();
};

function fnc_add_div_row_dir () {
	
	fn_id_row_dir = parseInt(fn_id_row_dir) + 1;
	fo_div_row = $('<div data-row="' + fc_div_row_dir + String(fn_id_row_dir) + '" class="row ft_2_data-row" />');
	
	fo_div_row_object_1 = $('<div class="col s3 display_none"><input type="text" data-col="ccod_dir_' + fn_id_row_dir + '" readonly /></div>');
	// fo_div_row_object_1 = $('<div class="col s3 LINEA TEMPORAL"><input type="text" data-col="ccod_dir_' + fn_id_row_dir + '" readonly /></div>');

	if (jc_est_form === 'n' || jc_est_form === 'e') {pc_string = "<div class='col s11'>";}
	else if (jc_est_form === 'v') {pc_string = "<div class='col s12' data-col_before='s11' data-col_after='s12'>";}
	fo_div_row_object_2 = $(pc_string + '<input type="text" class="lks link" data-lnk="_lnk_edit_row_dir" data-col="cdsc_dir_' + fn_id_row_dir + '" readonly /></div>');
	
	//data-col="_lnk_row_dir_remove_' + fn_id_row_dir + '"
	//data-lnk="_lnk_row_dir_remove"
	//fnc_div_row_fo_button_remove('_lnk_row_remove_dir_' + String(fn_id_row_dir), '_lnk_row_dir_remove', fc_div_row_dir, fc_div_head_row_dir, '');
	fnc_div_row_fo_button_remove('_row_remove_dir_' + String(fn_id_row_dir), '_lnk_row_dir_remove', fc_div_row_dir, fc_div_head_row_dir, '');

	fo_div_row.append(fo_div_row_object_1);
	fo_div_row.append(fo_div_row_object_2);
	fo_div_row.append(fo_div_row_button_remove);
	$("div[data-rows='dir']").append(fo_div_row);
	
	// fnc_set_data_lnk('_lnk_row_remove_dir_' + fn_id_row_dir); // Ultimo Comentado 09/12/2020
	//fnc_set_data_lnk('_row_remove_dir_' + fn_id_row_dir); // Ultimo Comentado 09/12/2020
	//fnc_set_data_lnk('_lnk_row_remove_dir_' + fn_id_row_dir); // cambio ultimo 14/02/2021 // creo que esto no sirve.. solo de referencia para '_lnk_row_dir_remove'
	fnc_set_data_lnk('_lnk_row_dir_remove', "[data-col='" + '_row_remove_dir_' + String(fn_id_row_dir) + "']"); // cambio ultimo 14/02/2021
	
	
	
	
	// Caracteristicas del input
	//fnc_inputs_cargar_caracteristicas(fc_frm_cb, 'ntasa_imp_' + fn_id_row_dir);
	
	// Caracteristicas del select
	/*
	fnc_selects_cargar_caracteristicas(fc_frm_cb, 'imp_' + fn_id_row_dir);
	f_select_input(fc_frm_cb, 'hb', $(Obj_Col(fc_frm_cb, 'imp_' + fn_id_row_dir)), 'n');
	f_load_select_ajax(fc_frm_cb, 'imp_' + fn_id_row_dir, 'ccod_imp', 'cdsc_imp', '/home/lq_usp_co_ct_imp_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_imp=' + '&ic_cest=' + fc_ct_cest_Activo + '&ic_load_BD=', false, '');
	*/
	
	fnc_set_data_lnk('cdsc_dir_' + fn_id_row_dir); // temporal, se debe solo agregar esa propiedad al  label y no de  nuevo a todos
};

function fnc_add_rows_dir() {
	fa_em_dir = fnc_Array_Filtrar_por_columnas(pa_results_dir, ['ccodigo'], [fc_em_dir__em_prs__ccodigo]);
	fa_em_dir_det = fnc_Array_Filtrar_por_columnas(fa_results_dir_det, ['ccodigo'], [fc_em_dir__em_prs__ccodigo]);

	fn_id_row_dir = 0;
	$("div[data-row*='" + fc_div_row_dir + "']").remove();

	var pn_row_dir_id_aux = 0;
	for (var i = 0; i < fa_em_dir.length; i++) {
		fnc_add_div_row_dir();
	
		$(Obj_Col(fc_frm_cb, 'ccod_dir_' + fn_id_row_dir)).val(fa_em_dir[i].ccod_dir);
		$(Obj_Col(fc_frm_cb, 'cdsc_dir_' + fn_id_row_dir)).val(fa_em_dir[i].cdsc_dir);
		
		if (pn_row_dir_id_aux < parseInt(fa_em_dir[i].ccod_dir)) {
			pn_row_dir_id_aux = parseInt(fa_em_dir[i].ccod_dir);
		}
	}
	fnc_row_remove(fc_div_row_dir, fc_div_head_row_dir);
	fn_id_row_dir = pn_row_dir_id_aux;
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																ROWS: DETALLES DE DIRECCION															::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fc_div_head_row_dir_det = ''; // '#title_row_dir_det';
var fc_div_row_dir_det = 'row_dir_det_';
var fn_id_row_dir_det = 0;

function fnc_row_dir_det_nuevo() {
	fn_id_row_dir_det = 0;
	$("div[data-row*='" + fc_div_row_dir_det + "']").remove();
	//fnc_row_remove(fc_div_row_dir_det, fc_div_head_row_dir_det);
};

function fnc_add_row_dir_det () {
	$(fc_div_head_row_dir_det).removeClass('display_none');

	fnc_add_div_row_dir_Det();

	f_obj_validar_vacio(fc_frm_dt_dir, 'dir_det_' + fn_id_row_dir_det, 'select', '');
	f_obj_validar_vacio(fc_frm_dt_dir, 'cdsc_dir_det_' + fn_id_row_dir_det, 'input', '');
};

function fnc_button_remove_post_row_dir_det () {
	f_mdl_dir_generar_direccion();
};

function fnc_add_div_row_dir_Det ()
{
	fn_id_row_dir_det = fn_id_row_dir_det + 1;
	fo_div_row = $('<div data-row="' + fc_div_row_dir_det + String(fn_id_row_dir_det) + '" class="row ft_2_data-row" />');

	if (jc_est_form === 'n' || jc_est_form === 'e') {pc_string = "<div class='col s6'>";}
	else if (jc_est_form === 'v') {pc_string = "<div class='col s7' data-col_before='s6' data-col_after='s7'>";}
	fo_div_row_object_1 = $(pc_string + '<select class="select2 s2" data-col="dir_det_' + fn_id_row_dir_det + '" data-dsc="Detalle de dirección" data-allow-clear="false" data-hb_v="n" data-hb_n="s" data-hb_e="s" data-zi="mdl_dir" required></select></div>');
	
	fo_div_row_object_2 = $('<div class="col s5"><input type="text" class="lks ft_upper" data-col="cdsc_dir_det_' + fn_id_row_dir_det + '" data-hb_v="n" data-hb_n="s" data-hb_e="s" required /></div>');
	
	fnc_div_row_fo_button_remove('', '_lnk_row_remove_dir_det_' + String(fn_id_row_dir_det), fc_div_row_dir_det, fc_div_head_row_dir_det, '1');
	
	fo_div_row.append(fo_div_row_object_1);
	fo_div_row.append(fo_div_row_object_2);
	fo_div_row.append(fo_div_row_button_remove);
	$("div[data-rows='dir_det']").append(fo_div_row);
	
	// Caracteristicas del input
	fnc_inputs_cargar_caracteristicas(fc_frm_dt_dir, 'cdsc_dir_det_' + fn_id_row_dir_det);
	
	// Caracteristicas del select
	fnc_selects_cargar_caracteristicas(fc_frm_dt_dir, 'dir_det_' + fn_id_row_dir_det);
	f_select_input(fc_frm_dt_dir, 'hb', $(Obj_Col(fc_frm_dt_dir, 'dir_det_' + fn_id_row_dir_det)), 'n');
	f_load_select_ajax(
						fc_frm_dt_dir, 'dir_det_' + fn_id_row_dir_det, 'ccod_dir_det', 'cdsc_dir_det',
						'/home/lq_usp_em_ct_dir_det_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_cest=' + fc_ct_cest_Activo + '&ic_ccod_dir_det=' + '&ic_load_BD=',
						false, ''
						);

	//$('#' + 'i_cdsc_dir_det_' + pn_id + ':not([readonly]):required').on('input change', function (e) {
	// $('#' + 'i_cdsc_dir_det_' + pn_id + ':not([readonly])').on('input change', function (e) {
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_det_' + fn_id_row_dir_det) + ':not([readonly])').on('input change', function (e) {
		f_mdl_dir_generar_direccion();
	});
	
	//$('#' + 's_ccod_dir_det_' + pn_id + ':required').change(function() {
	// $('#' + 's_ccod_dir_det_' + pn_id).change(function() {
	$(Obj_Col(fc_frm_dt_dir, 'dir_det_' + fn_id_row_dir_det)).change(function() {
		f_mdl_dir_generar_direccion();
	});

	
	
	/*

	// $('#mdl_dir .modal-content').scrollTop();
	
	// scrollTop: $('#mdl_dir').offset().top;
	scrollTop: $('#mdl_dir .modal-content').scrollTop()
	*/
};

function fnc_add_rows_dir_det () {
	
};















// ============================================================================================
// ============================================================================================
// ============================================================================================
// ============================================================================================
// ============================================================================================
// ============================================================================================
// ============================================================================================

function fnc_add_grid_dir_dst() {
	var data = fnc_Get_DataTable_RowData_Selected('grid_dir_dst');

	jsc_mdl_dir__ccod_ubdst = data.ccod_dir_dst;
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_dst')).val(data.cdsc_dir_dst);
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_prv')).val(data.cdsc_dir_prv);
	$(Obj_Col(fc_frm_dt_dir, 'cdsc_dir_dpt')).val(data.cdsc_dir_dpt);

	f_mdl_dir_generar_direccion();
	
	$('#mdl_grid_dir_dst').modal('close');
};

function fnc_search_dst() {
	$('#mdl_grid_dir_dst').modal('open');
	fnc_set_focus('', 'i_filter_grid_dir_dst');
};
