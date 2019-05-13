$(document).ready(function() {

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





/*

Primeros Pasos Git

->git clone ulr
->git add .  or git add file_name
->git status
->git diff
->git commit -m "Coment"
->git push

->


*/