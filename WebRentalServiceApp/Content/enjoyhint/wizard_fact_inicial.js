
//initialize instance
var enjoyhint_instance = new EnjoyHint({});

//simple config.
//Only one step - highlighting(with description) "New" button
//hide EnjoyHint after a click on the button.
var enjoyhint_script_steps = [
    {
        //"click #a_usu_opts": 'Hello, I\'d like to tell you about EnjoyHint.<br> Click "Next" to proceed.',

		"click #a_usu_opts": "Hola, este proceso te ayudara a realizar una venta.<br>" +
		"<text style='color: #00a6eb'>'Acción'</text> : <text style='color: #2bff3c'>'Hazle Click en el boton (mas opciones)'</text> <br>",
		
		shape : 'circle'
    },
    {	
        // "click #opc01": "You can select different blocks. For example, let's select title.<br>" +
        "click [data-lnk='_lnk_opt_2']": "You can select different blocks. For example, let's select title.<br>" +
            "This event has a very simple code.<br>" +
            "{<br>" +
            "<text style='color: #00a6eb'>&nbsp &nbsp ' next #title '</text> : <text style='color: #2bff3c'>' Some description '</text> <br>" +
            "}<br>" +
            "<text style='color: #00ebe7'>next</text> - event (all events are described in the documentation)<br>" +
            "<text style='color: #00ebe7'>#title</text> - selector <br>" +
            "<text style='color: #00ebe7'>Some description</text> - Description for the block <br>"
		//shape : 'circle'
    },
	/*
    {
        "next #1" : "Complete la informacion general"
        //showSkip: false
    },
	*/
	/*----------------------------*/
	
	
	/*----------------------------*/
	
    {
		"click [data-lnk='_lnk_open_modal_prs']" : "Buscador de clientes"
    },
    {
        "next [data-col='grid_personas_filtro_all']" : "At this step we fix radius<br>" +
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
        "click #btn_add_grid_personas" : "Seleccione el cliente"
        //scrollAnimationSpeed : 2500
    },
	
	/*----------------------------*/
	{
		onBeforeStart: function(){
            $(".tabs").tabs("select", "tab_2");
        },
        "click [data-lnk='_lnk_open_modal_it_add']" : "Seleccione item"
        //scrollAnimationSpeed : 2500
    },
	
	{
		//"next #mdl_grid_it_seleccion > .modal-content" : "Seleccione bien o servicio"
		"click [data-lnk='_lnk_open_modal_it_b']" : "Agregar articulo a la grilla",
		shape : 'circle'
        //"next #mdl_detalle_1_seleccion > .modal-content" : "Seleccione bien o servicio"
        //scrollAnimationSpeed : 2500
    },

    {
        "next [data-col='grid_bienes_filtro_all']" : "At this step we fix radius<br>" +
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
        "click #btn_add_grid_bienes" : "Asignar el bien seleccionado"
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
        "click #btn_add_grid_it" : "Agregar el bien a la grilla",
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

		"next #grid_it>tbody>tr.selected" : "Se agrego el articulo correctamente",
        
		//selector: '#grid_it tbody tr.selected',
		//event: 'next',
		//description: 'Se agrego el articulo correctamente',
		//shape: 'circle'
        //scrollAnimationSpeed : 2500
    },


    {
        //"click #a_usu_opts": 'Hello, I\'d like to tell you about EnjoyHint.<br> Click "Next" to proceed.',

		"click #a_usu_opts": "Hola, este proceso te ayudara a realizar una factura.<br>" +
		"<text style='color: #00a6eb'>' Acción '</text> : <text style='color: #2bff3c'>' Hazle Click en el boton (mas opciones) '</text> <br>",
		
		shape : 'circle'
    },

    {
        "click [data-lnk='_lnk_opt_r']": "You can select different blocks. For example, let's select title.<br>" +
            "This event has a very simple code.<br>" +
            "{<br>" +
            "<text style='color: #00a6eb'>&nbsp &nbsp ' next #title '</text> : <text style='color: #2bff3c'>' Some description '</text> <br>" +
            "}<br>" +
            "<text style='color: #00ebe7'>next</text> - event (all events are described in the documentation)<br>" +
            "<text style='color: #00ebe7'>#title</text> - selector <br>" +
            "<text style='color: #00ebe7'>Some description</text> - Description for the block <br>"
		//shape : 'circle'
    },

	/*----------------------------*/
	
	
    {
        "key #banner" : "You can attach handlers to keyboard events.<br>" +
            "<text style='color: #00ebe7'>keyCode</text> - key code for any 'key' event.<br>" +
            "{<br>" +
            "<text style='color: #00a6eb'>&nbsp &nbsp ' key #selector '</text> : <text style='color: #2bff3c'>' Some description ',</text> <br>" +
            "<text style='color: #00a6eb'>&nbsp &nbsp ' keyCode '</text> : 13<br>" +
            "}<br>" +
            "Enter some text and press 'Enter'",
        keyCode : 13
    }

];

//set script config
enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
//enjoyhint_instance.run();

//temporal
$('.enjoyhint_close_btn').remove();