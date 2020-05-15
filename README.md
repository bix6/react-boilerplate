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
- Use this to simulate button clicks:
```
it('closes the first tab and opens any clicked tab', () => {
  const wrapper = shallow(<Tabs tabs={tabsProp} />)
  wrapper.find('button').at(1).simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot()
})
```

## Setup index.css with Defaults, Meyer Reset and border-box
```
/* create-react-app defaults */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}



/* Eric Meyer Reset */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



/* Set Base Font Size and Border Box */
html {
    box-sizing: border-box;
    font-size: 10px;
}

*, *:before, *:after {
    box-sizing: inherit;
}
```