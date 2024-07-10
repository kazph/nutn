# NUTN: Naviger NTNU enkelt

**Sliter du også med å finne frem i NTNUs IT-jungel?** Hva er alle programmene til, hvilke skal du bruke, og hvordan bruker du dem? NUTN er løsningen! Denne nettsiden gjør det enkelt å navigere NTNUs sider og applikasjoner. Den er inspirert av instabart, men tilbyr et mer omfattende og oppdatert utvalg av applikasjoner.

✨ Funksjoner
NUTN har en omfattende liste med alle NTNU-relaterte programmer og nettsteder på ett sted. Man kan få en kort beskrivelse av hvert program og nettsted ved å holde musepekeren over det og trykke på kortene for å komme deg rett til programmet eller nettstedet du trenger.

## Bidra
Dersom du ønsker å bidra er det veldig ønskelig!

    Klon prosjektet: git clone https://github.com/YOUR_USERNAME/NUTN.git
    Installer avhengigheter: npm install
    Start lokal server: npm run dev
    Åpne i nettleser: http://localhost:3000



## Teknisk informasjon

NUTN er bygget med Astro med solid.js integrajsonen. Du kan bygge og kjøre den lokalt eller distribuere den til et nettsted.

Kommandoer:

    npm install: Installerer avhengigheter
    npm run dev: Starter lokal server på http://localhost:3000
    npm run build: Bygger nettsiden til dist-mappen
    npm run preview: Forhåndsviser nettsiden lokalt
    npm run astro ...: Kjør Astro CLI-kommandoer (f.eks. astro add, astro check)
    npm run astro -- --help: Få hjelp med Astro CLI

Prosjektstruktur:

```
│
├── public/
│   Dette er prosjektets offentlige filer, hovedsakelig med faviconene.    
│
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   │       Dette er hovedsiden og den viktigste siden
│   │ 
│   └── link.json
│       Dette er kanskje noe av den viktigste filen, dette er et JSON-dokument 
│       hvor alle linkene og teksten brukt på nettsiden er lagret. 
│
└── package.json

```

Språk: Hovedsakelig engelsk, men noen norske kommentarer kan forekomme.

Større interaktivitet: For komponenter som trenger mer interaktivitet enn Astro kan tilby, kan du bruke Solid.js-komponenter.

Mer informasjon: Se Astros dokumentasjon for detaljert utviklingsinformasjon: https://docs.astro.build/en/getting-started/

Jeg håper du finner NUTN nyttig!