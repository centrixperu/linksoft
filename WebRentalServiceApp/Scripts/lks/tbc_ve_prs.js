/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																VARIABLES DE FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

var fa_frm_tab = ['Artículo', 'Cliente', 'Vendedor', 'Zona', 'Línea'];
var fc_frm_cb = 'form_main';

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES FORMULARIO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_child_set_menu()
{
	fnc_SET_variables_de_menu('2521');
};

function fnc_child_set_html() {
};

function fnc_child_ready() {
	// FORMA CORRECTA, ASI DEBEN ESTAR TODOS
	fnc_child_objects_load_functions();
	fnc_child_cargar_valores_iniciales();
	
	
	// $('body').attr('style', 'overflow: initial !important');
	
};

/*
fnc_child_objects_load_functions: Funcion que se maneja solo en el formulario hijo, carga funciones de objetos una sola vez.
*/
function fnc_child_objects_load_functions() {


	$(Obj_Col(fc_frm_cb, 'sel_grafico', 'select')).change(function()
	{
		var lc_ccod_opve =  $(this).val();
		if (lc_ccod_opve !== '') {

			$('#gf_barra_vertical').addClass('display_none');
			$('#gf_circular').addClass('display_none');
			$('#gf_barra_horizontal').addClass('display_none');
			$('#gf_area').addClass('display_none');
		
			if (lc_ccod_opve === '1')
			{
				$('#gf_circular').removeClass('display_none');
				fnc_gf_circular();
			}
			else if (lc_ccod_opve === '2')
			{
				$('#gf_barra_vertical').removeClass('display_none');
				fnc_gf_barra_vertical('bar');
			}
			else if (lc_ccod_opve === '3')
			{
				$('#gf_barra_horizontal').removeClass('display_none');
				fnc_gf_barra_horizontal();
			}
			else if (lc_ccod_opve === '4')
			{
				$('#gf_barra_vertical').removeClass('display_none');
				fnc_gf_barra_vertical('line');
			}
			else if (lc_ccod_opve === '5')
			{
				$('#gf_area').removeClass('display_none');
				fnc_gf_area();
			}
			
		}
		else {
			/*
			// Asignacion de valores
			fc_cb_ccod_mon = '';
			fn_cb_ccod_mon_tpc = 0;
			$(Obj_Col(fc_frm_cb, 'ccod_doc')).val('');
			$(Obj_Col(fc_frm_cb, 'cdsc_mon')).val('');
			$('.input-csim').attr('data-before', '');
			$(Obj_Col(fc_frm_cb, '_drt_ccod_ser')).empty();
			*/
		}
	});


};

/*
fnc_child_cargar_valores_iniciales: Funcion que se maneja solo en el formulario hijo, carga valores una vez, valores constantes en el formulario hijo.
*/
function fnc_child_cargar_valores_iniciales() {

	f_create_html_table(
						'grid_lista',
						'',
						false,
						'data-row_data',
						'', false, false, false
						);

};

/*
function frm_complemt()
{
	fnc_MOVE_obj('sync', 'c_sync');
};
*/


function fnc_child_cargar_valores_post_proceso()
{

	fnc_table_reload(
					'grid_lista',
					'/home/lq_usp_ve_ts_ve_list?ic_ccod_emp=' + gc_ccod_emp + '&ic_ccod_eje=' + gc_ccod_eje + '&ic_ccod_per=' + gc_ccod_per + '&ic_load_BD=load_BD',
					'grid_lista'
					);

	//fnc_MOVE_obj('sync', 'c_sync');

};

function fnc_objects_load_functions_post_child() {
	
};

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	TRANSACCIONES																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																	  GRID_LISTA																	::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_grid_lista_setear_campos_child_post(row_data) {
	//fr_row_data_cb = row_data;

};

function fnc_add_grid_lista() {
	//fnc_tabs_select_tab('tab_main', 'tab_1');
};


/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																		LINKS																		::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/



/*
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::																																					::
::																FUNCIONES DEL PROCESO																::
::																																					::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function fnc_gf_area ()
{
	// Area
	require(['echarts'], function (echarts) {
		var graphic = echarts.graphic;

		var chart = echarts.init(document.getElementById('gf_area'), null, {

		});
		
		chart.clear();
		chart.resize();
		
		var itemStyle = {
			normal: {
				// borderColor: 'white',
				// borderWidth: 3,
				// shadowBlur: 10,
				// shadowOffsetX: 0,
				// shadowOffsetY: 5,
				// shadowColor: 'rgba(0, 0, 0, 0.4)',
				lineStyle: {
					width: 1,
					
					color: '#1ab394',
					// color: 'rgba(116, 21, 219, 0.5)',
					
					// shadowBlur: 10,
					// shadowOffsetX: 0,
					// shadowOffsetY: 5,
					// shadowColor: 'rgba(0, 0, 0, 0.4)'
				},
				
				
				//areaStyle: {
				//	color: 'rgba(26,179,148, 0.3)'
				//}
				
				// ======================================================
				
				areaStyle: {
					opacity: 0.3,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(128, 255, 165)'
					}, {
						offset: 1,
						color: 'rgba(1, 191, 236)'
					}])
				}
				
				// ======================================================
	            /*
				areaStyle: {
					opacity: 0.4,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0, 221, 255)'
					}, {
						offset: 1,
						color: 'rgba(77, 119, 255)'
					}])
				}
				*/
				// ======================================================
				/*
				areaStyle: {
					opacity: 0.4,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(55, 162, 255)'
					}, {
						offset: 1,
						color: 'rgba(116, 21, 219)'
					}])
				}
				*/
				// ======================================================
				
				
				
			}
		};

		chart.setOption({
			/*
			legend: {
				data: ['line']
			},
			*/
			
			/*
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'line'
				}
			},
			*/
			
			xAxis: {
				data: pa_x_columnas,
				boundaryGap: false,
				// inverse: true,
				splitArea: {
					show: true
				}
			},
			yAxis: {
				boundaryGap: [0, 0],
				splitLine: {
					show: true
				}
			},
			series: [{
				name: 'Importe',
				type: 'line',
				stack: 'all',
				symbolSize: 0,
				data: pa_x_valores,
				itemStyle: itemStyle,
				smooth: true
			}
			]
		});
		
		window.onresize = chart.resize;
	});

};

function fnc_gf_circular ()
{
	
	// Grafico Circular
	require(['echarts'], function (echarts) {

		var chart = echarts.init(document.getElementById('gf_circular'), null, {

		});
		
		chart.clear();
		chart.resize();

		var itemStyle = {
			normal: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowOffsetY: 5,
					shadowColor: 'rgba(0, 0, 0, 0.4)'
					}
		};

		chart.setOption({
			legend: {
				data: pa_x_columnas
			},
			tooltip: {},
			series: [{
				name: 'Parte',
				type: 'pie',
				stack: 'all',
				symbol: 'circle',
				symbolSize: 10,
				selectedMode: 'single',
				selectedOffset: 20,
				roseType: true,
				data:[
					{value:'335', name:'Enero'},
					{value:'310', name:'Febrero'},
					{value:'234', name:'Marzo'},
					{value:'135', name:'Abril'},
					{value:'120', name:'Mayo'},
					{value:'335', name:'Junio'},
					{value:'310', name:'Julio'},
					{value:'234', name:'Agosto'},
					{value:'120', name:'Septiembre'},
					{value:'100', name:'Octubre'},											
					{value:'150', name:'Noviembre'},
					{value:'350', name:'Diciembre'}
				],
				itemStyle: itemStyle
			}]
		});
		
		window.onresize = chart.resize;
	})
};



function fnc_gf_barra_horizontal ()
{
	require((['echarts']), function (echarts) {

		var chart = echarts.init(document.getElementById('gf_barra_horizontal'));

		chart.clear();
		chart.resize();

		var itemStyle = {
			normal: {
				barBorderRadius: 5,
				label: {
					show: true,
					position: 'outside'
				}
			},
			emphasis: {
				/*
				label: {
					position: 'outside'
				},
				*/
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
				
				barBorderColor: '#FFFFFF',
				barBorderWidth: 1,
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowOffsetY: 0,
				shadowColor: 'rgba(0,0,0,0.5)'
			}
		};

		chart.setOption({

			tooltip : {
				trigger: 'axis',
				axisPointer : {
					type : 'shadow' // 'line' | 'shadow'
				}
			},

			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'value'
				}
			],
			yAxis : [
				{
					type : 'category',
					axisTick : {show: false},
					data : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio']
				}
			],
			series : [
				{
					name:'Importe',
					type:'bar',
					label: {
						normal: {
							show: true,
							position: 'inside'
						}
					},
					itemStyle: itemStyle,
					data:[300, 270, 340, 344, 300, 320, 310]
				}
			]
		});

		window.onresize = chart.resize;
	});
};

function fnc_gf_barra_vertical (ic_tipo)
{
	// Grafico de Barras
	require(['echarts'], function (echarts) {

		var chart = echarts.init(document.getElementById('gf_barra_vertical'));

		chart.clear();
		chart.resize();

		var itemStyle = {
			normal: {
				barBorderRadius: 5,
				label: {
					show: true,
					position: 'outside'
				}
			},
			emphasis: {
				label: {
					position: 'outside'
				},
				barBorderColor: '#FFFFFF',
				barBorderWidth: 1,
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowOffsetY: 0,
				shadowColor: 'rgba(0,0,0,0.5)'
			}
		};

		chart.setOption({
			backgroundColor: '#FFF',
			animationDurationUpdate: 1000,
			
			
			//tooltip: {},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			
			grid: {
				top: 50
			},
			xAxis: {
				data: pa_x_columnas,
				name: '',
				silent: false,
				axisTick: {
					alignWithLabel: true
				},
				axisLine: {
					onZero: true
				},
				splitLine: {
					show: true
				},
				splitArea: {
					show: true
				}
			},
			yAxis: {
				inverse: false,
				axisTick: {
					show: false
				},
				splitArea: {
					show: true
				}
			},
			series: [{
				name: 'Barra',
				
				//type: 'bar',
				type: ic_tipo,
				
				stack: 'one',
				itemStyle: itemStyle,
				cursor: '',
				
				lineStyle: {
					normal: {
						width: 2,
						shadowColor: 'rgba(0,0,0,0.4)',
						shadowBlur: 10,
						shadowOffsetY: 10
					}
				},
				
				data: pa_x_valores
			}]
		});

		window.onresize = chart.resize;
	
	});
};


function fnc_mdl_grid_it_post_finish_load_modal()
{
	/*
	var pn_ = ($("#col_c_sync").css('width')).toString();
	pn_ = pn_.substring(0, pn_.indexOf('px'));
	pn_ = (parseFloat(pn_)  + 100) + 'px !important';
	*/
	
	var pn_ = ($("#col_c_sync").css('width')).toString();
	pn_ = pn_ + ' !important';
	
	
	//$("#c_sync").css({ width: pn_ })
	$('#c_sync').attr('style', 'width: ' + pn_);
	
	// graficar_into();
};

/*
function graficar ()
{
	$('#mdl_grid_it').modal('open');
};
*/
