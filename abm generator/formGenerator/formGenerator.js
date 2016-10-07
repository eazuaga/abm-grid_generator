function Abm( columns ,data , options){
   this.columns = columns;
   this.data = data;
   this.options = options;
   this.entityName = getPath()[0];
   this.id = getPath()[1];
}
Abm.prototype.create = function(){
	var tpl = "";
	for(var i = 0 ; i < this.columns.length ; i++ ){
		tpl +=	this.insertField(null,i);
	}
	var form = document.getElementById('abm'); //
	form.innerHTML = tpl;
}
Abm.prototype.edit = function(){
	var tpl = "";
	for(var i = 0 ; i < this.columns.length ; i++ ){
		//tpl +=	this.insertField(this.data[0],i);
		tpl +=	this.insertField(this.data,i);
	}
	var form = document.getElementById('abm'); //
	form.innerHTML = tpl;
}
Abm.prototype.insertField = function(obj,i){
	var tpl = document.getElementById("tplForm").innerHTML;
	var text = obj === null ? "" : obj[this.columns[i].field];	
	var id = this.columns[i].field;
	tpl = tpl.replace(/{fieldName}/g,id).replace(/{value}/g ,text);
	var form = document.getElementById('abm'); //
	return tpl;		
}

function getPath(){
 return window.location.hash.substring(2).split('/');;

}