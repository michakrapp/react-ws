# Agenda

Wir bauen einen kleinen Teil eines Shops:

- Kategorie-Übersicht
- Produktverwaltung

Die wichtigsten Themen heute:

- React Basics
- React vs. TypeScript
- Hook API
- Formulare
- Routing
- Architekturen im Frontend
- Ausblick: Testing
- Ausblick: Redux

## CRA

https://create-react-app.dev/

`npm create react-app frontend --use-npm --template typescript`
`npx create-react-app frontend --use-npm --template typescript`

```
npm install -g create-react-app
create-react-app frontend --use-npm --template typescript
```

## Styling

- Inline styling mit dem style-Attribut
- CSS Importe von klassischen CSS-Dateien in der Komponentendatei
- SCSS Importe (node-sass muss installiert sein) - dann wie CSS Import
- CSS Modules - Datei heißt wie Komponenten-Datei nur mit .module.css
  - Klassendefinitionen
  - import der Klassen in der Komponente
- 3rd Party Libs wie Styled-Components (https://styled-components.com/)
  - Installation: npm i styled-components
  - Einbindung import styled from 'styled-components'
  - const Warning = styled.span`color: green`;
