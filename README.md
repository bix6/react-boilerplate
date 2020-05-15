# React Client Setup

## Create a New Project
- `cd` into parent folder
- `npx create-react-app new-app-name`
- `cd` into folder
- `npm i`
- `npm audit fix`
- Optional:
    - `cd ./src`
    - `rm serviceWorker.js App.css logo.svg`
    - `cd ..`
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

## Setup Smoke Test
- Update `App.test.js`:
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {
    it('Smoke Test: renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})
```

## Setup Enzyme (With Snapshot Test)
- `npm i enzyme enzyme-adapter-react-16 enzyme-to-json --save-dev`
- Update `src/setupTests.js`:
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```
- Update `App.test.js` by inserting:
```
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('Snapshot: renders empty', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
})
```