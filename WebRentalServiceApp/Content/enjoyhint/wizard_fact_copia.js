var fb_tour = true;

function prueba_1 () {
		
	//initialize instance
	var enjoyhint_instance = new EnjoyHint({});

	//simple config.
	//Only one step - highlighting(with description) "New" button
	//hide EnjoyHint after a click on the button.
	var enjoyhint_script_steps = [

		/*
		{
			onBeforeStart: function(){
				$(".tabs").tabs("select", "tab_1");
			},

			"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(5)": "<text style='color: #2bff3c'>1 - Seleccione 'Almacen' (para muestra de stock en el caso de articulos)</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},
	*/

		/*
		{
			onBeforeStart: function(){
				$(".tabs").tabs("select", "tab_1");
			},

			"next #tab_1>div:nth-child(1)>section:nth-child(1)>div:nth-child(1)>div:nth-child(1)": "<text style='color: #2bff3c'>Resumen del Documento</text><br>" +
			"<text style='color: #00ebe7'>Empresa</text> - Estado del documento <br>" +
			"<text style='color: #00ebe7'>Sunat</text> - Estado de envio a SUNAT <br>" +
			"<text style='color: #00ebe7'>Ejercicio</text> - Ejercicio de registro del documento <br>" +
			"<text style='color: #00ebe7'>Periodo</text> - Periodo de registro del documento <br>" +
			"<text style='color: #00ebe7'>Base imponible</text> - Importe neto del documento <br>" +
			"<text style='color: #00ebe7'>Descuentos</text> - Suma total de descuentos del documento <br>" +
			"<text style='color: #00ebe7'>Impuestos</text> - Suma total de impuestos aplicados al documento <br>" +
			"<text style='color: #00ebe7'>Total</text> - Importe total del documento <br>"
		},

		{
			"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(1)>div:nth-child(1)": "<text style='color: #2bff3c'>Datos Generales del Documento</text><br>" +
			"<text style='color: #00ebe7'>Emision</text> - Fecha de emision del documento <br>" +
			"<text style='color: #00ebe7'>Vencimiento</text> - Fecha de vencimiento del documento <br>" +
			"<text style='color: #00ebe7'>Moneda</text> - Moneda en la que se generara el documento <br>" +
			"<text style='color: #00ebe7'>Operacion de Facturacion</text> - Operacion del documento de venta <br>" +
			"<text style='color: #00ebe7'>Documento - Serie - Numero</text> - Correlativo del documento de venta <br>" +
			"<text style='color: #00ebe7'>Almacen</text> - Almacen de descarga de la venta (solo articulos) <br>" +
			"<text style='color: #00ebe7'>Glosa</text> - Informacion adicional <br>"
		},
	*/

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

		{
			"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(4)>div:nth-child(1)>div:nth-child(2)": "<text style='color: #2bff3c'>1 - Seleccione 'Serie'</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},

		{
			"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(5)": "<text style='color: #2bff3c'>1 - Seleccione 'Almacen' (para muestra de stock en el caso de articulos)</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},

	//aca


		/*
		{
			"next #1" : "Complete la informacion general"
			//showSkip: false
		},
		*/
		/*----------------------------*/
		
		
		/*----------------------------*/
		
		{
			"click [data-lnk='_lnk_open_modal_prs']" : "Click en de 'cliente', para buscar y seleccionar un cliente"
		},

		{
			"key [data-col='grid_personas_filtro_all']" : "<text style='color: #2bff3c'>1 - Digite el nombre del cliente para buscarlo</text><br>" +
			"<text style='color: #00ebe7'>2 - Presionar tecla 'Enter' </text><br>",

	/*
			"<text style='color: #00ebe7'>radius</text> - sets the size of the circle radius<br>" +
			"{<br>" +
			"<text style='color: #00a6eb'>&nbsp &nbsp ' next #selector '</text> : <text style='color: #2bff3c'>' Some description ',</text> <br>" +
			"<text style='color: #00a6eb'>&nbsp &nbsp ' shape '</text> :  <text style='color: #2bff3c'>' circle '</text> <br>" +
			"<text style='color: #00a6eb'>&nbsp &nbsp ' radius '</text> : 80<br>" +
			"}<br>",
	*/

			//shape : 'circle',
			//radius: 80
			keyCode : 13
		},
		{
			"click #btn_add_grid_personas" : "Darle click en el boton 'Seleccionar'"
			//scrollAnimationSpeed : 2500
		},

		{
			"next #tab_1>div:nth-child(2)>section:nth-child(1)>div:nth-child(4)": "<text style='color: #2bff3c'>1 - Seleccione 'Condición de Pago'</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
		},
		
		/*----------------------------*/
		{
			onBeforeStart: function(){
				$(".tabs").tabs("select", "tab_2");
			},
			"click [data-lnk='_lnk_open_modal_it_add']" : "<text style='color: #2bff3c'>1 - Ahora agregaremos un Articulo a la venta</text><br>" +
			"<text style='color: #00ebe7'>2 - Darle click en el boton 'Agregar Item' </text><br>",
			//scrollAnimationSpeed : 2500
		},
		
		{
			//"next #mdl_grid_it_seleccion > .modal-content" : "Seleccione bien o servicio"
			"click [data-lnk='_lnk_open_modal_it_b']" : "Darle click en el boton 'Bien', para agregar articulo a la grilla",
			shape : 'circle'
			//"next #mdl_detalle_1_seleccion > .modal-content" : "Seleccione bien o servicio"
			//scrollAnimationSpeed : 2500
		},

		{
			"key [data-col='grid_bienes_filtro_all']" : "<text style='color: #2bff3c'>1 - Digite la descripcion del articulo para buscarlo</text><br>" +
			"<text style='color: #00ebe7'>2 - Presionar tecla 'Enter' </text><br>",
			//shape : 'circle',
			//radius: 80
			keyCode : 13
		},
		{
			"click #btn_add_grid_bienes" : "Darle click en el boton 'Seleccionar'"
			//scrollAnimationSpeed : 2500
		},
		{
			"next [data-col='ncant']" : "At this step we fix radius<br>" +
				"<text style='color: #00ebe7'>radius</text> - sets the size of the circle radius<br>" +
				"{<br>" +
				"<text style='color: #00a6eb'>&nbsp &nbsp ' next #selector '</text> : <text style='color: #2bff3c'>' Some description ',</text> <br>" +
				"<text style='color: #00a6eb'>&nbsp &nbsp ' shape '</text> :  <text style='color: #2bff3c'>' circle '</text> <br>" +
				"<text style='color: #00a6eb'>&nbsp &nbsp ' radius '</text> : 80<br>" +
				"}<br>"
			//shape : 'circle',
			//radius: 80
		},
		{
			"click #btn_add_grid_it" : "Agregar el articulo a la grilla",
			//scrollAnimationSpeed : 2500


			/*
			onBeforeStart: function(){
				fnc_modal_button_close_position();
				alert('jajaj');
			}*/
		},

		/*
		{
			onBeforeStart: function(){
				// $('#mdl_grid_it').modal('close');
				$('#mdl_grid_it_seleccion').modal('close');
				fnc_modal_button_close_position();
			},
			"click #mdl_grid_it_seleccion-close_out" : "Cancelar ventana",
			shape : 'circle'
			//scrollAnimationSpeed : 2500
		},
		*/

		{
			onBeforeStart: function(){
				$('#mdl_grid_it_seleccion').modal('close');
				//$('#mdl_grid_it_seleccion-close_out').css('display', 'none');
			},

			"next #grid_it>tbody>tr.selected" : "Se agrego correctamente el articulo a la grilla",
			
			//selector: '#grid_it tbody tr.selected',
			//event: 'next',
			//description: 'Se agrego el articulo correctamente',
			//shape: 'circle'
			//scrollAnimationSpeed : 2500
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

		/*
		{
			onBeforeStart: function(){
				fnc_child_registrar_tour();
			},
			// "click sweet-alert.visible>.confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
			"next sweet-alert.visible>.confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
		},
		*/

		/*
		{
			'custom selector' : 'This element is loading',
			event: 'custom_event_name',
			onBeforeStart: function () {

				if (fnc_registrar() === true) {
					enjoyhint_instance.trigger('custom_event_name');
				}

			},
		},

		{
			// "click sweet-alert.visible>.confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
			"click .confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
		},
	*/
	/*
		{
			onBeforeStart: function(){
				$(".tabs").tabs("select", "tab_lista");
			},
			"next #grid_lista>tbody>tr.selected" : "Se agrego correctamente la venta"
		}
	*/



	];

	//set script config
	enjoyhint_instance.set(enjoyhint_script_steps);

	/*
	function tour_uno() {
		enjoyhint_instance.set(enjoyhint_script_steps);
		enjoyhint_instance.run();
	};
	*/

	//run Enjoyhint script
	//enjoyhint_instance.run();



	// ================================================================================

					
					//var enjoyhint_instance_2 = new EnjoyHint({});
					
					/*
					var enjoyhint_script_steps_2 = [
					
						//{
							// "click sweet-alert.visible>.confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
							//"click .confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
						//},

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
					*/
					//set script config
					//enjoyhint_instance_2.set(enjoyhint_script_steps_2);
					
					
					/*
					if ($('.confirm').is(":visible") === true ) {
						enjoyhint_instance_2.run();
					}
					*/
					
					/*
					function tour_dos() {
						enjoyhint_instance.set(enjoyhint_script_steps_2);
						enjoyhint_instance.run();
					};
					*/
	// ================================================================================


	//temporal
	$('.enjoyhint_close_btn').remove();
};

//initialize instance
var enjoyhint_instance = new EnjoyHint({});

//simple config.
//Only one step - highlighting(with description) "New" button
//hide EnjoyHint after a click on the button.
var enjoyhint_script_steps = [

	/*
    {
		onBeforeStart: function(){
            $(".tabs").tabs("select", "tab_1");
        },

		"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(5)": "<text style='color: #2bff3c'>1 - Seleccione 'Almacen' (para muestra de stock en el caso de articulos)</text><br>" +
		"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
    },
*/

	/*
    {
		onBeforeStart: function(){
            $(".tabs").tabs("select", "tab_1");
        },

		"next #tab_1>div:nth-child(1)>section:nth-child(1)>div:nth-child(1)>div:nth-child(1)": "<text style='color: #2bff3c'>Resumen del Documento</text><br>" +
		"<text style='color: #00ebe7'>Empresa</text> - Estado del documento <br>" +
		"<text style='color: #00ebe7'>Sunat</text> - Estado de envio a SUNAT <br>" +
		"<text style='color: #00ebe7'>Ejercicio</text> - Ejercicio de registro del documento <br>" +
		"<text style='color: #00ebe7'>Periodo</text> - Periodo de registro del documento <br>" +
		"<text style='color: #00ebe7'>Base imponible</text> - Importe neto del documento <br>" +
		"<text style='color: #00ebe7'>Descuentos</text> - Suma total de descuentos del documento <br>" +
		"<text style='color: #00ebe7'>Impuestos</text> - Suma total de impuestos aplicados al documento <br>" +
		"<text style='color: #00ebe7'>Total</text> - Importe total del documento <br>"
    },

    {
		"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(1)>div:nth-child(1)": "<text style='color: #2bff3c'>Datos Generales del Documento</text><br>" +
		"<text style='color: #00ebe7'>Emision</text> - Fecha de emision del documento <br>" +
		"<text style='color: #00ebe7'>Vencimiento</text> - Fecha de vencimiento del documento <br>" +
		"<text style='color: #00ebe7'>Moneda</text> - Moneda en la que se generara el documento <br>" +
		"<text style='color: #00ebe7'>Operacion de Facturacion</text> - Operacion del documento de venta <br>" +
		"<text style='color: #00ebe7'>Documento - Serie - Numero</text> - Correlativo del documento de venta <br>" +
		"<text style='color: #00ebe7'>Almacen</text> - Almacen de descarga de la venta (solo articulos) <br>" +
		"<text style='color: #00ebe7'>Glosa</text> - Informacion adicional <br>"
    },
*/

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

    {
		"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(4)>div:nth-child(1)>div:nth-child(2)": "<text style='color: #2bff3c'>1 - Seleccione 'Serie'</text><br>" +
		"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
    },

    {
		"next #tab_1>div:nth-child(1)>section:nth-child(2)>div:nth-child(5)": "<text style='color: #2bff3c'>1 - Seleccione 'Almacen' (para muestra de stock en el caso de articulos)</text><br>" +
		"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
    },

//aca


	/*
    {
        "next #1" : "Complete la informacion general"
        //showSkip: false
    },
	*/
	/*----------------------------*/
	
	
	/*----------------------------*/
	
    {
		"click [data-lnk='_lnk_open_modal_prs']" : "Click en de 'cliente', para buscar y seleccionar un cliente"
    },

    {
        "key [data-col='grid_personas_filtro_all']" : "<text style='color: #2bff3c'>1 - Digite el nombre del cliente para buscarlo</text><br>" +
		"<text style='color: #00ebe7'>2 - Presionar tecla 'Enter' </text><br>",

/*
		"<text style='color: #00ebe7'>radius</text> - sets the size of the circle radius<br>" +
		"{<br>" +
		"<text style='color: #00a6eb'>&nbsp &nbsp ' next #selector '</text> : <text style='color: #2bff3c'>' Some description ',</text> <br>" +
		"<text style='color: #00a6eb'>&nbsp &nbsp ' shape '</text> :  <text style='color: #2bff3c'>' circle '</text> <br>" +
		"<text style='color: #00a6eb'>&nbsp &nbsp ' radius '</text> : 80<br>" +
		"}<br>",
*/

        //shape : 'circle',
        //radius: 80
		keyCode : 13
    },
    {
        "click #btn_add_grid_personas" : "Darle click en el boton 'Seleccionar'"
        //scrollAnimationSpeed : 2500
    },

    {
		"next #tab_1>div:nth-child(2)>section:nth-child(1)>div:nth-child(4)": "<text style='color: #2bff3c'>1 - Seleccione 'Condición de Pago'</text><br>" +
		"<text style='color: #00ebe7'>2 - Darle click en 'Siguiente'</text><br>"
    },
	
	/*----------------------------*/
	{
		onBeforeStart: function(){
            $(".tabs").tabs("select", "tab_2");
        },
        "click [data-lnk='_lnk_open_modal_it_add']" : "<text style='color: #2bff3c'>1 - Ahora agregaremos un Articulo a la venta</text><br>" +
		"<text style='color: #00ebe7'>2 - Darle click en el boton 'Agregar Item' </text><br>",
        //scrollAnimationSpeed : 2500
    },
	
	{
		//"next #mdl_grid_it_seleccion > .modal-content" : "Seleccione bien o servicio"
		"click [data-lnk='_lnk_open_modal_it_b']" : "Darle click en el boton 'Bien', para agregar articulo a la grilla",
		shape : 'circle'
        //"next #mdl_detalle_1_seleccion > .modal-content" : "Seleccione bien o servicio"
        //scrollAnimationSpeed : 2500
    },

    {
        "key [data-col='grid_bienes_filtro_all']" : "<text style='color: #2bff3c'>1 - Digite la descripcion del articulo para buscarlo</text><br>" +
		"<text style='color: #00ebe7'>2 - Presionar tecla 'Enter' </text><br>",
        //shape : 'circle',
        //radius: 80
		keyCode : 13
    },
    {
		"click #btn_add_grid_bienes" : "Darle click en el boton 'Seleccionar'"
        //scrollAnimationSpeed : 2500
    },
    {
        "next [data-col='ncant']" : "At this step we fix radius<br>" +
            "<text style='color: #00ebe7'>radius</text> - sets the size of the circle radius<br>" +
            "{<br>" +
            "<text style='color: #00a6eb'>&nbsp &nbsp ' next #selector '</text> : <text style='color: #2bff3c'>' Some description ',</text> <br>" +
            "<text style='color: #00a6eb'>&nbsp &nbsp ' shape '</text> :  <text style='color: #2bff3c'>' circle '</text> <br>" +
            "<text style='color: #00a6eb'>&nbsp &nbsp ' radius '</text> : 80<br>" +
            "}<br>"
        //shape : 'circle',
        //radius: 80
    },
    {
        "click #btn_add_grid_it" : "Agregar el articulo a la grilla",
        //scrollAnimationSpeed : 2500


		/*
		onBeforeStart: function(){
			fnc_modal_button_close_position();
			alert('jajaj');
        }*/
    },

	/*
    {
		onBeforeStart: function(){
			// $('#mdl_grid_it').modal('close');
			$('#mdl_grid_it_seleccion').modal('close');
			fnc_modal_button_close_position();
        },
        "click #mdl_grid_it_seleccion-close_out" : "Cancelar ventana",
		shape : 'circle'
        //scrollAnimationSpeed : 2500
    },
	*/

    {
		onBeforeStart: function(){
			$('#mdl_grid_it_seleccion').modal('close');
			//$('#mdl_grid_it_seleccion-close_out').css('display', 'none');
        },

		"next #grid_it>tbody>tr.selected" : "Se agrego correctamente el articulo a la grilla",
        
		//selector: '#grid_it tbody tr.selected',
		//event: 'next',
		//description: 'Se agrego el articulo correctamente',
		//shape: 'circle'
        //scrollAnimationSpeed : 2500
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

	/*
    {
		onBeforeStart: function(){
            fnc_child_registrar_tour();
        },
		// "click sweet-alert.visible>.confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
		"next sweet-alert.visible>.confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
    },
	*/

	/*
	{
		'custom selector' : 'This element is loading',
		event: 'custom_event_name',
		onBeforeStart: function () {

			if (fnc_registrar() === true) {
				enjoyhint_instance.trigger('custom_event_name');
			}

		},
	},

    {
		// "click sweet-alert.visible>.confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
		"click .confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
    },
*/
/*
    {
		onBeforeStart: function(){
            $(".tabs").tabs("select", "tab_lista");
        },
		"next #grid_lista>tbody>tr.selected" : "Se agrego correctamente la venta"
    }
*/



];

//set script config
enjoyhint_instance.set(enjoyhint_script_steps);

/*
function tour_uno() {
	enjoyhint_instance.set(enjoyhint_script_steps);
	enjoyhint_instance.run();
};
*/

//run Enjoyhint script
//enjoyhint_instance.run();



// ================================================================================

				
				//var enjoyhint_instance_2 = new EnjoyHint({});
				
				/*
				var enjoyhint_script_steps_2 = [
				
					//{
						// "click sweet-alert.visible>.confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
						//"click .confirm" : "<text style='color: #2bff3c'>Mensaje de respuesta</text><br>"
					//},

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
				*/
				//set script config
				//enjoyhint_instance_2.set(enjoyhint_script_steps_2);
				
				
				/*
				if ($('.confirm').is(":visible") === true ) {
					enjoyhint_instance_2.run();
				}
				*/
				
				/*
				function tour_dos() {
					enjoyhint_instance.set(enjoyhint_script_steps_2);
					enjoyhint_instance.run();
				};
				*/
// ================================================================================


//temporal
//$('.enjoyhint_close_btn').remove();