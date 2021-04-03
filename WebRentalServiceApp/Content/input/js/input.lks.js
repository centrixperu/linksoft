(function($) {
    $.fn.jQueryClearButton = function(options){

        // Fin si el objeto no se muestra
		/*
        if (!this.is(':visible')) {
            return this;
        }
		*/

        var obj = this;
        var obj_id = obj.attr('id');
        var btn_class_name = 'input-clear-' + obj_id;

        //option
        var defaults = {
            'always': false, // siempre mostrar 'botón de borrar'
            'zindex': 0,
            'offset_right': 15,
            'button_width': 15,
            'button_height': 18,
            'color': '#aaa'
        };
        var setting = $.extend(defaults, options);

        // Deshabilitar el botón de cruz por defecto de IE
        $('body').append('<style> input::-ms-clear { visibility:hidden; } </style>');

        // Adjuntar en el elemento padre
        var btn_parent = $('<div style="position:relative; margin:0; padding:0; border:none;">');
        this.before(btn_parent);
        this.prependTo(btn_parent);

        //make batsu button
		var btn = $('<div class="' + btn_class_name + '"></div>');
		
        this.before(btn);

        // Estilo del Boton
        btn.css({
            'position': 'absolute',
            'display': 'none',
            'cursor': 'pointer',
            'z-index': setting.zindex,
            'width': setting.button_width + 'px',
            'height': setting.button_height + 'px',
            'color': setting.color
        });
		
		// Estilo del input
		obj.css({
			'padding-right': '20px'
        });

        // Establecer la posición del botón
        // Cuando el elemento de entrada es flotante, la altura de btn_parent se convierte en 0
        // En ese caso, deje que la altura del elemento de entrada sea la altura de btn_parent
        var btn_parent_height = btn_parent.height();
        if (!btn_parent_height) {
            btn_parent_height = obj.height();
        }

        // var offset_top = (btn_parent_height / 2) - (setting.button_height / 2) + 2;
        btn.css({
			'background-repeat': 'no-repeat',
			'background-image': 'url(../../images/iconos/x_01.png)',
			'background-position': '50% 50%',
			'background-size': '10px',
			'top': '7px',
            'right': '6px'
            // 'top': offset_top-2 + 'px',
            // 'right': setting.offset_right-13 + 'px'
        });

        // Boton Clear event's
        btn.on('click', function() {
			obj.val('').trigger('change').focus();
            if (!setting.always) {
                btn.hide();
            }
        });

        //input event - input
        obj.on('input', function() {
            if (obj.val()) {
                btn.show();
            } else {
                if (!setting.always) {
                    btn.hide();
                }
            }
        });

        if (setting.always) {
            // Mostrar siempre
            btn.show();
		}
		else {

			// Input event's
			obj.on('focus', function() {
				if (obj.is("[readonly]")) {return;}
				
				if (obj.val()) {
					btn.show();
				} else {
					btn.hide();
				}
			});
			
			obj.on('blur', function() {
				setTimeout('$(\'.' + btn_class_name + '\').hide()', 200);
			});

			obj.mouseenter(function() {
				if (obj.is("[readonly]")) {return;}
				
				 if (obj.val()) {
					btn.show();
				} else {
					btn.hide();
				}
			});
			
			obj.mouseout(function() {
				// btn.hide();
			});
				
			obj.on('mouseleave', function() {
				if (obj.is("[readonly]")) {return;}

				if (obj.is(":focus")) {return;}
				
				btn.hide();
			});
			
			// Boton Clear event's
			btn.mouseenter(function() {
				if (obj.is("[readonly]")) {return;}
				btn.show();
			});

        }
		
        // Método de la cadena de correspondencia (devolver esto)
        return (this);
    };
})(jQuery);