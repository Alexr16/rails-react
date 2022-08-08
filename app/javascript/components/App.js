import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
// import { Provider } from 'react-redux';

const App = () => {
  // <Provider store={store}>
  <Router>
    <Routes>
      <Route exact path="" element={<Greeting />} />
    </Routes>
  </Router>;
  // </Provider>
};

export default App;
