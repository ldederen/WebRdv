$(document).ready(function() {
	
	var self = this;
	
	this.mode = "";

	this.add = function() {
		this.mode = "add";
		this.cancel();
		$("#patientRdvAVenirEdit").show();
	};

	this.remove = function(id) {
		let exist = false;
		
		for(var index in patientsRdvAVenir) {
			if(patientsRdvAVenir[index].id === id) {
				exist = true;
				break;
			}
		}
		
		if(exist) {
			patientsRdvAVenir.splice(index,1);
		}
		
		this.reload();
	};
	
	this.reload = function() {
		$("#patientRdvAVenirTab tbody").empty();
		
		for(let rdvAVenir of patientsRdvAVenir) {
			
			$("#patientRdvAVenirTab").append("<tr><td>"+rdvAVenir.Date+"</td><td>"+rdvAVenir.lieu+"</td><td>"+rdvAVenir.motif+"</td><td>"+rdvAVenir.nomDuPraticien+"</td><td><div><button type='button' class='btn btn-primary'><i class='fas fa-edit'></i></button><button type='button' class='btn btn-primary' onclick = 'remove("+rdvAVenir.id+");'><i class='far fa-trash-alt'></i></button></div></td></tr>");
			
		}
	};
	
	this.reload();
	
});
