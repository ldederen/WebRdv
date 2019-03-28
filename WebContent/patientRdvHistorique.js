$(document).ready(function() {
	
	var self = this;
	
	this.mode = ""; // mode de fonction par défault vide
	
	this.reload = function() { // Fonction pour rafraichir le tableau en y injectant dynamiquement les données du data-json.js
		$("#patientRdvAVenirTab tbody").empty();
		
		for(let rdvHistorique of patientsRdvHistorique) { // let "variable" of "tableau des données dans data-json"
			
			$("#patientRdvHistoriqueTab").append("<tr><td>"+rdvHistorique.Date+"</td><td>"+rdvHistorique.lieu+"</td><td>"+rdvHistorique.motif+"</td><td>"+rdvHistorique.nomDuPraticien+"</td></tr>");
			
		}
	};
	
	this.reload();
	
});
