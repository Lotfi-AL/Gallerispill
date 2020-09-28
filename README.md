# <center>Prosjekt 2, Gallerispill </center>

<b> NB! Dersom du forsøker å åpne i gitpod, og har deaktivert pop-ups, anbefaler vi deg å dra skjermen som viser nettleseren til venstre!

Vi har valgt å løse oppgaven med et spill, der brukeren kan kontrollere en figur og bevege seg til nye scener og være med på å påvirke utstillingen med elementer som regn, vind og nattmodus.

## <center> React & Typescript</center>

Vi har løst oppgaven med React og typescript med både funksjonelle- og klasse-komponenter. Vi har forsøkt å bruke komponenter så mye det lar seg gjøre, for å ta nytte av modulbaserte React som gjør komplekse nettsider oversiktlig. Samtidig har typescript sørget for å gjøre typesjekking langt enklere. I prosjektet har vi valgt å skille komponentene der det viser seg å være nyttig, som for eksempel et komponentet for koden som tar seg av API-kall til Poetry-DB og visning av data som kommer inn (src/components/Poetry), et komponent som omhandler selve spillet (../Game) som settes sammen i app.tsx med andre komponenter.

Vi har tatt bruk av states og props til å blant annet sjekke om brukeren er inne på landing-page og føre brukeren videre ved å sette state av landed. I tillegg til dette har vi også tatt i bruk Context-API (StatusProvider) fordi vi ønsket å ha vær effekter tilgjengelig på alle underkomponenter uten å måtte sende props gjennom alle. Dette gir oss globale states slik at vi for eksempel fikk mulighet til å endre på state ett sted, og kunne se dette hos de andre komponentene. Et eksempel på dette er verdiene «Rain», «Wind» og «Night» som blir sendt gjennom Context-API og gjør det mulig for underkomponenter å se og manipulere verdiene slik at brukeren skal kunne interagere og manipulere maleriene.

## <center> SVG & Canvas</center>

Canvas har blitt brukt for å skape gå-animasjoner i spillet. I tillegg tegnes "huset" på nettsiden fra et _tilemap_ ved bruk av Canvas sin drawImage() funksjon. Alle assets som er brukt til dette kan finnes i src/assets/house og src/assets/character.

SVG har blitt brukt til å tegne og animere de bevegelige komponentene i bakgrunnen (skyer og regn), der viewbox ble brukt for å gjøre det enklere for oss å kunne automatisk skalere figurene uten tilleggsfunksjoner. Figurene i SVG ble deretter lagt inn som komponenter, hentet inn (../Terrain) og lagt inn som komponenter. Grunnen til at vi valgte å gjøre figurene til komponenter var fordi vi ønsket å manipulere animasjonene og figurene, dette viste seg å være den beste måten å få til ønsket resultat uten bruk av tredjepartsbiblioteker.

## <center> AJAX</center>

Vi har valgt å hente inn dikt fra Poetry-DB med fetch()-metode (../Poetry/Poetry.tsx) der en funksjon tar inn to strenger med navn på forfatter og tittel på dikt, og returnerer dette i JSON-format. Grunnen til at vi valgte å legge dette inn i en funksjon var å slippe å gjenta kode og heller kunne kalle på funksjonen der det var nødvendig.

## <center>Web storage</center>

Vi ønsket å bruke sessionstorage til å vite tilstanden (Context) til forskjellige scener som for eksempel om det var regn, vind, eller natt og lagre dette, slik at dersom fanen blir lukket, så blir disse lagret og gjenopptatt når man går tilbake til siden. Samtidig har vi brukt local storage til å lagre tilstanden til forskjellige scener mellom sessions. Også her har vi lagret Context og henter opp dette når sessions starter.

## <center>Responsive webdesign</center>

Nettsiden er responsiv og tilpasser seg skjermets høyde og bredde. For å oppnå dette, har vi tatt i bruk viewbox i SVG, samt Viewports som view-width og view-height for å definere størrelsene til de forskjellige elementene i nettsiden, noe som fører til at elementene har en bredde og høyde i forhold til skjermets størrelse og tilpasser seg endringer. Ettersom vi har utformet prosjektet som et spill, og hovedfunskjonaliteten krever et tastatur har vi valgt å bruke mediaqueries for å be brukeren om å bytte til en større enhet med et tastatur. For å komme rundt dette problemet ville det vært fornuftig å legge til knapper på nettsiden som kan brukes på mobil, men dette ble nedprioritert i løpet av utviklingen.

## <center>Node.js & NPM</center>

Vi valgte å ikke bruke create-react-app pakken ettersom konfigurasjonsmodulen for typescript har blitt deprecated, noe som førte til at dersom man ønsket å bruke denne pakken, måtte man bruke en eldre og ikke anbefalt metode. Samtidig ønsket vi å ha bedre kontroll på hvilke pakker som ble installert og sørge for at pakker som ikke ble brukt, ikke ble tatt med.

Vi valgte også å ikke utvikle via gitpod ettersom vi ikke hadde behovet for det og følte at produktiviteten var høyere dersom utviklet på egne maskiner. For å sørge for at versjonen på språk på egne maskiner var i samsvar, brukte vi package-lock.json og package.json til å lagre hvilke versjoner som blir brukt

## <center>Testing</center>

Vi har testet nettsiden på flere enheter. Først og fremst på både Windows og Linux maskiner, med både Mozilla Firefox 80 og Google Chrome 85. Det viser seg at bilde renderingen i canvas ikke er helt optimal, da Firefox ikke støtter `image-rendering: pixelated`. Utover dette er nettsiden testet på en OnePlus 7 Pro, og nettsiden fungerer som forventet.

Vi har også en snapshot test laget med Jest. Denne kjøres automatisk i gitpod. 

## <center>Git</center>

Vi valgte å ta i bruk Issues og Milestones til å dekomponere utviklingen og presisere arbeidsoppgaver. Ved starten av prosjektet ble det lagt opp issues og milestones for komponenter som skulle bli utviklet med forklaringer og beskrivelse av problemstillingen. Under første møte ble det også kartlagt hvor mye arbeid som kreves og dette ble tatt hensyn til når issues ble laget. Dette førte til at det ble enklere å holde oversikt over fremgangen, samtidig som enkelte kunne finne nye arbeidsoppgaver dersom de ble ferdige med det de holdt på med. For hver commit ble issue enten nevnt eller lukket.

Vi krevde også at alle merge requests ble gått gjennom av et annet gruppemedlem for å påse at alle hadde kjennskap til kodebasen. På denne måten ble terskelen for å gjøre endringer på en ukjent del lavere.
