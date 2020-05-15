# React Client Setup

## Create a New Project
- `cd` into parent folder
- `npx create-react-app new-app-name`
- `cd` into folder
- `npm i`
- Optional:
    - `cd ./src`
    - `rm serviceWorker.js App.css logo.svg`
- Update `./src/App.js`:
```
import React from 'react';

function App() {
  return (
    <main className='App'>
      {/* content goes here */}
    </main>
  );
}

export default App;
```
- Update `./src/index.js`:
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
```
- `npm run start`