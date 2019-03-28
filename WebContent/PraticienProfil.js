$(document).ready(function() {
	
//	debloque les champs pour la mise à jour 
	this.maj = function() {
		if($("#Id").val()!==null){
		$("#MAJ").hide();
		$("#Nom").prop("readonly",false);
		$("#Prenom").prop("readonly",false);
		$("#Email").prop("readonly",false);
		$("#Tel").prop("readonly",false);	
		$("#Username").prop("readonly",false);
		$("#Password").prop("readonly",false);
		

		$("#Id").prop("disabled",true);
		$("#Valid").show();}
	};
	
//	mets à jour les données et rebloque les champs
	this.valider=function(){
		$("#MAJ").show();
		$("#Id").prop("disabled",false);
		
		let praticienId=parseInt($("#Id").val());	
		for(var praticien of praticiens) {
			if(praticienId===praticien.id){
				break;
			}
		}
		praticien.nom=$("#Nom").val();
		praticien.prenom=$("#Prenom").val();
		praticien.email=$("#Email").val();
		praticien.tel=$("#Tel").val();
		praticien.username=$("#Username").val();
		praticien.nom=$("#Password").val();
		
		
		

		$("#Nom").prop("readonly",true);
		$("#Prenom").prop("readonly",true);
		$("#Email").prop("readonly",true);
		$("#Tel").prop("readonly",true);	
		$("#Username").prop("readonly",true);
		$("#Password").prop("readonly",true);		
		$("#Valid").hide();
		
		this.reload();
	};
	
	//charge les praticiens pour simuler une session utilisateur et mets les champs à vide
	this.reload=function(){
		$('#Id').empty();
		for(let praticien of praticiens) {
			$("#Id").append("<option value='"+praticien.id+"'>"+praticien.prenom+" "+praticien.nom+"</option>");
		}
		$("#Id").val('');
		$("#Nom").val('');
		$("#Prenom").val('');
		$("#Email").val('');
		$("#Tel").val('');
		$("#Username").val('');
		$("#Password").val('');
	};
	
	this.reload();
	
//	Charge les données du praticiens selectionné (selon la session utilisateur en cours)
	this.praticienload=function(){
		let praticienId=parseInt($("#Id").val());	
		for(var praticien of praticiens) {
			if(praticienId===praticien.id){
				break;
			}
		}
		$("#Nom").val(praticien.nom);
		$("#Prenom").val(praticien.prenom);
		$("#Email").val(praticien.email);
		$("#Tel").val(praticien.tel);
		$("#Username").val(praticien.username);
		$("#Password").val(praticien.nom);
	}
	
});


