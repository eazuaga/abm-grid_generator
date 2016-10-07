function getAllUser(){
	//datos	viene de una api
	var data = [
	  { nombre:"Eduarod" , apellido:"azuaga" , dni:"30103343" , id:"1"},
	  { nombre:"TOMAS" , apellido:"azuaga" , dni:"301ASDADS03343" , id:"2"},
	  { nombre:"LEON" , apellido:"azuaga" , dni:"ASDSD0103343" , id:"3"},
	  { nombre:"migu" , apellido:"azuaga" , dni:"ASDSD0103343" , id:"4"},
	  { nombre:"antonio" , apellido:"azuaga" , dni:"ASDSD0103343", id:"5"}
	];
	
	return data;

}

function getUserById(id){

  //datos	viene de una api
	var data = [
	   { nombre:"Eduarod" , apellido:"azuaga" , dni:"30103343" , id:"1"},
	  { nombre:"TOMAS" , apellido:"azuaga" , dni:"301ASDADS03343" , id:"2"},
	  { nombre:"LEON" , apellido:"azuaga" , dni:"ASDSD0103343" , id:"3"},
	  { nombre:"migu" , apellido:"azuaga" , dni:"ASDSD0103343" , id:"4"},
	  { nombre:"antonio" , apellido:"azuaga" , dni:"ASDSD0103343", id:"5"}
	];
	
	return data[id-1]; // todo por ahora

}