var routes = {};
var params = [];
var controller = controller || {};

controller.base = function (){
	this.View = function(){
	  console.log("retuen view");
	}

}

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
function change() {
     params = window.location.hash.substring(2).split('/');
    if (params[1] != null) {
	   if(isNumber( params[1])){
         route["Edit"+params[0]](params[1]);
	   }else {
         route[params[1]+params[0]]();
	   }

    }
    else {
        route[params[0]]();
     }

}

controller.home1 = function () {
    document.title = 'Generics - home';
    alert("gome");
};

// routes
//   /User
// -> controller.User.getAll()

//   /User/1
// -> controller.User.edit(1)


//   /User/add
// -> controller.User.create()


route = {
    '': controller.user,
    'home': controller.home1,
    'User': controller.user.getAll,
    'EditUser': controller.user.edit,
    'CreateUser': controller.user.create,
};
document.addEventListener('DOMContentLoaded', function () {
 change();
 window.onhashchange = change;
});
 

