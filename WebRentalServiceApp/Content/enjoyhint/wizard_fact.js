var fb_tour = true;

var fb_serie = false;
var fb_cdp = false;

//initialize instance
//var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_instance;
	
function fnc_fact_tour_parte_1 (case_) {
	
	
	if (case_ === 'load') {
	
	//initialize instance
	enjoyhint_instance = new EnjoyHint({});


	//simple config.
	//Only one step - highlighting(with description) "New" button
	//hide EnjoyHint after a click on the button.
	var enjoyhint_script_steps = [

		{
			"click #a_usu_opts": "Hola, este proceso te ayudara a realizar una venta.<br>" +
			"<text style='color: #00a6eb'>'Acción'</text> : <text style='color: #2bff3c'>'Hazle Click en el boton (mas opciones)'</text> <br>",
			shape : 'circle'
		},
		{	
			"click [data-lnk='_lnk_opt_2']": "De la lista de opciones.<br>" +
			"<text style='color: #00a6eb'>'Acción'</text> : <text style='color: #2bff3c'>'Hazle Click en la opción (Nuevo)'</text>"
		},

		{
			"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(3)>div:nth-child(1)": "<text style='color: #2bff3c'>1 - Seleccione 'Operacion de Facturación'</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},

		
		/*
		{
			"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(4)>div:nth-child(1)>div:nth-child(2)": "<text style='color: #2bff3c'>1 - Seleccione 'Serie'</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},
		*/
		
		
		
		// -----------------  combo desplegable - inicio
		{
			onBeforeStart: function(){
				fb_serie = true;
			},
			"click #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(4)>div:nth-child(1)>div:nth-child(2)>span:nth-child(4)": "<text style='color: #2bff3c'>1 - Seleccione 'Serie'</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},
		
		{
			"click .select2-container--open>.select2-dropdown>span:nth-child(2)": "<text style='color: #2bff3c'>Seleccione una serie</text><br>"
			//"click .select2-dropdown": "<text style='color: #2bff3c'>Seleccione una serie</text><br>"
			//"click .select2-results__options>li:nth-child(1)": "<text style='color: #2bff3c'>Seleccione una serie</text><br>"
		},
		// -----------------  combo desplegable - fin
		

		
		

		{
			"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(5)": "<text style='color: #2bff3c'>1 - Seleccione 'Almacen' (para muestra de stock en el caso de articulos)</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},
		
		
		
		// Cliente - Inicio
		{
			"click [data-lnk='_lnk_open_modal_prs']" : "Click en 'cliente', para buscar y seleccionar un cliente"
		},

		{
			"next [data-col='grid_personas_filtro_all']" : "<text style='color: #2bff3c'>1 - Digite valor para realizar la busqueda</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
			
			/*"key [data-col='grid_personas_filtro_all']" : "<text style='color: #2bff3c'>1 - Digite el nombre del cliente para buscarlo</text><br>" +
			
			keyCode : 13*/
			
			
		},
		{
			"next #grid_personas": "<text style='color: #2bff3c'>1 - Seleccione con un click un cliente</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},
		{
			"click #btn_add_grid_personas" : "Darle click en el boton 'Seleccionar'"
			//scrollAnimationSpeed : 2500
		},
		// Cliente - Fin
		
		
		
				
		// -----------------  combo desplegable - inicio
		/*
		{
			"next #tab_1>div:nth-child(2)>section:nth-child(1)>div:nth-child(4)": "<text style='color: #2bff3c'>1 - Seleccione 'Condición de Pago'</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},
		*/
		{
			onBeforeStart: function(){
				fb_cdp = true;
			},
			"click #tab_1>div:nth-child(2)>section:nth-child(1)>div:nth-child(4)>div:nth-child(1)>div:nth-child(3)>span:nth-child(3)": "<text style='color: #2bff3c'>1 - Seleccione 'Condición de Pago'</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},
		
		{
			"click .select2-container--open>.select2-dropdown>span:nth-child(2)": "<text style='color: #2bff3c'>Seleccione 'Condición de Pago'</text><br>"
			//"click .select2-dropdown": "<text style='color: #2bff3c'>Seleccione una serie</text><br>"
			//"click .select2-results__options>li:nth-child(1)": "<text style='color: #2bff3c'>Seleccione una serie</text><br>"
		},
		// -----------------  combo desplegable - fin	
		
		
		
		
		// Articulo - Inicio
		{
			onBeforeStart: function(){
				$(".tabs").tabs("select", "tab_2");
			},
			"click [data-lnk='_lnk_open_modal_it_add']" : "<text style='color: #2bff3c'>1 - Ahora agregaremos un articulo a la venta</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en el boton 'Agregar Item' </text><br>",
			//scrollAnimationSpeed : 2500
		},
		{
			//"next #mdl_grid_it_seleccion > .modal-content" : "Seleccione bien o servicio"
			"click [data-lnk='_lnk_open_modal_it_b']" : "Darle click en el boton 'Bien', para agregar articulo a la grilla"
			//shape : 'circle',
			//scrollAnimationSpeed : 2500
		},
		
		{
			"next [data-col='grid_bienes_filtro_all']" : "<text style='color: #2bff3c'>1 - Digite valor para realizar la busqueda del articulo</text><br>" +
			//"<text style='color: #00ebe7'>2 - Presionar tecla 'Enter' </text><br>",
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
			//keyCode : 13
		},
		{
			"next #grid_bienes": "<text style='color: #2bff3c'>1 - Seleccione con un click un articulo</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},
		{
			"click #btn_add_grid_bienes" : "Click en el boton 'Seleccionar'"
			//scrollAnimationSpeed : 2500
		},
		// Articulo - Fin		
		

		{
			"next [data-col='ncant']" : "At this step we fix radius<br>" +
				"<text style='color: #00ebe7'>radius</text> - sets the size of the circle radius<br>" +
				"{<br>" +
				"<text style='color: #00a6eb'>&nbsp &nbsp ' next #selector '</text> : <text style='color: #2bff3c'>' Some description ',</text> <br>" +
				"<text style='color: #00a6eb'>&nbsp &nbsp ' shape '</text> :  <text style='color: #2bff3c'>' circle '</text> <br>" +
				"<text style='color: #00a6eb'>&nbsp &nbsp ' radius '</text> : 80<br>" +
				"}<br>"
		},
		{
			"click #btn_add_grid_it" : "Agregar el articulo a la grilla"
		},

		{
			onBeforeStart: function(){
				$('#mdl_grid_it_seleccion').modal('close');
				//$('#mdl_grid_it_seleccion-close_out').css('display', 'none');
			},

			"next #grid_it>tbody>tr.selected" : "Se agrego correctamente el articulo a la grilla"
		},


		{
			onBeforeStart: function(){
				$('#mdl_grid_it_seleccion-close_out').css('display', 'none');
			},
			
			"click #a_usu_opts" : "<text style='color: #2bff3c'>1 - Se ha finalizado la creacion del documento</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en el boton 'Mas opciones' </text><br>",
			shape : 'circle'
		},

		{
			"click [data-lnk='_lnk_opt_r']" : "<text style='color: #2bff3c'>1 - Procedemos a grabar el documento</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en el boton 'Grabar' </text><br>"
		}

	];

	//set script config
	enjoyhint_instance.set(enjoyhint_script_steps);
	
	//enjoyhint_instance.set([]);
	
	$('.enjoyhint_close_btn').remove();
	
	enjoyhint_instance.run();
	
	}

	
	this.fnc_fact_tour_parte_1_next = function() {
        if (fb_tour === true) {
			if (fb_serie === true || fb_cdp === true) {
				fb_serie = false;
				fb_cdp = true;
				enjoyhint_instance.trigger('next');
			}
		}
	}

};



function fnc_fact_tour_parte_2 () {
	
	
				
				var enjoyhint_instance_2 = new EnjoyHint({});
				
				
				var enjoyhint_script_steps_2 = [
				
					
					{
						//"click sweet-alert.visible>.confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
						"click .confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
					},

					{
						onBeforeStart: function(){
							$(".tabs").tabs("select", "tab_lista");
						},
						"click #grid_lista>tbody>tr.selected" : "Se agrego correctamente la venta a la grilla"
						
						//selector: '#grid_it tbody tr.selected',
						//event: 'next',
						//description: 'Se agrego el articulo correctamente',
						//shape: 'circle'
						//scrollAnimationSpeed : 2500
					}

				];
				
								
	//set script config
	enjoyhint_instance_2.set(enjoyhint_script_steps_2);
	
	//enjoyhint_instance.set([]);
	
	$('.enjoyhint_close_btn').remove();
	
	enjoyhint_instance_2.run();

};
