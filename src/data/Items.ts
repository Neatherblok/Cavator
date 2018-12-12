class ItemList {
    private readonly _itemList =  new Array<any>();

    constructor() {
        this._itemList = 
        [
            {
                name:"Karel de Grote",
                source:"../assets/images/items/karel_de_grote.png",
                era:3,
                hint1:"Was eerst Koning der Franken, werd vervolgens keizer van het West-Romeinse Rijk",
                hint2:"Zorgde voor de Karolingische renaissance",
                hint3:""
            },
            {
                name:"VOC munt",
                source:"../assets/images/items/voc_munt.png",
                era:6,
                hint1:"De VOC = Verenigde Oost-Indische Compagnie",
                hint2:"Zorgde voor een financiële opbloei",
                hint3:""
            },
            {
                name:"Weverij",
                source:"../assets/images/items/weverij.png",
                era:8,
                hint1:"Het stoken van kolen zorgt voor de aandrijving",
                hint2:"Soms werkten ook kinderen in de weverij",
                hint3:""
            }
        ];
    }

    public getItemProperty(
        itemNumber: number,
        property: string
    ) {
        const item = this._itemList[itemNumber][property]
        console.log(item);
    }

};