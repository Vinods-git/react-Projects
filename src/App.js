import React from 'react';
import { Provider } from './UserContext';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Counter from './Counter';
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';
import CompA from './CompA';
import ApiReq from './ApiReq';
import MousePosition from './MousePosition';

class App extends React.Component {
  render() {
    return <MousePosition />;
  }
}

export default App;
