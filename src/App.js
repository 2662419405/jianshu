import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Header from './common/header';
import { Route, BrowserRouter } from 'react-router-dom';

// 这里面配置路由和store
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
