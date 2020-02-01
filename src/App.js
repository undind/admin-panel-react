import React from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";

import Header from "./pages/Header";
import Testes from "./pages/Testes";
import Orders from "./pages/Orders";
import Services from "./pages/Services";
import Workers from "./pages/Workers";

import { ROUTES } from "./services/routes";
import history from "./history";

import "react-toastify/dist/ReactToastify.css";

const App = () => (
    <>
        <ToastContainer />
        <Header history={history} />
        <Switch>
            <Route exact path={ROUTES(0).link} component={Orders}></Route>
            <Route exact path={ROUTES(1).link} component={Services}></Route>
            <Route exact path={ROUTES(2).link} component={Workers}></Route>
            <Route exact path={ROUTES(3).link} component={Testes}></Route>
        </Switch>
    </>
);

export default App;
