const recipesData = [
  // Antipasti
  {
    id: 0,
    slug: "involtini-di-zucchine-al-forno",
    title: "Involtini di zucchine al Forno",
    description:
      "Gli involtini di zucchine sono un antipasto  facile, goloso e pronto in meno di un’ora. Perfetti per un pranzo in famiglia o una cena tra amici da servire come primo piatto o come piatto unico. Un modo divertente per cucinare le zucchine con gusto.",
    dishType: "Antipasti",
    prepTime: "45 minuti",
    difficulty: "Medio",
    portions: "4 porzioni",
    img: "/assets/recipes/cards/Involtini-di-zucchine-al-forno.webp",
    alt: "Involtini di zucchine al Forno",
    // SOLO PER LA PAGINA DETTAGLIO DELLA RICETTA
    longDescription:
      "La ricetta degli involtini di zucchine al forno, facile e veloce da realizzare, è un piatto sfizioso che richiede pochissimi ingredienti. Questi involtini si prestano per essere serviti come antipasto: si preparano con zucchine grigliate e poi si farciscono con prosciutto crudo e formaggio",
    ingredients: [
      "2 zucchine medie",
      "100g prosciutto crudo",
      "80g emmental senza lattosio",
      "1 uovo (per panare)",
      "Pangrattato (per panare - senza glutine per chi è intollerante)",
      "olio extravergine di oliva q.b",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Preparazione e grigliatura delle zucchine",
        description: "Tagliamo le zucchine a strisce sottili e grigliamole.",
      },
      {
        stepNumber: 2,
        title: "Farcitura delle zucchine",
        description: "Farciamo le zucchine con il formaggio e il prosciutto.",
      },
      {
        stepNumber: 3,
        title: "Formazione degli involtini",
        description:
          "Arrotoliamo per formare l’involtino. Continuiamo fino a finire tutte le fette di zucchine.",
      },
      {
        stepNumber: 4,
        title: "Passaggio nell’uovo",
        description:
          "Una volta pronti tutti gli involtini passiamoli nell’uovo sbattuto.",
      },
      {
        stepNumber: 5,
        title: "Panatura e chiusura",
        description:
          "Passiamoli anche nel pangrattato e chiudiamoli con uno stuzzicadenti.",
      },
      {
        stepNumber: 6,
        title: "Cottura in forno",
        description:
          "Mettiamo gli involtini in una teglia da forno e aggiungiamo l’olio extravergine d’oliva. Cuociamo in forno statico preriscaldato a 200°C per 25 minuti circa.",
      },
      {
        stepNumber: 7,
        title: "Servizio",
        description:
          "Potete servire gli involtini appena sfornati o anche freddi il giorno dopo.",
      },
    ],
  },
  {
    id: 1,
    slug: "bruschette-al-pomodoro",
    title: "Bruschette al pomodoro",
    description:
      "Le bruschette al pomodoro sono un antipasto semplice e veloce, ideale per aprire un pasto in modo leggero e gustoso.",
    dishType: "Antipasti",
    prepTime: "15 minuti",
    difficulty: "Facile",
    portions: "4 porzioni",
    img: "/assets/recipes/cards/bruschette-pomodoro.webp",
    alt: "Bruschette al pomodoro",
    longDescription:
      "Un grande classico della cucina italiana: pane tostato condito con pomodori freschi, olio extravergine di oliva e basilico.",
    ingredients: [
      "4 fette di pane",
      "250g pomodori maturi",
      "olio extravergine di oliva q.b.",
      "sale q.b.",
      "basilico fresco",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Preparazione dei pomodori",
        description:
          "Laviamo i pomodori, tagliamoli a cubetti e condiamoli con olio e sale.",
      },
      {
        stepNumber: 2,
        title: "Tostatura del pane",
        description: "Tostiamo le fette di pane su una griglia o in forno.",
      },
      {
        stepNumber: 3,
        title: "Composizione delle bruschette",
        description:
          "Distribuiamo i pomodori sul pane e aggiungiamo basilico fresco.",
      },
    ],
  },
  {
    id: 2,
    slug: "crostini-con-crema-di-formaggio",
    title: "Crostini con crema di formaggio",
    description:
      "Crostini semplici e veloci con una crema di formaggio morbida, ideali come antipasto o aperitivo.",
    dishType: "Antipasti",
    prepTime: "20 minuti",
    difficulty: "Facile",
    portions: "4 porzioni",
    img: "/assets/recipes/cards/crostino-con-crema-di-formaggio.webp",
    alt: "Crostini con crema di formaggio",
    longDescription:
      "Un antipasto pratico e versatile, perfetto da personalizzare con erbe aromatiche o spezie.",
    ingredients: [
      "1 baguette",
      "200g formaggio spalmabile",
      "olio extravergine di oliva q.b.",
      "erbe aromatiche a piacere",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Preparazione del pane",
        description: "Tagliamo il pane a fette e tostiamolo leggermente.",
      },
      {
        stepNumber: 2,
        title: "Preparazione della crema",
        description:
          "Lavoriamo il formaggio con un filo d’olio e le erbe aromatiche.",
      },
      {
        stepNumber: 3,
        title: "Farcitura dei crostini",
        description: "Spalmiamo la crema sul pane tostato e serviamo.",
      },
    ],
  },
  // Primi
  {
    id: 3,
    slug: "zuppa-di-piselli",
    title: "Zuppa di Piselli",
    description:
      "Con la loro dolcezza i piselli si adattano a moltissime preparazioni. Potete servire il piatto con crostini abbrustoliti in forno e conditi con olio extravergine di oliva. Piatto da gustare in una fredda serata invernale.",

    dishType: "Primi",
    prepTime: `40 minuti`,
    difficulty: "Facile",
    portions: "4 porzioni",
    img: "/assets/recipes/cards/zuppa-piselli.avif",
    alt: "Zuppa di piselli",

    // SOLO PER LA PAGINA DETTAGLIO DELLA RICETTA
    longDescription:
      "La zuppa di piselli è un piatto avvolgente e nutriente da gustare nelle sere di primavera. Si prepara in poco tempo con piselli freschi , dolci e croccanti, oppure surgelati per tutte le stagioni.",
    ingredients: [
      "1kg piselli",
      "20g panna fresca liquida",
      "100g cipolle bianche",
      "30g olio Extravergine d’oliva",
      "50g grana Padano DOP",
      "400g brodo vegetale",
      "sale fino q.b",
      "pepe nero q.b",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Soffritto iniziale della cipolla",
        description:
          "In un tegame fate scaldare l'olio leggermente a fuoco basso e tuffate la cipolla.",
      },
      {
        stepNumber: 2,
        title: "Appassimento della cipolla e aggiunta dei piselli",
        description:
          "Lasciate appassire leggermente la cipolla a fuoco basso mescolando spesso per evitare che si bruci. Dopodichè unite i piselli (che usiate piselli freschi o congelati il procedimento sarà lo stesso).",
      },
      {
        stepNumber: 3,
        title: "Regolazione di sale e pepe",
        description: "Salate, pepate e mescolate il tutto.",
      },
      {
        stepNumber: 4,
        title: "Aggiunta del brodo vegetale",
        description:
          "Lasciate cuocere circa 5 minuti, poi coprite con 350g di brodo vegetale (tenetene da parte 50g).",
      },
      {
        stepNumber: 5,
        title: "Cottura dei piselli",
        description:
          "Continuate la cottura per altri 15-20 minuti, dopodichè spegnete il fuoco e usando un mixer ad immersione.",
      },
      {
        stepNumber: 6,
        title: "Frullatura e regolazione della consistenza",
        description:
          "Frullate il tutto aggiungendo man a mano il brodo vegetale tenuto da parte fino a raggiungere una consistenza liscia e la densità desiderata.",
      },
      {
        stepNumber: 7,
        title: "Incorporazione della panna",
        description: "Aggiungete la panna fresca.",
      },
      {
        stepNumber: 8,
        title: "Ultima cottura della crema",
        description:
          "Riaccendete il fuoco e proseguite la cottura per altri 5 minuti, mescolando spesso.",
      },
      {
        stepNumber: 9,
        title: "Setacciatura per una consistenza più fine",
        description:
          "Trasferite la crema di piselli in un colino e setacciatela aiutandovi con una spatola per renderla più cremosa.",
      },
      {
        stepNumber: 10,
        title: "Impiattamento e guarnizione",
        description:
          "Impiattate la vellutata e guarnitela con scaglie di Grana Padano a piacere prima di servirla calda o tiepida!",
      },
    ],
  },
  {
    id: 4,
    slug: "pasta-al-pomodoro",
    title: "Pasta al pomodoro",
    description:
      "Una ricetta semplice, ma non banale. Soggetta ad infinite varianti per trovare l'equilibrio perfetto di sapori, partendo già dalla scelta del tipo di pomodoro, da utilizzare per realizzare il sugo.",
    dishType: "Primi",
    prepTime: "10 minuti",
    difficulty: "Facile",
    portions: "2 porzioni",
    img: "/assets/recipes/cards/pasta-pomodoro.avif",
    alt: "Pasta al pomodoro",

    // SOLO PER LA PAGINA DETTAGLIO DELLA RICETTA
    longDescription:
      "La pasta al pomodoro e basilico è una ricetta facile e sempre gradita da tutti.Il sugo di pomodoro ha molte varianti: si può preparare il sugo con pomodori freschi, oppure con la polpa, i pelati o la passata. I tempi di cottura cambiano in base alla scelta, ma di sicuro non cambia la bontà di questo primo piatto.",
    ingredients: [
      "200g pasta",
      "250g polpa di pomodoro",
      "1 spicchio d'aglio",
      "2 cucchiai di Olio Extravergine d’oliva",
      "foglie di basilico",
      "Sale q.b",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Insaporimento del sugo",
        description:
          "Fate insaporire il sugo per qualche minuto a fuoco vivace.",
      },
      {
        stepNumber: 2,
        title: "Cottura del sugo coperto",
        description:
          "Copritelo con un coperchio, abbassate il calore e lasciatelo cuocere per circa 20 minuti.",
      },
      {
        stepNumber: 3,
        title: "Aggiunta del basilico fresco",
        description: "A fine cottura aggiungete le foglie di basilico fresco.",
      },
      {
        stepNumber: 4,
        title: "Cottura e scolatura della pasta",
        description:
          "Cuocete il tipo di pasta che più preferite e scolatela al dente direttamente nel sugo.",
      },
      {
        stepNumber: 5,
        title: "Amalgamatura finale e servizio",
        description:
          "Mescolate a fiamma viva per amalgamare bene e servite la pasta al pomodoro con il basilico fresco.",
      },
    ],
  },
  {
    id: 5,
    slug: "risotto-allo-zafferano",
    title: "Riso allo zafferano",
    description:
      "Questo classico primo piatto è tipico della cucina lombarda dove viene spesso abbinato all’ossobuco, ma è amato in tutte le regioni d’Italia; si prepara con facilità e pochissimi ingredienti.",
    dishType: "Primi",
    prepTime: "35 minuti",
    difficulty: "Facile",
    portions: "4 porzioni",
    img: "/assets/recipes/cards/riso-zafferano.webp",
    alt: "Risotto allo Zafferano",

    // SOLO PER LA PAGINA DETTAGLIO DELLA RICETTA
    longDescription:
      "Il risotto allo zafferano è un classico primo piatto della cucina italiana, e si prepara con pochissimi ingredienti. Il bello di questo piatto è che per prepararlo per quattro persone basterà usare una bustina di zafferano, quindi per quanto sia un ingrediente costoso ne basterà pochissimo per portare in tavola un primo saporito!",
    ingredients: [
      "300g riso",
      "30g burro",
      "2 cucchiai di Olio Extravergine d’oliva",
      "1 cipolla cucchiai di Olio Extravergine d’oliva",
      "1 bustina di zafferano",
      "1L di brodo vegetale",
      "Foglie di basilico",
      "sale fino q.b",
      "40g di formaggio grattugiato",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Preparazione del fondo di cottura",
        description:
          "Mettiamo in un tegame il burro, l’olio di oliva e il sale e facciamo scaldare.",
      },
      {
        stepNumber: 2,
        title: "Soffritto e stufatura della cipolla",
        description:
          "Aggiungiamo la cipolla a pezzettini e facciamola soffriggere e stufare per circa 10 minuti mescolando spesso.",
      },
      {
        stepNumber: 3,
        title: "Tostatura del riso",
        description:
          "Uniamo il riso e facciamolo tostare per 2-3 minuti mescolando con un cucchiaio di legno.",
      },
      {
        stepNumber: 4,
        title: "Cottura del riso con il brodo",
        description:
          "Aggiungiamo, poco per volta, il brodo vegetale caldo e portiamo a cottura il riso: ci vorranno circa 20 minuti.",
      },
      {
        stepNumber: 5,
        title: "Preparazione e aggiunta dello zafferano",
        description:
          "Dopo 5 minuti circa possiamo aggiungere lo zafferano. Per comodità consigliamo di metterlo in una ciotolina e diluirlo con un po’ di brodo vegetale (preso dal totale).",
      },
      {
        stepNumber: 6,
        title: "Incorporazione dello zafferano e prosecuzione della cottura",
        description:
          "Versiamo tutto lo zafferano nella pentola e, mescolando, continuiamo ad aggiungere il brodo fino a portare a cottura il riso.",
      },
      {
        stepNumber: 7,
        title: "Mantecatura finale",
        description:
          "A fine cottura mantechiamo con il burro e il formaggio grattugiato, mescolando energicamente (assaggiamo il riso e, se occorre, aggiustiamo di sale).",
      },
      {
        stepNumber: 8,
        title: "Impiattamento e servizio",
        description:
          "Dividiamo il risotto allo zafferano nei piatti e serviamolo bello caldo.",
      },
    ],
  },
  {
    id: 6,
    slug: "pasta-funghi-e-panna",
    title: "Pasta con funghi e panna",
    description:
      "Le pennette funghi e panna sono un primo piatto vegetariano molto semplice da preparare. Per la preparazione, possiamo utilizzare la panna vaccina, vegetale o di soia. Il piatto si prepara in poco tempo ed è considerabile un “salva cena”",
    dishType: "Primi",
    prepTime: "25 minuti",
    difficulty: "Facile",
    portions: "2 porzioni",
    img: "/assets/recipes/cards/pasta-funghi-speck-panna.jpg",
    alt: "Pasta funghi e panna",
    // SOLO PER LA PAGINA DETTAGLIO DELLA RICETTA
    longDescription:
      "Le pennette funghi e panna sono un primo piatto vegetariano molto semplice da preparare. Per la preparazione possiamo utilizzare sia la panna vaccina, quella vegetale o di soia. Il piatto si prepara in poco tempo ed è considerabile un “salva cena",
    ingredients: [
      "250g funghi champignon a fettine",
      "150ml panna vegetale",
      "sale fino q.b",
      "1 spicchio d'aglio",
      "150g pasta corta di un formato qualsiasi",
      "Olio d'oliva q.b",
      "30g formaggio grattugiato",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Cottura dei funghi e preparazione dell’acqua per la pasta",
        description:
          "In una padella cuociamo i funghi champignon a fettine con un filo d’olio d’oliva, sale e uno spicchio d’aglio. Nel frattempo mettiamo l’acqua per la pasta a bollire, uniamo anche il sale.",
      },
      {
        stepNumber: 2,
        title: "Aggiunta della panna",
        description:
          "Quando i funghi saranno ben appassiti e cotti aggiungiamo la panna.",
      },
      {
        stepNumber: 3,
        title: "Amalgamatura del condimento",
        description:
          "Mescoliamo bene, non occorre aggiungere l’acqua perchè i funghi la rilasciano durante la cottura.",
      },
      {
        stepNumber: 4,
        title: "Incorporazione del formaggio",
        description:
          "Uniamo anche 2-3 cucchiai di formaggio grattugiato e mescoliamo bene.",
      },
      {
        stepNumber: 5,
        title: "Cottura della pasta",
        description: "Buttiamo la pasta e cuociamola leggermente al dente.",
      },
      {
        stepNumber: 6,
        title: "Unione della pasta al condimento e servizio",
        description:
          "Scoliamo la pasta e uniamola al condimento. Mescoliamo bene e la pasta sarà pronta per essere servita. Se lo avete si può aggiungere del prezzemolo fresco tritato!",
      },
    ],
  },
  // Secondi
  {
    id: 7,
    slug: "bocconcini-di-pollo-al-limone",
    title: "Bocconcini di pollo al limone",
    description:
      "I bocconcini di pollo al limone sono un secondo piatto facile da preparare in poco tempo. Un’idea per il pranzo o la cena di tutti i giorni. Il succo di limone con la farina creerà una salsa perfetta per la scarpetta.",
    dishType: "Secondi",
    prepTime: "15 minuti",
    difficulty: "Facile",
    portions: "5 porzioni",
    img: "/assets/recipes/cards/Bocconcini-di-pollo-al limone.avif",
    alt: "Bocconcini di petto di pollo al limone",
    // SOLO PER LA PAGINA DETTAGLIO DELLA RICETTA
    longDescription:
      "I bocconcini di petto di pollo al limone sono un secondo piatto facile che si prepara in poco tempo. Un’idea perfetta per chi è sempre di corsa. Il succo di limone con la farina creerà una salsa gustosa, perfetta per fare scarpetta. Insieme al tacchino e al coniglio, il pollo fa parte del gruppo delle carni bianche, chiamate così perché caratterizzate da scarsa concentrazione di mioglobina, pigmento responsabile della colorazione delle carni.",
    ingredients: [
      "625g bocconcini di pollo",
      "125g farina 00",
      "3/4 cipolle",
      "1.5 limoni (succo e scorza grattugiata)",
      "250ml acqua",
      "olio extravergine di oliva q.b",
      "sale fino q.b",
      "prezzemolo fresco q.b",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Infarinatura del pollo",
        description:
          "Mettiamo in una ciotola i bocconcini di pollo e aggiungiamo la farina, infarinandoli bene.",
      },
      {
        stepNumber: 2,
        title: "Preparazione del soffritto al limone",
        description:
          "In una padella versiamo dell’olio extravergine d’oliva e tritiamo mezza cipolla. Aggiungiamo la scorza grattugiata di un limone e facciamo imbiondire la cipolla con la scorza del limone per qualche minuto.",
      },
      {
        stepNumber: 3,
        title: "Rosolatura del pollo",
        description:
          "Aggiungiamo poi i bocconcini di pollo infarinati e lasciamoli cuocere per qualche minuto, girandoli per farli cuocere da tutti i lati.",
      },
      {
        stepNumber: 4,
        title: "Cottura del pollo al limone",
        description:
          "Versiamo il succo del limone, un po’ di sale e un bicchiere di acqua. Lasciamo cuocere i bocconcini di pollo al limone con il coperchio, girando ogni tanto per circa 8 minuti, se serve aggiungiamo ancora un po’ d’acqua.",
      },
      {
        stepNumber: 5,
        title: "Finitura e servizio",
        description:
          "Una volta cotti mettiamo i bocconcini su un vassoio e aggiungiamo del prezzemolo fresco tritato in superficie. Portiamo in tavola i bocconcini cremosi, magari accompagnati con insalata e pomodori.",
      },
    ],
  },
  {
    id: 8,
    slug: "uova-strapazzate-cremose",
    title: "Uova strapazzate cremose",
    description:
      "Un secondo piatto semplice e nutriente, ideale anche come piatto unico.",
    dishType: "Secondi",
    prepTime: "10 minuti",
    difficulty: "Facile",
    portions: "2 porzioni",
    img: "/assets/recipes/cards/uova-strapazzate.webp",
    alt: "Uova strapazzate cremose",
    longDescription:
      "Le uova strapazzate sono una preparazione veloce che richiede pochi ingredienti e una cottura delicata.",
    ingredients: ["4 uova", "30g burro", "sale q.b.", "pepe q.b."],
    steps: [
      {
        stepNumber: 1,
        title: "Preparazione delle uova",
        description: "Sbattiamo le uova con un pizzico di sale.",
      },
      {
        stepNumber: 2,
        title: "Cottura",
        description:
          "Sciogliamo il burro in padella e cuociamo le uova mescolando.",
      },
      {
        stepNumber: 3,
        title: "Servizio",
        description:
          "Serviamo le uova appena pronte con una spolverata di pepe.",
      },
    ],
  },
  {
    id: 9,
    slug: "filetti-di-merluzzo-al-forno",
    title: "Filetti di merluzzo al forno con verdure",
    description:
      "I filetti di merluzzo al forno con verdure sono un secondo leggero, saporito e facile da preparare, perfetto per un pasto sano e veloce.",
    dishType: "Secondi",
    prepTime: "40 minuti",
    difficulty: "Facile",
    portions: "4 porzioni",
    img: "/assets/recipes/cards/merluzzo-con-verdure.webp",
    alt: "Filetti di merluzzo al forno con verdure",
    longDescription:
      "Una ricetta semplice per ottenere un secondo piatto nutriente e gustoso, con filetti di merluzzo teneri e verdure croccanti, cotto interamente al forno senza grassi eccessivi.",
    ingredients: [
      "4 filetti di merluzzo",
      "1 zucchina",
      "1 carota",
      "1 peperone",
      "olio extravergine di oliva q.b.",
      "sale q.b.",
      "pepe q.b.",
      "prezzemolo fresco tritato q.b.",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Preparazione delle verdure",
        description:
          "Tagliamo zucchina, carota e peperone a bastoncini o cubetti.",
      },
      {
        stepNumber: 2,
        title: "Condimento",
        description:
          "In una ciotola mescoliamo le verdure con olio, sale e pepe.",
      },
      {
        stepNumber: 3,
        title: "Preparazione dei filetti",
        description:
          "Disponiamo i filetti di merluzzo in una teglia leggermente oliata.",
      },
      {
        stepNumber: 4,
        title: "Aggiunta delle verdure",
        description: "Distribuiamo le verdure intorno e sopra i filetti.",
      },
      {
        stepNumber: 5,
        title: "Cottura in forno",
        description:
          "Cuociamo in forno preriscaldato a 180°C per circa 25 minuti, fino a quando il pesce sarà tenero e le verdure cotte.",
      },
      {
        stepNumber: 6,
        title: "Servizio",
        description:
          "Cospargiamo con prezzemolo fresco e serviamo i filetti caldi.",
      },
    ],
  },
];

export default recipesData;
