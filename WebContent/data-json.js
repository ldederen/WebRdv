var patients = [ {
	"id" : 1,
	"civilite" : "MLLE",
	"nom" : "CAUMES",
	"prenom" : "Géraldine",
	"age" : "26",
	"mail" : "maud@sopra.com",
	"tel" : "0606060606",
	"numeroCarteVitale" : "12256894102",
	"principal" : true,
	"praticien" : {
		"id" : 1
	}
}, {
	"id" : 1,
	"civilite" : "M.",
	"nom" : "DUBOURG",
	"prenom" : "JASON",
	"age" : "30",
	"mail" : "jason@sopra.com",
	"tel" : "0707070707",
	"numeroCarteVitale" : "18899552233",
	"principal" : true,
	"praticien" : {
		"id" : 2
	}
}, {
	"id" : 1,
	"civilite" : "M.",
	"nom" : "SARPOULET",
	"prenom" : "Jory",
	"age" : "27",
	"mail" : "jory@sopra.com",
	"tel" : "0808080808",
	"numeroCarteVitale" : "13355669877",
	"principal" : true,
	"praticien" : {
		"id" : 1
	}
}, {
	"id" : 1,
	"civilite" : "M.",
	"nom" : "DEDEREM",
	"prenom" : "Loïc",
	"age" : "24",
	"mail" : "loic@sopra.com",
	"tel" : "0909090909",
	"numeroCarteVitale" : "12233699778",
	"principal" : true,
	"praticien" : {
		"id" : 2
	}
}]

var patientsRdvAVenir = [ {
	"id" : 1,
	"Date" : "01/04/18",
	"lieu" : "Bordeaux",
	"motif" : "Maux de ventre",
	"nomDuPraticien" : "XXXXX",
}, {
	"id" : 2,
	"Date" : "20/04/19",
	"lieu" : "Pessac",
	"motif" : "Maux de tete",
	"nomDuPraticien" : "XXXXX",
}, {
	"id" : 3,
	"Date" : "11/06/19",
	"lieu" : "Talence",
	"motif" : "Rage de la dent droite",
	"nomDuPraticien" : "XXXXX",
}, {
	"id" : 4,
	"Date" : "05/09/19",
	"lieu" : "Libourne",
	"motif" : "Massage Shiatsu",
	"nomDuPraticien" : "XXXXX",
}];

var praticiens = [ {
		"id" : 1,
		"nom" : "SULTAN",
		"prenom" : "Eric",
		"mail":"esultan@ajc.com",
		"tel" : "06-12-36-54-98",
		"dureeCreneau" : 60 
	}, {
		"id" : 2,
		"nom" : "ABID",
		"prenom" : "Jordan",
		"mail":"jabid@ajc.com",
		"tel" : "06-12-36-87-98",
		"dureeCreneau" : 15
	} ];