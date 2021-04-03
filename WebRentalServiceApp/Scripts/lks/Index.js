
function fnc_abrir_app_login() {
	open_form('/Home/frm_login', gc_group_window);
}


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