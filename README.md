# RTK Query VS React Query

## NPM Pakete installieren

### App erstellen:

- CRA mit TS template:  
  `npx create-react-app rtk-query-and-react-query --template typescript`

### Pakete installieren

#### RTK Query

- redux
- react-redux
- @reduxjs/toolkit

#### React Query

- axios (oder fetch)
- react-query

`npm i react-query axios redux react-redux @reduxjs/toolkit`

## Axios VS Fetch

### Fetch

- Vanilla JavaScript
- Kann vom Browser direkt interpretiert werden (außer alter IE)
- Daten müssen manuell transformiert werden
- Etwas aufwendiger zu verwenden

```jsx
fetch('http://localhost:8080/user', { method: 'GET' })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  });
```

### Axios

- Third-Party Library
- Muss kompiliert werden
- Daten werden automatisch transformiert
- Einfacher zu verwenden

```jsx
axios.get('http://localhost:8080/user').then((response) => {
  return response.data;
});
```

## Überflüssige Dateien löschen

- App.test.tsx
- logo.svg
- setupTests.ts
- reportWebVitals.ts
- react-app-env.d.ts

### index.tsx

- reportWebVitals löschen

## JSON Server

- Verzeichnis mit JSON File anlegen:  
  /data/db.json

```json
{
  "todos": [
    { "id": 1, "text": "Einkaufen", "done": true },
    { "id": 2, "text": "Programmieren", "done": false },
    { "id": 3, "text": "Essen", "done": false },
    { "id": 4, "text": "Schlafen", "done": true }
  ]
}
```

- Zweites Konsolenfenster öffnen und JSON Server mit npx ausführen  
  `npx json-server --watch data/db.json --port 8000`

- Im Browser: http://localhost:8000/todos

## index.css anpassen

- Styles hinzufügen

```css
.App > div {
  max-width: 400px;
  display: grid;
  grid-template-columns: 80% 20%;
}

input,
button,
label {
  cursor: pointer;
}
```

## App starten

`npm start`
