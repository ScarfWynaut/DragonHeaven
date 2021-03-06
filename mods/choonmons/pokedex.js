exports.BattlePokedex = {
	venusaur: {
		inherit: true,
		baseStats: {hp:83, atk:85, def:89, spa:100, spd:109, spe:84},
		abilities: {0:"Overgrow", H:"Leaf Guard"},
		otherFormes: ["venusaurmegax", "venusaurmegay"]
	},
	venusaurmega: {
		inherit: true,
		baseStats: {hp:83, atk:100, def:130, spa:119, spd:144, spe:74}
	},
	charizard: {
		inherit: true,
		baseStats: {hp:78, atk:89, def:78, spa:109, spd:85, spe:100}
	},
	charizardmegax: {
		inherit: true,
		types: ["Fire", "Dragon", "caw"],
		baseStats: {hp:83, atk:140, def:107, spa:135, spd:85, spe:100}
	},
	charizardmegay: {
		inherit: true,
		baseStats: {hp:83, atk:109, def:84, spa:159, spd:115, spe:100}
	},
	blastoise: {
		inherit: true,
		types: ["Water", "Steel"],
		baseStats: {hp:84, atk:85, def:109, spa:89, spd:105, spe:83},
		otherFormes: ["blastoisemegax", "blastoisemegay"]
	},
	blastoisemega: {
		inherit: true,
		types: ["Water", "Steel"],
		baseStats: {hp:84, atk:100, def:119, spa:169, spd:115, spe:63}
	},
	butterfree: {
		inherit: true,
		types: ["Bug", "Psychic", "caw"],
		baseStats: {hp:105, atk:50, def:60, spa:110, spd:90, spe:65},
		abilities: {0:"Swarm", 1:"Tinted Lens", H:"Magic Guard"},
		otherFormes: ["butterfreemega"]
	},
	beedrill: {
		inherit: true,
		types: ["Bug", "Poison", "caw"],
		baseStats: {hp:65, atk:110, def:90, spa:50, spd:60, spe:105},
		abilities: {0:"Swarm", 1:"Technician", H:"Sniper"}
	},
	pidgeot: {
		inherit: true,
		baseStats: {hp:83, atk:60, def:85, spa:110, spd:90, spe:101}
	},
	pidgeotmega: {
		inherit: true,
		baseStats: {hp:83, atk:60, def:95, spa:150, spd:105, spe:136}
	},
	fearow: {
		inherit: true,
		baseStats: {hp:83, atk:105, def:80, spa:60, spd:75, spe:102},
		abilities: {0:"Defiant", 1:"Keen Eye", H:"Sniper"},
		otherFormes: ["fearowmega"]
	},
	pichu: {
		inherit: true,
		types: ["Electric", "Ground"],
		evos: ["pikachu","raichu"]
	},
	pikachu: {
		inherit: true,
		types: ["Electric", "Ground"],
		baseStats: {hp:66, atk:121, def:88, spa:110, spd:88, spe:132},
		abilities: {0:"Static", 1:"Lightning Rod", H:"Sheer Force"},
		evos: []
	},
	pikachucosplay: {
		inherit: true,
		types: ["Electric", "Ground"],
		gender: '',
		baseStats: {hp:66, atk:121, def:88, spa:110, spd:88, spe:132},
		abilities: {0:"Static", 1:"Lightning Rod", H:"Sheer Force"}
	},
	pikachurockstar: {
		inherit: true,
		types: ["Electric", "Steel"],
		gender: '',
		baseStats: {hp:66, atk:132, def:110, spa:99, spd:77, spe:121},
		abilities: {0:"Static", 1:"Lightning Rod", H:"Filter"}
	},
	pikachubelle: {
		inherit: true,
		types: ["Electric", "Ice"],
		gender: '',
		baseStats: {hp:66, atk:110, def:121, spa:110, spd:121, spe:77},
		abilities: {0:"Static", 1:"Lightning Rod", H:"Magic Bounce"}
	},
	pikachupopstar: {
		inherit: true,
		types: ["Electric", "Fairy"],
		gender: '',
		baseStats: {hp:66, atk:88, def:88, spa:132, spd:121, spe:110},
		abilities: {0:"Static", 1:"Lightning Rod", H:"Magic Guard"}
	},
	pikachuphd: {
		inherit: true,
		types: ["Electric", "Psychic"],
		gender: '',
		baseStats: {hp:66, atk:132, def:99, spa:132, spd:110, spe:66},
		abilities: {0:"Static", 1:"Lightning Rod", H:"Analytic"}
	},
	pikachulibre: {
		inherit: true,
		types: ["Electric", "Fighting"],
		gender: '',
		baseStats: {hp:66, atk:143, def:121, spa:77, spd:121, spe:77},
		abilities: {0:"Static", 1:"Lightning Rod", H:"Iron Fist"}
	},
	raichu: {
		inherit: true,
		types: ["Electric", "Dark"],
		baseStats: {hp:65, atk:117, def:104, spa:117, spd:104, spe:78},
		abilities: {0:"Static", 1:"Lightning Rod", H:"Tough Claws"},
		otherFormes: ["raichumega"]
	},
	golduck: {
		inherit: true,
		types: ["Water", "Ghost"],
		baseStats: {hp:90, atk:82, def:78, spa:115, spd:90, spe:85},
		abilities: {0:"Cloud Nine", 1:"Swift Swim", H:"Drizzle"}
	},
	alakazam: {
		inherit: true,
		baseStats: {hp:55, atk:50, def:45, spa:135, spd:100, spe:120}
	},
	alakazammega: {
		inherit: true,
		types: ["Psychic", "caw"],
		baseStats: {hp:55, atk:50, def:65, spa:175, spd:110, spe:150},
		abilities: {0:"Technician"}
	},
	machamp: {
		inherit: true,
		otherFormes: ["machampmega"]
	},
	slowbro: {
		inherit: true,
		baseStats: {hp:95, atk:100, def:110, spa:75, spd:80, spe:30}
	},
	slowbromega: {
		inherit: true,
		baseStats: {hp:95, atk:130, def:180, spa:75, spd:80, spe:30}
	},
	slowking: {
		inherit: true,
		otherFormes: ["slowkingmega"]
	},
	gengar: {
		inherit: true,
		types: ["Ghost", "Poison", "caw"],
		abilities: {0:"Prankster"}
	},
	gengarmega: {
		inherit: true,
		types: ["Ghost", "Poison", "caw"],
		abilities: {0:"Prankster"}
	},
	happiny: {
		inherit: true,
		types: ["Normal", "Fairy"],
		baseStats: {hp:128, atk:10, def:80, spa:10, spd:80, spe:32},
		evos: ["chansey","blissey"]
	},
	chansey: {
		inherit: true,
		baseStats: {hp:255, atk:90, def:140, spa:15, spd:15, spe:55},
		evos: []
	},
	blissey: {
		inherit: true,
		types: ["Fairy"],
		baseStats: {hp:255, atk:15, def:15, spa:90, spd:140, spe:55},
		prevo: "happiny"
	},
	mrmime: {
		inherit: true,
		baseStats: {hp:90, atk:45, def:105, spa:100, spd:130, spe:70},
		otherFormes: ["mrmimemega"]
	},
	pinsir: {
		inherit: true,
		baseStats: {hp:75, atk:130, def:100, spa:55, spd:70, spe:95}
	},
	pinsirmega: {
		inherit: true,
		baseStats: {hp:75, atk:160, def:120, spa:65, spd:90, spe:115}
	},
	gyarados: {
		inherit: true,
		types: ["Water", "Dark", "caw"]
	},
	gyaradosmega: {
		inherit: true,
		types: ["Water", "Dark", "caw"]
	},
	porygon: {
		inherit: true,
		types: ["Electric", "caw"],
		abilities: {0:"Trace", 1:"Download", H:"Lightningrod"}
	},
	porygon2: {
		inherit: true,
		baseStats: {hp:85, atk:60, def:125, spa:100, spd:135, spe:50},
		types: ["Electric", "Psychic", "caw"],
		abilities: {0:"Trace", 1:"Download", H:"Analytic"},
		evos: []
	},
	porygonz: {
		inherit: true,
		baseStats: {hp:85, atk:90, def:60, spa:145, spd:65, spe:110},
		types: ["Electric", "Ghost", "caw"],
		abilities: {0:"Trace", 1:"Download", H:"Adaptability"},
		prevo: "porygon"
	},
	aerodactyl: {
		inherit: true,
		types: ["Rock", "Dragon", "caw"]
	},
	aerodactylmega: {
		inherit: true,
		types: ["Rock", "Dragon", "caw"]
	},
	meganium: {
		inherit: true,
		baseStats: {hp:90, atk:83, def:119, spa:68, spd:125, spe:65},
		abilities: {0:"Overgrow", H:"Leaf Guard"},
		otherFormes: ["meganiummega"]
	},
	typhlosion: {
		inherit: true,
		baseStats: {hp:78, atk:69, def:78, spa:129, spd:85, spe:106},
		abilities: {0:"Blaze", H:"Flash Fire"},
		otherFormes: ["typhlosionmega"]
	},
	feraligatr: {
		inherit: true,
		baseStats: {hp:85, atk:110, def:100, spa:84, spd:88, spe:83},
		abilities: {0:"Torrent", H:"Sheer Force"},
		otherFormes: ["feraligatrmega"]
	},
	xatu: {
		inherit: true,
		baseStats: {hp:80, atk:75, def:85, spa:100, spd:110, spe:90}
	},
	ampharosmega: {
		inherit: true,
		baseStats: {hp:90, atk:115, def:85, spa:155, spd:120, spe:45},
		abilities: {0:"Fur Coat"}
	},
	sceptile: {
		inherit: true,
		baseStats: {hp:70, atk:85, def:75, spa:115, spd:85, spe:120},
		types: ["Grass", "Dragon"]
	},
	sceptilemega: {
		inherit: true,
		baseStats: {hp:70, atk:100, def:95, spa:145, spd:95, spe:145}
	},
	blaziken: {
		inherit: true,
		baseStats: {hp:80, atk:120, def:70, spa:110, spd:70, spe:100},
		abilities: {0:"Blaze", H:"Reckless"}
	},
	blazikenmega: {
		inherit: true,
		baseStats: {hp:80, atk:150, def:80, spa:140, spd:80, spe:120},
		abilities: {0:"Reckless"}
	},
	swampert: {
		inherit: true,
		baseStats: {hp:100, atk:110, def:110, spa:75, spd:100, spe:60}
	},
	swampertmega: {
		inherit: true,
		baseStats: {hp:100, atk:150, def:130, spa:75, spd:120, spe:80}
	},
	gastrodon: {
		inherit: true,
		baseStats: {hp:123, atk:83, def:83, spa:100, spd:100, spe:51},
		abilities: {0:"Sticky Hold", 1:"Storm Drain", H:"Regenerator"}
	},
	genesectdouse: {
		inherit: true,
		types: ["Bug","Water"]
	},
	genesectshock: {
		inherit: true,
		types: ["Bug","Electric"]
	},
	genesectburn: {
		inherit: true,
		types: ["Bug","Fire"]
	},
	genesectchill: {
		inherit: true,
		types: ["Bug","Ice"]
	},
	honedge: {
		inherit: true,
		evos: ["doublade", "aegislash"]
	},
	doublade: {
		inherit: true,
		baseStats: {hp:60, atk:125, def:150, spa:60, spd:70, spe:35},
		evos: []
	},
	aegislash: {
		inherit: true,
		baseStats: {hp:60, atk:100, def:150, spa:55, spd:85, spe:50}
	},
	aegislashblade: {
		inherit: true,
		baseStats: {hp:60, atk:150, def:100, spa:85, spd:55, spe:50}
	},
	
	
	/////////////////////////////
	//  ChoonMod: Custom Mons  //
	/////////////////////////////
	
	
	venusaurmegax: {
		num: 3,
		species: "Venusaur-Mega-X",
		baseSpecies: "Venusaur",
		forme: "Mega-X",
		formeLetter: "M",
		types: ["Grass", "Fire"],
		genderRatio: {M:0.875, F:0.125},
		baseStats: {hp:83, atk:114, def:89, spa:150, spd:114, spe:100},
		abilities: {0:"Chlorophyll"},
		heightm: 2.4,
		weightkg: 155.5,
		color: "Green",
		prevo: "ivysaur",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"]
	},
	venusaurmegay: {
		num: 3,
		species: "Venusaur-Mega-Y",
		baseSpecies: "Venusaur",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Grass", "Poison"],
		genderRatio: {M:0.875, F:0.125},
		baseStats: {hp:83, atk:100, def:130, spa:119, spd:144, spe:74},
		abilities: {0:"Thick Fat"},
		heightm: 2.4,
		weightkg: 155.5,
		color: "Green",
		prevo: "ivysaur",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"]
	},
	blastoisemegax: {
		num: 9,
		species: "Blastoise-Mega-X",
		baseSpecies: "Blastoise",
		forme: "Mega-X",
		formeLetter: "M",
		types: ["Water", "Steel"],
		genderRatio: {M:0.875, F:0.125},
		baseStats: {hp:84, atk:100, def:119, spa:169, spd:115, spe:68},
		abilities: {0:"Mega Launcher"},
		heightm: 1.6,
		weightkg: 101.1,
		color: "Blue",
		prevo: "wartortle",
		evoLevel: 36,
		eggGroups: ["Monster", "Water 1"]
	},
	blastoisemegay: {
		num: 9,
		species: "Blastoise-Mega-Y",
		baseSpecies: "Blastoise",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Water", "Steel"],
		genderRatio: {M:0.875, F:0.125},
		baseStats: {hp:84, atk:85, def:159, spa:109, spd:155, spe:63},
		abilities: {0:"Shell Armor"},
		heightm: 1.6,
		weightkg: 123.4,
		color: "Blue",
		prevo: "wartortle",
		evoLevel: 36,
		eggGroups: ["Monster", "Water 1"]
	},
	butterfreemega: {
		num: 12,
		species: "Butterfree-Mega",
		baseSpecies: "Butterfree",
		forme: "Mega",
		formeLetter: "M",
		types: ["Bug", "Psychic"],
		baseStats: {hp:105, atk:20, def:105, spa:160, spd:125, spe:65},
		abilities: {0:"Magic Bounce"},
		heightm: 1.1,
		weightkg: 35,
		color: "White",
		prevo: "metapod",
		evoLevel: 10,
		eggGroups: ["Bug"]
	},
	fearowmega: {
		num: 22,
		species: "Fearow-Mega",
		baseSpecies: "Fearow",
		forme: "Mega",
		formeLetter: "M",
		types: ["Normal", "Flying"],
		baseStats: {hp:65, atk:140, def:100, spa:60, spd:95, spe:132},
		abilities: {0:"Reckless"},
		heightm: 1.2,
		weightkg: 50,
		color: "Brown",
		prevo: "spearow",
		evoLevel: 20,
		eggGroups: ["Flying"]
	},
	raichumega: {
		num: 26,
		species: "Raichu-Mega",
		baseSpecies: "Raichu",
		forme: "Mega",
		formeLetter: "M",
		types: ["Electric", "Dark"],
		baseStats: {hp:65, atk:157, def:94, spa:157, spd:94, spe:118},
		abilities: {0:"Aftermath"},
		heightm: 1.3,
		weightkg: 39,
		color: "Yellow",
		prevo: "pikachu",
		evoLevel: 1,
		eggGroups: ["Field", "Fairy"]
	},
	machampmega: {
		num: 68,
		species: "Machamp-Mega",
		baseSpecies: "Fearow",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fighting"],
		genderRatio: {M:0.75, F:0.25},
		baseStats: {hp:90, atk:175, def:100, spa:50, spd:115, spe:75},
		abilities: {0:"Guts"},
		heightm: 1.6,
		weightkg: 133.1,
		color: "Gray",
		prevo: "machoke",
		evoLevel: 28,
		eggGroups: ["Human-Like"]
	},
	slowkingmega: {
		num: 199,
		species: "Slowking-Mega",
		baseSpecies: "Slowking",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Psychic"],
		baseStats: {hp:95, atk:75, def:80, spa:130, spd:180, spe:30},
		abilities: {0:"Unaware"},
		heightm: 2,
		weightkg: 88.8,
		color: "Pink",
		prevo: "slowpoke",
		evoLevel: 1,
		eggGroups: ["Monster", "Water 1"]
	},
	mrmimemega: {
		num: 122,
		species: "Mr. Mime-Mega",
		baseSpecies: "Mr. Mime",
		forme: "Mega",
		formeLetter: "M",
		types: ["Psychic", "Fairy"],
		baseStats: {hp:90, atk:45, def:155, spa:120, spd:170, spe:60},
		abilities: {0:"Stall"},
		heightm: 1.337,
		weightkg: 45.4,
		color: "Pink",
		prevo: "mimejr",
		evoLevel: 1,
		eggGroups: ["Human-Like"]
	},
	meganiummega: {
		num: 154,
		species: "Meganium-Mega",
		baseSpecies: "Meganium",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass"],
		baseStats: {hp:90, atk:118, def:149, spa:73, spd:155, spe:65},
		abilities: {0:"Flower Veil"},
		heightm: 2,
		weightkg: 111.1,
		color: "Grass",
		prevo: "bayleef",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"]
	},
	typhlosionmega: {
		num: 157,
		species: "Typhlosion-Mega",
		baseSpecies: "Typhlosion",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fire"],
		baseStats: {hp:78, atk:94, def:98, spa:144, spd:105, spe:126},
		abilities: {0:"Sheer Force"},
		heightm: 1.8,
		weightkg: 80.8,
		color: "Yellow",
		prevo: "quilava",
		evoLevel: 36,
		eggGroups: ["Field"]
	},
	feraligatrmega: {
		num: 157,
		species: "Feraligatr-Mega",
		baseSpecies: "Feraligatr",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Dragon"],
		baseStats: {hp:85, atk:145, def:120, spa:104, spd:98, spe:98},
		abilities: {0:"Sheer Force"},
		heightm: 2.3,
		weightkg: 88.8,
		color: "Blue",
		prevo: "croconaw",
		evoLevel: 30,
		eggGroups: ["Monster", "Water 1"]
	}
};
