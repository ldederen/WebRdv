$(document).ready(function() {
	this.maj = function() {
		
//		On cache le bouton mettre à jour, et on rend les 3 input modifiables (non readonly)
		$("#MAJ").hide();
		$("#Username").prop("readonly",false);
		$("#Password").prop("readonly",false);
		$("#Password-confirmation").prop("readonly",false);

		$("#Valid").show();
		$("#Cancel").show();
	};
	
	this.valider=function(){
//		Inverse de la fonction maj
		
		if ( $("#Password").val() != $("#Password-confirmation").val()) {
			$("#MAJ").after("<p>Les mots de passe ne correspondent pas.</p>");
			return;
		}
		
		$("#MAJ").show();
		$("#Username").prop("readonly",true);
		$("#Password").prop("readonly",true);
		$("#Password-confirmation").prop("readonly",true);		
		
		console.log($("#Username").val());
		console.log($("#Password").val());
		console.log($("#Password-confirmation").val());
		
		$("#Valid").hide();
		$("#Cancel").hide();
	};
	
	this.annuler = function() {		
		$("#MAJ").show();

		$("#Username").val("");
		$("#Password").val("");
		$("#Password-confirmation").val("");
		
		$("#Valid").hide();
		$("#Cancel").hide();
	}
	

	for (let eleve of this.eleves) {
		$("#users-tab").append("<tr><td>"+user.username+"</td><td>"+user.type+"</td><td><td><div class='btn-group'><button class='btn btn-primary' onclick='edit("+user.id+");'><i class='fas fa-edit'></i></button><button class='btn btn-danger' onclick='remove("+user.id+");'><i class='far fa-trash-alt'></i></button></div></td></tr>");
	}
	
});


