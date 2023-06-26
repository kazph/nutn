# NUTN
*Sliter du også med å finne frem i NTNUs IT-jungel, hva er alle programmene til? Hvilke skal jeg bruke dette? Hvordan bruker jeg dette?*

Det er iallefall dette jeg sliter med, og etterhvert har jeg bokmerket så mange forsjellige sider til at jeg velgte å lage en kunne føre meg videre til disse. Dermed kan jeg presanter **NUTN** (dah daaah). På denne nettsiden så kan man lettere navigere NTNUs sider og applikasjoner! Tusen takk til instabart for insperasjonen, men håper denne tjener meg bedre, da det er flere applikasjoner og oppdatert. 

## Hvordan bygge prosjektet
Får å bygge nettsiden er det satt opp en automatisk workflow når man pusher til `master`. Uansett kan man bygge den lokalt slik som man gjør med Astro, man kan se en oversikt over hvordan man kan gjøre det under. 

All commands are run from the root of the project, from a terminal:
| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
```
npm create astro@latest -- --template basics
```

## Prosjektstruktur

Prosjektet er bygget opp som standard Astro-prosjekter, som er på følgende måte. 

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Sprsåket innad i kodebasen er hovedsaklig på Engelsk, men ofte glemmer jeg meg bort. 

For komponenter som trenger større interaktivitet enn det Astro kan gi så kan man bruke Solid.js components. 

For å utvilke kan det være nyttig å studere [Astros dokumentasjon](https://docs.astro.build).