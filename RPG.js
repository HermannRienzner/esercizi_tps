let caratteristiche = {
                    nome: "", 
                    classe: "", 
                    eta: 0, 
                    healthPoints: 0, 
                    armorClass: 0
                };

let npclist = [];

let equipaggiamento = {
    armatura: {
        nome: "",
        armorclass: 0,
        ingombro: false,
        equip: false,
    },
    scudo: {
        nome: "",
        armorclass: 0,
        ingombro: false,
        equip: false
    },
    cintura: {
        nome: "",
        numeropozioni: 0, 
        maxpozioni: 0
    },
    borsa: {
        denaro: 50
    }
}

let armi = [ 
    destra = {
        nome: "", 
        dannoMax: 0, 
        attacchi: 0, 
        portata: 0, 
        ingombro: false, 
        equip: false
    }, 
    sinistra = {
        nome: "", 
        dannoMax: 0, 
        attacchi: 0, 
        portata: 0, 
        ingombro: false, 
        equip: false
    }
];

let inventario = [{
                    vuoto: true
                },
                {
                    vuoto: true
                },
                {
                    vuoto: true
                },
                {
                    vuoto: true
                }, 
                {
                    vuoto: true
                }, 
                {
                    vuoto: true
                }]

let avventurriero = {
    caratteristiche,
    equipaggiamento,
    armi,
    inventario
};

let listlocation = {
    miskos: {},
};
let sottolocation = [

];
