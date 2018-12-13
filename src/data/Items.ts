class Item {
    public _itemList: Array<any>;

    constructor() {
        this._itemList = 
        [
            {
                name:"Speerpunt",
                source:"../assets/images/items/speerpunt.png",
                era:1,
                hint1:"Gevonden in midden Frankrijk, 1989.",
                hint2:"Gebruikt voor de jacht.",
                hint3:"Speren zijn de oudst gevonden jachtwapens van de mens."
            },
            {
                name:"Ötzi de ijsmummie",
                source:"../assets/images/items/ijsmummie.png",
                era:1,
                hint1:"Gevonden in de Italiaanse alpen, 1991.",
                hint2:"De man was gevonden in het ijs.",
                hint3:"Hij droeg dierenvellen kleding en een koperen bijl."
            },
            {
                name:"Colosseum",
                source:"../assets/images/items/colosseum.png",
                era:2,
                hint1:"Het gebouw staat in Rome, Italië.",
                hint2:"Het werd gebruikt voor gladiatorengevechten.",
                hint3:"Het werd officieel geopend door keizer Titus."
            },
            {
                name:"De helm van Deurne",
                source:"../assets/images/items/helm_van_deurne.png",
                era:2,
                hint1:"Deze helm was van een Romeins officier",
                hint2:"De officier zat bij ruiterafdeling STABLESIA VI.",
                hint3:"De helm is verguld zilveren versierd."
            },
            {
                name:"Zwaard van Sint Cosmas en Damian",
                source:"../assets/images/items/zwaard_sint_cosmas.png",
                era:3,
                hint1:"Gevonden in de Italiaanse alpen, 1991.",
                hint2:"De man was gevonden in het ijs.",
                hint3:"Hij droeg dierenvellen kleding en een koperen bijl."
            },
            {
                name:"Karel de Grote",
                source:"../assets/images/items/karel_de_grote.png",
                era:3,
                hint1:"Was eerst Koning der Franken, werd vervolgens keizer van het Heilige Roomse Rijk.",
                hint2:"Zorgde voor de Karolingische renaissance.",
                hint3:"Onder hem kregen kunst, literatuur en architectuur een ongewone opleving."
            },
            {
                name:"Penning uit Holland",
                source:"../assets/images/items/penning.png",
                era:4,
                hint1:"Penning (munt) met beeltenis van graaf Dirk VII van Holland",
                hint2:"Het graafschap van Holland was deel van het heilig romeinse rijk.",
                hint3:""
            },
            {
                name:"Rotterdams strijkglas",
                source:"../assets/images/items/strijkglas.png",
                era:4,
                hint1:"Glas gevonden in Rotterdam, 2017.",
                hint2:"Het was ooit eigendom van een rijke boer.",
                hint3:"Het strijkglas is een voorganger van het moderne strijkijzer."
            },
            {
                name:"Mona Lisa",
                source:"../assets/images/items/mona_lisa.png",
                era:5,
                hint1:"Geschilderd door Leonardo Da Vinci.",
                hint2:"Gemaakt tijdens de Renaissance.",
                hint3:"Er zijn talloze kopieën van gemaakt."
            },
            {
                name:"Tandenstoker",
                source:"../assets/images/items/tandenstoker.png",
                era:5,
                hint1:"De tandenstoker was een modieus accessoire.",
                hint2:"Het heeft de vorm van een roofvogelklauw.",
                hint3:"Ze werden veel gebruikt door reizigers."
            },
            {
                name:"De Nachtwacht",
                source:"../assets/images/items/nachtwacht.png",
                era:6,
                hint1:"Gemaakt door Rembrandt van Rijn",
                hint2:"Hangt op dit moment in het Rijksmuseum",
                hint3:"Bij het inkorten verdween de afbeelding van twee schutters."
            },
            {
                name:"VOC munt",
                source:"../assets/images/items/voc_munt.png",
                era:6,
                hint1:"De VOC = Verenigde Oost-Indische Compagnie.",
                hint2:"Zorgde voor een financiële opbloei.",
                hint3:"De VOC was de eerste multinational ter wereld."
            },
            {
                name:"Trekschuit",
                source:"../assets/images/items/trekschuit.png",
                era:7,
                hint1:"Binnenvaartschip dat werd getrokken door paarden aan de oever.",
                hint2:"De schepen werden gebruikt voor zowel vracht als personen vervoer.",
                hint3:"Het was een van de voorlopers van modern openbaar vervoer."
            },
            {
                name:"Napoleon Bonaparte",
                source:"../assets/images/items/napoleon.png",
                era:7,
                hint1:"Het lukte hem een groot deel van Europa onder Frans gezag te brengen.",
                hint2:"Hij was een befaamd militair mastermind.",
                hint3:"Zijn broer Lodewijk werd koning van Holland."
            },
            {
                name:"Hoge Bi",
                source:"../assets/images/items/.png",
                era:8,
                hint1:"",
                hint2:"",
                hint3:""
            },
            {
                name:"Weverij",
                source:"../assets/images/items/weverij.png",
                era:8,
                hint1:"Het stoken van kolen zorgt voor de aandrijving.",
                hint2:"Soms werkten ook kinderen in de weverij.",
                hint3:"Door de afscheiding van België moest Nederland zelf textiel gaan produceren."
            },
            {
                name:"Vliegtuigbom",
                source:"../assets/images/items/voc_munt.png",
                era:9,
                hint1:"",
                hint2:"",
                hint3:""
            },
            {
                name:"Elektrische fiets",
                source:"../assets/images/items/voc_munt.png",
                era:9,
                hint1:"",
                hint2:"",
                hint3:""
            },
            {
                name:"Jodenster",
                source:"../assets/images/items/voc_munt.png",
                era:9,
                hint1:"",
                hint2:"",
                hint3:""
            },
            {
                name:"Handboek televisie",
                source:"../assets/images/items/voc_munt.png",
                era:10,
                hint1:"",
                hint2:"",
                hint3:""
            },
            {
                name:"Game Boy",
                source:"../assets/images/items/voc_munt.png",
                era:10,
                hint1:"",
                hint2:"",
                hint3:""
            }
        ];
    }

    public getItem(
        itemNumber: number,
        property: string
    ) {
       return this._itemList[itemNumber].property;
    }

};