function Abm( columns ,data){
   this.columns = columns;
   this.data = data;

}
Abm.prototype.create = function(){
	var tpl = "";
	for(var i = 0 ; i < this.columns.length ; i++ ){
		tpl +=	this.insertField(this.data[0],i);
	}
	var form = document.getElementById('abm'); //
	form.innerHTML = tpl;
}
Abm.prototype.insertField = function(obj,i){
	var tpl = document.getElementById("tplForm").innerHTML;
	var text = obj[this.columns[i].field];	
	var id = this.columns[i].field;
	tpl = tpl.replace(/{fieldName}/g,id).replace(/{value}/g ,text);
	var form = document.getElementById('abm'); //
	return tpl;		
}