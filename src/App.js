import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import Header from "./common/header";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/index";
// 登录详情
import Login from "./pages/login/index";

// 这里面配置路由和store
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" component={Home} />
          <Route path="/login" exact component={Login}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
