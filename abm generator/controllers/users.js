var controller = controller || {};

controller.user = function (id) {
    document.title = 'Generics - home';
//datos	viene de una api
var data = [
  { nombre:"Eduarod" , apellido:"azuaga" , dni:"30103343" , id:"1"},
  { nombre:"TOMAS" , apellido:"azuaga" , dni:"301ASDADS03343" , id:"2"},
  { nombre:"LEON" , apellido:"azuaga" , dni:"ASDSD0103343" , id:"3"},
  { nombre:"LEON" , apellido:"azuaga" , dni:"ASDSD0103343" , id:"4"},
  { nombre:"LEON" , apellido:"azuaga" , dni:"ASDSD0103343", id:"5"}
];
//configuracion de grilla y formulario
var columns = [
{ field:"nombre" , text:"nombre" , type:"text"},
{field:"apellido" , text:"apellido" , type:"text"},
{field:"dni" , text:"dni" , type:"text"},
{field:"id" , text:"acciones" , type:"tplEditDelete"}
]
	
	//ver si esto puede ser generico
   if(id === undefined){ 
        var form = document.getElementById('abm'); //k
        form.innerHTML = ''
	   var g = new Grid(columns ,data);
	   g.create();
   }else {
        var IdIsNumber =  isNumber(id);
        var form = document.getElementById('grid'); //
        form.innerHTML = ''
		var action = IdIsNumber ? "edit" :"create"
		var options = { url : null , id : id ,action :action };
		var g = new Abm(columns ,data ,options);
		console.log(g);
		if(IdIsNumber){
			g.edit();
		} else {
		   	g.create();
		}
	
   }
   //helper
   function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

};