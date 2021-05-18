import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <React.StrictMode>
        <>
            <Auth0Provider
                domain="harshaw.us.auth0.com"
                clientId="LyazYn2UmP6wocNwYSIDOgHtU7h0wVqj"
                redirectUri={window.location.origin}
            >
                <Provider store={store}>
                    <App />
                </Provider>
            </Auth0Provider>
        </>
    </React.StrictMode>,
    document.getElementById("app")
);

module.hot.accept();
