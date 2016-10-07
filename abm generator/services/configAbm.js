function getConfigurationUser(){
		//configuracion de grilla y formulario
	var columns = [
	{ field:"nombre" , text:"nombre" , type:"text"},
	{field:"apellido" , text:"apellido" , type:"text"},
	{field:"dni" , text:"dni" , type:"text"},
	{field:"id" , text:"acciones" , type:"tplEditDelete"}
	]
	
	return columns;

}