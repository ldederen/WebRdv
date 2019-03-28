$(document).ready(function() {
	this.maj = function() {
		$("#MAJ").hide();
		$("#Nom").prop("readonly",false);
		$("#Prenom").prop("readonly",false);
		$("#Email").prop("readonly",false);
		$("#Tel").prop("readonly",false);
		$("#Username").prop("readonly",false);
		$("#Password").prop("readonly",false);
		
		
		$("#Valid").show();
	};
	
	this.valider=function(){
		$("#MAJ").show();
		
		$("#Valid").show();
	};
	
	this.reload=function(){
		for(let praticien of praticiens) {
			$("#formateur").append("<option value='"+formateur.id+"'>"+formateur.prenom+" "+formateur.nom+"</option>");
		}
	};
	this.reload();
});