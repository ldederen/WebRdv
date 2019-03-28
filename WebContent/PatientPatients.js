$(document).ready(function() {
	
	var self = this;
	
	this.mode = "";

	this.add = function() {
		this.mode = "add";
		this.cancel();
	};
	
	this.openWindow = function() {
		$("#patientDelete").show();
	};
	
	this.closeWindow = function() {
		$("#patientDelete").hide();
	};

	this.edit = function(id) {
		this.mode = "edit";
		for(var patient of patients) {
			if(patient.id === id) {
				break;
			}
		}
		
		$("#id").prop("readonly",true);
		$("#id").val(patient.id);
		$("#nom").val(patient.nom);
		$("#prenom").val(patient.prenom);
		$("#age").val(patient.age);
		$("#mail").val(patient.mail);
		$("#tel").val(patient.tel);
		$("#numeroCarteVitale").val(patient.numeroCarteVitale);
		$("#rue").val(patient.adresse.rue);
		$("#codePostal").val(patient.adresse.codePostal);
		$("#ville").val(patient.adresse.ville);
		
		$("#patientEdit").show();
	};

	this.save = function() {
		let exist = false;
		
		let patient = {};
		patient.id = parseInt($("#id").val());
		patient.nom = $("#nom").val();
		patient.prenom = $("#prenom").val();
		patient.age = parseInt$("#age").val();
		patient.mail = $("#mail").val();
		patient.tel = $("#tel").val();
		patient.numeroCarteVitale = $("#numeroCarteVitale").val();
		patient.rue = $("#rue").val();
		patient.codePostal = $("#codePostal").val();
		patient.ville = $("#ville").val();
		
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
		$("#nom").val("");
		$("#prenom").val("");
		$("#age").val("");
		$("#mail").val("");
		$("#tel").val("");
		$("#carteVitale").val("");
		$("#rue").val("");
		$("#codePostal").val("");
		$("#ville").val("");
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
		}
	};
// var formateur = {"nom":"","prenom":""};
// if(patient.formateur) {
// for(formateur of formateurs) {
// if(formateur.id === patient.formateur.id) {
// break;
// }
// }
// }
// let dtNaissance = new Date(patient.dtNaissance);
// $("#patientTab").append("<tr><th>"+patient.id+"</th><td>"+patient.nom+"</td><td>"+patient.prenom+"</td><td>"+patient.age+"</td><td>"+patient.rue+"</td><td>"+patient.codePostal+"</td><td>"+patient.ville+"</td><td><div
// class='btn-group'><button class='btn btn-primary'
// onclick='edit("+patient.id+");'><i class='fas fa-edit'></i></button><button
// class='btn btn-danger' onclick='remove("+patient.id+");'><i class='far
// fa-trash-alt'></i></button></div></td></tr>");
// }
	
	
	this.reload();
	
// this.loadFormateur = function() {
// for(let formateur of formateurs) {
// $("#formateur").append("<option value='"+formateur.id+"'>"+formateur.nom+" "+
// formateur.prenom +"</option>");
// }
// };
	
	this.loadFormateur();
});
