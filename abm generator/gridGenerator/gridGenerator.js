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
