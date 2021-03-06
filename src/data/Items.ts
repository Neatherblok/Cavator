class Item {
    public _itemList: Array<any>;

    public constructor() {
        //list of items, that are available
        this._itemList = 
        [
            // ERA 1 Prehistorie -3000 v. Chr.
            {
                name:"een speerpunt",
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
                hint2:"De oudste ijsmummie gevonden in Europa",
                hint3:"Hij droeg dierenvellen kleding en een koperen bijl."
            },
            {
                name:"een hunebed",
                source:"./assets/images/items/1hunebed.png",
                era:1,
                hint1:"Hunebedden zijn resten van oude grafkamers.",
                hint2:"Ze zijn te vinden in gebieden van de trechterbekercultuur.",
                hint3:"De meeste hunebedden zijn in Drenthe."
            },
            {
                name:"een T-rex fossiel",
                source:"./assets/images/items/1t_rex.png",
                era: 1,
                hint1: "De Tyrannosaurus Rex betekent koning-tiransauriër.",
                hint2: "Deze Dinosauriërs leefden in het laat krijt tijdperk.",
                hint3: "Het eerste fossiel van een T-rex werd gevonden in 1874."
            },
            {
                name:"een mammoet",
                source:"./assets/images/items/1mammoet.png",
                era: 1,
                hint1: "De mammoet is een al uitgestorven diersoort.",
                hint2: "Het is familie van de olifant.",
                hint3: "Het had een dikke vacht, voor tegen de kou."
            },
            {
                name:"de Stonehenge",
                source:"./assets/images/items/1stonehenge.png",
                era:1,
                hint1:"Het is een oud monument gelegen in Engeland.",
                hint2:"Stonehenge diende vroeger als begraafplaats.",
                hint3:"Het komt uit de Jonge Steentijd."
            },            
            {
                name:"grotschilderingen",
                source:"./assets/images/items/1grotschilderingen.png",
                era:1,
                hint1:"Deze schilderingen werden getekend door jagers-verzamelaars.",
                hint2:"Dit waren de eerste tekenen van kunst door de mens.",
                hint3:"Dit soort tekeningen konden als ritueel voor de jacht staan."
            },
            {
                name:"een pot",
                source:"./assets/images/items/1pot.png",
                era:1,
                hint1:"Deze pot is gemaakt van klei.",
                hint2:"Potten zijn bedoeld om voedsel en drank in te bewaren of om in te koken.",
                hint3:"Pottenbakken gebeurde eerst in open vuren, later bakte men in speciale veldovens."
            },
            {
                name:"een vuistbijl",
                source:"./assets/images/items/1vuistbijl.png",
                era:1,
                hint1:"Deze vuistbijl is gemaakt van vuursteen.",
                hint2:"Gevonden in de Oosterschelde bij Serooskerke.",
                hint3:"Vuistbijlen werden gebruikt voor het slachten en het hakken van hout."
            },
            {
                name:"het eerste wiel",
                source:"./assets/images/items/1wiel.png",
                era:1,
                hint1:"De uitvinder is onbekend.",
                hint2:"Het wiel is een van de belangrijkste innovaties ooit.",
                hint3:"De Azteken en Inca's hebben het wiel nooit gekend."
            },
            // ERA 2 3000 v. Chr.-500 n. Chr
            {
                name:"het Colosseum",
                source:"./assets/images/items/2colosseum.png",
                era:2,
                hint1:"Het gebouw staat in Rome, Italië.",
                hint2:"Het werd gebruikt voor gladiatorengevechten.",
                hint3:"Het werd officieel geopend door keizer Titus."
            },
            {
                name:"de helm van Deurne",
                source:"./assets/images/items/2helm_van_deurne.png",
                era:2,
                hint1:"Deze helm was van een Romeinse officier.",
                hint2:"De officier zat bij ruiterafdeling STABLESIA VI.",
                hint3:"De helm is verguld zilveren versierd."
            },
            {
                name:"een ostrakon",
                source:"./assets/images/items/2ostrakon.png",
                era:2,
                hint1:"Werd gebruikt om minder belangrijke dingen op te schrijven.",
                hint2:"In Athene werd hier een stem mee uitgebracht.",
                hint3:"Ostrakon is een goedkope versie voor Papyrus."
            },
            {
                name:"het masker van Toetanchamon",
                source:"./assets/images/items/2masker_toetanchamon.png",
                era:2,
                hint1:"Toetanchamon was een farao van de 18e Dynastie.",
                hint2:"De graftombe van de farao werd gevonden in 1922.",
                hint3:"Toetanchamon was maar 19 toen hij stierf."
            },
            {
                name:"het Parthenon",
                source:"./assets/images/items/2parthenon.png",
                era:2,
                hint1:"Dit was gebouwd voor de beschermgodin van Athene, Griekenland.",
                hint2:"Deze tempel was het hoogtepunt van klassieke, Atheense bouwkunst.",
                hint3:"Onderdeel van de monumentale herbouw van de Akropolis."
            },
            {
                name:"de Olympische Spelen",
                source:"./assets/images/items/2discuswerper.png",
                era:2,
                hint1:"Het is genoemd naar Olympia, de plaats waar ze werden gehouden.",
                hint2:"Vroeger mochten alleen mannen meedoen.",
                hint3:"Het wordt nog steeds gehouden in andere vorm."
            },
            {
                name:"Sfinx van Gizeh",
                source:"./assets/images/items/2sfinx.png",
                era:2,
                hint1:"Het staat bij de drie grote piramiden in Gizeh, Egypte.",
                hint2:"Het was gebouwd voor de farao Khafra.",
                hint3:"Het katvormige gebouw staat in de woestijn in Egypte."
            },
            {
                name:"de Chinese Muur",
                source:"./assets/images/items/2chinesemuur.png",
                era:2,
                hint1:"Het Chinees keizerrijk bouwde deze muur tegen vijandelijke nomadische ruitervolkeren.",
                hint2:"Het wordt gezien als het grootste bouwwerk uit de geschiedenis.",
                hint3:"Wachttorens op de muur communiceerden met elkaar via rookpluimen.",
            },
            {
                name:"een ploeg",
                source:"./assets/images/items/2ploeg.png",
                era:2,
                hint1:"Niemand weet precies zeker wie het heeft uitgevonden.",
                hint2:"De bekendste gebruikers van de eerste ploegen waren de Egyptenaren.",
                hint3:"De ploegen waren gemaakt van ijzer en hout."
            },
            {
                name:"een aquaduct",
                source:"./assets/images/items/2aquaduct.png",
                era:2,
                hint1:"Het is een brug waar water over heen stroomt.",
                hint2:"Andere verkeer kan gewoon onder het water door reizen.",
                hint3:"De eerste werd gebouwd door Romeinen, voor hun drinkwater."
            },
            // ERA 3 500-1000
            {
                name:"het zwaard van Sint Cosmas",
                source:"./assets/images/items/3zwaard_sint_cosmas.png",
                era:3,
                hint1:"Zij zouden allebei geneesheren zijn geweest.",
                hint2:"Ze boden kosteloos hun geneeskundige diensten aan.",
                hint3:"Het christendom ziet hen als de patroonheiligen van de medische sector."
            },
            {
                name:"Karel de Grote",
                source:"./assets/images/items/3karel_de_grote.png",
                era:3,
                hint1:"Was keizer van het Heilige Roomse Rijk.",
                hint2:"Zorgde voor de Karolingische renaissance.",
                hint3:"Onder hem kregen kunst, literatuur en architectuur een ongewone opleving."
            },
            {
                name:"een penannulaire broche",
                source:"./assets/images/items/3broche.png",
                era:3,
                hint1:"Was eigendom van een belangrijke viking.",
                hint2:"Het is een onvolledige ring.",
                hint3:"Gemaakt in Schotland of Ierland."
            },
            {
                name:"een viking zwaard",
                source:"./assets/images/items/3viking_zwaard.png",
                era:3,
                hint1:"Het zwaard is gevonden in Skaftárhreppur, IJsland.",
                hint2:"Het is misschien het zwaard van de eerste inwoner van IJsland.",
                hint3:"Het zwaard werd waarschijnlijk gebruikt voor een begrafenis.",
            },
            {
                name:"een vikingschip",
                source:"./assets/images/items/3vikingschip.png",
                era:3,
                hint1:"Het werd gebruikt voor transport, handel en ontdekkingsreizen.",
                hint2:"Ook werden ze gebruikt in oorlogsmissies en plunderingen.",
                hint3:"De vikingschepen werden gebouwd door Scandinavische vikings."      

            },
            {
                name:"de drukpers",
                source:"./assets/images/items/3drukpers.png",
                era:3,
                hint1:"Hiermee konden boeken gekopieerd worden en dus makkelijker verspreid worden.",
                hint2:"Werd gebruikt door Maarten Luther om zijn ideeen te verspreiden.",
                hint3:"Hiermee werd ook de Gutenbergbijbel gemaakt."
            },
            {
                name:"buskruit",
                source:"./assets/images/items/3buskruit.png",
                era:3,
                hint1:"Buskruit is het oudst bekende explosieve mengsel.",
                hint2:"Het werd al in tijdens de Tang-dynastie in China gemaakt.",
                hint3:"Het wordt gebruikt om vuurpijlen af te schieten."
            },
            {
                name:"een grafsteen",
                source:"./assets/images/items/3grafsteen.png",
                era:3,
                hint1:"Domitianus van Hoei was de eerste bisschop in Nederland.",
                hint2:"Hij woonde toen in Maastricht.",
                hint3:"Deze grafsteen komt uit diezelfde tijd."
            },
            {
                name:"het suikerfeest",
                source:"./assets/images/items/3suikerfeest.png",
                era:3,
                hint1:"Het werd voor het eerst gevierd in de 7e eeuw.",
                hint2:"Mohammed stelde deze feestdag voor in Medina, nadat hij was gevlucht.",
                hint3:"Het wordt gevierd om o.a. de minderbedeelden te helpen."
            },
            {
                name:"een klooster",
                source:"./assets/images/items/3klooster.png",
                era:3,
                hint1:"Het eerste klooster in Nederland was in o.a. Maastricht.",
                hint2:"Ze stonden op het platteland en verbouwden planten.",
                hint3:"Ze werden bewoond door monnikken, die hele dagen bidden en werken."
            },
            // ERA 4 1000-1500
            {
                name:"een penning uit Holland",
                source:"./assets/images/items/4penning.png",
                era:4,
                hint1:"Penning (munt) met beeltenis van graaf Dirk VII van Holland",
                hint2:"Het graafschap van Holland was deel van het Heilige Roomse Rijk.",
                hint3:"Omdat Dirk geen zonen had, maakte hij Holland erfelijk voor vrouwen."
            },
            {
                name:"een Rotterdams strijkglas",
                source:"./assets/images/items/4strijkglas.png",
                era:4,
                hint1:"Glas gevonden in Rotterdam, 2017.",
                hint2:"Resten van in oven gebakken glazen potten.",
                hint3:"Het strijkglas is een voorganger van het moderne strijkijzer."
            },
            {
                name:"een narrenschoen",
                source:"./assets/images/items/4narrenschoen.png",
                era:4,
                hint1:"De hofnar is de grappenmaker van een vorst.",
                hint2:"Hij kon grappen maken zonder dat hij gestraft werd.",
                hint3:"Soms droeg hij ook een staf."
            },
            {
                name:"het stadhuis van Haarlem",
                source:"./assets/images/items/4stadhuis_haarlem.png",
                era:4,
                hint1:"Werd gebouwd nadat een jachthuis was gesloopt in de 14e eeuw.",
                hint2:"Het stadhuis is ontworpen door o.a. Lieve de Key.",
                hint3:"Het gebouw is tegenwoordig een rijksmonument."
            },
            {
                name:"een spinnewiel",
                source:"./assets/images/items/4spinnewiel.png",
                era:4,
                hint1:"Een mechaniek om van wol een draad te spinnen.",
                hint2:"Ook wel een schippertje genoemd, omdat het vaak werd gebruikt op schepen.",
                hint3:"Er ook katoen of vlas gebruikt worden voor het spinnen."
            },
            {
                name:"de getijdenmolen van Middelburg",
                source:"./assets/images/items/4getijdenmolen.png",
                era:4,
                hint1:"Het wordt aangedreven door het tij.",
                hint2:"Er zijn nog steeds resten te vinden in Zeeland.",
                hint3:"Het wordt gebruikt in combinatie met het waterrad."
            },
            {
                name:"een waterrad",
                source:"./assets/images/items/4waterrad.png",
                era:4,
                hint1:"Door het waterrad kon overgestapt worden van mankracht naar waterkracht.",
                hint2:"Ze zijn aangelegd in heel Midden-Europa.",
                hint3:"Ze liggen vaak in de buurt bij getijdenmolens."
            },
            {
                name:"een hoogoven",
                source:"./assets/images/items/4hoogoven.png",
                era:4,
                hint1:"Installatie waarin ijzererts wordt omgezet in ijzer.",
                hint2:"Omdat het ijzer vloeibaar is kan het gegoten worden.",
                hint3:"Voor de verhitting is koolstof nodig."
            },
            {
                name:"een standerdmolen",
                source:"./assets/images/items/4standerdmolen.png",
                era:4,
                hint1:"Het oudste type molen in Nederland is de standerdmolen.",
                hint2:"Het oudste houten type windmolen in de Lage Landen.",
                hint3:"Uit de standerdmolen is de bekende wipmolen ontstaan."
            },
            {
                name:"een kruistocht",
                source:"./assets/images/items/4kruistocht.png",
                era:4,
                hint1:"Dit waren religieuse ondernemingen, om het geloof te beschermen.",
                hint2:"Ze kwamen op gang, nadat invasies van vikingen stopten.",
                hint3:"Ze werden gevoerd door Christenen om Jeruzalem te veroveren."
            },
            // ERA 5 1500-1600
            {
                name:"de Mona Lisa",
                source:"./assets/images/items/5mona_lisa.png",
                era:5,
                hint1:"Geschilderd door Leonardo Da Vinci.",
                hint2:"Gemaakt tijdens de Renaissance.",
                hint3:"Er zijn talloze kopieën van gemaakt."
            },
            {
                name:"een tandenstoker",
                source:"./assets/images/items/5tandenstoker.png",
                era:5,
                hint1:"De tandenstoker was in die tijd een modieus accessoire.",
                hint2:"Het heeft de vorm van een roofvogelklauw.",
                hint3:"Ze werden veel gebruikt door reizigers."
            },
            {
                name:"Willem van Oranje",
                source:"./assets/images/items/5willem_van_oranje.png",
                era:5,
                hint1:"Hij wordt vaak de vader des vaderlands genoemd.",
                hint2:"Hij verkocht zijn bezittingen om tegen Spanje te vechten.",
                hint3:"De lijfspreuk van de prins was 'Je maintiendrai'."
            },
            {
                name:"Maarten Luther",
                source:"./assets/images/items/5maarten_luther.png",
                era:5,
                hint1:"Hij was tegen het aflaatsysteem van de Katholieke Kerk.",
                hint2:"Hij schreef 95 stellingen, waarin hij wantoestanden uitligt.",
                hint3:"Deze daad wordt gezien als het begin van de reformatie."
            },
            {
                name:"een boterspaan",
                source:"./assets/images/items/5boterspaan.png",
                era:5,
                hint1:"Houten lepel die werd gebruikt om boter te scheppen.",
                hint2:"De lepel had groeven zodat boter niet bleef plakken.",
                hint3:"Boter wordt pas vanaf de 16e eeuw gegeten."
            },
            {
                name:"een donderbus",
                source:"./assets/images/items/5donderbus.png",
                era:5,
                hint1:"Een handvuurwapen dat werd gebruikt door strijdende partijen op het slagveld.",
                hint2:"Het was geen precisiewapen, maar op korte afstand uiterst gevaarlijk.",
                hint3:"De lading bestond uit een bundel kogels (ook wel een druiventros genoemd)."
            },
            {
                name:"een beiaard",
                source:"./assets/images/items/5beiaard.png",
                era:5,
                hint1:"Muziekinstrument bestaande uit op elkaar afgestemde bronzen klokken.",
                hint2:"De beiaard is het zwaarste van alle muziekinstrumenten.",
                hint3:"De beiaardcultuur wordt erkend als immaterieel cultureel erfgoed."
            },
            {
                name:"een tekening van de Beeldenstorm",
                source:"./assets/images/items/5beeldenstorm.png",
                era:5,
                hint1:"Een vernieling van heiligenbeelden en andere katholieke objecten.",
                hint2:"De oorzaak was een opkomst van het calvinisme in de Nederlanden.",
                hint3:"Zij waren tegen het vereren van heiligen."
            },
            {
                name:"een musketier",
                source:"./assets/images/items/5musketier.png",
                era:5,
                hint1:"Het wapen is een voorloper van het geweer.",
                hint2:"De musketiers leerden in gecoördineerde bewegingen marcheren, laden en vuren.",
                hint3:"Het leger van Maurits van Oranje-Nassau was hier zeer goed in."
            },
            {
                name:"een Unie van Utrecht",
                source:"./assets/images/items/5unie_utrecht.png",
                era:5,
                hint1:"Een verbond tusseen zeven opstandige Noord-Nederlandse gewesten.",
                hint2:"Deze Unie is het begin van de Republiek der Nederlanden.",
                hint3:"Ze zijn solidair in hun strijd tegen koning Filips II."
            },
            // ERA 6 1600-1700
            {
                name:"de Nachtwacht",
                source:"./assets/images/items/6nachtwacht.png",
                era:6,
                hint1:"Gemaakt door Rembrandt van Rijn.",
                hint2:"Hangt op dit moment in het Rijksmuseum.",
                hint3:"Bij het inkorten verdween de afbeelding van twee schutters."
            },
            {
                name:"een VOC munt",
                source:"./assets/images/items/6voc_munt.png",
                era:6,
                hint1:"De VOC = Vereenigde Oostindische Compagnie.",
                hint2:"Zorgde voor een financiële opbloei in Nederland.",
                hint3:"De VOC was de eerste multinational ter wereld."
            },
            {
                name:"het Paleis op de Dam",
                source:"./assets/images/items/6paleis_dam.png",
                era:6,
                hint1:"Het werd oorspronkelijk gebouwd als stadhuis.",
                hint2:"Later werd het aan Lodewijk Napoleon aangeboden als paleis.",
                hint3:"Het bevindt zich op de Dam in Amsterdam."
            },
            {
                name:"een straatlantaarn",
                source:"./assets/images/items/6lantaarn.png",
                era:6,
                hint1:"Ontworpen door Jan van der Heyden.",
                hint2:"Als brandstof werd raapolie gebruikt.",
                hint3:"De lantaarn was voorzien van 2 ruiten."
            },
            {
                name:"Michiel de Ruyter",
                source: "./assets/images/items/6de_Ruyter.png",
                era:6,
                hint1:"Een berucht zeevaarder die vocht tegen de Engelsen.",
                hint2:"Michiel de Ruyter was zoon van Adriaan, een bierdrager.",
                hint3:"Hij heeft het Nederlands korps Mariniers opgericht."
            },
            {
                name:"een telescoop",
                source:"./assets/images/items/6telescoop.png",
                era:6,
                hint1:"Uitgevonden in Middelburg, tijdens Nederlands hoogtij dagen.",
                hint2:"De mogelijke uitvinder had zijn microscoop aan een stadhouder laten zien.",
                hint3:"De eerste telescoop wordt Hollandse Kijker genoemd."
            },
            {
                name:"de eerste duikboot",
                source:"./assets/images/items/6duikboot.png",
                era:6,
                hint1:"Is ontworpen door Cornelis Drebbel.",
                hint2:"Drebbel heeft meerdere keren gevaren op de Theems.",
                hint3:"Het was bekleed met ingevet varkensleer, waardoor het waterdicht was."
            },
            {
                name:"een mechanische rekenmachine",
                source:"./assets/images/items/6rekenmachine.png",
                era:6,
                hint1:"Is gebouwd door Wilhelm Schickard.",
                hint2:"De machine kon getallen van zes cijfers optellen en aftrekken.",
                hint3:"De rekenmachine werd gebruikt om astronomische tabellen te berekenen."
            },
            {
                name:"een slingeruurwerk",
                source:"./assets/images/items/6slingeruurwerk.png",
                era:6,
                hint1:"De uitvinder van het slingeruurwerk is Christiaan Huygens.",
                hint2:"De klok blijft gelijkmatig lopen door de slinger.",
                hint3:"Als de klok verkeerd afgesteld is, loopt de klok te snel of te langzaam."
            },
            {
                name:"een microscoop",
                source:"./assets/images/items/6microscoop.png",
                era:6,
                hint1:"Het is uitgevonden door bekende, Nederlandse uitvinder Anthonie van Leeuwenhoek.",
                hint2:"Jan Swammerdam maakte de eerste wetenschappelijke ontdekking ermee.",
                hint3:"De ontdekking van de microscoop is verbonden met de telescoop."
            },
            // ERA 7 1700-1800
            {
                name:"een trekschuit",
                source:"./assets/images/items/7trekschuit.png",
                era:7,
                hint1:"Binnenvaartschip dat werd getrokken door paarden aan de oever.",
                hint2:"De schepen werden gebruikt voor zowel vracht- als personenvervoer.",
                hint3:"Het was één van de voorlopers van modern openbaar vervoer."
            },
            {
                name: "De Amsterdam",
                source: "./assets/images/items/7amsterdam.png",
                era: 7,
                hint1: "De Amsterdam was een transportschip voor de VOC.",
                hint2: "Tijdens de eerste reis ging 'de Amsterdam' verloren tijdens een storm.",
                hint3: "Er is een replica van het schip in Amsterdam."
            },
            {
                name:"Napoleon Bonaparte",
                source:"./assets/images/items/7napoleon.png",
                era:7,
                hint1:"Het lukte hem een groot deel van Europa onder Frans gezag te brengen.",
                hint2:"Napoleon was een leider tijdens de Franse revolutie.",
                hint3:"Zijn broer Lodewijk werd koning van Holland."
            },
            {
                name:"de Amerikaanse onafhankelijkheidsverklaring",
                source:"./assets/images/items/7declaration.png",
                era:7,
                hint1:"Het document verklaard de VS onafhankelijk van Groot-Britannië.",
                hint2:"De verklaring werd vertegenwoordigd door de 13 koloniën.",
                hint3:"Het tekenen van de verklaring word op 4 juli gevierd als Independence day."
            },
            {
                name:"de eerste Nederlandse grondwet",
                source:"./assets/images/items/7grondwet.png",
                era:7,
                hint1:"Opgesteld door de Bataafse republiek en de Nationale vergadering.",
                hint2:"De wet stelde de scheiding van machten vast.",
                hint3:"Er werd een zeker kiesrecht opgesteld in de grondwet."
            },
            {
                name:"een heteluchtballon",
                source:"./assets/images/items/7heteluchtballon.png",
                era:7,
                hint1:"Luchtvaartuig waarbij een mand opstijgt, hangende aan een ballon.",
                hint2:"De heteluchtballon werd door Joseph en Étienne Montgolfier gedemonstreerd.",
                hint3:"De heteluchtballon is het oudste type luchtballon."
            },
            {
                name:"de eerste batterij",
                source:"./assets/images/items/7batterij.png",
                era:7,
                hint1:"Eerst werd het gebruikt voor geneeskrachtige werkingen.",
                hint2:"Met de eerste paar werd geëxperimenteerd op kikkerpoten die samentrokken.",
                hint3:"De eerste paar batterijen bestonden uit koper, zink en vilt."
            },
            {
                name:"Montesquieu",
                source:"./assets/images/items/7montesquieu.png",
                era:7,
                hint1:"Montesquieu was een Franse rechter en politiek filosoof.",
                hint2:"Hij is vooral beroemd van zijn ideeën over de scheiding van machten.",
                hint3:"Hij was één van de belangrijkste filosofen van de verlichting."
            },
            {
                name:"een anti-slavernij penning",
                source:"./assets/images/items/7antislavernijpenning.png",
                era:7,
                hint1:"Bedacht door Joshia Wedgewood.",
                hint2:"De penning werd bedacht om abolitionistme te supporten.",
                hint3:"Op de penning staat vaak 'Am I not a man and a brother'."
            },
            {
                name:"Frederik II van Pruisen",
                source:"./assets/images/items/7frederik.png",
                era:7,
                hint1:"Koning van Oost-Pruisen, Brandenburg en Pruisen.",
                hint2:"Frederik had gespannen relaties met veel landen in Europa.",
                hint3:"Frederik was erg gesteld op zijn honden."
            },
            // ERA 8 1800-1900
            {
                name:"een hoge bi",
                source:"./assets/images/items/8hoge_bi.png",
                era:8,
                hint1:"Wordt ook wel vélocipède genoemd.",
                hint2:"Werd gebruikt in de late Victoriaanse tijd.",
                hint3:"Deze fiets werd op de Wereldtentoonstelling van Parijs gepresenteerd."
            },
            {
                name:"een weverij",
                source:"./assets/images/items/8weverij.png",
                era:8,
                hint1:"Het stoken van kolen zorgt voor de aandrijving via stoommachines.",
                hint2:"Soms werkten ook kinderen in de weverij.",
                hint3:"Later kwamen er sociale voorzieningen voor de fabrieksarbeiders."
            },
            {
                name:"de eerste foto",
                source:"./assets/images/items/8eerste_foto.png",
                era:8,
                hint1:"Gemaakt door Joseph Niépce.",
                hint2:"Het duurde 8 uur om de foto te maken.",
                hint3:"Hij noemde het 'schrijven met de zon'."
            },
            {
                name:"Max Havelaar",
                source:"./assets/images/items/8max_havelaar.png",
                era:8,
                hint1:"Boek geschreven door Multatuli.",
                hint2:"In het boek werd kritiek gegeven op het cultuurstelsel.",
                hint3:"Dit cultuurstelsel was in Nederlands-Indië."
            },
            {
                name: "een stoommachine",
                source: "./assets/images/items/8stoommachine.png",
                era: 8,
                hint1: "De stoommachine werd ontworpen door Thomas Savery en Thomas Newcomen.",
                hint2: "Het werkt doordat stoom voor beweging zorgt.",
                hint3: "Deze verbeteringen maakte de stoommachine tot wat het nu is."
            },
            {
                name: "de Leeuw van Waterloo",
                source: "./assets/images/items/8waterloo.png",
                era: 8,
                hint1: "Een herdenkingsmonument voor de Slag bij Waterloo.",
                hint2: "Het monument staat op een 45 meter hoge kunstmatige heuvel.",
                hint3: "Napoleon Bonaparte werd hier definitief verslagen."
            },
            {
                name: "de eerste telefoon",
                source: "./assets/images/items/8telefoon.png",
                era: 8,
                hint1: "Uitgevonden door Alexander Graham Bell.",
                hint2: "Het eerste bericht was 'Mr. Watson, come here. I want to see you.'",
                hint3: "Zijn telefoonmaatschappij werd een van 's werelds grootste bedrijven."
            },
            {
                name: "een stethoscoop",
                source: "./assets/images/items/8stethoscoop.png",
                era: 8,
                hint1: "Een instrument om naar geluiden in het lichaam te luisteren.",
                hint2: "De meeste artsen maken nog gebruik van het traditionele model.",
                hint3: "Artsen moeten hem eigenlijk altijd bij zich hebben."
            },
            {
                name: "een gloeilamp",
                source: "./assets/images/items/8gloeilamp.png",
                era: 8,
                hint1: "Thomas Edison is de uitvinder van de gloeilamp.",
                hint2: "De grootse gloeilampen fabriek was Philips te Eindhoven.",
                hint3: "De fabriek groeide uit tot Koninklijke Philips Electronics."
            },
            // ERA 9 1900-1950
            {
                name:"een vliegtuigbom",
                source:"./assets/images/items/9vliegtuigbom.png",
                era:9,
                hint1:"Overblijfsel van een oorlog.",
                hint2:"Gevonden in Vlissingen.",
                hint3:"Vliegtuigbommen werden veel gebruikt in een Blitzkrieg."
            },
            {
                name:"een elektrische fiets",
                source:"./assets/images/items/9elektrische_fiets.png",
                era:9,
                hint1:"Deze fiets is ontwikkeld door het bedrijf Philips.",
                hint2:"Door de benzineschaarste leefde de belangstelling op.",
                hint3:"In Amsterdam kwam een elektrische fietstaxi in gebruik."
            },
            {
                name:"een jodenster",
                source:"./assets/images/items/9jodenster.png",
                era:9,
                hint1:"Een kenteken dat Joden moesten dragen voor een bepaalde periode.",
                hint2:"Dit gelde alleen in bepaalde gedeeltes van Europa.",
                hint3:"Alle Joden vanaf 6 jaar oud moesten de ster dragen."
            },
            {
                name:"een propaganda poster",
                source:"./assets/images/items/9propaganda.png",
                era:9,
                hint1:"Een poster uit de Verenigde Staten.",
                hint2:"Wervings poster, want er was een tekort aan soldaten.",
                hint3:"Het personage op de poster is Uncle Sam."
            },
            {
                name:"een zeppelin",
                source:"./assets/images/items/9zeppelin.png",
                era:9,
                hint1:"Bedacht door graaf Ferdinand von Zeppelin.",
                hint2:"De ballon is gevuld met gas waardoor het gevaarte vliegt.",
                hint3:"De zeppelin was het eerste militaire en commerciële luchtvaart voertuig."
            },
            {
                name:"een winkelwagentje",
                source:"./assets/images/items/9winkelwagentje.png",
                era:9,
                hint1:"De eerste winkelwagen was een uitvinding van Sylvan Goldman.",
                hint2:"Hij had gezien dat klanten moeite hadden met te volle winkelmanden.",
                hint3:"Veel winkels waren overgegaan op zelfbediening."
            },
            {
                name:"penicilline",
                source:"./assets/images/items/9penicilline.png",
                era:9,
                hint1:"Was ontdekt door Alexander Fleming.",
                hint2:"Het was het eerste algemeen bruikbare antibioticum.",
                hint3:"In Nederland werd het voor het eerst gebruikt in Kamp Westerbork."
            },
            {
                name:"een magnetron",
                source:"./assets/images/items/9magnetron.png",
                era:9,
                hint1:"Een soort oven waarin met microgolfstraling voedsel verwarmd kan worden.",
                hint2:"De eerste magnetron was de Amerikaanse RadaRange.",
                hint3:"Is per ongeluk ontdekt door Percy Spencer."
            },
            {
                name:"een stofzuiger",
                source:"./assets/images/items/9stofzuiger.png",
                era:9,
                hint1:"De eerste stofzuiger was 50 kilogram.",
                hint2:"Hij stond op een kar en werd getrokken door paarden.",
                hint3:"Alleen rijke mensen en bedrijven konden een stofzuiger betalen."
            },
            {
                name:"een vliegtuig",
                source:"./assets/images/items/9vliegtuig.png",
                era:9,
                hint1:"De eerste gecontroleerde vlucht met een motorisch vliegtuig waren door Amerikanen.",
                hint2:"De eerste tests begonnen eind 19e eeuw al, na het zweefvliegtuig.",
                hint3:"Het werd vooral gebruikt als sport- en stuntapparaat."
            },
            // ERA 10 1950-heden
            {
                name:"een televisie handboek",
                source:"./assets/images/items/10handboek_televisie.png",
                era:10,
                hint1:"Boekje met informatie over hoe een televisie werkt.",
                hint2:"De eerste landelijke uitzending was vanuit Hilversum.",
                hint3:"De eerste televisiezender heette Nederland 1."
            },
            {
                name:"een Game Boy",
                source:"./assets/images/items/10game_boy.png",
                era:10,
                hint1:"Uitgebracht door Nintendo in Japan.",
                hint2:"Bekend van spelletjes als Super Mario en Pokémon.",
                hint3:"De spelletjes stonden op cassettes."
            },
            {
                name:"de eerste mobiele telefoon",
                source:"./assets/images/items/10mobiele_telefoon.png",
                era:10,
                hint1:"Gemaakt door Ericsson.",
                hint2:"Het werd gebruikt door dokters in Zweden.",
                hint3:"Hij weegt 14 kilogram."
            },
            {
                name:"de Oosterscheldekering",
                source:"./assets/images/items/10oosterscheldekering.png",
                era:10,
                hint1:"Kan gesloten worden bij hoog water.",
                hint2:"Is onderdeel van het Deltaplan.",
                hint3:"Dit plan werd gestart als resultaat van de watersnoodramp."
            },
            {
                name:"het International Space Station",
                source:"./assets/images/items/10iss.png",
                era:10,
                hint1:"ISS is een bemande sataliet gebouwd voor onderzoek.",
                hint2:"Vliegt in 93 om de aarde.",
                hint3:"Het station weegt ongeveer 420kg.",
            },
            {
                name:"een muziekcassette",
                source:"./assets/images/items/10muziekcassette.png",
                era:10,
                hint1:"Een magneetband die wordt gebruikt om muziek op te slaan.",
                hint2:"De compacte muziekcassette is een ontwikkeling geweest door Lou Ottens.",
                hint3:"Hij was een werknemer van Philips.",
            },
            {
                name:"een compact disc",
                source:"./assets/images/items/10cd.png",
                era:10,
                hint1:"Een optische schijf, die voor de opslag van muziek werd gebruikt.",
                hint2:"De CD is gezamenlijk ontwikkeld door Philips en Sony.",
                hint3:"Later werd de CD ook voor video gebruikt.",
            },
            {
                name:"een laser",
                source:"./assets/images/items/10laser.png",
                era:10,
                hint1:"Een soort licht dat maar in 1 richting straalt.",
                hint2:"Lasers worden voor veel verschillende doelen gebruikt.",
                hint3:"Volgens de kranten zou de laser toen 'een dodende straal' zijn.",
            },
            {
                name:"een Super Soaker",
                source:"./assets/images/items/10supersoaker.png",
                era:10,
                hint1:"Het idee kwam van NASA ingenieur Lonnie Johnson toen hij bezig was met een warmtepomp.",
                hint2:"Het meest krachtige waterpistool ooit gemaakt schiet 1 liter water per seconde.",
                hint3:"Deze schiet 15 meter ver.",
            },
            {
                name:"een space shuttle",
                source:"./assets/images/items/10spaceshuttle.png",
                era:10,
                hint1:"De Columbia was de eerste space shuttle dat in een baan rond de aarde werd gebracht.",
                hint2:"In totaal, tot aan eind juli 2011, zijn er 135 missies gevlogen.",
                hint3:"De space shuttles werden gebruikt om ISS te bouwen.",
            }
        ];
    }

    //function that returns a value from asked era
    public getItemProperty(
        itemNumber: number,
        property: string
    ) {
        return this._itemList[itemNumber][property];
    }

    //function that returns the length of the item array
    public getItemArrayLength() {
        return this._itemList.length
    }

};