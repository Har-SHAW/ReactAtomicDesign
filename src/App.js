import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import HomePage from "./components/pages/HomePage/homePage";
import baseTheme from "./themes/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./components/pages/ProfilePage/profilePage";
import "./style.css";

const App = () => (
    <ThemeProvider theme={baseTheme}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/profile">
                    <ProfilePage />
                </Route>
            </Switch>
        </Router>
    </ThemeProvider>
);

export default App;
