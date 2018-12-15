class Item { 
    public _itemList: Array<any>;

    constructor() {
        this._itemList = 
        [
            // ERA 1
            {
                name:"Speerpunt",
                source:"./assets/images/items/1speerpunt.png",
                era:1,
                hint1:"Gevonden in midden Frankrijk, 1989.",
                hint2:"Gebruikt voor de jacht.",
                hint3:"Speren zijn de oudst gevonden jachtwapens van de mens."
            },
            {
                name:"Ötzi de ijsmummie",
                source:"./assets/images/items/1ijsmummie.png",
                era:1,
                hint1:"Gevonden in de Italiaanse alpen, 1991.",
                hint2:"De man was gevonden in het ijs.",
                hint3:"Hij droeg dierenvellen kleding en een koperen bijl."
            },
            // ERA 2
            {
                name:"Colosseum",
                source:"./assets/images/items/2colosseum.png",
                era:2,
                hint1:"Het gebouw staat in Rome, Italië.",
                hint2:"Het werd gebruikt voor gladiatorengevechten.",
                hint3:"Het werd officieel geopend door keizer Titus."
            },
            {
                name:"De helm van Deurne",
                source:"./assets/images/items/2helm_van_deurne.png",
                era:2,
                hint1:"Deze helm was van een Romeins officier",
                hint2:"De officier zat bij ruiterafdeling STABLESIA VI.",
                hint3:"De helm is verguld zilveren versierd."
            },
            // ERA 3
            {
                name:"Zwaard van Sint Cosmas en Damianus",
                source:"./assets/images/items/3zwaard_sint_cosmas.png",
                era:3,
                hint1:"Zij zouden allebei geneesheren zijn geweest.",
                hint2:"Ze boden kosteloos hun geneeskundige diensten aan.",
                hint3:"Het christendom ziet hen als de patroonheiligen van beroepen uit de medische sector."
            },
            {
                name:"Karel de Grote",
                source:"./assets/images/items/3karel_de_grote.png",
                era:3,
                hint1:"Was eerst Koning der Franken, werd vervolgens keizer van het Heilige Roomse Rijk.",
                hint2:"Zorgde voor de Karolingische renaissance.",
                hint3:"Onder hem kregen kunst, literatuur en architectuur een ongewone opleving."
            },
            // ERA 4
            {
                name:"Penning uit Holland",
                source:"./assets/images/items/4penning.png",
                era:4,
                hint1:"Penning (munt) met beeltenis van graaf Dirk VII van Holland",
                hint2:"Het graafschap van Holland was deel van het Heilige Roomse Rijk.",
                hint3:"Omdat Dirk geen zonen had, maakte hij Holland erfelijk voor vrouwen."
            },
            {
                name:"Rotterdams strijkglas",
                source:"./assets/images/items/4strijkglas.png",
                era:4,
                hint1:"Glas gevonden in Rotterdam, 2017.",
                hint2:"Het was ooit eigendom van een rijke boer.",
                hint3:"Het strijkglas is een voorganger van het moderne strijkijzer."
            },
            // ERA 5
            {
                name:"Mona Lisa",
                source:"./assets/images/items/5mona_lisa.png",
                era:5,
                hint1:"Geschilderd door Leonardo Da Vinci.",
                hint2:"Gemaakt tijdens de Renaissance.",
                hint3:"Er zijn talloze kopieën van gemaakt."
            },
            {
                name:"Tandenstoker",
                source:"./assets/images/items/5tandenstoker.png",
                era:5,
                hint1:"De tandenstoker was een modieus accessoire.",
                hint2:"Het heeft de vorm van een roofvogelklauw.",
                hint3:"Ze werden veel gebruikt door reizigers."
            },
            {
                name:"Willem van Oranje",
                source:"./assets/images/items/5willem_van_oranje.png",
                era:5,
                hint1:"Dit is Willem van Oranje",
                hint2:"Hij is vader des vaderlands",
                hint3:""
            },
            // ERA 6
            {
                name:"De Nachtwacht",
                source:"./assets/images/items/6nachtwacht.png",
                era:6,
                hint1:"Gemaakt door Rembrandt van Rijn",
                hint2:"Hangt op dit moment in het Rijksmuseum",
                hint3:"Bij het inkorten verdween de afbeelding van twee schutters."
            },
            {
                name:"VOC munt",
                source:"./assets/images/items/6voc_munt.png",
                era:6,
                hint1:"De VOC = Verenigde Oost-Indische Compagnie.",
                hint2:"Zorgde voor een financiële opbloei.",
                hint3:"De VOC was de eerste multinational ter wereld."
            },
            // ERA 7
            {
                name:"Trekschuit",
                source:"./assets/images/items/7trekschuit.png",
                era:7,
                hint1:"Binnenvaartschip dat werd getrokken door paarden aan de oever.",
                hint2:"De schepen werden gebruikt voor zowel vracht als personen vervoer.",
                hint3:"Het was een van de voorlopers van modern openbaar vervoer."
            },
            {
                name:"Napoleon Bonaparte",
                source:"./assets/images/items/7napoleon.png",
                era:7,
                hint1:"Het lukte hem een groot deel van Europa onder Frans gezag te brengen.",
                hint2:"Hij was een befaamd militair mastermind.",
                hint3:"Zijn broer Lodewijk werd koning van Holland."
            },
            // ERA 8
            {
                name:"Hoge Bi",
                source:"./assets/images/items/8hoge_bi.png",
                era:8,
                hint1:"Wordt ook wel vélocipède genoemd.",
                hint2:"Werd gebruikt in de late Victoriaanse tijd.",
                hint3:"Deze fiets werd op de Wereldtentoonstelling van Parijs gepresenteerd."
            },
            {
                name:"Weverij",
                source:"./assets/images/items/weverij.png",
                era:8,
                hint1:"Het stoken van kolen zorgt voor de aandrijving",
                hint2:"Soms werkten ook kinderen in de weverij",
                hint3:"Later kwamen er sociale voorzieningen voor de fabrieksarbeiders."
            },
            // ERA 9
            {
                name:"Vliegtuigbom",
                source:"./assets/images/items/9vliegtuigbom.png",
                era:9,
                hint1:"Overblijfsel van een oorlog.",
                hint2:"Gevonden in Vlissingen.",
                hint3:"Vliegtuigbommen werden veel gebruikt in een Blitzkrieg."
            },
            {
                name:"Elektrische fiets",
                source:"./assets/images/items/9elektrische_fiets.png",
                era:9,
                hint1:"Deze fiets is ontwikkeld door Philips.",
                hint2:"Door de benzineschaarste leefde de belangstelling op.",
                hint3:"In Amsterdam kwam een elektrische fietstaxi in gebruik."
            },
            {
                name:"Jodenster",
                source:"./assets/images/items/9jodenster.png",
                era:9,
                hint1:"Een kenteken dat Joden moesten dragen.",
                hint2:"Dit gelde alleen in bepaalde gedeeltes van Europa voor een bepaalde periode.",
                hint3:"Alle Joden vanaf 6 jaar oud moesten de ster dragen."
            },
            // ERA 10
            {
                name:"Handboek televisie",
                source:"./assets/images/items/10handboek_televisie.png",
                era:10,
                hint1:"Boekje ter informatie over hoe een televisie werkt.",
                hint2:"De eerste landelijke uitzending was vanuit studio Irene in Hilversum.",
                hint3:"De eerste televisiezender heette Nederland 1."
            },
            {
                name:"Game Boy",
                source:"./assets/images/items/10game_boy.png",
                era:10,
                hint1:"Uitgebracht door Nintendo in Japan.",
                hint2:"Bekend van spelletjes als Super Mario en Pokémon.",
                hint3:"De spelletjes stonden op cassettes."
            }
        ];
    }

    public getItemProperty(
        itemNumber: number,
        property: string
    ) {
       return this._itemList[itemNumber][property];
    }

    public getItemArrayLength(){
        return this._itemList.length
    }

};