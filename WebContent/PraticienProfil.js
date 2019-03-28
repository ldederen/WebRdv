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
			$("#Id").append("<option value='"+praticien.id+"'>"+praticien.prenom+" "+praticien.nom+"</option>");
		}
	};
	this.reload();
});