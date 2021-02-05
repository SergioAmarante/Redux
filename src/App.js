import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Sidebar from './components/sidebar';
import Video from './components/video';
import Feed from './components/Feed';
import CarShop from'./components/CarShop';


import store from './store';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Provider store={store}>
            <Video />
            <Sidebar />
            <Feed />
            <CarShop />
            </Provider >

        </div>
    )
  }
}

export default App;


