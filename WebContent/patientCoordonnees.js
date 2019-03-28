$(document).ready(function() {
	
	var self = this;
	
	this.mode = "";

	this.add = function() {
		this.mode = "add";
		this.cancel();
		$("#patientEdit").show();
	};

	this.edit = function(id) {
		this.mode = "edit";
		for(var patient of p) {
			if(patient.id === id) {
				break;
			}
		}
		
		$("#id").prop("readonly",true);
		$("#id").val(patient.id);
		$("#civilite").val(patient.civilite);
		$("#nom").val(patient.nom);
		$("#prenom").val(patient.prenom);
		$("#age").val(patient.age);
		$("#mail").val(patient.mail);
		$("#tel").val(patient.tel);
		$("#numeroCarteVitale").val(patient.numeroCarteVitale);
		$("#principal").val(patient.principal);
		
		$("#patientEdit").show();
	};

	this.save = function() {
		let exist = false;
		
		let patient = {};
		patient.id = parseInt($("#id").val());
		patient.civilite = $("#civilite").val();
		patient.nom = $("#nom").val();
		patient.prenom = $("#prenom").val();
		patient.age = parseInt($("#age")).val();
		patient.mail = $("#mail").val();
		patient.tel = parseInt($("#tel").val());
		patient.numeroCarteVitale = parseInt($("#numeroCarteVitale").val());
		patient.principal = $("#principal").val();
		
		
		for(var index in patients) {
			if(patients[index].id === patient.id) {
				exist = true;
				break;
			}
		}
		
		if(exist && this.mode === "edit") {
			patients[index] = patient;
		} else if(!exist) {
			patients.push(patient);
		}
		
		self.reload();
		
		self.cancel();
	};

	this.cancel = function() {
		this.mode = "";
		$("#patientEdit").hide();
		
		$("#id").prop("readonly",false);
		$("#id").val("");
		$("#civilite").val("");
		$("#nom").val("");
		$("#prenom").val("");
		$("#age").val("");
		$("#mail").val("");
		$("#tel").val("");
		$("#numeroCarteVitale").val("");
		$("#principal").val("");
	};

	this.remove = function(id) {
		let exist = false;
		
		for(var index in patients) {
			if(patients[index].id === id) {
				exist = true;
				break;
			}
		}
		
		if(exist) {
			patients.splice(index,1);
		}
		
		this.reload();
	};
	
	this.reload = function() {
		$("#patientTab tbody").empty();
		
		for(let patient of patients) {
			for(var civilite of civilites) {
				if(civilite.code === patient.civilite) {
					break;
				}
			}
			
			var praticien = {"nom":"","prenom":""};
			if(patient.praticien) {
				for(praticien of praticiens) {
					if(praticien.id === patient.praticien.id) {
						break;
					}
				}
			}
		}
	};
	
	this.reload();
	
	this.loadCivilite = function() {
		for(let civilite of civilites) {
			$("#civilite").append("<option value='"+civilite.code+"'>"+civilite.label+"</option>");
		}
	};
	
	this.loadCivilite();
	
	this.loadPraticien = function() {
		for(let praticien of praticiens) {
			$("#praticien").append("<option value='"+praticien.id+"'>"+praticien.nom+" "+ praticien.prenom +" "+ praticien.specialite +"</option>");
		}
	};
	
	this.loadPraticien();

});
