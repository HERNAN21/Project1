$(document).ready(function() {


	listado();

	var data=[
				{"id":"01","descripcion":"test1"},
				{"id":"01","descripcion":"test1"},
				{"id":"02","descripcion":"test2"},
				{"id":"02","descripcion":"test2"},
				{"id":"03","descripcion":"test3"},
				{"id":"03","descripcion":"test3"},
				{"id":"03","descripcion":"test3"},

			];
	// var data={"01":"test1","02":"test2","03":"test3"};
	// var data_list=$.unique(data);
	var set=new Set(data.map(JSON.stringify));
	var data_list = Array.from(set).map(JSON.parse);
	
	var divfirst=$("#list1");
	$.each(data_list, function(i, listado) {
		var divchild="<div id='"+listado.id+"' class='card-body bg-success'>"+listado.descripcion+"</div>";
		divfirst.append(divchild);
	});

	var hijos=[
			{"id":'01',"nombres":"Hrojas1"},
			{"id":'01',"nombres":"Hrojas2"},
			{"id":'02',"nombres":"Hutani1"},
			{"id":'02',"nombres":"Hutani2"},
			{"id":'02',"nombres":"Hutani3"},
			{"id":'02',"nombres":"Hutani4"},
			{"id":'03',"nombres":"Hernan1"},
			{"id":'03',"nombres":"Hernan2"},
			{"id":'03',"nombres":"Hernan3"},
		];
	// console.log(hijos);
	$("#list1").find('div').each(function(i) {
		var a=$(this).attr("id");
		$.each(hijos, function(hi, listar_hijo) {
			 if (a==listar_hijo.id) {
			 	var te="<li class='bg-info'>"+listar_hijo.nombres+"</li>";
			 	$("#"+a).append(te);
			 }
		});
	});



});


function listado() {
	var listado_persona=[
		{"id":1,'nombres':'Hernan1','apellido_p':'Rojas1','apellido_m':'Utani1'},
		{"id":2,'nombres':'Hernan2','apellido_p':'Rojas2','apellido_m':'Utani2'},
		{"id":3,'nombres':'Hernan3','apellido_p':'Rojas3','apellido_m':'Utani3'},
		{"id":4,'nombres':'Hernan4','apellido_p':'Rojas4','apellido_m':'Utani4'},
		{"id":5,'nombres':'Hernan5','apellido_p':'Rojas5','apellido_m':'Utani5'},
		{"id":6,'nombres':'Hernan6','apellido_p':'Rojas6','apellido_m':'Utani6'},
	];

	var tbody=$('#listado tbody');
	tbody.find('tr').remove();
	$.each(listado_persona, function(i, listado) {
		var tr="<tr>"+
			"<td>"+(i+1)+"</td>"+
			"<td>"+listado.nombres+"</td>"+
			"<td>"+listado.apellido_p+"</td>"+
			"<td>"+listado.apellido_m+"</td>"+
			"<td>"+
				"<button onclick='pasardatos(this);'>Seleccionar</button>"+
			"</td>"+
		"</tr>";
		tbody.append(tr);
	});
	// console.log(listado_persona);

}





function pasardatos(obj) {
	var id=$(obj).parent().parent().find('td').eq(0).text();
	var nombre=$(obj).parent().parent().find('td').eq(1).text();
	var apellidoP=$(obj).parent().parent().find('td').eq(2).text();
	var apellidoM=$(obj).parent().parent().find('td').eq(3).text();
	$("#id").val(id);
	$("#nombres").val(nombre);
	$("#apellidoP").val(apellidoP);
	$("#ApellidoM").val(apellidoM);

	$("#modal_id").hide(0);
}




const position = {
		"positions":[
			{
				"id":1,
				"position_name":"LIDER",
				/*"dependency":[
					{'id':0, 'dependency_name':'', 'quantity': 2},
				],*/
			},
		    {
		    	'id':2, 
		    	'position_name':"CLIENTE_VIP",
		    	/*"dependency":[
		    		{'id':0, 'dependency_name':'', 'quantity': 4},
		    	],*/
			},
		    {
		    	'id':3, 
		    	'position_name':"JADE",
		    },
		    {
		    	'id':4, 
		    	'position_name':"PERLA",
			},
		    {
		    	'id':5, 
		    	'position_name':"RUBI"
			},
		    {
		    	'id':6, 
		    	'position_name':"ESMERALDA",
		    },
		    {
		    	'id':7, 
		    	'position_name':"ZAFIRO",
			},
		    {
		    	'id':8, 
		    	'position_name':"DIRECTOR",
		    },
		    {
		    	'id':9, 
		    	'position_name':"SENIORT_DIRECTOR",
			},
		    {
		    	'id':10, 
		    	'position_name':"EXECUTIVE_DIRECTOR",
			},
		    {
		    	'id':11, 
		    	'position_name':"SENIOR_EXECUTIVE_DIRECTOR",
		    },
		    {
		    	'id':12, 
		    	'position_name':"DIAMOND_DIRECTOR",
			},
		    {
		    	'id':13, 
		    	'position_name':"PLATINUM_DIRECTOR",
		    },
		    {
		    	'id':14, 
		    	'position_name':"AMBASSADOR_DIRECTOR",
		    },
		],


}


var dependency={
		"dependency":[
			{ 'position_id':6, 'position_calif':5, 'quantity': 1 },
			{ 'position_id':7, 'position_calif':5, 'quantity': 2 },
			{ 'position_id':8, 'position_calif':5, 'quantity': 3 },
			{ 'position_id':9, 'position_calif':5, 'quantity': 2 },
			{ 'position_id':9, 'position_calif':8, 'quantity': 1 },
			{ 'position_id':10, 'position_calif':5, 'quantity': 1 },
			{ 'position_id':10, 'position_calif':8, 'quantity': 2 },
			{ 'position_id':11, 'position_calif':5, 'quantity': 2 },
			{ 'position_id':11, 'position_calif':8, 'quantity': 3 },
		],
}

var pagado_como=0;
var sumar=0;
for (var i = 0; i < position.positions.length; i++) {
	// console.log(position.positions[i].id)
	if (position.positions[i].id==9) {
		for (var d = 0; d < dependency.dependency.length; d++) {
			// console.log(dependency.dependency[d]);
			if (dependency.dependency[d].position_id==position.positions[i].id && dependency.dependency[d].quantity>=1) {
				pagado_como=position.positions[i].id;
				console.log(pagado_como);
			}
		}
	}
}

// console.log(pagado_como);

// console.log(position.positions);

/*function licalif(id) {
	
}*/






/*

Primeros Pasos Git

->git clone ulr
->git add .  or git add file_name
->git status
->git diff
->git commit -m "Coment"
->git push

->git pull

	->git push origin master 
	->git remote add origin <server>
->



	https://rogerdudler.github.io/git-guide/index.es.html
*/