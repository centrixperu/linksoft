/*
function fnc_obtener_lista_de_tipos_de_cambio() {
	var table = $('#grid_mon_tpc').DataTable();
	var pa_mon_tpcs = [];
	if (EntFact_modificar_tpc === true) {
		pa_mon_tpcs = table.$('input').serializeArray();
	}
	else {
		table.rows().every(function (rowIdx, tableLoop, rowLoop) {
			var row = table.data();
			pa_mon_tpcs.push({
						'name': row[rowIdx].ccod_mon,
						'value': row[rowIdx].ntc_c
						});
		})
	}
	return pa_mon_tpcs;
};
function fnc_obtener_tpc_moneda_cabecera(ic_cb_ccod_mon, ia_mon_tpcs) {
	var pc_ccod_mon_tpc = '';
	var pn_ntpc = 0;
	var pn_ntpc_result = 1;

	if (ic_cb_ccod_mon !== gc_ccod_mon_nac)
	{	
		$.each(ia_mon_tpcs, function() {
			pc_ccod_mon_tpc = this.name;
			pn_ntpc = this.value;
			
			if (ic_cb_ccod_mon === pc_ccod_mon_tpc)
			{
				pn_ntpc_result = pn_ntpc;
			}
		});
	}
	return pn_ntpc_result;
};
*/
function fnc_obtener_tpc_moneda_cabecera(ic_cb_ccod_mon, ia_mon_tpcs) {
	var pc_ccod_mon_tpc = '';
	var pn_ntpc = 0;
	var pn_ntpc_result = 1;

	if (ic_cb_ccod_mon !== gc_ccod_mon_nac)
	{
		for (var a = 0; a < ia_mon_tpcs.length; a++) {
			pc_ccod_mon_tpc = ia_mon_tpcs[a].ccod_mon;
			pn_ntpc = ia_mon_tpcs[a].ntc_c;
					
			if (ic_cb_ccod_mon === pc_ccod_mon_tpc)
			{
				pn_ntpc_result = pn_ntpc;
			}
		}
	}
	return pn_ntpc_result;
};