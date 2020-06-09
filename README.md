# React Client Setup

## Create a New Project

- `cd` into parent folder
- `npx create-react-app --use-npm new-app-name`
- `cd` into folder
- `npm i` (superfluous?)
- `npm i react-router-dom`
- `npm i enzyme enzyme-adapter-react-16 enzyme-to-json --save-dev`
- `npm audit fix`
- Optional:
  - `cd ./src`
  - `rm serviceWorker.js App.css logo.svg`
  - `cd ..`
- Copy the code in from the various files or go through them individually below:

  - App.js
  - App.test.js
  - css-defaults/
  - index.js
  - setupTests.js
  - LandingPage Folder (Example of Child Component)

- Update `./src/App.js` (2 methods):

```
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <h1>App</h1>
        );
    }
}

export default App;
```

- Or use a function:

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
import './index.css';
import App from './App';

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

## Setup Enzyme and Snapshot Tests

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

- These have been separated out into 3 files held in `css-defaults/`

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

## Setup Router

- `npm i react-router-dom`
- Wrap the App inside `index.js` in BrowserRouter

```
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
```

- Create a Route in `App.js`:
- Can also use `exact path` instead of `path` for a perfect match

```
import { Route } from 'react-router-dom';

<Route path='/' component={ Header } />
```

- Then create a Link in `Header.js`:

```
import { Link } from 'react-router-dom';

<Link to='/'>
    <h1>Click Header To Go Home</h1>
</Link>
```

- To only select one route at a time use `<Switch>`:
  - Selects the first match it finds

```
import { Route, Switch } from 'react-router-dom';

<Switch>
    <Route exact path='/' component={ Header } />
    <Route path='/about' component={ AboutHeader }>
</Switch>
```

- Update Smoke Tests to wrap components in BrowserRouter:

```
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    div);
```

## DefaultProps

- Declare inside class with:

```
static defaultProps = {
    prop1: 'my prop'
}
```

- Or declare outside of the class with:

```
ComponentName.defaultProps = {
    prop1: 'my prop'
}
```

- Access with: `this.props.prop1`

## PropTypes

- `npm i prop-types`
- `import PropTypes from 'prop-types';`
- Declare with:

```
ComponentName.propTypes = {
    prop1: PropTypes.string.isRequired
}
```

## Context

- Create `./src/NameContext.js` with desired form:

```
import React from 'react';

const CounterContext = React.createContext({
    count: 0,
    increaseCount: () => {}
})

export default CounterContext;
```

- Import Context into main App and set it up in the render:

```
import React from 'react';
import Widget from './Widget/Widget';
import CounterContext from './CounterContext';

class App extends React.Component {
    state = {
        count: 10
    }

    handleIncreaseCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const contextValue = {
            count: this.state.count,
            increaseCount: this.handleIncreaseCount
        }

        return (
            <CounterContext.Provider value={ contextValue }>
                <div className="App">
                    <Widget />
                </div>
            </CounterContext.Provider>
        );
    }
}

export default App;
```

- Use Context in child class:

```
import React from 'react';
import CounterContext from '../CounterContext';

class Counter extends React.Component {

    static contextType = CounterContext;

    state = {
        count: 0
    };

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className="Counter">
                <p>The Count is: { this.state.count }</p>
                <button type="button" onClick={ this.handleClick }>Click Me</button>
                <p>The Context Count is: { this.context.count }</p>
                <button type="button" onClick={ () => this.context.increaseCount() }>Click Me</button>
            </div>
        )
    }
}

export default Counter;
```

- Or Use Context in a function with Consumer:

```
import React from 'react';
import LanguageContext from './LanguageContext';

export default function LangControls(props) {
    return (
        <LanguageContext.Consumer>
            {(value) => {
                return (
                    <>
                        <button
                            onClick={() => props.onSetLang('en-GB')}
                            disabled={value.lang === 'en-GB'}>
                            British{' '}
                            <span role="img" aria-label="en-GB">GB</span>
                        </button>
                        {' '}
                        <button
                            onClick={() => props.onSetLang('en-US')}
                            disabled={value.lang === 'en-US'}>
                            American{' '}
                            <span role="img" aria-label="en-US">US</span>
                        </button>
                        {' '}
                        <button
                            onClick={() => props.onSetLang('ko')}
                            disabled={value.lang === 'ko'}>
                            Korean{' '}
                            <span role="img" aria-label="ko">KR</span>
                        </button>
                    </>
                );
            }}
        </LanguageContext.Consumer>
    );
}
```

## Deploy to Vercel

1. Ensure on latest code branch
2. Remove vulnerabilities
3. Add Environment Variables
4. Run tests
5. Run a new build
6. Deploy

- Create `./public/now.json`:
  - Routes are used to route everything to index.html so the routing can happen in our app
    - Without this reload will cause issues as the routes won't be found

```
{
    "version": 2,
    "routes": [
        { "handle": "filesystem" },
        { "src": "/.*", "dest": "/index.html" }
    ]
}
```

- Setup scripts:

```
"scripts": {
    "start": "react-scripts start",
    "prebuild": "CI=true react-scripts test --colors",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "now --prod ./build",
},
```

- `npm run deploy` to run the sequence and deploy
