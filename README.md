# Sito Web di cucina con ricette

**Di cosa si tratta e da cosa è composto?**
Sito web responsive realizzato con **React + vite** e i framework Tailwind CSS e DaisyUI riguardante un fittizio brand di cucina che pubblica ricette sul proprio sito. Il sito è provvisto di **4 pagine**:

1. **Home (landing page)**: con una presentazione generale del brand
2. **Lista Ricette**: con tutte le ricette disponibili.
3. **NewsLetter**: con un form semplicissimo e che non manda alcun dato per iscriversi alla newsletter.
4. **Pagina di dettaglio della singola ricetta**: con tutte le informazioni della ricetta visualizzata (routing dinamico).

#### Nota

Nella navbar e footer sono presenti link, come quelli relativi a contatti o informazioni legali che sono inseriti solo per completezza visiva, ma non funzionano.

**Il layout delle pagine** è pressoché sempre lo stesso: vengono utilizzati Flexbox e Grid a seconda del viewport.

---

## Tecnologie utilizzate:

- **[React](https://reactjs.org/)** - Libreria per lo sviluppo dell'interfaccia utente.

- **[Vite](https://vitejs.dev/)** - Bundler veloce per sviluppo e build.

- **[Tailwind](https://tailwindcss.com/)** - Framework CSS.

- **[DaisyUI](https://daisyui.com/)** - Libreria di componenti dell'interfaccia utente basata su Tailwind.

- **[React Router](https://reactrouter.com/home)** - Dipendenza per il routing in una SPA.

---

**Struttura del progetto**:

- `./public/assets`: cartella con tutte le immagini ed icone utilizzati nelle varie pagine e componenti.
- `./docs`: cartella con tutti gli screenshots del sito e del codice per il readme.
- `./src/components`: cartella con tutti i componenti del sito suddivisa in sottocartelle.
  - `./src/components/home`: cartella con tutti i componenti della pagina Home (Landing).
  - `./src/components/layout`: cartella con tutti i componenti del sito universali per il layout della pagina come navbar e footer.
  - `./src/components/UI`: cartella con tutti i componenti di interfaccia come card, form ecc.
- `./src/data`: cartella con tutti gli array di oggetti utilizzati per mappare i componenti.
- `./src/pages`: cartella con tutte le pagine del sito.

<br />

![Immagine della struttura del progetto](docs/README-code-screenshots/struttura-progetto.png)

---

### Come avviare il progetto in locale

1. Assicurati di aver installato Node.js.
2. Apri il terminale:

```bash
git clone https://github.com/Edoardo-37/Cooking-website-renewed.git
cd Cooking-website-renewed (nome repository)
npm install
npm run dev
Apri il browser su http://localhost:5173
```

3. Per testare il sito sul tuo dispositivo mobile, vai al file `package.json` > oggetto `scripts` > chiave `dev` e digita `dev --host`, quindi riavvia il server con `npm run dev` e copia l'indirizzo mostrato.
4. Per arrestare il server, premi `CTRL + C`.

---

## Il Codice

### Pagina Principale - Landing page

- _Questo progetto è un remake di uno vecchio che non prevedeva alcuna landing page, ma solo un piccolo hero con CTA alla pagina ricette_. La landing ha un funnel ben preciso e punta a 2 conversioni: 1 principale, vedere le ricette, e una secondaria, iscriversi alla newsletter.

![Immagine della pagina Home da desktop - disponibile anche in mobile](./docs/desktop/desktop-landingPage.png)

La vecchia versione della homepage

![Immagine della pagina home della vecchia versione del sito da desktop](./docs/README-code-screenshots//old-version-of-webiste-homepage.png)

#### Header

- Presente il componente **navbar**, costruita con l'aiuto di DaisyUI e il suo preset, in position fixed che però non sovrasta il contenuto grazie ad uno snippet JavaScript che recupera, al render della pagina, la sua altezza e setta una proprietà al tag html. Questa poi verrà prelevata in CSS nel file `./css/style.css` e applicata come variabile alla proprietà padding-top delle prime sezioni delle varie pagine chiamate con la classe `hero-offset` o `hero`.
  <br />

  `JavaScript - file Navbar.jsx`
  <br />

  ![Immagine dello snippet di codice nel file Navbar.jsx](./docs/README-code-screenshots/Navbar-offsetHeight.png)

  <br />

  `CSS - file index.css`
  <br />

  ![Immagine dello snippet di codice nel file index.css](./docs/README-code-screenshots/Navbar-offsetHeight-CSS.png)

  <br />

#### Hero

- Titolo principale della pagina,
- Breve sottotitolo e doppia CTA (_Call To Action_) colorate in maniera diverse per differenziarne l'importanza, che rimanda alla pagina della lista delle ricette e una per compilare il form nella pagina newsletter.
- Un'immagine di sfondo coperta con un overlay nero trasparente al 50%.
- Questa sezione ha la classe `hero` che in DaisyUI costruisce un componente Hero già pronto con spacing e centrature impostate.
  <br />

  ![Immagine dell'hero section vista in modalità desktop](./docs/desktop/desktop-landingPage-hero.png)

#### Brand Story

- Griglia responsive contenente: breve descrizione di come nasce il brand Sapori e Profumi e con quali valori si vuole approcciare sia alla cucina che agli utenti,
- Illustrazione generica
  <br />

  ![Immagine della Brand Story section vista in modalità desktop](./docs/desktop/desktop-landingPage-brandStory.png)

#### How it Works

- Piccola sezione che spiega come usufruire dei contenuti del brand; in questo caso del sito di ricette.
- Le card degli step sono generate da un componente a parte che riceve delle props in ingresso da un array di oggetti (`./src/data/howItWorksSteps.jsx`) e stampa una card. Griglia responsive con una card per ogni step.
  <br />

  ![Immagine della How it Works section vista in modalità desktop](./docs/desktop/desktop-landingPage-HowItWorks.png)

#### Sezione For Who

- Piccola sezione che risponde alla domanda: per quale persone e quali casistiche è adatto questo sito?
- Griglia responsive contenente: un'illustrazione generica e una breve descrizione in ordine invertito rispetto alla sezione [brand story](#brand-story) per dare dinamicità alla lettura.

  <br />

  ![Immagine della For Who section vista in modalità desktop](./docs/desktop/desktop-landingPage-forWho.png)

#### Emotional section

- Piccola sezione che risponde alla domanda: perché scegliere questa pagina / brand?
- Impostazione simile alla sezione hero con un'immagine sfumata da un overlay al 50% nero e un secondo tentativo di far convertire l'utente facendolo continuare nella navigazione verso le ricette.

  <br />

  ![Immagine della sezione Emotional in modalità desktop](./docs/desktop/desktop-landingPage-emotionalSection.png)

#### Newsletter CTA reminder section

- Piccola sezione che ricorda all'utente di convertire per iscriversi alla newsletter in caso volesse compilando il form nella pagina dedicata.
- Form di contatto essenziale, che non invia dati a nessun backend, che simula la prenotazione di un tavolo.
  <br />

![Immagine della sezione Newsletter CTA reminder in modalità desktop](./docs/desktop/desktop-landingPage-newsletterConversion.png)

#### Footer

- Componente built-in di DaisyUi con una griglia a 2 colonne responsive:
- Una con Il logo e copyright.
- 3 menu nav, una con i link per navigare le varie pagine e una contenente informazioni essenziali tra cui le note legali (**Quest'ultime non rimandano ad alcuna pagina**).

---

### Pagina Lista Ricette

![Immagine della pagina lista ricette da desktop - disponibile anche in mobile](./docs/desktop/desktop-recipesPage.png)

  <br />

La vecchia versione della pagina lista ricette

![Immagine della pagina lista ricette della vecchia versione del sito da desktop](./docs/README-code-screenshots/old-version-of-webiste-recipesList-page.png)

- La pagina è strutturata con un picoclo hero sempre con sfondo scurito da un overlay al 50%,
- Poi sotto 3 tab ognuna che filtra l'elenco dei piatti, presenti in un array di oggetti (`./src/data/recipesData.jsx`) e stampa a seconda della categoria.
- i vari piatti sono disposti con una griglia responsive che quando è su una colonna ha gli elementi allinati a sinistra come default, ma appena si adatta a 2 colonne gli elementi sono posizionati centralmente per una migliore visione.
- Le tab sono prese da **[DaisyUI](https://daisyui.com/components/tab/#tabs-box)**. La parte JS di queste tab è posta nello stesso componente che renderizza l'intera pagina delle ricette.

  - Innanzitutto settiamo con `useState` una tab che è attiva di default e poi dichiariamo in un array tutti i tipi di piatti che volgiamo popolino la tab-box. La costante filteredRecipes avrà valore vero o falso ed esso dipenderà dalla funzione di filtraggio dell'array di oggetti `recipesData` contenente tutte le informazioni sulle singole ricette. Il valore di ritorno è: se il dishtype del singolo piatto analizzato nell'array è uguale a quello attualmente nel valore di activeTab allora torna vero altrimenti falso.
  - Nel return quindi mappiamo l'array con tutti i dishtypes e per ognuno, dentro il div contenente i vari link delle tab, creiamo un componente Link con dentro il nome della tab; se il valore di activeTab, inizializzato con useState, è uguale in quel momento all'elemento dell'array allora con un ternal operator cambiamo stile alla scritta. Inoltre al click di ogni link settiamo il nuovo valore di activeTab con quello corrente.
  - **Per stampare solo le card filtrate** a seconda dell'dishtype selezionato mappiamo filteredRecipes, cioè il nuovo array creato dalla funzione filter con dentro solo i piatti filtrati: nel map pe rogni piatto filtrato stampa una card della ricetta.
    <br />

  ![Immagine del codice JSX del componente che renderizza la pagina ListaRicette e il relativo codice per le tab dinamiche](./docs/README-code-screenshots/recipePageTabs.png)

  <br />

- Per quanto riguarda **la singola card della ricetta** essa è un componente che riceve in ingresso l'array di oggetti (`./src/data/recipesData.jsx`) utilizzando solo alcune delle proprietà contenute, le altre sono usate dalla pagina riguardante la ricetta in dettaglio. Il componente card è anch'esso un built in di DaisyUI ma modificato leggermente.
  <br />

  ![Immagine del componente RecipeCard](./docs/README-code-screenshots/recipeCardComponent.png)

---

### Pagina Newsletter

- Questa è una pagina semplicissima contenente un form minuscolo per non mettere troppa pressione all'utente. Il form è stato preso da **[DaisyUI](https://daisyui.com/components/validator/#validator-and-validator-hint)** con delle modifiche come gli input con l'help text e la rimozione di campi come il nome non necessariamente obbligatori per questo scopo.
- Le label dei vari input hanno classe `sr-only` rendendole visibili solo agli screen reader e per non occupare spazio.
- Infine il background segue la stessa logica dell'hero nella landing.

  <br />

  ![Immagine della pagina newsletter da desktop - disponibile anche in mobile](./docs/desktop/desktop-newsletterPage.png)

  <br />

  La vecchia versione della pagina newsletter
  <br />

  ![Immagine della pagina newsletter della vecchia versione del sito da desktop](./docs/README-code-screenshots/old-version-of-webiste-newsletter-page.png)

---

### Pagina "Ricetta nel dettaglio"

![Immagine della pagina ricetta nel dettaglio da desktop - disponibile anche in mobile](./docs/desktop//desktop-recipeDetailPage.png)

La vecchia versione della pagina di una ricetta nel dettaglio

![Immagine della pagina ricetta nel dettaglio della vecchia versione del sito da desktop](./docs/README-code-screenshots/old-version-of-webiste-recipesDetail-page.png)

- La pagina ha un background di fondo che riprende i colori della CTA che rimanda alle ricette e sopra una section accorciata e centrata per dare un effetto foglio.
- Il contenuto di queste pagine è gestito da 2 elementi:

  - **Un routing dinamico** che evita il dover creare x pagine per ogni ricetta e ottimizzare grazie agli `slug`.
  - Il **componente RicettaInDettaglio** che, ricevendo l'array di oggetti con tutte le ricette, stampa a schermo lo scheletro della pagina cambiando le varie a seconda dello slug della ricetta cioè della rotta in cui siamo in quel momento.
    <br />

    ![Immagine del codice del componente App](./docs/README-code-screenshots/appComponent.png)
    <br />

    Nel componente App per la route dinamica mettiamo nell'attributo `path` il percorso fino alle ricette e poi **`:slug`** la parte dell'URL che cambierà a seconda della ricetta.
    <br />
    ![Immagine del codice dell'array di oggetti recipesData](./docs/README-code-screenshots/recipesDataArray.png)
    <br />

    Nell'array di oggetti c'è tutto il necessario sia per la card nella pagina `ListaRicette.jsx` che per quella `RicettaInDettaglio.jsx` qui ci interessa: **`slug`**, **`longDescription`**, **`Ingredients`** (un altro array) e **`steps`** (un altro array di oggetti).
    <br />

    ![Immagine del codice del componente RicettaInDettaglio](./docs/README-code-screenshots/recipeDetailPage.png)
    Nel componente che renderizza le pagine dinamiche delle singole ricette ci sono diversi elementi da sottolienare:

    - Recuperiamo lo slug dall'URL grazie all'hook `useParams()`
    - Come già fatto con filter per le tab nella [Pagina della lista ricette](#pagina-lista-ricette), anche qui con la costante `recipeToRender` andiamo a vedere quale ricetta bisogna stampare tramite un controllo di un'uguaglianza. Il `metodo find` scorre l'array recipesData e restituisce il PRIMO oggetto per cui la condizione posta sia vera: _se lo slug della ricetta è uguale a quello recuperato dall'URL tramite l'hook useParams_. Se così fosse renderizza la pagina con le informazioni specifiche per quella ricetta, altrimenti recipeToRender sarebbe undefined, si entrerebbe nel blocco if sottostante e renderizza l'errore.
    - _In caso lo slug corrispondesse_ allora renderizziamo al pagina però prendendo le proprietà dalla prima referenza che il `metodo find` ha trovato, quindi non usiamo recipesData mappando ma direttamente `recipeToRender.proprietà`.
    - Gli ingredienti essendo un array lo scorriamo il `metodo map` e per ogni elemento creiamo un list item.
    - Gli steps della ricetta hanno numero identificativo, titolo e descrizione. Anch'essi li scorriamo con `map` ciascuno e stampiamo dentro i list item un contenitore flex con titolo e descrizione. Ho anche cambiato lo stile ai marker del tag `ol` via CSS.
      <br />
      ![Immagine del codice CSS per la modifica dei marker della list ordinata degli steps della ricetta nella pagina RicettaInDettaglio](./docs/README-code-screenshots/listMarkerCSSModify.png)

---

### Note tecniche

- Per la creazione dei copy dei titoli o alcune descrizioni dei piatti è stata utilizzata l'IA per velocizzare il lavoro e non perdere troppo tempo.
- Del codice è stato copiato direttamente sia dal progetto 'vecchio / da restaurare', sia da altri già fatti come le dimensioni dei vari font.
- Le immagini di alcune ricette presenti in questo progetto sono state prese da alcuni siti di cucina per velocizzare e mettere degli esempi. Tutti i diritti, inclusi copyright e marchi registrati, appartengono ai rispettivi proprietari. Le immagini sono utilizzate esclusivamente a scopo illustrativo e informativo.

---

#### Difficoltà riscontrate durante il progetto

1. L'organizzazione delle cartelle è una sfida sempre importante anche per chi un domani volesse scaricarsi il progetto. Ho cercato di essere il più coerente possibile con le varie pagine e sezioni.
