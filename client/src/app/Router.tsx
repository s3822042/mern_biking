import React from "react";
// -- Routing Handling --
import {Route, Switch, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import * as ROUTES from "./constants/routes";
import {AboutPage, ContactPage, HomePage, LoginPage, SignUpPage, ForgotPasswordPage} from "./pages";

function AppRouting(this: any) {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path={ROUTES.__home} component={HomePage}/>
                <Route exact path={ROUTES.__about} component={AboutPage}/>
                <Route exact path={ROUTES.__contact} component={ContactPage}/>
                <Route exact path={ROUTES.__login} component={LoginPage}/>
                <Route exact path={ROUTES.__signup} component={SignUpPage}/>
                <Route exact path={ROUTES.__forgotPassword} component={ForgotPasswordPage}/>
            </Switch>
        </AnimatePresence>
    )
}

export default AppRouting;