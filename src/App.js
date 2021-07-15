import React from 'react';
import { Provider } from './UserContext';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Counter from './Counter';
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';
import CompA from './CompA';
import ApiReq from './ApiReq';
import MousePosContainer from './MousePosContainer';
import DataFetch2 from './DataFetch2';
import UseContext from './UseContext';
import UseReducer from './UseReducer';
import ReducerContext from './ReducerContext';
import FetchDataUseReducer from './FetchDataUseReducer';
export const UserContext = React.createContext('vinod');
export const ChannelContext = React.createContext('Doly');
class App extends React.Component {
  render() {
    return <FetchDataUseReducer />;
  }
}

export default App;
