jQuery(function ($)
{
	$(document).ajaxStop(function () {
		$.LoadingOverlay('hide');
		//$('.reload_ajax table').LoadingOverlay('hide', true);

		if ($('.reload_ajax table').attr('id') !== undefined) {
			fnc_tables_ejecutar_alternos($('.reload_ajax table').attr('id'));
		}
	});
	$(document).ajaxStart(function () {		
		
		// if ($('#contenedor_carga').css('visibility') === 'hidden' && $('.sweet-overlay').css('display') !== 'block')
		if ($('#contenedor_carga').css('visibility') === 'hidden')
		{
			$.LoadingOverlay('show', {
				maxSize: "50px",
				minSize: "40px",
				background: 'rgba(0, 0, 0, 0)'
			});
			//$(".reload_ajax table").LoadingOverlay("show");
		}
	});
});

$(document).ready(function() {
	
	// alert(fc__frm_layout__tipo);

	// Otros valores
	if (fc__frm_layout__tipo === 'Main')
	{
	
		/*
		fnc_lq_usp_Get_si_usu_ctl_conf();
		*/
		
		fnc_layout_set_html();

		//fnc_child_set_html(); //Quitado en la correccion PERSONA -- EN ALGUN MOMENTO PUEDE SERVIR PARA CARGAR UN FORM ADENTRO
		
		
		// Validar si el primer parametro va
		//fnc_frm_tab_remove(fc_frm_cb, fa_frm_tab);

		
		
		//$('.ejercicio').html(gc_ccod_eje);
		//$('.periodo').html(gc_ccod_per);
		$('.name').html(gc_cdsc_usu);
		$('.email').html('fernando.villarruel@linksoft.pe');
		//$('.sub_name').html(gc_cargo_usu);
		$('.copyright').html(gc_copyright);
		$('.version span').html(gc_version);
		
		
		
		
		//fnc_master_modulo_enlaces_habilitar();
		//fnc_master_objetos_cargar_caracteristicas();
		
		
		
		
		//-------------------------
		fnc_tables_cargar_caracteristicas();
		fnc_selects_cargar_caracteristicas('', '');
		fnc_inputs_cargar_caracteristicas('', '');
		
		//fnc_frm_objs_habilitar(fc_frm_cb);
		//---------------------------------
		
		
		
		
		
		fnc_child_ready();

		fnc_master_objetos_cargar_caracteristicas();
		
		
		/* SE MOVIO ARRIBA, PROBAR SI EN LOS CATALOGOS Y TRANSACCION FUNCIONAN BIEN EN ESA POSICION
		//-------------------------
		fnc_tables_cargar_caracteristicas();
		fnc_selects_cargar_caracteristicas('', '');
		fnc_inputs_cargar_caracteristicas('', '');
		
		//fnc_frm_objs_habilitar(fc_frm_cb);
		//---------------------------------
		*/


		fnc_objects_load_functions_post_child();
		
		fnc_child_cargar_valores_post_proceso();

		
		$('.nav_title').html('S7 Basico');
		//$(window).bind("resize", checkPosition);
		
		

		
		
		/*
		fnc_master_formulario_opciones_habilitar('a'); // Mover despues de: fnc_master_modulo_enlaces_habilitar

		$('input[name^="group-"], input[name^="sub-group-"], input[name^="sub-sub-group-"]').change(function() {
			fnc_tables_ejecutar_alternos('mn');
		});
		*/
		
		


		// Exclusivo para este LayouMain
		fnc_tables_ejecutar_alternos('tab_contenedor');
	}
	else if (fc__frm_layout__tipo === 'Main_Modulo')
	{
		fnc_lq_usp_Get_si_usu_ctl_conf(); // para conf de las grillas

		fnc_layout_set_html();

		//fnc_child_set_html(); // master //Quitado en la correccion PERSONA -- EN ALGUN MOMENTO PUEDE SERVIR PARA CARGAR UN FORM ADENTRO
		
		// Validar si el primer parametro va
		//fnc_frm_tab_remove(fc_frm_cb, fa_frm_tab); //master

		
		/* Seteo de valores */
		$('.ejercicio').html(fnc_GET_val__of__localStorage(lS_ccod_eje));
		$('.periodo').html(fnc_GET_val__of__localStorage(lS_ccod_per));
		
		$('.name').html(fnc_GET_val__of__localStorage(lS_cdsc_usu));
		$('.sub_name').html(fnc_GET_val__of__localStorage(lS_cemail));
		
		$('.copyright').html(gc_copyright);
		$('.version span').html(gc_version);
		
		
		fnc_master_modulo_enlaces_habilitar();
		//fnc_master_objetos_cargar_caracteristicas();
		
		
		/*
		//-------------------------
		fnc_tables_cargar_caracteristicas();
		fnc_selects_cargar_caracteristicas('', '');
		fnc_inputs_cargar_caracteristicas('', '');
		
		//fnc_frm_objs_habilitar(fc_frm_cb); // MASTER
		//---------------------------------
		*/
		
		
		
		
		
		
		fnc_child_ready();
		fnc_master_objetos_cargar_caracteristicas();
		
		
		
		
		
		/* SE MOVIO ARRIBA, PROBAR SI EN LOS CATALOGOS Y TRANSACCION FUNCIONAN BIEN EN ESA POSICION */
		//-------------------------
		fnc_tables_cargar_caracteristicas();
		fnc_selects_cargar_caracteristicas('', '');
		fnc_inputs_cargar_caracteristicas('', '');
		
		//fnc_frm_objs_habilitar(fc_frm_cb); // Master
		//---------------------------------
		
		
		
		
		
		
		
		
		fnc_objects_load_functions_post_child();
		fnc_child_cargar_valores_post_proceso();
		
		



		//fnc_master_formulario_opciones_habilitar('a'); // MASTER // Mover despues de: fnc_master_modulo_enlaces_habilitar





		$('input[name^="group-"], input[name^="sub-group-"], input[name^="sub-sub-group-"]').change(function() {
			fnc_tables_ejecutar_alternos('mn');
		});


		$('.nav_title').html('Módulo de ' + fnc_GET_val__of__localStorage(lS_cdsc_mod));
	
		
		
		fnc_tables_ejecutar_alternos('tab_contenedor');
	}
	else if (fc__frm_layout__tipo === 'Main_tbc')
	{
		fnc_lq_usp_Get_si_usu_ctl_conf(); // para conf de las grillas

		fnc_layout_set_html();

		//fnc_child_set_html(); // master //Quitado en la correccion PERSONA -- EN ALGUN MOMENTO PUEDE SERVIR PARA CARGAR UN FORM ADENTRO
		
		// Validar si el primer parametro va
		fnc_frm_tab_remove(fc_frm_cb, fa_frm_tab); //master

		
		/* Seteo de valores */
		$('.ejercicio').html(fnc_GET_val__of__localStorage(lS_ccod_eje));
		$('.periodo').html(fnc_GET_val__of__localStorage(lS_ccod_per));
		
		$('.name').html(fnc_GET_val__of__localStorage(lS_cdsc_usu));
		$('.sub_name').html(fnc_GET_val__of__localStorage(lS_cemail));
		
		$('.copyright').html(gc_copyright);
		$('.version span').html(gc_version);
		
		
		fnc_master_modulo_enlaces_habilitar();
		//fnc_master_objetos_cargar_caracteristicas();
		
		
		/*
		//-------------------------
		fnc_tables_cargar_caracteristicas();
		fnc_selects_cargar_caracteristicas('', '');
		fnc_inputs_cargar_caracteristicas('', '');
		
		//fnc_frm_objs_habilitar(fc_frm_cb); // MASTER
		//---------------------------------
		*/
		
		
		
		
		
		
		fnc_child_ready();
		fnc_master_objetos_cargar_caracteristicas();
		
		
		
		
		
		/* SE MOVIO ARRIBA, PROBAR SI EN LOS CATALOGOS Y TRANSACCION FUNCIONAN BIEN EN ESA POSICION */
		//-------------------------
		fnc_tables_cargar_caracteristicas();
		fnc_selects_cargar_caracteristicas('', '');
		fnc_inputs_cargar_caracteristicas('', '');
		
		//fnc_frm_objs_habilitar(fc_frm_cb); // Master
		//---------------------------------
		
		
		
		
		
		
		
		
		fnc_objects_load_functions_post_child();
		fnc_child_cargar_valores_post_proceso();
		
		



		//fnc_master_formulario_opciones_habilitar('a'); // MASTER // Mover despues de: fnc_master_modulo_enlaces_habilitar





		$('input[name^="group-"], input[name^="sub-group-"], input[name^="sub-sub-group-"]').change(function() {
			fnc_tables_ejecutar_alternos('mn');
		});

	
		$('.nav_title').html(fc_cdsc_men);
		
		
		fnc_tables_ejecutar_alternos('tab_contenedor');
	}
	else if (fc__frm_layout__tipo === 'Master')
	{
		
		fnc_child_set_menu();
	
		fnc_lq_usp_Get_si_usu_ctl_conf(); //master

		fnc_layout_set_html();

		fnc_child_set_html(); // master //Quitado en la correccion PERSONA -- EN ALGUN MOMENTO PUEDE SERVIR PARA CARGAR UN FORM ADENTRO
		
		// Validar si el primer parametro va
		fnc_frm_tab_remove(fc_frm_cb, fa_frm_tab); //master

		
		/* Seteo de valores */
		$('.ejercicio').html(fnc_GET_val__of__localStorage(lS_ccod_eje));
		$('.periodo').html(fnc_GET_val__of__localStorage(lS_ccod_per));
		
		$('.name').html(fnc_GET_val__of__localStorage(lS_cdsc_usu));
		$('.sub_name').html(fnc_GET_val__of__localStorage(lS_cemail));
		
		$('.copyright').html(gc_copyright);
		$('.version span').html(gc_version);
		
		
		fnc_master_modulo_enlaces_habilitar(); // ESTO DEBERIA deberia HEREDAR LO QUE CARGO EN EL MAIN
		//fnc_master_objetos_cargar_caracteristicas();
		
		
		/*
		//-------------------------
		fnc_tables_cargar_caracteristicas();
		fnc_selects_cargar_caracteristicas('', '');
		fnc_inputs_cargar_caracteristicas('', '');
		
		//fnc_frm_objs_habilitar(fc_frm_cb); // MASTER
		//---------------------------------
		*/
		
		
		
		
		
		
		fnc_child_ready();
		fnc_master_objetos_cargar_caracteristicas();
		
		
		
		
		
		/* SE MOVIO ARRIBA, PROBAR SI EN LOS CATALOGOS Y TRANSACCION FUNCIONAN BIEN EN ESA POSICION */
		//-------------------------
		fnc_tables_cargar_caracteristicas();
		fnc_selects_cargar_caracteristicas('', '');
		fnc_inputs_cargar_caracteristicas('', '');
		
		fnc_frm_objs_habilitar(fc_frm_cb); // Master
		//---------------------------------
		
		
		
		
		
		
		
		
		fnc_objects_load_functions_post_child();
		fnc_child_cargar_valores_post_proceso();
		
		



		fnc_master_formulario_opciones_habilitar('a'); // MASTER // Mover despues de: fnc_master_modulo_enlaces_habilitar





		$('input[name^="group-"], input[name^="sub-group-"], input[name^="sub-sub-group-"]').change(function() {
			fnc_tables_ejecutar_alternos('mn');
		});



		$('.nav_title').html(fc_cdsc_men);
	
	}
	else if  (fc__frm_layout__tipo === 'Login') {
		
		/*
		//-------------------------
		//fnc_tables_cargar_caracteristicas();
		//fnc_selects_cargar_caracteristicas('', '');
		fnc_inputs_cargar_caracteristicas('', '');
		
		//fnc_frm_objs_habilitar(fc_frm_cb);
		//---------------------------------
		
		
		
		
		
		fnc_child_ready();
		fnc_master_objetos_cargar_caracteristicas();
		
			
			
			
			
			

		fnc_objects_load_functions_post_child();
		
		fnc_child_cargar_valores_post_proceso();
		*/
		
		
		// ======================================================================================
		// ======================================================================================
		// ======================================================================================
		
		//fnc_inputs_cargar_caracteristicas('', '');
		
		
		fnc_child_ready();
		fnc_master_objetos_cargar_caracteristicas();

		fnc_objects_load_functions_post_child();
		
		fnc_child_cargar_valores_post_proceso();
		

	}

});

window.onload = function ()
{
	fnc_contenedor_carga__onload();

	//frm_complemt();
	//fnc_MOVE_obj('sync', 'c_sync');
	//fnc_REMOVE_obj('c_initial_sync');
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_layout_set_html()
{
	$('body').prepend(fnc_html_opts_nav_bar());
};

function fnc_contenedor_carga__onload()
{
	var contenedor = document.getElementById('contenedor_carga');
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
::																FUNCIONES DEL PROCESO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_usu_main() {
	open_form('/Home/frm_main', gc_group_window);
};

function fnc_usu_cambiar_password() {
	open_form('/Home/frm_change_password', gc_group_window);
};

function fnc_usu_log_off__pre() {
	fnc_mensaje_confirmacion ('fnc_usu_log_off', 'Usted cerrara su sesión, ¿desea continuar?', 'Confirmación', 'logout', []);
};

function fnc_usu_log_off() {
	window.close();
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		HTML																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_html_opts_nav_bar()
{
	var pc_html_opts_nav_bar__btn_hist = '';
	if (fc_ctip_frm === 'frm_ts')
	{
		pc_html_opts_nav_bar__btn_hist = `
										<a data-lnk='_lnk_open_modal_estados' class='btn-circle style_1 waves-effect waves-light'>
											<i class='material-icons i_lks_master'>history</i>
										</a>`;
	}

	// Master valores
	var pc_NavBar_box_shadow = 'box_shadow_none';
	let pc_html_opts_nav_bar__right = `
		<div class='nav-hz_right'>`
		+ pc_html_opts_nav_bar__btn_hist + `
			<a id='btn_p_row' class='btn-circle style_1 waves-effect waves-light hide_for_350px'>
				<span class='fa h bjw'></span>
			</a>
			<a id='btn_a_row' class='btn-circle style_1 waves-effect waves-light hide_for_350px'>
				<span class='fa h bjx'></span>
			</a>
			<a id='btn_s_row' class='btn-circle style_1 waves-effect waves-light hide_for_350px'>
				<span class='fa h beu'></span>
			</a>
			<a id='btn_u_row' class='btn-circle style_1 waves-effect waves-light rotateY_180 hide_for_350px'>
				<span class='fa h bjw'></span>
			</a>
			<a id='a_usu_opts' class='btn-circle style_1 waves-effect waves-light dropdown-trigger' data-target='lst_usu_opts'>
				<span class='fa h bdd'></span>
			</a>
			<ul id='lst_usu_opts' class='dropdown-content style_1 a'></ul>
		</div>
	`;

	let pc_html_Sidenav = `
	<ul id='slide-out' class='sidenav'>
		<div class='lks-sidebar-header'>
			<!--
			<div class='info'>
				<div class='ejercicio'></div>
				<div class='periodo'></div>
			</div>
			-->
			<div class='sidebar-image'>
				<!-- <img src='../images/usuarios/ninguno_1.gif' class='z-depth-4'> -->
				<img src='../images/usuarios/ninguno_1.gif'>
			</div>
			<div class='sidebar-brand'>
				<div class='name'></div>
				<div class='sub_name'></div>

				<div class='btn-group'>
					<a class='waves-effect waves-light dropdown-trigger' data-target='lst_usu'>
						<span class='fa h bdd'></span>
					</a>
					<ul id='lst_usu' class='dropdown-content style_1'>
						<li data-lnk='_lnk_usu_main'>
							<a class='waves-effect waves-light'>
								<i class='ico_home'></i>
								<span class='span_menu_3'>Ventana Principal</span>
							</a>
						</li>
						<li class='divider' tabindex='-1'></li>
						<li data-lnk='_lnk_usu_log_off__pre'>
							<a class='waves-effect waves-light sidenav-close'>
								<i class='ico_log_off'></i>
								<span class='span_menu_3'>Cerrar sesión</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--
		<div class='find st-4' style='padding: 10px;'>
			<input type='text' value='' class='lks' placeholder='Buscar opción' />
		</div>
		<div class='lks-sidebar-content_title'>
			<span>Opciones Disponibles</span>
		</div>
		-->
		<div class='mopciones_fixes' data-col='scroll_mn' data-col_2='div_width_-5px'>
			<div class='contenedor_cd-accordion-menu'></div>
		</div>

		<div class='lks-sidebar-footer'>
			<div class='copyright'></div>
			<div class='version'><b>Version: </b><span></span></div>
		</div>
	</ul>
	`;
	
	// Otros valores
	if (fc__frm_layout__tipo === 'Main')
	{
		pc_NavBar_box_shadow = 'box_shadow_1';
		pc_html_opts_nav_bar__right = '';
		pc_html_Sidenav = '';
	}
	else if (fc__frm_layout__tipo === 'Main_Modulo')
	{
		pc_NavBar_box_shadow = 'box_shadow_1';
		pc_html_opts_nav_bar__right = '';
	}
	else if (fc__frm_layout__tipo === 'Main_tbc')
	{
		pc_NavBar_box_shadow = 'box_shadow_1';
		pc_html_opts_nav_bar__right = '';
	}
	
	// HTML
	let pc_html_opts_nav_bar = `
	<div class='nav-hz ` + pc_NavBar_box_shadow + `'>
		<div class='nav-hz_left'>
			<a class='btn-circle style_1 waves-effect waves-light sidenav-trigger' data-target='slide-out'>
				<i class='tiny_lks material-icons'>menu</i>
			</a>
			<span class='nav_c_title hide_for_600px'>
				<span class='nav_title'></span>
				<span class='nav_title_sub'></span>
			</span>
		</div>`
	+ pc_html_opts_nav_bar__right +
	`</div>`
	+ pc_html_Sidenav
	
	return pc_html_opts_nav_bar;
};