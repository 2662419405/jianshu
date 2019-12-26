import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import Header from "./common/header";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/index";
// 登录详情
import Login from "./pages/login/index";
// 页面详情
import Detail from "./pages/detail/load";
function App() {
  return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              {/* 需要加上exact才可以整个切换页面 */}
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
  );
}

export default App;
