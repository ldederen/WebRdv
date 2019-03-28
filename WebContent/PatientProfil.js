$(document).ready(function() {
	
//	debloque les champs pour la mise à jour 
	this.maj = function() {
		if($("#Id").val()!==null){
		$("#MAJ").hide();
		$("#Nom").prop("readonly",false);
		$("#Prenom").prop("readonly",false);
		$("#Age").prop("readonly",false);
		$("#Email").prop("readonly",false);
		$("#Tel").prop("readonly",false);	
		$("#NumeroCarteVitale").prop("readonly",false);	
		$("#Username").prop("readonly",false);
		$("#Password").prop("readonly",false);
		

		$("#Id").prop("disabled",true);
		$("#Valid").show();}
	};
	
//	mets à jour les données et rebloque les champs
	this.valider=function(){
		$("#MAJ").show();
		$("#Id").prop("disabled",false);
		
		let patientId=parseInt($("#Id").val());	
		for(var patient of patients) {
			if(patientId===patient.id){
				break;
			}
		}
		patient.nom=$("#Nom").val();
		patient.prenom=$("#Prenom").val();
		patient.age=$("#Age").val();
		patient.email=$("#Email").val();
		patient.tel=$("#Tel").val();
		patient.numeroCarteVitale=$("#NumeroCarteVitale").val();
		patient.username=$("#Username").val();
		patient.password=$("#Password").val();
		
		
		

		$("#Nom").prop("readonly",true);
		$("#Prenom").prop("readonly",true);
		$("#Age").prop("readonly",true);	
		$("#Email").prop("readonly",true);
		$("#Tel").prop("readonly",true);
		$("#NumeroCarteVitale").prop("readonly",true);	
		$("#Username").prop("readonly",true);
		$("#Password").prop("readonly",true);		
		$("#Valid").hide();
		
		this.reload();
	};
	
	//charge les praticiens pour simuler une session utilisateur et mets les champs à vide
	this.reload=function(){
		$('#Id').empty();
		for(let patient of patients) {
			$("#Id").append("<option value='"+patient.id+"'>"+patient.prenom+" "+patient.nom+"</option>");
		}
		$("#Id").val('');
		$("#Nom").val('');
		$("#Prenom").val('');
		$("#Age").val('');
		$("#Email").val('');
		$("#Tel").val('');
		$("#NumeroCarteVitale").val('');
		$("#Username").val('');
		$("#Password").val('');
	};
	
	this.reload();
	
//	Charge les données du praticiens selectionné (selon la session utilisateur en cours)
	this.patientload=function(){
		let patientId=parseInt($("#Id").val());	
		for(var patient of patients) {
			if(patientId===patient.id){
				break;
			}
		}
		$("#Nom").val(patient.nom);
		$("#Prenom").val(patient.prenom);
		$("#Age").val(patient.age);
		$("#Email").val(patient.email);
		$("#Tel").val(patient.tel);
		$("#NumeroCarteVitale").val(patient.NumeroCarteVitale);
		$("#Username").val(patient.username);
		$("#Password").val(patient.password);
	}
	
});


