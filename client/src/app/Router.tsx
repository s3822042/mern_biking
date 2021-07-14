import React from "react";
// -- Routing Handling --
import {Route, Switch, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import * as ROUTES from "./constants/routes";
import {HomePage, LoginPage, SignUpPage} from "./pages";
import {Navbar, Footer} from "./components";

function AppRouting(this: any) {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Navbar />
            <Switch location={location} key={location.pathname}>
                <Route exact path={ROUTES.__home} component={HomePage}/>
                <Route exact path={ROUTES.__login} component={LoginPage}/>
                <Route exact path={ROUTES.__signup} component={SignUpPage}/>
            </Switch>
            <Footer/>
        </AnimatePresence>
    )
}

export default AppRouting;