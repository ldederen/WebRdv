$(document).ready(function() {
	this.maj = function() {
		
//		On cache le bouton mettre à jour, et on rend les 3 input modifiables (non readonly)
		$("#MAJ").hide();
		$("#Username").prop("readonly",false);
		$("#Password").prop("readonly",false);
		$("#Password-confirmation").prop("readonly",false);

		$("#Valid").show();
	};
	
	this.valider=function(){
//		Inverse de la fonction maj
		$("#MAJ").show();
		$("#Username").prop("readonly",true);
		$("#Password").prop("readonly",true);
		$("#Password-confirmation").prop("readonly",true);		
		
		console.log($("#Username").val());
		console.log($("#Password").val());
		console.log($("#Password-confirmation").val());
		
		$("#Valid").hide();
	};
	
//	this.reload=function(){
//		for(let praticien of praticiens) {
//			$("#Id").append("<option value='"+praticien.id+"'>"+praticien.prenom+" "+praticien.nom+"</option>");
//		}
//		
//	};
	
//	this.reload();
	
//	this.praticienload=function(){
//		let praticienId=parseInt($("#Id").val());	
//		for(var praticien of praticiens) {
//			if(praticienId===praticien.id){
//				break;
//			}
//		}
//		console.log(praticienId);
//		console.log(praticien.id);
//		$("#Nom").val(praticien.nom);
//		$("#Prenom").val(praticien.prenom);
//		$("#Email").val(praticien.email);
//		$("#Tel").val(praticien.tel);
//		$("#Username").val(praticien.username)
//		$("#Password").val(praticien.nom);
//	}
	
});


