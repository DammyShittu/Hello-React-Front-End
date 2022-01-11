import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  </Provider>
);

export default App;
