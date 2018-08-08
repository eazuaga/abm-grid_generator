function Grid( columns ,data){
   this.columns = columns;
   this.data = data;
   this.insertRow = function(obj,index){
		var tabla = document.getElementById('grid');
		var thead = document.createElement('tbody');
		tabla.appendChild(thead);
		// Insertar la tercera fila
		//tabla.tBodies[0].insertRow(0);
		tabla.tBodies[0].insertRow(index);
		for(var i = 0 ; i < this.columns.length ; i++ ){
	    if(this.columns[i].type ==="text"){
           		var text = obj[this.columns[i].field];		
		} else 	{
		        var tpl = document.getElementById(columns[i].type).innerHTML;
				var editLink = "/Edit/"+obj[this.columns[i].field];
				var deleteLink = "/Delete/"+obj[this.columns[i].field];
				tpl = tpl.replace(/{id}/g,obj[this.columns[i].field]).replace(/{url-edit}/g ,editLink).replace(/{url-delete}/g ,deleteLink);
				var text = tpl;
		 }	
		insertColums(text,index,i);
	   }	
    }
	function insertColums(text,indexRow,indexCol){
		var tabla = document.getElementById('grid'); //todo . ddejar como campo privado
		tabla.tBodies[0].rows[indexRow].insertCell(indexCol);
		tabla.tBodies[0].rows[indexRow].cells[indexCol].innerHTML = text;
	}
}
Grid.prototype.create = function(){
	for(var i = 0 ; i < this.data.length ; i++ ){
		this.insertRow(this.data[i],i);
	}
}
Grid.prototype.CreateHead = function(){
	var tabla = document.getElementById('grid');
	var tpl = 	"<thead><tr>{th}</tr></thead>";
	var inner_thead = "";
	var tpl_th = 	"<th>{title}</th>";
	for(var i = 0 ; i < this.columns.length ; i++ ){
		//console.log(this.columns[i].field);
		inner_thead+= tpl_th.replace(/{title}/g ,this.columns[i].field );
	}
//	var l_tpl = tpl.replace('{th}' ,inner_thead );
	//console.log(l_tpl);
	var header = tabla.createTHead();
	header.innerHTML = inner_thead;
	//var row = header.insertRow(0);   
//	tabla.appendChild(l_tpl);

	
}
