var controller = controller || {};



controller.user = function (id) {
    document.title = 'Generics - home';
    this.base = controller.base();
};


controller.user.getAll = function(){
	
	   //getdata
	    var data = getAllUser();
	   
	   //getconfigaration
	    var columns = getConfigurationUser();

	 var form = document.getElementById('abm'); //k
			form.innerHTML = ''
		   var g = new Grid(columns ,data);
		   g.create();

}

controller.user.edit = function(id){
    
	 //getdata
	    var data = getUserById(id);
	   
	   //getconfigaration
	    var columns = getConfigurationUser();

	// var IdIsNumber =  isNumber(id);
        var form = document.getElementById('grid'); //
        form.innerHTML = ''
		//var action = IdIsNumber ? "edit" :"create"
	//	var action =  "edit" ;
		var options = { url : null , id : id  };
		var g = new Abm(columns ,data ,options);
		console.log(g);
		
			g.edit();
	/*	if(IdIsNumber){
			g.edit();
		} else {
		   	g.create();
		}*/


}
controller.user.create = function(){
    
	   //getconfigaration
	    var columns = getConfigurationUser();

	// var IdIsNumber =  isNumber(id);
        var form = document.getElementById('grid'); //
        form.innerHTML = ''
		//var action = IdIsNumber ? "edit" :"create"
	//	var action =  "create" ;
		var options = { url : null , id : null  };
		var g = new Abm(columns ,null ,options);
		console.log(g);
		g.create();

}
