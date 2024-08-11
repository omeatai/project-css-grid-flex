## project-css-grid-flex

<details>
<summary>1-create-react-app </summary>

# 1-create-react-app

```x
npm create-react-app my_app
```

```x
cd my_app
npm start
```

<img width="1281" alt="image" src="https://github.com/user-attachments/assets/c718243d-894f-414d-b5eb-af5d89cfca48">
<img width="1382" alt="image" src="https://github.com/user-attachments/assets/7cab9921-3406-438d-a6ac-c441e888a018">
<img width="1382" alt="image" src="https://github.com/user-attachments/assets/59b0798c-3c88-4e32-ab74-006a0b013d84">
<img width="1382" alt="image" src="https://github.com/user-attachments/assets/eb9cd127-2cea-49ae-ae76-84190ddde29c">
<img width="1382" alt="image" src="https://github.com/user-attachments/assets/f8ca50dc-a2d9-4b85-a446-a4933af419cd">

</details>

<details>
<summary>2-Create-Horizontal-rows-with-div </summary>

# 2-Create-Horizontal-rows-with-div

### github_projects/project-css-grid-flex/my_app/src/App.js:

```js
import "./App.css";
import Grid from "./components/Grid/Grid";

function App() {
  return (
    <div className="App">
      <Grid />
    </div>
  );
}

export default App;

```

### github_projects/project-css-grid-flex/my_app/src/components/Grid/Grid.jsx:

```jsx
import React from "react";
import "./GridStyles.css";

const Grid = () => {
  return (
    <section className="container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </section>
  );
};

export default Grid;

```

### github_projects/project-css-grid-flex/my_app/src/App.css:

```css
html,
body {
  margin: 5px;
  background-color: #ffeead;
  overflow: hidden;
}
```

### github_projects/project-css-grid-flex/my_app/src/components/Grid/GridStyles.css:

```css
.container>div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: #ffeead;
    background-color: #ffeead;
}

.container>div:nth-child(1n) {
    background-color: #96ceb4;
}

.container>div:nth-child(3n) {
    background-color: #88d8b0;
}

.container>div:nth-child(2n) {
    background-color: #ff6f69;
}

.container>div:nth-child(4n) {
    background-color: #ffcc5c;
}
```

<img width="1332" alt="image" src="https://github.com/user-attachments/assets/a1d5c17d-567c-4eae-95bf-262fa5158186">
<img width="1382" alt="image" src="https://github.com/user-attachments/assets/5ec965ef-d23d-4679-8348-9924c0ff9bbb">
<img width="1382" alt="image" src="https://github.com/user-attachments/assets/87c3e0a9-d974-4cbb-adcf-0cfff44d6c32">
<img width="1382" alt="image" src="https://github.com/user-attachments/assets/09d4ba04-cb82-4e39-8d70-eb44ae2bbeea">
<img width="1382" alt="image" src="https://github.com/user-attachments/assets/5c4c648f-25c9-48be-877e-9e9f599f8030">

</details>

<details>
<summary>3- </summary>

```html

```

```css

```

```css

```

```css

```

```css

```

```css

```

```css

```

```css

```

```css

```

</details>
